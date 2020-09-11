<template>
  <div class="my">
    <van-popup
        class="music-page"
        v-model="show"
        duration="0.2"
        position="bottom"
        :style="{ height: '100%' }"
    >

      <div>
        <top-bar class="top-bar" :title="topStyle?userDetail.name:''" :style="topStyle"/>
      </div>

      <div class="user-page">
<!--        <van-image class="img-back" width="100%" height="" :src="userDetail.backUrl"/>-->
        <img v-lazy="userDetail.backUrl" alt="" class="img-back" width="100%">
        <div class="user-detail">
          <div class="user-img">
            <van-image width="90px" :src="userDetail.avatarUrl"/>
          </div>
          <div class="user-name">
            <p>
              {{ userDetail.name }}
              <van-tag round type="danger">lv{{ userDetail.level }}</van-tag>
            </p>
          </div>
          <div class="signature">
            <p>{{ userDetail.signature }}</p>
          </div>
          <div class="user-fans">
            关注 <span>{{ userDetail.follows }}</span>
            粉丝 <span>{{ userDetail.followeds }}</span>
          </div>

        </div>

      </div>
      <my-bar @isSticky="isSticky" class="my-detail">
        <template v-slot:home>
          <item-cent title="听歌排行" describe="累计听歌数据" @click.native="showSongRanking"/>
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
import TopBar from "../../components/common/TabBar/topBar";
import ItemCent from "../../components/content/itemCent/ItemCent";

export default {
  name: "my",
  components: {ItemCent, TopBar, MyBar},
  data() {
    return {
      show: true,
      showShare: false,
      topStyle: '',
      options: [
        {name: '微信', icon: 'wechat'},
        {name: '微博', icon: 'weibo'},
        {name: '复制链接', icon: 'link'},
        {name: '分享海报', icon: 'poster'},
        {name: '二维码', icon: 'qrcode'},
      ],
      userDetail: {
        name: '',           //昵称
        id: '',              //id
        level: '',           //等级
        backUrl: '',        //背景
        avatarUrl: '',      //头像
        signature: '',      //签名
        followeds: 0,       //粉丝
        follows: 0,           //关注
      }
    };
  },
  created() {
    getUserDetail(this.$store.state.myID).then(res => {
      console.log(res)

      this.userDetail.backUrl = res.profile.backgroundUrl
      this.userDetail.name = res.profile.nickname
      this.userDetail.id = res.profile.userId
      this.userDetail.level = res.level
      this.userDetail.avatarUrl = res.profile.avatarUrl
      this.userDetail.signature = res.profile.signature
      this.userDetail.followeds = res.profile.followeds
      this.userDetail.follows = res.profile.follows
      this.userDetail.follows = res.profile.follows
      console.log(this.userDetail.id)

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
    isSticky(isFixed) {
      console.log(isFixed)
      if (isFixed.isFixed) {
        this.topStyle =
            "background:url(" + this.userDetail.backUrl + ");" +
            "background-size: 100%;" +
            "background-position: bottom;" +
            "filter: brightness(80%);"
      } else {
        this.topStyle = ''
      }
    },
    //显示听歌排行
    showSongRanking() {
      console.log('111')
      this.$router.push({
        name: 'listenSong',
        params: {
          id: this.userDetail.id
        }
      })
    }
  },
}
</script>

<style scoped>
.my {
  position: relative;
  top: 0;
  left: 0;
  z-index: 500;
}

.user-page {
  width: 100vw;
  height: 90vw;
}

.img-back {
  filter: brightness(70%)
}

.van-hairline--bottom::after {
  border: none;
}

.user-detail {
  position: absolute;
  top: 20vw;
  left: 0;
  padding: 10px 16px;
  color: #ffffff;
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
  font-weight: 700;
  padding: 20px 0 10px;
}

.user-fans {
  padding: 5px 0;
  font-size: 18px;
  font-weight: 600;
}

.signature {
  padding: 5px 0;
  line-height: 25px;
  color: #ffffffc4;
}

.my-detail {
  border-radius: 10px 10px 0 0;
  overflow: hidden;
}
</style>