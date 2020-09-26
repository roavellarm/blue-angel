import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Button from '../../../components/LetterButton'
import * as S from './styles'

const options = [
  { letters: 'A B C D E' },
  { letters: 'F G H I J' },
  { letters: 'K L M N O' },
  { letters: 'P Q R S T' },
  { letters: 'U V X Y W Z' },
]

export default function Page2({ route }) {
  const { choice } = route.params
  const { navigate } = useNavigation()
  const { letters } = options[choice - 1]

  const handleOnPress = () =>
    navigate({ name: 'Alphabet-Page3', params: letters })

  return (
    <S.LetterContainer>
      <S.Title>Vamos aprender:</S.Title>
      <S.Letters>{letters}</S.Letters>
      <Button title="VAMOS LÁ!" onPress={handleOnPress} />
    </S.LetterContainer>
  )
}
