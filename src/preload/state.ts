import { readFile, writeFile } from 'node:fs/promises'
import { getSettings } from './getSettings'

let stateFilePath: string | undefined

async function getStateFilePath(): Promise<string> {
  if (!stateFilePath) {
    const { userDataPath } = await getSettings()
    stateFilePath = process.env.MEOW_STATE_FILE ?? `${userDataPath}/state.json`
  }
  return stateFilePath
}

export const getState = async () => {
  const filePath = await getStateFilePath()
  return JSON.parse(await readFile(filePath, 'utf-8'))
}

export const setState = async (state) => {
  const filePath = await getStateFilePath()
  await writeFile(filePath, JSON.stringify(state, null, 2), 'utf-8')
}
