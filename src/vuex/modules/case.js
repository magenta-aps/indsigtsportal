import Case from '@/api/Case'

const state = {
  cases: null,
  currentCase: null
}

const mutations = {
  setCases (state, cases) {
    cases.sort(function (a, b) {
      return a.Type > b.Type
    })
    cases.sort()

    state.cases = cases
  },
  setCurrentCase (state, currentCase) {
    state.currentCase = currentCase
  }
}

const actions = {
  getAll ({commit}) {
    return Case.getAll()
      .then(response => commit('setCases', response))
      .catch(error => console.log(error))
  },

  get ({commit}, caseId) {
    return Case.get(caseId)
      .then(response => commit('setCurrentCase', response))
      .catch(error => console.log(error))
  },

  downloadFile ({commit}, fileId) {
    return Case.downloadFile(fileId)
      .then(response => window.open(response.config.url, '_blank'))
      .catch(error => console.log(error))
  }
}

const getters = {
  getCases: state => state.cases,
  getCurrentCase: state => state.currentCase
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
