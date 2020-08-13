<template>
  <div class="tab-page">
    <van-tabs v-model="active" animated swipeable sticky @click="tabClick" title-active-color="#ee0a24"
              title-inactive-color="#333">
      <van-tab v-for="(item,index) in tabBarList" :title="item.title">
        <slot></slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Home from "views/home/home";
import My from "views/my/my";

export default {
  name: "singerBar",
  components: {Home, My},
  data() {
    return {
      active: 0,
      tabBarList: [
        {
          name: "home",
          title: "首页",
        },
        {
          name: "songs",
          title: "单曲",
        },
        {
          name: "album",
          title: "专辑",
        },
        {
          name: "video",
          title: "视频",
        }
      ]
    }
  },

  methods: {
    tabClick(count) {

    }
  }

}
</script>

<style scoped>
.van-tab--active {
  font-weight: 600;
}

.tab-page {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>