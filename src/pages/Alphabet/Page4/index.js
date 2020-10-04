import React, { useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Container from '../../../components/Container'
import fingerImg from '../../../assets/images/backgrounds/fingerPress.png'
import { useSpeachContext } from '../../../contexts/speak'
import * as S from './styles'

export default function Page4({ route }) {
  const { letters } = route.params
  const { navigate } = useNavigation()
  const { speak, stopSpeaking } = useSpeachContext()
  const title = 'PRESSIONE NA LETRA PARA OUVIR O SOM!'

  useEffect(() => speak(title), [])

  const handleNavigate = () => {
    stopSpeaking()
    return navigate({ name: 'Alphabet-Page5', params: route.params })
  }

  return (
    <Container hasPadding={false} color="#0daecc">
      <S.Text>{title}</S.Text>
      <S.Image source={fingerImg} resizeMode="contain" />
      <S.ButtonsContainer>
        {letters.map((letter, index) => (
          <S.Button
            key={index}
            onPress={() => {
              stopSpeaking()
              speak(letter)
            }}
          >
            <S.ButtonText>{letter}</S.ButtonText>
          </S.Button>
        ))}
      </S.ButtonsContainer>
      <Feather
        style={{ padding: 20 }}
        name="chevron-right"
        color="white"
        size={60}
        onPress={handleNavigate}
      />
    </Container>
  )
}
