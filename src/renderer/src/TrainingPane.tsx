import { acceptAnswer, getNextLesson } from './studentProgress'
import { TrainingPaneView } from './TrainingPaneView'
import { useState } from 'react'

export function TrainingPane(): JSX.Element {
  const [isAnswerPerfect, setIsAnswerPerfect] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const lesson = getNextLesson()

  return (
    <TrainingPaneView
      lesson={lesson}
      showAnswer={showAnswer}
      isAnswerPerfect={isAnswerPerfect}
      onSubmit={(answer) => {
        // Accept
        const isAnswerPerfect = acceptAnswer(answer)
        setIsAnswerPerfect(isAnswerPerfect)

        // Show
        setShowAnswer(true)
      }}
    />
  )
}
