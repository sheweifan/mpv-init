import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import globalMixins from '@/mixins/global'
import mpLayout from '@/components/mp-layout'

store.dispatch('updateStatusBarHeight')
store.dispatch('setNetworkStatusLinster')

Vue.config.productionTip = false
Vue.prototype.$store = store

Vue.use(router)

App.mpType = 'app'

Vue.mixin(globalMixins)
Vue.component('mp-layout', mpLayout)

const app = new Vue(App)
app.$mount()
