// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'url-polyfill'
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import moment from 'moment'
import VueMomentJS from 'vue-momentjs'
import { HTTP } from '@/api/Http'

Vue.use(VueMomentJS, moment)

Vue.config.productionTip = false

const token = sessionStorage.getItem('access_token')
if (token) {
  HTTP.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
