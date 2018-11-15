const audioMixin = {
  data() {
    return {
      currentTime: 0,
      duration: 0,
      audioPlaying: false,
      audioPlayedTime: 0,
      audioConfig: {}
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
      const { src, startTime, title, protocol, coverImgUrl } = this.audioConfig
      const backAudio = wx.getBackgroundAudioManager()
      backAudio.src = src
      backAudio.startTime = startTime
      backAudio.title = title
      backAudio.protocol = protocol
      backAudio.coverImgUrl = coverImgUrl
      this.backAudio = backAudio
      // Object.assign(this.backAudio, this.audioConfig)
      this.bindEvent()
      this.backAudio.pause()
    },
    _backAudioOnStop() {
      this.audioPlaying = false
      this.audioConfig.loop && this.update()
    },
    _backAudioOnPause() {
      this.audioPlaying = false
    },
    _backAudioOnPlay() {
      this.audioPlaying = true
    },
    _backAudioOnTimeUpdate() {
      const { audioConfig: { playTimeout }, audioPlayedTime } = this
      this.currentTime = this.backAudio.currentTime
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
        const event = events[i]
        const methodName = 'backAudio' + event.replace('o', 'O')
        const method = this[methodName]
        const _method = this[`_${methodName}`]
        this.backAudio[event]((...args) => {
          typeof _method === 'function' && _method(...args)
          typeof method === 'function' && method(...args)
        })
      }
    }
  },
  destoryed() {
    this.stop()
  },
  watch: {
    audioConfig(val) {
      this.audioPlayedTime = 0
      console.log(val)
      val.src && this.update()
    },
    audioPlaying(val) {
      if (val) {
        this.audioPlayTimer = setInterval(() => this.audioPlayedTime++, 1024)
      } else {
        this.audioPlayTimer && clearInterval(this.audioPlayTimer)
      }
    }
  }
}

export default audioMixin
