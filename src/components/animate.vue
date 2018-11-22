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
      default: 'fadeInUp'
    },
    value: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isMounted: true
    }
  },
  computed: {
    classNames() {
      let clsList = [this.className]
      clsList.push(this.name)
      if (this.value) {
        clsList.push('animated')
      }
      return clsList.join(' ')
    }
  }
}
</script>

<style lang="scss">
</style>
