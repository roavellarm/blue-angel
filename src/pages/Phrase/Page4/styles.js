import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const ImageContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`

export const Image = styled.Image``

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

export const Button = styled(RectButton)`
  background: ${({ isSelected }) => (isSelected ? 'red' : 'white')};
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 10px;
`
export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 30px;
  color: black;
`
