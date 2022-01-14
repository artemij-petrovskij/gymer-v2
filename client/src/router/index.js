import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: { layout: 'Dashboard', requiresAuth: true },
    component: () => import('../views/Training.vue')
  },
  {
    path: '/weight',
    name: 'Weight',
    meta: { layout: 'Dashboard', requiresAuth: true },
    component: () => import('../views/Weight.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    meta: { layout: 'Dashboard', requiresAuth: true },
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/training',
    name: 'Training',
    meta: { layout: 'Dashboard', requiresAuth: true },
    component: () => import('../views/Training.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'empty',
    },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    meta: { layout: 'empty' },
    component: () => import('../views/Signup.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {

      next()

    }
  } else {
    next()
  }
})

export default router
