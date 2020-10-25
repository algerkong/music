<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <div class="search-title" v-show="finished">单曲</div>
        <van-cell v-for="(item,index) in list[0]" :key="index">
          <lazy-component>
            <item-search :song="item" v-if="item!=null"/>
          </lazy-component>

        </van-cell>

        <div class="search-title" v-show="finished">歌单</div>
        <van-cell v-for="(item,index) in list[1]" :key="index">
          <lazy-component>
            <item-play-list :list-item="item"/>
          </lazy-component>
        </van-cell>

        <div class="search-title" v-show="finished">专辑</div>
        <van-cell v-for="(item,index) in list[2]" :key="index">
          <lazy-component>
            <item-album :album-item="item"/>
          </lazy-component>
        </van-cell>

        <div class="search-title" v-show="finished">视频</div>
        <van-cell v-for="(item,index) in list[3]" :key="index">
          <lazy-component>
            <item-video :video-item="item"/>
          </lazy-component>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import {getSongDetail, getIsSong} from "network/song";

import {getSearch, getDetailSearch} from "network/search";
import ItemSearch from "item/itemSearch";
import ItemPlayList from "../../../components/common/item/itemPlayList";
import ItemAlbum from "../../../components/common/item/itemAlbum";
import ItemVideo from "../../../components/common/item/itemVideo";

export default {
  name: "AllSearch",
  components: {ItemVideo, ItemAlbum, ItemPlayList, ItemSearch},
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      listPage: 1,
    };
  },
  props: {
    res: {
      type: String,
      default() {
        return ''
      }
    }
  },
  methods: {
    onLoad() {
      getSearch(this.res, 1018).then(res => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        this.list = []
        this.list = [
          res.result.song.songs,
          res.result.playList.playLists,
          res.result.album.albums,
          res.result.video.videos
        ]

        this.loading = false;
        if (this.list.length >= 4) {
          this.finished = true;
        }
        console.log(res)
      })
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  }
}
</script>

<style scoped>
.search-title {
  padding: 10px 16px;
  font-size: 18px;
}
</style>