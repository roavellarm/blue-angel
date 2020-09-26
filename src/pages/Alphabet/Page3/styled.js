import styled from 'styled-components/native'

export const Image = styled.Image`
  height: 200px;
  width: 200px;
  margin-top: 30px;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 40px;
  text-align: center;
  line-height: 60px;
  margin: 30px;
`
