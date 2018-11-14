import Vue from 'vue'
import Router from 'vue-router'
import Logins from '@/views/login/logins'
import Loginsing from '@/views/login/login'
import register from '@/views/login/register'
import Myuser from '@/views/platform/myuser'
import Home from '@/views/activies/index'
import Detail from '@/views/activies/detail'
import Cart from '@/views/activies/cart'
import shopsHome from '@/views/activies/shopsHome'
import selectcity from '@/views/activies/selectcity'
import Submit from '@/views/activies/submit'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'logins',
      component: Logins,
      redirect: '/logins',
      children: [{
        path: '/logins',
        name: 'login',
        component: Loginsing
      }, {
        path: '/register',
        name: 'register',
        component: register
      }]
    },
    {
      path: '/myuser',
      name: 'myuser',
      component: Myuser,

    },
    {
      path: '/home',
      name: 'home',
      component: Home

    },
    {
      path: '/home/selectcity',
      name: 'selectcity',
      component: selectcity
    },
    {
      path: '/home/detail/:id',
      name: 'detail',
      component: Detail,
      props: true
    },

    {
      path: '/home/shopshome/:sid',
      name: 'shopsHome',
      component: shopsHome,
      props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }, {
      path: '/cart/submit',
      name: 'submit',
      component: Submit,
      props: true
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router;
