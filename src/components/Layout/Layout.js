import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Todo from '../Todo'
import './Layout.css'

export const pages = [
  {
    id: 1,
    title: 'Home',
    url: '/'
  },
  {
    id: 2,
    title: 'Todo',
    url: '/todo'
  },
  {
    id: 3,
    title: 'Confetti',
    url: '/confetti'
  }
]

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pages: pages
    }
  }
  render() {
    const { pages } = this.state
    return (
      <Router>
        <Switch>
          <div className="container">
            <div className="page-contents">
              <Route path="/todo" exact component={Todo} />
            </div>
            <div className="menu">
              <ul className="toc list-unstyled">
                {pages.map(page => (
                  <li key={page.id}>
                    <Link to={page.url}>{page.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Switch>
      </Router>
    )
  }
}

export default Layout
