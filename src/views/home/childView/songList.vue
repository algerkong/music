<template>
  <div class="page">
    <van-popup
        v-model="show"
        duration="0"
        position="bottom"
        :style="{ height: '100%' }"
    >
      <top-bar class="top-bar" title="歌单广场" style="background-color: #ff0000"/>
      <div class="content"></div>

      <van-tabs v-model="active" swipeable @change="changeTags" class="tag-tabs" sticky offset-top="50px">
        <van-tab :title="'全部'">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
              <div class="list-page">
                <div class="list-item" v-for="(item,index) in list[0]" :key="index" @click="itemClick(item.id)">
                  <span class="play-count"><van-icon name="play-circle-o" size="15"/>{{ item.playCount }}</span>
                  <!--              <van-image class="list-img" width="100%" :src="item.coverImgUrl"/>-->
                  <img v-lazy="item.coverImgUrl" class="list-img" width="100%" alt="">
                  <p class="van-multi-ellipsis--l2">{{ item.name }}</p>
                </div>
              </div>
            </van-list>
        </van-tab>
        <van-tab v-for="(tags,tagsNumber) in listType" :title="tags.name">
          <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
          >
            <div class="list-page">
              <div class="list-item" v-for="(item,index) in list[tagsNumber+1]" :key="index"
                   @click="itemClick(item.id)">
                <span class="play-count"><van-icon name="play-circle-o" size="15"/>{{ item.playCount }}</span>
                <!--              <van-image class="list-img" width="100%" :src="item.coverImgUrl"/>-->
                <img v-lazy="item.coverImgUrl" class="list-img" width="100%" alt="">
                <p class="van-multi-ellipsis--l2">{{ item.name }}</p>
              </div>
            </div>
          </van-list>
        </van-tab>
        <van-tab :title="'更多'">

        </van-tab>
      </van-tabs>

    </van-popup>
  </div>
</template>

<script>
import TopBar from "../../../components/common/TabBar/topBar";

import {getList, getListTag} from "../../../network/song";

export default {
  name: "songList",
  components: {TopBar},
  data() {
    return {
      show: true,
      list: [[],[],[],[],[],[],[],[],[],[],[]],
      loading: false,
      finished: false,
      count: 1,
      active: 0,
      title: '全部',
      listType:[]

    };
  },
  created() {
    getListTag().then(res => {
      this.listType = res.tags
    })
  },
  methods: {
    itemClick(id) {
      this.$store.state.listID = id
      this.$router.push('/songList')
    },
    changeTags(name, title) {

      this.title = title
      console.log(title)
      console.log(this.active)
    },
    onLoad() {
      // 异步更新数据
      getList(30, this.title, 30 * this.count).then(res => {
        console.log(res)
        //加载数据
        this.list[this.active].push.apply(this.list[this.active], res.playlists)
        // 加载状态结束
        this.loading = false;
        this.count++

        // 数据全部加载完成
        if (this.list[this.active].length >= res.total) {
          this.finished = true;

        }
      })
    },
  }
}
</script>

<style scoped>

.page {
  position: relative;
  top: 0;
  left: 0;
  z-index: 500;
}

.content {
  width: 100%;
  height: 50px;
}

.list {
  padding: 0 11px;
}

.list-page {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 11px;
}

.list-item {
  width: calc((100vw - 22px) / 3);
  text-align: center;
  box-sizing: border-box;
  padding: 8px 5px;
  position: relative;
}

span.play-count {
  font-size: 14px;
  color: #fff;
  position: absolute;
  z-index: 999;
  right: 10px;
  top: 10px;
}

.list-img {
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}

.list-img:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  box-shadow: inset 0px 20px 10px 0px #00000036;
}

.list-item p {
  text-align: left;
  font-size: 14px;
}

.list-page {

}
</style>