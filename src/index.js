import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './style/global.scss'

const theme = {
  border: '#e1e4e8',
  background: '#f6f8fa',
  dark: '#24292e',
  light: '#eee',
}

ReactDOM.render(<App theme={{ ...theme }} />, document.getElementById('root'))
