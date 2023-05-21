export interface Lesson {
  isReverse: boolean
  geoText: string
  engText: string
  geoAudio: string | null
  geoWords: string[]
  engWords: string[]
}

export function getNextLesson(): Lesson {
  return {
    isReverse: false,
    geoText: 'მე ვიყავი სახლში',
    engText: 'I was at home',
    geoAudio: null,
    geoWords: ['მე', 'ვიყავი', 'სახლში'],
    engWords: ['I', 'was', 'at home']
  }
}

export function acceptAnswer(_answer: string): boolean /* isPerfect */ {
  // Save
  return true
}
