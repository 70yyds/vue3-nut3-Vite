import Cookies from 'js-cookie'

const useAppStore = defineStore(
  'app',
  {
    state: () => ({

    }),
    actions: {
      setSize(size) {
        this.size = size;
        Cookies.set('size', size)
      },
    }
  })

export default useAppStore
