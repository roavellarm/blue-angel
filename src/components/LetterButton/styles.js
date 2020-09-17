import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const ButtonContainer = styled(RectButton)`
  background: #862cbe;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  margin: 10px;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 24px;
  color: white;
`
