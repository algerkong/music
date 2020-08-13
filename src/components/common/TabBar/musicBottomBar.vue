<template>
  <div class="bottom-page">
    <van-tabbar v-model="active">
      <van-tabbar-item>
        <music-play/>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import MusicPlay from "../Music/musicPlay";

export default {
  name: "musicBottomBar",
  components: {MusicPlay},
  data() {
    return {
      active: 0,
    };
  }
}
</script>

<style scoped>
.van-tabbar--fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  border-top: 1px solid #eee;
}

</style>