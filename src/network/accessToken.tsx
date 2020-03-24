import axios from 'axios'
import { network } from '../config'

export const getToken = (credentials: { email: string; password: string }) => {
  const request = {
    grant_type: 'password',
    client_id: network.clientID,
    client_secret: network.clientSecret,
    username: credentials.email,
    password: credentials.password
  }

  return axios.post(`${network.baseUrl}/oauth/token`, request)
}
