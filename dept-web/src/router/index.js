import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Signup from '@/components/user/Signup'
import Admin from '@/components/Admin/Admin'
import createaccount from '@/components/Admin/createaccount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/createaccount',
      name: 'createaccount',
      component: createaccount
    },
  ]
})
