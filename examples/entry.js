import Vue from 'vue'
import app from './app'
import router from './router'
import 'lib-flexible/flexible.js'
import Svt from 'main'
// import Svt from '../dist'
// import '../dist/css/svt.css'

Vue.use(Svt)
new Vue({
  render: h => h(app),
  router
}).$mount('#app')
