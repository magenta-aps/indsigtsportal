import { HTTP } from './Http'

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
  downloadFile (file) {
    return HTTP.get(`/downloads/${file.FileId}`, {'responseType': 'blob'})
      .then(response => {
        const blob = new Blob([response.data])
        if (window.navigator.msSaveBlob) { // internet explorer
          window.navigator.msSaveOrOpenBlob(blob, file.FileName)
        } else {
          const url = window.URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', file.FileName)
          document.body.appendChild(link)
          link.click()
        }
      })
      .catch(error => console.log(error))
  }
}
