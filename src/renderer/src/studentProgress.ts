import _sample from 'lodash/sample'
import _uniq from 'lodash/uniq'
import { AnswerResult, getWords, evaluateAnswer } from './textUtils'
import { generateAllTaskSentences, TaskSentence } from './tasksBase'
import { texts } from './texts'
import {
  Answer,
  EnrichedTask,
  Estimation,
  extractStatsFromAnswers,
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
  let taskSentence: TaskSentence
  let dropThis = false
  do {
    taskSentence = _sample(allTaskSentences)!
    const { id } = taskSentence

    const stats = taskStats[id]
    dropThis = lastTaskIds.includes(id) || state.droppedTaskIds.includes(id) || stats?.hasEasy
  } while (dropThis)

  // Use the task
  const { id, eng, geo, duplicates } = taskSentence
  taskIdsInThisSession.push(id)
  return {
    task: {
      id,
      shownAt: Date.now(),
      askInGeorgian: Math.random() < 0.5,
      geo,
      eng
    },
    geoAudio: null,
    geoWords: getWords(geo),
    engWords: getWords(eng),
    geoVariants: _uniq([geo, ...duplicates.map(({ geo }) => geo)]),
    engVariants: _uniq([eng, ...duplicates.map(({ eng }) => eng)])
  }
}

export function acceptAnswer(
  { task, geoVariants, engVariants }: EnrichedTask,
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
  return evaluateAnswer(task.askInGeorgian ? engVariants : geoVariants, answer)
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
