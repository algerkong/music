<template>
  <div>
    <van-popup
        v-model="show"
        duration="0.2"
        position="bottom"
        :style="{ height: '100%' }"
    >
      <top-bar class="top-bar" title="每日推荐" style="background-color:#ff0000"/>
      <div class="content"></div>
      <div>
        <van-image :src="songs[0].al.picUrl"/>
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
        show:true
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
  .top-bar {
    width: 100%;
  }
  
  .content{
    width: 100%;
    height: 70px;
  }
  
  .song-list {
    position: relative;
    top: -30px;
    z-index: 99;
    overflow: hidden;
    border-radius: 20px 20px 0 0;
  }
</style>