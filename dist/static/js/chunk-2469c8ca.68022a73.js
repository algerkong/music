(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2469c8ca"],{"6e47f":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"set"},[s("van-popup",{staticClass:"set-page",style:{height:"100%"},attrs:{duration:"0.2",position:"bottom"},model:{value:t.$store.state.isShow,callback:function(e){t.$set(t.$store.state,"isShow",e)},expression:"$store.state.isShow"}},[s("music-bar",{attrs:{"music-name":"设置"}}),s("div",{staticClass:"set-content"},[s("van-form",[s("van-cell-group",[this.$store.state.isLogin?s("van-cell",[s("van-button",{attrs:{type:"danger",block:""},on:{click:t.clickLogOut}},[t._v("退出登录")])],1):t._e(),s("van-cell",{attrs:{title:"单元格",value:"内容",label:"描述信息"}})],1)],1)],1)],1)],1)},o=[],a=s("1741"),c=s("2241"),i=s("64df"),r=s("d399"),l={name:"set",components:{MusicBar:a["a"]},data:function(){return{}},methods:{clickLogOut:function(){c["a"].confirm({title:"退出登陆",message:"是否要退出账号",beforeClose:this.beforeClose})},beforeClose:function(t,e){var s=this;"confirm"===t?Object(i["e"])().then((function(t){200===t.code&&(s.$store.state.isLogin=!1,e(),Object(r["a"])("退出登录"))})):e()}}},u=l,f=(s("9d68"),s("2877")),b=Object(f["a"])(u,n,o,!1,null,"ff051b1a",null);e["default"]=b.exports},9131:function(t,e,s){},"9d68":function(t,e,s){"use strict";var n=s("9131"),o=s.n(n);o.a}}]);
//# sourceMappingURL=chunk-2469c8ca.68022a73.js.map