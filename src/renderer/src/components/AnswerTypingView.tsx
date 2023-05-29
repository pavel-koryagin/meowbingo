import { createRef, useEffect, useState } from 'react'
import { QualifiedWord } from '../textUtils'
import { CurrentTask } from '../lessons'
import { TaskKind } from '../studentProgressUtils'

interface Props extends CurrentTask {
  showAnswer: boolean
  answer: string
  hint?: string[]
  qualifiedWords: QualifiedWord[]
  isAnswerPerfect: boolean
  onAnswerChange: (answer: string) => void
}

export function AnswerTypingView({
  task: { id, kind },
  showAnswer,
  answer,
  hint,
  qualifiedWords,
  isAnswerPerfect,
  onAnswerChange
}: Props): JSX.Element {
  // TODO: Move state to a widget
  const [usedHints, setUsedHints] = useState<number[]>([])
  const textareaRef = createRef<HTMLTextAreaElement>()

  // Reset on every change of the task
  useEffect(() => {
    if (usedHints.length) {
      setUsedHints([])
    }
  }, [id])

  useEffect(() => {
    if (!showAnswer) {
      textareaRef.current?.focus()
    }
  })

  return (
    <>
      <div className="form-group mb-3">
        <textarea
          className="form-control"
          value={answer}
          readOnly={showAnswer || kind === TaskKind.arrangeInTargetLanguage}
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
                      const trimmedAnswer = answer.trimEnd()
                      onAnswerChange(trimmedAnswer + (trimmedAnswer !== '' ? ' ' : '') + word)
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
                  onClick={() => {
                    setUsedHints([])
                    if (kind === TaskKind.arrangeInTargetLanguage) {
                      onAnswerChange('')
                    }
                  }}
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
      </div>
    </>
  )
}
