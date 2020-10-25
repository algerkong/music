<template>

  <div class="top-bar">
    <van-nav-bar
        class="music-bar"
        left-arrow
        @click-right="onClickRight"
        :style="topStyle"
    >
      <template #left>
        <van-icon
            name="arrow-down"
            @click="onClickLeft"
            class="icon"
            color="#FFF"
        />
      </template>

      <template #title>
        <div class="title">
          {{ title }}
        </div>
      </template>

      <template #right>
        <van-icon
            name="share"
            @click="onClickRight"
            class="icon"
            color="#FFF"
        />
      </template>
    </van-nav-bar>
    <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
    />
  </div>

</template>

<script>
export default {
  name: "topBar",
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    },
    topStyle: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      show: true,
      showShare: false,
      options: [
        {name: '微信', icon: 'wechat'},
        {name: '微博', icon: 'weibo'},
        {name: '复制链接', icon: 'link'},
        {name: '分享海报', icon: 'poster'},
        {name: '二维码', icon: 'qrcode'},
      ],
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()

    },
    onClickRight() {
      this.showShare = true
    },
    onSelect(option) {
      this.showShare = false
    },
  }
}
</script>

<style scoped>
.top-bar {
  position: fixed;
  width: 100vw;
  height: 50px;
  z-index: 1000;
  color: #ffffff;
  background: #31313100;
  background-size: 100%;
  background-position: center;
}

.icon{
  font-size: 20px;
}

.music-bar {
  height: 50px;
  background-color: #00000000;
}

.title {
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
}

.music-bar::after {
  border: none;
}
</style>