import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../layout/index.vue'
import home from '../views/Page/home.vue'

import data from '../views/Page/data.vue'
import platform from '../views/Page/platform.vue'
import company from '../views/Page/company.vue'

import solutions from '../views/Page/solutions/solutions.vue'
import driving from '../views/Page/solutions/driving.vue'
import retail from '../views/Page/solutions/retail.vue'
import shome from '../views/Page/solutions/shome.vue'
import manufacturing from '../views/Page/solutions/manufacturing.vue'
import protection from '../views/Page/solutions/protection.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      {
        path: '',
        name: 'home',
        component: home

      },
      {
        path: 'data',
        name: 'data',
        component: data
      },
      {
        path: 'platform',
        name: 'platform',
        component: platform
      },
      {
        path: 'company',
        name: 'company',
        component: company
      },
      {
        path: 'solutions',
        name: 'solutions',
        component: solutions,
        children: [
          {
            path: 'driving',
            name: 'driving',
            component: driving
          },
          {
            path: 'retail',
            name: 'retail',
            component: retail
          },
          {
            path: 'shome',
            name: 'shome',
            component: shome
          },
          {
            path: 'manufacturing',
            name: 'manufacturing',
            component: manufacturing
          },
          {
            path: 'protection',
            name: 'protection',
            component: protection
          },
        ]

      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router