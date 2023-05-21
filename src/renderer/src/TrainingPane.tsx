import { acceptAnswer, amendEstimation, dropLesson, takeNextLesson } from './studentProgress'
import { TrainingPaneView } from './TrainingPaneView'
import { useState } from 'react'
import _shuffle from 'lodash/shuffle'

export function TrainingPane(): JSX.Element {
  const [isAnswerPerfect, setIsAnswerPerfect] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [answer, setAnswer] = useState('')

  const [enrichedLesson, setEnrichedLesson] = useState(takeNextLesson())
  const [hint, setHint] = useState<string[] | undefined>(undefined)

  function next() {
    setEnrichedLesson(takeNextLesson())
    setShowAnswer(false)
    setHint(undefined)
    setAnswer('')
  }

  return (
    <TrainingPaneView
      enrichedLesson={enrichedLesson}
      showAnswer={showAnswer}
      answer={answer}
      hint={hint}
      isAnswerPerfect={isAnswerPerfect}
      onAnswerChange={setAnswer}
      onSubmit={(answer, estimation) => {
        // Drop
        if (estimation === 'drop') {
          dropLesson(enrichedLesson.lesson.id)
          next()
          return
        }

        // Skip
        if (estimation === 'skip') {
          next()
          return
        }

        // Accept
        if (estimation === undefined && !showAnswer) {
          const isAnswerPerfect = acceptAnswer(enrichedLesson.lesson, answer, estimation)
          setIsAnswerPerfect(isAnswerPerfect)

          // Show
          setShowAnswer(true)
          return
        }

        // Next via estimation
        if (showAnswer) {
          amendEstimation(estimation)
        } else {
          acceptAnswer(enrichedLesson.lesson, answer, estimation)
        }
        next()
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
