const global = {
  methods: {
    showDialog(config) {
      this.$store.dispatch('setDialog', {
        handle: () => {},
        comfirmText: '确定',
        cancelText: '取消',
        ...config,
        isShow: true
      })
    },
    hideDialog() {
      this.$store.dispatch('setDialog', {})
    }
  }
}

export default global
