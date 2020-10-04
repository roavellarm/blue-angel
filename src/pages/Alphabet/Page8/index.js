import React from 'react'
import Container from '../../../components/Container'
import ballImg from '../../../assets/images/forLessons/ball.png'
import * as S from './styles'

export default function Page8() {
  const teste = ['GFG_1', 'GeeksForGeeks', 'Geeks', 'Computer Science Portal']

  const getRandomPosition = (arr) => Math.floor(Math.random() * arr.length)

  console.log(teste[getRandomPosition()])

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
