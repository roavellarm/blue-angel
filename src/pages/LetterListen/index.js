import React from 'react'
import { Alert } from 'react-native'
import fingerImg from '../../assets/images/fingerPress.png'
import * as S from './styles'

export default function LetterListen({ route }) {
  const letters = route.params.split(' ')

  const playLetter = (option) => {
    return Alert.alert(`Falando a letra "${option}"`)
  }

  return (
    <S.Container>
      <S.Image source={fingerImg} resizeMode="contain" />
      <S.Text>CLIQUE NA LETRA PARA OUVIR O SOM!</S.Text>

      {letters.map((letter, index) => {
        return (
          <S.Button key={index} onPress={() => playLetter(letter)}>
            <S.ButtonText>{letter}</S.ButtonText>
          </S.Button>
        )
      })}
    </S.Container>
  )
}
