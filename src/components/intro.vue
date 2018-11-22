<template>
  <div :class="clasNames">
    <slot />
    <animate className="test-tips" v-model="show">
      {{ text }}
    </animate>
  </div>
</template>

<script>
import animate from '@/components/animate'
export default {
  // model: {
  //   prop: 'show',
  //   event: 'changeShow'
  // },
  components: {
    animate
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String
    }
  },
  computed: {
    clasNames() {
      return `mp-intro ${this.show ? 'active' : ''}`
    }
  },
  methods: {
    toggle() {
      this.$emit('input', !this.show)
    }
  }
}
</script>

<style lang="scss">
  .mp-intro{
    position: relative;
    // transition: box-shadow 0.3s, -webkit-box-shadow 0.3s;
    &.active {
      box-shadow: 0 0 9999px 99999px rgba(0,0,0,0.4);
      -webkit-box-shadow: 0 0 9999px 9999px rgba(0,0,0,0.4);
      z-index: 3;
    }
  }
  .test-tips{
    position: absolute;
    left: 10%;
    bottom: 100%;
    width: 80%;
    text-align: center;
    background: #fff;
  }
</style>
