import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Todo from '../Todo'
import Confetti from '../Confetti'
import Clock from '../Clock'
import Weather from '../Weather'
import GitRepos from '../GitRepos'

import pages, { references, makeObjArr } from './Source'
import './layout.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pages: pages,
      references: references
    }
  }
  render() {
    const { pages, references } = this.state

    return (
      <Router>
        <Switch>
          <div className="container">
            <nav>
              <header>
                <a href="https://github.com/nntrn/react-mini-projects">react-mini-projects</a>
              </header>
              <ul>
                {pages.map(page => (
                  <li key={page.id}>
                    <Link to={page.url}>{page.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <main id="pages">
              <Route path="/" exact component={Home} />
              <Route path="/todo" exact component={Todo} />
              <Route path="/confetti" exact component={Confetti} />
              <Route path="/clock" exact component={Clock} />
              <Route path="/weather" exact component={Weather} />
              <Route path="/gitrepos" exact component={GitRepos} />
            </main>
          </div>
        </Switch>
      </Router>
    )
  }
}
const Home = () => <></>
export default Layout
