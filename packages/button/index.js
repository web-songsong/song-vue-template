import ElButton from './src/main'

/* istanbul ignore next */
ElButton.install = function(Vue) {
  Vue.component(ElButton.name, ElButton)
}

export default ElButton
