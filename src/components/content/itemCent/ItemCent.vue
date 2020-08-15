<template>
  <div class="item-cent">
    <div>
      <van-image class="img-page" width="65" height="65" :src="imgUrl" fit="cover"/>
    </div>
    <div class="text">
      <p class="title">{{ title }}</p>
      <p class="describe">{{ describe }}</p>
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
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 65px;
  box-sizing: content-box;
  overflow: hidden;
  padding-top: 10px;
}

.img-page {
  overflow: hidden;
  border-radius: 5px;
}

.text {
  flex: 1;
  padding-left: 10px;
  line-height: 28px;
}

.text > p {
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

p.title {
  font-size: 19px;
  font-weight: 600;
}

p.describe {
  font-size: 14px;
  color: #6f6f6f;
}
</style>