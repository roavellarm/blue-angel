import React, { useEffect, useState } from 'react'
import { Modal, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Container from '../../../components/Container'
import { useSpeachContext } from '../../../contexts/speak'
import twoWords from './exercicies/twoWords'
import threeWords from './exercicies/threeWords'
import moreWords from './exercicies/moreWords'
import { delayTime, randomize, sort } from '../../../utils'
import * as S from './styles'

export default function Page4({ route }) {
  const { navigate } = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const { level } = route.params
  const { speak, stopSpeaking } = useSpeachContext()
  const [exercise, setExercise] = useState({})
  const [phraseWordsQuantity, setPhraseWordsQuantity] = useState(0)
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

  const handleSelectedButton = (word) => {
    stopSpeaking()
    speak(word)
    setIsSelected((old) => [...old, word])
    setAnswer(`${answer} ${word}`)

    if (isSelected.length + 1 === phraseWordsQuantity) {
      if (`${answer} ${word}`.trim() === exercise.correctAnswer) {
        setIsCorrectAnswer(true)
        speak(successMsg)
        handleModal()
        setIsSelected([])
        setAnswer('')
        navigate({ name: 'Home', params: route.params })
      } else {
        setIsCorrectAnswer(false)
        speak(errorMsg)
        handleModal()
        setIsSelected([])
        setAnswer('')
      }
    }
  }

  const handleStates = async (phrasesExerciciesList) => {
    const sortedExercise = sort(phrasesExerciciesList)
    setExercise(sortedExercise)
    setPhraseWordsQuantity(sortedExercise.correctAnswer.split(' ').length)
    setSuccessMsg(
      `Parabéns! Você acertou a frase ${sortedExercise.correctAnswer.toString()}!`
    )
    setErrorMsg(
      `A frase ${sortedExercise.correctAnswer.toString()} não se escreve assim. Tente novamente!`
    )
    const phrasesOptions = randomize(sortedExercise.options)
    return setButtonPhrases(phrasesOptions)
  }

  const handleSelectedChoice = () => {
    if (level === 1) return handleStates(twoWords)
    if (level === 2) return handleStates(threeWords)
    if (level === 3) return handleStates(moreWords)
    return handleStates(moreWords)
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
