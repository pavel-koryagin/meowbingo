import _reverse from 'lodash/reverse'
import _startCase from 'lodash/startCase'
import { AnswerResult, evaluateAnswer } from './textUtils'
import { generateAllTaskSentences } from './tasksBase'
import { texts } from './texts'
import {
  accumulateAnswerInStats,
  Answer,
  Estimation,
  extractStatsFromAnswers,
  getDirectionByKind,
  getRawTask,
  RawAnswer,
  Task,
  TaskDirection,
  TaskKind,
  TaskStats
} from './studentProgressUtils'
import { CurrentTask, getCurrentTask, nextTask, repeatCurrentTask } from './lessons'
import { getState, setState, updateState } from './state'
import { NewTasksParams } from './lessonUtils'
import { classifySentencesIntoBuckets } from './taskScheduling'

const taskIdsInThisSession: string[] = []

const { duplicateToPrimaryIds, allTaskSentences } = generateAllTaskSentences(
  texts,
  getState('droppedTaskIds')
)

const studentStats = extractStatsFromAnswers({
  duplicateToPrimaryIds,
  answers: getState('answers')
})

export function getNewTasksParams(): NewTasksParams {
  return {
    taskSentences: allTaskSentences,
    studentStats,
    droppedTaskIds: getState('droppedTaskIds'),
    taskIdsInThisSession
  }
}

export function getTaskStats(id: string, direction: TaskDirection): TaskStats | undefined {
  return studentStats[id] ? studentStats[id][direction] : undefined
}

export function getBucketStats(): { title: string; count: number }[] {
  const buckets = classifySentencesIntoBuckets(allTaskSentences, studentStats)
  return Object.entries(buckets).map(([name, sentences]) => ({
    title: _startCase(name.replace(/Bucket$/, '')),
    count: sentences.length
  }))
}

export function getAnswers(taskId: string, direction: TaskDirection): Answer[] {
  const answers = getState('answers').filter(
    ({ task }) => task.id === taskId && getDirectionByKind(task.kind) === direction
  )
  return _reverse(answers)
}

let lastAnswer: RawAnswer | undefined

export function takeNextTask(): CurrentTask {
  // Consider the last answer
  if (lastAnswer) {
    accumulateAnswerInStats(studentStats, lastAnswer)
    if (lastAnswer.estimation === 'bad' || lastAnswer.estimation === 'hard') {
      repeatCurrentTask()
    }
    lastAnswer = undefined
  }

  // Move
  nextTask()

  // Get
  const result = getCurrentTask()

  // Add to session
  taskIdsInThisSession.push(result.task.id)

  return result
}

interface AcceptAnswerParams {
  task: Task
  answer: string
  withHint: boolean
  estimation?: Estimation
}

export function acceptAnswer({
  task,
  answer,
  withHint,
  estimation
}: AcceptAnswerParams): AnswerResult {
  const { kind, geoVariants, engVariants } = task

  // Save
  if (lastAnswer) {
    throw new Error('Unpexpected case')
  }

  lastAnswer = {
    task: getRawTask(task),
    answer,
    withHint,
    estimation,
    submittedAt: Date.now()
  }
  updateState('answers', (answers) => [...answers, lastAnswer!])

  // Check the answer
  return evaluateAnswer(kind === TaskKind.typeInMyLanguage ? engVariants : geoVariants, answer)
}

export function amendEstimation(estimation?: Estimation) {
  lastAnswer!.estimation = estimation

  updateState('answers', (answers) => [
    ...answers.slice(0, -1),
    {
      ...answers[answers.length - 1],
      estimation
    }
  ])
}

export function dropTask(taskId: string) {
  const droppedTaskIds = getState('droppedTaskIds')
  if (!droppedTaskIds.includes(taskId)) {
    setState('droppedTaskIds', [...droppedTaskIds, taskId])
  }
}
