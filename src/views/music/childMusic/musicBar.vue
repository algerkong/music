<template>

  <div class="top-bar">
    <van-nav-bar
        class="music-bar"
        left-arrow
        @click-right="onClickRight"
    >
      <template #left>
        <van-icon
            name="arrow-down"
            @click="onClickLeft"
            color="#333"
            size="25px"
        />
      </template>

      <template #title>
        {{ musicName }}
      </template>

      <template #right>
        <van-icon
            name="share"
            @click="onClickRight"
            color="#333"
            size="25px"
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
  name: "musicBar",
  props: {
    musicName: {
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
      this.$store.state.isMusicPop = false
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
.top-bar{
  position: fixed;
  width: 100vw;
  height: 60px;
  z-index: 999;
  background-color: #ffffff;
}
.music-bar {
  height: 60px;
  background-color: #00000000;
}

.music-bar::after {
  border: none;
}
</style>