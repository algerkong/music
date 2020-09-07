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
            <van-cell>
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

export default {
  name: "set",
  components: {MusicBar},
  data() {
    return {}
  },
  methods: {
    isLogOut() {
      logOut.then(res => {
        console.log('1111111111s')
        console.log(res)
      })
    },
    clickLogOut() {
      Dialog.confirm({
        title: '退出登陆',
        message: '是否要退出账号',
        beforeClose: this.beforeClose
      })
    },
    beforeClose(action, done) {
      if (action === 'confirm') {
        this.isLogOut();
        done();
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