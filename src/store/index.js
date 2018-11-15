// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import createLogger from 'vuex/dist/logger'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// console.log(process.env.NODE_ENV)
Vue.use(Vuex)

const isDev = process.env.NODE_ENV === 'development'
let plugins = []

if (isDev) {
  plugins.push(createLogger())
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins
})

export default store
