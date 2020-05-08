import Vue from 'vue'
import App from './App.vue'
// import VueTestBox from '../packages/index'

Vue.config.productionTip = false
// Vue.use(VueTestBox)

new Vue({
  render: h => h(App)
}).$mount('#app')
