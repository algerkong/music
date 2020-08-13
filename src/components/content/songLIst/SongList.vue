<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <van-cell v-for="(item,index) in list" :key="item" :title="item" @click="songUrl(songs[index].id)"/>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import {getSongDetail,getIsSong} from "network/song";

export default {
  name: "SongList",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      listPage: 1
    };
  },
  props: {
    songs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 30; i++) {
          getIsSong(this.songs[i].id).then(res=>{
            console.log(res.success)
            if(res.success){
              this.list.push(this.songs[i].id+'++'+this.songs[i].name + '--' + this.songs[i].artists[0].name)
            }
          })
        }
        this.loading = false;

        if (this.list.length >= this.songs.length) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    songUrl(id){
      getSongDetail(id).then(res=>{
        console.log(res.data[0])

        this.$store.state.musicSrc.src = res.data[0].url
      })

    }
  },
}
</script>

<style scoped>

</style>