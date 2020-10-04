import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Container from '../../../components/Container'
import { useSpeachContext } from '../../../contexts/speak'
import { images, checkLetterSpell } from '../../../utils'
import * as S from './styles'

export default function Page8({ route }) {
  const { navigate } = useNavigation()
  const { letters } = route.params
  const [sortedLetters, setSortedLetters] = useState([])
  const [sortedImage, setSortedImage] = useState(null)
  const { speak, stopSpeaking } = useSpeachContext()
  const successMsg = `Parabéns! Você acertou! A palavra ${sortedImage?.name} começa com a letra ${sortedImage?.letter}!`
  const errorMsg = `A palavra ${sortedImage?.name} não começa com essa letra. Tente novamente!`

  const getALetter = (arr) => arr[Math.floor(Math.random() * arr.length)]

  const sortImage = (lettersOptions) => {
    const sortedLetter = getALetter(lettersOptions)
    setSortedImage(images.find((image) => image.letter === sortedLetter))
  }

  const sortLetters = () => {
    const sorted = []
    while (sorted.length < 3) {
      const newLetter = getALetter(letters)
      if (!sorted.includes(newLetter)) sorted.push(newLetter)
    }
    setSortedLetters(sorted)
    sortImage(sorted)
  }

  const handleOnPress = (letter) => {
    stopSpeaking()
    speak(checkLetterSpell(letter))
    if (letter === sortedImage.letter) {
      speak(successMsg)
      Alert.alert(successMsg)
      return navigate({ name: 'Home', params: route.params })
    }
    speak(errorMsg)
    return Alert.alert(errorMsg)
  }

  useEffect(() => sortLetters(), [])

  return (
    <Container color="#0daecc">
      <S.ImageContainer>
        <S.Image source={sortedImage?.image} resizeMode="cover" />
      </S.ImageContainer>

      <S.ButtonsContainer>
        {sortedLetters.map((letter) => (
          <S.Button key={letter} onPress={() => handleOnPress(letter)}>
            <S.ButtonText>{letter}</S.ButtonText>
          </S.Button>
        ))}
      </S.ButtonsContainer>
    </Container>
  )
}
