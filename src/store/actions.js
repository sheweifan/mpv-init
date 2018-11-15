import * as types from './types'

export default {
  updateStatusBarHeight({commit}) {
    console.log(123123)
    wx.getSystemInfo({
      success: (res) => {
        commit(types.SET_STATUS_BAR_HEIGHT, res.statusBarHeight)
      }
    })
  }
}
