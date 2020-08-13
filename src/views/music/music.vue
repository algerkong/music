<template>
  <div>
    <van-popup
        class="music-page"
        v-model="$store.state.isMusicPop"
        duration="0.2"
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
                width="65vw"
                height="65vw"
                fit="cover"
                :src="$store.state.musicSrc.img"
            />
          </div>
        </div>
        <div class="music-text" v-show="isText">
          <van-form>
            <div v-for="(item,index) in musicText" v-if="!text" class="text"
                 :class="{'music-new-text':isTimeText(index)}">
              <p> {{ item }} </p>
            </div>

            <div v-for="(item,index) in text" v-if="text" class="text" :class="{'music-new-text':isTimeText(index)}">
              <p>
                <span>{{ item.text }}</span><br/>
                <span>{{ item.trText }}</span>
              </p>
            </div>

            <div v-if="count" class="text music-new-text">
              <p>没有歌词, 请欣赏音乐</p>
            </div>
          </van-form>
        </div>
      </div>
      <div class="music-bottom">
        <div class="music-btn" v-show="!isText">
          <div>
            <van-icon name="like-o" size="20px" color="#333"/>
          </div>
          <div>
            <van-icon name="down" size="20px" color="#333"/>
          </div>
          <div>
            <van-icon name="chat-o" size="20px" color="#333" @click="showComment"/>
          </div>
          <div>
            <van-icon name="ellipsis" size="20px" color="#333" class="btn-set"/>
          </div>
        </div>
        <!--        <van-progress color="#333" :percentage="musicTime" pivot-text=" " stroke-width="2px"/>-->
        <van-slider
            v-model="musicTime"
            active-color="#333"
            @change="sliderChange"
            step="0.1"
            button-size="15px"
        />
        <div class="play-page">
          <div class="model">
            <van-icon name="replay" size="20px"/>
          </div>
          <div class="prev">
            <img src="https://s1.ax1x.com/2020/08/11/aLC7qK.png" alt="">
          </div>
          <div @click="isPlay">
            <van-icon name="play" size="50px" v-if="!$store.state.musicSrc.isPlay"/>
            <van-icon name="pause" size="50px" v-else/>
          </div>
          <div class="next">
            <img src="https://s1.ax1x.com/2020/08/11/aLCbVO.png" alt="">
          </div>
          <div class="history-music">
            <van-icon name="todo-list-o" size="20px" @click="showHistory"/>
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

export default {
  name: "music",
  components: {MusicHistory, MusicBar},
  data() {
    return {
      musicSrc: this.$store.state.musicSrc,
      text: [],
      musicText: [],
      trMusicText: [],
      musicTimeArray: [],
      isText: false,
      isHistory: false,
      count: 0
    }
  },
  created() {
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

        } catch (err) {
          this.text = null
        }
      } catch (err) {
        this.count = 1
      }
    })
  },
  methods: {
    showText() {
      this.isText = !this.isText
    },
    showComment(){
      this.$store.state.isComment = true
      console.log('11111111111111')
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
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 20px #ececec;
}

.img-page {
  display: flex;
  justify-content: center;
  padding-top: 70px;
}

.music-middle {
  min-height: 80vh;
}

.music-bottom {
  width: 100vw;
  padding: 20px 16px;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
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

.next > img, .prev > img {
  width: 35px;
  height: 35px;
}

.author {
  margin-top: 70px;
  text-align: center;
  padding: 5px 0;
}


</style>