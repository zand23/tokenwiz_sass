import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueFlexboxgrid from 'flexboxgrid'

Vue.config.productionTip = false
Vue.use(VueFlexboxgrid)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
