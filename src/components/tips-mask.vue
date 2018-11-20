<template>
  <cover-view class="mask" @click="handleClick">
    <slot></slot>
  </cover-view>
</template>

<script>
export default {
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
  .mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    z-index: 99999;
  }
</style>
