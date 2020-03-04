import React, { Fragment } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Login from './Login/Login'
import LoginData from './Login/LoginData'

const Home: React.FC = props => {
  return (
    <BrowserRouter>
      <Route path="/" exact render={Login} />
      <Route path="/login" render={LoginData} />
    </BrowserRouter>
  )
}

export default Home
