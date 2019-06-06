import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Todo from '../Todo'
import Confetti from '../Confetti'
import Hooks from '../Hooks'
import Clock from '../Clock'

import pages, { references, makeObjArr } from './Source'
import './Layout.css'

function getWindowPath() {
  let hrefSplit = window.location.href.split('/')
  return hrefSplit[hrefSplit.length - 1]
}
function windowNotHome() {
  if (getWindowPath()) {
    return true
  }
  return false
}

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
            <header>
              <a href="https://github.com/nntrn/react-mini-projects">react-mini-projects</a>
            </header>
            <br />
            <div className="menu">
              <ul className="list-unstyled">
                {pages.map(page => (
                  <li key={page.id}>
                    <Link to={page.url}>{page.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="project">
              <Route path="/" exact component={Home} />
              <Route path="/todo" exact component={Todo} />
              <Route path="/confetti" exact component={Confetti} />
              <Route path="/hooks" exact component={Hooks} />
              <Route path="/clock" exact component={Clock} />
            </div>

            {/* FIXME: setstate to display correct references for page changes  */}

            {windowNotHome && (
              <div className="references">
                <div className="box">
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
              </div>
            )}
          </div>
        </Switch>
      </Router>
    )
  }
}
const Home = () => <></>
export default Layout
