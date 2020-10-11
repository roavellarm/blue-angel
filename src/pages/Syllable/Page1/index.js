import React from 'react'
import { useNavigation } from '@react-navigation/native'
import faderImg from '../../../assets/images/backgrounds/fader.png'
import Container from '../../../components/Container'
import * as S from './styles'

export default function Page1() {
  const { navigate } = useNavigation()
  const options = [4, 3, 2, 1]
  const text = 'Cada nível é dividido com o número de sílabas'

  const handleChoice = (choice) => {
    return navigate({ name: 'Syllable-Page2', params: { choice } })
  }

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
