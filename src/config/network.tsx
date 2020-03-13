const baseUrlService: string = process.env.REACT_APP_SERVICES_URL || 'http://localhost'
const portService: string = process.env.REACT_APP_SERVICES_PORT || '4000'

declare var process: {
  env: {
    [key: string]: string
  }
}

const network = {
  baseUrl: `${baseUrlService}:${portService}`,
  clientID: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  cookieHost: process.env.REACT_APP_COOKIE_HOST,
  redirectUrl: process.env.REACT_APP_REDIRECT_URL
}

export default network
