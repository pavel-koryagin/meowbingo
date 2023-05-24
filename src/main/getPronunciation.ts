import _escape from 'lodash/escape'
import _isPlainObject from 'lodash/isPlainObject'
import axios from 'axios'

export async function getPronunciation(_sentence: string): Promise<string | null> {
  return null
}

// TODO: move to electron
const PLAY_HT_USER_ID = ''

export async function requestPlayHtGeorgianTTS(word): Promise<ArrayBuffer> {
  const { data } = await axios.post('https://play.ht/api/transcribe', {
    userId: PLAY_HT_USER_ID,
    platform: 'dashboard',
    // userId: 'public-access',
    // platform: 'landing_demo',
    ssml: `<speak><p>${_escape(word)}</p></speak>`,
    voice: 'ka-GE-GiorgiNeural',
    narrationStyle: 'regular'
  })

  // The response is already binary
  if (!_isPlainObject(data)) {
    return data
  }

  // Get the file from cached
  const { data: audioData } = await axios.get(data.file, { responseType: 'arraybuffer' })
  return audioData
}
