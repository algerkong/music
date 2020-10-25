<template>
  <div class="list">
    <van-popup
        v-model="show"
        duration="0.3"
        position="bottom"
        :style="{ height: '100%' }"
    >
      <div>
        <top-bar class="top-bar" title="歌单" :style="topStyle"/>
      </div>
      <div class="img-page">
        <img v-lazy="img" width="100%" alt=""/>
      </div>
      <div class="describe">
        <div class="img-box">
          <span class="play-count"><van-icon name="play-circle-o"/>{{ playCount }}</span>
          <img class="img" v-lazy="img" alt="">
        </div>
        <div>
          <h2>{{ title }}</h2>
          <div class="author" @click="arShow">
            <img v-lazy="arImg" alt="">
            <span>{{ arName }}</span>
          </div>
        </div>
      </div>
      <div class="song-list">
        <van-form class="list-page">
          <van-cell v-for="(item,index) in song" :key="item.al.name">
            <div class="hot-item" @click="itemClick(item,index)">
              <div class="item-count"><span>{{ index + 1 }}</span></div>
              <div class="item-data">
                <div class="word">
                  <p>
                    <span>{{ item.al.name }}</span>
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
                    <span> - {{ item.name }}</span>
                  </p>
                </div>
              </div>
              <div class="item-score">
                <van-icon name="play-circle-o" color="#6f6f6f" v-if="item.mv" @click="showMV(item.mv)"/>
              </div>
            </div>
          </van-cell>
          <div class="content50"></div>
        </van-form>
      </div>
    </van-popup>
  </div>
</template>

<script>
import {getSongList} from "network/song";
import TopBar from "../../components/common/TabBar/topBar";
import {getSongUrl} from "../../network/song";
import {Toast} from "vant";

export default {
  name: "songList",
  components: {TopBar},
  data() {
    return {
      show: true,
      id: '',
      img: '',
      song: [],
      topStyle: '',
      title: '',
      arName: '',
      arImg: '',
      arID: '',
      playCount: '',

    }
  },

  watch: {
    $route(to, from) {
      let id = 0
      id = this.$store.state.listID
      getSongList(id,this.$store.state.cookie).then(res => {
        this.img = res.playlist.coverImgUrl
        this.title = res.playlist.name
        this.arName = res.playlist.creator.nickname
        this.song = res.playlist.tracks
        this.playCount = res.playlist.playCount
        this.arImg = res.playlist.creator.avatarUrl
        this.arID = res.playlist.creator.userId
        console.log(this.song)
      })
    }
  },

  created() {
    let id = 0
    id = this.$store.state.listID
    getSongList(id).then(res => {
      this.img = res.playlist.coverImgUrl
      this.title = res.playlist.name
      this.arName = res.playlist.creator.nickname
      this.song = res.playlist.tracks
      this.playCount = res.playlist.playCount
      this.arImg = res.playlist.creator.avatarUrl
      this.arID = res.playlist.creator.userId
      console.log(res)
      this.topStyle =
          'background-color:rgba(0, 0, 0, 0.246);' +
          'background-size:100%;' +
          'background-position:top;' +
          'backdrop-filter: brightness(80%);' +
          'backdrop-filter: blur(15px);'
    })
  },
  methods: {
    itemClick(item, index) {

      let state = this.$store.state
      state.allMusic = [];

      getSongUrl(item.id).then(res => {
        console.log(res)
        if (res.data[0].url != null) {
          state.isMusic = true
          state.musicSrc = {
            count: index,
            id: item.id,
            src: res.data[0].url,
            img: item.al.picUrl,
            name: item.al.name,
            arName: item.ar[0].name,
            arID: item.ar[0].id,
            isPlay: true
          }
          state.arID = item.ar[0].id;

          for (let i = 0; i < this.song.length; i++) {
            getSongUrl(this.song[i].id).then(res => {
              item = this.song[i];
              let musicSrc = {
                count: i,
                id: item.id,
                src: res.data[0].url,
                img: item.al.picUrl,
                name: item.al.name,
                arName: item.ar[0].name,
                arID: item.ar[0].id,
                isPlay: true
              }
              state.allMusic.pushNoRepeat(musicSrc)
            })
          }

        } else {
          Toast('暂无版权');
        }
      })

      // let state = this.$store.state
      // getSongUrl(item.id).then(res => {
      //   console.log(res)
      //   if (res.data[0].url != null) {
      //     state.isMusic = true
      //     state.musicSrc = {
      //       id: item.id,
      //       src: res.data[0].url,
      //       img: item.al.picUrl,
      //       name: item.al.name,
      //       arName: item.ar[0].name,
      //       arID: item.ar[0].id,
      //       isPlay: true
      //     }
      //     state.arID = item.ar[0].id;
      //     state.allMusic.pushNoRepeat(state.musicSrc)
      //     console.log(state.allMusic)
      //   } else {
      //     Toast('暂无版权');
      //   }
      //
      // })

    },
    showMV(id) {
      this.$router.push({
        name: 'mv',
        params: {
          id: id
        }
      })
    },

    arShow() {
      this.$store.state.userID = this.arID
      this.$router.push('/my')
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
  width: 100%;
  overflow: hidden;
  filter: brightness(90%) saturate(45%) contrast(70%);
}

.img-page img {
  background-color: #acacac;
  transform: translate(200px, 200px) scale(1000);
}

.describe {
  position: absolute;
  top: 130px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
}

.author {
  padding: 10px 0;
  font-size: 14px;
  line-height: 25px;
}

.author img {
  border-radius: 50%;
  vertical-align: bottom;
  margin-right: 5px;
  width: 25px;
}

.img-box {
  position: relative;
  margin-right: 16px;
}

.img-box:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 20px 10px 0 #00000036;
}

.img-box img {
  border-radius: 5px;
  vertical-align: bottom;
  width: 120px;
  height: 120px;
}

span.play-count {
  font-size: 15px;
  color: #fff;
  position: absolute;
  z-index: 999;
  right: 10px;
  top: 5px;
}

.describe h2 {
  font-size: 18px;
  line-height: 25px;
  font-weight: 600;
  padding-top: 10px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.describe p {

}


.content50 {
  height: 50px;
}

.song-list {
  position: relative;
  width: 100%;
}

.list-page {
  overflow: hidden;
  border-radius: 20px;
  position: absolute;
  width: 100%;
  top: -30px;
  box-sizing: border-box;
}

.hot-item {
  display: flex;
  justify-content: space-between;
  padding: 5px 16px 0;
}

.item-count {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
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
  font-size: 25px;
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