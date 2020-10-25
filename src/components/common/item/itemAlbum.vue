<template>
  <div class="item-page">
    <div class="img-page">
      <van-image :src="albumItem.picUrl+'?param=200y200'"  class="img"/>
    </div>
    <div class="content">
      <div class="title">
        <p class="van-ellipsis">{{albumItem.name}}</p>
      </div>
      <div class="ar van-ellipsis" >
        {{albumItem.artist.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "itemAlbum",
  props:{
    albumItem:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.item-page{
  display: flex;
}

.img-page{
  display: inline-block;

}

.img{
  overflow: hidden;
  border-radius: 5px;
  width: 50px;
  height: 50px;
}

.content{
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