<template>
  <div class="tab-page">
    <van-tabs v-model="active"
              :animated="true"
              swipeable
              sticky
              @click="tabClick"
              @scroll="isSticky"
              offset-top="70px"
              title-active-color="#ee0a24"
              title-inactive-color="#333">

      <van-tab class="cent" :title="tabBarList[0].title">
        <slot name="home"></slot>
      </van-tab>
      <van-tab class="cent"  :title="tabBarList[1].title">
        <slot name="my"></slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>

export default {
  name: "myBar",
  data() {
    return {
      active: 0,
      tabBarList: [
        {
          name: "home",
          title: "主页",
        },
        {
          name: "songs",
          title: "动态",
        }
      ]
    }
  },

  methods: {
    tabClick(count) {

    },
    isSticky(isFixed){
      this.$emit('isSticky',isFixed)
    }
  }

}
</script>

<style scoped>
.van-tab--active {
  font-weight: 600;
}


.cent{
  padding: 0 16px;
  width: 100vw;
}

/*.tab-page {*/
/*  position: sticky;*/
/*  top: 0;*/
/*  z-index: 999;*/
/*}*/
</style>