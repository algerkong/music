<template>
  <div>
    <van-popup
      class="mv-page"
      v-model="show"
      duration="0.2"
      position="bottom"
      :style="{ height: '100%' }"
    >
      <top-bar :title="mvName" />
      <div class="video-page">
        <video
          class="mv-video"
          controls
          autoplay
          :src="mvSrc"
          :poster="mvBackground"
        ></video>
      </div>
      <div class="content"></div>

      <van-form>
        <van-collapse v-model="activeNames">
          <van-collapse-item name="1">
            <template #title>
              <div class="mv-title">
                <p>
                  <span class="name">{{ mvName }}</span>
                  <span @click="showSinger"> - {{ author }}</span>
                </p>
              </div>
              <div class="mv-count">
                <span>{{ playCount }}次观看</span>
              </div>
            </template>
            <div class="mv-describe">
              <p>{{ mvTime }} 发布</p>
              <p>{{ text }}</p>
              <p>{{ desc }}</p>
            </div>
          </van-collapse-item>
        </van-collapse>
        <van-grid>
          <van-grid-item icon="good-job-o" :text="allCommentCount.toString()" />
          <van-grid-item icon="star-o" :text="count.subCount.toString()" />
          <van-grid-item icon="chat-o" :text="count.commentCount.toString()" />
          <van-grid-item icon="share" :text="count.shareCount.toString()" />
        </van-grid>

        <div>
          <van-sticky offset-top="245px">
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
import { getMv, getMvDetail, getMvComments } from "network/song";
import TopBar from "components/common/TabBar/topBar";
import CommentItem from "components/common/CommontItem/commentItem";

export default {
  name: "mv",
  components: { CommentItem, TopBar },
  data() {
    return {
      show: true,
      mvID: "",
      activeNames: ["0"],
      loading: false,
      finished: false,
      page: 1,
      comments: [],
      allCommentCount: "",
      mvSrc: "",
      mvBackground: "",
      mvName: "",
      author: "",
      text: "",
      playCount: "",
      arID: "",
      mvTime: "",
      desc: "",
      count: {
        subCount: "",
        commentCount: "",
        shareCount: "",
      },
    };
  },

  watch: {
    $route(to, from) {
      this.comments = [];
      this.oneLoad();
      this.onLoad();
    },
  },

  created() {
    this.oneLoad();
    this.onLoad();
  },
  methods: {
    oneLoad() {
      this.mvID = this.$route.params.id;
      //打开时暂停播放音乐
      const state = this.$store.state;
      state.musicSrc.isPlay = false;
      //获取mv播放地址
      getMv(this.mvID).then((res) => {
        console.log(this.mvID);
        console.log(res);
        this.mvSrc = res.data.url;
      });

      this.comments = [];

      //获取MV信息
      getMvDetail(this.mvID).then((res) => {
        console.log(res);
        this.mvBackground = res.data.cover;
        this.mvName = res.data.name;
        this.author = res.data.artistName;
        this.playCount = res.data.playCount;
        this.text = res.data.briefDesc;
        this.arID = res.data.artistId;
        this.mvTime = res.data.publishTime;
        this.desc = res.data.desc;
        this.count = {
          subCount: res.data.subCount,
          commentCount: res.data.commentCount,
          shareCount: res.data.shareCount,
        };
      });
      setTimeout(() => {
        console.log(state.isMv);
      }, 2000);
    },
    showSinger() {
      this.$store.state.arID = this.arID;
      this.$store.state.isSinger = true;
      this.$router.push("/singer");
    },
    onLoad() {
      getMvComments(this.mvID, 30, this.page * 30).then((res) => {
        console.log(res);

        this.comments.push.apply(this.comments, res.comments);
        console.log(this.comments);
        this.allCommentCount = res.total;

        this.loading = false;
        this.page++;

        if (this.comments.length > 30 * this.allCommentCount) {
          this.finished = true;
        }
      });
    },
  },
};
</script>

<style scoped>
.video-page {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

.content {
  padding-top: 232px;
}

.title {
  width: 100%;
  background-color: #ffffff;
  padding: 10px 16px;
  font-weight: 600;
  font-size: 16px;
}

.mv-video {
  width: 100vw;
  height: 232px;
  background-color: #000000;
}

.mv-title {
  color: #6f6f6f;
}

.name {
  font-size: 20px;
  font-weight: 600;
  color: #333333;
}

.mv-count {
  font-size: 14px;
  color: #6f6f6f;
}

.mv-describe {
  color: #6f6f6f;
}
</style>