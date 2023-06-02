import { generateAllTaskSentences } from './tasksBase'
import { Texts } from './texts'

type Block = Texts[number]['blocks'][number]

function makeSampleTexts(...blocks: Omit<Block, 'title'>[]): Texts {
  return [
    {
      title: 'Lesson 1',
      blocks: blocks.map((block, i) => ({
        title: `Block ${i + 1}`,
        ...block
      }))
    }
  ]
}

describe('generateAllTaskSentences', () => {
  it('handles typical case', () => {
    // Act
    const result = generateAllTaskSentences(
      makeSampleTexts({
        geo: 'მე ვარ უნივერსიტეტში',
        eng: "I'm at the university"
      })
    )

    // Assert
    expect(result).toStrictEqual({
      allTaskSentences: [
        {
          id: 'Lesson 1 > Block 1 > sentence 1',
          eng: "I'm at the university",
          geo: 'მე ვარ უნივერსიტეტში',
          duplicates: []
        }
      ],
      duplicateToPrimaryIds: {
        'Lesson 1 > Block 1 > sentence 1': 'Lesson 1 > Block 1 > sentence 1'
      }
    })
  })

  it('handles English synonym', () => {
    // Act
    const result = generateAllTaskSentences(
      makeSampleTexts(
        {
          geo: 'მე ვარ უნივერსიტეტში',
          eng: "I'm at the university"
        },
        {
          geo: 'მე ვარ უნივერსიტეტში',
          eng: 'I am at the university' // Different spelling
        }
      )
    )

    // Assert
    expect(result).toStrictEqual({
      allTaskSentences: [
        {
          id: 'Lesson 1 > Block 1 > sentence 1',
          geo: 'მე ვარ უნივერსიტეტში',
          eng: "I'm at the university",
          duplicates: [
            {
              id: 'Lesson 1 > Block 2 > sentence 1',
              geo: 'მე ვარ უნივერსიტეტში',
              eng: 'I am at the university',
              duplicates: []
            }
          ]
        }
      ],
      duplicateToPrimaryIds: {
        'Lesson 1 > Block 1 > sentence 1': 'Lesson 1 > Block 1 > sentence 1',
        'Lesson 1 > Block 2 > sentence 1': 'Lesson 1 > Block 1 > sentence 1'
      }
    })
  })

  it('handles Georgian synonym', () => {
    // Act
    const result = generateAllTaskSentences(
      makeSampleTexts(
        {
          geo: 'მე ვარ უნივერსიტეტში',
          eng: "I'm at the university"
        },
        {
          geo: 'მე უნივერსიტეტში ვარ', // Different syntax
          eng: "I'm at the university"
        }
      )
    )

    // Assert
    expect(result).toStrictEqual({
      allTaskSentences: [
        {
          id: 'Lesson 1 > Block 1 > sentence 1',
          geo: 'მე ვარ უნივერსიტეტში',
          eng: "I'm at the university",
          duplicates: [
            {
              id: 'Lesson 1 > Block 2 > sentence 1',
              geo: 'მე უნივერსიტეტში ვარ',
              eng: "I'm at the university",
              duplicates: []
            }
          ]
        }
      ],
      duplicateToPrimaryIds: {
        'Lesson 1 > Block 1 > sentence 1': 'Lesson 1 > Block 1 > sentence 1',
        'Lesson 1 > Block 2 > sentence 1': 'Lesson 1 > Block 1 > sentence 1'
      }
    })
  })

  it('handles full duplicate', () => {
    // Act
    const result = generateAllTaskSentences(
      makeSampleTexts(
        {
          geo: 'მე ვარ უნივერსიტეტში',
          eng: "I'm at the university"
        },
        {
          geo: 'მე ვარ უნივერსიტეტში',
          eng: "I'm at the university"
        }
      )
    )

    // Assert
    expect(result).toStrictEqual({
      allTaskSentences: [
        {
          id: 'Lesson 1 > Block 1 > sentence 1',
          geo: 'მე ვარ უნივერსიტეტში',
          eng: "I'm at the university",
          duplicates: [
            {
              id: 'Lesson 1 > Block 2 > sentence 1',
              geo: 'მე ვარ უნივერსიტეტში',
              eng: "I'm at the university",
              duplicates: []
            }
          ]
        }
      ],
      duplicateToPrimaryIds: {
        'Lesson 1 > Block 1 > sentence 1': 'Lesson 1 > Block 1 > sentence 1',
        'Lesson 1 > Block 2 > sentence 1': 'Lesson 1 > Block 1 > sentence 1'
      }
    })
  })

  it('merges two duplicate families', () => {
    // Arrange
    const blocks: Parameters<typeof makeSampleTexts> = [
      {
        geo: 'მე ვარ უნივერსიტეტში',
        eng: "I'm at the university"
      },
      {
        // Both are synonyms
        geo: 'მე უნივერსიტეტში ვარ',
        eng: 'I am at the university'
      }
    ]

    // Act
    const result = generateAllTaskSentences(
      makeSampleTexts(...blocks, {
        geo: blocks[0].geo, // geo from first
        eng: blocks[1].eng // eng from second
      })
    )

    // Assert
    expect(result).toStrictEqual({
      allTaskSentences: [
        {
          id: 'Lesson 1 > Block 1 > sentence 1',
          geo: 'მე ვარ უნივერსიტეტში',
          eng: "I'm at the university",
          duplicates: [
            {
              id: 'Lesson 1 > Block 2 > sentence 1',
              geo: 'მე უნივერსიტეტში ვარ',
              eng: 'I am at the university',
              duplicates: []
            },
            {
              id: 'Lesson 1 > Block 3 > sentence 1',
              geo: 'მე ვარ უნივერსიტეტში',
              eng: 'I am at the university',
              duplicates: []
            }
          ]
        }
      ],
      duplicateToPrimaryIds: {
        'Lesson 1 > Block 1 > sentence 1': 'Lesson 1 > Block 1 > sentence 1',
        'Lesson 1 > Block 2 > sentence 1': 'Lesson 1 > Block 1 > sentence 1',
        'Lesson 1 > Block 3 > sentence 1': 'Lesson 1 > Block 1 > sentence 1'
      }
    })
  })

  it('skips dropped lessons', () => {
    // Act
    const result = generateAllTaskSentences(
      makeSampleTexts(
        {
          // This block is marked for dropping
          geo: 'მე ვარ უნივერსიტეტში',
          eng: "I'm at the university"
        },
        {
          geo: 'მე ვარ უნივერსიტეტში', // Same as first, so we test that it is dropped before merging
          eng: 'I am at the university'
        }
      ),
      ['Lesson 1 > Block 1 > sentence 1']
    )

    // Assert
    expect(result).toStrictEqual({
      allTaskSentences: [
        {
          id: 'Lesson 1 > Block 2 > sentence 1',
          geo: 'მე ვარ უნივერსიტეტში',
          eng: 'I am at the university',
          duplicates: []
        }
      ],
      duplicateToPrimaryIds: {
        'Lesson 1 > Block 2 > sentence 1': 'Lesson 1 > Block 2 > sentence 1'
      }
    })
  })
})
