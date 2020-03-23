import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './Login/Login'
import LoginMail from './Login/LoginMail'
import Register from './Register/Register'

const Home: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/login">
        <LoginMail />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </BrowserRouter>
  )
}

export default Home
