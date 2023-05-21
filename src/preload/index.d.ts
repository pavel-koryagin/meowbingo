import { ElectronAPI } from '@electron-toolkit/preload'
import { ElectronWrapperAPI } from './ElectronWrapperAPI'

declare global {
  interface Window {
    electron: ElectronAPI
    api: ElectronWrapperAPI
  }
}
