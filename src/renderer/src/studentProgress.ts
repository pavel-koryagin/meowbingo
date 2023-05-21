import { getSentences, getWords, isAnswerPerfect } from './lessonsBase'
import { texts } from './texts'
import _sample from 'lodash/sample'

export interface Lesson {
  id: string
  shownAt: number
  askInGeorgian: boolean
  geo: string
  eng: string
}

export interface EnrichedLesson {
  lesson: Lesson
  geoAudio: string | null
  geoWords: string[]
  engWords: string[]
}

interface Answer {
  lesson: Lesson
  answer: string
  submittedAt: number
}

export interface AppState {
  answers: Answer[]
}

const state: AppState = await window.api.getState<AppState>()

const allLessons: Lesson[] = generateAllLessons()

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

export function getNextLesson(): EnrichedLesson {
  const lesson = _sample(allLessons)
  return {
    lesson: {
      ...lesson,
      shownAt: Date.now()
    },
    geoAudio: null,
    geoWords: getWords(lesson.geo),
    engWords: getWords(lesson.eng)
  }
}

export function acceptAnswer(lesson: Lesson, answer: string): boolean /* isPerfect */ {
  // Save
  state.answers.push({
    lesson,
    answer,
    submittedAt: Date.now()
  })
  window.api.setState(state)

  // Check the answer
  return isAnswerPerfect(lesson.askInGeorgian ? lesson.eng : lesson.geo, answer)
}
