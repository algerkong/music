<template>
  <div>
    <van-tabs
      v-model="active"
      swipeable
      @change="changeTags"
      class="tag-tabs"
      sticky
      offset-top="53px"
    >
      <van-tab v-for="(tag, number) in tags" :title="tag.name" :key="number">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div :is="tag.comp" :res="res"></div>
          <!-- <van-cell v-for="(item, index) in list[number]" :key="index">
            
          </van-cell> -->
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getSongDetail, getIsSong } from "network/song";
import { getSearch, getDetailSearch } from "network/search";
import actions from "../../../../../kbone-template-vue/src/store/actions";
import ItemAll from "item/itemAll";

import AllSearch from "../childItem/allSearch";
export default {
  name: "detailSearch",
  components: { AllSearch, ItemAll},
  data() {
    return {
      list: [[], [], [], [], [], [], [], [], []],
      tags: [
        { type: 1018, name: "综合", comp: "allSearch" },
        { type: 1, name: "单曲" },
        { type: 10, name: "专辑" },
        { type: 1000, name: "歌单" },
        { type: 100, name: "歌手" },
        { type: 1002, name: "用户" },
        { type: 1009, name: "电台" },
        { type: 1006, name: "歌词" },
        { type: 1014, name: "视频" },
      ],
      type: null,
      loading: false,
      finished: false,
      refreshing: false,
      listPage: 1,
      active: 0,
      count: 1,
    };
  },
  props: {
    res: {
      type: String,
      default() {
        return "";
      },
    },
  },
  watch: {
    res: function () {
      this.active = 0;
      onload();
    },
  },
  methods: {
    onLoad() {
      this.loading = false;
      // getSearch(
      //   this.res,
      //   this.tags[this.active].type,
      //   10,
      //   this.count * 30
      // ).then((res) => {
      //   console.log(res);
      //   this.list[Number(this.active)].push.apply(
      //     this.list[Number(this.active)],
      //     res.result.songs
      //   );
      //   this.loading = false;
      //   this.count++;
      //   if (this.list[this.active].length >= res.result.songCount) {
      //     this.finished = true;
      //   }
      //   console.log(this.list);
      // });
    },
    changeTags(name, title) {
      console.log(name, title);
    },
  },
};
</script>

<style scoped>
</style>