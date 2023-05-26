import { AnswerResult, evaluateAnswer } from './textUtils'
import { generateAllTaskSentences } from './tasksBase'
import { texts } from './texts'
import { Task, Estimation, extractStatsFromAnswers, getRawTask } from './studentProgressUtils'
import { CurrentTask, getCurrentTask, nextTask } from './lessons'
import { getState, setState, updateState } from './state'
import { NewTasksParams } from './lessonUtils'

const taskIdsInThisSession: string[] = []

const { duplicateToPrimaryIds, allTaskSentences } = generateAllTaskSentences(
  texts,
  getState('droppedTaskIds')
)

const taskStatsById = extractStatsFromAnswers({
  duplicateToPrimaryIds,
  answers: getState('answers')
})

export function getNewTasksParams(): NewTasksParams {
  return {
    taskSentences: allTaskSentences,
    taskStatsById,
    droppedTaskIds: getState('droppedTaskIds'),
    taskIdsInThisSession
  }
}

export function takeNextTask(): CurrentTask {
  // Move
  nextTask()

  // Get
  const result = getCurrentTask()

  // Add to session
  taskIdsInThisSession.push(result.task.id)

  return result
}

interface AcceptAnswerParams {
  task: Task
  answer: string
  withHint: boolean
  estimation?: Estimation
}

export function acceptAnswer({
  task,
  answer,
  withHint,
  estimation
}: AcceptAnswerParams): AnswerResult {
  const { askInGeorgian, geoVariants, engVariants } = task

  // Save
  updateState('answers', (answers) => [
    ...answers,
    {
      task: getRawTask(task),
      answer,
      withHint,
      estimation,
      submittedAt: Date.now()
    }
  ])

  // Check the answer
  return evaluateAnswer(askInGeorgian ? engVariants : geoVariants, answer)
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
