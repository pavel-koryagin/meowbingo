import { electronAPI } from '@electron-toolkit/preload'

export interface Settings {
  isDev: boolean
  paths: {
    userData: string
  }
}

export async function getSettings(): Promise<Settings> {
  return electronAPI.ipcRenderer.invoke('getSettings')
}
