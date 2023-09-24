!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/view-cover"]=t():e["utils/view-cover"]=t()}(globalThis,(()=>(()=>{"use strict";var e={571:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var n=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("DefaultWidget",{staticClass:"view-cover",attrs:{disabled:!e.imageUrl,name:"查看封面",icon:"mdi-image-outline"},on:{click:function(t){return e.viewCover()}}})};n._withStripped=!0;const i=coreApis.ajax,r=coreApis.observer,s=coreApis.spinQuery,a=coreApis.utils.log,c=coreApis.ui,l=coreApis.componentApis.video.videoInfo;var d=function(e,t,o,n,i,r,s,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=o,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):i&&(c=a?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:l}}(Vue.extend({components:{DefaultWidget:c.DefaultWidget},data:()=>({imageUrl:""}),async mounted(){if(document.URL.includes("live.bilibili.com")){const e=".header-info-ctnr .room-cover, .header-info-ctnr .avatar",t=await(0,s.select)(e);if(!t)return;const o=t.getAttribute("href").match(/space\.bilibili\.com\/([\d]+)/);if(o&&o[1]){const e=`https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld?mid=${o[1]}`,t=await(0,i.getJson)(e);this.imageUrl=t.data.cover.replace("http:","https:")}}else(0,r.videoChange)((async()=>{const{aid:e}=unsafeWindow,t=new l.VideoInfo(e);try{await t.fetchInfo()}catch(e){throw(0,a.logError)(e),e}this.imageUrl=t.coverUrl.replace("http:","https:")}))},methods:{async viewCover(){(0,c.showImage)(this.imageUrl)}}}),n,[],!1,null,null,null);const p=d.exports}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.d(n,{component:()=>i});const e=coreApis.componentApis.define,t=coreApis.utils.urls,i=(0,e.defineComponentMetadata)({name:"viewCover",displayName:"查看封面",tags:[componentsTags.utils,componentsTags.video],entry:none,reload:none,unload:none,widget:{component:()=>Promise.resolve().then(o.bind(o,571)).then((e=>e.default))},description:{"zh-CN":"在视频页面中, 可从功能面板中查看封面."},urlInclude:[...t.videoAndBangumiUrls],commitHash:"35578ac4743833583816929b61354e8208f8de51",coreVersion:"2.8.5"})})(),n=n.component})()));