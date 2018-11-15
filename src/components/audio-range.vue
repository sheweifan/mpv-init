<template>
  <slider
    :block-size="12"
    :activeColor="'#000'"
    :value="rangeValue"
    :min="min"
    :max="max"
    @change="bindchange"
    @changing="bindchanging"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  data() {
    const { value } = this
    return {
      rangeValue: value
    }
  },
  methods: {
    bindchange(e) {
      const { detail: { value } } = e.mp
      this.rangeValue = value
      this.$emit('change', e)
    },
    bindchanging(e) {
      this.$emit('changing', e)
    }
  },
  watch: {
    rangeValue(value) {
      this.$nextTick(() => {
        this.$emit('input', value)
      })
    },
    value(value) {
      this.$nextTick(() => {
        this.rangeValue = value
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
