import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    logout (state) {
      state.isLoggedIn = false
    },
    login (state) {
      state.isLoggedIn = true
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    }
  },
  actions: {
    logIn: ({ commit }, { login, password }) => {
      return api.login(login, password)
    },
    getCustomers: ({ commit }) => {
      return api.getCustomers()
    },
    deleteCustomer: ({ commit }, customerId) => {
      return api.deleteOneCustomer(customerId)
    },
    updateCustomer: ({ commit }, customer) => {
      return api.updateOneCustomer(customer)
    },
    createCustomer: ({ commit }, customer) => {
      return api.createOneCustomer(customer)
    }
  }
})
