<template>
  <div>
    <van-popup
        class="comment-page"
        v-model="show"
        duration="0.2"
        position="bottom"
        :style="{ height: '100%' }"
    >
      <music-bar :music-name="'评论('+allCommentCount+')'"/>
      <v-form class="content-page">
        <div class="music-page">
          <div class="img-page">
            <van-image :src="musicSrc.img" width="80px" height="80px"/>
          </div>
          <div class="text">
            <p>{{ musicSrc.name }}</p>
            <p>{{ musicSrc.arName }}</p>
          </div>
          <div>
            <van-icon name="arrow" size="30px" color="#6f6f6f"/>
          </div>
        </div>

        <div>
          <van-sticky offset-top="60px">
            <div class="title"><p>评论区</p></div>
          </van-sticky>
          <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
          >
            <van-cell v-for="(item,index) in comments" :key="index*(page+1)">
              <comment-item :comment="item"/>
            </van-cell>
          </van-list>

        </div>
      </v-form>
    </van-popup>
  </div>
</template>

<script>
import MusicBar from "../../childMusic/musicBar";

import {getSongComments} from "network/song";
import CommentItem from "../../../../components/common/CommontItem/commentItem";

export default {
  name: "musicComments",
  components: {CommentItem, MusicBar},
  data() {
    return {
      musicSrc: this.$store.state.musicSrc,
      page: 1,
      comments: [],
      loading: false,
      finished: false,
      allCommentCount: 0,
      show:true
    }
  },
  created() {

  },
  methods: {
    getComment() {

    },
    onLoad() {
      const state = this.$store.state
      getSongComments(state.musicSrc.id, 20, this.page*30).then(res => {
        console.log(res)
        this.comments.push.apply(this.comments, res.comments)
        console.log(this.comments)
        this.allCommentCount = res.total

        this.loading = false;
        this.page++
        if (this.comments.length >= 30*this.comments.length) {
          this.finished = true;
        }
      })

    },


  },
}
</script>

<style scoped>
.comment-page {
  z-index: 2500 !important;
}

.content-page {
  margin-top: 70px;
}

.music-page {
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  border-bottom: 5px solid #eeeeee;
}

.music-page > .img-page {
  display: inline-block;
  border-radius: 10px;
  overflow: hidden;
}

.music-page > .text {
  flex: 1;
  padding: 0 10px;
  line-height: 30px;
}

.title {
  width: 100%;
  background-color: #ffffff;
  padding: 10px 16px;
  font-weight: 600;
}
</style>