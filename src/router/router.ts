import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Screen',
    component: () => import('@/pages/screen/Screen.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
