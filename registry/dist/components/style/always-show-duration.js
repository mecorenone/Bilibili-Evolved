!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/always-show-duration"]=t():e["style/always-show-duration"]=t()}(globalThis,(()=>(()=>{var e,t,o={626:(e,t,o)=>{var r=o(218)((function(e){return e[1]}));r.push([e.id,".watchlater-card .duration,\n.time-group-item .duration,\n.favorite-card .duration,\n.video-card .duration {\n  opacity: 1 !important;\n}",""]),e.exports=r},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,o,r){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var n={};if(r)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(n[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&n[s[0]]||(o&&(s[2]?s[2]="".concat(o," and ").concat(s[2]):s[2]=o),t.push(s))}},t}},620:(e,t,o)=>{var r=o(626);r&&r.__esModule&&(r=r.default),e.exports="string"==typeof r?r:r.toString()}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={id:e,exports:{}};return o[e](i,i.exports,n),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&r&&o;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,n.d(i,a),i},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";n.d(i,{component:()=>t});const e=coreApis.componentApis.styledComponent,t=(0,coreApis.componentApis.define.defineComponentMetadata)({...(0,e.toggleStyle)("alwaysShowDuration",(()=>Promise.resolve().then(n.t.bind(n,620,23)))),displayName:"总是显示视频时长",description:{"zh-CN":"使脚本展示的各种视频卡片中的时长无需鼠标经过也能一直显示."},tags:[componentsTags.video,componentsTags.style],commitHash:"4e2e07b904f73091e20b91d560e51c23e6adf8de",coreVersion:"2.8.6"})})(),i=i.component})()));