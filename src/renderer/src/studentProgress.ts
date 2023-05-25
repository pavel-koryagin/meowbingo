import { AnswerResult, getWords, isAnswerPerfect } from './textUtils'
import _sample from 'lodash/sample'
import { generateAllTaskSentences } from './tasksBase'
import { texts } from './texts'
import {
  Answer,
  EnrichedTask,
  Estimation,
  extractStatsFromAnswers,
  Task,
  TaskStats
} from './studentProgressUtils'

export interface AppState {
  answers: Answer[]
  droppedTaskIds: string[]
}

const state: AppState = await window.api.getState<AppState>()
const taskIdsInThisSession: string[] = []

const { duplicateToPrimaryIds, allTaskSentences } = generateAllTaskSentences(
  texts,
  state.droppedTaskIds
)

const taskStats: Record<string, TaskStats> = extractStatsFromAnswers({
  duplicateToPrimaryIds,
  answers: state.answers
})

export function takeNextTask(): EnrichedTask {
  // Get task ids to avoid
  const lastTaskIds = taskIdsInThisSession.slice(-20)

  // Pick task
  let task: Task
  let dropThis = false
  do {
    const { id, geo, eng } = _sample(allTaskSentences)!
    task = {
      id,
      shownAt: 0,
      askInGeorgian: Math.random() < 0.5,
      geo,
      eng
    }

    const stats = taskStats[task.id]
    dropThis =
      lastTaskIds.includes(task.id) || state.droppedTaskIds.includes(task.id) || stats?.hasEasy
  } while (dropThis)

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

export function acceptAnswer(task: Task, answer: string, estimation?: Estimation): AnswerResult {
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
