!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/player/show-upload-time"]=o():e["video/player/show-upload-time"]=o()}(globalThis,(()=>(()=>{"use strict";var e={d:(o,t)=>{for(var i in t)e.o(t,i)&&!e.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:t[i]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)},o={};e.d(o,{component:()=>r});const t=coreApis.componentApis.define,i=coreApis.observer,n=coreApis.utils,a=coreApis.utils.urls,s=coreApis.componentApis.feeds.api,c=coreApis.componentApis.video.videoInfo,r=(0,t.defineComponentMetadata)({author:{name:"wisokey",link:"https://github.com/wisokey"},name:"showUploadTime",displayName:"显示视频投稿时间",description:"为视频播放页面的推荐列表中的视频添加显示视频投稿时间.",tags:[componentsTags.video],urlInclude:a.videoUrls,entry:async()=>{const e=e=>{e.forEach((async e=>{if(!e.item.owner.mark){if(e.item.owner.mark=!0,!e.mark){let o;if(e.mark=!0,e.item.ctime)o=new Date(1e3*e.item.ctime);else{const t=new c.VideoInfo(e.item.aid);await t.fetchInfo(),o=t.createTime}e.name=`${e.name} · ${o.getFullYear()}-${o.getMonth()+1}-${o.getDate()}`}e.item.owner.name=e.name}}))};(0,i.urlChange)((async()=>{await(0,n.playerReady)();const o=(0,s.getVueData)(dq("#reco_list")).$children.filter((e=>-1===e.$el.className.indexOf("special")));e(o)})),await(0,n.playerReady)(),(0,i.childList)(dq("#reco_list .rec-list"),(async()=>{const o=(0,s.getVueData)(dq("#reco_list"));if(o.isOpen){const t=o.$children.filter((e=>-1===e.$el.className.indexOf("special")));e(t)}}))},commitHash:"2de458c11d69543d46c810fd39f19dbc4cde5959",coreVersion:"2.5.2"});return o=o.component})()));