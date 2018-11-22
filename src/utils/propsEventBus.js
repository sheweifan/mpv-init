// 这个是用来解决小程序内状态不接受function的问题
// 暂废弃，用vuex解决
const random = () => Symbol(new Date().getTime())

class PropsEventBus {
  constructor() {
    this.events = new Map()
    this.eventsLock = true
  }
  editingEvents(fn) {
    this.eventsLock = false
    fn()
    this.eventsLock = true
  }
  once(fn) {
    if (typeof fn !== 'function') return
    this.add(() => {
      const name = random()
      this.events.set(name, () => {
        fn()
        this.events.delete(name)
      })
    })
  }
  add(fn, name = random()) {
    this.editingEvents(() => {
      this.events.set(name, fn)
    })
  }
  remove(name) {
    if (!this.events.has(name)) return
    this.editingEvents(() => {
      this.events.delete(name)
    })
  }
}

export default () => {
  const propsEventBus = new PropsEventBus()
  return new Proxy(propsEventBus, {
    get(target, key) {
      if (target.events.has(key)) {
        return target.events.get(key)
      } else {
        return target[key]
      }
    }
  })
}
