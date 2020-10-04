import React from 'react'
import Container from '../../../components/Container'
import ballImg from '../../../assets/images/forLessons/ball.png'
import * as S from './styles'

export default function Page8({ route }) {
  const { letters } = route.params

  const sortLetter = () => Math.floor(Math.random() * letters.length)

  console.log(letters[sortLetter()])

  return (
    <Container color="#0daecc">
      <S.ImageContainer>
        <S.Image source={ballImg} />
      </S.ImageContainer>

      <S.ButtonsContainer>
        <S.Button onPress={() => null}>
          <S.ButtonText>A</S.ButtonText>
        </S.Button>
        <S.Button onPress={() => null}>
          <S.ButtonText>B</S.ButtonText>
        </S.Button>
        <S.Button onPress={() => null}>
          <S.ButtonText>C</S.ButtonText>
        </S.Button>
      </S.ButtonsContainer>
    </Container>
  )
}
