<template>
  <div class="home">
    <!--    轮播图-->
    <div class="banner-page" v-if="banners">
      <div class="banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="rgb(238, 10, 36)">
          <van-swipe-item v-for="item in banners">
            <vue-lazy-component tagName="div">
              <van-image :src="item.pic"/>
            </vue-lazy-component>

          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <!--歌单推荐-->
    <div v-if="homePlaylist">
      <div class="list-top">
        <div class="play-list-title">
          {{ playlistTitle }}
        </div>
        <div class="btn-more">
          查看更多
        </div>
      </div>
      <van-grid :column-num="3" class="play-list">
        <van-grid-item v-for="(item,index) in homePlaylist" :key="index">
          <playlist-recommended :list="item"/>
        </van-grid-item>
      </van-grid>
    </div>

    <!--歌曲推荐-->
    <div v-if="homeSongsList">
      <div class="list-top">
        <div class="play-list-title">
          {{ songsListTitle }}
        </div>
        <div class="btn-more">
          查看更多
        </div>
      </div>
      <song-recommended :list="homeSongsList"/>
    </div>

    <!--    时间歌单推荐-->
    <div v-if="scenarioList">
      <div class="list-top">
        <div class="play-list-title">
          {{ scenarioTitle }}
        </div>
        <div class="btn-more">
          查看更多
        </div>
      </div>
      <van-grid :column-num="3" class="play-list">
        <van-grid-item v-for="(item,index) in scenarioList" :key="index">
          <playlist-recommended :list="item"/>
        </van-grid-item>
      </van-grid>
    </div>

    <!--    新歌推荐-->
    <div v-if="newSongList">
      <div class="list-top">
        <div class="play-list-title">
          {{ newSongTitle }}新歌
        </div>
        <div class="btn-more">
          查看更多
        </div>
      </div>
      <song-recommended :list="newSongList"/>
    </div>

    <!--    大家都在听-->
    <div v-if="everyonePlayList">
      <div class="list-top">
        <div class="play-list-title">
          {{ everyonePlayTitle }}
        </div>
        <div class="btn-more">
          查看更多
        </div>
      </div>
      <song-recommended :list="everyonePlayList"/>
    </div>
  </div>
</template>

<script>
import {getHomeData, getBanner} from "network/home";
import {getSongDetail} from "network/song";
import SongList from "../../components/content/songLIst/SongList";
import MusicPlay from "../../components/common/Music/musicPlay";
import MusicBottomBar from "../../components/common/TabBar/musicBottomBar";
import MusicComments from "../music/kidPage/musicComments/musicComments";
import PlaylistRecommended from "./childHome/playlistRecommended";
import SongRecommended from "./childHome/songRecommended";

export default {
  name: "home",
  components: {SongRecommended, PlaylistRecommended, MusicComments, MusicBottomBar, MusicPlay, SongList},
  data() {
    return {
      newSongs: [],
      musicSrc: '',
      banners: [],
      playlistTitle: '',
      homePlaylist: [],
      songsListTitle: '',
      homeSongsList: [],
      scenarioTitle: '',
      scenarioList: [],
      newSongTitle: '',
      newSongList: [],
      everyonePlayTitle: '',
      everyonePlayList: []
    }
  },
  created() {
    // getHomeData().then(res => {
    //   console.log(res)
    //   this.newSongs = res.result.songs
    //
    // })
    getSongDetail(347230).then(res => {
      console.log(res)
    })

    getBanner().then(res => {
      this.banners = res.banners
    })

    getHomeData().then(res => {
      //推荐歌单
      this.homePlaylist = res.data.blocks[0].creatives
      this.playlistTitle = res.data.blocks[0].uiElement.subTitle.title
      //推荐多栏音乐
      this.homeSongsList = res.data.blocks[1].creatives
      this.songsListTitle = res.data.blocks[1].uiElement.subTitle.title
      //根据时间类型推荐歌单
      this.scenarioList = res.data.blocks[2].creatives
      this.scenarioTitle = res.data.blocks[2].uiElement.subTitle.title
      //新歌推荐多栏音乐
      this.newSongList = res.data.blocks[5].creatives
      this.newSongTitle = res.data.blocks[5].uiElement.mainTitle.title
      //大家都在听
      this.everyonePlayList = res.data.blocks[6].creatives
      this.everyonePlayTitle = res.data.blocks[6].uiElement.subTitle.title
      console.log(this.homeSongsList)
    })
  },
  methods: {}
}
</script>

<style scoped>
.home {
  padding-bottom: 50px;
}

.banner-page {
  padding: 16px 16px 0;
}

.banner {
  border-radius: 10px;
  overflow: hidden;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}

.play-list-title {
  font-size: 18px;
  font-weight: 600;
}

.play-list {
  padding: 0 11px 10px;
}

.btn-more {
  display: inline-block;
  border-radius: 20px;
  border: 1px solid #d4d4d4;
  padding: 2px 5px;
  font-size: 14px;
}

.list-top {
  display: flex;
  padding: 16px 16px 0;
  justify-content: space-between;
  align-items: center;
}


</style>