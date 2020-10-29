import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const ImageContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  color: white;
`

export const Image = styled.Image`
  display: flex;
  padding-top: 20px;
  line-height: 30px;
  text-align: center;
  color: white;
`
export const ButtonsContainer = styled.View`
  width: 100%;
  display: flex;
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
  font-size: 60px;
  color: black;
`
