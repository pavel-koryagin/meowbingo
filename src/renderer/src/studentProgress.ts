import { AnswerResult, getWords, isAnswerPerfect } from './textUtils'
import _sample from 'lodash/sample'
import { allTasks } from './tasksBase'

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

interface Answer {
  task: Task
  answer: string
  estimation?: Estimation
  submittedAt: number
}

export interface AppState {
  answers: Answer[]
  droppedTaskIds: string[]
}

const state: AppState = await window.api.getState<AppState>()
const taskIdsInThisSession: string[] = []

export function takeNextTask(): EnrichedTask {
  // Get task ids to avoid
  const lastTaskIds = taskIdsInThisSession.slice(-20)

  // Pick task
  let task: Task
  do {
    task = _sample(allTasks)!
  } while (lastTaskIds.includes(task.id) || state.droppedTaskIds.includes(task.id))

  // Use the task
  taskIdsInThisSession.push(task.id)
  return {
    task: {
      ...task,
      shownAt: Date.now()
    },
    geoAudio: null,
    geoWords: getWords(task.geo),
    engWords: getWords(task.eng)
  }
}

export function acceptAnswer(
  task: Task,
  answer: string,
  estimation?: Estimation
): AnswerResult {
  // Save
  state.answers.push({
    task,
    answer,
    estimation,
    submittedAt: Date.now()
  })
  window.api.setState(state)

  // Check the answer
  return isAnswerPerfect(task.askInGeorgian ? task.eng : task.geo, answer)
}

export function amendEstimation(estimation?: Estimation) {
  state.answers[state.answers.length - 1].estimation = estimation
  window.api.setState(state)
}

export function dropTask(taskId: string) {
  if (!state.droppedTaskIds.includes(taskId)) {
    state.droppedTaskIds.push(taskId)
    window.api.setState(state)
  }
}
