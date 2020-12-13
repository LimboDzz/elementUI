import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/admin/Admin'
import Repo from '@/components/repo/Repo'
import Repo_in from '@/components/repo/Repo_in'
import Cart from '@/components/cart/Cart'
import Signup from '@/components/signup/Signup'
import Login from '@/components/login/Login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',                    // root
      redirect: '/repo'
    },
    {                               // repo
      path: '/repo',
      component: Repo
    },
    {                               // repo
      path: '/repo_in',
      component: Repo_in
    },
    {                               // admin
      path: '/admin',
      component: Admin
    },
    {                               // cart
      path: '/cart',
      component: Cart
    },
    {                               // signup
      path: '/signup',
      component: Signup
    },
    {                               // signup
      path: '/login',
      component: Login
    }
  ]
})
