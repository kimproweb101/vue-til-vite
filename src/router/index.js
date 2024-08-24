import { createRouter, createWebHistory } from 'vue-router'
import {store} from '@/store/index'

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
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/MainPage.vue'),
      meta:{auth:true},
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('@/views/PostAddPage.vue'),
      meta:{auth:true},
    },
    {
      path: '/post/:id',
      name: 'postEdit',
      component: () => import('@/views/PostEditPage.vue'),
      meta:{auth:true},
    },
    { path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: () => import('@/views/NotFoundPage.vue')
     },
  ]
})

router.beforeEach((to,from,next)=>{
  //console.log(to)
  //console.log(from)
  if(to.meta.auth && !store.getters.isLogin){
    console.log('인증이 필요합니다.')
    next('/login')
    return // next 를 한 후 중복 실행 방지
  }
  next();
})

export default router
