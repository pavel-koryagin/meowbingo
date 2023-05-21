import { EnrichedLesson } from './studentProgress'
import { createRef, useEffect, useState } from 'react'

interface Props {
  enrichedLesson: EnrichedLesson
  showAnswer: boolean
  hint?: string[]
  isAnswerPerfect: boolean
  onSubmit: (answer: string) => void
  onNext: () => void
  onHint: () => void
}

export function TrainingPaneView({
  enrichedLesson: {
    lesson: { eng, geo, askInGeorgian }
  },
  showAnswer,
  hint,
  isAnswerPerfect,
  onSubmit,
  onNext,
  onHint
}: Props): JSX.Element {
  const [answer, setAnswer] = useState('')
  const [usedHints, setUsedHints] = useState<number[]>([])
  const textareaRef = createRef<HTMLTextAreaElement>()

  const canSubmit = answer.trim() !== ''

  function submitAction() {
    if (!canSubmit) {
      return
    }
    if (showAnswer) {
      setAnswer('')
      onNext()
    } else {
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
        submitAction()
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault()
          submitAction()
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
          onChange={(e) => setAnswer(e.currentTarget.value)}
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
                    setAnswer(answer.trimEnd() + ' ' + word)
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
              {askInGeorgian ? eng : geo}
            </span>
          )}
        </div>
        <div className="row">
          <div className="col d-flex justify-content-start">
            <input
              type="submit"
              className="btn btn-primary me-2"
              value={showAnswer ? 'Next' : 'Check'}
              disabled={!canSubmit}
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
              onClick={() => alert('Not implemented')}
            />
            <input
              type="button"
              className="btn btn-outline-danger"
              value="Drop"
              onClick={() => alert('Not implemented')}
            />
          </div>
          <div className="col d-flex justify-content-end">
            <input
              type="button"
              className="btn btn-warning me-2"
              value="Hard"
              onClick={() => alert('Not implemented')}
            />
            <input
              type="button"
              className="btn btn-success"
              value="Easy!"
              onClick={() => alert('Not implemented')}
            />
          </div>
        </div>
      </div>
    </form>
  )
}
