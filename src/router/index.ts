import { createRouter, createWebHistory } from 'vue-router'
import publicRoutes from './public/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...publicRoutes]
})

export default router
