<template>
  <div class="mp-layout">
    <div v-if="!hasNetwork">网路错误</div>
    <template v-else>
      <slot/>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'mp-layout',
  computed: {
    ...mapState(['hasNetwork'])
  }
}
</script>

<style>

</style>
