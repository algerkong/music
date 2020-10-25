<template>
  <div class="item-page">
    <div class="music-name" @click="itemClick">
      <p><span class="name">{{ music.name }}</span><span class="author"> - {{ music.arName }}</span></p>
    </div>
    <div class="play-icon" >
      <van-icon name="pause-circle-o" color="#ff0000" v-if="music.id === this.$store.state.musicSrc.id"/>
    </div>
    <div class="history-icon">
      <van-icon name="like-o"/>
    </div>
  </div>
</template>

<script>
import {Toast} from "vant";
import {getSongUrl} from "network/song";

export default {
  name: "history-item",
  props: {
    music: {
      type: Object,
      default: {
        return: {}
      }
    }
  },
  methods: {
    itemClick() {
      console.log(this.music)
      let state = this.$store.state
      getSongUrl(this.music.id).then(res => {
        if (res.data[0].url != null) {
          state.isMusic = true
          state.musicSrc = this.music
          console.log(this.songDetail.arName)
          state.allMusic.pushNoRepeat(state.musicSrc)
        } else {
          Toast('暂无版权');
        }
      })
    }
  }
}
</script>

<style scoped>
.item-page {
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.music-name {
  flex: 7;
}

.history-icon,.play-icon{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

.music-name{
  font-size: 16px;
}

.name {
  color: #333333;
}

.author {
  font-size: 13px;
  color: #6f6f6f;
}
</style>