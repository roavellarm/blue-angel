import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 25px;
  line-height: 37px;
  color: white;
  text-align: center;
  padding: 20px 0px;
`

export const Button = styled(RectButton)`
  margin: 5px;
  width: 70px;
  height: 70px;
  border-radius: 70px;
  background-color: #753192;
  justify-content: center;
  align-items: center;
`
export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 35px;
  color: white;
`

export const ButtonsContainer = styled.View`
  flex: 1;
  width: 100%;
`

export const ImageBackground = styled.ImageBackground`
  height: 400px;
  width: 225px;
  align-items: flex-end;
  padding-right: 5px;
  margin-bottom: 30px;
`
