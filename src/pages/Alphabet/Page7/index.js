import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Container from '../../../components/Container'
import { useSpeachContext } from '../../../contexts/speak'
import image from '../../../assets/images/image.png'
import * as S from './styles'

export default function Page7({ route }) {
  const { navigate } = useNavigation()
  const text = 'TODO OBJETO COMEÇA COM UMA LETRA.'
  const { speak, stopSpeaking } = useSpeachContext()

  const timeout = (delay) => new Promise((res) => setTimeout(res, delay))

  const wait = async () => {
    await timeout(5000)
    stopSpeaking()
    return navigate({ name: 'Alphabet-Page6', params: route.params })
  }

  useEffect(() => {
    speak(text)
    wait()
  }, [])

  return (
    <Container color="#02A7E8">
      <S.Image source={image} />
      <S.Text>{text}</S.Text>
    </Container>
  )
}
