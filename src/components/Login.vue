<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input id="username" class="form-control" type="text" name="username" placeholder="John Doe">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" class="form-control" type="password" name="password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>
.container{
  width: 30%;
}
</style>
