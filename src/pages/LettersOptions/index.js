import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View``

const Text = styled.Text``

const Button = styled.Button``

export default function LettersOptions() {
  return (
    <Container>
      <Text>
        Cada nível tem um grupo de letras do alfabeto para aprender sobre as
        letras!
      </Text>
      <Button title="1" />
      <Button title="2" />
      <Button title="3" />
      <Button title="4" />
      <Button title="5" />
    </Container>
  )
}
