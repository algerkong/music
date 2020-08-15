<template>
  <div id="app">
    <search-bar @my-click="myClick"/>
    <!--    <tab-bar v-if="$store.state.isBar"></tab-bar>-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <music-bottom-bar v-if="$store.state.isMusic"></music-bottom-bar>
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
</style>
