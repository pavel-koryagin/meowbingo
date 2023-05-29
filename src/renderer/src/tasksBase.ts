import _uniqBy from 'lodash/uniqBy'
import { Texts } from './texts'
import { getSentences, getWords } from './textUtils'
import { Task, TaskKind } from './studentProgressUtils'
import _uniq from 'lodash/uniq'

export interface TaskSentence {
  id: string
  geo: string
  eng: string
  duplicates: TaskSentence[]
}

type TaskSentencesByKey = Record<string, TaskSentence>

export function generateAllTaskSentences(
  texts: Texts,
  droppedTaskIds: string[] = []
): {
  duplicateToPrimaryIds: Record<string, string>
  allTaskSentences: TaskSentence[]
} {
  const taskSentencesByTextKey = {} as TaskSentencesByKey

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
        const id = `${taskTitle} > ${blockTitle} > sentence ${i + 1}`

        // Skip dropped tasks
        if (droppedTaskIds.includes(id)) {
          continue
        }

        // Register
        registerTaskSentence(taskSentencesByTextKey, {
          id,
          geo: geoSentences[i],
          eng: engSentences[i]
        })
      }
    }
  }

  const allTaskSentences = _uniqBy(Object.values(taskSentencesByTextKey), 'id')

  const duplicateToPrimaryIds = {} as Record<string, string>
  for (const taskSentence of allTaskSentences) {
    duplicateToPrimaryIds[taskSentence.id] = taskSentence.id
    for (const duplicate of taskSentence.duplicates) {
      duplicateToPrimaryIds[duplicate.id] = taskSentence.id
    }
  }

  return { duplicateToPrimaryIds, allTaskSentences }
}

function getSentenceKey(sentence: string): string {
  // eslint-disable-next-line prettier/prettier
  return sentence
    .replace(/[.!]$/g, '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
}

function registerTaskSentence(
  taskSentencesByTextKey: TaskSentencesByKey,
  { id, geo, eng }: Omit<TaskSentence, 'duplicates'>
) {
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
    } else if (taskSentencesByTextKey[engKey] === taskSentencesByTextKey[geoKey]) {
      // full duplicate by engKey and geoKey
      taskSentencesByTextKey[geoKey].duplicates.push(item)
    } else {
      // has both: merge engKey into geoKey
      const masterTaskSentence = taskSentencesByTextKey[geoKey]
      masterTaskSentence.duplicates = [
        ...masterTaskSentence.duplicates,
        taskSentencesByTextKey[engKey],
        ...taskSentencesByTextKey[engKey].duplicates,
        item
      ]
      taskSentencesByTextKey[engKey].duplicates = []

      // Set all pointers to master, this includes engKey
      taskSentencesByTextKey[engKey] = masterTaskSentence
      for (const duplicate of masterTaskSentence.duplicates) {
        taskSentencesByTextKey[getSentenceKey(duplicate.geo)] = masterTaskSentence
        taskSentencesByTextKey[getSentenceKey(duplicate.eng)] = masterTaskSentence
      }
    }
  } else {
    // no geoKey, but has engKey
    taskSentencesByTextKey[engKey].duplicates.push(item)
    taskSentencesByTextKey[geoKey] = taskSentencesByTextKey[engKey]
  }
}

export function makeTask({ id, geo, eng, duplicates }: TaskSentence): Task {
  const geoWords = getWords(geo)
  const engWords = getWords(eng)
  return {
    id,
    shownAt: 0,
    kind:
      geoWords.length >= 3 && Math.random() < 0.5
        ? TaskKind.arrangeInTargetLanguage
        : Math.random() < 0.5
        ? TaskKind.typeInTargetLanguage
        : TaskKind.typeInMyLanguage,
    geo,
    eng,
    geoWords,
    engWords,
    geoVariants: _uniq([geo, ...duplicates.map(({ geo }) => geo)]),
    engVariants: _uniq([eng, ...duplicates.map(({ eng }) => eng)])
  }
}
