import { acceptAnswer, getNextLesson } from './studentProgress'
import { TrainingPaneView } from './TrainingPaneView'
import { useState } from 'react'
import _shuffle from 'lodash/shuffle'

export function TrainingPane(): JSX.Element {
  const [isAnswerPerfect, setIsAnswerPerfect] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const [enrichedLesson, setEnrichedLesson] = useState(getNextLesson())
  const [hint, setHint] = useState<string[] | undefined>(undefined)

  return (
    <TrainingPaneView
      enrichedLesson={enrichedLesson}
      showAnswer={showAnswer}
      hint={hint}
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
        setHint(undefined)
      }}
      onHint={() => {
        const words = enrichedLesson.lesson.askInGeorgian
          ? enrichedLesson.engWords
          : enrichedLesson.geoWords
        setHint(_shuffle(words))
      }}
    />
  )
}
