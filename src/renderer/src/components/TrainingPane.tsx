import { acceptAnswer, amendEstimation, dropTask, takeNextTask } from '../studentProgress'
import { TrainingPaneView } from './TrainingPaneView'
import { useState } from 'react'
import _shuffle from 'lodash/shuffle'
import { getCurrentTask } from '../lessons'
import { getQualifiedWords, QualifiedWord } from '../textUtils'

export function TrainingPane(): JSX.Element {
  const [isAnswerPerfect, setIsAnswerPerfect] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [answer, setAnswer] = useState('')

  const [currentTask, setCurrentTask] = useState(() => getCurrentTask())
  const { task } = currentTask
  const [hint, setHint] = useState<string[] | undefined>(undefined)
  const [qualifiedWords, setQualifiedWords] = useState<QualifiedWord[]>([])

  function next() {
    setCurrentTask(takeNextTask())
    setShowAnswer(false)
    setHint(undefined)
    setAnswer('')
    setQualifiedWords([])
  }

  return (
    <TrainingPaneView
      {...currentTask}
      showAnswer={showAnswer}
      answer={answer}
      hint={hint}
      qualifiedWords={qualifiedWords}
      isAnswerPerfect={isAnswerPerfect}
      onAnswerChange={setAnswer}
      onSubmit={(answer, estimation) => {
        // Drop
        if (estimation === 'drop') {
          dropTask(task.id)
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
          const { isPerfect, text } = acceptAnswer({
            task,
            answer,
            withHint: hint !== undefined,
            estimation
          })
          setIsAnswerPerfect(isPerfect)
          setQualifiedWords(getQualifiedWords(text, answer))

          // Show
          setShowAnswer(true)
          return
        }

        // Next via estimation
        if (showAnswer) {
          amendEstimation(estimation)
        } else {
          acceptAnswer({ task, answer, withHint: hint !== undefined, estimation })
        }
        next()
      }}
      onHint={() => {
        const words = task.askInGeorgian ? task.engWords : task.geoWords
        setHint(_shuffle(words))
      }}
    />
  )
}
