import React from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import abc from '../../assets/images/buttons/abc-button.png'
import book from '../../assets/images/buttons/book-button.png'
import pencil from '../../assets/images/buttons/pencil-button.png'
import Button from '../../components/HomeButton'
import { Container } from './styles'

export default function Home() {
  const { navigate } = useNavigation()

  const buttonsList = [
    { image: abc, action: () => navigate('Alphabet-Page1') },
    { image: book, action: () => Alert.alert('You clicked me!') },
    { image: pencil, action: () => Alert.alert('You clicked me!') },
  ]

  return (
    <Container>
      {buttonsList.map((button, index) => (
        <Button
          key={index}
          image={button.image}
          onPress={button.action}
          enabled={button.image === abc}
        />
      ))}
    </Container>
  )
}
