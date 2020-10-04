import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const ImageContainer = styled.View`
  background: white;
  border-radius: 15px;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 10px 0px;
`

export const Image = styled.Image`
  height: 100%;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
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
  height: 100px;
  width: 100px;
  justify-content: center;
  align-items: center;
  margin: 25px;
`

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 80px;
  color: black;
`
