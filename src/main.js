//引入路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from './pages/index/App.vue'

//引入路由组件
import DetailPage from './pages/detail/App.vue'
//定义路由
const routes = [
  { path: '/', component: Index},
  { path: '/index', component: Index},
  { path: '/detail', component: DetailPage},
]
//创建路由实例，配置路由
const router = new VueRouter({
  routes,
})

Vue.use(VueRouter)
Vue.config.productionTip = false
//创建、挂载根实例
new Vue({
  router,
  el: '#app',
  render: h => h(App),
})
