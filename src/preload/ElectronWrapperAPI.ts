export interface AppState {
  x: 'yes'
}

export interface ElectronWrapperAPI {
  getState: () => Promise<AppState>
  setState: (state: AppState) => Promise<void>
}
