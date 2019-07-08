import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sobre from '@/components/Sobre'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Sobre',
      name: 'Sobre Nosotros',
      component: Sobre
    }
  ],
  mode: 'history'
})
