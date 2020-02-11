import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom'

import SvgIcon from './components/SvgIcon'
import Component from './components/Component'

import pages from './data/pages'

import 'sanitize.css'

const Header = props => <Component as="h2" id="sidebar" p="0" m="0" {...props} />

const App = props => {
  return (
    <Router>
      <Container theme={{ ...props.theme }}>
        <Component as="nav" p="1rem" className="dark">
          <Header className="title">
            <Link to="/">react-mini-projects</Link>
          </Header>
          <ul>
            {Object.keys(pages).map(page => (
              <li key={page}>
                <Link to={`/react-mini-projects/${page}`}>
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </Component>
        <Switch>
          <Route path="/react-mini-projects/:id" children={<Child />} />
        </Switch>
      </Container>
      <Footer>
        <a href="https://github.com/nntrn/react-mini-projects">
          <SvgIcon viewBox="0 0 16 16" size="24" fill="#aaa" className="hover-opacity">
            <path
              fillRule="evenodd"
              d="M8 0a8 8 0 00-2.5 15.6c.4 0 .5-.2.5-.4v-1.5c-2 .4-2.5-.5-2.7-1 0-.1-.5-.9-.8-1-.3-.2-.7-.6 0-.6.6 0 1 .6 1.2.8.7 1.2 1.9 1 2.4.7 0-.5.2-.9.5-1-1.8-.3-3.7-1-3.7-4 0-.9.3-1.6.8-2.2 0-.2-.3-1 .1-2 0 0 .7-.3 2.2.7a7.4 7.4 0 014 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 2 .1 2.1.5.6.8 1.3.8 2.2 0 3-1.9 3.7-3.6 4 .3.2.5.7.5 1.4v2.2c0 .2.1.5.5.4A8 8 0 0016 8a8 8 0 00-8-8z"
            />
          </SvgIcon>
        </a>
      </Footer>
    </Router>
  )
}

// https://reacttraining.com/react-router/web/example/url-params
function Child() {
  let { id } = useParams()

  return (
    <Component as="main">
      <div className="page">
        <Title className="page-title">{id}</Title>
        <>{pages[id]}</>
        <div style={{ paddingBottom: '5rem' }} />
      </div>
    </Component>
  )
}

const Title = styled.h1`
  border-bottom: 4px dotted #222;
  margin-top: 0;
`

const Footer = styled.footer`
  padding: 0.25rem;
  text-align: center;
  font-size: 0.9em;
  position: fixed;
  bottom: 0;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height:100vh;

  & > * {
    padding: 0.5rem;
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.05);
  }
  & main {
    flex-grow: 3;
    background: ${props => props.theme.background};
    height: 100%;
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
      main {
        width: 100%;
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
