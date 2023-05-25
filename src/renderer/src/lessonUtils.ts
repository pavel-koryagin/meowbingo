import _sampleSize from 'lodash/sampleSize'
import { makeTask, TaskSentence } from './tasksBase'
import { EnrichedTask } from './studentProgressUtils'

const TASKS_IN_LESSON = 20

export interface Lesson {
  currentTaskIndex: number
  taskIds: string[]
}

export interface EnrichedLesson {
  lesson: Lesson
  tasks: EnrichedTask[]
}

interface FormNewTasksParams {
  lesson: Lesson
  amount?: number
  allTaskSentences: TaskSentence[]
  excludeTaskIds?: string[]
}

export function formNewTasks({
  lesson,
  amount = TASKS_IN_LESSON,
  allTaskSentences,
  excludeTaskIds
}: FormNewTasksParams): EnrichedTask[] {
  // Filter
  const taskSentences = excludeTaskIds
    ? allTaskSentences.filter(({ id }) => !excludeTaskIds.includes(id))
    : allTaskSentences

  // Pick
  const pickedTaskSentences = _sampleSize(taskSentences, amount)

  // Make tasks
  return pickedTaskSentences.map((taskSentence) => makeTask(lesson, taskSentence))
}

export function formNewLesson(allTaskSentences: TaskSentence[]): EnrichedLesson {
  // Lesson
  const lesson: Lesson = {
    currentTaskIndex: 0,
    taskIds: []
  }

  // Tasks
  const tasks = formNewTasks({ lesson, allTaskSentences })
  lesson.taskIds = tasks.map(({ task }) => task.id)

  // Make enriched
  return {
    lesson,
    tasks
  }
}

export function loadLesson(lesson: Lesson, allTaskSentences: TaskSentence[]): EnrichedLesson {
  // Load pre-selected tasks
  let tasks = [] as EnrichedTask[]
  for (const taskId of lesson.taskIds) {
    const taskSentence = allTaskSentences.find((taskSentence) => taskSentence.id === taskId)
    if (taskSentence) {
      tasks.push(makeTask(lesson, taskSentence))
    }
  }

  // Generate new
  if (tasks.length < TASKS_IN_LESSON) {
    const excludeTaskIds = tasks.map(({ task }) => task.id)
    tasks = [
      ...tasks,
      ...formNewTasks({
        lesson,
        amount: TASKS_IN_LESSON - tasks.length,
        allTaskSentences,
        excludeTaskIds
      })
    ]
  }

  // Make enriched
  return {
    lesson,
    tasks
  }
}
