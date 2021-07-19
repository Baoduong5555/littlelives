import Vue from 'vue'
import VueRouter from 'vue-router'

import Academy from '@academy/views/Academy'

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
  { name: 'Academy', path: 'academy', component: Academy }
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export {
  routes,
  router
}