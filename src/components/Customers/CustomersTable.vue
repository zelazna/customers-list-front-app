<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th v-for="column in columns">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(customer,index) in customers">
        <td>{{customer.firstName}}</td>
        <td>{{customer.lastName}}</td>
        <td>{{customer.nationalite}}</td>
        <td>{{customer.mail}}</td>
        <td>
          <span class="index">{{index}}</span>
          <i @click="remove(customer, index)" class="fa fa-trash" aria-hidden="true"></i>
          <i @click="edit(customer, index)" class="fa fa-pencil" aria-hidden="true"></i>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import ApiClient from '../../services/apiClient'

export default {
  name: 'customers-table',
  props: {
    customers: Array,
    columns: Array
  },
  methods: {
    remove: function (customer, index) {
      delete this.customers[index]
      ApiClient.deleteOneCustomer(customer.id)
    },
    edit: function (customer, index) {
      ApiClient.updateOneCustomer()
    }
  }
}
</script>
<style scoped>
th {
  text-align: center
}

table {
  width: 75%
}

i {
  cursor: pointer;
}

.index{
  visibility: hidden
}
</style>
