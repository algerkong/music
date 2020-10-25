<template>
  <div>
    <div class="history-title">
      <p>最近播放</p>
    </div>
    <van-form>
      <div v-for="(item,index) in $store.state.allMusic" :key="index">
        <history-item :music="item"/>
      </div>
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
  font-size: 18px;
  padding: 15px;
}
</style>