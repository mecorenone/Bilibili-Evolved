!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["live/download-records"]=o():e["live/download-records"]=o()}(globalThis,(()=>(()=>{"use strict";var e={735:(e,o,t)=>{t.r(o),t.d(o,{default:()=>l});var n=function(){var e=this,o=e.$createElement;return(e._self._c||o)("DefaultWidget",{staticClass:"download-live-records",attrs:{disabled:e.disabled,name:"下载录像",icon:"mdi-download"},on:{click:function(o){return e.download()}}})};n._withStripped=!0;const r=coreApis.ui,i=coreApis.ajax,d=coreApis.toast,s=coreApis.utils.log;var a=function(e,o,t,n,r,i,d,s){var a,l="function"==typeof e?e.options:e;if(o&&(l.render=o,l.staticRenderFns=t,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),d?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(d)},l._ssrRegister=a):r&&(a=s?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),a)if(l.functional){l._injectStyles=a;var c=l.render;l.render=function(e,o){return a.call(o),c(e,o)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,a):[a]}return{exports:e,options:l}}(Vue.extend({components:{DefaultWidget:r.DefaultWidget},data:()=>({disabled:!1}),methods:{async download(){try{this.disabled=!0;const e=document.URL.replace(window.location.search,"").match(/^https:\/\/live\.bilibili\.com\/record\/(.+)/);if(!e)return void(0,s.logError)(new Error(`获取录像ID失败: ${document.URL}`));const o=e[1],t=await(0,i.getJson)(`https://api.live.bilibili.com/xlive/web-room/v1/record/getLiveRecordUrl?rid=${o}&platform=html5`);if(0!==t.code)return void(0,s.logError)(new Error(`获取录像链接失败: ${t.message}`));const n=t.data.list.map((e=>e.url));d.Toast.success(n.map((e=>`<a class="download-link" target="_blank" href="${e}">${e}</a>`)).join("\n"),"下载录像")}finally{this.disabled=!1}}}}),n,[],!1,null,null,null);a.options.__file="registry/lib/components/live/download-records/DownloadRecords.vue";const l=a.exports}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{t.d(n,{component:()=>e});const e=(0,coreApis.componentApis.define.defineComponentMetadata)({name:"downloadLiveRecords",displayName:"直播录像下载",description:{"zh-CN":"在直播录像页面 `live.bilibili.com/record/` 中添加下载支持."},tags:[componentsTags.live],entry:none,widget:{component:()=>Promise.resolve().then(t.bind(t,735)).then((e=>e.default))},urlInclude:[/^https:\/\/live\.bilibili\.com\/record\/(.+)/],commitHash:"2de458c11d69543d46c810fd39f19dbc4cde5959",coreVersion:"2.5.2"})})(),n=n.component})()));