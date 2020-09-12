<template>
  <div class="listen">
    <van-popup
        class="music-page"
        v-model="show"
        duration="0.2"
        position="bottom"
        :style="{ height: '100%' }"
    >
      <div>
        <top-bar class="top-bar" title="听歌排行" style="background-color: #d22d2d"/>
      </div>
      <div class="week"></div>
      <listen-bar>
        <template slot="week">
          <van-cell v-for="(item,index) in week" :key="item.song.name">
            <div class="hot-item" @click="itemClick(item)">
              <div class="item-count"><span>{{ index + 1 }}</span></div>
              <div class="item-data">
                <div class="word"><span>{{ item.song.name }}</span><span></span></div>
                <div class="content"><span>{{ item.song.ar[0].name }} -- {{ item.song.alia[0] }}</span></div>
              </div>
              <div class="item-score">
                {{ item.playCount.toString() }}
              </div>
            </div>
          </van-cell>
          <div class="content50"></div>
        </template>
        <template slot="all">
          <van-cell v-for="(item,index) in all" :key="item.song.name">
            <div class="hot-item" @click="itemClick(item)">
              <div class="item-count"><span>{{ index + 1 }}</span></div>
              <div class="item-data">
                <div class="word"><span>{{ item.song.name }}</span><span></span></div>
                <div class="content"><span>{{ item.song.ar[0].name }} -- {{ item.song.alia[0] }}</span></div>
              </div>
              <div class="item-score">
                {{ item.playCount.toString() }}
              </div>
            </div>
          </van-cell>
          <div class="content50"></div>
        </template>
      </listen-bar>
    </van-popup>
  </div>
</template>

<script>
import TopBar from "../../../components/common/TabBar/topBar";
import ListenBar from "./ListenBar";
import {getSongUrl} from "network/song";

import {getHistoryCount} from "network/my";
import {Toast} from "vant";

export default {
  name: "ListenSongRanking",
  components: {ListenBar, TopBar},
  data() {
    return {
      week: [],
      all: [],
      show:true
    }
  },
  created() {
    const id = this.$route.params.id
    getHistoryCount(id, 1).then(res => {
      this.week = res.weekData
      console.log(res)
    })
    getHistoryCount(id, 0).then(res => {
      this.all = res.allData
      console.log(res)
    })
  },
  methods: {
    itemClick(item) {
      let state = this.$store.state
      getSongUrl(item.song.id).then(res => {
        console.log(res)
        if (res.data[0].url != null) {
          state.isMusic = true
          state.musicSrc = {
            id: item.song.id,
            src: res.data[0].url,
            img: item.song.al.picUrl,
            name: item.song.name,
            arName: item.song.ar[0].name,
            arID: item.song.ar[0].id,
            isPlay: true
          }
          state.arID = item.song.ar[0].id;
          state.allMusic.pushNoRepeat(state.musicSrc)
          console.log(state.allMusic)
        } else {
          Toast('暂无版权');
        }

      })
    }
  }
}
</script>

<style scoped>
.listen{
  position: relative;
  top: 0;
  left: 0;
  z-index: 500;
}

.content50{
  width: 100%;
  height: 60px;
}
.week {
  padding-top: 70px;
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
  flex: 0.5;
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

.van-cell {
  padding: 10px 0 0 !important;

}
</style>