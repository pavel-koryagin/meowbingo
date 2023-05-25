import { EnrichedLesson, formNewLesson, Lesson, loadLesson } from './lessonUtils'
import { getState } from './state'
import { getAllTaskSentences } from './studentProgress'
import { EnrichedTask } from './studentProgressUtils'

let lesson: EnrichedLesson

export function nextTask(): Lesson {
  const { lesson } = getCurrentLesson()
  lesson.currentTaskIndex++
  if (lesson.currentTaskIndex >= lesson.taskIds.length) {
    lesson.currentTaskIndex = 0
  }
  return lesson
}

export function getCurrentLesson(): EnrichedLesson {
  if (!lesson) {
    const rawLesson = getState('lesson')
    if (rawLesson) {
      lesson = loadLesson(rawLesson, getAllTaskSentences())
    } else {
      lesson = formNewLesson(getAllTaskSentences())
    }
  }

  return lesson
}

export function getCurrentTask(): EnrichedTask {
  const {
    tasks,
    lesson: { currentTaskIndex }
  } = getCurrentLesson()
  return tasks[currentTaskIndex]
}
