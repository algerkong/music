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
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back()
      Toast('返回')
    },
    onSubmit(values) {
      if (this.username !== '' && this.password !== '') {
        getLogin(values).then(res => {
          if (res.code === 200) {
            Toast('登录成功')
            this.$store.state.isLogin = true
            this.$store.state.isBar = true
            this.$store.state.isMusic = true
            this.$store.state.myID = res.account.id
            this.$router.back()
            console.log(res)
          } else {
            Toast('登录失败')
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