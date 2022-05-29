import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import swDev from './swDev'
import './index.css'
import './bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
swDev()
