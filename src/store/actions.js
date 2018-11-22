import * as types from './types'

export default {
  updateStatusBarHeight({commit}) {
    wx.getSystemInfo({
      success: (res) => {
        commit(types.SET_STATUS_BAR_HEIGHT, res.statusBarHeight)
      }
    })
  },
  setNetworkStatusLinster({commit}) {
    wx.getNetworkType({
      success: e => {
        commit(types.SET_NETWORK, e)
      }
    })
    wx.onNetworkStatusChange(e => {
      commit(types.SET_NETWORK, e)
    })
  },
  setDialog({commit}, config) {
    commit(types.SET_DIALOG, config)
  }
}
