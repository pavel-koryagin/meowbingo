import { texts } from './texts'

export function getSentences(text: string) {
  return text
    .split(/(?<=[.?!])/)
    .filter((v) => v)
    .map((v) => v.trim().replace(/^[–-]\s+/, ''))
}

export function getBlock1Pair() {
  const [
    {
      blocks: [{ geo, eng }]
    }
  ] = texts

  return { geo, eng }
}
