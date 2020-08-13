<template>
  <div class="history-page">
    <div class="history-title">
      <div>历史记录</div>
      <div @click="historyClear">
        <van-icon name="delete" size="20px"/>
      </div>
    </div>
    <div>
      <span v-for="item in his" :key="item" class="history-item" @click="historyClick(item)">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "historySearch",
  data() {
    return {
      his: this.history.reverse()
    }
  },
  props: {
    history: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    historyClick(item) {
      this.$emit('his-item-click', item)
    },
    historyClear() {
      this.his = []
      this.$emit('history-clear')
    }
  }
}
</script>

<style scoped>
.history-page {
  padding: 5px 16px 20px;
}

.history-title {
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

span.history-item {
  padding: 2px 10px;
  background-color: #f3f3f3;
  margin-right: 10px;
  border-radius: 10px;
  font-size: 16px;
  display: inline-block;
  margin-top: 10px;
}
</style>