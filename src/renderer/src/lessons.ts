import { Lesson } from './lessonUtils'

const lesson: Lesson = {
  currentTaskIndex: 0,
  taskIds: Array(20).fill('')
}

export function nextTask(): Lesson {
  lesson.currentTaskIndex++
  if (lesson.currentTaskIndex >= lesson.taskIds.length) {
    lesson.currentTaskIndex = 0
  }
  return lesson
}

export function getCurrentLesson(): Lesson {
  return lesson
}
