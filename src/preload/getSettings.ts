import { electronAPI } from '@electron-toolkit/preload'

export interface Settings {
  playHtUserId?: string
  isDev: boolean
  userDataPath: string
}

export async function getSettings(): Promise<Settings> {
  return electronAPI.ipcRenderer.invoke('getSettings')
}
