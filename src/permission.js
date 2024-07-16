import router from './router'
import { getToken } from '@/utils/auth'
const whiteList = ['/login', '/register'];
router.beforeEach((to, from, next) => {
  // 设置标题
  if (to.meta.title) {
    document.title = to.meta.title ? to.meta.title : 'luck-web'
  }
  if (getToken()) {
    next({ path: '/' })
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})