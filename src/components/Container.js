import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;

  & > * {
    border: 1px solid ${props => props.theme.border};
    padding: 0.5rem;
  }
  & main {
    flex-grow: 3;
    background: ${props => props.theme.background};
    height: 100vh;
    overflow-y: scroll;
  }
  & nav {
    flex-grow: 1;
  }
`

export default function ({children, ...attr}) {
  return <Container {...attr}>{children}</Container>
}
