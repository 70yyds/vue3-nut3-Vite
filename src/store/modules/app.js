import Cookies from 'js-cookie'
import { setToken } from '@/utils/auth'
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
      Login() {
        setToken('123')
      }
    }
  })

export default useAppStore
