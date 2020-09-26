import styled from 'styled-components/native'

export const LetterContainer = styled.View`
  flex: 1;
  align-items: center;
  background: #f9ad30;
  padding: 30px 12px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 70px;
  text-align: center;
  color: white;
`

export const Letters = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily};
  text-align: center;
  font-size: 125px;
  color: black;
  padding: 25px 0px;
`
