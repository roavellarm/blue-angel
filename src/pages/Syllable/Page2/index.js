import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Container from '../../../components/Container'
import * as S from './styles'

export default function Page2({ route }) {
  const {} = route.params
  const { navigate } = useNavigation()
  // const { players } = options[choice - 1]
  const timeout = (delay) => new Promise((res) => setTimeout(res, delay))
  const players = [
    { player: 'Palavras com duas sílabas:' },
    { player: 'Palavras com quatro sílabas:' },
    { player: 'Palavras com cinco sílabas:' },
  ]

  const wait = async () => {
    await timeout(5000)
    return navigate({ name: '', params: route.params })
  }

  const showPlayers = () =>
    players.map((player, index) =>
      player.length === index + 1 ? player : `${player}`
    )

  return (
    <Container color="#9b4acd">
      <S.Text>{showPlayers()}</S.Text>
    </Container>
  )
}
