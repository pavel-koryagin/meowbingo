import { Lesson, formNewLesson, loadLesson } from './lessonUtils'
import { getState } from './state'
import { getNewTasksParams, getTaskStats } from './studentProgress'
import { Task, TaskStats } from './studentProgressUtils'

let currentLesson: Lesson

export interface CurrentTask {
  lesson: Lesson
  task: Task
  taskStats: TaskStats | undefined
}

export function nextTask() {
  // Load
  getCurrentLesson()

  // Move
  currentLesson.currentTaskIndex++
  if (currentLesson.currentTaskIndex >= currentLesson.tasks.length) {
    currentLesson = formNewLesson(getNewTasksParams())
  }

  const task = currentLesson.tasks[currentLesson.currentTaskIndex]
  task.shownAt = Date.now()
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
  const task = lesson.tasks[lesson.currentTaskIndex]
  return {
    lesson,
    task,
    taskStats: getTaskStats(task.id)
  }
}
