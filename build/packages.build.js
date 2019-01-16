const path = require('path')
const prefix = 'Svt'
const packages = require.context('../packages', true, /main\.vue$/)
const compoentnsa = []
packages.keys().forEach(item => {
  const name = path.join(item, '..')
  const componentConfig = packages(item)
  const components_name = `${prefix}${name[0].toUpperCase()}${name.slice(1)}`
  componentConfig.default
    ? (componentConfig.default.name = components_name)
    : (componentConfig.name = components_name)
  compoentnsa.push({
    name: components_name,
    component: componentConfig.default || componentConfig
  })
})
const install = Vue => {
  compoentnsa.forEach(component => {
    Vue.component(component.name, component.component)
  })
}
export default {
  install
}
