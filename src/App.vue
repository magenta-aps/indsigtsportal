<template>
  <div id="app">
    <bf-header/>
    <router-view/>
  </div>
</template>

<script>
import BfHeader from '@/components/BfHeader'
export default {
  name: 'App',
  components: {
    BfHeader
  }
}
</script>

<style>
#app {
  color: #2c3e50;
}
</style>
