import { readFile, writeFile } from 'node:fs/promises'
import { getPronunciation } from './getPronunciation'
import { Settings, getSettings } from './getSettings'

export interface ElectronWrapperAPI {
  getSettings: () => Promise<Settings>
  getState: <T>() => Promise<T>
  setState: <T>(state: T) => Promise<void>
  getPronunciation: (sentence: string) => Promise<string | null>
}

const MEOW_STATE_FILE = process.env.MEOW_STATE_FILE ?? 'data/state.json'

// Custom APIs for renderer
export const api: ElectronWrapperAPI = {
  getSettings,
  getState: async () => JSON.parse(await readFile(MEOW_STATE_FILE, 'utf-8')),
  setState: async (state) => writeFile(MEOW_STATE_FILE, JSON.stringify(state, null, 2), 'utf-8'),
  getPronunciation
}
