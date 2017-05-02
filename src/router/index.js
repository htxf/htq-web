import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Index from '../pages/index.vue'
import Detail from '../pages/gameDetail.vue'
import Launch from '../pages/launchGame.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/gameDetail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/launchGame',
      name: 'Launch',
      component: Launch
    }
  ]
})
