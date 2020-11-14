import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Container from '../../../components/Container'
import { useSpeachContext } from '../../../contexts/speak'
import image from '../../../assets/images/forLessons/bola.png'
import * as S from './styles'

const options = ['BO', 'FA', 'LA']

export default function Page4({ route }) {
  // const [modalVisible, setModalVisible] = useState(false)
  // const [setSelected] = useState({})
  const { navigate } = useNavigation()
  const { stopSpeaking } = useSpeachContext()

  const handleNavigate = () => {
    stopSpeaking()
    return navigate({ name: '', params: route.params })
  }

  // const handleSelectedButton = (syllable) => {
  // stopSpeaking()
  // speak(syllable)
  // setSelected(image)
  // }

  return (
    <Container hasPadding={false} color="#0daecc">
      <S.ImageContainer>
        <S.Image source={image} resizeMode="contain" />
      </S.ImageContainer>

      <S.ButtonsContainer>
        {options.map((option) => (
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
