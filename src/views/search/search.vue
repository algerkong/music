<template>
  <div class="search-page">
    <form action="/" class="page" v-if="$store.state.isSearchPop">
      <van-search
          v-model="value"
          show-action
          :placeholder="placeholder"
          @search="onSearch"
          @cancel="onCancel"
          shape="round"
      >
        <template #left>
          <van-icon class="icon" name="arrow-left" @click="clickBack"/>
        </template>
      </van-search>

    </form>
    <van-popup
        class="search-pop"
        duration="0.1"
        v-model="$store.state.isSearchPop"
        position="right"
        :style="{ height: '100%', width:'100%' }"
    >
      <div class="search" v-show="$store.state.isSearchPop">

        <history-search v-show="isSearch&&!isList" :history="history" @history-clear="historyClear"
                        @his-item-click="historyClick"/>
        <hot-search v-show="!isList||!value" @hot-click="hotClick"/>
        <detail-search :res="value" :key="value" v-if="isList" />
      </div>
    </van-popup>
  </div>
</template>

<script>
import {Toast} from "vant";
import SongList from "components/content/songLIst/SongList";
import {getSearch, getDetailSearch} from "network/search";
import {getSongDetail} from "../../network/song";
import HotSearch from "./childSearch/hotSearch";
import DetailSearch from "./childSearch/detailSearch";
import HistorySearch from "./childSearch/historySearch";

export default {
  name: "search",
  components: {HistorySearch, DetailSearch, HotSearch, SongList},
  data() {
    return {
      value: '',
      songs: null,
      val: '',
      isList: false,
      placeholder: '请输入关键词',
      history: [],
      isSearch: false
    };
  },
  created() {
    getDetailSearch().then(res => {
      this.placeholder = res.data.showKeyword
    })
  },
  methods: {
    clickBack() {
      if (!this.value) {
        // this.$store.state.isBar = true
        this.$store.state.isSearchPop = false
        this.value = ''
        this.isList = false
        this.$router.back()
      } else {
        this.value = ''
        this.isList = false
      }
    },
    onSearch(val) {
      this.addHistory(val)
      this.isList = true
      this.isSearch = true
    },
    addHistory(val) {

      let hisVal = val.replace(/^\s+|\s+$/g, '')
      if (this.history.indexOf(hisVal) === -1) {
        this.history.push(hisVal)
      } else {
        for (let i = 0; i < this.history.length; i++) {
          if (this.history[i] === hisVal) {
            this.history.splice(i, 1);
            break
          }
        }
        this.history.push(hisVal)
      }
      this.isList = true
    },
    onCancel() {
      this.isList = false
    },
    hotClick(item) {
      this.value = item
      this.onSearch(item)
    },
    historyClick(item) {
      this.value = item
      this.onSearch(item)
    },
    historyClear() {
      this.isSearch = false
      this.history = []
    }

  }
}
</script>

<style scoped>
.search-page{
  position: relative;
  z-index: 888;
}
.search {
  padding: 53px 0;
}

.icon{
  font-size: 23px;
}

.page {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
}

.search-pop{
  z-index: 777;
}

.van-search__content {
  background-color: #f3f3f3;
}
</style>