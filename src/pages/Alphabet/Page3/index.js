import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Button from '../../../components/LetterButton'
import listenImage from '../../../assets/images/listening.png'
import { useSpeachContext } from '../../../contexts/speak'
import * as S from './styled'

export default function Page3({ route }) {
  const { navigate } = useNavigation()
  const { speak, stopSpeaking } = useSpeachContext()
  const text = 'VAMOS OUVIR O SOM DAS LETRAS.'

  const handleNavigate = () => {
    stopSpeaking()
    return navigate({ name: 'Alphabet-Page4', params: route.params })
  }

  useEffect(() => speak(text), [])

  return (
    <S.Container>
      <S.Image source={listenImage} resizeMode="contain" />
      <S.Text>{text}</S.Text>
      <Button title="OK" onPress={handleNavigate} />
    </S.Container>
  )
}
