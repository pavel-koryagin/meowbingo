import { acceptAnswer, amendEstimation, dropTask, takeNextTask } from '../studentProgress'
import { TrainingPaneView } from './TrainingPaneView'
import { useEffect, useState } from 'react'
import _shuffle from 'lodash/shuffle'
import { getCurrentTask } from '../lessons'
import { getQualifiedWords, QualifiedWord } from '../textUtils'
import { TaskKind } from '../studentProgressUtils'

export function TrainingPane(): JSX.Element {
  const [isAnswerPerfect, setIsAnswerPerfect] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [answer, setAnswer] = useState('')

  const [currentTask, setCurrentTask] = useState(() => getCurrentTask())
  const { task } = currentTask
  const [hint, setHint] = useState<string[] | undefined>(undefined)
  const [qualifiedWords, setQualifiedWords] = useState<QualifiedWord[]>([])

  const [sound, setSound] = useState<string | null>(null)

  const [showEndLessonBanner, setShowEndLessonBanner] = useState(false)

  useEffect(() => {
    // Load sound
    window.api.getPronunciation(task.geo).then((loadedSound) => {
      if (loadedSound) {
        setSound(loadedSound)
      }
    })

    // Show hint
    if (currentTask.task.kind === TaskKind.arrangeInTargetLanguage) {
      showHint()
    }
  }, [currentTask.task.id])

  function next() {
    const nextTask = takeNextTask()
    setCurrentTask(nextTask)
    setShowAnswer(false)
    setHint(undefined)
    setAnswer('')
    setQualifiedWords([])
    setSound(null)

    if (nextTask.lesson.currentTaskIndex === 0) {
      setShowEndLessonBanner(true)
    }
  }

  function showHint() {
    const words = task.kind === TaskKind.typeInMyLanguage ? task.engWords : task.geoWords
    setHint(_shuffle(words))
  }

  if (showEndLessonBanner) {
    // TODO: Extract to a view
    return (
      <div className="mt-5 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          fill="currentColor"
          className="bi bi-patch-check-fill text-success"
          viewBox="0 0 16 16"
        >
          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
        </svg>
        <div className="mt-5">
          <button
            className="btn btn-lg btn-success"
            autoFocus
            onClick={() => setShowEndLessonBanner(false)}
          >
            Next Lesson
          </button>
        </div>
      </div>
    )
  }

  return (
    <TrainingPaneView
      currentTask={currentTask}
      sound={sound}
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
      onHint={showHint}
    />
  )
}
