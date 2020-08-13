import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  musicSrc: {             //音乐
    id: '',      //ID
    src: '',    //链接
    img: '',    //图片
    name: '',   //歌曲名
    arName: '',  //作者名
    arID: '',    //作者ID
    isPlay: false //是否播放
  },
  arID: '',    //作者ID
  mvID: '',    //mvID
  allMusic: [],            //播放过的音乐列表
  realMusicTime: '',       //音乐播放时间
  newTime: '',             //当前为第几秒
  allTime: '',             //总秒数
  homeCount: 0,           //首页为第几页
  search: '',              //搜索的字符
  myID: 498033815,          //登录用户ID
  
  audio:'',               //播放器
  
  isBar: true,            //是否显示顶栏
  isMusic: false,           //是否显示底部音乐
  isLogin: false,          //是否登录
  isMusicPop: false,       //是否显示音乐大屏
  isSearchPop: false,      //是否显示搜索
  isComment:true          //是否显示评论
}

const store = new Vuex.Store({
  state
})

export default store