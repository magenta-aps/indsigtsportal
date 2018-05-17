import { AUTH_LOGOUT } from '../actions/auth'

const state = {
  accessToken: localStorage.getItem('access_token') || ''
}

const mutations = {
  [AUTH_LOGOUT] (state) {
    state.accessToken = ''
  }
}

const actions = {
  setAccessToken (state, token) {
    if (token == null) return
    console.log('token is set as ' + token)
    localStorage.setItem('access_token', token)
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  },

  [AUTH_LOGOUT]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGOUT)
      localStorage.removeItem('access_token')
      resolve()
    })
  }
}

const getters = {
  isAuthenticated: state => !!state.accessToken,
  accessToken: state => state.accessToken
}

export default {
  state,
  mutations,
  actions,
  getters
}
