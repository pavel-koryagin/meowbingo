import { StudentStats, Task, TaskKind, TaskStats } from './studentProgressUtils'
import _sampleSize from 'lodash/sampleSize'
import { makeTask, TaskParams, TaskSentence } from './tasksBase'
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
  const pickedTaskParams = formLessonPlan({
    ...params,
    taskSentences,
    amount
  })

  // Make tasks
  return pickedTaskParams.map((taskParams) => makeTask(taskParams))
}

interface OrderedTaskParams extends TaskParams {
  order: number
}

export function formLessonPlan({
  taskSentences,
  studentStats,
  amount
}: NewTasksParams & { amount: number }) {
  const {
    hardBucket,
    scheduledTillTodayBucket,
    scheduledForFutureBucket,
    newBucket,
    easyBucket,
    omittedBucket
  } = classifySentencesIntoBuckets(taskSentences, studentStats)

  // Define pick logic
  let pickedTaskParams: TaskParams[] = []
  const pickFromOrderedBucket = (bucket: OrderedTaskParams[], limit: number) => {
    bucket.sort((a, b) => a.order - b.order)
    pickedTaskParams = [
      ...pickedTaskParams,
      ...bucket.splice(0, Math.min(limit, amount - pickedTaskParams.length))
    ]
  }

  const pickFromRandomBucket = (bucket: TaskParams[], limit: number) => {
    const picked = _sampleSize(bucket, Math.min(limit, amount - pickedTaskParams.length))
    pickedTaskParams = [...pickedTaskParams, ...picked]
    // Delete from bucket
    for (const { id, kind } of picked) {
      const index = bucket.findIndex(
        ({ id: itemId, kind: itemKind }) => itemId === id && itemKind === kind
      )
      bucket.splice(index, 1)
    }
  }

  const pickFromSequentialBucket = (bucket: TaskParams[], limit: number) => {
    pickedTaskParams = [
      ...pickedTaskParams,
      ...bucket.splice(0, Math.min(limit, amount - pickedTaskParams.length))
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

  return pickedTaskParams
}

export function getDesiredScheduledAt({ confidence, lastAnsweredAt }: TaskStats) {
  return lastAnsweredAt + getIntervalByConfidence(confidence) * 24 * 3600 * 1000
}

export function getIntervalByConfidence(confidence: number) {
  return Math.pow(2, confidence)
}

export function classifySentencesIntoBuckets(
  taskSentences: TaskSentence[],
  studentStats: StudentStats
) {
  // Make buckets with different properties
  // Hard - marked hard and not followed by at least two more goods than bads; up to 10 ordered by last bad; no pause
  const hardBucket: OrderedTaskParams[] = []

  // Scheduled - normal cards, ordered by recommended time to review; the rest amount
  const scheduledTillTodayBucket: OrderedTaskParams[] = []
  const scheduledForFutureBucket: OrderedTaskParams[] = []

  // New - never seen; up to 5
  const newBucket: TaskParams[] = []

  // Easy - all easy, override status with bads; don't show if shown less than 10 days ago, then show only 1 random of them
  const easyBucket: TaskParams[] = []

  // Omitted - e.g. easy within 10 days; do not show, unless there are no other cards left
  const omittedBucket: TaskParams[] = []

  // Classify
  for (const taskSentence of taskSentences) {
    const targetStats = studentStats[taskSentence.id]?.target
    const myStats = studentStats[taskSentence.id]?.my

    // New - show arrange first
    if (!targetStats) {
      newBucket.push({ kind: TaskKind.arrangeInTargetLanguage, ...taskSentence })
      continue
    }
    if (!myStats) {
      newBucket.push({ kind: TaskKind.typeInMyLanguage, ...taskSentence })
      continue
    }

    const processLang = (taskStats: TaskStats, baseKind: TaskKind, advancedKind: TaskKind) => {
      if (taskStats.hardOvercoming != null && taskStats.hardOvercoming < 2) {
        // Hard
        hardBucket.push({
          order: taskStats.lastAnsweredAt,
          kind: advancedKind,
          ...taskSentence
        })
      } else if (taskStats.isEasy) {
        // Easy
        if (taskStats.lastAnsweredAt < Date.now() - 10 * 24 * 3600 * 1000) {
          easyBucket.push({ kind: 'random', ...taskSentence })
        } else {
          omittedBucket.push({ kind: 'random', ...taskSentence })
        }
      } else {
        // Scheduled
        const desiredAt = getDesiredScheduledAt(taskStats)
        const kind = taskStats.confidence <= 1 ? baseKind : advancedKind
        if (desiredAt <= Date.now()) {
          scheduledTillTodayBucket.push({ order: desiredAt, kind, ...taskSentence })
        } else {
          scheduledForFutureBucket.push({ order: desiredAt, kind, ...taskSentence })
        }
      }
    }

    processLang(targetStats, TaskKind.arrangeInTargetLanguage, TaskKind.typeInTargetLanguage)
    processLang(myStats, TaskKind.typeInMyLanguage, TaskKind.typeInMyLanguage)
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
