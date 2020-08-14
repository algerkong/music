<template>
  <div class="singer-page">
    <van-popup
        class="mv-page"
        v-model="$store.state.isSinger"
        duration="0.2"
        position="bottom"
        :style="{ height: '100%' }"
    >
      <top-bar :title="name"/>
      <van-image
          fit="contain"
          :src="imgUrl"
          class="img-color"
      />
      <singer-bar/>
      <van-form class="top-content">
        <div>{{ briefDesc }}</div>
      </van-form>
      <van-sticky :offset-top="200">
        <van-button type="info">吸顶距离</van-button>
      </van-sticky>
    </van-popup>
  </div>
</template>

<script>
import TopBar from "components/common/TabBar/topBar";
import {getSinger} from "network/singer";
import SingerBar from "./childSinger/singerBar";

export default {
  name: "singer",
  components: {SingerBar, TopBar},
  data() {
    return {
      name: '',
      briefDesc: '',
      imgUrl: ''
    }
  },
  created() {
    getSinger(this.$store.state.arID).then(res => {
      this.name = res.artist.name
      this.briefDesc = res.artist.briefDesc
      this.imgUrl = res.artist.picUrl
      console.log(res)
    })
  }
}
</script>

<style scoped>
.top-content {
  padding-top: 100px;
}

.img-color {
  filter: brightness(0.8)
}
</style>