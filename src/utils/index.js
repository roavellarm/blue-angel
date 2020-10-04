export { images } from './imageHelper'

export const checkLetterSpell = (letter) => {
  if (letter === 'E') return 'É'
  if (letter === 'O') return 'Ó'
  return letter
}
