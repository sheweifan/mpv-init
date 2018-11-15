class Router {
  push(url) {
    return wx.navigateTo({url})
  }
  go(delta = -1) {
    return wx.navigateBack(delta)
  }
  replace(url) {
    return wx.redirectTo({url})
  }
}

export default Router
