<template>
  <div id="app">
    <search-bar @my-click="myClick" />
    <!--    <tab-bar v-if="$store.state.isBar"></tab-bar>-->
<!--    <keep-alive>-->
<!--      <router-view v-if="$route.meta.keepAlive" />-->
<!--    </keep-alive>-->
<!--    <router-view v-if="!$route.meta.keepAlive" />-->
    <keep-alive>
      <router-view/>
    </keep-alive>
    <music-bottom-bar v-if="$store.state.isMusic"></music-bottom-bar>

    <div class="start-page" v-show="isStart" ></div>
  </div>
</template>

<script>
import TabBar from "components/common/TabBar/tabBar";
import MusicBottomBar from "./components/common/TabBar/musicBottomBar";
import SearchBar from "./components/common/SearchBar/searchBar";
import Music from "./views/music/music";

import { getLoginState } from "./network/my";

export default {
  name: "App",
  components: { Music, SearchBar, MusicBottomBar, TabBar },
  data() {
    return {
      active: 0,
      isStart: true,
      img: "./assets/img/start.png",
    };
  },
  created() {
    this.getID();
    setTimeout(() => {
      this.isStart = false;
    }, 4000);
  },
  methods: {
    myClick() {
      // this.$store.state.isBar = false
      // this.$store.state.isMusic = false
      this.getID();
      if (this.$store.state.isLogin) {
        this.$router.push("/my");
      } else {
        this.$router.push("/login");
      }
    },
    getID() {
      getLoginState().then((res) => {
        console.log(res);
        this.$store.state.userID = 0;
        if (res.code === 200) {
          console.log(res);
          this.$store.state.isLogin = true;
          this.$store.state.myID = res.profile.userId;
        } else {
          this.$store.state.isLogin = false;
        }
      });
    },
  },
};
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
  background-image: url("./assets/img/start.png");
  background-size: 100%;
  background-position: center;
  animation: start 4s cubic-bezier(0.31, 0.93, 0.49, 0.96);
  opacity: 0;
}

@keyframes start {
  0% {
    opacity: 1;
  }
  80% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>
