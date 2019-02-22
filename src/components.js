const path = require('path')
const packages = require.context('../packages', true, /index\.vue$/)
const config = require('../config')

const components = packages.keys().map(ele => {
  const ele_name = path.join(ele, '..')
  const ele_template = packages(ele)

  const component_name = `${
    config.build.componentsPrefix
  }${ele_name[0].toUpperCase()}${ele_name.slice(1).toLowerCase()}`

  ele_template.default
    ? (ele_template.default.name = component_name)
    : (ele_template.name = component_name)

  return {
    name: component_name,
    component: ele_template.default || ele_template
  }
})

console.log('asdfasdfasdf')
const install = Vue => {
  console.log('asdfasf')
  components.forEach(itme => {
    Vue.component(item.name, item.component)
  })
}

module.exports = {
  install
}
