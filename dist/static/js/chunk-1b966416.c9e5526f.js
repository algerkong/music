(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b966416"],{c95d:function(t,e,a){"use strict";var n=a("e28f"),c=a.n(n);c.a},dbd0:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("video",{staticClass:"mv-video",attrs:{controls:"",autoplay:"",src:t.mvSrc}}),a("div",[a("p",[a("span",[t._v(t._s(t.mvName))]),t._v(t._s(t.author)),a("span")])]),a("div",[a("p",[t._v(t._s(t.text))])])])},c=[],s=(a("b0c0"),a("c6a0")),o={name:"mv",data:function(){return{mvSrc:"",mvName:"",author:"",text:""}},created:function(){var t=this;Object(s["b"])(this.$store.state.mvID).then((function(e){console.log(t.$store.state.mvID),console.log(e),t.mvSrc=e.data.url})),Object(s["c"])(this.$store.state.mvID).then((function(e){console.log(e),t.mvName=e.data.name,t.author=e.data.artistName,t.text=e.data.briefDesc}))}},r=o,i=(a("c95d"),a("2877")),v=Object(i["a"])(r,n,c,!1,null,"3b28c4cf",null);e["default"]=v.exports},e28f:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1b966416.c9e5526f.js.map