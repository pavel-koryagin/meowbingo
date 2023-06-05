import { texts } from './texts'
import { getList, getSentences } from './textUtils'

function addIndexes(list: string[][]) {
  const indexes = `abcdefghijklmnopqrstuvwxyz`
  return list.map((texts, index) => [indexes[index] + ')', ...texts])
}

describe('texts', () => {
  for (const { title: taskTitle, blocks } of texts) {
    for (const { title: blockTitle, isList, geo, eng } of blocks) {
      it(`"${taskTitle} > ${blockTitle}" has no contradictions`, () => {
        const geoSentences = getSentences(geo)
        const engSentences = getSentences(eng)

        // Assert geoSentences.length === engSentences.length
        // If not, show of the actual texts for easier search
        if (geoSentences.length !== engSentences.length) {
          if (isList) {
            expect(addIndexes(getList(geo))).toEqual(addIndexes(getList(eng)))
          } else {
            expect(getSentences(geo)).toEqual(getSentences(eng))
          }
        }
      })
    }
  }
})
