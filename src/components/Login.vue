<template>
  <div class="container">
    <form v-on:submit.prevent>
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="login" id="username" class="form-control" type="text" name="username" placeholder="John Doe">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" id="password" class="form-control" type="password" name="password">
      </div>
      <button @click="logIn" class="btn btn-primary">Submit</button>
    </form>
    <div v-if="error" class="alert alert-danger" role="alert">
      <strong>{{error.message}}</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      login: '',
      password: '',
      error: undefined
    }
  },
  methods: {
    logIn: function () {
      this.$store.dispatch('logIn', { login: this.login, password: this.password })
        .then(response => {
          localStorage.setItem('token', response.data.token)
          this.$store.commit('login')
          this.$router.push('/customers')
        })
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>

<style scoped>
.container {
  width: 30%;
  margin-top: 20px;
}

.alert.alert-danger {
  margin-top: 20px;
}
</style>
