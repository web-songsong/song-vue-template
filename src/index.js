const path = require('path')
const packages = require.context('../packages', true, /main\.vue$/)
const config = require('../config')

const components_obj = {}
const components = packages.keys().map(ele => {
  const ele_name = path.join(ele, '../..')
  const ele_template = packages(ele)

  const component_name = `${
    config.build.componentsPrefix
  }${ele_name[0].toUpperCase()}${ele_name.slice(1).toLowerCase()}`

  ele_template.default
    ? (ele_template.default.name = component_name)
    : (ele_template.name = component_name)

  components_obj[component_name] = ele_template.default || ele_templates
  return {
    name: component_name,
    component: ele_template.default || ele_template
  }
})

const install = Vue => {
  components.forEach(item => {
    Vue.component(item.name, item.component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
console.log(components_obj)
module.exports = Object.assign(
  {
    install,
  },
  components_obj
)

// import button from '../packages/button/index.js'
// import alert from '../packages/alert/index.js'

// const components = [button, alert]

// const install = (Vue, opts = {}) => {
//   components.forEach(component => {
//     Vue.component(component.name, component)
//   })
// }

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

// export default {
//   install,
//   button,
//   alert
// }
