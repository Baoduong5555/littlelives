import Vue from 'vue'
import VueRouter from 'vue-router'

import Admin from '@admin/views/Admin'

const routes = [
  // {
  //   name: 'AdminHome', 
  //   path: '/admin', 
  //   component: Admin, 
  //   children: [
  //     { name: 'About', path: 'about', component: About },
  //     { name: 'Admin', path: 'home', component: Admin }
  //   ]
  // },
  { name: 'Admin', path: 'admin', component: Admin }
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

export {
  routes,
  router
}