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

export type Estimation = 'easy' | 'hard'

interface Answer {
  lesson: Lesson
  answer: string
  estimation?: Estimation
  submittedAt: number
}

export interface AppState {
  answers: Answer[]
  droppedLessonIds: string[]
}

const state: AppState = await window.api.getState<AppState>()
const lessonIdsInThisSession: string[] = []

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

export function takeNextLesson(): EnrichedLesson {
  // Get lesson ids to avoid
  const lastLessonIds = lessonIdsInThisSession.slice(-20)

  // Pick lesson
  let lesson: Lesson
  do {
    lesson = _sample(allLessons)!
  } while (lastLessonIds.includes(lesson.id))

  // Use the lesson
  lessonIdsInThisSession.push(lesson.id)
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

export function acceptAnswer(
  lesson: Lesson,
  answer: string,
  estimation?: Estimation
): boolean /* isPerfect */ {
  // Save
  state.answers.push({
    lesson,
    answer,
    estimation,
    submittedAt: Date.now()
  })
  window.api.setState(state)

  // Check the answer
  return isAnswerPerfect(lesson.askInGeorgian ? lesson.eng : lesson.geo, answer)
}

export function amendEstimation(estimation?: Estimation) {
  state.answers[state.answers.length - 1].estimation = estimation
  window.api.setState(state)
}

export function dropLesson(lessonId: string) {
  if (!state.droppedLessonIds.includes(lessonId)) {
    state.droppedLessonIds.push(lessonId)
    window.api.setState(state)
  }
}
