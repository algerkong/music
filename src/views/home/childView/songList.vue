<template>
  <div>
    <van-popup
        v-model="$store.state.isShow"
        duration="0.2"
        position="bottom"
        :style="{ height: '100%' }"
    >
      <top-bar class="top-bar" title="歌单广场" style="background-color: #ffffff"/>
      <div class="content"></div>
      
      <div class="list">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <div class="list-item" v-for="(item,index) in list" :key="index">
          <van-image class="ball-icon" width="80%" :src="item.coverImgUrl"/>
          <p>{{item.name}}</p>
        </div>
      </van-list>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import TopBar from "../../../components/common/TabBar/topBar";
  
  import {getList} from "../../../network/song";
  
  export default {
    name: "songList",
    components: {TopBar},
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        count:1
      };
    },
    methods: {
      onLoad() {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        getList(90, '全部', 30 * this.count).then(res => {
          console.log(res)
          this.list.push.apply(this.list, res.playlists)
          // 加载状态结束
          this.loading = false;
          this.count++
          
          // 数据全部加载完成
          if (this.list.length >= 90 * this.list.length) {
            this.finished = true;
            
          }
        })
      },
    },
    created() {
    
    }
  }
</script>

<style scoped>
  .list{
    padding: 0 16px;
  }
  .list-item {
    padding: 5px 0;
    width: calc((100vw - 32px) / 3);
    height: calc((100vw - 32px) / 3);
    float: left;
    text-align: center;
  }
  .list-item p{
    text-align: left;
    
  }
</style>