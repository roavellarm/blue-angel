import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Button from '../../../components/LetterButton'
import Container from '../../../components/Container'
import fingerImg from '../../../assets/images/backgrounds/fingerPress.png'
import { useSpeachContext } from '../../../contexts/speak'
import * as S from './styles'

export default function Page3({ route }) {
  const { navigate } = useNavigation()
  const { speak, stopSpeaking } = useSpeachContext()
  const title = 'Clique nas sílabas corretas'

  useEffect(() => speak(title), [])

  const handleNavigate = () => {
    stopSpeaking()
    return navigate({ name: 'Syllable-Page4', params: route.params })
  }

  return (
    <Container color="#0daecc">
      <S.Image source={fingerImg} rezideMode="contain" />
      <S.Text>{title}</S.Text>
      <Button title="OK" onPress={handleNavigate} />
    </Container>
  )
}
