<template>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="logo"/>
            <div id="secondary-nav">
              <ul class="secondary-nav__items" v-if="isAuthenticated">
                <li class="secondary-nav__item">
                  {{name}}
                </li>
                <li class="secondary-nav__item">
                  <span @click="logout">Log ud</span>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    <div id="panel-pane">
      <div id="red-ribbon"/>
    </div>
  </header>
</template>

<script>
import { AUTH_LOGOUT } from '@/vuex/actions/auth'
import { mapGetters } from 'vuex'

export default {
  name: 'BfHeader',
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      name: 'name'
    })
  },
  methods: {
    logout: function () {
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push(''), this.$router.go())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: white;
  margin-bottom: 0;
  padding-bottom: 0;
}

.logo {
  width: 132px;
  height: 58px;
  display: block;
  float: left;
  background: url('/static/byvaaben.png') no-repeat center center;
  background-size: cover;
}
#panel-pane {
  height: 50px;
  width: 100vw;
  background: url('/static/kultur_forside2.jpg') no-repeat center center;
  background-size: cover;
}
#red-ribbon {
  background-color: rgba(180, 65, 46, 0.8);
  width: 100%;
  height: 100%;
}

#secondary-nav {
    position: absolute;
    right: 10px;
}

.secondary-nav__items {
    list-style: none;
    padding: 0;
    margin: 0;
}

.secondary-nav__item {
    display: inline-block;
    margin-left: 26px;
}

.secondary-nav__item span {
    font-size: 12px;
    font-weight: bold;
    color: #243544;
    text-decoration: none;
    cursor: pointer;
}
</style>
