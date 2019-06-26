import React from 'react'
import Layout from './components/Layout'
import { BrowserRouter as Router } from 'react-router-dom'

import '@csstools/normalize.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout />
      </Router>
    )
  }
}

export default App
