<template>
  <div class="container">
    <mp-navbar />
    <button @click="playBackground">playBackground</button>
    <button @click="goToIndex2">go index2</button>
  </div>
</template>

<script>
import polyv from '@/utils/polyv.js'
import navbar from '@/components/navbar'
import audioMixins from '@/mixins/audio'

export default {
  mixins: [audioMixins],
  components: {
    'mp-navbar': navbar
  },
  data() {
    return {
      src: 'https://static-box1.xinli001.com/kc/static/mp3/liquid.mp3'
    }
  },
  created() {
    let vid = '605ea32beef6f389e595fee5ac24b9ad_6'
    let vidObj = {
      vid: vid,
      callback: (videoInfo) => {
        this.videoSrc = videoInfo.src[0]
      }
    }
    polyv.getPreviewVideo(vidObj)
  },

  mounted() {
    console.log(`$router`, this.$router)
    console.log(`$route`, this.$route)
    // this.$router.push('/pages/index2/main?fuck=heheheheheh')
  },

  methods: {
    goToIndex2() {
      this.$router.push('/pages/index2/main?fuck=heheheheheh')
    },
    playBackground() {
      let back = {}
      back.startTime = 0
      back.src = this.src
      back.title = '天天音乐'
      back.coverImgUrl = 'https://striker.teambition.net/thumbnail/111858c824f0033f1009c5740bb5fc6b1b66/w/400/h/400'
      this.audioConfig = back
      // this.play()
    }
  },

  computed: {
  }
}
</script>

<style scoped>
</style>
