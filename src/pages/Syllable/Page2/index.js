import React from 'react'
import Container from '../../../components/Container'
import * as S from './styles'

const options = [
  { option: 'Palavras com duas sílabas:' },
  { option: 'Palavras com três sílabas:' },
  { option: 'Palavras com quatro sílabas:' },
  { option: 'Palavras com cinco sílabas:' },
]

export default function Page2({ route }) {
  const { choice } = route.params
  const { option } = options[choice - 1]

  return (
    <Container color="#9b4acd">
      <S.Text>{option}</S.Text>
    </Container>
  )
}
