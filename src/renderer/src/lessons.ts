import { Lesson, formNewLesson, loadLesson } from './lessonUtils'
import { getState } from './state'
import { getNewTasksParams } from './studentProgress'
import { EnrichedTask } from './studentProgressUtils'

let currentLesson: Lesson

export function nextTask(): EnrichedTask {
  // Load
  getCurrentLesson()

  currentLesson.currentTaskIndex++
  if (currentLesson.currentTaskIndex >= currentLesson.tasks.length) {
    currentLesson = formNewLesson(getNewTasksParams())
  }

  const enrichedTask = currentLesson.tasks[currentLesson.currentTaskIndex]
  enrichedTask.task.shownAt = Date.now()
  return enrichedTask
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

export function getCurrentTask(): EnrichedTask {
  const { currentTaskIndex, tasks } = getCurrentLesson()
  return tasks[currentTaskIndex]
}
