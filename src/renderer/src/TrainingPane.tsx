import { acceptAnswer, getNextLesson } from './studentProgress'
import { TrainingPaneView } from './TrainingPaneView'
import { useState } from 'react'

export function TrainingPane(): JSX.Element {
  const [isAnswerPerfect, setIsAnswerPerfect] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const [enrichedLesson, setEnrichedLesson] = useState(getNextLesson())

  return (
    <TrainingPaneView
      enrichedLesson={enrichedLesson}
      showAnswer={showAnswer}
      isAnswerPerfect={isAnswerPerfect}
      onSubmit={(answer) => {
        // Accept
        const isAnswerPerfect = acceptAnswer(enrichedLesson.lesson, answer)
        setIsAnswerPerfect(isAnswerPerfect)

        // Show
        setShowAnswer(true)
      }}
      onNext={() => {
        setEnrichedLesson(getNextLesson())
        setShowAnswer(false)
      }}
    />
  )
}
