import axios from 'axios'

/**
 * Defines the base url and headers for http calls
 */
const HTTP = axios.create({
  baseURL: 'http://localhost:8081',
  // baseURL: '/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT'
  }
})

// const dummyData = require('../static/data.json')

export default {

  /**
   * Get all cases
   * @returns {Array}
   */
  getAll () {
    // return HTTP.get(`/cases/`)
    return HTTP.get(`/static/data.json`)
      .then(response => {
        // return response
        console.log(response.data)
        return response.data
      })
  },

  /**
   * Get info for case
   * @param {String} caseId - The case to fetch
   * @returns {Object}
   */
  get (caseId) {
    // return HTTP.get(`/cases/${caseId}`)
    return HTTP.get(`/static/data.json`)
      .then(response => {
        return response.data[0]
      })
  },

  /**
   * Download a file
   * @param {String} fileId - The file to download
   * @returns {*}
   */
  download (fileId) {
    return HTTP.get(`/downloads/${fileId}`)
      .then(response => {
        return response
      })
  }
}
