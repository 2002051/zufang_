import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'root',
            redirect: { name: "home" }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('../views/Index.vue'),
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('../views/Login.vue')
                },
                {
                    path: 'home',
                    name: 'home',
                    component: HomeView
                }, {
                    path: 'about',
                    name: 'about',
                    // route level code-splitting
                    // this generates a separate chunk (About.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import('../views/AboutView.vue')
                },
                {
                    path: 'detail',
                    name: 'detail',
                    // route level code-splitting
                    // this generates a separate chunk (About.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import('../views/detail.vue')
                }
            ]
        },
    ]
})
import {userInfoStore} from "@/stores/counter.js";
// 导航守卫
router.beforeEach((to, from, next) => {
    // 1  登录页面，不需要校验直接过


    // 示例代码中已注释掉的部分
    // const store = userInfoStore();
    // if (!store.userId) {
    //     next({ name: "login" });
    // } else {
    //     next();
    // }
    next();
});

export default router
