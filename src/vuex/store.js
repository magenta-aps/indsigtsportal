import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import caseStore from './modules/case'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    auth: auth,
    case: caseStore
  }
})
