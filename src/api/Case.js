import axios from 'axios'

/**
 * Defines the base url and headers for http calls
 */
const HTTP = axios.create({
  baseURL: 'http://dokportal.ballerup.dk/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT'
  }
})

export default {

  /**
   * Get all cases
   * @returns {Array}
   */
  getAll () {
    return HTTP.get(`/cases`)
      .then(response => {
        return response.data
      })
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
  }
}
