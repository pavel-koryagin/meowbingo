import _range from 'lodash/range'
import { formLessonPlan } from './taskScheduling'
import { TaskSentence } from './tasksBase'

const allTaskSentences: TaskSentence[] = _range(1, 40).map((index) => ({
  id: `TS ${index}`,
  geo: `კი ${index}`,
  eng: `yes ${index}`,
  duplicates: []
}))

describe('formLessonPlan', () => {
  it('handles case with all new', () => {
    // Act
    const result = formLessonPlan({
      taskSentences: allTaskSentences,
      studentStats: {},
      droppedTaskIds: [],
      taskIdsInThisSession: [],
      amount: 5
    })

    // Assert
    expect(result.length).toBe(5)
  })

  it('always includes hard', () => {
    // Act
    const result = formLessonPlan({
      taskSentences: allTaskSentences,
      studentStats: {
        'TS 1': {
          target: {
            lastAnsweredAt: 0, // Not important
            hardOvercoming: 0,
            isEasy: false,
            confidence: 0
          }
        }
      },
      droppedTaskIds: [],
      taskIdsInThisSession: [],
      amount: 5
    })

    // Assert
    expect(result.length).toBe(5)
    expect(result.map(({ id }) => id)).toContain('TS 1')
  })

  it('does not fail when lacking', () => {
    // Act
    const result = formLessonPlan({
      taskSentences: allTaskSentences.slice(0, 15),
      studentStats: {},
      droppedTaskIds: [],
      taskIdsInThisSession: [],
      amount: 20
    })

    // Assert
    expect(result.length).toBe(15)
  })
})
