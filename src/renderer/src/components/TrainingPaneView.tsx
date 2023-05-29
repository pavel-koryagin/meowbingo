import dayjs from 'dayjs'
import { Estimation, TaskKind, TaskStats } from '../studentProgressUtils'
import { QualifiedWord } from '../textUtils'
import { getDesiredScheduledAt, getIntervalByConfidence } from '../taskScheduling'
import { CurrentTask } from '../lessons'
import { AnswerTypingView } from './AnswerTypingView'

interface Props {
  currentTask: CurrentTask
  sound: string | null
  showAnswer: boolean
  answer: string
  hint?: string[]
  qualifiedWords: QualifiedWord[]
  isAnswerPerfect: boolean
  onAnswerChange: (answer: string) => void
  onSubmit: (answer: string, button?: Estimation | 'skip' | 'drop') => void
  onHint: () => void
}

export function TrainingPaneView({
  currentTask,
  sound,
  showAnswer,
  answer,
  hint,
  qualifiedWords,
  isAnswerPerfect,
  onAnswerChange,
  onSubmit,
  onHint
}: Props): JSX.Element {
  const {
    lesson: {
      currentTaskIndex,
      tasks: { length: totalTasks }
    },
    task: { eng, geo, kind },
    taskStats,
    pastAnswers,
    bucketStats
  } = currentTask

  const hasAnswerToSubmit = answer.trim() !== ''

  function defaultAction() {
    if (showAnswer) {
      onSubmit(answer, 'good')
    } else if (hasAnswerToSubmit) {
      onSubmit(answer)
    }
  }

  const askInTargetLanguage = kind === TaskKind.typeInMyLanguage
  const showingTargetText = askInTargetLanguage || showAnswer

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        defaultAction()
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault()

          // Require an explicit click, if the answer is not estimated
          if (showAnswer && !isAnswerPerfect) {
            return
          }

          defaultAction()
        } else if (showAnswer) {
          if (e.key === 'ArrowLeft') {
            e.preventDefault()
            onSubmit(answer, 'bad')
          } else if (e.key === 'ArrowRight') {
            e.preventDefault()
            onSubmit(answer, 'good')
          }
        }
      }}
    >
      {showingTargetText && sound && <audio src={sound} autoPlay />}
      <div className="border-bottom mb-5">
        Task {currentTaskIndex + 1} / {totalTasks}
      </div>
      <div className="form-group mb-3">{askInTargetLanguage ? geo : eng}</div>
      <div className="form-group mb-3">
        <AnswerTypingView
          {...currentTask}
          showAnswer={showAnswer}
          answer={answer}
          hint={hint}
          qualifiedWords={qualifiedWords}
          isAnswerPerfect={isAnswerPerfect}
          onAnswerChange={onAnswerChange}
        />
      </div>
      <div className="form-group mb-3">
        <div className="row">
          <div className="col d-flex justify-content-start">
            {!showAnswer ? (
              <>
                <input
                  type="submit"
                  className="btn btn-primary me-2"
                  value="Check"
                  disabled={!hasAnswerToSubmit}
                />
                {kind !== TaskKind.arrangeInTargetLanguage && (
                  <input
                    type="button"
                    className="btn btn-secondary"
                    value="Hint"
                    disabled={hint !== undefined}
                    onClick={onHint}
                  />
                )}
              </>
            ) : (
              <>
                <input type="submit" className="btn btn-success me-2" value="Good" />
                <input
                  type="button"
                  className="btn btn-danger"
                  value="Bad"
                  onClick={() => onSubmit(answer, 'bad')}
                />
              </>
            )}
          </div>
          <div className="col d-flex justify-content-center">
            <input
              type="button"
              className="btn btn-outline-secondary me-2"
              value="Skip"
              disabled={showAnswer}
              onClick={() => onSubmit('', 'skip')}
            />
            <input
              type="button"
              className="btn btn-outline-danger"
              value="Drop"
              onClick={() => onSubmit('', 'drop')}
            />
          </div>
          <div className="col d-flex justify-content-end">
            <input
              type="button"
              className="btn btn-warning me-2"
              value="Hard"
              onClick={() => onSubmit(answer, 'hard')}
            />
            <input
              type="button"
              className="btn btn-success"
              value="Easy!"
              onClick={() => onSubmit(answer, 'easy')}
            />
          </div>
        </div>
      </div>
      <div className="form-group mb-3">{formatTaskStats(taskStats)}</div>
      <div className="row mb-3">
        <div className="col-6">
          <table className="table table-sm small w-auto">
            <thead>
              <tr>
                <th>Answers {pastAnswers.length}</th>
                <th>Estimation</th>
              </tr>
            </thead>
            <tbody>
              {pastAnswers.map(({ submittedAt, estimation }, index) => (
                <tr key={index}>
                  <td>{dayjs(submittedAt).format('D MMM YYYY')}</td>
                  <td>{estimation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <table className="table table-sm small w-auto ms-auto">
            <tbody>
              {bucketStats.map(({ title, count }, index) => (
                <tr key={index}>
                  <td>{title}</td>
                  <td className="text-end">{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </form>
  )
}

function formatTaskStats(taskStats: TaskStats | undefined) {
  if (!taskStats) {
    return <span className="badge text-bg-primary">new task</span>
  }

  if (taskStats.hardOvercoming !== null && taskStats.hardOvercoming < 2) {
    return <span className="badge text-bg-dark">hard task at {taskStats.hardOvercoming} level</span>
  }

  if (taskStats.isEasy) {
    return <span className="badge text-bg-success">easy task</span>
  }

  return (
    <span
      className={`badge ${
        taskStats.confidence > 2
          ? 'text-bg-success'
          : taskStats.confidence > 0
          ? 'text-bg-warning'
          : 'text-bg-light'
      }`}
    >
      {taskStats.confidence} confidence, to be shown {formatDay(getDesiredScheduledAt(taskStats))}{' '}
      (interval was {getIntervalByConfidence(taskStats.confidence)}d)
    </span>
  )
}

function formatDay(at: number) {
  return dayjs(at).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')
    ? 'today ' + dayjs(at).format('DD MMM')
    : dayjs(at).minute(0).second(0).millisecond(0).fromNow() + ' ' + dayjs(at).format('DD MMM')
}
