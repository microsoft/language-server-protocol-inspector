import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store/store'

Vue.config.productionTip = false

import fontawesome from '@fortawesome/fontawesome'
import { faFile, faUpload, faComment, faCommentAlt, faGlobe } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faFile, faUpload, faComment, faCommentAlt, faGlobe)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
