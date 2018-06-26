import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

import fontawesome from '@fortawesome/fontawesome'
import faComment from '@fortawesome/fontawesome-free-solid/faComment'
import faCommentAlt from '@fortawesome/fontawesome-free-solid/faCommentAlt'

fontawesome.library.add(faComment, faCommentAlt)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
