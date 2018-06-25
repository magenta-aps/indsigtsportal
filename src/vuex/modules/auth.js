import { AUTH_LOGOUT, AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR } from '../actions/auth'
import { HTTP } from '@/api/Http'

const state = {
  accessToken: sessionStorage.getItem('access_token') || '',
  name: sessionStorage.getItem('name') || '',
  status: ''
}

const mutations = {
  [AUTH_LOGOUT] (state) {
    state.accessToken = ''
    state.name = ''
    state.status = ''
  },

  [AUTH_SUCCESS]: (state, token) => {
    state.accessToken = token
    state.status = ''
  },

  [AUTH_ERROR]: (state) => {
    state.status = 'Forkert CPR-nummer eller kodeord'
  },

  name: (state, name) => {
    state.name = name
  }
}

const actions = {
  setAccessToken (state, token) {
    if (token == null) return
    sessionStorage.setItem('access_token', token)
  },

  getName ({state, commit}) {
    return new Promise((resolve, reject) => {
      HTTP.get('/account/GetName')
        .then(response => {
          sessionStorage.setItem('name', response.data.name)
          commit('name', response.data.name)
          resolve(response)
        })
    })
  },

  [AUTH_REQUEST]: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      HTTP.post('/account', user)
        .then(resp => {
          const token = resp.data.token
          sessionStorage.setItem('access_token', token)
          HTTP.defaults.headers.common['Authorization'] = `Bearer ${token}`
          commit(AUTH_SUCCESS, token)
          dispatch('getName')
          resolve(resp)
        })
        .catch(err => {
          console.log(err)
          commit(AUTH_ERROR)
          sessionStorage.removeItem(AUTH_REQUEST)
          reject(err)
        })
    })
  },

  [AUTH_LOGOUT]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGOUT)
      sessionStorage.removeItem('access_token')
      sessionStorage.removeItem('name')
      resolve()
    })
  }
}

const getters = {
  isAuthenticated: state => !!state.accessToken,
  accessToken: state => state.accessToken,
  name: state => state.name,
  status: state => state.status
}

export default {
  state,
  mutations,
  actions,
  getters
}
