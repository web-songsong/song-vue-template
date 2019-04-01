import Vue from 'vue'
import app from './app'
import router from './router'
// import Svt from '../dist'
// import '../dist/css/svt.css'
import Svt from 'main'
Vue.use(Svt)
new Vue({
  render: h => h(app),
  router
}).$mount('#app')
