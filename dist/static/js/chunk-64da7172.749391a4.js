(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64da7172"],{"35ec":function(a,t,s){"use strict";s.r(t);var i=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"list"},[s("van-popup",{style:{height:"100%"},attrs:{duration:"0.3",position:"bottom"},model:{value:a.show,callback:function(t){a.show=t},expression:"show"}},[s("div",[s("top-bar",{staticClass:"top-bar",style:a.topStyle,attrs:{title:"歌单"}})],1),s("div",{staticClass:"img-page"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.img,expression:"img"}],attrs:{width:"100%",alt:""}})]),s("div",{staticClass:"describe"},[s("div",{staticClass:"img-box"},[s("span",{staticClass:"play-count"},[s("van-icon",{attrs:{name:"play-circle-o"}}),a._v(a._s(a.playCount))],1),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.img,expression:"img"}],staticClass:"img",attrs:{alt:""}})]),s("div",[s("h2",[a._v(a._s(a.title))]),s("div",{staticClass:"author",on:{click:a.arShow}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.arImg,expression:"arImg"}],attrs:{alt:""}}),s("span",[a._v(a._s(a.arName))])])])]),s("div",{staticClass:"song-list"},[s("van-form",{staticClass:"list-page"},[a._l(a.song,(function(t,i){return s("van-cell",{key:t.al.name},[s("div",{staticClass:"hot-item",on:{click:function(s){return a.itemClick(t,i)}}},[s("div",{staticClass:"item-count"},[s("span",[a._v(a._s(i+1))])]),s("div",{staticClass:"item-data"},[s("div",{staticClass:"word"},[s("p",[s("span",[a._v(a._s(t.al.name))]),1===t.alia.length?s("span",{staticClass:"gray"},[a._v(" ("+a._s(t.alia[0])+") ")]):a._e()])]),s("div",{staticClass:"content"},[s("p",[a._l(t.ar,(function(i,e){return s("span",[a._v(" "+a._s(i.name)+" "),t.ar.length!==e+1?s("i",[a._v("/")]):a._e()])})),s("span",[a._v(" - "+a._s(t.name))])],2)])]),s("div",{staticClass:"item-score"},[t.mv?s("van-icon",{attrs:{name:"play-circle-o",color:"#6f6f6f"},on:{click:function(s){return a.showMV(t.mv)}}}):a._e()],1)])])})),s("div",{staticClass:"content50"})],2)],1)])],1)},e=[],l=(s("b0c0"),s("c6a0")),n=s("d954"),r=s("d399"),o={name:"songList",components:{TopBar:n["a"]},data:function(){return{show:!0,id:"",img:"",song:[],topStyle:"",title:"",arName:"",arImg:"",arID:"",playCount:""}},watch:{$route:function(a,t){var s=this,i=0;i=this.$store.state.listID,Object(l["j"])(i,this.$store.state.cookie).then((function(a){s.img=a.playlist.coverImgUrl,s.title=a.playlist.name,s.arName=a.playlist.creator.nickname,s.song=a.playlist.tracks,s.playCount=a.playlist.playCount,s.arImg=a.playlist.creator.avatarUrl,s.arID=a.playlist.creator.userId,console.log(s.song)}))}},created:function(){var a=this,t=0;t=this.$store.state.listID,Object(l["j"])(t).then((function(t){a.img=t.playlist.coverImgUrl,a.title=t.playlist.name,a.arName=t.playlist.creator.nickname,a.song=t.playlist.tracks,a.playCount=t.playlist.playCount,a.arImg=t.playlist.creator.avatarUrl,a.arID=t.playlist.creator.userId,console.log(t),a.topStyle="background-color:rgba(0, 0, 0, 0.246);background-size:100%;background-position:top;backdrop-filter: brightness(80%);backdrop-filter: blur(15px);"}))},methods:{itemClick:function(a,t){var s=this,i=this.$store.state;i.allMusic=[],Object(l["l"])(a.id).then((function(e){if(console.log(e),null!=e.data[0].url){i.isMusic=!0,i.musicSrc={count:t,id:a.id,src:e.data[0].url,img:a.al.picUrl,name:a.al.name,arName:a.ar[0].name,arID:a.ar[0].id,isPlay:!0},i.arID=a.ar[0].id;for(var n=function(t){Object(l["l"])(s.song[t].id).then((function(e){a=s.song[t];var l={count:t,id:a.id,src:e.data[0].url,img:a.al.picUrl,name:a.al.name,arName:a.ar[0].name,arID:a.ar[0].id,isPlay:!0};i.allMusic.pushNoRepeat(l)}))},o=0;o<s.song.length;o++)n(o)}else Object(r["a"])("暂无版权")}))},showMV:function(a){this.$router.push({name:"mv",params:{id:a}})},arShow:function(){this.$store.state.userID=this.arID,this.$router.push("/my")}},mounted:function(){}},c=o,u=(s("f451"),s("2877")),m=Object(u["a"])(c,i,e,!1,null,"cab03ef8",null);t["default"]=m.exports},"47f6":function(a,t,s){},f451:function(a,t,s){"use strict";var i=s("47f6"),e=s.n(i);e.a}}]);
//# sourceMappingURL=chunk-64da7172.749391a4.js.map