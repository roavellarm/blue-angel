import styled from 'styled-components/native'

export const Container = styled.View`
  background: #0e457f;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Image = styled.Image`
  height: 250px;
  width: 250px;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 35px;
  text-align: center;
  line-height: 55px;
  color: white;
  padding: 30px 0px;
`
