import * as types from './types'

export default {
  [types.SET_STATUS_BAR_HEIGHT](state, height) {
    state.statusBarHeight = height
  },
  [types.SET_NETWORK](state, status) {
    if (typeof status.isConnected === 'boolean') {
      state.hasNetwork = status.isConnected
    }
    state.networkType = status.networkType
  }
}
