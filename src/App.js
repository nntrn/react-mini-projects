import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Component from './components/Component'

import pages from './data/pages'

import 'sanitize.css'

const Header = props => <Component as="h2" id="sidebar" p="0" m="0" {...props} />

const App = props => {
  const [page, setPage] = useState(window.location.pathname.replace(/[^\w]/g, ''))
  const handleHour = p => setPage(p)

  return (
    <Router>
      <Container theme={{ ...props.theme }}>
        <Component as="nav" p="1rem" className="dark">
          <Header className="title">
            <a href="https://github.com/nntrn/react-mini-projects">react-mini-projects</a>
          </Header>
          <ul>
            {Object.keys(pages).map(page => (
              <li key={page}>
                <Link to={`./${page}`} onClick={() => handleHour(page)}>
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </Component>
        <Component as="main">
          <div className="page">
            <Title className="page-title">{page}</Title>
            <Switch>
              <Route path={'/' + page} component={pages[page]} />
            </Switch>
            <div style={{ paddingBottom: '5rem' }} />
          </div>
        </Component>
      </Container>
      <Footer>&copy; annie tran</Footer>
    </Router>
  )
}

const Title = styled.h1`
  border-bottom: 4px dotted #222;
  margin-top: 0;
`

const Footer = styled.footer`
padding:.25rem;
text-align:center;
font-size:.9em;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height:100%;

  & > * {
    padding: 0.5rem;
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.05);
  }
  & main {
    flex-grow: 3;
    background: ${props => props.theme.background};
    height: 100vh;
    overflow-y: scroll;
    & .page {
      padding: 1.5rem;
      height: 100%;
      width: 100%;
    }
  }
  & nav {
    flex-grow: 1;
    border: 1px solid ${props => props.theme.dark};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    ul {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 0;
    }
    & li {
      margin: 0.1rem 0;
    }
    & a {
      padding: 0.1rem 0.3rem;
      border-radius: 2px;
      text-decoration: none;
      &:hover {
        background: rgba(103, 103, 103, 0.8);
        transition: all 200ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    }
    @media (min-width: 600px) {
      ul {
        display: block;
      }
      nav {
        position: sticky;
        top: 0;
      }
    }
  }

  .dark {
    background: ${props => props.theme.dark};
    color: ${props => props.theme.light};
    .title,
    .title * {
      opacity: unset;
      color: ${props => props.theme.light};
    }
    & a {
      color: ${props => props.theme.light};
      opacity: 0.8;
    }
  }
`

export default App
