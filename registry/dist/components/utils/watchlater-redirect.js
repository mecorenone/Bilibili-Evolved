!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/watchlater-redirect"]=t():e["utils/watchlater-redirect"]=t()}(globalThis,(()=>(()=>{"use strict";var e,t,o={952:e=>{e.exports=coreApis.componentApis.video.watchlater},391:e=>{e.exports=coreApis.observer},200:e=>{e.exports=coreApis.spinQuery}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return o[e](n,n.exports,i),n.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var n=Object.create(null);i.r(n);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&r&&o;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,i.d(n,a),n},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{i.d(n,{component:()=>e});const e=(0,coreApis.componentApis.define.defineComponentMetadata)({name:"watchlaterRedirect",displayName:"稍后再看重定向",description:{"zh-CN":"将稍后再看的链接重定向为普通播放网址."},entry:async e=>{let{settings:t}=e;if(t.options.page){const{select:e}=await Promise.resolve().then(i.t.bind(i,200,23)),{childList:t}=await Promise.resolve().then(i.t.bind(i,391,23)),{getWatchlaterList:o}=await Promise.resolve().then(i.t.bind(i,952,23)),r=await o(!0),n=await e(".watch-later-list .list-box > span");if(!n)return;const a=(e,t)=>{try{const o=r[t],{bvid:i,cid:n,pages:a}=o,c=a.find((e=>e.cid===n))?.page??1,s=c>1?`https://www.bilibili.com/video/${i}?p=${c}`:`https://www.bilibili.com/video/${i}`,l=e.querySelector(".av-pic");l.target="_blank",l.href=s;const p=e.querySelector(".av-about .t");p.target="_blank",p.href=s}catch(o){console.error(`[watchlater redirect] error at index ${t}`,e,o)}},c=()=>{n.querySelectorAll(".av-item").forEach(a)};t(n,(e=>{e.forEach((e=>{e.removedNodes.forEach((e=>{if(e instanceof HTMLElement&&!e.classList.contains("itemlist-move")){const t=parseInt(dq(e,".key").textContent)-1;console.log("remove index",t),r.splice(t,1)}}))})),c()}))}},options:{page:{displayName:"重定向页面",defaultValue:!0},navbar:{displayName:"重定向顶栏",defaultValue:!0}},urlInclude:["https://www.bilibili.com/watchlater/#/list"],tags:[componentsTags.utils,componentsTags.video],commitHash:"3397e56dc08dc5bcce962efe77f2bbcd634b05e2",coreVersion:"2.6.0"})})(),n=n.component})()));