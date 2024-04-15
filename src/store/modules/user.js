import Cookies from 'js-cookie'
const useAppStore = defineStore(
  'user',
  {
    state: () => ({

    }),
    actions: {
      setUserInfo(size) {
        this.size = size;
        Cookies.set('size', size)
      },
    }
  })

export default useAppStore
