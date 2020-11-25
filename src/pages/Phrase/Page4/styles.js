import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const ImageContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  padding-bottom: 30px;
`

export const Image = styled.Image``

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

export const Button = styled(RectButton)`
  background: white;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 20px;
`
export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 40px;
  color: black;
`
