import Vue from 'vue'
import Router from 'vue-router'
import BfCaseDetail from '@/components/BfCaseDetail'
import BfCaseList from '@/components/BfCaseList'
import BfLogin from '@/components/BfLogin'
import store from '@/vuex/store'

Vue.use(Router)

const ifAuthenticated = (to, from, next) => {
  var fragment = location.hash
  var dummyUrl = new URL('http://dummy.com?' + fragment.slice(1))
  var accessToken = dummyUrl.searchParams.get('access_token')
  store.dispatch('setAccessToken', accessToken)

  if (store.getters.isAuthenticated) {
    next()
    return
  }

  store.dispatch('AUTH_LOGOUT')
  next('/login')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: BfLogin
    },
    {
      path: '/',
      name: 'CaseList',
      component: BfCaseList,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/:caseId',
      name: 'CaseDetail',
      component: BfCaseDetail,
      beforeEnter: ifAuthenticated
    }
  ]
})
