(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-534a62aa"],{"35ec":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"list"},[a("van-popup",{staticClass:"music-page",style:{height:"100%"},attrs:{duration:"0.2",position:"bottom"},model:{value:t.$store.state.isShow,callback:function(s){t.$set(t.$store.state,"isShow",s)},expression:"$store.state.isShow"}},[a("div",[a("top-bar",{staticClass:"top-bar",style:t.topStyle,attrs:{title:"歌单"}})],1),a("div",{staticClass:"img-page"},[a("van-image",{attrs:{src:t.img}})],1),a("van-form",[t._l(t.song,(function(s,i){return a("van-cell",{key:s.al.name},[a("div",{staticClass:"hot-item",on:{click:function(a){return t.itemClick(s.al.id)}}},[a("div",{staticClass:"item-count"},[a("span",[t._v(t._s(i+1))])]),a("div",{staticClass:"item-data"},[a("div",{staticClass:"word"},[a("p",[a("span",[t._v(t._s(s.name))]),1===s.alia.length?a("span",{staticClass:"gray"},[t._v(" ("+t._s(s.alia[0])+") ")]):t._e()])]),a("div",{staticClass:"content"},[a("p",[t._l(s.ar,(function(i,n){return a("span",[t._v(" "+t._s(i.name)+" "),s.ar.length!==n+1?a("i",[t._v("/")]):t._e()])})),a("span",[t._v(" - "+t._s(s.al.name))])],2)])]),a("div",{staticClass:"item-score"},[s.mv?a("van-icon",{attrs:{name:"play-circle-o",size:"25",color:"#6f6f6f"},on:{click:function(a){return t.showMV(s.mv)}}}):t._e()],1)])])})),a("div",{staticClass:"content50"})],2)],1)],1)},n=[],e=a("c6a0"),o=a("d954"),c={name:"songList",components:{TopBar:o["a"]},data:function(){return{id:"",img:"",title:"",song:[],topStyle:""}},created:function(){var t=this;this.id=this.$route.params.id,Object(e["i"])(this.id).then((function(s){t.img=s.playlist.coverImgUrl,t.title=s,t.song=s.playlist.tracks,console.log(s),t.topStyle="background-image:url("+s.playlist.coverImgUrl+");background-size:100%;background-position:top;filter: brightness(80%);"}))},methods:{itemClick:function(t){console.log(t)},showMV:function(t){this.$router.push({name:"mv",params:{id:t}})}},mounted:function(){}},l=c,r=(a("52bb"),a("2877")),u=Object(r["a"])(l,i,n,!1,null,"7c98aa9d",null);s["default"]=u.exports},"52bb":function(t,s,a){"use strict";var i=a("7984"),n=a.n(i);n.a},7984:function(t,s,a){}}]);
//# sourceMappingURL=chunk-534a62aa.7f4775c5.js.map