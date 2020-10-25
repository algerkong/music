<template>
  <div class="item-page">
    <div class="img-page">
      <van-image class="img" :src="videoItem.coverUrl+'?param=192y108'" />
    </div>
    <div class="content">
      <div class="title"><p class="van-ellipsis">{{ videoItem.title }}</p></div>
      <div class="ar van-ellipsis">{{ videoItem.creator.userName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemVideo",
  props: {
    videoItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.item-page {
  display: flex;

}

.img-page {
  display: block;
}

.img {
  width: 88px;
  height: 50px;
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

.content > .ar{
  font-size: 14px;
  color: #6f6f6f;
}
</style>