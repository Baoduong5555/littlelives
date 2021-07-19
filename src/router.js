import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as admin } from "@admin/router.js";
import { routes as academy } from "@academy/router.js";
const routes = [
  // {
  //   name: 'AdminHome',
  //   path: '/',
  //   children: [
  //     ...admin
  //   ]
  // }
  ...admin,
  ...academy
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