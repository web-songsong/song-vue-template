import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'song',
      component: () => import(/* webpackChunkName: "song" */ './song.vue')
    }
  ]
})
