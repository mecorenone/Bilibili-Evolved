!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/screenshot"]=t():e["video/player/screenshot"]=t()}(self,(function(){return function(){var e,t,n={914:function(e,t,n){var i=n(645)((function(e){return e[1]}));i.push([e.id,'.video-screenshot-thumbnail {\n  margin: var(--thumbnail-margin-vertical) var(--thumbnail-margin-horizontal);\n  position: relative;\n  transition: 0.35s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  width: var(--screenshot-width);\n  height: var(--screenshot-height);\n  background-color: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@keyframes spinner {\nto {\n    transform: translate(-50%, -50%) rotate(360deg);\n}\n}\n.video-screenshot-thumbnail img {\n  max-width: var(--screenshot-width);\n  max-height: var(--screenshot-height);\n  display: block;\n  background-color: black;\n}\n.video-screenshot-thumbnail .loading::before {\n  content: "";\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(0deg);\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 3px solid rgba(136,136,136,0.53333);\n  border-top-color: var(--theme-color);\n  animation: spinner 0.6s linear infinite;\n}\n.video-screenshot-thumbnail.video-screenshot-list-leave-active {\n  position: absolute;\n  transition: 0.35s cubic-bezier(0.6, -0.28, 0.74, 0.05);\n}\n.video-screenshot-thumbnail .mask {\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0,0,0,0.53333);\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  transition: none;\n  pointer-events: none;\n}\n.video-screenshot-thumbnail .mask .time {\n  color: #fff;\n  position: absolute;\n  bottom: 4px;\n  left: 8px;\n  font-size: 10pt;\n}\n.video-screenshot-thumbnail .mask button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0,0,0,0.66667);\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  font-size: 24pt;\n  cursor: pointer;\n  width: 48px;\n  height: 48px;\n  pointer-events: initial;\n  outline: none !important;\n}\n.video-screenshot-thumbnail:hover .mask {\n  opacity: 1;\n}',""]),e.exports=i},97:function(e,t,n){var i=n(645)((function(e){return e[1]}));i.push([e.id,".video-screenshot-container {\n  position: relative;\n  --screenshot-width: 240px;\n  --screenshot-width-negative: calc(0px - var(--screenshot-width));\n  --screenshot-height: 135px;\n  --thumbnail-margin-vertical: 12px;\n  --thumbnail-margin-horizontal: 12px;\n  --screenshot-list-width: calc(\n    2 * var(--thumbnail-margin-horizontal) + var(--screenshot-width)\n  );\n}\n.video-screenshot-disable .video-screenshot-container {\n  display: none;\n}\n.video-screenshot-container .video-screenshot-batch {\n  position: fixed;\n  bottom: var(--thumbnail-margin-vertical);\n  right: var(--thumbnail-margin-horizontal);\n  z-index: 20000;\n  width: var(--screenshot-list-width);\n  display: flex;\n  align-items: center;\n  grid-gap: 16px;\n  gap: 16px;\n  justify-content: space-between;\n}\n.video-screenshot-container .video-screenshot-batch button {\n  background: rgba(0,0,0,0.8);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  outline: 0 !important;\n  padding: 8px 12px;\n  display: flex;\n  align-items: center;\n  grid-gap: 8px;\n  gap: 8px;\n  justify-content: center;\n  flex-grow: 1;\n}\n.video-screenshot-container .video-screenshot-batch button .be-icon {\n  margin-right: 4px;\n}\n.video-screenshot-container .video-screenshot-list {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 20000;\n  margin: var(--thumbnail-margin-vertical) var(--thumbnail-margin-horizontal);\n  max-height: calc(100% - 3 * var(--thumbnail-margin-vertical) - 37px);\n  width: var(--screenshot-list-width);\n  background-color: rgba(0,0,0,0.8);\n  border-radius: 8px;\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n}\n.video-screenshot-container .video-screenshot-list::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\n.video-screenshot-container .video-screenshot-list > * {\n  pointer-events: initial;\n}\n.video-screenshot-container .video-screenshot-list-enter {\n  opacity: 0;\n  transform: translateX(var(--screenshot-width-negative));\n}\n.video-screenshot-container .video-screenshot-list-leave-to {\n  opacity: 0;\n  transform: translateX(var(--screenshot-width));\n}",""]),e.exports=i},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);i&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],c=t.base?r[0]+t.base:r[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var h=a(l),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==h?(s[h].references++,s[h].updater(u)):s.push({identifier:l,updater:m(u,t),references:1}),i.push(l)}return i}function d(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,h=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=h(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function v(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,f=0;function m(e,t){var n,i,o;if(t.singleton){var r=f++;n=p||(p=d(t)),i=u.bind(null,n,r,!1),o=u.bind(null,n,r,!0)}else n=d(t),i=v.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=a(n[i]);s[o].references--}for(var r=c(e,t),d=0;d<n.length;d++){var l=a(n[d]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}n=r}}}},155:function(e){"use strict";e.exports="启用视频快速截图, 将在播放器的时间右边增加一个截图按钮. 装有 `快捷键扩展` 时支持键盘快捷键<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>C</kbd>."},730:function(e){"use strict";e.exports=coreApis.componentApis.video.playerAgent},729:function(e){"use strict";e.exports=coreApis.utils.log}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,exports:{}};return n[e](r,r.exports,o),r.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"==typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"==typeof n.then)return n}var r=Object.create(null);o.r(r);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&i&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){s[e]=function(){return n[e]}}));return s.default=function(){return n},o.d(r,s),r},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";o.d(r,{component:function(){return E}});var e=coreApis.componentApis.video.videoControlBar,t=coreApis.utils,n=coreApis.utils.urls,i=o(730),s=coreApis.utils.title;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c=document.createElement("canvas");class d{constructor(e,t,n=!1){this.video=e,this.videoTime=t,this.withDanmaku=n,a(this,"url",""),a(this,"blob",void 0),a(this,"timeStamp",(new Date).getTime()),this.createUrl()}async createUrl(){const{logError:e}=await Promise.resolve().then(o.t.bind(o,729,23));if(this.withDanmaku){const e=dq(i.playerAgent.query.video.wrap.selector).getBoundingClientRect(),t=e.width/e.height;t>=this.video.videoWidth/this.video.videoHeight?(c.height=this.video.videoHeight,c.width=this.video.videoHeight*t):(c.width=this.video.videoWidth,c.height=this.video.videoWidth/t)}else c.width=this.video.videoWidth,c.height=this.video.videoHeight;const t=c.getContext("2d");if(null===t)return void e("视频截图失败: canvas 未创建或创建失败.");const n=(c.width-this.video.videoWidth)/2,r=(c.height-this.video.videoHeight)/2;if(t.drawImage(this.video,n,r),this.withDanmaku){const e=dq("canvas.bilibili-player-video-danmaku, canvas.dm-canvas");null!==e&&t.drawImage(e,0,0,c.width,c.height)}try{c.toBlob((t=>{null!==t?(this.blob=t,this.url=URL.createObjectURL(t)):e("视频截图失败: 创建 blob 失败.")}),"image/png")}catch(t){e("视频截图失败: 操作被浏览器阻止. 这通常发生于电影的试看片段, 请在正片尝试使用截图功能.")}}get filename(){return`${(0,s.getFriendlyTitle)()} @${this.time.replace(/:/g,"-")} ${this.timeStamp.toString()}.png`}get id(){return this.videoTime.toString()+this.timeStamp.toString()}get time(){const e=Math.trunc(this.videoTime/3600).toString(),t=Math.trunc(this.videoTime/60).toString(),n=(this.videoTime%60).toFixed(2);return"0"===e?`${t.padStart(2,"0")}:${n.padStart(5,"0")}`:`${e}:${t.padStart(2,"0")}:${n.padStart(5,"0")}`}revoke(){URL.revokeObjectURL(this.url)}}var l=o(155),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video-screenshot-container"},[n("transition-group",{staticClass:"video-screenshot-list",attrs:{name:"video-screenshot-list",tag:"div"}},e._l(e.screenshots,(function(t){return n("VideoScreenshot",{key:t.id,attrs:{filename:t.filename,"object-url":t.url,time:t.time},on:{discard:function(n){return e.discard(t)}}})})),1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showBatch,expression:"showBatch"}],staticClass:"video-screenshot-batch"},[n("button",{on:{click:e.saveAll}},[n("VIcon",{attrs:{size:18,icon:"mdi-content-save"}}),e._v("全部保存\n    ")],1),e._v(" "),n("button",{on:{click:e.discardAll}},[n("VIcon",{attrs:{size:18,icon:"mdi-delete-forever"}}),e._v("全部丢弃\n    ")],1)])],1)};h._withStripped=!0;var u=coreApis.download,v=coreApis.ui,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video-screenshot-thumbnail"},[e.objectUrl?n("img",{attrs:{src:e.objectUrl}}):e._e(),e._v(" "),e.objectUrl?n("div",{staticClass:"mask"},[n("a",{ref:"link",staticClass:"link",staticStyle:{display:"none"},attrs:{href:e.objectUrl,download:e.filename}}),e._v(" "),n("button",{staticClass:"save",attrs:{title:"保存"},on:{click:e.save}},[n("VIcon",{attrs:{size:28,icon:"mdi-content-save-outline"}})],1),e._v(" "),n("button",{staticClass:"discard",attrs:{title:"丢弃"},on:{click:e.discard}},[n("VIcon",{attrs:{size:28,icon:"mdi-delete-forever-outline"}})],1),e._v(" "),n("span",{staticClass:"time"},[e._v(e._s(e.time))])]):n("div",{staticClass:"loading",on:{click:e.discard}})])};p._withStripped=!0;var f=Vue.extend({components:{VIcon:v.VIcon},props:{objectUrl:{type:String,required:!0},filename:{type:String,required:!0},time:{type:String,required:!0}},methods:{discard(){this.$emit("discard")},save(){this.$refs.link.click(),this.discard()}}}),m=o(379),b=o.n(m),g=o(914),y=o.n(g),w={insert:"head",singleton:!1};b()(y(),w),y().locals;function x(e,t,n,i,o,r,s,a){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=c):o&&(c=a?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(e,t){return c.call(t),l(e,t)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:d}}var k=x(f,p,[],!1,null,null,null);k.options.__file="registry/lib/components/video/player/screenshot/VideoScreenshot.vue";var _=k.exports,S=Vue.extend({components:{VIcon:v.VIcon,VideoScreenshot:_},data:()=>({screenshots:[]}),computed:{showBatch(){return this.screenshots.length>=2}},methods:{discard(e){this.screenshots.splice(this.screenshots.indexOf(e),1),e.revoke()},async saveAll(){const e=new u.DownloadPackage;this.screenshots.forEach((t=>{e.add(t.filename,t.blob,{date:new Date(t.timeStamp)})})),await e.emit(`${(0,s.getFriendlyTitle)()}.zip`),this.discardAll()},discardAll(){this.screenshots.forEach((e=>e.revoke())),this.screenshots=[]}}}),C=o(97),j=o.n(C),A={insert:"head",singleton:!1},T=(b()(j(),A),j().locals,x(S,h,[],!1,null,null,null));T.options.__file="registry/lib/components/video/player/screenshot/VideoScreenshotContainer.vue";var O=T.exports;const V="video-screenshot-disable",E={name:"videoScreenshot",displayName:"启用视频截图",tags:[componentsTags.video],entry:async()=>{let n;(0,e.addControlBarButton)({name:"takeScreenshot",displayName:"截图",icon:"mdi-camera",order:0,action:async e=>{const{playerAgent:i}=await Promise.resolve().then(o.t.bind(o,730,23)),r=await i.query.video.element();if(r instanceof HTMLVideoElement){const i=((e,t=!1)=>{const n=e.currentTime;return new d(e,n,t)})(r,e.shiftKey);n||(n=(0,t.mountVueComponent)(O),document.body.insertAdjacentElement("beforeend",n.$el)),n.screenshots.unshift(i)}else{const{logError:e}=await Promise.resolve().then(o.t.bind(o,729,23));e("视频截图失败: 无法定位视频元素, 请尝试右击视频两次后另存为图片, 或将播放策略改为 AV1 或 AVC.")}}})},description:{"zh-CN":l},urlInclude:n.playerUrls,reload:()=>document.body.classList.remove(V),unload:()=>document.body.classList.add(V),plugin:{displayName:"视频截图 - 快捷键支持",setup:({addData:e})=>{e("keymap.actions",(e=>{e.takeScreenshot={displayName:"视频截图",run:e=>{const{clickElement:t}=e;return t('.be-video-control-bar-extend [data-name="takeScreenshot"]',e)}}})),e("keymap.presets",(e=>{e.takeScreenshot="ctrl [shift] alt c"}))}},commitHash:"c55e9dc942d5f6236182135d5d5c8c2bdb506ed7",coreVersion:"2.1.9"}}(),r=r.component}()}));