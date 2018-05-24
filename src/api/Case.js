import { HTTP } from './Http'
import store from '@/vuex/store'

export default {

  /**
   * Get all cases
   * @returns {Array}
   */
  getAll () {
    console.log('get all')
    return HTTP.get(`/cases`, {headers: {'Authorization': 'Bearer ' + store.getters.accessToken}})
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
    return HTTP.get(`/cases/${caseId}`, {headers: {'Authorization': 'Bearer ' + store.getters.accessToken}})
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
    return HTTP.get(`/downloads/${fileId}`, {headers: {'Authorization': 'Bearer ' + store.getters.accessToken}})
      .then(response => {
        return response
      })
      .catch(error => console.log(error))
  }
}
