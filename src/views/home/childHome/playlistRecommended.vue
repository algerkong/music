<template>
  <div @click="itemClick">
    <div class="img-page">
      <van-image class="img" :src="img+'?param=300y300'"/>
    </div>
    <div class="title">
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
import {Toast} from "vant";

export default {
  name: "playlistRecommended",
  data() {
    return {
      title: '',
      ID: '',
      img: '',
      playCount: ''
    }
  },
  props: {
    list: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  created() {
    const data = this.list
    this.title = data.uiElement.mainTitle.title
    this.ID = data.creativeId
    this.img = data.uiElement.image.imageUrl
    this.playCount = data.resources[0].resourceExtInfo.playCount
  },
  methods:{
    itemClick(){
      this.$store.state.listID = this.ID
      this.$router.push('/songList')
    }
  }
}
</script>

<style scoped>
.img-page > .img{
  border-radius: 5px;
  overflow: hidden;
}
.title{
  overflow: hidden;
  padding: 5px 0;
  height: 35px;
}
.title > p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
}
</style>