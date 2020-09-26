import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import faderImg from '../../../assets/images/fader.png'
import { useSpeachContext } from '../../../contexts/speak'
import Container from '../../../components/Container'
import * as S from './styles'

export default function Page1() {
  const options = [5, 4, 3, 2, 1]
  const text =
    'Cada nível tem um grupo de letras do alfabeto para aprender sobre as letras!'
  const { navigate } = useNavigation()
  const { speak, stopSpeaking } = useSpeachContext()

  const handleChoice = (choice) => {
    stopSpeaking()
    return navigate({ name: 'Alphabet-Page2', params: { choice } })
  }

  useEffect(() => speak(text), [])

  return (
    <Container>
      <S.Text>{text}</S.Text>

      <S.ImageBackground source={faderImg} resizeMode="contain">
        {options.map((option) => (
          <S.Button key={option} onPress={() => handleChoice(option)}>
            <S.ButtonText>{option}</S.ButtonText>
          </S.Button>
        ))}
      </S.ImageBackground>
    </Container>
  )
}
