import Vue from 'vue'
import Router from 'vue-router'
import BfCaseDetail from '@/components/BfCaseDetail'
import BfCaseList from '@/components/BfCaseList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CaseList',
      component: BfCaseList
    },
    {
      path: '/:caseId',
      name: 'CaseDetail',
      component: BfCaseDetail
    }
  ]
})
