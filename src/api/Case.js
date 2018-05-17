// import axios from 'axios'
import { HTTP } from './Http'

/**
 * Defines the base url and headers for http calls
 */
// const HTTP = axios.create({
//   // baseURL: 'http://dokportal.ballerup.dk/api',
//   baseURL: 'http://backend.magenta.dk:5000/api',
//   headers: {
//     'X-Requested-With': 'XMLHttpRequest',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
//     'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT'
//   }
// })

export default {

  /**
   * Get all cases
   * @returns {Array}
   */
  getAll () {
    console.log('get all')
    return HTTP.get(`/cases`, {headers: {'Authorization': 'some value'}})
      .then(response => {
        return response.data
      })
      .catch(error => console.log(error))
  },

  /**
   * Get info for case
   * @param {String} caseId - The case to fetch
   * @returns {Object}
   */
  get (caseId) {
    return HTTP.get(`/cases/${caseId}`)
      .then(response => {
        return response.data
      })
      .catch(error => console.log(error))
  },

  /**
   * Download a file
   * @param {String} fileId - The file to download
   * @returns {*}
   */
  downloadFile (fileId) {
    return HTTP.get(`/downloads/${fileId}`)
      .then(response => {
        return response
      })
      .catch(error => console.log(error))
  }
}
