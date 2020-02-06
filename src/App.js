import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Component from "./components/Component";

import pages from "./data/pages";

import "sanitize.css";

const Header = props => <Component as="h2" id="sidebar" p="0" m="0" {...props} />;

const App = props => {
  return (
    <Router>
      <Container theme={{ ...props.theme }}>
        <Component as="nav" id="sidebar" p="1rem">
          <Header>
            <a href="https://github.com/nntrn/react-mini-projects">react-mini-projects</a>
          </Header>
          <ul>
            {Object.keys(pages).map(page => (
              <li key={page}>
                <Link to={`./${page}`}>{page}</Link>
              </li>
            ))}
          </ul>
        </Component>
        <Component as="main" id="pages">
          <Switch>
            {Object.keys(pages).map(e => (
              <Route key={e} path={"/" + e} component={pages[e]} />
            ))}
          </Switch>
        </Component>
      </Container>
    </Router>
  );
};

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
`;

export default App;
