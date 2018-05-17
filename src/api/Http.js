import axios from 'axios'
import store from '@/vuex/store'

/**
 * Defines the base url and headers for http calls
 */
export const HTTP = axios.create({
  // baseURL: 'http://dokportal.ballerup.dk/api',
  baseURL: 'http://backend.magenta.dk:5000/api',
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    // 'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
    'Authorization': 'Bearer hurra'
  }
})

HTTP.interceptors.request.use(config => {
  // Do something before request is sent
  let token = store.getters.accessToken
  console.log('http is intercepted and header is added. Token: ' + token)
  config.headers.Authorization = `Bearer ${token}`
  return config
},
error => Promise.reject(error)
)
