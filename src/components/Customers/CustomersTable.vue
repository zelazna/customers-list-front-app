<template>
  <div>
    <input type="text" v-model="search" class="form-control" placeholder="Search....">
    <button id="show-modal" @click="showModal = true" type="button" class="btn btn-primary">
      <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;Add Customer
    </button>
    <customers-modal 
    :customers="customers" 
    :customer="customer" 
    :languages="languages"
    v-if="showModal" 
    @create="create" 
    @update="edit" 
    @close="showModal = false, customer = {}">
    </customers-modal>
  
    <table class="table table-striped">
      <thead>
        <tr>
          <th v-for="column in columns">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in filteredData">
          <td>{{customer.firstName}}</td>
          <td>{{customer.lastName}}</td>
          <td>{{customer.nationalite}}</td>
          <td>{{customer.mail}}</td>
          <td>
            <i @click="remove(customer)" class="fa fa-trash" aria-hidden="true"></i>
            <i @click="editCustomer(customer)" class="fa fa-pencil" aria-hidden="true"></i>
          </td>
        </tr>
      </tbody>
    </table>
  
  </div>
</template>
<script>
import CustomersModal from './CustomersModal'

export default {
  name: 'customers-table',
  components: {
    CustomersModal
  },
  props: {
    customers: Array,
    columns: Array
  },
  data () {
    return {
      showModal: false,
      customer: {},
      search: '',
      languages: ['FR', 'DE', 'IT', 'EN']
    }
  },
  methods: {
    editCustomer: function (customer) {
      this.customer = customer
      this.showModal = true
    },
    remove: function (customer) {
      this.$store.dispatch('deleteCustomer', customer.id)
        .then(response => {
          this.customers.splice(this.customers.indexOf(customer), 1)
        })
    },
    edit: function (customer, index) {
      this.$store.dispatch('updateCustomer', customer)
    },
    create: function (customer) {
      this.$store.dispatch('createCustomer', customer)
        .then(response => {
          this.customers.push(response.data.customer)
        })
    }
  },
  computed: {
    filteredData: function () {
      var search = this.search && this.search.toLowerCase()
      var data = this.customers
      if (search) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(search) > -1
          })
        })
      }
      return data
    }
  }
}
</script>
<style scoped>
th {
  text-align: center
}

table {
  width: 75%;
  clear: both;
}

i {
  cursor: pointer;
}

button#show-modal {
  margin-bottom: 15px;
  float: right;
}

input {
  float: left;
  width: 40%
}
</style>
