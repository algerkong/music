<template>
  <div class="tab-page">
    <van-tabs v-model="active" animated swipeable sticky @click="tabClick" title-active-color="#ee0a24"
              title-inactive-color="#333">
      <van-tab v-for="(item,index) in tabBarList" :title="item.title">
        <slot></slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Home from "views/home/home";
import My from "views/my/my";

export default {
  name: "tabBar",
  components: {Home, My},
  data() {
    return {
      active: this.$store.state.homeCount,
      tabBarList: [
        {
          name: "home",
          title: "首页",
          normal:
              "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-fx2.png",
          active:
              "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-fx.png"
        },
        {
          name: "my",
          title: "我的",
          normal:
              "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-xx.png",
          active:
              "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-xx2.png"
        },
        {
          name: "knowledge",
          title: "问吧",
          normal:
              "https://sucai.suoluomei.cn/sucai_zs/images/20200420134504-1.png",
          active:
              "https://sucai.suoluomei.cn/sucai_zs/images/20200420134504-2.png"
        },
        {
          name: "personal",
          title: "我的",
          normal:
              "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd.png",
          active:
              "https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd2.png"
        }
      ]
    }
  },

  watch: {
    active(newCount,old){
      switch (newCount) {
        case 0 :
          this.$router.push('/home')
          break
        case 1:
          this.$router.push('/my')
          break
        case 2 :
          this.$router.push('/home')
          break
        case 3:
          this.$router.push('/my')
          break
      }
      this.$store.state.homeCount = newCount
    }
  },

  methods: {
    tabClick(count) {
      switch (count) {
        case 0 :
          this.$router.push('/home')
          break
        case 1:
          this.$router.push('/my')
          break
        case 2 :
          this.$router.push('/home')
          break
        case 3:
          this.$router.push('/my')
          break
      }
      this.$store.state.homeCount = count
    }
  }

}
</script>

<style scoped>
.van-tab--active {
  font-weight: 600;
}

.tab-page {
  position: sticky;
  top: 0;
  z-index: 50;
}
</style>