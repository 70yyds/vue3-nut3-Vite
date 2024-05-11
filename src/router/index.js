import { createWebHistory, createRouter } from 'vue-router'
/* Layout */
import Layout from '@/layout'


// 公共路由
export const constantRoutes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页' }
      },
      {
        path: '/work',
        name: 'work',
        component: () => import('@/views/work/index.vue'),
        meta: { title: '工作台' }
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('@/views/message/index.vue'),
        meta: { title: '信息' }
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/mine/index.vue'),
        meta: { title: '我的' }
      },
    ]
  }
]

// 动态路由，基于用户权限动态去加载
export const dynamicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: [...constantRoutes, ...dynamicRoutes],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});



export default router;
