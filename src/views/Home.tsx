import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './Login/Login'
import LoginMail from './Login/LoginMail'
import Register from './Register/Register'

const Home: React.FC = props => {
  return (
    <BrowserRouter>
      <Route path="/" exact render={Login} />
      <Route path="/login" render={LoginMail} />
      <Route path="/register" render={Register} />
    </BrowserRouter>
  )
}

export default Home
