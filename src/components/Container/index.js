import React from 'react'
import styled from 'styled-components/native'

const StyledContainer = styled.ScrollView`
  flex: 1;
  background: ${({ color }) => color || '#4cb3ff'};
  padding: ${({ hasPadding }) => (hasPadding ? '30px 12px' : '30px 0px')};
`

export default function Container({ color, hasPadding = true, children }) {
  return (
    <StyledContainer
      color={color}
      hasPadding={hasPadding}
      contentContainerStyle={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </StyledContainer>
  )
}
