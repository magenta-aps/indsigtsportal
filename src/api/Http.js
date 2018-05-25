import axios from 'axios'
// import store from '@/vuex/store'

/**
 * Defines the base url and headers for http calls
 */
export const HTTP = axios.create({
  baseURL: 'https://dokportal.ballerup.dk/api',
  // baseURL: 'http://backend.magenta.dk:5000/api',
  headers: {
    // 'Authorization': `Bearer ${store.getters.accessToken}`
    // 'X-Requested-With': 'XMLHttpRequest',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    // 'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT'
  }
})
