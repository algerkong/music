<template>
  <div>
    <van-popup
      class="comment-page"
      v-model="show"
      duration="0.2"
      position="bottom"
      :style="{ height: '100%' }"
    >
      <music-bar :music-name="'评论(' + allCommentCount + ')'" />
      <van-form class="content-page">
        <div class="music-page">
          <div>
            <van-image
              class="img-page"
              :src="musicSrc.img + '?param=200y200'"
            />
          </div>
          <div class="text">
            <p>{{ musicSrc.name }}</p>
            <p>{{ musicSrc.arName }}</p>
          </div>
          <div>
            <van-icon name="arrow" color="#6f6f6f" />
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
            <van-cell
              v-for="(item, index) in comments"
              :key="index * (page + 1)"
            >
              <comment-item :comment="item" />
            </van-cell>
          </van-list>
        </div>
      </van-form>
    </van-popup>
  </div>
</template>

<script>
import MusicBar from "../../childMusic/musicBar";

import { getSongComments } from "network/song";
import CommentItem from "../../../../components/common/CommontItem/commentItem";

export default {
  name: "musicComments",
  components: { CommentItem, MusicBar },
  data() {
    return {
      musicSrc: null,
      page: 1,
      comments: [],
      loading: false,
      finished: false,
      allCommentCount: 0,
      show: true,
    };
  },

  watch: {
    $route(to, from) {
      this.comments = [];
      this.onLoad();
    },
  },

  created() {
    this.onLoad();
  },
  methods: {
    getComment() {},
    onLoad() {
      const state = this.$store.state;
      this.musicSrc = state.musicSrc;
      getSongComments(state.musicSrc.id, 30, this.page * 30).then((res) => {
        console.log(res);
        this.comments.push.apply(this.comments, res.comments);
        console.log(this.comments);
        this.allCommentCount = res.total;

        this.loading = false;
        this.page++;
        if (this.comments.length > 30 * this.comments.length) {
          this.finished = true;
        }
      });
    },
  },
};
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

.img-page {
  width: 65px;
  height: 65px;
  border-radius: 10px;
  overflow: hidden;
}

.music-page > .text {
  flex: 1;
  padding: 0 10px;
  line-height: 30px;
  font-size: 16px;
}

.title {
  width: 100%;
  background-color: #ffffff;
  padding: 10px 16px;
  font-weight: 600;
  font-size: 16px;
}
</style>