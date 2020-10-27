import React from 'react'

import Container from '../../../components/Container'
import * as S from './styles'

const options = [
  { prayers: ['Palavras com duas sílabas'] },
  { prayers: ['Palavras com três sílabas'] },
  { prayers: ['Palavras com quatro sílabas'] },
  { prayers: ['Palavras com cinco sílabas'] },
]

export default function Page2({ route }) {
  const { choice } = route.params

  const { prayers } = options[choice - 1]

  const showPrayers = () => prayers.map((prayer) => `${prayer}`)

  return (
    <Container color="#9b4acd">
      <S.Prayers>{showPrayers()}</S.Prayers>
    </Container>
  )
}
