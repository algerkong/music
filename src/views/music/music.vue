<template>
  <div>
    <van-popup
        class="music-page"
        v-model="show"
        duration="0.3"
        position="bottom"
        :style="{ height: '100%' }"
    >
      <music-bar :music-name="$store.state.musicSrc.name"/>
      <div class="author" v-show="!isText" @click="showAuthor">
        <p><span>{{ $store.state.musicSrc.arName }}</span></p>
      </div>
      <div class="music-middle" @click="showText">
        <div class="img-page" v-show="!isText">
          <div class="img-box">
            <van-image
                class="img"
                fit="cover"
                :src="$store.state.musicSrc.img+'?param=500y500'"
            />
          </div>
        </div>
        <div class="music-text" v-show="isText">
          <van-form>
            <div v-if="!text">
              <div v-for="(item,index) in musicText" class="text"
                   :class="{'music-new-text':isTimeText(index)}">
                <p> {{ item }} </p>
              </div>
            </div>

            <div v-if="text">
              <div v-for="(item,index) in text" class="text" :class="{'music-new-text':isTimeText(index)}">
                <p>
                  <span>{{ item.text }}</span><br/>
                  <span>{{ item.trText }}</span>
                </p>
              </div>
            </div>


            <div v-if="count" class="text music-new-text">
              <p>没有歌词, 请欣赏音乐</p>
            </div>
          </van-form>
        </div>

<!--        <div v-if="!text">-->
<!--          <div v-for="(item,index) in musicText" :key="index" class="text">-->
<!--            <p v-if="isTimeText(index-1)"> {{ item }} </p>-->
<!--            <p v-if="isTimeText(index)"> {{ item }} </p>-->
<!--            <p v-if="isTimeText(index+1)"> {{ item }} </p>-->
<!--          </div>-->
<!--        </div>-->

      </div>


      <div class="music-bottom">
        <div class="music-btn" v-show="!isText">
          <div>
            <van-icon name="like-o" color="#333"/>
          </div>
          <div @click="downMusic">
            <van-icon name="down" color="#333"/>
          </div>
          <div @click="showComment">
            <van-icon name="chat-o" color="#333"/>
          </div>
          <div>
            <van-icon name="ellipsis" color="#333" class="btn-set"/>
          </div>
        </div>
        <!--        <van-progress color="#333" :percentage="musicTime" pivot-text=" " stroke-width="2px"/>-->
        <van-slider
            v-model="musicTime"
            active-color="#333"
            @change="sliderChange"
            step="0.5"
            button-size="15px"
        />
        <div class="play-page">
          <div class="model" @click="loopStart">
            <van-icon name="replay" v-if="$store.state.isLoop"/>
            <van-icon name="exchange" v-if="!$store.state.isLoop"/>
          </div>
          <div class="prev" @click="prevSong">
            <img src="https://s1.ax1x.com/2020/08/11/aLC7qK.png" alt="">
          </div>
          <div class="play" @click="isPlay">
            <van-icon name="play" v-if="!$store.state.musicSrc.isPlay"/>
            <van-icon name="pause" v-else/>
          </div>
          <div class="next" @click="nextSong">
            <img src="https://s1.ax1x.com/2020/08/11/aLCbVO.png" alt="">
          </div>
          <div class="history-music">
            <van-icon name="todo-list-o" @click="showHistory"/>
          </div>
        </div>
      </div>
    </van-popup>

    <van-popup class="history-pop" v-model="isHistory" round position="bottom" :style="{ height: '60%' }">
      <music-history/>
    </van-popup>
  </div>
</template>

<script>
import MusicBar from "./childMusic/musicBar";
import {getSongText} from "network/song";
import MusicHistory from "./childMusic/musicHistory";
import {Toast} from "vant";

import exportFile from "../../common/exportFile";

export default {
  name: "music",
  components: {MusicHistory, MusicBar},
  data() {
    return {
      musicSrc: this.$store.state.musicSrc,
      text: [],
      textCount: 0,
      musicText: [],
      trMusicText: [],
      musicTimeArray: [],
      isText: false,
      isHistory: false,
      count: 0,
      show: true
    }
  },
  watch: {
    '$store.state.newTime': function () {
      // console.log(window.getComputedStyle(document.querySelector('.music-new-text')).top)
    },

    $route(to, from) {
      this.songText();
    }
  },
  created() {
    this.songText();
  },
  methods: {
    showText() {
      this.isText = !this.isText
    },
    showComment() {
      this.$router.push('/comment')
    },
    isPlay() {
      console.log(this.$store.state.musicSrc.isPlay)
      this.$store.state.musicSrc.isPlay = !this.$store.state.musicSrc.isPlay
    },
    showHistory() {
      this.isHistory = true
    },
    showAuthor() {
      this.$router.push('/singer')
    },
    sliderChange(value) {
      this.$store.state.audio.currentTime = value / 100 * this.$store.state.allTime;
    },
    loopStart() {
      this.$store.state.isLoop = !this.$store.state.isLoop;
      if (this.$store.state.isLoop) {
        Toast("循环播放");
      } else {
        Toast("列表播放");
      }
    },
    prevSong() {
      let state = this.$store.state;
      console.log(state.musicSrc.count)

      if (state.musicSrc.count > 0) {
        state.musicSrc = state.allMusic[state.musicSrc.count / 1 - 1]
      } else {
        state.musicSrc = state.allMusic[state.allMusic.length - 1]
      }

    },
    nextSong() {
      let state = this.$store.state;
      console.log(state.musicSrc.count)
      if (state.musicSrc.count < state.allMusic.length - 1) {
        state.musicSrc = state.allMusic[state.musicSrc.count / 1 + 1]
      } else {
        state.musicSrc = state.allMusic[0]
      }
    },
    downMusic() {
      let musicSrc = this.$store.state.musicSrc
      let src = musicSrc.src;
      let name = musicSrc.name + '-' + musicSrc.arName;
      exportFile.getMusic(src, name)
    },

    songText() {
      getSongText(this.$store.state.musicSrc.id).then(res => {
        try {
          console.log(res)
          this.musicText = res.lrc.lyric

          console.log(this.musicText);
          //歌词时间
          this.musicTimeArray = this.musicText.match(/(\d{2}):(\d{2})(\.(\d*))?/g)

          console.log(this.musicTimeArray)
          //歌词
          this.musicText = this.musicText.replace(/(\[(\d{2}):(\d{2})(\.(\d*))?\])/g, '').split('\n')
          let count = this.musicText.length - this.musicTimeArray.length;
          if (count) {
            this.musicText = this.musicText.slice(count - 1)
          }
          console.log(this.musicText)

          try {
            this.trMusicText = res.tlyric.lyric
            this.trMusicText = this.trMusicText.replace(/(\[(\d{2}):(\d{2})(\.(\d*))?\])/g, '').split('\n')

            for (let i = 0; i < this.musicText.length; i++) {
              this.text.push({
                text: this.musicText[i],
                trText: this.trMusicText[i]
              })
            }

            console.log(text)

          } catch (err) {
            this.text = null
          }
        } catch (err) {
          this.count = 1
        }
      })
    }
  },
  computed: {
    musicTime: {
      get() {
        return this.$store.state.newTime / this.$store.state.allTime * 100
      },
      set(v) {

      }
    },
    isTimeText() {
      return (index) => {
        this.textCount = index;
        return !(this.$store.state.realMusicTime <= this.musicTimeArray[index] || this.$store.state.realMusicTime > this.musicTimeArray[index + 1])
      }
    }
  }
}
</script>

<style scoped>
.music-page {
  background-color: #ffffff;
}

.img-box {
  display: inline-block;

  box-shadow: 0 0 20px #ececec;
}

.img {
  overflow: hidden;
  border-radius: 10px;
  width: 250px;
  height: 250px;
}

.img-page {
  display: flex;
  justify-content: center;
}

.music-middle {
  /*min-height: 80vh;*/
}

.music-bottom {
  width: 100vw;
  padding: 20px 16px;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  font-size: 20px;
}

.music-text {
  padding: 70px 16px 150px;
  text-align: center;
  color: #6f6f6f;
}

.music-text .text {
  font-size: 16px;
  line-height: 25px;
  padding: 8px 0;
}

.music-new-text {
  font-size: 18px !important;
  font-weight: 600;
  color: #333333;
}


.music-btn {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
}

.btn-set {
  transform: rotate(90deg);
}

.play-page {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
}


.play {
  display: flex;
  align-items: center;
  font-size: 50px;
}

.next > img, .prev > img {
  width: 35px;
  height: 35px;
}

.author {
  margin-top: 70px;
  text-align: center;
  padding: 5px 0;
  font-size: 18px;
}


</style>