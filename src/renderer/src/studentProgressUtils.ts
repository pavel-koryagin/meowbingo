export interface RawTask {
  id: string
  shownAt: number
  askInGeorgian: boolean
  geo: string
  eng: string
}

export interface Task extends RawTask {
  geoWords: string[]
  engWords: string[]
  geoVariants: string[]
  engVariants: string[]
}

export function getRawTask({ id, shownAt, askInGeorgian, geo, eng }: Task): RawTask {
  return { id, shownAt, askInGeorgian, geo, eng }
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
  confidence: 0 // +1 on good or easy, -1 on bad or hard; Don't go below 0
}

export type TaskStatsById = Record<string, TaskStats>

export function extractStatsFromAnswers({
  duplicateToPrimaryIds,
  answers
}: {
  duplicateToPrimaryIds: Record<string, string>
  answers: Answer[]
}): TaskStatsById {
  const result: TaskStatsById = {}

  // Assume they are sorted by submittedAt
  for (const answer of answers) {
    accumulateAnswerInStats(result, answer, duplicateToPrimaryIds[answer.task.id])
  }

  return result
}

export function accumulateAnswerInStats(
  result: TaskStatsById,
  { task, submittedAt, estimation }: Answer,
  overrideTaskId?: string
) {
  const taskId = overrideTaskId ?? task.id
  if (!result[taskId]) {
    result[taskId] = { ...defaultTaskStats, lastAnsweredAt: submittedAt }
  } else {
    result[taskId].lastAnsweredAt = submittedAt
  }
  const taskStats = result[taskId]

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
