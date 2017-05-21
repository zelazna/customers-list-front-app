<template>
  <div class="container">
    <h1>Customers</h1>
    <div v-if="error" class="alert alert-danger" role="alert">
      <strong>{{error.message}}</strong>
    </div>
    <div class="center">
      <customers-table :columns="columns" :customers="customers">
      </customers-table>
    </div>
  </div>
</template>

<script>
import CustomersTable from './Customers/CustomersTable'

export default {
  name: 'customers',
  components: { CustomersTable },
  data () {
    return {
      error: undefined,
      customers: [],
      columns: ['FirstName', 'LastName', 'Nationality', 'Mail', 'Actions']
    }
  },
  mounted: function () {
    this.$store.dispatch('getCustomers')
      .then(data => {
        this.customers = data.data.customers
      })
      .catch(err => {
        this.error = err
      })
  }
}
</script>

<style scoped>
.container h1 {
  margin: 30px;
}

.center {
  display: flex;
  justify-content: center;
}
</style>
