import React from 'react'
import * as S from './styles'

export default function LetterButton({ title, onPress }) {
  return (
    <S.ButtonContainer onPress={onPress}>
      <S.ButtonText>{title}</S.ButtonText>
    </S.ButtonContainer>
  )
}
