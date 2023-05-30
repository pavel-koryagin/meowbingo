import { api } from '../../preload/ElectronWrapperAPI'

const settings = await api.getSettings()

export const IS_DEV = settings.isDev
