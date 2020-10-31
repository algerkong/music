<template>
  <div>
    <van-form ref="con">
      <van-sticky :container="conn">
        <div class="history-title">
          <p>播放列表</p>
        </div>
      </van-sticky>
      <div v-for="(item, index) in $store.state.allMusic" :key="index">
        <history-item :music="item" />
      </div>
    </van-form>
  </div>
</template>

<script>
import HistoryItem from "./history-item";

export default {
  name: "musicHistory",
  components: { HistoryItem },
  data() {
    return {
      conn: null,
    };
  },
  mounted() {
    this.conn = this.$refs.con;
  },
};
</script>

<style scoped>
.history-title {
  text-align: center;
  font-size: 18px;
  padding: 15px;
}
</style>