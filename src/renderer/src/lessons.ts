import { Lesson, formNewLesson, loadLesson } from './lessonUtils'
import { getState } from './state'
import { getNewTasksParams } from './studentProgress'
import { EnrichedTask } from './studentProgressUtils'

let currentLesson: Lesson

export interface CurrentTask {
  lesson: Lesson
  task: EnrichedTask
}

export function nextTask() {
  // Load
  getCurrentLesson()

  // Move
  currentLesson.currentTaskIndex++
  if (currentLesson.currentTaskIndex >= currentLesson.tasks.length) {
    currentLesson = formNewLesson(getNewTasksParams())
  }

  const enrichedTask = currentLesson.tasks[currentLesson.currentTaskIndex]
  enrichedTask.task.shownAt = Date.now()
}

export function getCurrentLesson(): Lesson {
  if (!currentLesson) {
    const rawLesson = getState('lesson')
    if (rawLesson) {
      currentLesson = loadLesson(rawLesson, getNewTasksParams())
    } else {
      currentLesson = formNewLesson(getNewTasksParams())
    }
  }

  return currentLesson
}

export function getCurrentTask(): CurrentTask {
  const lesson = getCurrentLesson()
  return {
    lesson,
    task: lesson.tasks[lesson.currentTaskIndex]
  }
}
