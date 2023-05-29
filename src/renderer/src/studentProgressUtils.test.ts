import { extractStatsFromAnswers, Task, TaskKind, TaskStats } from './studentProgressUtils'

const moment1 = 100
const moment2 = 101

const sampleTask1: Task = {
  id: 'Block 1',
  shownAt: moment1,
  kind: TaskKind.typeInMyLanguage,
  geo: 'კი',
  eng: 'yes',
  geoWords: [],
  engWords: [],
  geoVariants: [],
  engVariants: []
}

const sampleTask2: Task = {
  ...sampleTask1,
  id: 'Block 2'
}

const sampleTask3: Task = {
  ...sampleTask1,
  id: 'Block 3'
}

const sampleTaskStats: TaskStats = {
  lastAnsweredAt: moment2,
  hardOvercoming: null,
  isEasy: false,
  confidence: 0
}

describe('extractStatsFromAnswers', () => {
  it('handles typical case', () => {
    // Act
    const result = extractStatsFromAnswers({
      duplicateToPrimaryIds: {
        [sampleTask1.id]: sampleTask1.id, // Simple answer
        [sampleTask2.id]: sampleTask2.id, // easy -> simple
        [sampleTask3.id]: sampleTask3.id // No answer
      },
      answers: [
        {
          task: sampleTask1,
          answer: 'კი',
          submittedAt: moment2
        },
        {
          task: sampleTask2,
          answer: 'კი',
          estimation: 'easy',
          submittedAt: moment2
        },
        {
          task: sampleTask2,
          answer: 'კი',
          // no estimation
          submittedAt: moment2
        }
      ]
    })

    // Assert
    expect(result).toStrictEqual({
      [sampleTask1.id]: {
        my: {
          ...sampleTaskStats,
          isEasy: false,
          confidence: 0
        }
      },
      [sampleTask2.id]: {
        my: {
          ...sampleTaskStats,
          isEasy: true,
          confidence: 1
        }
      }
    })
  })

  it('handles mapped', () => {
    // Act
    const result = extractStatsFromAnswers({
      duplicateToPrimaryIds: {
        [sampleTask1.id]: sampleTask2.id,
        [sampleTask2.id]: sampleTask2.id
      },
      answers: [
        {
          task: sampleTask1, // Left before task 2 existed
          answer: 'კი',
          estimation: 'easy', // Task 2 should be hasEasy, task 1 should not appear
          submittedAt: moment2
        },
        {
          task: sampleTask2,
          answer: 'კი',
          submittedAt: moment2
        }
      ]
    })

    // Assert
    expect(result).toStrictEqual({
      [sampleTask2.id]: {
        my: {
          ...sampleTaskStats,
          isEasy: true,
          confidence: 1
        }
      }
    })
  })

  it('handles no answers', () => {
    // Act
    const result = extractStatsFromAnswers({
      duplicateToPrimaryIds: { [sampleTask1.id]: sampleTask1.id },
      answers: []
    })

    // Assert
    expect(result).toStrictEqual({})
  })
})
