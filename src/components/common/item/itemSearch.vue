<template>
  <div class="item-page">
    <div class="click-item" @click="itemClick">
      <div class="img-page">
        <!--        <van-image width="55" height="55" :src="songDetail.songImg"/>-->
        <img v-lazy="songDetail.songImg +'?param=200y200'" alt="" class="img">
      </div>
      <div class="song-detail">
        <div class="song-name">
          <p class="van-ellipsis">{{ songDetail.name }} <span v-if="songDetail.alia[0]" class="span-alia">({{ songDetail.alia[0] }})</span>
          </p>
        </div>
        <div class="song-author van-ellipsis">
          {{ songDetail.arName }}
        </div>
      </div>
    </div>
    <div class="song-mv">
      <van-icon name="play-circle-o" size="25" color="#6f6f6f" v-if="songDetail.mvID" @click="showMv(songDetail.mvID)"/>
    </div>
    <div class="song-set">
      <van-icon class="set-icon" name="ellipsis" size="20" color="#6f6f6f"/>
    </div>
  </div>
</template>

<script>
import {getSongDetail, getSongUrl, getIsSong} from "network/song";
import {Toast} from "vant";


export default {
  name: "itemSearch",
  props: {
    song: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      songDetail: {
        name: this.song.al.name,
        songID: this.song.id,
        arName: this.song.ar[0].name,
        arID: this.song.ar[0].id,
        alia: this.song.alia,
        songImg: this.song.al.picUrl,
        mvID: ''

      }
    }
  },
  created() {
    getSongDetail(this.songDetail.songID).then(res => {
      this.songDetail.name = res.songs[0].name
      this.songDetail.mvID = res.songs[0].mv
    })
  },
  methods: {
    itemClick() {
      let state = this.$store.state
      getSongUrl(this.songDetail.songID).then(res => {
        console.log(res)
        if (res.data[0].url != null) {
          state.isMusic = true
          state.musicSrc = {
            count: state.allMusic.length,
            id: this.songDetail.songID,
            src: res.data[0].url,
            img: this.songDetail.songImg,
            name: this.songDetail.name,
            arName: this.songDetail.arName,
            arID: this.songDetail.arID,
            isPlay: true
          }
          state.arID = this.songDetail.arID;
          console.log(this.songDetail.arName)
          state.allMusic.pushNoRepeat(state.musicSrc)
          console.log(state.allMusic)
        } else {
          Toast('暂无版权');
        }

      })
    },

    showMv(id) {
      this.$router.push({
        name: 'mv',
        params: {
          id: id
        }
      })
    }

  },

}
</script>

<style scoped>

img {
  display: block;
}

.item-page {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.img-page {
  display: inline-block;
}

.img {
  border-radius: 5px;
  overflow: hidden;
  width: 55px;
  height: 55px;
}


.song-detail {
  padding: 0 10px;
  flex: 4;
  overflow: hidden;
}

.song-name > p {
}

.span-alia {
  color: #6f6f6f;
}

.song-name {
  font-size: 16px;
}


.song-mv {
  flex: 1;
  display: flex;
  justify-content: center;
}

.song-set {
  width: 20px;
  height: 20px;
  display: inline-block;
}

.song-author {
  color: #6f6f6f;
  font-size: 14px;
}

.set-icon {
  transform: rotate(90deg);
}

.click-item {
  display: flex;
  align-items: center;
  flex: 4;
  overflow: hidden;
}
</style>