!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/player/default-mode"]=o():e["video/player/default-mode"]=o()}(globalThis,(()=>(()=>{"use strict";var e={d:(o,t)=>{for(var l in t)e.o(t,l)&&!e.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:t[l]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)},o={};e.d(o,{component:()=>c});const t=coreApis.componentApis.define,l=coreApis.componentApis.video.playerAgent,n=coreApis.spinQuery,a=coreApis.utils,r=coreApis.utils.lazyPanel,s=coreApis.utils.urls;let i;!function(e){e.Normal="常规",e.Wide="宽屏",e.WebFullscreen="网页全屏",e.Fullscreen="全屏"}(i||(i={}));const d=(0,t.defineOptionsMetadata)({mode:{defaultValue:i.Normal,displayName:"模式选择",dropdownEnum:i},applyOnPlay:{defaultValue:!1,displayName:"播放时应用"}}),c=(0,t.defineComponentMetadata)({name:"defaultPlayerMode",displayName:"默认播放器模式",entry:async e=>{let{settings:{options:o}}=e;if((0,a.isEmbeddedPlayer)())return;const{query:{control:{buttons:t}}}=l.playerAgent;await(0,a.playerReady)(),Promise.resolve().then((async()=>{const e=new Map([[i.Normal,none],[i.Wide,async()=>{await(0,r.loadLazyPanel)(t.widescreen.selector),(0,a.disableWindowScroll)((()=>l.playerAgent.widescreen()))}],[i.WebFullscreen,async()=>{await(0,r.loadLazyPanel)(t.webFullscreen.selector),l.playerAgent.webFullscreen()}],[i.Fullscreen,async()=>{null!==await(0,n.sq)((()=>dq(l.playerAgent.query.video.element.selector)),(e=>null!==e&&4===e.readyState&&"complete"===document.readyState&&document.hasFocus()))?l.playerAgent.fullscreen():console.warn("[默认播放器模式] 未能应用全屏模式, 等待超时.")}]]),s=await l.playerAgent.query.video.element();if(!s)return;const d=e.get(o.mode);o.applyOnPlay&&!l.playerAgent.isAutoPlay()?s.addEventListener("play",d,{once:!0}):d()}))},tags:[componentsTags.video],description:{"zh-CN":"控制是否使用默认播放器模式, 可以为`常规`, `宽屏`, `网页全屏`或`全屏`. 注意: 不能和其他影响定位的功能一同使用, 例如播放器定位. (相关讨论: [#483](https://github.com/the1812/Bilibili-Evolved/issues/483))","en-US":"Set the default player mode. Could be `Normal`, `Widescreen`, `Web fullscreen` or `Fullscreen`.","ja-JP":"デフォルト・プレーヤー・モードが使用するかどうかを制御する、 例えば`常规`、`宽屏`、 `网页全屏`か`全屏`."},options:d,urlInclude:s.allVideoUrls,commitHash:"3397e56dc08dc5bcce962efe77f2bbcd634b05e2",coreVersion:"2.6.0"});return o=o.component})()));