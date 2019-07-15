// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Chat from 'vue-beautiful-chat'
import {
  MdButton,
  MdContent,
  MdTabs
} from 'vue-material/dist/components'
import Vuelidate from 'vuelidate'
import VueMaterial from 'vue-material'
import VueCarousel from '@chenfengyuan/vue-carousel'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(Vuelidate)
Vue.use(VueCarousel)
Vue.component(VueCarousel.name, VueCarousel)
Vue.use(MdButton)
Vue.use(Chat)
Vue.use(MdContent)
Vue.use(MdTabs)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
