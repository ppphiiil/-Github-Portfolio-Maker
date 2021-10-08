import React from 'react'
import App from './App.js'
import reactDOM from 'react-dom'
import MyContextContainer from './MyContextContainer'

reactDOM.render(
  <MyContextContainer>
    <App />
  </MyContextContainer>,
  document.getElementById('root')
)
