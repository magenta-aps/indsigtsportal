<template>
  <div v-if="currentCase" class="container">
    <router-link :to="{name: 'CaseList'}" class="btn">
      <span class="chevron">&#x2039;</span> Tilbage
    </router-link>
    <h1>{{currentCase.CaseId}}</h1>
    <div class="alert alert-danger">
      Dokumenterne fjernes efter den {{$moment(currentCase.Expires).format('DD-MM-YYYY')}}. Husk at hente filerne til dit eget arkiv inden denne dato.
    </div>

    <h2>Dokumenter</h2>
    <ul class="link-list">
      <li v-for="(f, index) in currentCase.Files" :key="index">
        <button @click="$store.dispatch('case/downloadFile', f)">
          {{f.FileName}}
        </button>
        (Tilføjet {{$moment(f.Created).format('DD-MM-YYYY')}})
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BfCaseDetail',
  props: {
    value: Object
  },
  computed: {
    ...mapGetters({
      currentCase: 'case/getCurrentCase'
    })
  },
  watch: {
    currentCase (val) {
      if (val == null) this.$store.dispatch('case/get', this.$route.params.caseId)
    }
  },
  mounted () {
    if (this.currentCase == null) this.$store.dispatch('case/get', this.$route.params.caseId)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert {
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;
}
.alert-danger {
  color: #721c24;
  font-weight: bold;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.btn {
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
}

.btn:hover {
  color: #006b9a;
}

.chevron {
  display: inline-block;
  background-color: #333;
  color: white;
  vertical-align: middle;
  text-align: center;
  width: 16px;
  height: 16px;
  margin-right: 5px;
  margin-bottom: 2px;
  border-radius: 50%;
  font-size: 20px;
  line-height: 15px;
  -webkit-font-smoothing: antialiased;
}

h1 {
  margin-top: 10px
}

button {
     background:none!important;
     color:#006b9a;
     border:none;
     padding:0!important;
     margin-bottom: 10px;
     font: inherit;
     cursor: pointer;
}

button:hover {
  color: #243544;
}
</style>
