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
.fadeInUp {
  transition: transform 0.5s, opacity 0.5s;
  opacity: 0;
  transform: translate3d(0, 100%, 0);

  &.animated{
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
</style>
