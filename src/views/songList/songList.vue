<template>
  <div class="list">
    <van-popup
        class="music-page"
        v-model="$store.state.isShow"
        duration="0.2"
        position="bottom"
        :style="{ height: '100%' }"
    >
      <div>
        <top-bar class="top-bar" title="歌单" :style="topStyle"/>
      </div>
      <div class="img-page">
        <van-image :src="img"/>
      </div>
      <van-form>
        <van-cell v-for="(item,index) in song" :key="item.al.name">
          <div class="hot-item" @click="itemClick(item.al.id)">
            <div class="item-count"><span>{{ index + 1 }}</span></div>
            <div class="item-data">
              <div class="word">
                <p>
                  <span>{{ item.name }}</span>
                  <span v-if="item.alia.length === 1" class="gray">
                ({{ item.alia[0] }})
              </span>
                </p>
              </div>
              <div class="content">
                <p>
                <span v-for="(item2, index2) in item.ar">
                  {{ item2.name }}
                  <i v-if="item.ar.length!==index2+1">/</i>
                </span>
                  <span> - {{ item.al.name }}</span>
                </p>
              </div>
            </div>
            <div class="item-score">
              <van-icon name="play-circle-o" size="25" color="#6f6f6f" v-if="item.mv" @click="showMV(item.mv)"/>
            </div>
          </div>
        </van-cell>
        <div class="content50"></div>
      </van-form>
    </van-popup>

  </div>
</template>

<script>
import {getSongList} from "network/song";
import TopBar from "../../components/common/TabBar/topBar";

export default {
  name: "songList",
  components: {TopBar},
  data() {
    return {
      id: '',
      img: '',
      title: '',
      song: [],
      topStyle: '',
    }
  },
  created() {
    this.id = this.$route.params.id
    getSongList(this.id).then(res => {
      this.img = res.playlist.coverImgUrl
      this.title = res
      this.song = res.playlist.tracks
      console.log(res)
      this.topStyle = 'background-image:url(' + res.playlist.coverImgUrl + ');' +
          'background-size:100%;' +
          'background-position:top;' +
          'filter: brightness(80%);'
    })
  },
  methods: {
    itemClick(item) {
      console.log(item)
    },
    showMV(id) {
      this.$router.push({
        name: 'mv',
        params: {
          id: id
        }
      })
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

.list {
  position: relative;
  top: 0;
  left: 0;
  z-index: 500;
}

.img-page {
  filter: brightness(80%)
}

.content50{
  height: 50px;
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

.item-data > .word > p, .item-data > .content > p {
  overflow: hidden;
  text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.gray {
  color: #b3b3b3;
}

.item-score {
  color: #b3b3b3;
}

.van-cell {
  padding: 10px 0 0 !important;

}
</style>