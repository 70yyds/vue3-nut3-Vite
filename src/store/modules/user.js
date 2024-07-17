import Cookies from 'js-cookie'
import { setToken, getToken, removeToken } from '@/utils/auth'
const useAppStore = defineStore(
  'user',
  {
    state: () => ({
      role: '',
      token: getToken(),
      userInfo: {}
    }),
    actions: {
      setUserInfo(userInfo) {
        this.userInfo = userInfo;
      },
      Login(loginForm) {
        return new Promise((resolve, reject) => {
          setToken('123')
          this.roleId = 1
          let form = {
            roleId: 1
          }
          resolve(form)
        })
      },
      Logout() {
        return new Promise((resolve, reject) => {
          removeToken()
          window.location.reload()
        })
      }
    }
  })

export default useAppStore
