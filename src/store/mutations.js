import * as types from './types'

export default {
  [types.SET_STATUS_BAR_HEIGHT](state, height) {
    state.statusBarHeight = height
  }
}
