import { texts } from './texts'
import { getSentences } from './lessonsBase'

describe('texts', () => {
  for (const { title: lessonTitle, blocks } of texts) {
    for (const { title: blockTitle, geo, eng } of blocks) {
      it(`"${lessonTitle} > ${blockTitle}" has no contradictions`, () => {
        const geoSentences = getSentences(geo)
        const engSentences = getSentences(eng)

        expect(geoSentences.length).toBe(engSentences.length)
      })
    }
  }

  // Use this to find the lines with contradictions. It will fail, you click "show diff"
  // it('debug', () => {
  //   expect(getSentences(`copyGeoTextHere`)).toEqual(getSentences(`copyEngTextHere`))
  //   expect(getList(`copyGeoTextHere`)).toEqual(getList(`copyEngTextHere`))
  // })
})
