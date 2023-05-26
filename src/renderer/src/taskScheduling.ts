import { Task } from './studentProgressUtils'
import _sampleSize from 'lodash/sampleSize'
import { makeTask, TaskSentence } from './tasksBase'
import { Lesson, NewTasksParams } from './lessonUtils'

export const TASKS_IN_LESSON = 20

interface BucketGenerators {
  amount?: number
  doesTaskSentenceBelong: (
    taskSentence: TaskSentence,
    params: Omit<NewTasksParams, 'allTaskSentences'>
  ) => boolean
}

const defaultBucketGenerators: BucketGenerators[] = [
  // { // Easy
  //   doesTaskSentenceBelong: ({ id }, { taskStatsById }) => !taskStatsById[id]?.hasEasy
  // }
  // {
  //   // Hard
  //   amount: 10,
  //   doesTaskSentenceBelong: ({ id }, { taskStatsById }) => {
  //     const taskStats = taskStatsById[id]
  //     if (taskStats?.lastWasHard) {
  //       // More than an hour ago
  //       if (taskStats.lastHardAt < Date.now() - 3600 * 1000) {
  //         return true
  //       }
  //     }
  //     return false
  //   }
  // }
  // {
  //   // Hard
  //   amount: 10,
  //   doesTaskSentenceBelong: ({ id }, { taskStatsById }) => {
  //     const taskStats = taskStatsById[id]
  //     if (!taskStats) {
  //       return false
  //     }
  //     const desiredAt = Math.pow(2, taskStats.confidence - 1)
  //     if (taskStats?.lastWasHard) {
  //       // More than an hour ago
  //       if (taskStats.lastHardAt < Date.now() - 3600 * 1000) {
  //         return true
  //       }
  //     }
  //     return false
  //   }
  // }
]

export function formRemainingTasks(
  lesson: Lesson,
  { allTaskSentences, ...params }: NewTasksParams,
  // This is for test
  bucketGenerators: BucketGenerators[] = defaultBucketGenerators
): Task[] {
  const { taskStatsById, droppedTaskIds, taskIdsInThisSession } = params
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

  // Make buckets
  const buckets: TaskSentence[][] = bucketGenerators.map(() => [])
  buckets.push([])
  for (const taskSentence of taskSentences) {
    let bucketIndex = buckets.length - 1
    for (let i = 0; i < bucketGenerators.length; i++) {
      const bucketGenerator = bucketGenerators[i]
      if (bucketGenerator.doesTaskSentenceBelong(taskSentence, params)) {
        bucketIndex = i
        break
      }
    }
    buckets[bucketIndex].push(taskSentence)
  }

  // Pick random
  let pickedTaskSentences: TaskSentence[] = []
  let bucketIndex = 0
  while (pickedTaskSentences.length < amount && bucketIndex < buckets.length) {
    const bucket = buckets[bucketIndex]
    const amountInBucket = Math.min(
      amount - pickedTaskSentences.length, // Remaining places in the lesson
      bucket.length, // Available
      bucketGenerators[bucketIndex]?.amount || Infinity // Desired
    )
    pickedTaskSentences = [...pickedTaskSentences, ..._sampleSize(bucket, amountInBucket)]
    bucketIndex++
  }

  // Make tasks
  return pickedTaskSentences.map((taskSentence) => makeTask(taskSentence))
}
