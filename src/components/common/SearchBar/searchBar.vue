<template>
  <div>
    <form action="/" class="page">
      <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          shape="round"
          @click="searchClick"
      >
        <template #left>
          <div class="img-page" @click="myClick">
            <van-image
                class="img"
                round
                fit="cover"
                :src="imgUrl"
            />
          </div>
        </template>
        <template #action>
          <div class="set-page" @click="showSet">
            <van-icon
                color="#a39b9b"
                name="setting-o"/>
          </div>
        </template>
      </van-search>

    </form>
    <div class="holder"></div>
  </div>
</template>

<script>
import {Toast} from 'vant';
import {getUserDetail} from "network/my";

export default {
  name: "searchBar",
  data() {
    return {
      value: '',
      imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg'
    };
  },
  created() {
    setTimeout(() => {
      getUserDetail(this.$store.state.myID).then(res => {
        this.imgUrl = res.profile.avatarUrl
      })
    },1000)
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    searchClick() {
      // this.$store.state.isBar = false
      this.$store.state.isSearchPop = true
      this.$router.push('/search')
    },
    myClick() {
      this.$emit('my-click')
    },
    showSet() {
      this.$router.push('/set')
    }
  },
}
</script>

<style scoped>
.holder {
  height: 54px;
}

.page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}

.van-search__content {
  background-color: #f3f3f3;
}

.van-search__action {
  color: #d22d2d;
}

.img-page {
  width: 50px;
  display: flex;
  justify-content: center;
}

.img{
  width: 33px;
  height: 33px;
}

.set-page {
  display: flex;
  justify-content: center;
  width: 40px;
  font-size: 25px;
}

.van-image--round {
  border: 1px solid #dedede;
}
</style>