import Vue from 'vue'
import Router from 'vue-router'
import Inspector from './views/Inspector.vue'
import Usage from './views/Usage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/language-server-protocol/inspector/',
      name: 'Home',
      component: Usage
    },
    {
      path: '/language-server-protocol/inspector/app',
      name: 'Home',
      component: Inspector
    }
  ],
  mode: 'history'
})
