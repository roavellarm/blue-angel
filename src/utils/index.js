export { images } from './imageHelper'

export const checkLetterSpell = (letter) => {
  if (letter === 'E') return 'É'
  if (letter === 'O') return 'Ó'
  return letter
}

const timeout = (delay) => new Promise((res) => setTimeout(res, delay))

export const delayTime = async (delay = 3000) => {
  await timeout(delay)
  return null
}
