import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import globalMixins from '@/mixins/global'
import mpLayout from '@/components/mp-layout'
import mpDialog from '@/components/mp-dialog'
import mpNavbar from '@/components/mp-navbar'
// import propsEventBusCreator from '@/utils/PropsEventBus'

store.dispatch('updateStatusBarHeight')
store.dispatch('setNetworkStatusLinster')

Vue.config.productionTip = false
Vue.prototype.$store = store

Vue.use(router)

App.mpType = 'app'

Vue.mixin(globalMixins)
Vue.component('mp-layout', mpLayout)
Vue.component('mp-dialog', mpDialog)
Vue.component('mp-navbar', mpNavbar)
// Vue.prototype.$propsEventBus = propsEventBusCreator()

const app = new Vue(App)
app.$mount()
