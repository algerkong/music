<template>
  <div class="music">
    <audio ref="audio" class="audio" id="audio" hidden :src="$store.state.musicSrc.src" controls
           autoplay="autoplay"></audio>
    <div class="music-click" @click="musicPop">
      <div class="music-img">
        <van-image
            round
            width="35px"
            height="35px"
            :src="$store.state.musicSrc.img"
        />
      </div>
      <div class="music-name">
        <p>{{ $store.state.musicSrc.name }}{{ time }}</p>
      </div>
    </div>
    <div class="music-play" @click="btnClick">
      <van-icon name="play-circle-o" color="#6f6f6f" size="30px" v-if="!$store.state.musicSrc.isPlay"/>
      <van-icon name="pause-circle-o" color="#6f6f6f" size="30px" v-if="$store.state.musicSrc.isPlay"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "musicPlay",
  data() {
    return {
      musicSrc: this.$store.state.musicSrc,
    }
  },
  watch: {
    '$store.state.musicSrc': function () {
      this.onAudio()
    },
    '$store.state.musicSrc.isPlay': function () {
      let audio = this.$refs.audio
      this.onAudio()
      if (this.$store.state.musicSrc.isPlay) {
        audio.play()
      } else {
        audio.pause();
      }
    },
  },
  created() {
    setInterval(this.onAudio, 500)
  },
  computed: {
    time() {

      if (this.$store.state.realMusicTime) {
        return this.$store.state.realMusicTime.match(/(\d{2}):(\d{2})/g)[0]
      } else {
        return ''
      }
    }
  },
  methods: {
    musicPop() {
      this.$router.push('/music')
    },
    btnClick() {
      this.onAudio();
      console.log(this.$store.state.musicSrc.isPlay);
      let audio = this.$refs.audio

      console.log(audio.duration)
      if (this.$store.state.musicSrc.isPlay === false) {
        audio.play()
        this.$store.state.musicSrc.isPlay = true
      } else {
        audio.pause();
        this.$store.state.musicSrc.isPlay = false
      }

    },
    //获取播放时间
    onAudio() {
      let audio = this.$refs.audio
      let state = this.$store.state;
      if (this.$store.state.musicSrc.isPlay) {
        state.audio = audio
        audio.addEventListener("timeupdate", function () {//监听音频播放的实时时间事件
          let timeDisplay;
          //用秒数来显示当前播放进度
          state.newTime = audio.currentTime

          // console.log(state.newTime);
          timeDisplay = Math.floor(audio.currentTime);//获取实时时间
          // console.log(timeDisplay)
          //处理时间
          //分钟
          let minute = timeDisplay / 60;
          let minutes = parseInt(minute);
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          //秒
          let second = timeDisplay % 60;
          let seconds = Math.round(second);
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
          state.realMusicTime = minutes + ":" + seconds + "." + audio.currentTime.toString().replace(/\d+\.(\d*)/, "$1");//将实时时间存储到vuex中
          if (audio.currentTime === audio.duration) {
            state.musicSrc.isPlay = false
          }
        }, false);
      }
      state.allTime = audio.duration
    }
  }
}
</script>

<style scoped>
.music {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 45px;
  padding: 0 16px;
}

.music-click {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.music-name {
  flex: 1;
  color: #333333;
  padding-left: 10px;
}

</style>