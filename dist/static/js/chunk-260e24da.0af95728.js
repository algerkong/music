(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-260e24da"],{"458f":function(t,a,o){},bd81:function(t,a,o){"use strict";var e=o("458f"),n=o.n(e);n.a},dbd0:function(t,a,o){"use strict";o.r(a);var e=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("van-popup",{staticClass:"mv-page",style:{height:"100%"},attrs:{duration:"0.2",position:"bottom"},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[o("top-bar",{attrs:{title:t.mvName}}),o("div",{staticClass:"video-page"},[o("video",{staticClass:"mv-video",attrs:{controls:"",autoplay:"",src:t.mvSrc,poster:t.mvBackground}})]),o("div",{staticClass:"content"}),o("van-form",[o("van-collapse",{model:{value:t.activeNames,callback:function(a){t.activeNames=a},expression:"activeNames"}},[o("van-collapse-item",{attrs:{name:"1"},scopedSlots:t._u([{key:"title",fn:function(){return[o("div",{staticClass:"mv-title"},[o("p",[o("span",{staticClass:"name"},[t._v(t._s(t.mvName))]),o("span",{on:{click:t.showSinger}},[t._v(" - "+t._s(t.author))])])]),o("div",{staticClass:"mv-count"},[o("span",[t._v(t._s(t.playCount)+"次观看")])])]},proxy:!0}])},[o("div",{staticClass:"mv-describe"},[o("p",[t._v(t._s(t.mvTime)+" 发布")]),o("p",[t._v(t._s(t.text))]),o("p",[t._v(t._s(t.desc))])])])],1),o("van-grid",[o("van-grid-item",{attrs:{icon:"good-job-o",text:t.allCommentCount.toString()}}),o("van-grid-item",{attrs:{icon:"star-o",text:t.count.subCount.toString()}}),o("van-grid-item",{attrs:{icon:"chat-o",text:t.count.commentCount.toString()}}),o("van-grid-item",{attrs:{icon:"share",text:t.count.shareCount.toString()}})],1),o("div",[o("van-sticky",{attrs:{"offset-top":"232px"}},[o("div",{staticClass:"title"},[o("p",[t._v("评论区")])])]),o("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.comments,(function(a,e){return o("van-cell",{key:e*(t.page+1)},[o("comment-item",{attrs:{comment:a}})],1)})),1)],1)],1)],1)],1)},n=[],s=(o("b0c0"),o("c6a0")),i=o("d954"),c=o("74e9"),m={name:"mv",components:{CommentItem:c["a"],TopBar:i["a"]},data:function(){return{show:!0,mvID:"",activeNames:["0"],loading:!1,finished:!1,page:1,comments:[],allCommentCount:"",mvSrc:"",mvBackground:"",mvName:"",author:"",text:"",playCount:"",arID:"",mvTime:"",desc:"",count:{subCount:"",commentCount:"",shareCount:""}}},created:function(){var t=this;this.mvID=this.$route.params.id;var a=this.$store.state;a.musicSrc.isPlay=!1,Object(s["d"])(this.mvID).then((function(a){console.log(t.mvID),console.log(a),t.mvSrc=a.data.url})),Object(s["f"])(this.mvID).then((function(a){console.log(a),t.mvBackground=a.data.cover,t.mvName=a.data.name,t.author=a.data.artistName,t.playCount=a.data.playCount,t.text=a.data.briefDesc,t.arID=a.data.artistId,t.mvTime=a.data.publishTime,t.desc=a.data.desc,t.count={subCount:a.data.subCount,commentCount:a.data.commentCount,shareCount:a.data.shareCount}})),setTimeout((function(){console.log(a.isMv)}),2e3)},methods:{showSinger:function(){this.$store.state.arID=this.arID,this.$store.state.isSinger=!0,this.$router.push("/singer")},onLoad:function(){var t=this;Object(s["e"])(this.mvID,30,30*this.page).then((function(a){console.log(a),t.comments.push.apply(t.comments,a.comments),console.log(t.comments),t.allCommentCount=a.total,t.loading=!1,t.page++,t.comments.length>=t.allCommentCount&&(t.finished=!0)}))}}},r=m,l=(o("bd81"),o("2877")),u=Object(l["a"])(r,e,n,!1,null,"1cb6099e",null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-260e24da.0af95728.js.map