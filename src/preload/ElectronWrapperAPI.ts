export interface ElectronWrapperAPI {
  getState: <T>() => Promise<T>
  setState: <T>(state: T) => Promise<void>
  getPronunciation: (sentence: string) => Promise<string | null>
}
