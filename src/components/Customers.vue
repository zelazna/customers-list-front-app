<template>
  <div class="container">
    <h1>Customers</h1>
    <div class="center">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Nationalite</th>
            <th>Mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers">
            <td>{{customer.firstName}}</td>
            <td>{{customer.lastName}}</td>
            <td>{{customer.nationalite}}</td>
            <td>{{customer.mail}}</td>
            <td>del update</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ApiClient from '../services/apiClient'
export default {
  name: 'customers',
  data () {
    return {
      customers: ''
    }
  },
  mounted: function () {
    ApiClient.getCustomers()
      .then(data => {
        this.customers = data.data.customers
      })
      .catch(err => console.log(err))
  },
  methods: {}
}
</script>

<style scoped>
th {
  text-align: center
}

table {
  width: 75%
}

.center {
  display: flex;
  justify-content: center;
}
</style>
