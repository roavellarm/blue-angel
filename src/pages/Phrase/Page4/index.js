import React, { useEffect, useState } from 'react'
import { Modal, View } from 'react-native'
import Container from '../../../components/Container'
import { useSpeachContext } from '../../../contexts/speak'
import { checkLetterSpell, delayTime } from '../../../utils'
import * as S from './styles'

export default function Page4() {
  const [visibleModal, serModalVisible] = useState(false)
  const { level } = route.params
  const { speak, stopSpeaking } = useSpeachContext()
  const [exercise, setExercise] = useState({})
  const [buttonPhrases, setButtonPhrases] = useState()
  const [succesMsg, setSuccesMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [isCorrectAnswer, setIsCorrectA] = useState(false)

  const sortExercise = (arr) => arr[Math.floor(Math.random() * arr.length)]

  const randomisePhrases = (arr) => arr.sort(() => Math.random() - 0.5)

  const handleModal = async () => {
    setModalVisible(true)
    await delayTime(3000)
    setModalVisible(false)
  }

  const handleSelectedButton = (phrase) => {
    stopSpeaking()
    speak(checkLetterSpell(phrase))
    if (phrase === exercise.correctAnswer) {
      setIsCorrectAnswer(true)
      speak(successMsg)
      handleModal()
    } else {
      setIsCorrectAnswer(false)
      speak(errorMsg)
      handleModal()
    }
  }

  const handleStates = (phrasesExerciciesList) => {
    const sortedExercise = sortExercise(phrasesExerciciesList)
    setExercise(sortedExercise)
    setSuccessMsg(
      `Parabéns! Você acertou! A palavra yyyy começa com a sílaba xxxxx!`
    )
    setErrorMsg(`A palavra yyyy não começa com essa sílaba. Tente novamente!`)
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
