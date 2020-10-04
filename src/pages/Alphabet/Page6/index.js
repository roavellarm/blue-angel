import React, { useEffect, useState } from 'react'
import { Modal, View, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Container from '../../../components/Container'
import fingerImg from '../../../assets/images/backgrounds/fingerPress.png'
import { useSpeachContext } from '../../../contexts/speak'
import { checkLetterSpell, images } from '../../../utils'
import * as S from './styles'

export default function Page6({ route }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [selected, setSelected] = useState({})
  const { letters } = route.params
  const { navigate } = useNavigation()
  const { speak, stopSpeaking } = useSpeachContext()
  const title = 'PRESSIONE NA LETRA PARA VER A IMAGEM!'

  useEffect(() => speak(title), [])

  const handleNavigate = () => {
    stopSpeaking()
    return navigate({ name: 'Alphabet-Page7', params: route.params })
  }

  const timeout = (delay) => new Promise((res) => setTimeout(res, delay))

  const handleModal = async () => {
    setModalVisible(true)
    await timeout(3000)
    setModalVisible(false)
  }

  const handleSelectedButton = (letter) => {
    stopSpeaking()
    speak(letter)
    const imageItem = images.find((item) => item.letter === letter)
    setSelected(imageItem)
    speak(`${checkLetterSpell(letter)} de ${imageItem.name}`)
    handleModal()
  }

  return (
    <Container hasPadding={false} color="#0daecc">
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
          <S.Name>{selected?.name?.toUpperCase()}</S.Name>
          <Image
            source={selected.image}
            height={100}
            width={100}
            style={{ marginTop: 30 }}
          />
        </View>
      </Modal>
      <S.Text>{title}</S.Text>
      <S.Image source={fingerImg} resizeMode="contain" />
      <S.ButtonsContainer>
        {letters.map((letter, index) => (
          <S.Button key={index} onPress={() => handleSelectedButton(letter)}>
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
