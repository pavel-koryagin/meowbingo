import { cachePronunciation, getPronunciation } from './getPronunciation'
import { Settings, getSettings } from './getSettings'
import { getState, setState } from './state'

export interface ElectronWrapperAPI {
  getSettings: () => Promise<Settings>
  getState: <T>() => Promise<T>
  setState: <T>(state: T) => Promise<void>
  getPronunciation: (sentence: string) => Promise<string | null>
  cachePronunciation: (sentence: string) => void
}

// Custom APIs for renderer
export const api: ElectronWrapperAPI = {
  getSettings,
  getState,
  setState,
  getPronunciation,
  cachePronunciation
}
