import axios from 'axios'

class ApiClient {
  constructor (baseUrl) {
    this.client = axios.create({
      baseURL: baseUrl,
      timeout: 1000
    })
    this.baseUrl = baseUrl
    this.config = {}
    this.config.headers = { 'x-auth-token': localStorage.getItem('token') }
  }

  login (username, password) {
    let config = {}
    config.auth = {
      username: username,
      password: password
    }
    return this.client.get('/login', config)
  }

  getCustomers () {
    return this.client.get('/customers', this.config)
  }

  getOneCustomer () { }

  deleteOneCustomer (id) {
    return this.client.delete(`/customers/${id}`, this.config)
  }

  updateOneCustomer () { }
}

export default new ApiClient('http://localhost:3000')
