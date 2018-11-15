import getRoute from './route'
import Router from './router'

export default Vue => {
  Object.defineProperty(Vue.prototype, '$route', {
    get() {
      return getRoute.call(this)
    }
  })
  Vue.prototype.$router = new Router()
}
