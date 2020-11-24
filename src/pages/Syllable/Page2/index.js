import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Container from '../../../components/Container'
import { useSpeachContext } from '../../../contexts/speak'
import { delayTime } from '../../../utils'
import * as S from './styles'

const levelsTitles = [
  { level: 1, title: 'Palavras com duas sílabas' },
  { level: 2, title: 'Palavras com três sílabas' },
  { level: 3, title: 'Palavras com quatro sílabas' },
  { level: 4, title: 'Palavras com cinco sílabas' },
]

export default function Page2({ route }) {
  const { navigate } = useNavigation()
  const { speak, stopSpeaking } = useSpeachContext()
  const { level: key } = route.params
  const selectedLevel = levelsTitles.find((option) => option.level === key)

  const handleNavigation = async () => {
    await delayTime(5000)
    stopSpeaking()
    return navigate({ name: 'Syllable-Page3', params: route.params })
  }

  useEffect(() => {
    speak(selectedLevel.title)
    handleNavigation()
  }, [])

  return (
    <Container color="#9b4acd">
      <S.Text>{selectedLevel.title}</S.Text>
    </Container>
  )
}
