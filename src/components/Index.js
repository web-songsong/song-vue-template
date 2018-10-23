import Switch from './Switch/index.vue'

const compoentns = [Switch]

const install = Vue =>
  compoentns.forEach(component => {
    Vue.component(component.name, component)
  })

export default {
  Switch,
  install
}