import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Container from '../../../components/Container'
import { useSpeachContext } from '../../../contexts/speak'
import planetImg from '../../../assets/images/backgrounds/planet.png'
import { delayTime } from '../../../utils'
import * as S from './styles'

export default function Page5({ route }) {
  const { navigate } = useNavigation()
  const text = 'TUDO QUE EXISTE COMEÇA COM UMA LETRA.'
  const { speak, stopSpeaking } = useSpeachContext()

  const handleNavigation = async () => {
    await delayTime(5000)
    stopSpeaking()
    return navigate({ name: 'Alphabet-Page6', params: route.params })
  }

  useEffect(() => {
    speak(text)
    handleNavigation()
  }, [])

  return (
    <Container color="#0e457f">
      <S.Image source={planetImg} />
      <S.Text>{text}</S.Text>
    </Container>
  )
}
