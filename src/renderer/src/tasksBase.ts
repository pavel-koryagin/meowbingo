import { texts } from './texts'
import { getSentences } from './textUtils'
import { Task } from './studentProgress'

export const allTasks: Task[] = generateAllTasks()

function generateAllTasks(): Task[] {
  const result: Task[] = []

  for (const { title: taskTitle, blocks } of texts) {
    for (const { title: blockTitle, geo, eng } of blocks) {
      const geoSentences = getSentences(geo)
      const engSentences = getSentences(eng)

      if (geoSentences.length !== engSentences.length) {
        throw new Error(
          `"${taskTitle} > ${blockTitle}" has ${geoSentences.length} Georgian sentences and ${engSentences.length} English sentences`
        )
      }

      for (let i = 0; i < geoSentences.length; i++) {
        const item: Task = {
          id: `${taskTitle} > ${blockTitle} > sentence ${i + 1}`,
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
