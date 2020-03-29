import axios from 'axios'
import { network } from '../config'

export const forgotPassword = (email: string ) => {
  const request = {
    email
  }

  return axios.post(`${network.baseUrl}/password/forgot`, request)
}
