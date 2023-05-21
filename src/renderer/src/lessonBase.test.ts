import { getSentences } from './lessonsBase'

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
