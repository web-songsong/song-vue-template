import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import path from 'path'

const packages = require.context('./example', false, /\w+.vue$/)
const package_routers = []
packages.keys().forEach(item => {
  const name = path.join(item, '.').replace('.vue', '')
  const component = packages(item).default || packages(item)
  package_routers.push({
    path: `/example/${name}`,
    name: name,
    component: component
  })
})

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    ...package_routers
  ]
})
