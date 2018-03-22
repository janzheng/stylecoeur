import Vue from 'vue'
import Router from 'vue-router'


import CreateLink from '@/components/CreateLink'
import LinkList from '@/components/LinkList'
import AppLogin from '@/components/AppLogin'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/new/1'
    },
    // {
    //   path: '/',
    //   name: 'LinkList',
    //   component: LinkList
    // },
    {
      path: '/create',
      component: CreateLink
    },
    {
      path: '/login',
      component: AppLogin
    },
    {
      path: '/new/:page',
      component: LinkList
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/top',
      component: LinkList
    }
  ],
  // mode: 'history' // removes hash from urls // w/ hashes forces root server
  // https://router.vuejs.org/en/api/options.html
  // base: '/something-different/',

})
