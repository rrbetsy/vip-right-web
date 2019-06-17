import Vue from 'vue'
import App from './pages/detail/App.vue'
// import App from './pages/index/App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
