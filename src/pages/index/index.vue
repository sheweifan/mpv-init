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
      currentTime: 0,
      motto: 'Hello World',
      userInfo: {},
      sliderValue: 0,
      videoSrc: null,
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'https://static.xinli001.com/kc/static/mp3/liquid.mp3'
    }
  },
  created() {
    let vid = '605ea32beef6f389e595fee5ac24b9ad_6'
    let vidObj = {
      vid: vid,
      callback: (videoInfo) => {
        console.log(videoInfo)  
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
    timeUpdate(e) {
      // polyv.timeUpdate(e)
    },
    playBackground() {
      const back = wx.getBackgroundAudioManager()
      back.src = this.src
      back.startTime = 0
      back.title = '天天音乐'
      back.protocol = 'hlv'
      back.coverImgUrl = 'https://striker.teambition.net/thumbnail/111858c824f0033f1009c5740bb5fc6b1b66/w/400/h/400'
      back.play()
      console.log(back)

      setTimeout(() => {
        back.pause()
      }, 10 * 1000)

      back.onCanplay(() => {
        console.log('canplay')
      })
      back.onPlay(() => {
        console.log('音乐播放开始')
      })
      back.onTimeUpdate(e => {
        // console.log(back.currentTime)
        // if (back.currentTime > 11) {
        //   back.seek(2)
        // }
      })
      back.onEnded(() => {
        this.playBackground()
        console.log('音乐播放结束')
      })
    }
  }
}
</script>

<style scoped>
</style>
