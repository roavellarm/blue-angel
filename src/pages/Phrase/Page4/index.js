import React, { useEffect, useState } from 'react'
import { Modal, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Container from '../../../components/Container'
import { useSpeachContext } from '../../../contexts/speak'
import twoWords from './exercicies/twoWords'
import threeWords from './exercicies/threeWords'
import moreWords from './exercicies/moreWords'
import { delayTime, randomize, checkLetterSpell, sort } from '../../../utils'
import * as S from './styles'

const initialState = {
  modalVisible: false,
  phraseWordsQuantity: 0,
  exercise: {},
  exerciseDone: [],
  exerciseQuantity: 0,
  exerciseList: [],
  isSelected: [],
  buttonPhrases: [],
  successMsg: '',
  errorMsg: '',
  answer: '',
  isCorrectAnswer: false,
}

export default function Page4({ route }) {
  const { navigate } = useNavigation()
  const { level } = route.params
  const [state, setState] = useState({})
  const [modalVisible, setModalVisible] = useState(false)
  const [phraseWordsQuantity, setPhraseWordsQuantity] = useState(0)
  const [exercise, setExercise] = useState({})
  const [exerciseDone, setExerciseDone] = useState([])
  const [exerciseQuantity, setExercisesQuantity] = useState(0)
  const [exerciseList, setExercisesList] = useState([])
  const [isSelected, setIsSelected] = useState([])
  const [buttonPhrases, setButtonPhrases] = useState([])
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [answer, setAnswer] = useState('')
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)

  const handleModal = async () => {
    setModalVisible(true)
    await delayTime(3000)
    setModalVisible(false)
  }

  const handleCurrentExercise = (currentExercise) => {
    setExercise(currentExercise)
    setPhraseWordsQuantity(currentExercise.correctAnswer.split(' ').length)
    setSuccessMsg(
      `Parabéns! Você acertou a frase ${currentExercise.correctAnswer.toString()}!`
    )
    setErrorMsg(
      `A frase ${currentExercise.correctAnswer.toString()} não se escreve assim. Tente novamente!`
    )
    const phrasesOptions = randomize(currentExercise.options)
    return setButtonPhrases(phrasesOptions)
  }

  const handleChoice = (phrasesExerciciesList) => {
    const sortedExercise = sort(phrasesExerciciesList)
    setExercisesList(phrasesExerciciesList)
    setExercisesQuantity(phrasesExerciciesList.length)
    handleCurrentExercise(sortedExercise)
  }

  const sortNewExercise = () => {
    let currentExercise = sort(exerciseList)
    while (exerciseDone.includes(currentExercise.correctAnswer)) {
      currentExercise = sort(exerciseList)
    }
    return handleCurrentExercise(currentExercise)
  }

  const handleSelectedButton = async (word) => {
    stopSpeaking()
    speak(checkLetterSpell(word))
    setIsSelected((old) => [...old, word])
    setAnswer(`${answer} ${word}`)

    if (isSelected.length + 1 === phraseWordsQuantity) {
      if (`${answer} ${word}`.trim() === exercise.correctAnswer) {
        setExerciseDone(exercise.correctAnswer)
        setIsCorrectAnswer(true)
        speak(successMsg)
        handleModal()
        await delayTime(6000)
        setIsSelected([])
        setAnswer('')
        if (exerciseDone.length === exerciseQuantity) {
          return navigate({ name: 'Home', params: route.params })
        }
        return sortNewExercise()
      }
      setIsCorrectAnswer(false)
      speak(errorMsg)
      handleModal()
      setIsSelected([])
      return setAnswer('')
    }
  }

  //   const sortedExercise = sort(phrasesExerciciesList)
  //   setExercise(sortedExercise)
  //   setPhraseWordsQuantity(sortedExercise.correctAnswer.split(' ').length)
  //   setSuccessMsg(
  //     `Parabéns! Você acertou a frase ${sortedExercise.correctAnswer.toString()}!`
  //   )
  //   setErrorMsg(
  //     `A frase ${sortedExercise.correctAnswer.toString()} não se escreve assim. Tente novamente!`
  //   )
  //   const phrasesOptions = randomize(sortedExercise.options)
  //   return setButtonPhrases(phrasesOptions)
  // }

  // const handleSelectedChoice = () => {
  //   if (level === 1) return handleStates(twoWords)
  //   if (level === 2) return handleStates(threeWords)
  //   if (level === 3) return handleStates(moreWords)
  //   return handleStates(moreWords)

  useEffect(() => {
    if (level === 1) handleChoice(twoWords)
    if (level === 2) handleChoice(threeWords)
    if (level === 3) handleChoice(moreWords)
  }, [])

  return (
    <Container hasPadding={false} color="#0daecc">
      <S.ImageContainer>
        <S.Image source={exercise.image} resizeMode="contain" />
      </S.ImageContainer>

      <S.ButtonsContainer>
        {buttonPhrases.map((phrase, index) => (
          <S.Button
            key={index}
            isSelected={isSelected.includes(phrase)}
            onPress={() => handleSelectedButton(phrase)}
          >
            <S.ButtonText>{phrase.toUpperCase()}</S.ButtonText>
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
              <S.ButtonText>{exercise.correctAnswer}</S.ButtonText>
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
