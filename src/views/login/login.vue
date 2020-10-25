<template>
  <div class="main">
    <van-popup
        class="music-page"
        v-model="show"
        duration="0.2"
        position="left"
        :style="{ height: '100%',width:'100%'}"
    >
      <van-nav-bar
          title="登录账号"
          left-text=""
          left-arrow
          @click-left="onClickLeft"
      />

      <van-form class="login-page" @submit="onSubmit">
        <div class="text-tel">
          <van-field
              v-model="username"
              name="username"
              placeholder="请填写手机号"
          />
        </div>
        <div class="text-pas">
          <van-field
              v-model="password"
              type="password"
              name="password"
              placeholder="请填写密码"
          />
        </div>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </van-popup>
  </div>
</template>

<script>
import {Toast} from 'vant';
import {getLogin} from "network/my";

export default {
  name: "login",
  data() {
    return {
      username: '',
      password: '',
      message: '',
      show:true
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back()
      // Toast('返回')
    },
    onSubmit(values) {

      if (this.username !== '' && this.password !== '') {
        getLogin(values).then(res => {
          if (res.code === 200) {
            let state = this.$store.state;
            Toast('登录成功')
            state.isLogin = true
            state.isBar = true
            state.isMusic = true
            state.myID = res.account.id
            state.cookie = res.cookie
            this.$router.back()

            console.log(state.cookie)
          } else if (res.code === 400) {
            this.message = res.msg
            Toast(this.message)
          } else {
            Toast("账号不存在")
          }
        })
      } else {
        Toast('请输入完整信息')
      }
    },
  },
}
</script>

<style scoped>
/*.login-page{*/
/*  margin: 100px 0;*/
/*}*/

.main {
  width: 100vw;
}

.text-tel, .text-pas {
  border-radius: 50px;
  background: #f3f3f3;
  margin: 20px 16px;
  border: 1px solid #dedede;

}

.van-cell {
  font-size: 16px;
  background-color: #00000000;
}
</style>