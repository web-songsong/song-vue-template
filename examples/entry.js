import Vue from 'vue'
import app from './app'
import router from './router'
import aaa from '../dist'
console.log(aaa)
new Vue({
  render: h => h(app),
  router
}).$mount('#app')
