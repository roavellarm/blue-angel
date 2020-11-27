import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const ImageContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`

export const Image = styled.Image``

export const ButtonsContainer = styled.View`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Button = styled(RectButton)`
  background: white;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 10px 30px;
`
export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 40px;
  color: black;
`
