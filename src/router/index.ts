import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'
import type { App } from 'vue'
import constantRoutes from './routes'
import NProgress from 'nprogress'

const { VITE_ROUTE_MODE } = import.meta.env

const router = createRouter({
  history:
    VITE_ROUTE_MODE === 'HASH' ? createWebHashHistory() : createWebHistory(),
  routes: constantRoutes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router

export function setupRouter(app: App) {
  app.use(router)
}
