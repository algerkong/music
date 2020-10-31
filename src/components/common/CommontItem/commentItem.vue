<template>
  <div class="item-page">
    <div class="item-img">
      <div>
        <van-image class="img" :src="imgUrl + '?param=200y200'" round />
      </div>
      <div class="name">
        {{ name }}
      </div>
      <div class="like">
        <span class="like-count">{{ likeCount }}</span>
        <van-icon
          class="like-icon"
          name="good-job-o"
          color="#6f6f6f"
          @click="isGoodClick"
        />
      </div>
    </div>
    <div class="item-content">
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
import { isGood } from "network/song";

export default {
  name: "commentItem",
  data() {
    return {
      name: "",
      imgUrl: "",
      userID: "",
      content: "",
      commentID: "",
      likeCount: "",
      isT: 0,
    };
  },
  props: {
    comment: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
    this.name = this.comment.user.nickname;
    this.imgUrl = this.comment.user.avatarUrl;
    this.userID = this.comment.user.userId;
    this.content = this.comment.content;
    this.commentID = this.comment.commentId;
    this.likeCount = this.comment.likedCount;
  },
  methods: {
    isGoodClick() {
      const id = this.$store.state.musicSrc.id;
      const cid = this.commentID;
      const type = 0;
      this.isT === 0 ? this.isT++ : (this.isT = 1);
      isGood(id, cid, this.isT, type).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
.img {
  width: 40px;
  height: 40px;
}

.item-img {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item-img > .name {
  flex: 1;
  padding-left: 10px;
  color: #6f6f6f;
}

.item-content {
  padding-left: 45px;
  padding-right: 10px;
  line-height: 22px;
  box-sizing: border-box;
}

.like {
  display: flex;
  align-items: center;
}

.like-icon {
  font-size: 20px;
}

.like-count {
  padding: 0 5px;
  color: #6f6f6f;
}
</style>