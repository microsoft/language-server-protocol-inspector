import Vue from 'vue'
import Router from 'vue-router'
import Usage from './views/Usage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/language-server-protocol/inspector',
      name: 'Home'
    }
  ],
  mode: 'history'
})
