<template>
  <div id="app">
    <search-bar @my-click="myClick"/>
    <!--    <tab-bar v-if="$store.state.isBar"></tab-bar>-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <music-bottom-bar v-if="$store.state.isMusic"></music-bottom-bar>

    <div class="start-page" v-if="isStart"></div>
  </div>
</template>

<script>

import TabBar from "components/common/TabBar/tabBar";
import MusicBottomBar from "./components/common/TabBar/musicBottomBar";
import SearchBar from "./components/common/SearchBar/searchBar";
import Music from "./views/music/music";

import {getLoginState} from "./network/my";

export default {
  name: 'App',
  components: {Music, SearchBar, MusicBottomBar, TabBar},
  data() {
    return {
      active: 0,
      isStart:true
    }
  },
  created() {
    setTimeout(() => {
      getLoginState().then(res => {
        console.log(res)
        if (res.code === 200) {
          console.log(res)
          this.$store.state.isLogin = true
          this.$store.state.myID = res.profile.userId
        } else {
          this.$store.state.isLogin = false
        }
      })
    }, 1000)
    setTimeout(()=>{
      this.isStart = false
    },4000)
  },
  methods: {
    myClick() {
      // this.$store.state.isBar = false
      // this.$store.state.isMusic = false
      if (this.$store.state.isLogin) {
        this.$router.push('/my')
      } else {
        this.$router.push('/login')
      }
    }
  }

}
</script>

<style>
@import "assets/css/base.css";

.start-page {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-image: url("https://p.pstatp.com/origin/1385300001951ba6a91a2");
  background-size: 100%;
  background-position: center;
  animation: start 4s cubic-bezier(.31,.93,.49,.96);
  opacity: 0;
}

@keyframes start {
  0%{
    opacity: 1;
  }
  80%{
    opacity: 1;
    transform: scale(1);
  }
  100%{
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>
