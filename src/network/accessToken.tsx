import axios from 'axios'
import { network } from '../config'
import Cookies from 'js-cookie'

export const getToken = async (credentials: { email: string; password: string }) => {
  console.log(credentials)

  const request = {
    grant_type: 'password',
    client_id: network.clientID,
    client_secret: network.clientSecret,
    username: credentials.email,
    password: credentials.password
  }

  const response = await axios.post(`${network.baseUrl}/oauth/token`, request)
  Cookies.set('token', response.data.access_token, { domain: network.cookieHost })
  Cookies.set('ref_token', response.data.refresh_token, { domain: network.cookieHost })
  console.log(response.status)
  return response
  // window.location.href = network.redirectUrl
}
