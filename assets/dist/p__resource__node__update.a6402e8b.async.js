(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"0U+A":function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("0Owb"),r=(a("+L6B"),a("2/Rp")),c=(a("5NDa"),a("5rEg")),o=(a("miYZ"),a("tsqr")),l=a("k1fw"),i=(a("y8nQ"),a("Vl3Y")),s=a("tJVT"),u=a("q1tI"),p=a.n(u),d=a("9kvl"),m={labelCol:{xs:{span:18},sm:{span:8}},wrapperCol:{xs:{span:18},sm:{span:16}}},f={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};function b(e){var t=i["a"].useForm(),a=Object(s["a"])(t,1),u=a[0],b=e.initialValues,v=e.request,y=e.id,h=function(e){v(Object(l["a"])(Object(l["a"])({},e),{},{id:parseInt(y)})).then((function(e){return 0!==e.code?(o["a"].error(e.msg),!1):(o["a"].success(e.msg),d["F"].goBack(),!0)}))};return p.a.createElement(i["a"],Object(n["a"])({},m,{form:u,name:"register",onFinish:h,scrollToFirstError:!0,initialValues:b}),p.a.createElement(i["a"].Item,{name:"host_name",label:"\u673a\u5668\u540d\u79f0",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u673a\u5668\u540d\u79f0"}]},p.a.createElement(c["a"],null)),p.a.createElement(i["a"].Item,f,p.a.createElement(r["default"],{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"),p.a.createElement(r["default"],{style:{marginLeft:8},onClick:function(){d["F"].goBack()}},"\u8fd4\u56de")))}},IzEo:function(e,t,a){"use strict";a("cIOH"),a("lnY3"),a("Znn+"),a("14J3"),a("jCWc")},PcFE:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return p})),a.d(t,"a",(function(){return m})),a.d(t,"e",(function(){return b})),a.d(t,"b",(function(){return y}));var n=a("k1fw"),r=a("WmNS"),c=a.n(r),o=a("9og8"),l=a("t3Un"),i=a("Qyje");function s(e){return u.apply(this,arguments)}function u(){return u=Object(o["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l["a"])("/api/admin/resource/node/info?".concat(Object(i["stringify"])(t))));case 1:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return d=Object(o["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l["a"])("/api/admin/resource/node/list?".concat(Object(i["stringify"])(t))));case 1:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function m(e){return f.apply(this,arguments)}function f(){return f=Object(o["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l["a"])("/api/admin/resource/node/create",{method:"POST",data:Object(n["a"])({},t)}));case 1:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function b(e){return v.apply(this,arguments)}function v(){return v=Object(o["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l["a"])("/api/admin/resource/node/update",{method:"POST",data:Object(n["a"])({},t)}));case 1:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function y(e){return h.apply(this,arguments)}function h(){return h=Object(o["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l["a"])("/api/admin/resource/node/delete",{method:"POST",data:Object(n["a"])({},t)}));case 1:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}},UOzn:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));a("IzEo");var n=a("bx4M"),r=a("WmNS"),c=a.n(r),o=(a("miYZ"),a("tsqr")),l=a("9og8"),i=a("fWQN"),s=a("mtLc"),u=a("yKVA"),p=a("879j"),d=a("Hx5s"),m=a("q1tI"),f=a.n(m),b=a("PcFE"),v=a("0U+A"),y=function(e){Object(u["a"])(a,e);var t=Object(p["a"])(a);function a(){var e;Object(i["a"])(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r)),e.state={data:null},e}return Object(s["a"])(a,[{key:"componentDidMount",value:function(){var e=Object(l["a"])(c.a.mark((function e(){var t,a=this;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.props.location.query.id,Object(b["c"])({id:t}).then((function(e){return 0!==e.code?(o["a"].error(e.msg),!1):(a.setState({data:e.data,id:t}),!0)}));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.id;return f.a.createElement(d["PageHeaderWrapper"],null,f.a.createElement(n["a"],null,t&&f.a.createElement(v["a"],{initialValues:t,request:b["e"],id:a})))}}]),a}(f.a.Component)},bx4M:function(e,t,a){"use strict";var n=a("q1tI"),r=a("TSYQ"),c=a.n(r),o=a("BGR+"),l=a("H84U");function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},p=function(e){return n["createElement"](l["a"],null,(function(t){var a=t.getPrefixCls,r=e.prefixCls,o=e.className,l=e.hoverable,p=void 0===l||l,d=u(e,["prefixCls","className","hoverable"]),m=a("card",r),f=c()("".concat(m,"-grid"),o,s({},"".concat(m,"-grid-hoverable"),p));return n["createElement"]("div",i({},d,{className:f}))}))},d=p;function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}var f=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},b=function(e){return n["createElement"](l["a"],null,(function(t){var a=t.getPrefixCls,r=e.prefixCls,o=e.className,l=e.avatar,i=e.title,s=e.description,u=f(e,["prefixCls","className","avatar","title","description"]),p=a("card",r),d=c()("".concat(p,"-meta"),o),b=l?n["createElement"]("div",{className:"".concat(p,"-meta-avatar")},l):null,v=i?n["createElement"]("div",{className:"".concat(p,"-meta-title")},i):null,y=s?n["createElement"]("div",{className:"".concat(p,"-meta-description")},s):null,h=v||y?n["createElement"]("div",{className:"".concat(p,"-meta-detail")},v,y):null;return n["createElement"]("div",m({},u,{className:d}),b,h)}))},v=b,y=a("ZTPi"),h=a("BMrR"),O=a("kPKH"),g=a("3Nzz");function E(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},j.apply(this,arguments)}var w=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function N(e){var t=e.map((function(t,a){return n["createElement"]("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},n["createElement"]("span",null,t))}));return t}var x=function(e){var t,a,r,i=n["useContext"](l["b"]),s=i.getPrefixCls,u=i.direction,p=n["useContext"](g["b"]),m=function(t){e.onTabChange&&e.onTabChange(t)},f=function(){var t;return n["Children"].forEach(e.children,(function(e){e&&e.type&&e.type===d&&(t=!0)})),t},b=e.prefixCls,v=e.className,x=e.extra,k=e.headStyle,P=void 0===k?{}:k,C=e.bodyStyle,S=void 0===C?{}:C,T=e.title,I=e.loading,q=e.bordered,z=void 0===q||q,B=e.size,K=e.type,A=e.cover,F=e.actions,V=e.tabList,Y=e.children,H=e.activeTabKey,L=e.defaultActiveTabKey,M=e.tabBarExtraContent,U=e.hoverable,W=e.tabProps,J=void 0===W?{}:W,Q=w(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),Z=s("card",b),R=0===S.padding||"0px"===S.padding?{padding:24}:void 0,D=n["createElement"]("div",{className:"".concat(Z,"-loading-content"),style:R},n["createElement"](h["a"],{gutter:8},n["createElement"](O["a"],{span:22},n["createElement"]("div",{className:"".concat(Z,"-loading-block")}))),n["createElement"](h["a"],{gutter:8},n["createElement"](O["a"],{span:8},n["createElement"]("div",{className:"".concat(Z,"-loading-block")})),n["createElement"](O["a"],{span:15},n["createElement"]("div",{className:"".concat(Z,"-loading-block")}))),n["createElement"](h["a"],{gutter:8},n["createElement"](O["a"],{span:6},n["createElement"]("div",{className:"".concat(Z,"-loading-block")})),n["createElement"](O["a"],{span:18},n["createElement"]("div",{className:"".concat(Z,"-loading-block")}))),n["createElement"](h["a"],{gutter:8},n["createElement"](O["a"],{span:13},n["createElement"]("div",{className:"".concat(Z,"-loading-block")})),n["createElement"](O["a"],{span:9},n["createElement"]("div",{className:"".concat(Z,"-loading-block")}))),n["createElement"](h["a"],{gutter:8},n["createElement"](O["a"],{span:4},n["createElement"]("div",{className:"".concat(Z,"-loading-block")})),n["createElement"](O["a"],{span:3},n["createElement"]("div",{className:"".concat(Z,"-loading-block")})),n["createElement"](O["a"],{span:16},n["createElement"]("div",{className:"".concat(Z,"-loading-block")})))),G=void 0!==H,_=j(j({},J),(t={},E(t,G?"activeKey":"defaultActiveKey",G?H:L),E(t,"tabBarExtraContent",M),t)),X=V&&V.length?n["createElement"](y["a"],j({size:"large"},_,{className:"".concat(Z,"-head-tabs"),onChange:m}),V.map((function(e){return n["createElement"](y["a"].TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(T||x||X)&&(r=n["createElement"]("div",{className:"".concat(Z,"-head"),style:P},n["createElement"]("div",{className:"".concat(Z,"-head-wrapper")},T&&n["createElement"]("div",{className:"".concat(Z,"-head-title")},T),x&&n["createElement"]("div",{className:"".concat(Z,"-extra")},x)),X));var $=A?n["createElement"]("div",{className:"".concat(Z,"-cover")},A):null,ee=n["createElement"]("div",{className:"".concat(Z,"-body"),style:S},I?D:Y),te=F&&F.length?n["createElement"]("ul",{className:"".concat(Z,"-actions")},N(F)):null,ae=Object(o["a"])(Q,["onTabChange"]),ne=B||p,re=c()(Z,v,(a={},E(a,"".concat(Z,"-loading"),I),E(a,"".concat(Z,"-bordered"),z),E(a,"".concat(Z,"-hoverable"),U),E(a,"".concat(Z,"-contain-grid"),f()),E(a,"".concat(Z,"-contain-tabs"),V&&V.length),E(a,"".concat(Z,"-").concat(ne),ne),E(a,"".concat(Z,"-type-").concat(K),!!K),E(a,"".concat(Z,"-rtl"),"rtl"===u),a));return n["createElement"]("div",j({},ae,{className:re}),r,$,ee,te)};x.Grid=d,x.Meta=v;t["a"]=x},lnY3:function(e,t,a){}}]);