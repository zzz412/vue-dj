import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入全局样式
import './sass/index.scss'

// 导入axios
import Axios from 'axios'

// 配置默认地址
Axios.defaults.baseURL = '/dj/'

Vue.prototype.$http = Axios
// 定义响应拦截器
Axios.interceptors.response.use(
  res => { // 处理成功的响应
    const { data } = res
    if (data.code !== 'S0000') { // 响应失败
      // 提示错误
      return ElementUI.Message({
        type: 'error',
        message: data.msg
      })
    }
    // 返回对应数据结构
    return data.data
  },
  err => { // 处理错误的响应
    return Promise.reject(err)
  }
)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
