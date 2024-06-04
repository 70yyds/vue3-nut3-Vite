import Cookies from 'js-cookie'
const useAppStore = defineStore(
  'user',
  {
    state: () => ({
      role: '',
      userInfo: {}
    }),
    actions: {
      setUserInfo(size) {
        this.size = size;
        Cookies.set('size', size)
      },
    }
  })

export default useAppStore
