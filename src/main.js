import Vue from 'vue'
import App from './App.vue'
import path from 'path'

Vue.config.productionTip = false
const packages = require.context('../packages', true, /main\.vue$/)
packages.keys().forEach(item => {
  const name = path.join(item, '..')
  const componentConfig = packages(item)
  const components_name = `Svt${name[0].toUpperCase()}${name.slice(1)}`
  console.log(components_name)
  Vue.component(components_name, componentConfig.default || componentConfig)
})

new Vue({
  render: h => h(App)
}).$mount('#app')
