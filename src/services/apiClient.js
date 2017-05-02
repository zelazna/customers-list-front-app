import axios from 'axios'

class ApiClient {
  constructor (baseUrl) {
    this.client = axios.create({
      baseURL: baseUrl,
      timeout: 1000
    })
    this.baseUrl = baseUrl
  }

  login (username, password) {
    let config = {}
    config.auth = {
      username: username,
      password: password
    }
    return this.client.get('/login', config)
  }

  logout () {}

  getCustomers () {
    let config = {}
    config.headers = { 'x-auth-token': localStorage.getItem('token') }
    return this.client.get('/customers', config)
  }

  getOneCustomer () {}

  deleteOneCustomer () {}

  updateOneCustomer () {}
}

export default new ApiClient('http://localhost:3000')
