<template>
  <div>
    <video class="mv-video" controls autoplay :src="mvSrc"></video>
    <div>
      <p><span>{{mvName}}</span>{{author}}<span></span></p>
    </div>
    <div><p>{{text}}</p></div>
  </div>
</template>

<script>
import {getMv,getMvDetail} from "network/song";

export default {
  name: "mv",
  data(){
    return{
      mvSrc:'',
      mvName:'',
      author:'',
      text:''
    }
  },
  created() {
    getMv(this.$store.state.mvID).then(res=>{
      console.log(this.$store.state.mvID)
      console.log(res)
      this.mvSrc = res.data.url
    })
    getMvDetail(this.$store.state.mvID).then(res=>{
      console.log(res)
      this.mvName = res.data.name
      this.author = res.data.artistName
      this.text = res.data.briefDesc

    })
  }
}
</script>

<style scoped>
.mv-video{
  width: 100vw;
}
</style>