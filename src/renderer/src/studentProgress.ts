export interface Lesson {
  id: string
  shownAt: number
  isReverse: boolean
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

export function getNextLesson(): EnrichedLesson {
  return {
    lesson: {
      id: 'Lesson 2 > Block > sentence 1',
      shownAt: Date.now(),
      isReverse: false,
      geo: 'მე ვიყავი სახლში',
      eng: 'I was at home'
    },
    geoAudio: null,
    geoWords: ['მე', 'ვიყავი', 'სახლში'],
    engWords: ['I', 'was', 'at home']
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

  return true
}
