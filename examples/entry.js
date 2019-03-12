import Vue from 'vue'
import app from './app'
import router from './router'
import 'lib-flexible/flexible.js'
import CreateAPI from 'vue-create-api'
import Svt from 'main'
import { Toast } from 'main'
Vue.use(CreateAPI, {
  componentPrefix: 'Svt',
  apiPrefix: '$'
})
Vue.createAPI(Toast, true)
// Vue.use(Svt)
new Vue({
  render: h => h(app),
  router
}).$mount('#app')
