import { AnswerResult, evaluateAnswer } from './textUtils'
import { generateAllTaskSentences } from './tasksBase'
import { texts } from './texts'
import { EnrichedTask, Estimation, extractStatsFromAnswers } from './studentProgressUtils'
import { getCurrentLesson, nextTask } from './lessons'
import { getState, setState, updateState } from './state'
import { Lesson, NewTasksParams } from './lessonUtils'

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
    allTaskSentences,
    taskStatsById,
    droppedTaskIds: getState('droppedTaskIds'),
    taskIdsInThisSession
  }
}

export function takeNextTask(): [Lesson, EnrichedTask] {
  const enrichedTask = nextTask()
  taskIdsInThisSession.push(enrichedTask.task.id)
  return [getCurrentLesson(), enrichedTask]
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
