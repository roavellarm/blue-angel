import React, { useEffect, useState } from 'react'
import { Modal, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Container from '../../../components/Container'
import { useSpeachContext } from '../../../contexts/speak'
import twoSyllables from './exercicies/twoSyllables'
import threeSyllables from './exercicies/threeSyllables'
import fourSyllables from './exercicies/fourSyllables'
import fiveSyllables from './exercicies/fiveSyllables'
import { delayTime, sort, randomize } from '../../../utils'
import * as S from './styles'

export default function Page4({ route }) {
  const { navigate } = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const { level } = route.params
  const { speak, stopSpeaking } = useSpeachContext()
  const [exercise, setExercise] = useState({})
  const [buttonSyllables, setButtonSyllables] = useState([])
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)

  const handleModal = async () => {
    setModalVisible(true)
    await delayTime(3000)
    setModalVisible(false)
  }

  const handleSelectedButton = async (syllable) => {
    stopSpeaking()
    speak(syllable)
    if (syllable === exercise.correctAnswer) {
      setIsCorrectAnswer(true)
      speak(successMsg)
      handleModal()
      await delayTime(6000)
      return navigate({ name: 'Home', params: route.params })
    }
    setIsCorrectAnswer(false)
    speak(errorMsg)
    return handleModal()
  }

  const handleStates = (syllablesExerciciesList) => {
    const sortedExercise = sort(syllablesExerciciesList)
    setExercise(sortedExercise)
    setSuccessMsg(
      `Parabéns! Você acertou! A palavra ${sortedExercise.word} começa com a sílaba ${sortedExercise.correctAnswer}!`
    )
    setErrorMsg(
      `A palavra ${sortedExercise.word} não começa com essa sílaba. Tente novamente!`
    )
    const syllablesOptions = randomize(sortedExercise.options)
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

      <Modal animationType="slide" transparent visible={modalVisible}>
        <View
          style={{
            backgroundColor: '#F06969',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            margin: 50,
            padding: 30,
          }}
        >
          {isCorrectAnswer ? (
            <>
              <S.Image
                resizeMode="contain"
                source={exercise.image} // Colocar alguma imagem que simbolice correto/sucesso
                style={{ width: 150 }}
              />
              <S.ButtonText>{exercise.word}</S.ButtonText>
            </>
          ) : (
            <>
              <S.Image
                resizeMode="contain"
                source={exercise.image} // Colocar alguma imagem que simbolize erro
                style={{ width: 150 }}
              />
              <S.ButtonText>Ops! Tente novamente</S.ButtonText>
            </>
          )}
        </View>
      </Modal>
    </Container>
  )
}
