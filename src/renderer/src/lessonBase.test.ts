import { getSentences, getWords } from './lessonsBase'

describe('getSentences', () => {
  it('handles typical case', () => {
    // Act
    const result = getSentences(
      `– ვინ არის ეს? – მე ვარ კორეელი სტუდენტი! ეს არის ქართველი სტუდენტი.`
    )

    // Assert
    expect(result).toEqual([
      'ვინ არის ეს?',
      'მე ვარ კორეელი სტუდენტი!',
      'ეს არის ქართველი სტუდენტი.'
    ])
  })
})

describe('getWords', () => {
  it('handles typical case in Georgian', () => {
    // Act
    const result = getWords('მე ვარ კორეელი სტუდენტი!')

    // Assert
    expect(result).toStrictEqual(['მე', 'ვარ', 'კორეელი', 'სტუდენტი'])
  })

  it('handles typical case in English', () => {
    // Act
    const result = getWords(`I'm at the university.`)

    // Assert
    expect(result).toStrictEqual([`I'm`, 'at', 'the', 'university'])
  })
})
