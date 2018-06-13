import axios from 'axios'

/**
 * Defines the base url and headers for http calls
 */
export const HTTP = axios.create({
  baseURL: 'https://dokportal.ballerup.dk/api'
})
