import { acceptAnswer, amendEstimation, dropTask, takeNextTask } from './studentProgress'
import { TrainingPaneView } from './TrainingPaneView'
import { useState } from 'react'
import _shuffle from 'lodash/shuffle'

export function TrainingPane(): JSX.Element {
  const [isAnswerPerfect, setIsAnswerPerfect] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [answer, setAnswer] = useState('')

  const [enrichedTask, setEnrichedTask] = useState(takeNextTask())
  const [hint, setHint] = useState<string[] | undefined>(undefined)
  const [goodWords, setGoodWords] = useState<string[]>([])

  function next() {
    setEnrichedTask(takeNextTask())
    setShowAnswer(false)
    setHint(undefined)
    setAnswer('')
    setGoodWords([])
  }

  return (
    <TrainingPaneView
      enrichedTask={enrichedTask}
      showAnswer={showAnswer}
      answer={answer}
      hint={hint}
      goodWords={goodWords}
      isAnswerPerfect={isAnswerPerfect}
      onAnswerChange={setAnswer}
      onSubmit={(answer, estimation) => {
        // Drop
        if (estimation === 'drop') {
          dropTask(enrichedTask.task.id)
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
          const { isPerfect, goodWords: newGoodWords } = acceptAnswer(
            enrichedTask.task,
            answer,
            estimation
          )
          setIsAnswerPerfect(isPerfect)
          setGoodWords(newGoodWords)

          // Show
          setShowAnswer(true)
          return
        }

        // Next via estimation
        if (showAnswer) {
          amendEstimation(estimation)
        } else {
          acceptAnswer(enrichedTask.task, answer, estimation)
        }
        next()
      }}
      onHint={() => {
        const words = enrichedTask.task.askInGeorgian
          ? enrichedTask.engWords
          : enrichedTask.geoWords
        setHint(_shuffle(words))
      }}
    />
  )
}
