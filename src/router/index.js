import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect: '/login',      
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginPage.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignupPage.vue')
    },
    { path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: () => import('@/views/NotFoundPage.vue')
     },
  ]
})

export default router
