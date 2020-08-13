<template>
  <div class="item-page">
    <div class="item-img">
      <div>
        <van-image :src="imgUrl" round width="50px" height="50px"/>
      </div>
      <div class="name">
        {{ name }}
      </div>
      <div>
        <van-icon name="good-job-o" size="25px" color="#6f6f6f" @click="isGoodClick"/>
      </div>
    </div>
    <div class="item-content">
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>

import {isGood} from "network/song";

export default {
  name: "commentItem",
  data() {
    return {
      name: '',
      imgUrl: '',
      userID: '',
      content: '',
      commentID: '',
      isT: 0
    }
  },
  props: {
    comment: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
    this.name = this.comment.user.nickname
    this.imgUrl = this.comment.user.avatarUrl
    this.userID = this.comment.user.userId
    this.content = this.comment.content
    this.commentID = this.comment.commentId
  },
  methods: {
    isGoodClick() {
      const id = this.$store.state.musicSrc.id
      const cid = this.commentID
      const type = 0
      this.isT === 0 ? this.isT++ : this.isT = 1
      isGood(id, cid, this.isT, type).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
.item-page {
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
  padding-left: 60px;
  padding-right: 10px;
  line-height: 25px;
}
</style>