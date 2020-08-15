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
        <slot name="week"></slot>
      </van-tab>
      <van-tab class="cent"  :title="tabBarList[1].title">
        <slot name="all"></slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>

export default {
  name: "ListenBar",
  data() {
    return {
      active: 0,
      tabBarList: [
        {
          name: "weekdays",
          title: "最近一周",
        },
        {
          name: "all",
          title: "所有时间",
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