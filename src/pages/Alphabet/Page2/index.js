import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Button from '../../../components/LetterButton'
import Container from '../../../components/Container'
import { useSpeachContext } from '../../../contexts/speak'
import * as S from './styles'

const options = [
  { letters: ['A', 'B', 'C', 'D', 'E'] },
  { letters: ['F', 'G', 'H', 'I', 'J'] },
  { letters: ['K', 'L', 'M', 'N', 'O'] },
  { letters: ['P', 'Q', 'R', 'S', 'T'] },
  { letters: ['U', 'V', 'X', 'Y', 'W', 'Z'] },
]

export default function Page2({ route }) {
  const title = 'Vamos aprender'
  const { choice } = route.params
  const { navigate } = useNavigation()
  const { letters } = options[choice - 1]
  const { speak, stopSpeaking } = useSpeachContext()

  const getLettersWithComma = () => letters.map((letter) => `${letter}`)

  const showLetters = () =>
    letters.map((letter, index) =>
      letters.length === index + 1 ? letter : `${letter} `
    )

  useEffect(() => {
    speak(`${title} as letras: `)
    speak(`${getLettersWithComma()}`, 'slow')
  }, [])

  const handleNavigate = () => {
    stopSpeaking()
    return navigate({ name: 'Alphabet-Page3', params: { letters } })
  }

  return (
    <Container color="#f9ad30">
      <S.Title>{`${title}:`}</S.Title>
      <S.Letters>{showLetters()}</S.Letters>
      <Button
        title="VAMOS LÁ!"
        onPress={handleNavigate}
        style={{ marginBottom: 60 }}
      />
    </Container>
  )
}
