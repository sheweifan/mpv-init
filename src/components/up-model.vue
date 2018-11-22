<template>
  <div class="">
    <mask @click="toggle" v-if="value"/>
    <div :class="classNames">
      <div>
        <div class="close-btn">
          <div class="btn" @click="toggle">x</div>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import mask from '@/components/mask'
export default {
  components: {
    mask
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      fuck: true
    }
  },
  methods: {
    toggle() {
      this.$emit('input', !this.value)
    }
  },
  computed: {
    classNames() {
      let clsList = ['up-model-context', 'fadeInUp']
      if (this.value) {
        clsList.push('animated')
      }
      return clsList.join(' ')
    }
  }
}
</script>

<style lang="scss">
  .up-model-context{
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 20px 20px 0 0;
    box-shadow: 0 0 -10px 10px rgba(0, 0, 0, 0.2);
    z-index: $modelZIndex;

    .close-btn{
      display: flex;
      justify-content: flex-end;
      .btn{
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border: 1PX solid #e5e5e5;
        border-radius: 50%;
      }
    }
  }
</style>
