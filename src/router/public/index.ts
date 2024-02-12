// import Vue from 'vue'
// import VueRouter from 'vue-router'
import Signup from '@/views/public/signUp.vue'
import Login from '@/views/public/login.vue'

const publicRoutes = [
  {
    name: 'Signup',
    path: '/',
    component: Signup
  },

  {
    name: 'Login',
    path: '/login',
    component: Login
  }
]

export default publicRoutes
