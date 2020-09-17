import React from 'react'
import * as S from './styles'

export default function HomeButton({ image, onPress }) {
  return (
    <S.ButtonContainer onPress={onPress}>
      <S.ButtonImage source={image} resizeMode="contain" />
    </S.ButtonContainer>
  )
}
