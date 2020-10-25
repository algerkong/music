<template>
  <div class="song-page">
    <van-swipe :loop="false" class="swipe-song" :show-indicators="false">
      <van-swipe-item v-for="(item, index) in list" :key="index">
        <div>
          <div v-for="song in item.resources" @click="itemClick(song)" class="item-page">
            <div class="img-page">
              <van-image class="img" :src="song.uiElement.image.imageUrl+'?param=120y120'" />
            </div>
            <div class="song-title">
              <p class="van-ellipsis">
                {{ song.uiElement.mainTitle.title }}

              </p>
              <p class="van-ellipsis">
                <span class="author" v-if="song.resourceExtInfo">
                  {{ song.resourceExtInfo.artists[0].name }}
                </span>
              </p>
            </div>
            <div class="play-icon">
              <van-icon name="play-circle-o" color="rgb(238, 10, 36)" />
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
  overflow: hidden;
  font-size: 18px;
}

.play-icon {
  width: 40px;
  font-size: 25px;
}

.item-page {
  display: flex;
  align-items: center;
  padding: 5px 0;
}

.img-page > .img {
  overflow: hidden;
  border-radius: 5px;
  width: 55px;
  height: 55px;
}

.van-swipe__indicators {
  display: none !important;
}

.swipe-song
{
  width: 350px;
}

</style>