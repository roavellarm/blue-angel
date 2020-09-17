import React from 'react'
import { useNavigation } from '@react-navigation/native'
import abc from '../../assets/images/abc-button.png'
import book from '../../assets/images/book-button.png'
import pencil from '../../assets/images/pencil-button.png'
import Button from '../../components/HomeButton'
import { Container } from './styles'

export default function Home() {
  const { navigate } = useNavigation()

  return (
    <Container>
      <Button image={abc} onPress={() => navigate('LettersOptions')} />
      <Button image={book} />
      <Button image={pencil} />
    </Container>
  )
}
