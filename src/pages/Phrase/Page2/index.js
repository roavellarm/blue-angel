import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Container from '../../../components/Container'
import { useSpeachContext } from '../../../contexts/speak'
import { delayTime } from '../../../utils'
import * as S from './styles'

const levelsTitles = [
  { level: 1, title: 'Frases com duas Palvras' },
  { level: 2, title: 'Frases com três Palavras' },
  { level: 3, title: 'Frases com Muitas Palvras' },
]

export default function Page2({ route }) {
  const { navigate } = useNavigation()
  const { speak, stopSpeaking } = useSpeachContext()
  const { level: key } = route.params
  const selectedLevel = levelsTitles.find((option) => option.level === key)

  const handleNavigation = async () => {
    await delayTime(5000)
    stopSpeaking()
    return navigate({ name: 'Phrase-Page3', params: route.params })
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
