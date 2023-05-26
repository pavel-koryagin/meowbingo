import { Task } from './studentProgressUtils'
import _sampleSize from 'lodash/sampleSize'
import { makeTask, TaskSentence } from './tasksBase'
import { Lesson, NewTasksParams } from './lessonUtils'

export const TASKS_IN_LESSON = 20

export function formRemainingTasks(
  lesson: Lesson,
  { taskSentences: allTaskSentences, ...params }: NewTasksParams
): Task[] {
  const { droppedTaskIds, taskIdsInThisSession } = params
  const amount = TASKS_IN_LESSON - lesson.tasks.length

  // Filter
  const allExcludedTaskIds = [
    ...droppedTaskIds,
    ...taskIdsInThisSession.slice(-20),
    ...lesson.tasks.map(({ id }) => id)
  ]
  const taskSentences = allTaskSentences.filter(({ id }) => !allExcludedTaskIds.includes(id))

  // Form the plan
  const pickedTaskSentences = formLessonPlan({
    ...params,
    taskSentences,
    amount
  })

  // Make tasks
  return pickedTaskSentences.map((taskSentence) => makeTask(taskSentence))
}

interface OrderedTaskSentence {
  order: number
  taskSentence: TaskSentence
}

export function formLessonPlan({
  taskSentences,
  taskStatsById,
  amount
}: NewTasksParams & { amount: number }) {
  // Make buckets with different properties
  // Hard - marked hard and not followed by at least two more goods than bads; up to 10 ordered by last bad; no pause
  const hardBucket: OrderedTaskSentence[] = []

  // Scheduled - normal cards, ordered by recommended time to review; the rest amount
  const scheduledBucket: OrderedTaskSentence[] = []

  // New - never seen; up to 5
  const newBucket: TaskSentence[] = []

  // Easy - all easy, override status with bads; don't show if shown less than 10 days ago, then show only 1 random of them
  const easyBucket: TaskSentence[] = []

  // Omitted - e.g. easy within 10 days; do not show, unless there are no other cards left
  const omittedBucket: TaskSentence[] = []

  // Classify
  for (const taskSentence of taskSentences) {
    const taskStats = taskStatsById[taskSentence.id]
    if (!taskStats) {
      // New
      newBucket.push(taskSentence)
    } else if (taskStats.hardOvercoming !== null && taskStats.hardOvercoming < 2) {
      // Hard
      hardBucket.push({ order: taskStats.lastAnsweredAt, taskSentence })
    } else if (taskStats.isEasy) {
      // Easy
      if (taskStats.lastAnsweredAt < Date.now() - 10 * 24 * 3600 * 1000) {
        easyBucket.push(taskSentence)
      } else {
        omittedBucket.push(taskSentence)
      }
    } else {
      // Scheduled
      const intervalDays = Math.pow(2, taskStats.confidence - 1)
      const desiredAt = taskStats.lastAnsweredAt + intervalDays * 24 * 3600 * 1000
      scheduledBucket.push({ order: desiredAt, taskSentence })
    }
  }

  // Pick
  let pickedTaskSentences: TaskSentence[] = []

  // Pick from hard
  pickedTaskSentences = [
    ...pickedTaskSentences,
    ..._sampleSize(hardBucket, 10).map(({ taskSentence }) => taskSentence)
  ]

  // Pick from scheduled
  pickedTaskSentences = [
    ...pickedTaskSentences,
    ..._sampleSize(scheduledBucket, amount - pickedTaskSentences.length).map(
      ({ taskSentence }) => taskSentence
    )
  ]

  // Pick from new
  pickedTaskSentences = [
    ...pickedTaskSentences,
    ..._sampleSize(newBucket, amount - pickedTaskSentences.length)
  ]
  if (pickedTaskSentences.length === amount) {
    return pickedTaskSentences
  }

  // Pick from easy
  pickedTaskSentences = [
    ...pickedTaskSentences,
    ..._sampleSize(easyBucket, amount - pickedTaskSentences.length)
  ]
  if (pickedTaskSentences.length === amount) {
    return pickedTaskSentences
  }

  // Pick from omitted
  pickedTaskSentences = [
    ...pickedTaskSentences,
    ..._sampleSize(omittedBucket, amount - pickedTaskSentences.length)
  ]

  return pickedTaskSentences
}
