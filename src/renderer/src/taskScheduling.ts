import { Task, TaskStats, TaskStatsById } from './studentProgressUtils'
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
  const {
    hardBucket,
    scheduledTillTodayBucket,
    scheduledForFutureBucket,
    newBucket,
    easyBucket,
    omittedBucket
  } = classifySentencesIntoBuckets(taskSentences, taskStatsById)

  // Define pick logic
  let pickedTaskSentences: TaskSentence[] = []
  const pickFromOrderedBucket = (bucket: OrderedTaskSentence[], limit: number) => {
    bucket.sort((a, b) => a.order - b.order)
    pickedTaskSentences = [
      ...pickedTaskSentences,
      ...bucket
        .splice(0, Math.min(limit, amount - pickedTaskSentences.length))
        .map(({ taskSentence }) => taskSentence)
    ]
  }

  const pickFromRandomBucket = (bucket: TaskSentence[], limit: number) => {
    const picked = _sampleSize(bucket, Math.min(limit, amount - pickedTaskSentences.length))
    pickedTaskSentences = [...pickedTaskSentences, ...picked]
    // Delete from bucket
    for (const { id } of picked) {
      const index = bucket.findIndex(({ id: taskId }) => taskId === id)
      bucket.splice(index, 1)
    }
  }

  const pickFromSequentialBucket = (bucket: TaskSentence[], limit: number) => {
    pickedTaskSentences = [
      ...pickedTaskSentences,
      ...bucket.splice(0, Math.min(limit, amount - pickedTaskSentences.length))
    ]
  }

  // Pick planned part
  pickFromOrderedBucket(hardBucket, 10)
  pickFromOrderedBucket(
    scheduledTillTodayBucket,
    newBucket.length === 0 || hardBucket.length ? 10 : 5
  )
  pickFromSequentialBucket(newBucket, scheduledTillTodayBucket.length > 5 ? 3 : 5)
  pickFromRandomBucket(easyBucket, 1)

  // Fill the capacity
  pickFromSequentialBucket(newBucket, 10)
  pickFromOrderedBucket(scheduledForFutureBucket, amount /* no limit */)
  pickFromRandomBucket(easyBucket, amount /* no limit */) // Again
  pickFromSequentialBucket(newBucket, amount /* no limit */)
  pickFromRandomBucket(omittedBucket, amount /* no limit */)

  return pickedTaskSentences
}

export function getDesiredScheduledAt({ confidence, lastAnsweredAt }: TaskStats) {
  return lastAnsweredAt + getIntervalByConfidence(confidence) * 24 * 3600 * 1000
}

export function getIntervalByConfidence(confidence: number) {
  return Math.pow(2, confidence)
}

export function classifySentencesIntoBuckets(
  taskSentences: TaskSentence[],
  taskStatsById: TaskStatsById
) {
  // Make buckets with different properties
  // Hard - marked hard and not followed by at least two more goods than bads; up to 10 ordered by last bad; no pause
  const hardBucket: OrderedTaskSentence[] = []

  // Scheduled - normal cards, ordered by recommended time to review; the rest amount
  const scheduledTillTodayBucket: OrderedTaskSentence[] = []
  const scheduledForFutureBucket: OrderedTaskSentence[] = []

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
      const desiredAt = getDesiredScheduledAt(taskStats)
      if (desiredAt <= Date.now()) {
        scheduledTillTodayBucket.push({ order: desiredAt, taskSentence })
      } else {
        scheduledForFutureBucket.push({ order: desiredAt, taskSentence })
      }
    }
  }
  return {
    hardBucket,
    scheduledTillTodayBucket,
    scheduledForFutureBucket,
    newBucket,
    easyBucket,
    omittedBucket
  }
}
