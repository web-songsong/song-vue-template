import Vue from 'vue'
import App from './App.vue'
import path from 'path'
import svt from 'song-vue-template'
import 'song-vue-template/dist/svt.css'
Vue.config.productionTip = false
// const packages = require.context('../packages', true, /main\.vue$/)
// packages.keys().forEach(item => {
//   const name = path.join(item, '..')
//   const componentConfig = packages(item)
//   const components_name = `Svt${name[0].toUpperCase()}${name.slice(1)}`
//   console.log(components_name)
//   Vue.component(components_name, componentConfig.default || componentConfig)
// })
// import svt from '../dist/svt.common.js'
// Vue.use(svt)
Vue.use(svt)
console.log(svt)
new Vue({
  render: h => h(App)
}).$mount('#app')
