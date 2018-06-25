<template>
  <div class="container">
    <h2>Login</h2>
    <div class="alert alert-danger" v-if="status">
      {{status}}
    </div>
    <form method="post" enctype="multipart/form-data" @submit.prevent="login">
      <p>
        <label for="cpr">CPR-nummer</label><br/>
        <input type="text" id="cpr" name="cpr" v-model="user.cpr" placeholder="CPR-nummer"/>
        <label for="password">Kodeord</label><br/>
        <input type="password" id="password" name="password" v-model="user.password" placeholder="Kodeord"/>
      </p>
      <input type="submit" value="Login" accesskey="l"/>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { AUTH_REQUEST } from '@/vuex/actions/auth'
export default {
  name: 'BfLogin',
  data () {
    return {
      user: {
        cpr: null,
        password: null
      }
    }
  },
  computed: {
    ...mapGetters({
      status: 'status'
    })
  },
  methods: {
    login () {
      const formData = new FormData()
      formData.append('cpr', this.user.cpr)
      formData.append('password', this.user.password)
      this.$store.dispatch(AUTH_REQUEST, formData).then(() => {
        this.$router.push('/')
      })
    }
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

input {
  display: block;
  /* width: 100%; */
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
}

input[type=submit] {
  background-color: rgb(0, 145, 209);
  color: white;
  transition: background-color .15s ease-in-out;
}

input[type=submit]:hover {
  background-color: rgb(0, 98, 143);
  transition: background-color .15s ease-in-out;
}
</style>
