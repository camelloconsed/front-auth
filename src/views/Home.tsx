import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './Login/Login'
import LoginMail from './Login/LoginMail'

const Home: React.FC = props => {
  return (
    <BrowserRouter>
      <Route path="/" exact render={Login} />
      <Route path="/login" render={LoginMail} />
      {/* <Route path="/login-google" render={LoginGoogle} /> */}
    </BrowserRouter>
  )
}

export default Home
