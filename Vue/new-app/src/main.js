import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
//import matirial design
import {MdCard, MdButton, MdRipple, MdMenu, MdList, MdField, MdSnackbar} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdCard)
Vue.use(MdButton)
Vue.use(MdRipple)
Vue.use(MdMenu)
Vue.use(MdList)
Vue.use(MdField)
Vue.use(MdSnackbar)

import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
