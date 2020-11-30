import Vue from 'vue'
import VueRouter from 'vue-router'

import internListRoutes from '@/components/modules/dashboard/routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('@/views/Signin')
  },
  {
    path: '/',
    redirect: {
      name: internListRoutes[0].name
    },
    component: () => import('@/views/Dashboard'),
    children: internListRoutes,
    meta: {
      isAdmin: true,
      auth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if ('meta' in from && 'level' in from.meta && 'meta' in to && 'level' in to.meta) {
    Vue.transition.changeAnimationName(((from.meta.level || 0) < to.meta.level) ? 'up' : 'down')
  }

  next()
})

export default router
