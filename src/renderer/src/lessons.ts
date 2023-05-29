import { Lesson, formNewLesson } from './lessonUtils'
import { getAnswers, getBucketStats, getNewTasksParams, getTaskStats } from './studentProgress'
import { Answer, getDirectionByKind, Task, TaskStats } from './studentProgressUtils'

let currentLesson: Lesson

export interface CurrentTask {
  lesson: Lesson
  task: Task
  taskStats: TaskStats | undefined
  pastAnswers: Answer[]
  bucketStats: { title: string; count: number }[]
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
    currentLesson = formNewLesson(getNewTasksParams())
  }

  return currentLesson
}

export function getCurrentTask(): CurrentTask {
  const lesson = getCurrentLesson()
  const task = lesson.tasks[lesson.currentTaskIndex]
  const direction = getDirectionByKind(task.kind)
  return {
    lesson,
    task,
    taskStats: getTaskStats(task.id, direction),
    pastAnswers: getAnswers(task.id, direction),
    bucketStats: getBucketStats()
  }
}

export function repeatCurrentTask() {
  const lesson = getCurrentLesson()
  lesson.tasks.push(lesson.tasks[lesson.currentTaskIndex])
}
