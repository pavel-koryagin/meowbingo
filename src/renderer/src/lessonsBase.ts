import { texts } from './texts'
import { getSentences } from './lessonParsers'
import { Lesson } from './studentProgress'

export const allLessons: Lesson[] = generateAllLessons()

function generateAllLessons(): Lesson[] {
  const result: Lesson[] = []

  for (const { title: lessonTitle, blocks } of texts) {
    for (const { title: blockTitle, geo, eng } of blocks) {
      const geoSentences = getSentences(geo)
      const engSentences = getSentences(eng)

      if (geoSentences.length !== engSentences.length) {
        throw new Error(
          `"${lessonTitle} > ${blockTitle}" has ${geoSentences.length} Georgian sentences and ${engSentences.length} English sentences`
        )
      }

      for (let i = 0; i < geoSentences.length; i++) {
        const item: Lesson = {
          id: `${lessonTitle} > ${blockTitle} > sentence ${i + 1}`,
          shownAt: 0,
          askInGeorgian: true,
          geo: geoSentences[i],
          eng: engSentences[i]
        }
        result.push(item)
        result.push({
          ...item,
          askInGeorgian: false
        })
      }
    }
  }

  return result
}
