<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Indsigtsportal</h1>
      </div>
    </div>
    <div class="row">
      <bf-case
        v-for="(c, index) in cases"
        :key="index"
        v-model="cases[index]"
      />
    </div>
  </div>
</template>

<script>
import BfCase from '@/components/BfCase'
import { mapGetters } from 'vuex'
export default {
  name: 'BfCaseList',
  components: {
    BfCase
  },
  computed: {
    ...mapGetters({
      cases: 'case/getCases'
    })
  },
  mounted () {
    this.$store.dispatch('case/getAll')
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
