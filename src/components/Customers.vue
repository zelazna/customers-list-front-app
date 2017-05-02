<template>
  <div class="container">
    <h1>Customers</h1>
    <div class="center">
      <customers-table :columns="columns" :customers="customers">
      </customers-table>
    </div>
  </div>
</template>

<script>
import ApiClient from '../services/apiClient'
import CustomersTable from './Customers/CustomersTable'

export default {
  name: 'customers',
  components: { CustomersTable },
  data () {
    return {
      customers: [],
      columns: ['FirstName', 'LastName', 'Nationality', 'Mail', 'Actions']
    }
  },
  mounted: function () {
    ApiClient.getCustomers()
      .then(data => {
        this.customers = data.data.customers
      })
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>
.container h1{
  margin-bottom: 30px;
}
.center {
  display: flex;
  justify-content: center;
}

</style>
