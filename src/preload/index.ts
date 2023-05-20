import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { readFile, writeFile } from 'node:fs/promises'
import { ElectronWrapperAPI } from './ElectronWrapperAPI'

// Custom APIs for renderer
const api: ElectronWrapperAPI = {
  getState: async () => JSON.parse(await readFile('data/state.json', 'utf-8')),
  setState: async (state) => writeFile('data/state.json', JSON.stringify(state, null, 2), 'utf-8')
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
