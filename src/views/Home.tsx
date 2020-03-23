import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './Login/Login'
import LoginMail from './Login/LoginMail'
import Register from './Register/Register'
import RecoverPassword from './Password/RecoverPassword'
import CreatePassword from './Password/CreatePassword'
import SuccessPassword from './Password/SuccessPassword'

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
      <Route path="/recoverpassword">
        <RecoverPassword />
      </Route>
      <Route path="/createpassword">
        <CreatePassword />
      </Route>
      <Route path="/successpassword">
        <SuccessPassword />
      </Route>
    </BrowserRouter>
  )
}

export default Home
