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

function startLesson() {
  currentLesson = formNewLesson(getNewTasksParams())

  // Initiate audio caching
  // do not start with the first task to avoid parallel request of the same as it is going to be requested by the UI
  // TODO: also cache words
  // TODO: cache all the available tasks (not just the current lesson) in background
  const [firstTask, ...restTasks] = currentLesson.tasks
  for (const task of [...restTasks, firstTask]) {
    window.api.cachePronunciation(task.geo)
  }
}

export function nextTask() {
  // Load
  getCurrentLesson()

  // Move
  currentLesson.currentTaskIndex++
  if (currentLesson.currentTaskIndex >= currentLesson.tasks.length) {
    startLesson()
  }

  const task = currentLesson.tasks[currentLesson.currentTaskIndex]
  task.shownAt = Date.now()
}

export function getCurrentLesson(): Lesson {
  if (!currentLesson) {
    startLesson()
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
