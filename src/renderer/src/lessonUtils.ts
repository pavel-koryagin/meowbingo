import { TaskSentence } from './tasksBase'

export interface Lesson {
  currentTaskIndex: number
  taskIds: string[]
}

export function formNewLesson(allTaskSentences: TaskSentence[]): Lesson {
  return {
    currentTaskIndex: 0,
    taskIds: Array(allTaskSentences.length).fill('')
  }
}
