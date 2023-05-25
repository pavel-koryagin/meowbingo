import _range from 'lodash/range'
import _intersection from 'lodash/intersection'
import { formRemainingTasks } from './taskScheduling'
import { Lesson } from './lessonUtils'
import { TaskSentence } from './tasksBase'

const lesson: Lesson = {
  currentTaskIndex: 0,
  tasks: []
}

const allTaskSentences: TaskSentence[] = _range(1, 40).map((index) => ({
  id: `TS ${index}`,
  geo: `კი ${index}`,
  eng: `yes ${index}`,
  duplicates: []
}))

const bucketOf5Ids = ['TS 1', 'TS 2', 'TS 3', 'TS 4', 'TS 5']

describe('formRemainingTasks', () => {
  it('handles typical case', () => {
    // Act
    const result = formRemainingTasks(
      lesson,
      {
        allTaskSentences,
        taskStatsById: {},
        droppedTaskIds: [],
        taskIdsInThisSession: []
      },
      [
        {
          doesTaskSentenceBelong: ({ id }) => bucketOf5Ids.includes(id)
        }
      ]
    )

    // Assert
    expect(result.length).toBe(20)

    const bucketIds = _intersection(
      result.map(({ id }) => id),
      bucketOf5Ids
    )
    bucketIds.sort()
    expect(bucketIds).toStrictEqual(bucketOf5Ids)
  })

  it('limits by bucket size', () => {
    // Arrange
    const AMOUNT = 3

    // Act
    const result = formRemainingTasks(
      lesson,
      {
        allTaskSentences,
        taskStatsById: {},
        droppedTaskIds: [],
        taskIdsInThisSession: []
      },
      [
        {
          amount: AMOUNT,
          doesTaskSentenceBelong: ({ id }) => bucketOf5Ids.includes(id)
        }
      ]
    )

    // Assert
    expect(result.length).toBe(20)

    const bucketIds = _intersection(
      result.map(({ id }) => id),
      bucketOf5Ids
    )
    expect(bucketIds.length).toBe(AMOUNT)
  })

  it('does not fail when lacking', () => {
    // Act
    const result = formRemainingTasks(
      lesson,
      {
        allTaskSentences: allTaskSentences.slice(0, 15),
        taskStatsById: {},
        droppedTaskIds: [],
        taskIdsInThisSession: []
      },
      [
        {
          amount: 10,
          doesTaskSentenceBelong: ({ id }) => bucketOf5Ids.includes(id)
        }
      ]
    )

    // Assert
    expect(result.length).toBe(15)

    const bucketIds = _intersection(
      result.map(({ id }) => id),
      bucketOf5Ids
    )
    bucketIds.sort()
    expect(bucketIds).toStrictEqual(bucketOf5Ids)
  })
})
