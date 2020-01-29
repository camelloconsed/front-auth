const baseUrlService = process.env.REACT_APP_SERVICES_URL || 'http://localhost';
const portService = process.env.REACT_APP_SERVICES_PORT || '4000';

export default {
  url: `${baseUrlService}:${portService}`
};
