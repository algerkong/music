<template>
  <div id="app">
    <search-bar v-if="$store.state.isBar" @my-click="myClick"/>
    <tab-bar v-if="$store.state.isBar"></tab-bar>
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

export default {
  name: 'App',
  components: {Music, SearchBar, MusicBottomBar, TabBar},
  data() {
    return {
      active: 0,
      isBar: this.$store.state.isBar
    }
  },
  methods: {
    myClick() {
      this.$store.state.isBar = false
      this.$store.state.isMusic = false
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
