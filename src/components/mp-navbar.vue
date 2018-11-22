<template>
  <div class="header-layout"
      :style="{
        height: navHeight + 'px'
      }"
    >
    <header class="header"
      :style="navStyle"
    >
      <div class="left">
        <span class="go-back" v-if="canGoback" @click="goback">{{ gobackText }}</span>
      </div>
      <div class="center">{{ title }}</div>
      <div class="right"></div>
    </header>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import utils from '@/utils'

export default {
  props: {
    style: {
      type: Object,
      default() {
        return {}
      }
    },
    gobackText: {
      type: String,
      default: '返回'
    },
    title: {
      type: String,
      default: '稍息小程序'
    },
    goBackTo: {
      type: [Number, String, undefined],
      default: -1
    }
  },
  methods: {
    goback() {
      const { goBackTo, $router } = this
      const methods = typeof goBackTo === 'number' ? 'go' : 'replace'
      $router[methods](this.goBackTo)
    }
  },
  computed: {
    ...mapState(['statusBarHeight']),
    ...mapGetters(['navHeight']),
    navStyle() {
      let style = {
        ...this.style,
        height: this.navHeight + 'px',
        paddingTop: this.statusBarHeight + 'px'
      }
      return utils.toStyleSting(style)
    },
    canGoback() {
      return this.$route.pages && this.$route.pages.length > 1
    }
  }
}
</script>

<style scoped lang="scss">
  .header-layout{
    position: relative;
    z-index: $navbarZIndex;
  }
  .header{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    background: transparent;

    .left,
    .right,
    .center{
      height: 100%;
      display: flex;
      align-items: center;
    }

    .left,
    .right{
      width: 108PX;
      box-sizing: border-box;
      padding: 0 10px;
    }
    .center{
      flex: 1;
      justify-content: center;
      font-size: 17px;
    }

    .go-back{
      font-size: 15px;
      color: #333;
      padding: 10px 0;
    }

  }
</style>
