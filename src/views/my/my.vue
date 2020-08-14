<template>
  <div>
    <van-popup
        class="music-page"
        v-model="$store.state.isShow"
        duration="0.2"
        position="bottom"
        :style="{ height: '100%' }"
    >
      <van-nav-bar
          title="我的"
          left-text=""
          right-text="分享"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
      />
      <van-share-sheet
          v-model="showShare"
          title="立即分享给好友"
          :options="options"
          @select="onSelect"
      />

      <div class="user-page">
        <van-image width="100%" height="" :src="userDetail.backUrl"/>
        <div class="user-detail">
          <div class="user-img">
            <van-image width="90px" :src="userDetail.avatarUrl"/>
          </div>
          <div class="user-name"><p>{{ userDetail.name }}</p></div>
          <div class="user-fans">
            关注 <span>{{ userDetail.follows }}</span>
            粉丝 <span>{{ userDetail.followeds }}</span>
          </div>
        </div>

      </div>
      <my-bar>
        <template v-slot:home>
           <div>
             <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
           </div>
          <div>
            <p>听歌排行</p>
            <p></p>
          </div>
        </template>
        <template v-slot:my>

        </template>
      </my-bar>
    </van-popup>

  </div>
</template>

<script>
import {Toast} from 'vant';
import {getUserDetail} from "network/my";
import MyBar from "./childMy/myBar";

export default {
  name: "my",
  components: {MyBar},
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
      userDetail: {
        name: '',           //昵称
        backUrl: '',        //背景
        avatarUrl: '',      //头像
        signature: '',      //签名
        followeds: 0,       //粉丝
        follows: 0           //关注
      }
    };
  },
  created() {
    getUserDetail(this.$store.state.myID).then(res => {
      console.log(res)
      this.userDetail.backUrl = res.profile.backgroundUrl
      this.userDetail.name = res.profile.nickname
      this.userDetail.avatarUrl = res.profile.avatarUrl
      this.userDetail.signature = res.profile.signature
      this.userDetail.followeds = res.profile.followeds
      this.userDetail.follows = res.profile.follows

    })
  },
  methods: {
    onClickLeft() {
      this.$store.state.isBar = true
      this.$store.state.isMusic = true
      this.$router.back()
      Toast('返回')
    },
    onClickRight() {
      this.showShare = true
      Toast('按钮')
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false
    },
  },
}
</script>

<style scoped>
.user-page {
  width: 100vw;
}

.van-nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  background-color: #00000000;
}

.van-hairline--bottom::after {
  border: none;
}

.user-detail {
  position: absolute;
  top: 30vw;
  left: 0;
  padding: 10px 16px;
}

.van-image {
  vertical-align: bottom;
}

.user-img {
  display: inline-block;
  overflow: hidden;
  border-radius: 50%;
}

.user-name {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
}

.user-fans {
  color: #ffffff;
  opacity: 0.8;
}
</style>