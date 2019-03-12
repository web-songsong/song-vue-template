import Vue from 'vue'
import app from './app'
import router from './router'
import 'lib-flexible/flexible.js'
// import { Svt } from 'main'
import { Button } from 'main'

import CreateAPI from 'vue-create-api'
Vue.use(CreateAPI, {
  componentPrefix: '',
  apiPrefix: '$'
})
Vue.createAPI(Button, true)
// Vue.use(Svt)
console.log(Button)
new Vue({
  render: h => h(app),
  router
}).$mount('#app')
