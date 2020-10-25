<template>
  <div class="item-page" @click="toList">
    <div class="img-page">
      <van-image class="img" :src="listItem.coverImgUrl +'?param=200y200'"/>
    </div>
    <div class="content">
      <div class="title"><p class="van-ellipsis">{{ listItem.name }}</p></div>
      <div class="ar van-ellipsis">{{ listItem.creator.nickname }}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "itemPlayList",
  props: {
    listItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    toList() {
      this.$store.state.listID = this.listItem.id
      this.$router.push('/songList')
    }
  }
}
</script>

<style scoped>
.item-page {
  display: flex;
}

.img-page {
  display: inline-block;

}

.img {
  width: 55px;
  height: 55px;
  overflow: hidden;
  border-radius: 5px;
}

.content {
  padding: 0 10px;
  overflow: hidden;
}

.content > .title > p {
  font-size: 16px;
}

.content > .ar {
  font-size: 14px;
  color: #6f6f6f;
}

</style>