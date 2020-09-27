import React from 'react'
import * as S from './styles'

export default function HomeButton({ image, enabled = true, onPress }) {
  return (
    <S.ButtonContainer onPress={onPress} enabled={enabled}>
      <S.ButtonImage source={image} resizeMode="contain" enabled={enabled} />
    </S.ButtonContainer>
  )
}
