import { electronAPI } from '@electron-toolkit/preload'

export interface Settings {
  playHtUserId?: string
  isDev: boolean
  userDataPath: string
}

let settings: Settings | undefined

export async function getSettings(): Promise<Settings> {
  if (!settings) {
    settings = (await electronAPI.ipcRenderer.invoke('getSettings')) as Settings
  }
  return settings
}
