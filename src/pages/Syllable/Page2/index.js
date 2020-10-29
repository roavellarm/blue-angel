import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Container from '../../../components/Container'
import { useSpeachContext } from '../../../contexts/speak'
import * as S from './styles'

const options = [
  { prayers: ['Palavras com duas sílabas'] },
  { prayers: ['Palavras com três sílabas'] },
  { prayers: ['Palavras com quatro sílabas'] },
  { prayers: ['Palavras com cinco sílabas'] },
]

export default function Page2({ route }) {
  const { navigate } = useNavigation()
  const { speak, stopSpeaking } = useSpeachContext()
  const { choice } = route.params
  const { prayers } = options[choice - 1]

  const showPrayers = () => prayers.map((prayer) => `${prayer}`)

  const timeout = (delay) => new Promise((res) => setTimeout(res, delay))

  const wait = async () => {
    await timeout(3000)
    stopSpeaking()
    return navigate({ name: 'Syllable-Page3', params: route.params })
  }

  useEffect(() => {
    speak()
    wait()
  }, [])

  return (
    <Container color="#9b4acd">
      <S.Prayers>{showPrayers()}</S.Prayers>
    </Container>
  )
}
