import styled from 'styled-components/native'
import { opacify } from 'polished'
import { RectButton } from 'react-native-gesture-handler'

export const ButtonContainer = styled(RectButton)`
  background: ${({ theme, enabled }) => {
    return enabled
      ? theme.colors.buttonBackground
      : opacify(-0.5, theme.colors.buttonBackground)
  }};
  width: 120px;
  height: 120px;
  padding: 20px;
  border-radius: 20px;
  margin: 10px;
`

export const ButtonImage = styled.Image`
  height: 100%;
  width: 100%;
  opacity: ${({ enabled }) => (!enabled ? '0.2' : '1')};
`
