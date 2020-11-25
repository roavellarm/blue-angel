import styled from 'styled-components/native'

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 50px;
  padding: 30px 0px;
  line-height: 75px;
  text-align: center;
  color: white;
`

export const Image = styled.Image`
  display: flex;
  align-self: flex-end;
  height: 100px;
  width: 100px;
`
