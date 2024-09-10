 import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/Index.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})
import {userInfoStore} from "@/stores/counter.js";
// 导航守卫
 router.beforeEach(function (to, from, next) {
   // 1  登录页面，不需要校验直接过
   console.log("e",to.name)
   // if (to.name === "login") {
   //   next()
   //   return;
   // }
   // const store = userInfoStore()
   // console.log("store",store)
   // if (!store.userId) {
   //   next({name: "login"})
   // }else{
   //   next()
   // }
   next()
 })


export default router
