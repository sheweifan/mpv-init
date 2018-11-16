<template>
  <div class="container">
    <mp-navbar />
    <button @click="playBackground">playBackground</button>
    <button @click="goToIndex2">go index2</button>
    <audio-range
      :max="duration"
      v-model="currentTime"
      @changing="rangeChange"
      @change="rangeChangeEnd"
    />
    <div>{{currentTime}}</div>
    <div>{{duration}}</div>
    <div>{{audioPlaying}}</div>
    <div>{{audioPlayedTime}}</div>
    <button @click="play">播放</button>
    <button @click="pause">暂停</button>
  </div>
</template>

<script>
import polyv from '@/utils/polyv.js'
import mpNavbar from '@/components/navbar'
import audioRange from '@/components/audio-range'
import audioMixins from '@/mixins/audio'

export default {
  mixins: [audioMixins],

  components: {
    mpNavbar, audioRange
  },

  data() {
    return {
      duration: 52,
      wocao: 0,
      wocao2: 0,
      startPlay: 0,
      src: 'https://static-box1.xinli001.com/kc/static/mp3/liquid.mp3'
    }
  },

  created() {
    let vid = '605ea32beef6f389e595fee5ac24b9ad_6'
    let vidObj = {
      vid: vid,
      callback: (videoInfo) => {
        // this.videoSrc = videoInfo.src[0]
      }
    }
    polyv.getPreviewVideo(vidObj)
  },

  methods: {
    goToIndex2() {
      this.$router.push('/pages/index2/main?fuck=heheheheheh')
    },
    changehehe(e) {
      const { detail: { value } } = e.mp
      this.wocao2 = value
    },
    playBackground() {
      let back = {}
      back.startTime = 0
      back.src = this.src
      back.playTimeout = 100
      back.title = '天天音乐'
      back.coverImgUrl = 'https://striker.teambition.net/thumbnail/111858c824f0033f1009c5740bb5fc6b1b66/w/400/h/400'
      this.audioConfig = back
      // this.play()
    },
    rangeChange() {
      this.audioPlaying && this.pause()
    },
    rangeChangeEnd(e) {
      const { detail: { value } } = e.mp
      if (this.backAudioinited) {
        this.seek(value)
        this.$nextTick(() => {
          this.play()
        })
      } else {
        this.currentTime = value
      }
    }
  },

  computed: {
    audioConfig() {
      let back = {}
      back.startTime = this.currentTime
      back.src = this.src
      back.playTimeout = 100
      back.title = '天天音乐'
      back.coverImgUrl = 'https://striker.teambition.net/thumbnail/111858c824f0033f1009c5740bb5fc6b1b66/w/400/h/400'
      return back
    }
  }
}
</script>

<style scoped>
</style>
