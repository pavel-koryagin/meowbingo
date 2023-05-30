import { electronAPI } from '@electron-toolkit/preload'

export interface Settings {
  paths: {
    userData: string
  }
}

export async function getSettings(): Promise<Settings> {
  return electronAPI.ipcRenderer.invoke('getSettings')
}
