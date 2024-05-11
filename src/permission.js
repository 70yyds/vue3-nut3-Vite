import router from './router'

router.beforeEach((to, from, next) => {
  // 设置标题
  if (to.meta.title) {
    document.title = to.meta.title ? to.meta.title : 'luck-web'
  }
  next()
})