!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/focus"]=t():e["video/player/focus"]=t()}(globalThis,(()=>(()=>{"use strict";var e,t,o={200:e=>{e.exports=coreApis.spinQuery},605:e=>{e.exports=coreApis.utils}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return o[e](n,n.exports,i),n.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var n=Object.create(null);i.r(n);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&r&&o;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>s[e]=()=>o[e]));return s.default=()=>o,i.d(n,s),n},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{i.d(n,{component:()=>t});const e=coreApis.utils.urls,t=(0,coreApis.componentApis.define.defineComponentMetadata)({name:"playerFocus",displayName:"播放器定位",tags:[componentsTags.video],entry:async e=>{let{settings:{options:t}}=e;const o=document.URL.includes("bangumi")?".bilibili-player":".video-info .video-title .tit",{select:r}=await Promise.resolve().then(i.t.bind(i,200,23)),{playerReady:n}=await Promise.resolve().then(i.t.bind(i,605,23)),s=await r(o);await n(),s&&(s.scrollIntoView(),0!==t.offset&&window.scrollBy(0,t.offset))},description:{"zh-CN":"进入视频 / 番剧页面时, 自动定位到播放器. 注意: 不能和其他影响定位的功能一同使用, 例如自动宽屏. (相关讨论: [#483](https://github.com/the1812/Bilibili-Evolved/issues/483))\r\n\r\n可设置定位时的竖直偏移量, 单位为像素(px)."},options:{offset:{displayName:"定位偏移量",defaultValue:-10}},urlInclude:e.videoAndBangumiUrls,commitHash:"3397e56dc08dc5bcce962efe77f2bbcd634b05e2",coreVersion:"2.6.0"})})(),n=n.component})()));