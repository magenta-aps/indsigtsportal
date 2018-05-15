import Vue from 'vue'
import Vuex from 'vuex'
import caseStore from './modules/case'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    case: caseStore
  }
})
