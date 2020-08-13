<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <van-cell v-for="(item,index) in list" :key="index">
          <item-search :song="item" v-if="item!=null"/>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import {getSongDetail, getIsSong} from "network/song";
import ItemSearch from "./itemSearch";
import {getSearch, getDetailSearch} from "network/search";

export default {
  name: "detailSearch",
  components: {ItemSearch},
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
        this.list = res.result.song.songs

        this.loading = false;
        if (this.list.length >= 5) {
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

</style>