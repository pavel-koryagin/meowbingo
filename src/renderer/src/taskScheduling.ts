import { Task } from './studentProgressUtils'
import _sampleSize from 'lodash/sampleSize'
import { makeTask } from './tasksBase'
import { Lesson, NewTasksParams } from './lessonUtils'

export const TASKS_IN_LESSON = 20

export function formRemainingTasks(
  lesson: Lesson,
  { allTaskSentences, taskStatsById, droppedTaskIds, taskIdsInThisSession }: NewTasksParams
): Task[] {
  const amount = TASKS_IN_LESSON - lesson.tasks.length

  // Filter
  const allExcludedTaskIds = [
    ...droppedTaskIds,
    ...taskIdsInThisSession.slice(-20),
    ...lesson.tasks.map(({ id }) => id)
  ]
  const taskSentences = allTaskSentences.filter(
    ({ id }) =>
      // Not excluded
      !allExcludedTaskIds.includes(id) &&
      // Not marked easy
      !taskStatsById[id]?.hasEasy
  )

  // Pick random
  const pickedTaskSentences = _sampleSize(taskSentences, amount)

  // Make tasks
  return pickedTaskSentences.map((taskSentence) => makeTask(taskSentence))
}
