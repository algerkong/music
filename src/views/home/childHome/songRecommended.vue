<template>
  <div class="song-page">
    <van-swipe :loop="false" :width="350" :show-indicators="false">
      <van-swipe-item v-for="(item, index) in list" :key="index" >
        <div>
          <div v-for="song in item.resources" @click="itemClick(song)" class="item-page">
            <div class="img-page">
              <van-image :src="song.uiElement.image.imageUrl" width="55" height="55"/>
            </div>
            <div class="song-title">
              <p>
                {{ song.uiElement.mainTitle.title }}
                <span class="author" v-if="song.resourceExtInfo"> - {{ song.resourceExtInfo.artists[0].name }}</span>
              </p>
              <!--              <p>{{ song.uiElement.subTitle.title}}</p>-->
            </div>
            <div class="play-icon">
              <van-icon name="play-circle-o" color="rgb(238, 10, 36)" size="25px"/>
            </div>
          </div>
        </div>

      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import {getSongUrl} from "network/song";
import {Toast} from "vant";

export default {
  name: "songRecommended",
  data() {
    return {
      songList: []
    }
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
    console.log(this.list)
  },
  methods: {
    itemClick(item) {
      let state = this.$store.state
      getSongUrl(item.resourceId).then(res => {
        console.log(res)
        if (res.data[0].url != null) {
          state.isMusic = true
          state.musicSrc = {
            id: item.resourceId,
            src: res.data[0].url,
            img: item.uiElement.image.imageUrl,
            name: item.uiElement.mainTitle.title,
            arName: item.resourceExtInfo.artists[0].name,
            arID: item.resourceExtInfo.artists[0].id,
            isPlay: true
          }
          state.arID = item.resourceExtInfo.artists[0].id;
          state.allMusic.pushNoRepeat(state.musicSrc)
          console.log(state.allMusic)
        } else {
          Toast('暂无版权');
        }

      })
    }
  }
}
</script>

<style scoped>
.song-page {
  padding: 10px 16px;
}

.author {
  font-size: 14px;
  color: #6f6f6f;
}

.song-title {
  padding: 0 10px;
  flex: 1;
}

.play-icon{
  width: 40px;
}

.item-page {
  display: flex;
  align-items: center;
  padding: 5px 0;
}
.img-page{
  overflow: hidden;
  border-radius: 5px;
}
.van-swipe__indicators{
  display: none !important;
}
</style>