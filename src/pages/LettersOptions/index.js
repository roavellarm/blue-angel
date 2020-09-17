import React from 'react'
import faderImg from '../../assets/images/fader.png'
import * as S from './styles'

export default function LettersOptions() {
  const options = [5, 4, 3, 2, 1]

  return (
    <S.Container>
      <S.Text>
        Cada nível tem um grupo de letras do alfabeto para aprender sobre as
        letras!
      </S.Text>

      {/* <S.ButtonsContainer> */}
      <S.ImageBackground source={faderImg} resizeMode="contain">
        {options.map((option) => {
          return (
            <S.Button key={option}>
              <S.ButtonText>{option}</S.ButtonText>
            </S.Button>
          )
        })}
      </S.ImageBackground>
      {/* </S.ButtonsContainer> */}
    </S.Container>
  )
}
