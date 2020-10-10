import styled from 'styled-components/native';

export const Text = styled.Text`
font-family: ${({ theme }) => theme.text.fontFamily};
 font-size: 25px;
 line-height: 37px;
 color: white;
 text-align: center;
 padding: 20px 0px;
`
export const ButtonView = styled.Button`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
`