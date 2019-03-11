import Vue from 'vue'
import svt from 'main/index.js'
Vue.use(svt)

const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
