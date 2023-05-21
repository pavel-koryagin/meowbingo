import { texts } from './texts'

export function getSentences(text: string) {
  return text.split(/\.\?!/).filter((v) => v)
}

export function getBlock1Pair() {
  const [
    {
      blocks: [{ geo, eng }]
    }
  ] = texts

  return { geo, eng }
}
