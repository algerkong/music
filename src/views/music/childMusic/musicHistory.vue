<template>
  <div>
    <div class="history-title">
      <p>最近播放</p>
    </div>
    <van-form>
      <history-item v-for="item in $store.state.allMusic" :music="item"/>
    </van-form>
  </div>
</template>

<script>
import HistoryItem from "./history-item";
export default {
  name: "musicHistory",
  components: {HistoryItem}
}
</script>

<style scoped>
.history-title {
  text-align: center;
  font-size: 20px;
  padding: 15px;
}
</style>