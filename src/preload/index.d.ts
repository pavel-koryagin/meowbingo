import type { ElectronAPI } from '@electron-toolkit/preload'
import type { ElectronWrapperAPI } from './ElectronWrapperAPI'

declare global {
  interface Window {
    electron: ElectronAPI
    api: ElectronWrapperAPI
  }
}
