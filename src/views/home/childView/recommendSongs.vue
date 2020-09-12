<template>
  <div class="page">
    <van-popup
        v-model="show"
        duration="0.2"
        position="bottom"
        :style="{ height: '100%' }"
    >
      <top-bar class="top-bar" title="每日推荐" style="background-color:#ff0000"/>
      <div class="content"></div>
      <div>
        <img v-lazy="songs[0].al.picUrl"  width="100%" alt="">
<!--        <van-image :src="songs[0].al.picUrl"/>-->
      </div>
      <div class="song-list">
        <van-cell v-for="(item,index) in songs" :key="index">
          <item-search :song="item" v-if="item!=null"/>
        </van-cell>
      </div>
    </van-popup>
  </div>
</template>

<script>
import {getRecommendSongs} from "network/song";
import ItemSearch from "../../search/childSearch/itemSearch";
import TopBar from "../../../components/common/TabBar/topBar";

export default {
  name: "recommendSongs",
  components: {TopBar, ItemSearch},
  data() {
    return {
      songs: [],
      show: true
    }
  },
  created() {
    getRecommendSongs().then(res => {
      this.songs = res.data.dailySongs
    })
  }
}
</script>

<style scoped>

.page {
  position: relative;
  top: 0;
  left: 0;
  z-index: 500;
}

.top-bar {
  width: 100%;
}

.content {
  width: 100%;
  height: 70px;
}

.song-list {
  position: relative;
  top: -30px;
  z-index: 99;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  padding-top: 15px;
  background: #fff;
}
</style>