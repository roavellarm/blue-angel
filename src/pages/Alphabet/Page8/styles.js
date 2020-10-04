import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const ImageContainer = styled.View`
  background: white;
  border-radius: 15px;
  padding: 15px;
  margin: 30px 0px;
`

export const Image = styled.Image`
  width: 150px;
  height: 150px;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  max-width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px 0px;
`

export const Button = styled(RectButton)`
  background: white;
  border-radius: 8px;
  height: 80px;
  width: 80px;
  justify-content: center;
  align-items: center;
  margin: 30px;
`

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 60px;
  color: black;
`
