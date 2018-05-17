import Vue from 'vue'
import Router from 'vue-router'
import BfCaseDetail from '@/components/BfCaseDetail'
import BfCaseList from '@/components/BfCaseList'
import store from '@/vuex/store'

Vue.use(Router)

const ifAuthenticated = (to, from, next) => {
  var fragment = location.hash
  var dummyUrl = new URL('http://dummy.com?' + fragment.slice(1))
  var accessToken = dummyUrl.searchParams.get('access_token')
  store.dispatch('setAccessToken', accessToken)

  console.log(`is authenticated: ${store.getters.isAuthenticated}`)

  if (store.getters.isAuthenticated) {
    next()
    return
  }
  // store.dispatch('AUTH_LOGOUT')
  window.location = 'http://idp.magenta.dk:5000/runtime/oauth2/authorize.idp?response_type=token&client_id=magenta&scope=Indsigtsportal&redirect_uri=http://localhost:8080'
  // next('/login')
  // window.location = 'https://idp.ballerup.dk/runtime/oauth2/authorize.idp?response_type=token&state=&client_id=dhIdpTester&scope=DigitalHoring&redirect_uri=https%3A%2F%2Fdh-test.ballerup.dk%3A4000%2Fsignin-idpBalkOAuth2'
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CaseList',
      component: BfCaseList,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/:caseId',
      name: 'CaseDetail',
      component: BfCaseDetail
      // beforeEnter: ifAuthenticated
    }
  ]
})
