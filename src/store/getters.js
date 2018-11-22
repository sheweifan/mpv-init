export default {
  navHeight: state => state.statusBarHeight + 44,
  hasNetwork: state => state.networkType !== 'none'
}
