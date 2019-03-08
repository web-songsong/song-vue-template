import Vue from 'vue'
import svt from '../src/components'
Vue.use(svt)

const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
