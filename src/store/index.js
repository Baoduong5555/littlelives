import Vue from 'vue'
import Vuex from 'vuex'
import admin from "@admin/store/modules";
import academy from "@academy/store/modules";

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    ...academy,
    ...admin,
  },
})