(function(t){function e(e){for(var i,n,c=e[0],r=e[1],l=e[2],u=0,m=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&m.push(a[n][0]),a[n]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,n=1;n<s.length;n++){var c=s[n];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},n={app:0},a={app:0},o=[];function c(t){return r.p+"static/js/"+({}[t]||t)+"."+{"chunk-03ad7bae":"4d7015ba","chunk-3c89edf2":"1d1dc779","chunk-5724ff1d":"7a6e89c8","chunk-753f75c6":"21a0f9ad","chunk-b10a5b5a":"e198a1c4"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(t){var e=[],s={"chunk-03ad7bae":1,"chunk-3c89edf2":1,"chunk-5724ff1d":1,"chunk-753f75c6":1,"chunk-b10a5b5a":1};n[t]?e.push(n[t]):0!==n[t]&&s[t]&&e.push(n[t]=new Promise((function(e,s){for(var i="static/css/"+({}[t]||t)+"."+{"chunk-03ad7bae":"4f60f38b","chunk-3c89edf2":"1c193027","chunk-5724ff1d":"3c504112","chunk-753f75c6":"181a2259","chunk-b10a5b5a":"6012052f"}[t]+".css",a=r.p+i,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===a))return e()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){l=m[c],u=l.getAttribute("data-href");if(u===i||u===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete n[t],d.parentNode.removeChild(d),s(o)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){n[t]=0})));var i=a[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise((function(e,s){i=a[t]=[e,s]}));e.push(i[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=c(t);var m=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var s=a[t];if(0!==s){if(s){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",m.name="ChunkLoadError",m.type=i,m.request=n,s[1](m)}a[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var d=u;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("85ec"),n=s.n(i);n.a},"06b9":function(t,e,s){},1160:function(t,e,s){"use strict";var i=s("c11f"),n=s.n(i);n.a},1741:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top-bar"},[s("van-nav-bar",{staticClass:"music-bar",attrs:{"left-arrow":""},on:{"click-right":t.onClickRight},scopedSlots:t._u([{key:"left",fn:function(){return[s("van-icon",{attrs:{name:"arrow-down",color:"#333",size:"25px"},on:{click:t.onClickLeft}})]},proxy:!0},{key:"title",fn:function(){return[t._v(" "+t._s(t.musicName)+" ")]},proxy:!0},{key:"right",fn:function(){return[s("van-icon",{attrs:{name:"share",color:"#333",size:"25px"},on:{click:t.onClickRight}})]},proxy:!0}])}),s("van-share-sheet",{attrs:{title:"立即分享给好友",options:t.options},on:{select:t.onSelect},model:{value:t.showShare,callback:function(e){t.showShare=e},expression:"showShare"}})],1)},n=[],a={name:"musicBar",props:{musicName:{type:String,default:function(){return""}}},data:function(){return{show:!0,showShare:!1,options:[{name:"微信",icon:"wechat"},{name:"微博",icon:"weibo"},{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"}]}},methods:{onClickLeft:function(){this.$store.state.isMusicPop=!1,this.$router.back()},onClickRight:function(){this.showShare=!0},onSelect:function(t){this.showShare=!1}}},o=a,c=(s("9ab8"),s("2877")),r=Object(c["a"])(o,i,n,!1,null,"60cb6a49",null);e["a"]=r.exports},"1b37":function(t,e,s){},"1bab":function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var i=s("bc3a"),n=s.n(i),a="http://124.70.158.250:3000/",o=a;function c(t,e,s){var i=n.a.create({baseURL:o,timeout:5e3});return i.interceptors.request.use((function(t){return t}),(function(t){})),i.interceptors.response.use((function(t){return t.data}),(function(t){console.log(t)})),i(t)}},"24b3":function(t,e,s){},2675:function(t,e,s){"use strict";var i=s("e9d2"),n=s.n(i);n.a},"2f62":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"music"},[s("audio",{ref:"audio",staticClass:"audio",attrs:{id:"audio",hidden:"",src:t.$store.state.musicSrc.src,controls:"",autoplay:"autoplay"}}),s("div",{staticClass:"music-click",on:{click:t.musicPop}},[s("div",{staticClass:"music-img"},[s("van-image",{attrs:{round:"",width:"35px",height:"35px",src:t.$store.state.musicSrc.img}})],1),s("div",{staticClass:"music-name"},[s("p",[t._v(t._s(t.$store.state.musicSrc.name)+t._s(t.time))])])]),s("div",{staticClass:"music-play",on:{click:t.btnClick}},[t.$store.state.musicSrc.isPlay?t._e():s("van-icon",{attrs:{name:"play-circle-o",color:"#6f6f6f",size:"30px"}}),t.$store.state.musicSrc.isPlay?s("van-icon",{attrs:{name:"pause-circle-o",color:"#6f6f6f",size:"30px"}}):t._e()],1)])},n=[],a=(s("d3b7"),s("ac1f"),s("25f0"),s("466d"),s("5319"),{name:"musicPlay",data:function(){return{musicSrc:this.$store.state.musicSrc}},watch:{"$store.state.musicSrc":function(){this.onAudio()},"$store.state.musicSrc.isPlay":function(){var t=this.$refs.audio;this.onAudio(),this.$store.state.musicSrc.isPlay?t.play():t.pause()}},created:function(){setInterval(this.onAudio,500)},computed:{time:function(){return this.$store.state.realMusicTime?this.$store.state.realMusicTime.match(/(\d{2}):(\d{2})/g)[0]:""}},methods:{musicPop:function(){this.$router.push("/music")},btnClick:function(){this.onAudio(),console.log(this.$store.state.musicSrc.isPlay);var t=this.$refs.audio;console.log(t.duration),!1===this.$store.state.musicSrc.isPlay?(t.play(),this.$store.state.musicSrc.isPlay=!0):(t.pause(),this.$store.state.musicSrc.isPlay=!1)},onAudio:function(){var t=this.$refs.audio,e=this.$store.state;if(this.$store.state.musicSrc.isPlay){e.audio=t;try{t.addEventListener("timeupdate",(function(){var s;e.newTime=t.currentTime,s=Math.floor(t.currentTime);var i=s/60,n=parseInt(i);n<10&&(n="0"+n);var a=s%60,o=Math.round(a);o<10&&(o="0"+o),e.realMusicTime=n+":"+o+"."+t.currentTime.toString().replace(/\d+\.(\d*)/,"$1"),t.currentTime===t.duration&&(e.musicSrc.isPlay=!1)}),!1)}catch(s){}}e.allTime=t.duration}}}),o=a,c=(s("606a"),s("2877")),r=Object(c["a"])(o,i,n,!1,null,"3322c654",null);e["a"]=r.exports},3622:function(t,e,s){"use strict";var i=s("ca76"),n=s.n(i);n.a},"3b49":function(t,e,s){},"3cee":function(t,e,s){},"400d":function(t,e,s){},"55bc":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[s("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,i){return s("van-cell",{key:e,attrs:{title:e},on:{click:function(e){return t.songUrl(t.songs[i].id)}}})})),1)],1)],1)},n=[],a=(s("b0c0"),s("c6a0")),o={name:"SongList",data:function(){return{list:[],loading:!1,finished:!1,refreshing:!1,listPage:1}},props:{songs:{type:Array,default:function(){return[]}}},methods:{onLoad:function(){var t=this;setTimeout((function(){t.refreshing&&(t.list=[],t.refreshing=!1);for(var e=function(e){Object(a["a"])(t.songs[e].id).then((function(s){console.log(s.success),s.success&&t.list.push(t.songs[e].id+"++"+t.songs[e].name+"--"+t.songs[e].artists[0].name)}))},s=0;s<30;s++)e(s);t.loading=!1,t.list.length>=t.songs.length&&(t.finished=!0)}),1e3)},onRefresh:function(){this.finished=!1,this.loading=!0,this.onLoad()},songUrl:function(t){var e=this;Object(a["f"])(t).then((function(t){console.log(t.data[0]),e.$store.state.musicSrc.src=t.data[0].url}))}}},c=o,r=s("2877"),l=Object(r["a"])(c,i,n,!1,null,"379be547",null);e["a"]=l.exports},"56d7":function(t,e,s){"use strict";s.r(e);s("c975"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("search-bar",{on:{"my-click":t.myClick}}),s("keep-alive",[t.$route.meta.keepAlive?s("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():s("router-view"),t.$store.state.isMusic?s("music-bottom-bar"):t._e()],1)},a=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tab-page"},[s("van-tabs",{attrs:{animated:"",swipeable:"",sticky:"","title-active-color":"#ee0a24","title-inactive-color":"#333"},on:{click:t.tabClick},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabBarList,(function(e,i){return s("van-tab",{attrs:{title:e.title}},[t._t("default")],2)})),1)],1)},c=[],r=s("77b8"),l=s("b31c"),u={name:"tabBar",components:{Home:r["default"],My:l["default"]},data:function(){return{active:this.$store.state.homeCount,tabBarList:[{name:"home",title:"首页",normal:"https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-fx2.png",active:"https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-fx.png"},{name:"my",title:"我的",normal:"https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-xx.png",active:"https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-xx2.png"},{name:"knowledge",title:"问吧",normal:"https://sucai.suoluomei.cn/sucai_zs/images/20200420134504-1.png",active:"https://sucai.suoluomei.cn/sucai_zs/images/20200420134504-2.png"},{name:"personal",title:"我的",normal:"https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd.png",active:"https://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd2.png"}]}},watch:{active:function(t,e){switch(t){case 0:this.$router.push("/home");break;case 1:this.$router.push("/my");break;case 2:this.$router.push("/home");break;case 3:this.$router.push("/my");break}this.$store.state.homeCount=t}},methods:{tabClick:function(t){switch(t){case 0:this.$router.push("/home");break;case 1:this.$router.push("/my");break;case 2:this.$router.push("/home");break;case 3:this.$router.push("/my");break}this.$store.state.homeCount=t}}},m=u,d=(s("e5c6"),s("2877")),f=Object(d["a"])(m,o,c,!1,null,"3b2311f0",null),h=f.exports,p=s("7bae"),v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{staticClass:"page",attrs:{action:"/"}},[s("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词",shape:"round"},on:{search:t.onSearch,click:t.searchClick},scopedSlots:t._u([{key:"left",fn:function(){return[s("div",{staticClass:"img-page",on:{click:t.myClick}},[s("van-image",{attrs:{width:"33px",height:"33px",round:"",fit:"cover",src:t.imgUrl}})],1)]},proxy:!0},{key:"action",fn:function(){return[s("div",{staticClass:"set-page",on:{click:t.showSet}},[s("van-icon",{attrs:{size:"25px",color:"#a39b9b",name:"setting-o"}})],1)]},proxy:!0}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),s("div",{staticClass:"holder"})])},g=[],b=s("d399"),y=s("64df"),k={name:"searchBar",data:function(){return{value:"",imgUrl:"https://img.yzcdn.cn/vant/cat.jpeg"}},created:function(){var t=this;Object(y["d"])(this.$store.state.myID).then((function(e){t.imgUrl=e.profile.avatarUrl}))},methods:{onSearch:function(t){Object(b["a"])(t)},searchClick:function(){this.$store.state.isSearchPop=!0,this.$router.push("/search")},myClick:function(){this.$emit("my-click")},showSet:function(){Object(b["a"])("还没做")}}},C=k,x=(s("6ef9"),Object(d["a"])(C,v,g,!1,null,"348a0e4f",null)),_=x.exports,w=s("b127"),S={name:"App",components:{Music:w["default"],SearchBar:_,MusicBottomBar:p["a"],TabBar:h},data:function(){return{active:0}},created:function(){var t=this;setTimeout((function(){Object(y["c"])().then((function(e){console.log(e),200===e.code?(console.log(e),t.$store.state.isLogin=!0,t.$store.state.myID=e.profile.userId):t.$store.state.isLogin=!1}))}),1e3)},methods:{myClick:function(){this.$store.state.isLogin?this.$router.push("/my"):this.$router.push("/login")}}},$=S,T=(s("034f"),Object(d["a"])($,n,a,!1,null,null,null)),O=T.exports,j=(s("d3b7"),s("8c4f"));i["a"].use(j["a"]);var L=function(){return Promise.resolve().then(s.bind(null,"77b8"))},P=function(){return Promise.resolve().then(s.bind(null,"b31c"))},E=function(){return s.e("chunk-3c89edf2").then(s.bind(null,"cd17"))},D=function(){return Promise.resolve().then(s.bind(null,"b127"))},M=function(){return s.e("chunk-b10a5b5a").then(s.bind(null,"1ef7"))},I=function(){return s.e("chunk-5724ff1d").then(s.bind(null,"dc3f"))},A=function(){return s.e("chunk-753f75c6").then(s.bind(null,"1f23"))},z=function(){return s.e("chunk-03ad7bae").then(s.bind(null,"dbd0"))},B=function(){return Promise.resolve().then(s.bind(null,"7c0e"))},U=[{path:"",redirect:"/home"},{path:"/home",component:L,meta:{keepAlive:!0}},{path:"/my",component:P,meta:{keepAlive:!1}},{path:"/listenSong",component:E,name:"listenSong",meta:{keepAlive:!1}},{path:"/music",component:D,meta:{keepAlive:!1}},{path:"/comment",component:B,meta:{keepAlive:!1}},{path:"/search",component:M,meta:{keepAlive:!0}},{path:"/login",component:I,meta:{keepAlive:!1}},{path:"/singer",component:A,meta:{keepAlive:!1}},{path:"/mv",component:z,meta:{keepAlive:!1}}],R=new j["a"]({routes:U}),N=j["a"].prototype.push;j["a"].prototype.push=function(t){return N.call(this,t).catch((function(t){return t}))};var H=R,F=s("2f625");i["a"].use(F["a"]);var q={musicSrc:{id:"",src:"",img:"",name:"",arName:"",arID:"",isPlay:!1},arID:"",mvID:"",allMusic:[],realMusicTime:"",newTime:"",allTime:"",homeCount:0,search:"",myID:498033815,audio:"",isShow:!0,isLogin:!1,isMusic:!1,isSearchPop:!1},G=new F["a"].Store({state:q}),J=G,K=s("b970"),V=(s("157a"),s("caf9"));i["a"].use(K["a"]),i["a"].use(V["a"]),i["a"].config.productionTip=!1,i["a"].prototype.$store=J,Array.prototype.pushNoRepeat=function(){for(var t=0;t<arguments.length;t++){var e=arguments[t];-1===this.indexOf(e)&&this.push(e)}},new i["a"]({render:function(t){return t(O)},router:H}).$mount("#app")},"5b41":function(t,e,s){"use strict";var i=s("3cee"),n=s.n(i);n.a},"5fb7":function(t,e,s){"use strict";var i=s("ec53"),n=s.n(i);n.a},"606a":function(t,e,s){"use strict";var i=s("7536"),n=s.n(i);n.a},"64df":function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return a})),s.d(e,"d",(function(){return o})),s.d(e,"a",(function(){return c}));var i=s("1bab");function n(t){return Object(i["a"])({url:"/login/cellphone",params:{phone:t.username,password:t.password}})}function a(t){return Object(i["a"])({url:"/login/status"})}function o(t){return Object(i["a"])({url:"/user/detail",params:{uid:t}})}function c(t,e){return Object(i["a"])({url:"/user/record",params:{uid:t,type:e}})}},6542:function(t,e,s){"use strict";var i=s("c1cc"),n=s.n(i);n.a},"6ef9":function(t,e,s){"use strict";var i=s("1b37"),n=s.n(i);n.a},"74e9":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item-page"},[s("div",{staticClass:"item-img"},[s("div",[s("van-image",{attrs:{src:t.imgUrl,round:"",width:"50px",height:"50px"}})],1),s("div",{staticClass:"name"},[t._v(" "+t._s(t.name)+" ")]),s("div",[s("span",{staticClass:"like-count"},[t._v(t._s(t.likeCount))]),s("van-icon",{attrs:{name:"good-job-o",size:"25px",color:"#6f6f6f"},on:{click:t.isGoodClick}})],1)]),s("div",{staticClass:"item-content"},[s("p",[t._v(t._s(t.content))])])])},n=[],a=(s("b0c0"),s("c6a0")),o={name:"commentItem",data:function(){return{name:"",imgUrl:"",userID:"",content:"",commentID:"",likeCount:"",isT:0}},props:{comment:{type:Object,default:function(){return{}}}},created:function(){this.name=this.comment.user.nickname,this.imgUrl=this.comment.user.avatarUrl,this.userID=this.comment.user.userId,this.content=this.comment.content,this.commentID=this.comment.commentId,this.likeCount=this.comment.likedCount},methods:{isGoodClick:function(){var t=this.$store.state.musicSrc.id,e=this.commentID,s=0;0===this.isT?this.isT++:this.isT=1,Object(a["i"])(t,e,this.isT,s).then((function(t){console.log(t)}))}}},c=o,r=(s("af71"),s("2877")),l=Object(r["a"])(c,i,n,!1,null,"935ff99a",null);e["a"]=l.exports},7536:function(t,e,s){},"77b8":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("van-pull-refresh",{attrs:{"success-text":"刷新成功"},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[t.banners?s("div",{staticClass:"banner-page"},[s("div",{staticClass:"banner"},[s("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"rgb(238, 10, 36)"}},t._l(t.banners,(function(t){return s("van-swipe-item",[s("van-image",{attrs:{src:t.pic}})],1)})),1)],1)]):t._e(),t.homePlaylist?s("div",[s("div",{staticClass:"list-top"},[s("div",{staticClass:"play-list-title"},[t._v(" "+t._s(t.playlistTitle)+" ")]),s("div",{staticClass:"btn-more"},[t._v(" 查看更多 ")])]),s("van-grid",{staticClass:"play-list",attrs:{"column-num":3}},t._l(t.homePlaylist,(function(t,e){return s("van-grid-item",{key:e},[s("playlist-recommended",{attrs:{list:t}})],1)})),1)],1):t._e(),t.homeSongsList?s("div",[s("div",{staticClass:"list-top"},[s("div",{staticClass:"play-list-title"},[t._v(" "+t._s(t.songsListTitle)+" ")]),s("div",{staticClass:"btn-more"},[t._v(" 查看更多 ")])]),s("song-recommended",{attrs:{list:t.homeSongsList}})],1):t._e(),t.scenarioList?s("div",[s("div",{staticClass:"list-top"},[s("div",{staticClass:"play-list-title"},[t._v(" "+t._s(t.scenarioTitle)+" ")]),s("div",{staticClass:"btn-more"},[t._v(" 查看更多 ")])]),s("van-grid",{staticClass:"play-list",attrs:{"column-num":3}},t._l(t.scenarioList,(function(t,e){return s("van-grid-item",{key:e},[s("playlist-recommended",{attrs:{list:t}})],1)})),1)],1):t._e(),t.newSongList?s("div",[s("div",{staticClass:"list-top"},[s("div",{staticClass:"play-list-title"},[t._v(" "+t._s(t.newSongTitle)+"新歌 ")]),s("div",{staticClass:"btn-more"},[t._v(" 查看更多 ")])]),s("song-recommended",{attrs:{list:t.newSongList}})],1):t._e(),t.everyonePlayList?s("div",[s("div",{staticClass:"list-top"},[s("div",{staticClass:"play-list-title"},[t._v(" "+t._s(t.everyonePlayTitle)+" ")]),s("div",{staticClass:"btn-more"},[t._v(" 查看更多 ")])]),s("song-recommended",{attrs:{list:t.everyonePlayList}})],1):t._e()])],1)},n=[],a=(s("b0c0"),s("d4ec"),s("1bab"));function o(){return Object(a["a"])({url:"/banner?type=2"})}function c(){return Object(a["a"])({url:"/homepage/block/page?refresh=true"})}var r=s("c6a0"),l=s("55bc"),u=s("2f62"),m=s("7bae"),d=s("7c0e"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{on:{click:t.itemClick}},[s("div",{staticClass:"img-page"},[s("van-image",{attrs:{src:t.img}})],1),s("div",{staticClass:"title"},[s("p",[t._v(t._s(t.title))])])])},h=[],p=s("d399"),v={name:"playlistRecommended",data:function(){return{title:"",ID:"",img:"",playCount:""}},props:{list:{type:Object,default:function(){return{}}}},created:function(){var t=this.list;this.title=t.uiElement.mainTitle.title,this.ID=t.creativeId,this.img=t.uiElement.image.imageUrl,this.playCount=t.resources[0].resourceExtInfo.playCount},methods:{itemClick:function(){Object(p["a"])("还没做")}}},g=v,b=(s("9931"),s("2877")),y=Object(b["a"])(g,f,h,!1,null,"761cb899",null),k=y.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"song-page"},[s("van-swipe",{attrs:{loop:!1,width:350,"show-indicators":!1}},t._l(t.list,(function(e,i){return s("van-swipe-item",{key:i},[s("div",t._l(e.resources,(function(e){return s("div",{staticClass:"item-page",on:{click:function(s){return t.itemClick(e)}}},[s("div",{staticClass:"img-page"},[s("van-image",{attrs:{src:e.uiElement.image.imageUrl,width:"55",height:"55"}})],1),s("div",{staticClass:"song-title"},[s("p",[t._v(" "+t._s(e.uiElement.mainTitle.title)+" "),e.resourceExtInfo?s("span",{staticClass:"author"},[t._v(" - "+t._s(e.resourceExtInfo.artists[0].name))]):t._e()])]),s("div",{staticClass:"play-icon"},[s("van-icon",{attrs:{name:"play-circle-o",color:"rgb(238, 10, 36)",size:"25px"}})],1)])})),0)])})),1)],1)},x=[],_={name:"songRecommended",data:function(){return{songList:[]}},props:{list:{type:Array,default:function(){return[]}}},created:function(){console.log(this.list)},methods:{itemClick:function(t){var e=this.$store.state;Object(r["h"])(t.resourceId).then((function(s){console.log(s),null!=s.data[0].url?(e.isMusic=!0,e.musicSrc={id:t.resourceId,src:s.data[0].url,img:t.uiElement.image.imageUrl,name:t.uiElement.mainTitle.title,arName:t.resourceExtInfo.artists[0].name,arID:t.resourceExtInfo.artists[0].id,isPlay:!0},e.arID=t.resourceExtInfo.artists[0].id,e.allMusic.pushNoRepeat(e.musicSrc),console.log(e.allMusic)):Object(p["a"])("暂无版权")}))}}},w=_,S=(s("7f3c"),Object(b["a"])(w,C,x,!1,null,"1ff99537",null)),$=S.exports,T={name:"home",components:{SongRecommended:$,PlaylistRecommended:k,MusicComments:d["default"],MusicBottomBar:m["a"],MusicPlay:u["a"],SongList:l["a"]},data:function(){return{isLoading:!1,newSongs:[],musicSrc:"",banners:[],playlistTitle:"",homePlaylist:[],songsListTitle:"",homeSongsList:[],scenarioTitle:"",scenarioList:[],newSongTitle:"",newSongList:[],everyonePlayTitle:"",everyonePlayList:[]}},created:function(){this.onRefresh()},methods:{onRefresh:function(){var t=this;Object(r["f"])(347230).then((function(t){console.log(t)})),o().then((function(e){t.banners=e.banners})),c().then((function(e){t.homePlaylist=e.data.blocks[0].creatives,t.playlistTitle=e.data.blocks[0].uiElement.subTitle.title,t.homeSongsList=e.data.blocks[1].creatives,t.songsListTitle=e.data.blocks[1].uiElement.subTitle.title,t.scenarioList=e.data.blocks[2].creatives,t.scenarioTitle=e.data.blocks[2].uiElement.subTitle.title,t.newSongList=e.data.blocks[5].creatives,t.newSongTitle=e.data.blocks[5].uiElement.mainTitle.title,t.everyonePlayList=e.data.blocks[6].creatives,t.everyonePlayTitle=e.data.blocks[6].uiElement.subTitle.title,console.log(t.homeSongsList),t.isLoading=!1}))}}},O=T,j=(s("5fb7"),Object(b["a"])(O,i,n,!1,null,"7d2deb99",null));e["default"]=j.exports},"7bae":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-page"},[s("van-tabbar",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[s("van-tabbar-item",[s("music-play")],1)],1)],1)},n=[],a=s("2f62"),o={name:"musicBottomBar",components:{MusicPlay:a["a"]},data:function(){return{active:0}}},c=o,r=(s("9520"),s("2877")),l=Object(r["a"])(c,i,n,!1,null,"4d1b9b14",null);e["a"]=l.exports},"7c0e":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-popup",{staticClass:"comment-page",style:{height:"100%"},attrs:{duration:"0.2",position:"bottom"},model:{value:t.$store.state.isShow,callback:function(e){t.$set(t.$store.state,"isShow",e)},expression:"$store.state.isShow"}},[s("music-bar",{attrs:{"music-name":"评论("+t.allCommentCount+")"}}),s("v-form",{staticClass:"content-page"},[s("div",{staticClass:"music-page"},[s("div",{staticClass:"img-page"},[s("van-image",{attrs:{src:t.musicSrc.img,width:"80px",height:"80px"}})],1),s("div",{staticClass:"text"},[s("p",[t._v(t._s(t.musicSrc.name))]),s("p",[t._v(t._s(t.musicSrc.arName))])]),s("div",[s("van-icon",{attrs:{name:"arrow",size:"30px",color:"#6f6f6f"}})],1)]),s("div",[s("van-sticky",{attrs:{"offset-top":"60px"}},[s("div",{staticClass:"title"},[s("p",[t._v("评论区")])])]),s("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.comments,(function(e,i){return s("van-cell",{key:i*(t.page+1)},[s("comment-item",{attrs:{comment:e}})],1)})),1)],1)])],1)],1)},n=[],a=s("1741"),o=s("c6a0"),c=s("74e9"),r={name:"musicComments",components:{CommentItem:c["a"],MusicBar:a["a"]},data:function(){return{musicSrc:this.$store.state.musicSrc,page:0,comments:[],loading:!1,finished:!1,allCommentCount:0}},created:function(){},methods:{getComment:function(){},onLoad:function(){var t=this,e=this.$store.state;Object(o["e"])(e.musicSrc.id,30,this.page).then((function(e){console.log(e),t.page||t.comments.push.apply(t.comments,e.hotComments),t.comments.push.apply(t.comments,e.comments),console.log(t.comments),t.allCommentCount=e.total,t.loading=!1,t.comments.length>=t.allCommentCount&&(t.finished=!0)})),this.page++}}},l=r,u=(s("1160"),s("2877")),m=Object(u["a"])(l,i,n,!1,null,"19b358e0",null);e["default"]=m.exports},"7f3c":function(t,e,s){"use strict";var i=s("24b3"),n=s.n(i);n.a},"85ec":function(t,e,s){},9520:function(t,e,s){"use strict";var i=s("fb12"),n=s.n(i);n.a},9931:function(t,e,s){"use strict";var i=s("400d"),n=s.n(i);n.a},"9ab8":function(t,e,s){"use strict";var i=s("c306"),n=s.n(i);n.a},a566:function(t,e,s){},a88a:function(t,e,s){"use strict";var i=s("3b49"),n=s.n(i);n.a},af71:function(t,e,s){"use strict";var i=s("c527"),n=s.n(i);n.a},b127:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-popup",{staticClass:"music-page",style:{height:"100%"},attrs:{duration:"0.2",position:"bottom"},model:{value:t.$store.state.isShow,callback:function(e){t.$set(t.$store.state,"isShow",e)},expression:"$store.state.isShow"}},[s("music-bar",{attrs:{"music-name":t.$store.state.musicSrc.name}}),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isText,expression:"!isText"}],staticClass:"author",on:{click:t.showAuthor}},[s("p",[s("span",[t._v(t._s(t.$store.state.musicSrc.arName))])])]),s("div",{staticClass:"music-middle",on:{click:t.showText}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isText,expression:"!isText"}],staticClass:"img-page"},[s("div",{staticClass:"img-box"},[s("van-image",{attrs:{width:"65vw",height:"65vw",fit:"cover",src:t.$store.state.musicSrc.img}})],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isText,expression:"isText"}],staticClass:"music-text"},[s("van-form",[t._l(t.musicText,(function(e,i){return t.text?t._e():s("div",{staticClass:"text",class:{"music-new-text":t.isTimeText(i)}},[s("p",[t._v(" "+t._s(e)+" ")])])})),t._l(t.text,(function(e,i){return t.text?s("div",{staticClass:"text",class:{"music-new-text":t.isTimeText(i)}},[s("p",[s("span",[t._v(t._s(e.text))]),s("br"),s("span",[t._v(t._s(e.trText))])])]):t._e()})),t.count?s("div",{staticClass:"text music-new-text"},[s("p",[t._v("没有歌词, 请欣赏音乐")])]):t._e()],2)],1)]),s("div",{staticClass:"music-bottom"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isText,expression:"!isText"}],staticClass:"music-btn"},[s("div",[s("van-icon",{attrs:{name:"like-o",size:"20px",color:"#333"}})],1),s("div",[s("van-icon",{attrs:{name:"down",size:"20px",color:"#333"}})],1),s("div",[s("van-icon",{attrs:{name:"chat-o",size:"20px",color:"#333"},on:{click:t.showComment}})],1),s("div",[s("van-icon",{staticClass:"btn-set",attrs:{name:"ellipsis",size:"20px",color:"#333"}})],1)]),s("van-slider",{attrs:{"active-color":"#333",step:"0.1","button-size":"15px"},on:{change:t.sliderChange},model:{value:t.musicTime,callback:function(e){t.musicTime=e},expression:"musicTime"}}),s("div",{staticClass:"play-page"},[s("div",{staticClass:"model"},[s("van-icon",{attrs:{name:"replay",size:"20px"}})],1),s("div",{staticClass:"prev"},[s("img",{attrs:{src:"https://s1.ax1x.com/2020/08/11/aLC7qK.png",alt:""}})]),s("div",{on:{click:t.isPlay}},[t.$store.state.musicSrc.isPlay?s("van-icon",{attrs:{name:"pause",size:"50px"}}):s("van-icon",{attrs:{name:"play",size:"50px"}})],1),s("div",{staticClass:"next"},[s("img",{attrs:{src:"https://s1.ax1x.com/2020/08/11/aLCbVO.png",alt:""}})]),s("div",{staticClass:"history-music"},[s("van-icon",{attrs:{name:"todo-list-o",size:"20px"},on:{click:t.showHistory}})],1)])],1)],1),s("van-popup",{staticClass:"history-pop",style:{height:"60%"},attrs:{round:"",position:"bottom"},model:{value:t.isHistory,callback:function(e){t.isHistory=e},expression:"isHistory"}},[s("music-history")],1)],1)},n=[],a=(s("fb6a"),s("ac1f"),s("466d"),s("5319"),s("1276"),s("1741")),o=s("c6a0"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("van-form",t._l(t.$store.state.allMusic,(function(t){return s("history-item",{attrs:{music:t}})})),1)],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"history-title"},[s("p",[t._v("最近播放")])])}],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item-page"},[s("div",{staticClass:"music-name",on:{click:t.itemClick}},[s("p",[s("span",{staticClass:"name"},[t._v(t._s(t.music.name))]),s("span",{staticClass:"author"},[t._v(" - "+t._s(t.music.arName))])])]),s("div",{staticClass:"history-icon"},[s("van-icon",{attrs:{name:"like-o"}})],1)])},u=[],m=s("d399"),d={name:"history-item",props:{music:{type:Object,default:{return:{}}}},methods:{itemClick:function(){var t=this;console.log(this.music);var e=this.$store.state;Object(o["h"])(this.music.id).then((function(s){null!=s.data[0].url?(e.isMusic=!0,e.musicSrc=t.music,console.log(t.songDetail.arName),e.allMusic.pushNoRepeat(e.musicSrc)):Object(m["a"])("暂无版权")}))}}},f=d,h=(s("bd7d"),s("2877")),p=Object(h["a"])(f,l,u,!1,null,"68d6b30f",null),v=p.exports,g={name:"musicHistory",components:{HistoryItem:v}},b=g,y=(s("6542"),Object(h["a"])(b,c,r,!1,null,"d560c904",null)),k=y.exports,C={name:"music",components:{MusicHistory:k,MusicBar:a["a"]},data:function(){return{musicSrc:this.$store.state.musicSrc,text:[],musicText:[],trMusicText:[],musicTimeArray:[],isText:!1,isHistory:!1,count:0}},created:function(){var t=this;Object(o["g"])(this.$store.state.musicSrc.id).then((function(e){try{console.log(e),t.musicText=e.lrc.lyric,console.log(t.musicText),t.musicTimeArray=t.musicText.match(/(\d{2}):(\d{2})(\.(\d*))?/g),console.log(t.musicTimeArray),t.musicText=t.musicText.replace(/(\[(\d{2}):(\d{2})(\.(\d*))?\])/g,"").split("\n");var s=t.musicText.length-t.musicTimeArray.length;s&&(t.musicText=t.musicText.slice(s-1)),console.log(t.musicText);try{t.trMusicText=e.tlyric.lyric,t.trMusicText=t.trMusicText.replace(/(\[(\d{2}):(\d{2})(\.(\d*))?\])/g,"").split("\n");for(var i=0;i<t.musicText.length;i++)t.text.push({text:t.musicText[i],trText:t.trMusicText[i]})}catch(n){t.text=null}}catch(n){t.count=1}}))},methods:{showText:function(){this.isText=!this.isText},showComment:function(){this.$router.push("/comment")},isPlay:function(){console.log(this.$store.state.musicSrc.isPlay),this.$store.state.musicSrc.isPlay=!this.$store.state.musicSrc.isPlay},showHistory:function(){this.isHistory=!0},showAuthor:function(){this.$router.push("/singer")},sliderChange:function(t){this.$store.state.audio.currentTime=t/100*this.$store.state.allTime}},computed:{musicTime:{get:function(){return this.$store.state.newTime/this.$store.state.allTime*100},set:function(t){}},isTimeText:function(){var t=this;return function(e){return!(t.$store.state.realMusicTime<=t.musicTimeArray[e]||t.$store.state.realMusicTime>t.musicTimeArray[e+1])}}}},x=C,_=(s("a88a"),Object(h["a"])(x,i,n,!1,null,"223bf4ac",null));e["default"]=_.exports},b31c:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my"},[s("van-popup",{staticClass:"music-page",style:{height:"100%"},attrs:{duration:"0.2",position:"bottom"},model:{value:t.$store.state.isShow,callback:function(e){t.$set(t.$store.state,"isShow",e)},expression:"$store.state.isShow"}},[s("div",[s("top-bar",{staticClass:"top-bar",style:t.topStyle,attrs:{title:t.topStyle?t.userDetail.name:""}})],1),s("div",{staticClass:"user-page"},[s("van-image",{staticClass:"img-back",attrs:{width:"100%",height:"",src:t.userDetail.backUrl}}),s("div",{staticClass:"user-detail"},[s("div",{staticClass:"user-img"},[s("van-image",{attrs:{width:"90px",src:t.userDetail.avatarUrl}})],1),s("div",{staticClass:"user-name"},[s("p",[t._v(" "+t._s(t.userDetail.name)+" "),s("van-tag",{attrs:{round:"",type:"danger"}},[t._v("lv"+t._s(t.userDetail.level))])],1)]),s("div",{staticClass:"signature opacity8"},[s("p",[t._v(t._s(t.userDetail.signature))])]),s("div",{staticClass:"user-fans"},[t._v(" 关注 "),s("span",[t._v(t._s(t.userDetail.follows))]),t._v(" 粉丝 "),s("span",[t._v(t._s(t.userDetail.followeds))])])])],1),s("my-bar",{staticClass:"my-detail",on:{isSticky:t.isSticky},scopedSlots:t._u([{key:"home",fn:function(){return[s("item-cent",{attrs:{title:"听歌排行",describe:"累计听歌数据"},nativeOn:{click:function(e){return t.showSongRanking(e)}}})]},proxy:!0},{key:"my",fn:function(){},proxy:!0}])})],1)],1)},n=[],a=(s("b0c0"),s("d399")),o=s("64df"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tab-page"},[s("van-tabs",{attrs:{animated:!0,swipeable:"",sticky:"","offset-top":"70px","title-active-color":"#ee0a24","title-inactive-color":"#333"},on:{click:t.tabClick,scroll:t.isSticky},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[s("van-tab",{staticClass:"cent",attrs:{title:t.tabBarList[0].title}},[t._t("home")],2),s("van-tab",{staticClass:"cent",attrs:{title:t.tabBarList[1].title}},[t._t("my")],2)],1)],1)},r=[],l={name:"myBar",data:function(){return{active:0,tabBarList:[{name:"home",title:"主页"},{name:"songs",title:"动态"}]}},methods:{tabClick:function(t){},isSticky:function(t){this.$emit("isSticky",t)}}},u=l,m=(s("3622"),s("2877")),d=Object(m["a"])(u,c,r,!1,null,"71a6ba84",null),f=d.exports,h=s("d954"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item-cent"},[s("div",[s("van-image",{staticClass:"img-page",attrs:{width:"65",height:"65",src:t.imgUrl,fit:"cover"}})],1),s("div",{staticClass:"text"},[s("p",{staticClass:"title"},[t._v(t._s(t.title))]),s("p",{staticClass:"describe"},[t._v(t._s(t.describe))])])])},v=[],g={name:"ItemCent",props:{imgUrl:{type:String,default:"https://img.yzcdn.cn/vant/cat.jpeg"},title:{type:String,default:"标题"},describe:{type:String,default:"这里是描四大fff反反复复反反复复反反复复反反复复述"}}},b=g,y=(s("2675"),Object(m["a"])(b,p,v,!1,null,"62522743",null)),k=y.exports,C={name:"my",components:{ItemCent:k,TopBar:h["a"],MyBar:f},data:function(){return{show:!0,showShare:!1,topStyle:"",options:[{name:"微信",icon:"wechat"},{name:"微博",icon:"weibo"},{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"}],userDetail:{name:"",id:"",level:"",backUrl:"",avatarUrl:"",signature:"",followeds:0,follows:0}}},created:function(){var t=this;Object(o["d"])(this.$store.state.myID).then((function(e){console.log(e),t.userDetail.backUrl=e.profile.backgroundUrl,t.userDetail.name=e.profile.nickname,t.userDetail.id=e.profile.userId,t.userDetail.level=e.level,t.userDetail.avatarUrl=e.profile.avatarUrl,t.userDetail.signature=e.profile.signature,t.userDetail.followeds=e.profile.followeds,t.userDetail.follows=e.profile.follows,t.userDetail.follows=e.profile.follows,console.log(t.userDetail.id)}))},methods:{onClickLeft:function(){this.$store.state.isBar=!0,this.$store.state.isMusic=!0,this.$router.back(),Object(a["a"])("返回")},onClickRight:function(){this.showShare=!0,Object(a["a"])("按钮")},onSelect:function(t){Object(a["a"])(t.name),this.showShare=!1},isSticky:function(t){console.log(t),t.isFixed?this.topStyle="background:url("+this.userDetail.backUrl+");background-size: 100%;background-position: bottom;filter: brightness(80%);":this.topStyle=""},showSongRanking:function(){console.log("111"),this.$router.push({name:"listenSong",params:{id:this.userDetail.id}})}}},x=C,_=(s("b7ad"),Object(m["a"])(x,i,n,!1,null,"1b897e61",null));e["default"]=_.exports},b7ad:function(t,e,s){"use strict";var i=s("fe08"),n=s.n(i);n.a},bd7d:function(t,e,s){"use strict";var i=s("a566"),n=s.n(i);n.a},c11f:function(t,e,s){},c1cc:function(t,e,s){},c306:function(t,e,s){},c527:function(t,e,s){},c6a0:function(t,e,s){"use strict";s.d(e,"f",(function(){return n})),s.d(e,"h",(function(){return a})),s.d(e,"g",(function(){return o})),s.d(e,"a",(function(){return c})),s.d(e,"e",(function(){return r})),s.d(e,"i",(function(){return l})),s.d(e,"d",(function(){return u})),s.d(e,"b",(function(){return m})),s.d(e,"c",(function(){return d}));s("b0c0"),s("d4ec");var i=s("1bab");function n(t){return Object(i["a"])({url:"/song/detail",params:{ids:t}})}function a(t){return Object(i["a"])({url:"/song/url",params:{id:t}})}function o(t){return Object(i["a"])({url:"/lyric",params:{id:t}})}function c(t){return Object(i["a"])({url:"/check/music",params:{id:t}})}function r(t,e,s){return Object(i["a"])({url:"/comment/music",params:{id:t,limit:e,offset:s}})}function l(t,e,s,n){return Object(i["a"])({url:"comment/like",params:{id:t,cid:e,t:s,type:n}})}function u(t){return Object(i["a"])({url:"/mv/detail",params:{mvid:t}})}function m(t){return Object(i["a"])({url:"/mv/url",params:{id:t}})}function d(t,e,s){return Object(i["a"])({url:"/comment/mv",params:{id:t,limit:e,offset:s}})}},ca76:function(t,e,s){},d954:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top-bar",style:t.topStyle},[s("van-nav-bar",{staticClass:"music-bar",attrs:{"left-arrow":""},on:{"click-right":t.onClickRight},scopedSlots:t._u([{key:"left",fn:function(){return[s("van-icon",{attrs:{name:"arrow-down",color:"#FFF",size:"25px"},on:{click:t.onClickLeft}})]},proxy:!0},{key:"title",fn:function(){return[s("div",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")])]},proxy:!0},{key:"right",fn:function(){return[s("van-icon",{attrs:{name:"share",color:"#FFF",size:"25px"},on:{click:t.onClickRight}})]},proxy:!0}])}),s("van-share-sheet",{attrs:{title:"立即分享给好友",options:t.options},on:{select:t.onSelect},model:{value:t.showShare,callback:function(e){t.showShare=e},expression:"showShare"}})],1)},n=[],a={name:"topBar",props:{title:{type:String,default:function(){return""}},topStyle:{type:String,default:function(){return""}}},data:function(){return{show:!0,showShare:!1,options:[{name:"微信",icon:"wechat"},{name:"微博",icon:"weibo"},{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"}]}},methods:{onClickLeft:function(){this.$router.back()},onClickRight:function(){this.showShare=!0},onSelect:function(t){this.showShare=!1}}},o=a,c=(s("5b41"),s("2877")),r=Object(c["a"])(o,i,n,!1,null,"1fdce110",null);e["a"]=r.exports},e5c6:function(t,e,s){"use strict";var i=s("06b9"),n=s.n(i);n.a},e9d2:function(t,e,s){},ec53:function(t,e,s){},fb12:function(t,e,s){},fe08:function(t,e,s){}});
//# sourceMappingURL=app.ca5b8c2e.js.map