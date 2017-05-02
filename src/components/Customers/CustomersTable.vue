<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th v-for="column in columns">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="customer in customers">
        <td>{{customer.firstName}}</td>
        <td>{{customer.lastName}}</td>
        <td>{{customer.nationalite}}</td>
        <td>{{customer.mail}}</td>
        <td>
          <i class="fa fa-trash" aria-hidden="true"></i> 
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'customers-table',
  props: {
    customers: Array,
    columns: Array
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

</style>
