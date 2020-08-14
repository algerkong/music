<template>
  <div class="tab-page">
    <van-tabs v-model="active" animated swipeable sticky @click="tabClick" title-active-color="#ee0a24"
              title-inactive-color="#333">

      <van-tab :title="tabBarList[0].title">
        <slot name="home"></slot>
      </van-tab>
      <van-tab :title="tabBarList[1].title">
        <slot name="my"></slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Home from "views/home/home";
import My from "views/my/my";

export default {
  name: "myBar",
  components: {Home, My},
  data() {
    return {
      active: 0,
      tabBarList: [
        {
          name: "home",
          title: "主页",
        },
        {
          name: "songs",
          title: "动态",
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