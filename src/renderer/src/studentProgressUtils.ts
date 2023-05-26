export interface RawTask {
  id: string
  shownAt: number
  askInGeorgian: boolean
  geo: string
  eng: string
}

export interface Task extends RawTask {
  geoAudio: string | null
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
  hasAnswers: true // Always true, because the StatsBlock is absent otherwise
  hasEasy: boolean
} & (
  | {
      lastWasHard: true
      lastHardAt: number
    }
  | {
      lastWasHard: false
      lastHardAt: null
    }
)

const defaultTaskStats: TaskStats = {
  hasAnswers: true,
  lastWasHard: false,
  lastHardAt: null,
  hasEasy: false
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
  for (const { task, submittedAt, estimation } of answers) {
    const taskId = duplicateToPrimaryIds[task.id]
    if (!result[taskId]) {
      result[taskId] = { ...defaultTaskStats }
    }
    const taskStats = result[taskId] ?? defaultTaskStats

    if (estimation === 'easy') {
      taskStats.hasEasy = true
    }
    taskStats.lastWasHard = estimation === 'hard'
    if (taskStats.lastWasHard) {
      taskStats.lastHardAt = submittedAt
    }
  }

  return result
}
