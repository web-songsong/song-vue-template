import Vue from 'vue'
import app from './app'
import router from './router'
import ElementUI from 'element-ui';
console.log(ElementUI)
new Vue({
  render: h => h(app),
  router
}).$mount('#app')
