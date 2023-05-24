import _uniqBy from 'lodash/uniqBy'
import { texts } from './texts'
import { getSentences } from './textUtils'

interface TaskSentence {
  id: string
  geo: string
  eng: string
  duplicates: TaskSentence[]
}

const taskSentencesByTextKey = {} as Record<string, TaskSentence>
export let allTaskSentences = [] as TaskSentence[]

function generateAllTaskSentences(): void {
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
        registerTaskSentence({
          id: `${taskTitle} > ${blockTitle} > sentence ${i + 1}`,
          geo: geoSentences[i],
          eng: engSentences[i]
        })
      }
    }
  }

  allTaskSentences = _uniqBy(Object.values(taskSentencesByTextKey), 'id')
}

function getSentenceKey(sentence: string): string {
  // eslint-disable-next-line prettier/prettier
  return sentence
    .replace(/[.!]$/g, '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
}

function registerTaskSentence({ id, geo, eng }: Omit<TaskSentence, 'duplicates'>) {
  const geoKey = getSentenceKey(geo)
  const engKey = getSentenceKey(eng)

  const item: TaskSentence = {
    id,
    geo,
    eng,
    duplicates: []
  }

  // Add unique
  if (!taskSentencesByTextKey[geoKey] && !taskSentencesByTextKey[engKey]) {
    taskSentencesByTextKey[geoKey] = item
    taskSentencesByTextKey[engKey] = item
    return
  }

  // Add duplicate
  if (taskSentencesByTextKey[geoKey]) {
    if (!taskSentencesByTextKey[engKey]) {
      // no engKey, but has geoKey
      taskSentencesByTextKey[geoKey].duplicates.push(item)
      taskSentencesByTextKey[engKey] = taskSentencesByTextKey[geoKey]
    } else if (taskSentencesByTextKey[engKey] !== taskSentencesByTextKey[geoKey]) {
      // has both: merge engKey into geoKey
      const masterTaskSentence = taskSentencesByTextKey[geoKey]
      masterTaskSentence.duplicates = [
        ...masterTaskSentence.duplicates,
        taskSentencesByTextKey[engKey],
        ...taskSentencesByTextKey[engKey].duplicates,
        item
      ]
      taskSentencesByTextKey[engKey].duplicates = []
      taskSentencesByTextKey[engKey] = masterTaskSentence
    }
  } else {
    // no geoKey, but has engKey
    taskSentencesByTextKey[engKey].duplicates.push(item)
    taskSentencesByTextKey[geoKey] = taskSentencesByTextKey[engKey]
  }
}

generateAllTaskSentences()
