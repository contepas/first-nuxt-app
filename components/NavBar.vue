<template>
  <div class="nav">
    <nuxt-link to="/" class="brand">
      Real World Events
    </nuxt-link>
    <nav>
      <nuxt-link to="/event">
        List
      </nuxt-link>
      |
      <nuxt-link to="/event/create"> Create </nuxt-link>
      <div v-if="auth">
        |
        <nuxt-link to="/secret">
          Secret
        </nuxt-link>
        |
        <button @click="logout">
          Logout
        </button>
      </div>
      <div v-else>
        |
        <nuxt-link to="/login">
          Login
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const Cookie = process.client ? require('js-cookie') : undefined

export default {
  computed: mapGetters({
    auth: 'authentication/get'
  }),
  methods: {
    logout() {
      Cookie.remove('auth')
      this.$store.commit('authentication/SET_AUTH', null)
    }
  }
}
</script>

<style scoped>
.brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
.nav a {
  display: inline-block;
}
</style>
