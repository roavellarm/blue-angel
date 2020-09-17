import React from 'react'
import { Alert } from 'react-native'
import Button from '../../components/LetterButton'
import * as S from './styles'

const options = [
  { letters: 'A B C D E' },
  { letters: 'F G H I J' },
  { letters: 'K L M N O' },
  { letters: 'P Q R S T' },
  { letters: 'U V X Y W Z' },
]

export default function Letter({ route }) {
  const { choice } = route.params

  return (
    <S.LetterContainer>
      <S.Title>Vamos aprender:</S.Title>
      <S.Letters>{options[choice - 1].letters}</S.Letters>
      <Button
        title="VAMOS LÁ!"
        onPress={() => Alert.alert('You clicked me!')}
      />
    </S.LetterContainer>
  )
}
