import _sample from 'lodash/sample'
import _uniq from 'lodash/uniq'
import { AnswerResult, getWords, evaluateAnswer } from './textUtils'
import { generateAllTaskSentences, TaskSentence } from './tasksBase'
import { texts } from './texts'
import {
  EnrichedTask,
  Estimation,
  extractStatsFromAnswers,
  TaskStats
} from './studentProgressUtils'
import { nextTask } from './lessons'
import { getState, setState, updateState } from './state'

const taskIdsInThisSession: string[] = []

const { duplicateToPrimaryIds, allTaskSentences } = generateAllTaskSentences(
  texts,
  getState('droppedTaskIds')
)

const taskStats: Record<string, TaskStats> = extractStatsFromAnswers({
  duplicateToPrimaryIds,
  answers: getState('answers')
})

export function takeNextTask(): EnrichedTask {
  const droppedTaskIds = getState('droppedTaskIds')

  // Get lesson
  const lesson = nextTask()

  // Get task ids to avoid
  const lastTaskIds = taskIdsInThisSession.slice(-20)

  // Pick task
  let taskSentence: TaskSentence
  let dropThis = false
  do {
    taskSentence = _sample(allTaskSentences)!
    const { id } = taskSentence

    const stats = taskStats[id]
    dropThis = lastTaskIds.includes(id) || droppedTaskIds.includes(id) || stats?.hasEasy
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
    lesson,
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
  updateState('answers', (answers) => [
    ...answers,
    {
      task,
      answer,
      estimation,
      submittedAt: Date.now()
    }
  ])

  // Check the answer
  return evaluateAnswer(task.askInGeorgian ? engVariants : geoVariants, answer)
}

export function amendEstimation(estimation?: Estimation) {
  updateState('answers', (answers) => [
    ...answers.slice(0, -1),
    {
      ...answers[answers.length - 1],
      estimation
    }
  ])
}

export function dropTask(taskId: string) {
  const droppedTaskIds = getState('droppedTaskIds')
  if (!droppedTaskIds.includes(taskId)) {
    setState('droppedTaskIds', [...droppedTaskIds, taskId])
  }
}
