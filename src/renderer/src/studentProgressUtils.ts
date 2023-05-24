export interface Task {
  id: string
  shownAt: number
  askInGeorgian: boolean
  geo: string
  eng: string
}

export interface EnrichedTask {
  task: Task
  geoAudio: string | null
  geoWords: string[]
  engWords: string[]
}

export type Estimation = 'easy' | 'hard'

export interface Answer {
  task: Task
  answer: string
  estimation?: Estimation
  submittedAt: number
}

export interface TaskStats {
  hasEasy: boolean
}

export function extractStatsFromAnswers({
  duplicateToPrimaryIds,
  answers
}: {
  duplicateToPrimaryIds: Record<string, string>
  answers: Answer[]
}): Record<string, TaskStats> {
  const result: Record<string, TaskStats> = {}
  for (const { task, estimation } of answers) {
    const taskId = duplicateToPrimaryIds[task.id]
    if (!result[taskId]) {
      result[taskId] = {
        hasEasy: false
      }
    }
    if (estimation === 'easy') {
      result[taskId].hasEasy = true
    }
  }

  return result
}
