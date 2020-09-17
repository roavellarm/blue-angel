import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/LetterButton'
import listenImage from '../../assets/images/listening.png'
import * as S from './styled'

export default function LetterSound({ route }) {
  const { navigate } = useNavigation()

  const handleOnPress = () => {
    return navigate({ name: 'LetterListen', params: route.params })
  }

  return (
    <S.Container>
      <S.Image source={listenImage} resizeMode="contain" />
      <S.Text>VAMOS OUVIR O SOM DAS LETRAS.</S.Text>
      <Button title="OK" onPress={handleOnPress} />
    </S.Container>
  )
}
