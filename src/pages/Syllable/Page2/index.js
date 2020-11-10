import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Container from '../../../components/Container'
import { useSpeachContext } from '../../../contexts/speak'
import { delayTime } from '../../../utils'
import * as S from './styles'

const options = [
  'Palavras com duas sílabas',
  'Palavras com três sílabas',
  'Palavras com quatro sílabas',
  'Palavras com cinco sílabas',
]

export default function Page2({ route }) {
  const { navigate } = useNavigation()
  const { speak, stopSpeaking } = useSpeachContext()
  const { choice } = route.params
  const selectedOption = options[choice - 1]

  const handleNavigation = async () => {
    await delayTime()
    stopSpeaking()
    return navigate({ name: 'Syllable-Page3', params: route.params })
  }

  useEffect(() => {
    speak(selectedOption)
    handleNavigation()
  }, [])

  return (
    <Container color="#9b4acd">
      <S.Text>{selectedOption}</S.Text>
    </Container>
  )
}
