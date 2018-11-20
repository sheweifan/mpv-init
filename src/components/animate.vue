<template>
  <div :class="classNames">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    classNames() {
      let clsList = [this.className]
      if (this.show) {
        clsList.push('animated')
        clsList.push(this.name)
      }
      return clsList.join(' ')
    }
  }
}
</script>

<style lang="scss">
  @import url('../style/animate.scss');
</style>
