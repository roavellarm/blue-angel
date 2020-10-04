import React from 'react'
import Container from '../../../components/Container'
import ballImg from '../../../assets/images/ball.png'
import * as S from './styles'

export default function Page8() {
  return (
    <Container color="#0daecc">
      <S.Image source={ballImg} />
      <S.ButtonsContainer>
        <S.Button />
      </S.ButtonsContainer>
    </Container>
  )
}
