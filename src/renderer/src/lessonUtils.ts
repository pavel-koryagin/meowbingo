import { TaskSentence } from './tasksBase'
import { Task, StudentStats } from './studentProgressUtils'
import { formRemainingTasks } from './taskScheduling'

export interface Lesson {
  currentTaskIndex: number
  tasks: Task[]
}

export interface NewTasksParams {
  taskSentences: TaskSentence[]
  studentStats: StudentStats
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
