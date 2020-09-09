<template>
  <div>
    <van-popup
        v-model="show"
        duration="0.2"
        position="bottom"
        :style="{ height: '100%' }"
    >
      <top-bar class="top-bar" title="歌单广场" style="background-color: #ff0000"/>
      <div class="content"></div>
      
      <div class="list">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
          <div class="list-page">
            <div class="list-item" v-for="(item,index) in list" :key="index">
              <span class="play-count"><van-icon name="play-circle-o" size="15"/>{{item.playCount}}</span>
              <van-image class="list-img" width="100%" :src="item.coverImgUrl"/>
              <p>{{item.name}}</p>
            </div>
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
        show:true,
        list: [],
        loading: false,
        finished: false,
        count: 1
      };
    },
    methods: {
      onLoad() {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        getList(30, '全部', 30 * this.count).then(res => {
          console.log(res)
          this.list.push.apply(this.list, res.playlists)
          // 加载状态结束
          this.loading = false;
          this.count++
          
          // 数据全部加载完成
          if (this.list.length >= 30 * this.list.length) {
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
  
  .content {
    width: 100%;
    height: 70px;
  }
  
  
  .list {
    padding: 0 11px;
  }
  
  .list-page {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 14px;
    height: 31px;
    display: block;
  }
  
  .list-page {
  
  }
</style>