import Vue from 'vue'
import app from './app'
import router from './router'
new Vue({
  render: h => h(app),
  router
}).$mount('#app')
