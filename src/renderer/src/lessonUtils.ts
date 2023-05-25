import _sampleSize from 'lodash/sampleSize'
import { makeTask, TaskSentence } from './tasksBase'
import { EnrichedTask } from './studentProgressUtils'

const TASKS_IN_LESSON = 20

export interface Lesson {
  currentTaskIndex: number
  tasks: EnrichedTask[]
}

export interface RawLesson {
  currentTaskId: string
  taskIds: string[]
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

function defineEmptyLesson(): Lesson {
  return {
    currentTaskIndex: 0,
    tasks: []
  }
}

export function formNewLesson(allTaskSentences: TaskSentence[]): Lesson {
  const lesson = defineEmptyLesson()

  // Get tasks
  return {
    ...lesson,
    tasks: formNewTasks({ lesson, allTaskSentences })
  }
}

export function loadLesson(
  { currentTaskId, taskIds }: RawLesson,
  allTaskSentences: TaskSentence[]
): Lesson {
  const lesson = defineEmptyLesson()

  // Load pre-selected tasks
  for (const taskId of taskIds) {
    const taskSentence = allTaskSentences.find((taskSentence) => taskSentence.id === taskId)
    if (taskSentence) {
      lesson.tasks.push(makeTask(lesson, taskSentence))
    }
  }

  // Generate missing tasks
  if (lesson.tasks.length < TASKS_IN_LESSON) {
    lesson.tasks = [
      ...lesson.tasks,
      ...formNewTasks({
        lesson,
        amount: TASKS_IN_LESSON - lesson.tasks.length,
        allTaskSentences,
        excludeTaskIds: lesson.tasks.map(({ task }) => task.id)
      })
    ]
  }

  // Know the current task
  lesson.currentTaskIndex = Math.max(
    0,
    lesson.tasks.findIndex(({ task }) => task.id === currentTaskId)
  )

  return lesson
}
