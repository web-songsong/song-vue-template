import Vue from 'vue'
import vueFn from './vm'
// import svt from '../src/components'
// Vue.use(svt)
// const { createVM } = vueFn
// const vm = createVM({}, true)

const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
