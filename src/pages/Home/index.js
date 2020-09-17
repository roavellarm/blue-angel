import React from 'react'
import abc from '../../assets/images/abc-button.png'
import book from '../../assets/images/book-button.png'
import pencil from '../../assets/images/pencil-button.png'
import Button from '../../components/HomeButton'
import { Container } from './styles'

export default function Home() {
  return (
    <Container>
      <Button image={abc} />
      <Button image={book} />
      <Button image={pencil} />
    </Container>
  )
}
