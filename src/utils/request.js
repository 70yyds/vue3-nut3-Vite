import axios from 'axios'
import { getToken } from '@/utils/auth'
import errorCode from '@/utils/errorCode'
import { Toast, Notify } from "@nutui/nutui";
import useUserStore from '@/store/modules/user'
// 是否显示重新登录
export let isRelogin = { show: false };

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时
  timeout: 20000
})

// request拦截器
service.interceptors.request.use(config => {
  // 是否需要防止数据重复提交
  if (getToken()) {
    config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
  // 未设置状态码则默认成功状态
  const code = res.data.code || 200;
  // 获取错误信息
  const msg = errorCode[code] || res.data.msg || errorCode['default']
  // 二进制数据则直接返回
  if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
    return res.data
  }
  if (code === 401) {
    if (!isRelogin.show) {
      isRelogin.show = true;
      Toast.text('登录状态已过期，请重新登录', { title: '系统提示' })
      isRelogin.show = false;
      useUserStore().logOut().then(() => {
        location.href = '/index';
      })
    }
    return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
  } else if (code === 500) {
    let title = '请求失败'
    Toast.fail(title)
    return Promise.reject(new Error(msg))
  } else if (code === 601) {
    Toast.warn(flag)
    return Promise.reject(new Error(msg))
  } else if (code !== 200) {
    Notify.danger({ title: msg })
    return Promise.reject(msg)
  } else {
    return Promise.resolve(res.data)
  }
},
  error => {
    return Promise.reject(error)
  }
)

export default service
