import Vue from 'vue'
import Router from 'vue-router'
import appGist from '@/components/appGist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appGist',
      component: appGist
    }
  ]
})
