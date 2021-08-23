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

Vue.prototype.$http = Axios
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
