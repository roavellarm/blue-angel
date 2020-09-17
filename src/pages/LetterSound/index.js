import React from 'react'
import { Alert } from 'react-native'
import Button from '../../components/LetterButton'
import listenImage from '../../assets/images/listening.png'
import * as S from './styled'

export default function LetterSound() {
  return (
    <S.Container>
      <S.Image source={listenImage} resizeMode="contain" />
      <S.Text>VAMOS OUVIR O SOM DAS LETRAS.</S.Text>
      <Button title="OK" onPress={() => Alert.alert('You clicked me!')} />
    </S.Container>
  )
}
