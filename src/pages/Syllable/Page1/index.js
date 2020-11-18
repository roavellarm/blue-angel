import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import faderImg from '../../../assets/images/backgrounds/fader.png'
import { useSpeachContext } from '../../../contexts/speak'
import Container from '../../../components/Container'
import * as S from './styles'

export default function Page1() {
  const options = [4, 3, 2, 1]
  const text = 'Cada nível é dividido pelo número de sílabas'
  const { navigate } = useNavigation()
  const { speak, stopSpeaking } = useSpeachContext()

  const handleLevel = (level) => {
    stopSpeaking()
    return navigate({ name: 'Syllable-Page2', params: { level } })
  }

  useEffect(() => speak(text), [])

  return (
    <Container>
      <S.Text>{text}</S.Text>

      <S.ImageBackground source={faderImg} resizeMode="contain">
        {options.map((option) => (
          <S.Button key={option} onPress={() => handleLevel(option)}>
            <S.ButtonText>{option}</S.ButtonText>
          </S.Button>
        ))}
      </S.ImageBackground>
    </Container>
  )
}
