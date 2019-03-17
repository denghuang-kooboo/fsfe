import Vue from 'vue'
import Vuex from 'vuex'
import PhotoWall from 'store/modules/photo-wall'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    PhotoWall
  }
})
