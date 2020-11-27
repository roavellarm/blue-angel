export { images } from './imageHelper'

export const checkLetterSpell = (letter) => {
  if (letter === 'E') return 'É'
  if (letter === 'O') return 'Ó'
  if (letter === 'HA') return 'A'
  if (letter === 'HE') return 'E'
  if (letter === 'HI') return 'I'
  if (letter === 'HO') return 'Ó'
  if (letter === 'HU') return 'U'
  if (letter === 'TO') return 'TÔ'
  if (letter === 'YA') return 'IÁ'
  if (letter === 'YE') return 'IE'
  if (letter === 'YO') return 'IO'
  if (letter === 'YU') return 'IU'
  return letter
}

const timeout = (delay) => new Promise((res) => setTimeout(res, delay))

export const delayTime = async (delay = 3000) => {
  await timeout(delay)
}

export const sort = (arr) => arr[Math.floor(Math.random() * arr.length)]

export const randomize = (arr) => arr.sort(() => Math.random() - 0.5)
