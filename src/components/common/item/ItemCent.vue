<template>
  <div class="item-cent">
    <div>
      <van-image class="img-page" :src="imgUrl+'?param=200y200'" fit="cover"/>
    </div>
    <div class="text">
      <p class="title van-ellipsis">{{ title }}</p>
      <p class="describe van-ellipsis">{{ describe }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCent",
  props: {
    imgUrl: {
      type: String,
      default: 'https://img.yzcdn.cn/vant/cat.jpeg'
    },
    title: {
      type: String,
      default: '标题'
    },
    describe: {
      type: String,
      default: '这里是描四大fff反反复复反反复复反反复复反反复复述'
    }
  }
}
</script>

<style scoped>
.item-cent {
  display: flex;
  justify-content: end;
  align-items: center;
  padding-top: 10px;
}

.img-page {
  overflow: hidden;
  border-radius: 5px;
  width: 55px;
  height: 55px;
}

.text {
  flex: 1;
  padding-left: 10px;
  line-height: 28px;
}

.text > p {
}

p.title {
  font-size: 18px;
  font-weight: 600;
}

p.describe {
  font-size: 14px;
  color: #6f6f6f;
}
</style>