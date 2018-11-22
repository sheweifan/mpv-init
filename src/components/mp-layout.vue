<template>
  <div class="mp-layout">
    <div v-if="!hasNetwork">网路错误</div>
    <template v-else>
      <slot/>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'mp-layout',
  computed: {
    ...mapState(['dialogConfig']),
    ...mapGetters(['hasNetwork'])
  }
}
</script>

<style>

</style>
