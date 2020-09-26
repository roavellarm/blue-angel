import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSpeachContext } from '../../../contexts/speak'
import planetImg from '../../../assets/images/planet.png'
import * as S from './styles'

export default function Page5() {
  const { navigate } = useNavigation()
  const text = 'TUDO QUE EXISTE COMEÇA COM UMA LETRA.'
  const { speak, stopSpeaking } = useSpeachContext()

  const timeout = (delay) => new Promise((res) => setTimeout(res, delay))

  const wait = async () => {
    await timeout(5000)
    stopSpeaking()
    return navigate('Home')
  }

  useEffect(() => {
    speak(text)
    wait()
  }, [])

  return (
    <S.Container>
      <S.Image source={planetImg} />
      <S.Text>{text}</S.Text>
    </S.Container>
  )
}
