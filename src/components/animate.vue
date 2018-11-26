<template>
  <div :class="classNames" v-show="isMounted">
    <!-- <template > -->
      <slot />
    <!-- </template> -->
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
      isMounted: false
    }
  },
  mounted() {
    this.isMounted = true
  },
  methods: {
    getClassNames() {
      let clsList = [this.className]
      clsList.push(this.name)
      if (this.value && this.isMounted) {
        clsList.push('animated')
      }
      return clsList.join(' ')
    }
  },
  computed: {
    classNames() {
      return this.getClassNames()
    }
  }
}
</script>

<style lang="scss">
</style>
