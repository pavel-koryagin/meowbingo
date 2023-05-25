import { EnrichedTask, Estimation } from '../studentProgressUtils'
import { createRef, useEffect, useState } from 'react'
import { getQualifiedWords } from '../textUtils'
import { Lesson } from '../lessonUtils'

interface Props {
  lesson: Lesson
  enrichedTask: EnrichedTask
  showAnswer: boolean
  answer: string
  hint?: string[]
  goodWords: string[]
  isAnswerPerfect: boolean
  onAnswerChange: (answer: string) => void
  onSubmit: (answer: string, button?: Estimation | 'skip' | 'drop') => void
  onHint: () => void
}

export function TrainingPaneView({
  lesson: {
    currentTaskIndex,
    tasks: { length: totalTasks }
  },
  enrichedTask: { id, eng, geo, askInGeorgian },
  showAnswer,
  answer,
  hint,
  isAnswerPerfect,
  onAnswerChange,
  onSubmit,
  onHint
}: Props): JSX.Element {
  // TODO: Move state to TrainingPane or to a widget
  const [usedHints, setUsedHints] = useState<number[]>([])
  const textareaRef = createRef<HTMLTextAreaElement>()

  // Reset on every change of the task
  useEffect(() => {
    if (usedHints.length) {
      setUsedHints([])
    }
  }, [id])

  const hasAnswerToSubmit = answer.trim() !== ''

  const expectedAnswer = askInGeorgian ? eng : geo
  const qualifiedWords = getQualifiedWords(expectedAnswer, answer)

  function defaultAction() {
    if (showAnswer) {
      onSubmit(answer, 'good')
    } else if (hasAnswerToSubmit) {
      onSubmit(answer)
    }
  }

  useEffect(() => {
    if (!showAnswer) {
      textareaRef.current?.focus()
    }
  })

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
      <div className="border-bottom mb-5">
        Task {currentTaskIndex + 1} / {totalTasks}
      </div>
      <div className="form-group mb-3">{askInGeorgian ? geo : eng}</div>
      <div className="form-group mb-3">
        <textarea
          className="form-control"
          value={answer}
          readOnly={showAnswer}
          ref={textareaRef}
          onChange={(e) => onAnswerChange(e.currentTarget.value)}
        />
      </div>
      <div className="form-group mb-3">
        <div
          className={`alert ${
            !showAnswer ? 'alert-info' : isAnswerPerfect ? 'alert-success' : 'alert-warning'
          }`}
        >
          {hint && !showAnswer ? (
            hint.length === 1 ? (
              // Single word hint; user presses "Check" if no idea
              <span>One word</span>
            ) : (
              // Regular hint
              <>
                {hint.map((word, index) => (
                  <span
                    key={index}
                    className={`me-3 ${usedHints.includes(index) ? 'opacity-50' : ''}`}
                    style={{
                      cursor: 'pointer',
                      borderBottom: '1px dashed var(--bs-info)'
                    }}
                    onClick={() => {
                      onAnswerChange(answer.trimEnd() + ' ' + word)
                      setUsedHints([...usedHints, index])
                    }}
                  >
                    {word}
                  </span>
                ))}
                <span
                  className={`btn btn-sm btn-outline-dark align-baseline ${
                    usedHints.length ? 'visible' : 'invisible'
                  }`}
                  style={{ margin: '-5px 0' }}
                  onClick={() => setUsedHints([])}
                >
                  ×
                </span>
              </>
            )
          ) : (
            <span className={showAnswer ? undefined : 'invisible'}>
              <span className={`${isAnswerPerfect ? '' : 'invisible'} me-2`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </span>
              {qualifiedWords.map(({ withPunctuation, matchesTyped }, index) =>
                matchesTyped ? withPunctuation : <strong key={index}>{withPunctuation}</strong>
              )}
            </span>
          )}
        </div>
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
                <input
                  type="button"
                  className="btn btn-secondary"
                  value="Hint"
                  disabled={hint !== undefined}
                  onClick={onHint}
                />
              </>
            ) : (
              <>
                <input type="submit" className="btn btn-success me-2" value="Good" />
                <input
                  type="button"
                  className="btn btn-danger"
                  value="Bad"
                  disabled={showAnswer || hint !== undefined}
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
    </form>
  )
}
