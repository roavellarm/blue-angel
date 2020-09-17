import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const ButtonContainer = styled(RectButton)`
  background: ${({ theme }) => theme.colors.buttonBackground};
  width: 120px;
  height: 120px;
  padding: 20px;
  border-radius: 20px;
  margin: 10px;
`

export const ButtonImage = styled.Image`
  height: 100%;
  width: auto;
`
