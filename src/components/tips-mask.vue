<template>
  <cover-view class="mask">
    <slot></slot>
  </cover-view>
</template>

<script>
export default {
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
    z-index: 3;
  }
</style>
