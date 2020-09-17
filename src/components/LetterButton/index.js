import React from 'react'
import * as S from './styles'

export default function LetterButton({ title }) {
  return (
    <S.ButtonContainer>
      <S.ButtonText>{title}</S.ButtonText>
    </S.ButtonContainer>
  )
}
