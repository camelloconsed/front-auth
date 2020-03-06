const baseUrlService: string = process.env.REACT_APP_SERVICES_URL || 'http://localhost'
const portService: string = process.env.REACT_APP_SERVICES_PORT || '4000'

export default {
  url: `${baseUrlService}:${portService}`
}
