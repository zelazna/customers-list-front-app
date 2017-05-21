import Vue from 'vue'
import Router from 'vue-router'
import Customers from '@/components/Customers'
import Login from '@/components/Login'
import store from '../store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/customers',
      name: 'Customers',
      component: Customers,
      beforeEnter: (to, from, next) => {
        if (store.state.isLoggedIn) {
          next()
        } else {
          next('/')
        }
      }
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
