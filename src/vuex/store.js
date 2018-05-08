import Case from '@/api/Case'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cases: null,
    currentCase: null
  },
  mutations: {
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
  },
  actions: {
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
  },
  getters: {
    getCases: state => state.cases,
    getCurrentCase: state => state.currentCase
  }
})
