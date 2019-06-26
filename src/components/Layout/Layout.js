import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import Todo from '../Todo'
import Confetti from '../Confetti'
import Clock from '../Clock'
import Weather from '../Weather'
import GitRepos from '../GitRepos'

import pages from './Source'
import './layout.scss'

function Layout() {
  return (
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
        <Switch>
          <Route path="/todo" exact component={Todo} />
          <Route path="/confetti" exact component={Confetti} />
          <Route path="/clock" exact component={Clock} />
          <Route path="/weather" exact component={Weather} />
          <Route path="/gitrepos" exact component={GitRepos} />
        </Switch>
      </main>
    </div>
  )
}

export default Layout
