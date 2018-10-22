import Switch from './Switch/index.vue'

import Loading from './Loading/Index.vue'

const compoentns = [Switch, Loading]

const install = Vue =>
  compoentns.forEach(component => {
    Vue.component(component.name, component)
  })

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
module.exports = Switch
