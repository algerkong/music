<template>
  <div>
    <div class="hot-title">热搜榜</div>
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
      <van-cell v-for="(item,index) in list" :key="item.searchWord">
        <div class="hot-item" @click="hotClick(item.searchWord)">
          <div class="item-count" :class="{'item-count-red':isHot(index)}"><span>{{ index + 1 }}</span></div>
          <div class="item-data">
            <div class="word"><span>{{ item.searchWord }}</span></div>
            <div class="content"><span>{{ item.content }}</span></div>
          </div>
          <div class="item-score">
            {{ item.score }}
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import {getHotSearch} from "network/search";

export default {
  name: "hotSearch",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    onLoad() {
      getHotSearch().then(res => {
        this.list = res.data
        this.loading = false;
        if (this.list.length >= res.data.length) {
          this.finished = true;
        }
      })
    },
    isHot(index) {
      return index < 3;
    },
    hotClick(item){
      this.$emit('hot-click',item)
    }
  },
}
</script>

<style scoped>
.hot-title {
  font-size: 16px;
  padding: 5px 16px;
}

.hot-item {
  display: flex;
  justify-content: space-between;
}

.item-count {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  color: #b3b3b3;
  padding-right: 16px;
}

.item-data {
  flex: 4;
}

.item-score {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-data > .word {
  font-size: 16px;
  font-weight: 600;
}


.item-data > .content {
  color: #b3b3b3;
  font-size: 12px;
}

.item-score {
  color: #b3b3b3;
}

.item-count-red {
  color: rgb(238, 10, 36);
}
</style>