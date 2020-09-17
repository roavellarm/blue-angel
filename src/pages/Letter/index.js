import React from 'react'
import Button from '../../components/LetterButton'
import * as S from './styles'

const options = [
  { letters: 'A B C D E' },
  { letters: 'F G H I J' },
  { letters: 'K L M N O' },
  { letters: 'P Q R S T' },
  { letters: 'U V X Y W Z' },
]

export default function Letter({ chosenOption = 5 }) {
  return (
    <S.LetterContainer>
      <S.Title>Vamos aprender:</S.Title>
      <S.Letters>{options[chosenOption - 1].letters}</S.Letters>
      <Button title="VAMOS LÁ!" />
    </S.LetterContainer>
  )
}
