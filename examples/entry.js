import Vue from 'vue'
import app from './app'
import router from './router'
import Svt from '../dist/index.js'
import '../dist/css/svt.css'
Vue.use(Svt)
new Vue({
  render: h => h(app),
  router
}).$mount('#app')
