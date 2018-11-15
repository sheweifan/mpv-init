const audioMixin = {
  data() {
    return {
      currentTime: 0,
      duration: 0,
      audioPlaying: false,
      audioPlayedTime: 0
    }
  },
  computed: {
    auidoConfig() {
      console.log(`
        请配置audio配置，尽量配置完整，在两端播放参数不齐全情况下有坑
        https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.html
      `)
      return {}
    }
  },
  methods: {
    play() {
      this.backAudio.play()
    },
    pause() {
      this.backAudio.pause()
    },
    stop() {
      this.backAudio.stop()
    },
    seek() {
      this.backAudio.seek()
    },
    update() {
      const { src, startTime, title, protocol, coverImgUrl } = this.auidoConfig
      this.backAudio = wx.getBackgroundAudioManager()
      this.backAudio.src = src
      this.backAudio.startTime = startTime
      this.backAudio.title = title
      this.backAudio.protocol = protocol
      this.backAudio.coverImgUrl = coverImgUrl
      // Object.assign(this.backAudio, this.auidoConfig)

      this.bindEvent()
      this.backAudio.play()
    },
    _backAudioOnStop() {
      // this.audioPlaying = false
      this.audioConfig.loop && this.update()
    },
    // _backAudioOnPause() {
    //   this.audioPlaying = false
    // },
    // _backAudioOnPlay() {
    //   this.audioPlaying = true
    // },
    _backAudioOnTimeUpdate() {
      const { audioConfig: { playTimeout }, audioPlayedTime } = this
      if (typeof playTimeout === 'number' && audioPlayedTime > playTimeout) {
        this.stop()
      }
    },
    bindEvent() {
      /* eslint-disable */
      const events = ['onCanplay', 'onWaiting', 'onError', 'onPlay',
      'onPause', 'onSeeking', 'onSeeked', 'onEnded',
      'onStop', 'onTimeUpdate', 'onNext', 'onPrev']
      /* eslint-disable */

      for (let i = 0; i < events.length; i++) {
        const event = events[i].replace('o', 'O')
        const methodName = 'backAudio' + event
        const method = this[methodName]
        const _method = this[`_${methodName}`]
        this.backAudio[event]((...args) => {
          typeof _method === 'function' && _method.call(this, ...args)
          typeof method !== 'function' && method.call(this, ...args)
        })
      }

      Object.defineProperty(this.backAudio, 'currentTime', {
        set(currentTime) {
          this.currentTime = currentTime
        }
      })
      Object.defineProperty(this.backAudio, 'paused', {
        set(paused) {
          this.audioPlaying = !paused
        }
      })
    }
  },
  destoryed() {
    this.stop()
  },
  watch: {
    auidoConfig(val) {
      this.audioPlayedTime = 0
      val.src && this.update()
    },
    audioPlaying(val) {
      if (val) {
        this.audioPlayTimer = setInterval(() => audioPlayedTime++, 1024)
      } else {
        this.audioPlayTimer && clearInterval(this.audioPlayTimer)
      }
    }
  }
}

export default audioMixin
