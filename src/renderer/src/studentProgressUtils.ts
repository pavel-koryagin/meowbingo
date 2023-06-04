export enum TaskKind {
  // We use short form: 'my' (base language) and 'it' (target language)
  // TODO: Migrate gradually to 'my' and 'it' instead of 'geo' and 'eng'
  typeInMyLanguage = 'type:my',
  typeInTargetLanguage = 'type:it',
  // arrangeInMyLanguage = 'arrange:my'
  arrangeInTargetLanguage = 'arrange:it'
  // listenAndArrange = 'listen-arrange'
  // listenAndType = 'listen-type'
}

export type TaskDirection = 'target' | 'my'

export function getDirectionByKind(kind: TaskKind): TaskDirection {
  return kind === TaskKind.typeInTargetLanguage || kind === TaskKind.arrangeInTargetLanguage
    ? 'target'
    : 'my'
}

export interface RawTask {
  id: string
  shownAt: number
  kind: TaskKind
  geo: string
  eng: string
}

export interface Task extends RawTask {
  geoWords: string[]
  engWords: string[]
  geoVariants: string[]
  engVariants: string[]
}

export function getRawTask({ id, shownAt, kind, geo, eng }: Task): RawTask {
  return { id, shownAt, kind, geo, eng }
}

// hard = systematically bad, i.e. stronger than bad
export type Estimation = 'easy' | 'good' | 'bad' | 'hard'

export interface Answer {
  task: RawTask
  answer: string
  withHint?: boolean
  estimation?: Estimation
  submittedAt: number
}

export type RawAnswer = Answer

export type TaskStats = {
  lastAnsweredAt: number
  hardOvercoming: number | null // null if never marked as hard or if marked easy, otherwise hard sets it to 0, good +1, bad -1
  isEasy: boolean // true if marked as easy and hasn't been bad or hard since
  confidence: number // Add on good or easy, decrease on bad or hard; Don't go below 0
}

const defaultTaskStats: Omit<TaskStats, 'lastAnsweredAt'> = {
  hardOvercoming: null,
  isEasy: false,
  confidence: 1 // +1 on good or easy, -1 on bad or hard; Don't go below 0; start with 1 to distinguish new and failed
}

export type SentenceStats = Partial<Record<TaskDirection, TaskStats>>

export type StudentStats = Record<string, SentenceStats>

export function extractStatsFromAnswers({
  duplicateToPrimaryIds,
  answers
}: {
  duplicateToPrimaryIds: Record<string, string>
  answers: Answer[]
}): StudentStats {
  const result: StudentStats = {}

  // Assume they are sorted by submittedAt
  for (const answer of answers) {
    accumulateAnswerInStats(result, answer, duplicateToPrimaryIds[answer.task.id])
  }

  return result
}

export function accumulateAnswerInStats(
  result: StudentStats,
  { task, submittedAt, estimation }: Answer,
  overrideTaskId?: string
) {
  const taskId = overrideTaskId ?? task.id
  const lang = getDirectionByKind(task.kind)

  if (!result[taskId]) {
    result[taskId] = {}
  }
  if (!result[taskId][lang]) {
    result[taskId][lang] = { ...defaultTaskStats, lastAnsweredAt: submittedAt }
  } else {
    result[taskId][lang]!.lastAnsweredAt = submittedAt
  }
  const taskStats = result[taskId][lang]!

  // hardOvercoming
  if (estimation === 'hard') {
    taskStats.hardOvercoming = 0
  } else if (taskStats.hardOvercoming !== null) {
    if (estimation === 'good') taskStats.hardOvercoming++
    else if (estimation === 'bad') taskStats.hardOvercoming--
    else if (estimation === 'easy') taskStats.hardOvercoming = null
  }

  // isEasy
  if (estimation === 'easy') {
    taskStats.isEasy = true
  } else if (estimation === 'bad' || estimation === 'hard') {
    taskStats.isEasy = false
  }

  // confidence
  if (estimation === 'good' || estimation === 'easy') {
    taskStats.confidence++
  } else if (estimation === 'bad' || estimation === 'hard') {
    taskStats.confidence = Math.max(0, taskStats.confidence - 1)
  }
}
