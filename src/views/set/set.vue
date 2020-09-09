<template>
  <div class="set">
    <van-popup
        class="set-page"
        v-model="$store.state.isShow"
        duration="0.2"
        position="bottom"
        :style="{ height: '100%' }"
    >
      <music-bar music-name="设置"/>
      <div class="set-content">
        <van-form>
          <van-cell-group>
            <van-cell v-if="this.$store.state.isLogin">
              <van-button type="danger" block @click="clickLogOut">退出登录</van-button>
            </van-cell>
            <van-cell title="单元格" value="内容" label="描述信息"/>
          </van-cell-group>
        </van-form>
      </div>

    </van-popup>
  </div>
</template>

<script>
import MusicBar from "../music/childMusic/musicBar";
import {Dialog} from "vant";

import {logOut} from "../../network/my";
import {Toast} from "vant";

export default {
  name: "set",
  components: {MusicBar},
  data() {
    return {}
  },
  methods: {
    clickLogOut() {
      Dialog.confirm({
        title: '退出登陆',
        message: '是否要退出账号',
        beforeClose: this.beforeClose
      })
    },
    beforeClose(action, done) {
      if (action === 'confirm') {
        logOut().then(res => {
            if(res.code === 200){
              this.$store.state.isLogin = false
              done()
              Toast('退出登录')
            }
          })
      } else {
        done();
      }
    }


  }
}
</script>

<style scoped>
.set-content {
  margin-top: 70px;
}
</style>