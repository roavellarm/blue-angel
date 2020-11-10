import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Container from '../../../components/Container'
import { useSpeachContext } from '../../../contexts/speak'
import image from '../../../assets/images/backgrounds/image.png'
import { delayTime } from '../../../utils'
import * as S from './styles'

export default function Page7({ route }) {
  const { navigate } = useNavigation()
  const text = 'TODO OBJETO COMEÇA COM UMA LETRA.'
  const { speak, stopSpeaking } = useSpeachContext()

  const handleNavigation = async () => {
    await delayTime(5000)
    stopSpeaking()
    return navigate({ name: 'Alphabet-Page8', params: route.params })
  }

  useEffect(() => {
    speak(text)
    handleNavigation()
  }, [])

  return (
    <Container color="#02A7E8">
      <S.Image source={image} />
      <S.Text>{text}</S.Text>
    </Container>
  )
}
