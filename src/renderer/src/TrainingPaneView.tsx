import { EnrichedTask, Estimation } from './studentProgress'
import { createRef, useEffect, useState } from 'react'
import { getQualifiedWords } from './textUtils'

interface Props {
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
  enrichedTask: {
    task: { id, eng, geo, askInGeorgian }
  },
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
    if (showAnswer || hasAnswerToSubmit) {
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
          defaultAction()
        }
      }}
    >
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
          ) : (
            <span className={showAnswer ? undefined : 'invisible'}>
              {qualifiedWords.map(({ withPunctuation, matchesTyped }, index) =>
                matchesTyped ? withPunctuation : <strong key={index}>{withPunctuation}</strong>
              )}
            </span>
          )}
        </div>
        <div className="row">
          <div className="col d-flex justify-content-start">
            <input
              type="submit"
              className="btn btn-primary me-2"
              value={showAnswer ? 'Next' : 'Check'}
              disabled={!hasAnswerToSubmit}
            />
            <input
              type="button"
              className="btn btn-secondary"
              value="Hint"
              disabled={showAnswer || hint !== undefined}
              onClick={onHint}
            />
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
