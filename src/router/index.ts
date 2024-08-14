import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/PostDetail',
    name: 'PostDetail',
    component: ()=>import('../views/PostDetail.vue')
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: ()=>import('../views/LoginPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
