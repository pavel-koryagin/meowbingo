import { getList, getSentences, getWords } from './textUtils'

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
      'ეს არის ქართველი სტუდენტი'
    ])
  })
})

describe('getList', () => {
  it('handles typical case', () => {
    // Act
    const result =
      getList(`a) – ვინ არის ეს? – ეს სტუდენტია. ეს არის კორეელი სტუდენტი. კორეელი სტუდენტი თბილისშია. ქართველი სტუდენტი კორეაშია, სეულში. სეული არის აზიაში.
b) – რა არის ეს? – ეს არის წიგნი. ეს არის ქართული წიგნი.
c) მე ვარ ოთახში. მე ვარ უნივერსიტეტში. უნივერსიტეტი თბილისშია. თბილისი
საქართველოშია. მე ვარ კორეაში სეულში.
d) – სად არის ეს წიგნი? – ეს წიგნი არის თბილისში.`)

    // Assert
    expect(result).toStrictEqual([
      [
        'ვინ არის ეს?',
        'ეს სტუდენტია',
        'ეს არის კორეელი სტუდენტი',
        'კორეელი სტუდენტი თბილისშია',
        'ქართველი სტუდენტი კორეაშია, სეულში',
        'სეული არის აზიაში'
      ],
      ['რა არის ეს?', 'ეს არის წიგნი', 'ეს არის ქართული წიგნი'],
      [
        'მე ვარ ოთახში',
        'მე ვარ უნივერსიტეტში',
        'უნივერსიტეტი თბილისშია',
        'თბილისი საქართველოშია',
        'მე ვარ კორეაში სეულში'
      ],
      ['სად არის ეს წიგნი?', 'ეს წიგნი არის თბილისში']
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

  it('handles dashes', () => {
    // Act
    // Leading dash - remove
    // Hyphen in და-ძმა - keep as part of the word
    // Third dash is hyphen chat - remove
    // Fourth dash - remove
    const result = getWords(`– სად არის თქვენი და-ძმა - და – ძმა?`)

    // Assert
    expect(result).toStrictEqual(['სად', 'არის', 'თქვენი', 'და-ძმა', 'და', 'ძმა'])
  })
})
