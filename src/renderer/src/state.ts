import { RawAnswer } from './studentProgressUtils'

interface AppState {
  answers: RawAnswer[]
  droppedTaskIds: string[]
}

type AppStateKey = keyof AppState

const state: AppState = await window.api.getState<AppState>()

export function getState<T extends AppStateKey>(key: T): AppState[T] {
  return state[key]
}

export function setState<T extends AppStateKey>(key: T, value: AppState[T]): void {
  state[key] = value
  window.api.setState(state)
}

export function updateState<T extends AppStateKey>(
  key: T,
  callback: (value: AppState[T]) => AppState[T]
): void {
  state[key] = callback(state[key])
  window.api.setState(state)
}
