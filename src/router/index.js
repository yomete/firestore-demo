import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ViewContact from '@/components/ViewContact'
import NewContact from '@/components/NewContact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'new-contact',
      component: NewContact
    },
    {
      path: '/:person/:success?',
      name: 'view-contact',
      component: ViewContact
    }
  ]
})
