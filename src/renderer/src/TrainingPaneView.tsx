import { EnrichedLesson } from './studentProgress'
import { createRef, useEffect, useState } from 'react'

interface Props {
  enrichedLesson: EnrichedLesson
  showAnswer: boolean
  isAnswerPerfect: boolean
  onSubmit: (answer: string) => void
  onNext: () => void
}

export function TrainingPaneView({
  enrichedLesson: {
    lesson: { eng, geo }
  },
  showAnswer,
  isAnswerPerfect,
  onSubmit,
  onNext
}: Props): JSX.Element {
  const [answer, setAnswer] = useState('')
  const textareaRef = createRef<HTMLTextAreaElement>()

  const canSubmit = answer.trim() !== '';

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
      <div className="form-group mb-3">{eng}</div>
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
        {showAnswer ? (
          <div className={`alert ${isAnswerPerfect ? 'alert-success' : 'alert-info'}`}>{geo}</div>
        ) : null}
        <p>
          <input type="submit" className="btn btn-primary" value={showAnswer ? 'Next' : 'Check' } disabled={!canSubmit} />
        </p>
      </div>
    </form>
  )
}
