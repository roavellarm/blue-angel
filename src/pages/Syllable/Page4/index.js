import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import Container from '../../../components/Container'
import { useSpeachContext } from '../../../contexts/speak'
import twoSyllables from './exercicies/twoSyllables'
import threeSyllables from './exercicies/threeSyllables'
import fourSyllables from './exercicies/fourSyllables'
import fiveSyllables from './exercicies/fiveSyllables'
import { checkLetterSpell } from '../../../utils'
import * as S from './styles'

export default function Page4({ route }) {
  const { level } = route.params
  const { speak, stopSpeaking } = useSpeachContext()
  const [exercise, setExercise] = useState({})
  const [buttonSyllables, setButtonSyllables] = useState([])
  const successMsg = `Parabéns! Você acertou! A palavra ${exercise.image} começa com a sílaba ${exercise.correctAnswer}!`
  const errorMsg = `A palavra ${exercise.image} não começa com essa sílaba. Tente novamente!`

  const sortExercise = (arr) => arr[Math.floor(Math.random() * arr.length)]

  const randomizeSyllables = (arr) => arr.sort(() => Math.random() - 0.5)

  const handleSelectedButton = (syllable) => {
    stopSpeaking()
    speak(checkLetterSpell(syllable))
    if (syllable === exercise.correctAnswer) {
      return Alert.alert(speak(successMsg))
    }
    return Alert.alert(speak(errorMsg))
  }

  const handleStates = (syllablesExerciciesList) => {
    const sortedExercise = sortExercise(syllablesExerciciesList)
    setExercise(sortedExercise)
    const syllablesOptions = randomizeSyllables(sortedExercise.options)
    return setButtonSyllables(syllablesOptions)
  }

  const handleSelectedChoice = async () => {
    if (level === 1) return handleStates(twoSyllables)
    if (level === 2) return handleStates(threeSyllables)
    if (level === 3) return handleStates(fourSyllables)
    return handleStates(fiveSyllables)
  }

  useEffect(() => {
    handleSelectedChoice()
    return () => {
      setExercise({})
      setButtonSyllables([])
    }
  }, [])

  return (
    <Container hasPadding={false} color="#0daecc">
      <S.ImageContainer>
        <S.Image source={exercise.image} resizeMode="contain" />
      </S.ImageContainer>

      <S.ButtonsContainer>
        {buttonSyllables.map((syllable, index) => (
          <S.Button key={index} onPress={() => handleSelectedButton(syllable)}>
            <S.ButtonText>{syllable}</S.ButtonText>
          </S.Button>
        ))}
      </S.ButtonsContainer>
    </Container>
  )
}
