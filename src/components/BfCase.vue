<template>
  <div class="col-4">
    <router-link
      @click.native="$store.commit('case/setCurrentCase', value)"
      :to="{name: 'CaseDetail', params: {caseId: value.CaseId}}"
    >
      <div class="bf-case">
          <span class="bf-case-title">{{value.CaseId}} <span class="chevron">›</span></span>
          <div class="bf-case-body">
            <ul class="link-list">
              <li class="list-item">Type: <em>{{value.Type}}</em></li>
              <li class="list-item">Oprettet: <em>{{$moment(value.Started).format('DD-MM-YYYY')}}</em></li>
              <li class="list-item">Udløber: <em>{{$moment(value.Expires).format('DD-MM-YYYY')}}</em></li>
            </ul>
          </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BfCase',
  props: {
    value: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bf-case {
    color: #006b9a;
    background-color: #FFFFFF;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0px 1px 2px 0px rgba(27,27,29,0.2);
    box-shadow: 0px 1px 2px 0px rgba(27,27,29,0.2);
    -webkit-transition: 0.25s;
    -o-transition: 0.25s;
    transition: 0.25s;
}

.bf-case:hover {
  color: #243544;
  -webkit-box-shadow: rgba(27,27,29,0.25) 0px 0px 16px;
  box-shadow: rgba(27,27,29,0.25) 0px 0px 16px;
}

a {
  text-decoration: none;
}

.bf-case-title {
    display: block;
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    padding-bottom: .25rem;
    padding: 15px 30px;
}

.bf-case-body {
  border-top: 2px solid #f5f7f8;
  padding: 15px 30px;
  margin: 0 0 15px;
   /* padding: 15px; */
}

.chevron {
  float: right;
}
</style>
