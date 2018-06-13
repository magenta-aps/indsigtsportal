<template>
  <div id="app">
    <bf-header/>
    <router-view/>
  </div>
</template>

<script>
import BfHeader from '@/components/BfHeader'
import { HTTP } from '@/api/Http'
import { AUTH_LOGOUT } from '@/vuex/actions/auth'

export default {
  name: 'App',
  components: {
    BfHeader
  },
  created () {
    HTTP.interceptors.response.use(undefined, err => {
      return new Promise(function (resolve, reject) {
        if (err.response.status === 401 && err.response.config && !err.response.config.__isRetryRequest) {
          this.$store.dispatch(AUTH_LOGOUT)
          this.$router.push('/')
          this.$router.go()
        }
        throw err
      })
    })
  }
}
</script>

<style>
#app {
  color: #2c3e50;
}
</style>
