import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'

// Styles
import GlobalStyles from './styles/GlobalStyles'

// elements

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
