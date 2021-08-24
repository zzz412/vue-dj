import Vue from 'vue'
import VueRouter from 'vue-router'
// @表示src路径
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    // redirect: '/home', // 重定向到home
    children: [
      // alias 路由别名  name 路由命名
      { path: '/home', component: () => import('@/views/home'), alias: '' },
      { path: '/social', component: () => import('@/views/social') }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'dj-active', // 自定义激活类名
  routes
})

export default router
