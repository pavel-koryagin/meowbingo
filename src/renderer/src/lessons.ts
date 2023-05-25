import { Lesson, formNewLesson, loadLesson } from './lessonUtils'
import { getState } from './state'
import { getAllTaskSentences } from './studentProgress'
import { EnrichedTask } from './studentProgressUtils'

let currentLesson: Lesson

export function nextTask(): Lesson {
  // Load
  getCurrentLesson()

  currentLesson.currentTaskIndex++
  if (currentLesson.currentTaskIndex >= currentLesson.tasks.length) {
    currentLesson = formNewLesson(getAllTaskSentences())
  }
  return currentLesson
}

export function getCurrentLesson(): Lesson {
  if (!currentLesson) {
    const rawLesson = getState('lesson')
    if (rawLesson) {
      currentLesson = loadLesson(rawLesson, getAllTaskSentences())
    } else {
      currentLesson = formNewLesson(getAllTaskSentences())
    }
  }

  return currentLesson
}

export function getCurrentTask(): EnrichedTask {
  const { currentTaskIndex, tasks } = getCurrentLesson()
  return tasks[currentTaskIndex]
}
