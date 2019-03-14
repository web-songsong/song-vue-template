const path = require('path')
const packages = require.context('../packages', true, /main\.vue$/)
const config = require('../config')

const CreateAPI = require('vue-create-api').default
const components_obj = {}
const VueAPIList = ['SvtToast']
const components = packages.keys().map(ele => {
  const ele_name = path.join(ele, '../..')
  const name = `${ele_name[0].toUpperCase()}${ele_name.slice(1).toLowerCase()}`
  const ele_template = packages(ele)

  const component_name = `${config.build.componentsPrefix}${name}`

  // component = ele_template.default ? ele_template.default : ele_template
  component = ele_template.default
  component.name = component_name
  components_obj[name] = component
  return {
    name: component_name,
    component: component
  }
})

const install = Vue => {
  components.forEach(item => {
    Vue.component(item.name, item.component)
    if (VueAPIList.includes(item.name)) {
      Vue.use(CreateAPI, {
        componentPrefix: 'Svt',
        apiPrefix: '$'
      })
      Vue.createAPI(item.component, true)
    }
    Vue.component(item.name, item.component)
  })
}
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }
module.exports = Object.assign(
  {
    install
  },
  components_obj
)