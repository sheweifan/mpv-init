<template>
  <div>
    <mask v-if="dialogConfig.isShow" @click="_onClose"/>
    <div :class="classNames">
      <div class="title">{{ dialogConfig.title }}</div>
      <div class="btns">
        <div v-if="dialogConfig.isShow" class="btn cancel" @click="_onCancel">{{ dialogConfig.cancelText }}</div>
        <div v-if="dialogConfig.isShow" class="btn comfirm" @click="_onComfirm">{{ dialogConfig.comfirmText }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import mask from '@/components/mask'
export default {
  name: 'mp-dialog',
  components: { mask },
  methods: {
    close() {
      this.hideDialog()
    },
    _onCancel() {
      this._handle('cancel')
    },
    _onComfirm() {
      this._handle('comfirm')
    },
    _onClose() {
      this._handle('close')
    },
    _handle(type) {
      const { handle } = this.dialogConfig
      if (typeof handle === 'function') {
        const result = handle({
          close: this.close,
          type
        })
        if (result !== false) {
          this.close()
        }
      } else {
        this.close()
      }
    }
  },
  computed: {
    ...mapState(['dialogConfig']),
    classNames() {
      let clsList = ['mp-dialog-context', 'zoomIn']
      if (this.dialogConfig.isShow) {
        clsList.push('animated')
      }
      return clsList.join(' ')
    }
  }
}
</script>

<style lang="scss">
  .mp-dialog-context{
    z-index: $modelZIndex;
    position: fixed;
    top: 30%;
    left: 30px;
    background: #fff;
    width: 320px;
  }
</style>
