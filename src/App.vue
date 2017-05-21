<template>
  <div id="app">
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-primary">
  
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand" to="/customers">Customers</router-link>
  
      <div class="collapse navbar-collapse">
        <div class="collapse navbar-collapse justify-content-end">
          <span v-if="!logged" class="nav-item">
            <router-link class="nav-link" to="/">Login</router-link>
          </span>
          <span v-if="logged" @click="logout" class="nav-item">
            <button class="btn btn-outline-secondary my-2 my-sm-0" type="button">Logout</button>
          </span>
        </div>
      </div>
    </nav>
  
    <router-view></router-view>
  
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    logout: function () {
      this.$store.commit('logout')
      this.$router.push('/')
      localStorage.removeItem('token')
    }
  },
  computed: {
    logged () {
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

span.nav-item .nav-link {
  color: #c2c6ce;
}

span.nav-item .nav-link.router-link-active {
  color: #FFF!important;
}
</style>
