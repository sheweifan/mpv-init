import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$store = store

Vue.use(router)

App.mpType = 'app'

const app = new Vue(App)
app.$mount()
