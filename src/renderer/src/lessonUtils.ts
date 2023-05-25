import _sampleSize from 'lodash/sampleSize'
import { makeTask, TaskSentence } from './tasksBase'
import { Task, TaskStatsById } from './studentProgressUtils'

const TASKS_IN_LESSON = 20

export interface Lesson {
  currentTaskIndex: number
  tasks: Task[]
}

export interface RawLesson {
  currentTaskId: string
  taskIds: string[]
}

export interface NewTasksParams {
  allTaskSentences: TaskSentence[]
  taskStatsById: TaskStatsById
  droppedTaskIds: string[]
  taskIdsInThisSession: string[]
}

export function formRemainingTasks(
  lesson: Lesson,
  { allTaskSentences, taskStatsById, droppedTaskIds, taskIdsInThisSession }: NewTasksParams
): Task[] {
  const amount = TASKS_IN_LESSON - lesson.tasks.length

  // Filter
  const allExcludedTaskIds = [
    ...droppedTaskIds,
    ...taskIdsInThisSession.slice(-20),
    ...lesson.tasks.map(({ id }) => id)
  ]
  const taskSentences = allTaskSentences.filter(
    ({ id }) =>
      // Not excluded
      !allExcludedTaskIds.includes(id) &&
      // Not marked easy
      !taskStatsById[id]?.hasEasy
  )

  // Pick random
  const pickedTaskSentences = _sampleSize(taskSentences, amount)

  // Make tasks
  return pickedTaskSentences.map((taskSentence) => makeTask(taskSentence))
}

function defineEmptyLesson(): Lesson {
  return {
    currentTaskIndex: 0,
    tasks: []
  }
}

export function formNewLesson(newTasksParams: NewTasksParams): Lesson {
  const lesson = defineEmptyLesson()

  // Get tasks
  return {
    ...lesson,
    tasks: formRemainingTasks(lesson, newTasksParams)
  }
}

export function loadLesson(
  { currentTaskId, taskIds }: RawLesson,
  newTasksParams: NewTasksParams
): Lesson {
  const { allTaskSentences } = newTasksParams
  const lesson = defineEmptyLesson()

  // Load pre-selected tasks
  for (const taskId of taskIds) {
    const taskSentence = allTaskSentences.find((taskSentence) => taskSentence.id === taskId)
    if (taskSentence) {
      lesson.tasks.push(makeTask(taskSentence))
    }
  }

  // Generate missing tasks
  if (lesson.tasks.length < TASKS_IN_LESSON) {
    lesson.tasks = [...lesson.tasks, ...formRemainingTasks(lesson, newTasksParams)]
  }

  // Know the current task
  lesson.currentTaskIndex = Math.max(
    0,
    lesson.tasks.findIndex(({ id }) => id === currentTaskId)
  )

  return lesson
}
