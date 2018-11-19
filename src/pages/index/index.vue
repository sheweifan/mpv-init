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
    <button @click="toggle">播放/暂停</button>
    <div class="ehe">
      <button @click="toggle2" class="tips">播放/暂停2</button>
    </div>
    <tips-mask>
    </tips-mask>
  </div>
</template>

<script>
import polyv from '@/utils/polyv.js'
import mpNavbar from '@/components/mp-navbar'
import audioRange from '@/components/audio-range'
import audioMixins from '@/mixins/audio'
import tipsMask from '@/components/tips-mask'

export default {
  mixins: [audioMixins],

  components: {
    mpNavbar, audioRange, tipsMask
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
    },
    toggle2() {
      this.src = `https://private.psy-1.com/music/meditation_breathe_plus-uoVmeHHPCGn7ngD6RxIS.mp3?e=1542108019&token=Wxe4Fvn8XfvDpkeUO0RVUj2Sz1E1KVi05wwZAr6x:u3kdzu4S1hGAEGrNyNnnrKExRdc=`
      this.currentTime = 0
      this.duration = 60 * 60 + 34
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
  .tips {
    box-shadow: 0 0 9999px 99999px rgba(0,0,0,0.4);
    -webkit-box-shadow: 0 0 9999px 9999px rgba(0,0,0,0.4);
    position: relative;
    z-index: 999999;
  }
  .tips2{
    position: relative;
    transform: translate3d(0, 0, 0)
  }
</style>
