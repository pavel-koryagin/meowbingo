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

export interface TaskStats {
  hasEasy: boolean
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
