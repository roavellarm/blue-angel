import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Container from '../../../components/Container'
import { useSpeachContext } from '../../../contexts/speak'
import image from '../../../assets/images/forLessons/bola.png'
// import threeSyllables from './threeSyllables'
import twoSyllables from './twoSyllables'
import * as S from './styles'

export default function Page4({ route }) {
  // const [modalVisible, setModalVisible] = useState(false)
  // const [setSelected] = useState({})
  const { choice } = route.params
  const { navigate } = useNavigation()
  const { stopSpeaking } = useSpeachContext()
  const [selectedOption, setSelectedOption] = useState()

  const handleNavigate = () => {
    stopSpeaking()
    return navigate({ name: '', params: route.params })
  }

  const sortExercise = (exerciceList) => {
    // console.log(arr)
    // return arr[Math.floor(Math.random() * arr.length)]
  }

  const sortSyllableButtons = (syllableList) => {
    // console.log(arr)
    // return arr[Math.floor(Math.random() * arr.length)]
  }

  // const handleSelectedButton = (syllable) => {
  //   stopSpeaking()
  //   speak(syllable)
  //   setSelected(image)
  // }

  const handleSelectedChoice = async () => {
    if (choice === 0) {
      // Escolheu a de 2 silabas
      // Pegar a lista de exercicios de 2 silabas (colocar num estado)
      // Sortear um exercício dessa lista
      // sortear a ordem das sílabas e adicionar numa variavel
    }
    if (choice === 1) {
      // Escolheu a de 2 silabas
      // Pegar a lista de exercicios de 2 silabas (colocar num estado)
      // Sortear um exercício dessa lista
      // sortear a ordem das sílabas e adicionar numa variavel
    }
    if (choice === 1) {
      // Escolheu a de 2 silabas
      // Pegar a lista de exercicios de 2 silabas (colocar num estado)
      // Sortear um exercício dessa lista
      // sortear a ordem das sílabas e adicionar numa variavel
    }
    // console.log(teste)
    setSelectedOption(twoSyllables)
  }

  useEffect(() => {
    // temp()
  }, [])

  return (
    <Container hasPadding={false} color="#0daecc">
      <S.ImageContainer>
        <S.Image source={image} resizeMode="contain" />
      </S.ImageContainer>

      <S.ButtonsContainer>
        {selectedOption.map((option) => (
          <S.Button key={option}>
            <S.ButtonText>{option}</S.ButtonText>
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
