import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Todo from '../Todo'
import Confetti from '../Confetti'

import pages, { references, makeObjArr } from './Source'
import './Layout.css'

function getWindowPath() {
  return window.location.pathname.replace('/', '')
}
function windowNotHome() {
  if (getWindowPath()) {
    return true
  }
  return false
}

class Layout extends Component {
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
          <>
            <header style={{ textAlign: 'center', width: '100%', padding: '0 2rem' }}>
              react-mini-projects
            </header>
            <div className="container">
              <div className="page-contents" style={{ position: 'relative' }}>
                <div className="project">
                  <Route path="/todo" exact component={Todo} />
                  <Route path="/confetti" exact component={Confetti} />
                </div>

                {/* FIXME: setstate to display correct references for page changes  */}

                {windowNotHome && (
                  <div className="references" style={{ position: 'absolute', bottom: 0 }}>
                    <ul>
                      {makeObjArr(references[getWindowPath()]).map(source => (
                        <li key={source.title}>
                          <a href={source.url} title={source.title}>
                            {source.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
          </>
        </Switch>
      </Router>
    )
  }
}

export default Layout
