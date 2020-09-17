import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  background: #0daecc;
  align-items: center;
  padding-top: 40px;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 30px;
  text-align: center;
  color: white;
  margin-bottom: 15px;
`

export const Image = styled.Image`
  position: absolute;
  z-index: -1;
  right: 0px;
  margin-top: 50%;
  height: 100px;
  width: 100px;
`

export const Button = styled(RectButton)`
  background: white;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 5px;
`

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 60px;
  color: black;
`
