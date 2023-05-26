import { makeTask, TaskSentence } from './tasksBase'
import { Task, TaskStatsById } from './studentProgressUtils'
import { formRemainingTasks, TASKS_IN_LESSON } from './taskScheduling'

export interface Lesson {
  currentTaskIndex: number
  tasks: Task[]
}

export interface RawLesson {
  currentTaskId: string
  taskIds: string[]
}

export interface NewTasksParams {
  taskSentences: TaskSentence[]
  taskStatsById: TaskStatsById
  droppedTaskIds: string[]
  taskIdsInThisSession: string[]
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
  const { taskSentences } = newTasksParams
  const lesson = defineEmptyLesson()

  // Load pre-selected tasks
  for (const taskId of taskIds) {
    const taskSentence = taskSentences.find((taskSentence) => taskSentence.id === taskId)
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
