<template>
  <div>
    <van-popup
        class="music-page"
        v-model="$store.state.isShow"
        duration="0.2"
        position="bottom"
        :style="{ height: '100%' }"
    >
      <top-bar class="top-bar" title="每日推荐" style="background-color: rgba(2,2,2,0.58)"/>
      <div>
        <div>
          <van-image :src="songs[0].al.picUrl"/>
        </div>
        <van-form>
          <div class="song-list">
            <van-cell v-for="(item,index) in songs" :key="index">
              <item-search :song="item" v-if="item!=null"/>
            </van-cell>
          </div>
        </van-form>
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
        songs: []
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
  
  .song-list {
    position: relative;
    top: -30px;
    overflow: hidden;
    border-radius: 20px 20px 0 0;
  }
</style>