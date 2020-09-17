import React from 'react'
import { useNavigation } from '@react-navigation/native'
import faderImg from '../../assets/images/fader.png'
import * as S from './styles'

export default function LettersOptions() {
  const options = [5, 4, 3, 2, 1]
  const { navigate } = useNavigation()

  const handleChoice = (choice) =>
    navigate({ name: 'Letter', params: { choice } })

  return (
    <S.Container>
      <S.Text>
        Cada nível tem um grupo de letras do alfabeto para aprender sobre as
        letras!
      </S.Text>

      <S.ImageBackground source={faderImg} resizeMode="contain">
        {options.map((option) => (
          <S.Button key={option} onPress={() => handleChoice(option)}>
            <S.ButtonText>{option}</S.ButtonText>
          </S.Button>
        ))}
      </S.ImageBackground>
    </S.Container>
  )
}
