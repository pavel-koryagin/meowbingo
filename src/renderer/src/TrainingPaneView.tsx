import { Lesson } from './studentProgress'
import { useState } from 'react'

interface Props {
  lesson: Lesson
  showAnswer: boolean
  isAnswerPerfect: boolean
  onSubmit: (answer: string) => void
}

export function TrainingPaneView({
  lesson: { engText, geoText },
  showAnswer,
  isAnswerPerfect,
  onSubmit
}: Props): JSX.Element {
  const [answer, setAnswer] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(answer)
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault()
          onSubmit(answer)
        }
      }}
    >
      <div className="form-group mb-3">
        {engText}
      </div>
      <div className="form-group mb-3">
        <textarea className="form-control" onChange={(e) => setAnswer(e.currentTarget.value)}>
          {answer}
        </textarea>
      </div>
      <div className="form-group mb-3">
        {showAnswer ? (
          <div className={`alert ${isAnswerPerfect ? 'alert-success' : 'alert-info'}`}>
            {geoText}
          </div>
        ) : (
          <p>
            <input type="submit" className="btn btn-primary" />
          </p>
        )}
      </div>
    </form>
  )
}
