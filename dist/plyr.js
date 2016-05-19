!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=t(e,document):"function"==typeof define&&define.amd?define(null,function(){t(e,document)}):e.plyr=t(e,document)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(){var e,n,a,r=navigator.userAgent,s=navigator.appName,o=""+parseFloat(navigator.appVersion),i=parseInt(navigator.appVersion,10);return-1!==navigator.appVersion.indexOf("Windows NT")&&-1!==navigator.appVersion.indexOf("rv:11")?(s="IE",o="11;"):-1!==(n=r.indexOf("MSIE"))?(s="IE",o=r.substring(n+5)):-1!==(n=r.indexOf("Chrome"))?(s="Chrome",o=r.substring(n+7)):-1!==(n=r.indexOf("Safari"))?(s="Safari",o=r.substring(n+7),-1!==(n=r.indexOf("Version"))&&(o=r.substring(n+8))):-1!==(n=r.indexOf("Firefox"))?(s="Firefox",o=r.substring(n+8)):(e=r.lastIndexOf(" ")+1)<(n=r.lastIndexOf("/"))&&(s=r.substring(e,n),o=r.substring(n+1),s.toLowerCase()==s.toUpperCase()&&(s=navigator.appName)),-1!==(a=o.indexOf(";"))&&(o=o.substring(0,a)),-1!==(a=o.indexOf(" "))&&(o=o.substring(0,a)),i=parseInt(""+o,10),isNaN(i)&&(o=""+parseFloat(navigator.appVersion),i=parseInt(navigator.appVersion,10)),{name:s,version:i,ios:/(iPad|iPhone|iPod)/g.test(navigator.platform),touch:"ontouchstart"in t.documentElement}}function a(e,t){var n=e.media;if("video"==e.type)switch(t){case"video/webm":return!(!n.canPlayType||!n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/,""));case"video/mp4":return!(!n.canPlayType||!n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/,""));case"video/ogg":return!(!n.canPlayType||!n.canPlayType('video/ogg; codecs="theora"').replace(/no/,""))}else if("audio"==e.type)switch(t){case"audio/mpeg":return!(!n.canPlayType||!n.canPlayType("audio/mpeg;").replace(/no/,""));case"audio/ogg":return!(!n.canPlayType||!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/,""));case"audio/wav":return!(!n.canPlayType||!n.canPlayType('audio/wav; codecs="1"').replace(/no/,""))}return!1}function r(e){if(!t.querySelectorAll('script[src="'+e+'"]').length){var n=t.createElement("script");n.src=e;var a=t.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a)}}function s(e,t){return Array.prototype.indexOf&&-1!=e.indexOf(t)}function o(e,t,n){return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),n)}function i(e,t){e.length||(e=[e]);for(var n=e.length-1;n>=0;n--){var a=n>0?t.cloneNode(!0):t,r=e[n],s=r.parentNode,o=r.nextSibling;a.appendChild(r),o?s.insertBefore(a,o):s.appendChild(a)}}function l(e){for(var t=e.parentNode;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e)}function u(e){e&&e.parentNode.removeChild(e)}function c(e,t){e.insertBefore(t,e.firstChild)}function p(e,t){for(var n in t)e.setAttribute(n,"boolean"==typeof t[n]&&t[n]?"":t[n])}function d(e,n,a){var r=t.createElement(e);p(r,a),c(n,r)}function A(e){return e.replace(".","")}function m(e,t,n){if(e)if(e.classList)e.classList[n?"add":"remove"](t);else{var a=(" "+e.className+" ").replace(/\s+/g," ").replace(" "+t+" ","");e.className=a+(n?" "+t:"")}}function f(e,t){return e?e.classList?e.classList.contains(t):new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className):!1}function y(e,t,n,a){e&&g(e,t,n,!0,a)}function b(e,t,n,a){e&&g(e,t,n,!1,a)}function v(e,t,n,a,r){y(e,t,function(t){n&&n.apply(e,[t]),a.apply(e,[t])},r)}function g(e,t,n,a,r){var s=t.split(" ");if("boolean"!=typeof r&&(r=!1),e instanceof NodeList)for(var o=0;o<e.length;o++)e[o]instanceof Node&&g(e[o],arguments[1],arguments[2],arguments[3]);else for(var i=0;i<s.length;i++)e[a?"addEventListener":"removeEventListener"](s[i],n,r)}function h(e,t,n,a){if(e&&t){"boolean"!=typeof n&&(n=!1);var r=new CustomEvent(t,{bubbles:n,detail:a});e.dispatchEvent(r)}}function k(e,t){return e?(t="boolean"==typeof t?t:!e.getAttribute("aria-pressed"),e.setAttribute("aria-pressed",t),t):void 0}function w(e,t){return 0===e||0===t||isNaN(e)||isNaN(t)?0:(e/t*100).toFixed(2)}function x(){var e=arguments;if(e.length){if(1==e.lenth)return e[0];for(var t=Array.prototype.shift.call(e),n=e.length,a=0;n>a;a++){var r=e[a];for(var s in r)r[s]&&r[s].constructor&&r[s].constructor===Object?(t[s]=t[s]||{},x(t[s],r[s])):t[s]=r[s]}return t}}function T(){var e={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",element:null,prefix:""},n="webkit moz o ms khtml".split(" ");if("undefined"!=typeof t.cancelFullScreen)e.supportsFullScreen=!0;else for(var a=0,r=n.length;r>a;a++){if(e.prefix=n[a],"undefined"!=typeof t[e.prefix+"CancelFullScreen"]){e.supportsFullScreen=!0;break}if("undefined"!=typeof t.msExitFullscreen&&t.msFullscreenEnabled){e.prefix="ms",e.supportsFullScreen=!0;break}}return e.supportsFullScreen&&(e.fullScreenEventName="ms"==e.prefix?"MSFullscreenChange":e.prefix+"fullscreenchange",e.isFullScreen=function(e){switch("undefined"==typeof e&&(e=t.body),this.prefix){case"":return t.fullscreenElement==e;case"moz":return t.mozFullScreenElement==e;default:return t[this.prefix+"FullscreenElement"]==e}},e.requestFullScreen=function(e){return"undefined"==typeof e&&(e=t.body),""===this.prefix?e.requestFullScreen():e[this.prefix+("ms"==this.prefix?"RequestFullscreen":"RequestFullScreen")]()},e.cancelFullScreen=function(){return""===this.prefix?t.cancelFullScreen():t[this.prefix+("ms"==this.prefix?"ExitFullscreen":"CancelFullScreen")]()},e.element=function(){return""===this.prefix?t.fullscreenElement:t[this.prefix+"FullscreenElement"]}),e}function _(){var t={supported:function(){if(!("localStorage"in e))return!1;try{e.localStorage.setItem("___test","OK");var t=e.localStorage.getItem("___test");return e.localStorage.removeItem("___test"),"OK"===t}catch(n){return!1}return!1}()};return t}function E(g,x){function E(t,n){x.debug&&e.console&&console[n?"warn":"log"](t)}function S(){var e=[],t=x.iconUrl+"#"+x.iconPrefix;return s(x.controls,"play-large")&&e.push('<button type="button" data-plyr="play" class="plyr__play-large">','<svg><use xlink:href="'+t+'-play" /></svg>','<span class="plyr__sr-only">'+x.i18n.play+"</span>","</button>"),e.push('<div class="plyr__controls">'),s(x.controls,"restart")&&e.push('<button type="button" data-plyr="restart">','<svg><use xlink:href="'+t+'-restart" /></svg>','<span class="plyr__sr-only">'+x.i18n.restart+"</span>","</button>"),s(x.controls,"rewind")&&e.push('<button type="button" data-plyr="rewind">','<svg><use xlink:href="'+t+'-rewind" /></svg>','<span class="plyr__sr-only">'+x.i18n.rewind+"</span>","</button>"),s(x.controls,"play")&&e.push('<button type="button" data-plyr="play">','<svg><use xlink:href="'+t+'-play" /></svg>','<span class="plyr__sr-only">'+x.i18n.play+"</span>","</button>",'<button type="button" data-plyr="pause">','<svg><use xlink:href="'+t+'-pause" /></svg>','<span class="plyr__sr-only">'+x.i18n.pause+"</span>","</button>"),s(x.controls,"fast-forward")&&e.push('<button type="button" data-plyr="fast-forward">','<svg><use xlink:href="'+t+'-fast-forward" /></svg>','<span class="plyr__sr-only">'+x.i18n.forward+"</span>","</button>"),s(x.controls,"progress")&&(e.push('<span class="plyr__progress">','<label for="seek{id}" class="plyr__sr-only">Seek</label>','<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">','<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>','<progress class="plyr__progress--buffer" max="100" value="0">',"<span>0</span>% "+x.i18n.buffered,"</progress>"),x.tooltips.seek&&e.push('<span class="plyr__tooltip">00:00</span>'),e.push("</span>")),s(x.controls,"current-time")&&e.push('<span class="plyr__time">','<span class="plyr__sr-only">'+x.i18n.currentTime+"</span>",'<span class="plyr__time--current">00:00</span>',"</span>"),s(x.controls,"duration")&&e.push('<span class="plyr__time">','<span class="plyr__sr-only">'+x.i18n.duration+"</span>",'<span class="plyr__time--duration">00:00</span>',"</span>"),s(x.controls,"mute")&&e.push('<button type="button" data-plyr="mute">','<svg class="icon--muted"><use xlink:href="'+t+'-muted" /></svg>','<svg><use xlink:href="'+t+'-volume" /></svg>','<span class="plyr__sr-only">'+x.i18n.toggleMute+"</span>","</button>"),s(x.controls,"volume")&&e.push('<span class="plyr__volume">','<label for="volume{id}" class="plyr__sr-only">'+x.i18n.volume+"</label>",'<input id="volume{id}" class="plyr__volume--input" type="range" min="'+x.volumeMin+'" max="'+x.volumeMax+'" value="'+x.volume+'" data-plyr="volume">','<progress class="plyr__volume--display" max="'+x.volumeMax+'" value="'+x.volumeMin+'" role="presentation"></progress>',"</span>"),s(x.controls,"captions")&&e.push('<button type="button" data-plyr="captions">','<svg class="icon--captions-on"><use xlink:href="'+t+'-captions-on" /></svg>','<svg><use xlink:href="'+t+'-captions-off" /></svg>','<span class="plyr__sr-only">'+x.i18n.toggleCaptions+"</span>","</button>"),s(x.controls,"fullscreen")&&e.push('<button type="button" data-plyr="fullscreen">','<svg class="icon--exit-fullscreen"><use xlink:href="'+t+'-exit-fullscreen" /></svg>','<svg><use xlink:href="'+t+'-enter-fullscreen" /></svg>','<span class="plyr__sr-only">'+x.i18n.toggleFullscreen+"</span>","</button>"),e.push("</div>"),e.join("")}function I(){if(Ne.supported.full&&("audio"!=Ne.type||x.fullscreen.allowAudio)&&x.fullscreen.enabled){var e=C.supportsFullScreen;e||x.fullscreen.fallback&&!V()?(E((e?"Native":"Fallback")+" fullscreen enabled"),m(Ne.container,x.classes.fullscreen.enabled,!0)):E("Fullscreen not supported and fallback disabled"),k(Ne.buttons.fullscreen,!1),H()}}function N(){if("video"===Ne.type){L(x.selectors.captions)||Ne.videoContainer.insertAdjacentHTML("afterbegin",'<div class="'+A(x.selectors.captions)+'"></div>'),Ne.usingTextTracks=!1,Ne.media.textTracks&&(Ne.usingTextTracks=!0);for(var e,t="",n=Ne.media.childNodes,a=0;a<n.length;a++)"track"===n[a].nodeName.toLowerCase()&&(e=n[a].kind,"captions"!==e&&"subtitles"!==e||(t=n[a].getAttribute("src")));if(Ne.captionExists=!0,""===t?(Ne.captionExists=!1,E("No caption track found")):E("Caption track found; URI: "+t),Ne.captionExists){for(var r=Ne.media.textTracks,s=0;s<r.length;s++)r[s].mode="hidden";if(R(Ne),("IE"===Ne.browser.name&&Ne.browser.version>=10||"Firefox"===Ne.browser.name&&Ne.browser.version>=31)&&(E("Detected browser with known TextTrack issues - using manual fallback"),Ne.usingTextTracks=!1),Ne.usingTextTracks){E("TextTracks supported");for(var o=0;o<r.length;o++){var i=r[o];"captions"!==i.kind&&"subtitles"!==i.kind||y(i,"cuechange",function(){this.activeCues[0]&&"text"in this.activeCues[0]?M(this.activeCues[0].getCueAsHTML()):M()})}}else if(E("TextTracks not supported so rendering captions manually"),Ne.currentCaption="",Ne.captions=[],""!==t){var l=new XMLHttpRequest;l.onreadystatechange=function(){if(4===l.readyState)if(200===l.status){var e,t=[],n=l.responseText;t=n.split("\n\n");for(var a=0;a<t.length;a++){e=t[a],Ne.captions[a]=[];var r=e.split("\n"),s=0;-1===r[s].indexOf(":")&&(s=1),Ne.captions[a]=[r[s],r[s+1]]}Ne.captions.shift(),E("Successfully loaded the caption file via AJAX")}else E("There was a problem loading the caption file via AJAX",!0)},l.open("get",t,!0),l.send()}}else m(Ne.container,x.classes.captions.enabled)}}function M(e){var n=L(x.selectors.captions),a=t.createElement("span");n.innerHTML="","undefined"==typeof e&&(e=""),"string"==typeof e?a.innerHTML=e.trim():a.appendChild(e),n.appendChild(a);n.offsetHeight}function P(e){function t(e,t){var n=[];n=e.split(" --> ");for(var a=0;a<n.length;a++)n[a]=n[a].replace(/(\d+:\d+:\d+\.\d+).*/,"$1");return r(n[t])}function n(e){return t(e,0)}function a(e){return t(e,1)}function r(e){if(null===e||void 0===e)return 0;var t,n=[],a=[];return n=e.split(","),a=n[0].split(":"),t=Math.floor(60*a[0]*60)+Math.floor(60*a[1])+Math.floor(a[2])}if(!Ne.usingTextTracks&&"video"===Ne.type&&Ne.supported.full&&(Ne.subcount=0,e="number"==typeof e?e:Ne.media.currentTime,Ne.captions[Ne.subcount])){for(;a(Ne.captions[Ne.subcount][0])<e.toFixed(1);)if(Ne.subcount++,Ne.subcount>Ne.captions.length-1){Ne.subcount=Ne.captions.length-1;break}Ne.media.currentTime.toFixed(1)>=n(Ne.captions[Ne.subcount][0])&&Ne.media.currentTime.toFixed(1)<=a(Ne.captions[Ne.subcount][0])?(Ne.currentCaption=Ne.captions[Ne.subcount][1],M(Ne.currentCaption)):M()}}function R(){Ne.buttons.captions&&(m(Ne.container,x.classes.captions.enabled,!0),x.captions.defaultActive&&(m(Ne.container,x.classes.captions.active,!0),k(Ne.buttons.captions,!0)))}function B(e){return Ne.container.querySelectorAll(e)}function L(e){return B(e)[0]}function V(){try{return e.self!==e.top}catch(t){return!0}}function H(){function e(e){9===e.which&&Ne.isFullscreen&&(e.target!==a||e.shiftKey?e.target===n&&e.shiftKey&&(e.preventDefault(),a.focus()):(e.preventDefault(),n.focus()))}var t=B("input:not([disabled]), button:not([disabled])"),n=t[0],a=t[t.length-1];y(Ne.container,"keydown",e)}function O(e,t){if("string"==typeof t)d(e,Ne.media,{src:t});else if(t.constructor===Array)for(var n=t.length-1;n>=0;n--)d(e,Ne.media,t[n])}function W(){var e=x.html;E("Injecting custom controls"),e||(e=S()),e=o(e,"{seektime}",x.seekTime),e=o(e,"{id}",Math.floor(1e4*Math.random()));var n;if(null!==x.selectors.controls.container&&(n=x.selectors.controls.container,"string"==typeof selector&&(n=t.querySelector(n))),n instanceof HTMLElement||(n=Ne.container),n.insertAdjacentHTML("beforeend",e),x.tooltips.controls)for(var a=B([x.selectors.controls.wrapper," ",x.selectors.labels," .",x.classes.hidden].join("")),r=a.length-1;r>=0;r--){var s=a[r];m(s,x.classes.hidden,!1),m(s,x.classes.tooltip,!0)}}function G(){try{return Ne.controls=L(x.selectors.controls.wrapper),Ne.buttons={},Ne.buttons.seek=L(x.selectors.buttons.seek),Ne.buttons.play=B(x.selectors.buttons.play),Ne.buttons.pause=L(x.selectors.buttons.pause),Ne.buttons.restart=L(x.selectors.buttons.restart),Ne.buttons.rewind=L(x.selectors.buttons.rewind),Ne.buttons.forward=L(x.selectors.buttons.forward),Ne.buttons.fullscreen=L(x.selectors.buttons.fullscreen),Ne.buttons.mute=L(x.selectors.buttons.mute),Ne.buttons.captions=L(x.selectors.buttons.captions),Ne.progress={},Ne.progress.container=L(x.selectors.progress.container),Ne.progress.buffer={},Ne.progress.buffer.bar=L(x.selectors.progress.buffer),Ne.progress.buffer.text=Ne.progress.buffer.bar&&Ne.progress.buffer.bar.getElementsByTagName("span")[0],Ne.progress.played=L(x.selectors.progress.played),Ne.progress.tooltip=Ne.progress.container&&Ne.progress.container.querySelector("."+x.classes.tooltip),Ne.volume={},Ne.volume.input=L(x.selectors.volume.input),Ne.volume.display=L(x.selectors.volume.display),Ne.duration=L(x.selectors.duration),Ne.currentTime=L(x.selectors.currentTime),Ne.seekTime=B(x.selectors.seekTime),!0}catch(e){return E("It looks like there is a problem with your controls html",!0),q(!0),!1}}function Y(){m(Ne.container,x.selectors.container.replace(".",""),Ne.supported.full)}function q(e){e?Ne.media.setAttribute("controls",""):Ne.media.removeAttribute("controls")}function z(e){var t=x.i18n.play;if("undefined"!=typeof x.title&&x.title.length&&(t+=", "+x.title),Ne.supported.full&&Ne.buttons.play)for(var n=Ne.buttons.play.length-1;n>=0;n--)Ne.buttons.play[n].setAttribute("aria-label",t);e instanceof HTMLElement&&e.setAttribute("title",x.i18n.frameTitle.replace("{title}",x.title))}function Q(){if(!Ne.media)return E("No audio or video element found",!0),!1;if(Ne.supported.full&&(m(Ne.container,x.classes.type.replace("{0}",Ne.type),!0),s(x.types.embed,Ne.type)&&m(Ne.container,x.classes.type.replace("{0}","video"),!0),m(Ne.container,x.classes.stopped,x.autoplay),m(Ne.container,x.classes.isIos,Ne.browser.ios),m(Ne.container,x.classes.isTouch,Ne.browser.touch),"video"===Ne.type)){var e=t.createElement("div");e.setAttribute("class",x.classes.videoWrapper),i(Ne.media,e),Ne.videoContainer=e}s(x.types.embed,Ne.type)&&(j(),Ne.embedId=null)}function j(){for(var n=t.createElement("div"),a=Ne.embedId,s=Ne.type+"-"+Math.floor(1e4*Math.random()),o=B('[id^="'+Ne.type+'-"]'),i=o.length-1;i>=0;i--)u(o[i]);if(m(Ne.media,x.classes.videoWrapper,!0),m(Ne.media,x.classes.embedWrapper,!0),"youtube"===Ne.type)Ne.media.appendChild(n),n.setAttribute("id",s),"object"==typeof YT?D(a,n):(r(x.urls.youtube.api),e.onYouTubeReadyCallbacks=e.onYouTubeReadyCallbacks||[],e.onYouTubeReadyCallbacks.push(function(){D(a,n)}),e.onYouTubeIframeAPIReady=function(){e.onYouTubeReadyCallbacks.forEach(function(e){e()})});else if("vimeo"===Ne.type){var l=t.createElement("iframe");l.loaded=!1,y(l,"load",function(){l.loaded=!0}),p(l,{src:"https://player.vimeo.com/video/"+a+"?player_id="+s+"&api=1&badge=0&byline=0&portrait=0&title=0",id:s,webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",frameborder:0}),Ne.supported.full?(n.appendChild(l),Ne.media.appendChild(n)):Ne.media.appendChild(l),"$f"in e||r(x.urls.vimeo.api);var c=e.setInterval(function(){"$f"in e&&l.loaded&&(e.clearInterval(c),U.call(l))},50)}else if("soundcloud"===Ne.type){var d=t.createElement("iframe");d.loaded=!1,y(d,"load",function(){d.loaded=!0}),p(d,{src:"https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/"+a,id:s}),n.appendChild(d),Ne.media.appendChild(n),e.SC||r(x.urls.soundcloud.api);var A=e.setInterval(function(){e.SC&&d.loaded&&(e.clearInterval(A),Z.call(d))},50)}}function X(){Ne.container.plyr.embed=Ne.embed,Ie(),z(L("iframe"))}function D(t,n){"timer"in Ne||(Ne.timer={}),Ne.embed=new YT.Player(n.id,{videoId:t,playerVars:{autoplay:x.autoplay?1:0,controls:Ne.supported.full?0:1,rel:0,showinfo:0,iv_load_policy:3,cc_load_policy:x.captions.defaultActive?1:0,cc_lang_pref:"en",wmode:"transparent",modestbranding:1,disablekb:1,origin:"*"},events:{onError:function(e){h(Ne.container,"error",!0,{code:e.data,embed:e.target})},onReady:function(t){var n=t.target;Ne.media.play=function(){n.playVideo(),Ne.media.paused=!1},Ne.media.pause=function(){n.pauseVideo(),Ne.media.paused=!0},Ne.media.stop=function(){n.stopVideo(),Ne.media.paused=!0},Ne.media.duration=n.getDuration(),Ne.media.paused=!0,Ne.media.currentTime=n.getCurrentTime(),Ne.media.muted=n.isMuted(),x.title=n.getVideoData().title,h(Ne.media,"timeupdate"),e.clearInterval(Ne.timer.buffering),Ne.timer.buffering=e.setInterval(function(){Ne.media.buffered=n.getVideoLoadedFraction(),h(Ne.media,"progress"),1===Ne.media.buffered&&(e.clearInterval(Ne.timer.buffering),h(Ne.media,"canplaythrough"))},200),X(),be()},onStateChange:function(t){var n=t.target;switch(e.clearInterval(Ne.timer.playing),t.data){case 0:Ne.media.paused=!0,h(Ne.media,"ended");break;case 1:Ne.media.paused=!1,Ne.media.seeking=!1,h(Ne.media,"play"),h(Ne.media,"playing"),Ne.timer.playing=e.setInterval(function(){Ne.media.currentTime=n.getCurrentTime(),h(Ne.media,"timeupdate")},100);break;case 2:Ne.media.paused=!0,h(Ne.media,"pause")}h(Ne.container,"statechange",!1,{code:t.data})}}})}function U(){Ne.embed=$f(this),Ne.embed.addEvent("ready",function(){Ne.media.play=function(){Ne.embed.api("play"),Ne.media.paused=!1},Ne.media.pause=function(){Ne.embed.api("pause"),Ne.media.paused=!0},Ne.media.stop=function(){Ne.embed.api("stop"),Ne.media.paused=!0},Ne.media.paused=!0,Ne.media.currentTime=0,X(),Ne.embed.api("getCurrentTime",function(e){Ne.media.currentTime=e,h(Ne.media,"timeupdate")}),Ne.embed.api("getDuration",function(e){Ne.media.duration=e,be()}),Ne.embed.addEvent("play",function(){Ne.media.paused=!1,h(Ne.media,"play"),h(Ne.media,"playing")}),Ne.embed.addEvent("pause",function(){Ne.media.paused=!0,h(Ne.media,"pause")}),Ne.embed.addEvent("playProgress",function(e){Ne.media.seeking=!1,Ne.media.currentTime=e.seconds,h(Ne.media,"timeupdate")}),Ne.embed.addEvent("loadProgress",function(e){Ne.media.buffered=e.percent,h(Ne.media,"progress"),1===parseInt(e.percent)&&h(Ne.media,"canplaythrough")}),Ne.embed.addEvent("finish",function(){Ne.media.paused=!0,h(Ne.media,"ended")}),x.autoplay&&Ne.embed.api("play")})}function Z(){Ne.embed=e.SC.Widget(this),Ne.embed.bind(e.SC.Widget.Events.READY,function(){Ne.media.play=function(){Ne.embed.play(),Ne.media.paused=!1},Ne.media.pause=function(){Ne.embed.pause(),Ne.media.paused=!0},Ne.media.stop=function(){Ne.embed.seekTo(0),Ne.embed.pause(),Ne.media.paused=!0},Ne.media.paused=!0,Ne.media.currentTime=0,X(),Ne.embed.getPosition(function(e){Ne.media.currentTime=e,h(Ne.media,"timeupdate")}),Ne.embed.getDuration(function(e){Ne.media.duration=e/1e3,be()}),Ne.embed.bind(e.SC.Widget.Events.PLAY,function(){Ne.media.paused=!1,h(Ne.media,"play"),h(Ne.media,"playing")}),Ne.embed.bind(e.SC.Widget.Events.PAUSE,function(){Ne.media.paused=!0,h(Ne.media,"pause")}),Ne.embed.bind(e.SC.Widget.Events.PLAY_PROGRESS,function(e){Ne.media.seeking=!1,Ne.media.currentTime=e.currentPosition/1e3,h(Ne.media,"timeupdate")}),Ne.embed.bind(e.SC.Widget.Events.LOAD_PROGRESS,function(e){Ne.media.buffered=e.loadProgress,h(Ne.media,"progress"),1===parseInt(e.loadProgress)&&h(Ne.media,"canplaythrough")}),Ne.embed.bind(e.SC.Widget.Events.FINISH,function(){Ne.media.paused=!0,h(Ne.media,"ended")}),x.autoplay&&Ne.embed.play()})}function $(){"play"in Ne.media&&Ne.media.play()}function J(){"pause"in Ne.media&&Ne.media.pause()}function K(e){e===!0?$():e===!1?J():Ne.media[Ne.media.paused?"play":"pause"]()}function ee(e){"number"!=typeof e&&(e=x.seekTime),ne(Ne.media.currentTime-e)}function te(e){"number"!=typeof e&&(e=x.seekTime),ne(Ne.media.currentTime+e)}function ne(e){var t=0,n=Ne.media.paused,a=ae();"number"==typeof e?t=e:"object"!=typeof e||"input"!==e.type&&"change"!==e.type||(t=e.target.value/e.target.max*a),0>t?t=0:t>a&&(t=a),ge(t);try{Ne.media.currentTime=t.toFixed(1)}catch(r){}if(s(x.types.embed,Ne.type)){switch(Ne.type){case"youtube":Ne.embed.seekTo(t);break;case"vimeo":Ne.embed.api("seekTo",t.toFixed(0));break;case"soundcloud":Ne.embed.seekTo(1e3*t)}n&&J(),h(Ne.media,"timeupdate"),Ne.media.seeking=!0}E("Seeking to "+Ne.media.currentTime+" seconds"),P(t)}function ae(){var e=parseInt(x.duration),t=0;return null===Ne.media.duration||isNaN(Ne.media.duration)||(t=Ne.media.duration),isNaN(e)?t:e}function re(){m(Ne.container,x.classes.playing,!Ne.media.paused),m(Ne.container,x.classes.stopped,Ne.media.paused),ke(Ne.media.paused)}function se(e){var n=C.supportsFullScreen;e&&e.type===C.fullScreenEventName?Ne.isFullscreen=C.isFullScreen(Ne.container):n?(C.isFullScreen(Ne.container)?C.cancelFullScreen():C.requestFullScreen(Ne.container),Ne.isFullscreen=C.isFullScreen(Ne.container)):(Ne.isFullscreen=!Ne.isFullscreen,Ne.isFullscreen?(y(t,"keyup",oe),t.body.style.overflow="hidden"):(b(t,"keyup",oe),t.body.style.overflow="")),m(Ne.container,x.classes.fullscreen.active,Ne.isFullscreen),Ne.isFullscreen?Ne.container.setAttribute("tabindex","-1"):Ne.container.removeAttribute("tabindex"),H(Ne.isFullscreen),k(Ne.buttons.fullscreen,Ne.isFullscreen),h(Ne.container,Ne.isFullscreen?"enterfullscreen":"exitfullscreen")}function oe(e){27===(e.which||e.charCode||e.keyCode)&&Ne.isFullscreen&&se()}function ie(e){if("boolean"!=typeof e&&(e=!Ne.media.muted),k(Ne.buttons.mute,e),Ne.media.muted=e,0===Ne.media.volume&&le(x.volume),s(x.types.embed,Ne.type)){switch(Ne.type){case"youtube":Ne.embed[Ne.media.muted?"mute":"unMute"]();break;case"vimeo":Ne.embed.api("setVolume",Ne.media.muted?0:parseFloat(x.volume/x.volumeMax));break;case"soundcloud":Ne.embed.setVolume(Ne.media.muted?0:parseFloat(x.volume/x.volumeMax))}h(Ne.media,"volumechange")}}function le(t){var n=x.volumeMax,a=x.volumeMin;if("undefined"==typeof t&&(t=x.volume,x.storage.enabled&&_().supported&&(t=e.localStorage.getItem(x.storage.key),e.localStorage.removeItem("plyr-volume"))),(null===t||isNaN(t))&&(t=x.volume),t>n&&(t=n),a>t&&(t=a),Ne.media.volume=parseFloat(t/n),Ne.volume.display&&(Ne.volume.display.value=t),s(x.types.embed,Ne.type)){switch(Ne.type){case"youtube":Ne.embed.setVolume(100*Ne.media.volume);break;case"vimeo":Ne.embed.api("setVolume",Ne.media.volume);break;case"soundcloud":Ne.embed.setVolume(Ne.media.volume)}h(Ne.media,"volumechange")}Ne.media.muted&&t>0&&ie()}function ue(){var e=Ne.media.muted?0:Ne.media.volume*x.volumeMax;le(e+x.volumeStep)}function ce(){var e=Ne.media.muted?0:Ne.media.volume*x.volumeMax;le(e-x.volumeStep)}function pe(){var t=Ne.media.muted?0:Ne.media.volume*x.volumeMax;Ne.supported.full&&(Ne.volume.input&&(Ne.volume.input.value=t),Ne.volume.display&&(Ne.volume.display.value=t)),x.storage.enabled&&_().supported&&!isNaN(t)&&e.localStorage.setItem(x.storage.key,t),m(Ne.container,x.classes.muted,0===t),Ne.supported.full&&Ne.buttons.mute&&k(Ne.buttons.mute,0===t)}function de(e){Ne.supported.full&&Ne.buttons.captions&&("boolean"!=typeof e&&(e=-1===Ne.container.className.indexOf(x.classes.captions.active)),Ne.captionsEnabled=e,k(Ne.buttons.captions,Ne.captionsEnabled),m(Ne.container,x.classes.captions.active,Ne.captionsEnabled),h(Ne.container,Ne.captionsEnabled?"captionsenabled":"captionsdisabled"))}function Ae(e){var t="waiting"===e.type;clearTimeout(Ne.timers.loading),Ne.timers.loading=setTimeout(function(){m(Ne.container,x.classes.loading,t)},t?250:0)}function me(e){if(Ne.supported.full){var t=Ne.progress.played,n=0,a=ae();if(e)switch(e.type){case"timeupdate":case"seeking":n=w(Ne.media.currentTime,a),"timeupdate"==e.type&&Ne.buttons.seek&&(Ne.buttons.seek.value=n);break;case"playing":case"progress":t=Ne.progress.buffer,n=function(){var e=Ne.media.buffered;return e&&e.length?w(e.end(0),a):"number"==typeof e?100*e:0}()}fe(t,n)}}function fe(e,t){Ne.supported.full&&("undefined"==typeof t&&(t=0),"undefined"==typeof e&&(e=Ne.progress.buffer),e instanceof HTMLElement?e.value=t:e&&(e.bar&&(e.bar.value=t),e.text&&(e.text.innerHTML=t)))}function ye(e,t){if(t){isNaN(e)&&(e=0),Ne.secs=parseInt(e%60),Ne.mins=parseInt(e/60%60),Ne.hours=parseInt(e/60/60%60);var n=parseInt(ae()/60/60%60)>0;Ne.secs=("0"+Ne.secs).slice(-2),Ne.mins=("0"+Ne.mins).slice(-2),t.innerHTML=(n?Ne.hours+":":"")+Ne.mins+":"+Ne.secs}}function be(){if(Ne.supported.full){var e=ae()||0;!Ne.duration&&x.displayDuration&&Ne.media.paused&&ye(e,Ne.currentTime),Ne.duration&&ye(e,Ne.duration),he()}}function ve(e){ye(Ne.media.currentTime,Ne.currentTime),e&&"timeupdate"==e.type&&Ne.media.seeking||me(e)}function ge(e){"number"!=typeof e&&(e=0);var t=ae(),n=w(e,t);Ne.progress&&Ne.progress.played&&(Ne.progress.played.value=n),Ne.buttons&&Ne.buttons.seek&&(Ne.buttons.seek.value=n)}function he(e){var t=ae();if(x.tooltips.seek&&Ne.progress.container&&0!==t){var n=Ne.progress.container.getBoundingClientRect(),a=0,r=x.classes.tooltip+"--visible";if(e)a=100/n.width*(e.pageX-n.left);else{if(!f(Ne.progress.tooltip,r))return;a=Ne.progress.tooltip.style.left.replace("%","")}0>a?a=0:a>100&&(a=100),ye(t/100*a,Ne.progress.tooltip),Ne.progress.tooltip.style.left=a+"%",e&&s(["mouseenter","mouseleave"],e.type)&&m(Ne.progress.tooltip,r,"mouseenter"===e.type)}}function ke(t){if(x.hideControls&&"audio"!==Ne.type){var n=0,a=!1,r=t;"boolean"!=typeof t&&(t&&t.type?(a="enterfullscreen"===t.type,r=s(["mousemove","mouseenter","focus"],t.type),"mousemove"===t.type&&(n=2e3),"focus"===t.type&&(n=3e3)):r=!1),e.clearTimeout(Ne.timers.hover),(r||Ne.media.paused)&&(m(Ne.container,x.classes.hideControls,!1),Ne.media.paused)||r&&Ne.media.paused||(Ne.timers.hover=e.setTimeout(function(){Ne.controls.active&&!a||m(Ne.container,x.classes.hideControls,!0)},n))}}function we(e){if("undefined"!=typeof e)return void xe(e);var t;switch(Ne.type){case"youtube":t=Ne.embed.getVideoUrl();break;case"vimeo":Ne.embed.api("getVideoUrl",function(e){t=e});break;case"soundcloud":Ne.embed.getCurrentSound(function(e){t=e.permalink_url});break;default:t=Ne.media.currentSrc}return t||""}function xe(n){if(!("undefined"!=typeof n&&"sources"in n&&n.sources.length))return void E("Invalid source format",!0);if(J(),ge(),fe(),Ce(),"youtube"===Ne.type?(Ne.embed.destroy(),e.clearInterval(Ne.timer.buffering),e.clearInterval(Ne.timer.playing)):"video"===Ne.type&&Ne.videoContainer&&u(Ne.videoContainer),Ne.embed=null,u(Ne.media),"type"in n&&(Ne.type=n.type,"video"===Ne.type)){var a=n.sources[0];"type"in a&&s(x.types.embed,a.type)&&(Ne.type=a.type)}switch(Ne.supported=F.supported(Ne.type),Ne.type){case"video":Ne.media=t.createElement("video");break;case"audio":Ne.media=t.createElement("audio");break;case"youtube":case"vimeo":case"soundcloud":Ne.media=t.createElement("div"),Ne.embedId=n.sources[0].src}c(Ne.container,Ne.media),"undefined"!=typeof n.autoplay&&(x.autoplay=n.autoplay),s(x.types.html5,Ne.type)&&(x.crossorigin&&Ne.media.setAttribute("crossorigin",""),x.autoplay&&Ne.media.setAttribute("autoplay",""),"poster"in n&&Ne.media.setAttribute("poster",n.poster),x.loop&&Ne.media.setAttribute("loop","")),Ne.container.className=Ne.originalClassName,m(Ne.container,x.classes.fullscreen.active,Ne.isFullscreen),m(Ne.container,x.classes.captions.active,Ne.captionsEnabled),Y(),s(x.types.html5,Ne.type)&&O("source",n.sources),Q(),s(x.types.html5,Ne.type)&&("tracks"in n&&O("track",n.tracks),Ne.media.load(),Ie(),be()),x.title=n.title,z(),Ne.container.plyr.media=Ne.media}function Te(e){"video"===Ne.type&&Ne.media.setAttribute("poster",e)}function _e(){function n(){var e=Ne.media.paused;e?$():J();var t=Ne.buttons[e?"play":"pause"],n=Ne.buttons[e?"pause":"play"];if(n=n&&n.length>1?n[n.length-1]:n[0]){var a=f(t,x.classes.tabFocus);setTimeout(function(){n.focus(),a&&(m(t,x.classes.tabFocus,!1),m(n,x.classes.tabFocus,!0))},100)}}function a(){var e=t.activeElement;e&&e!=t.body?t.querySelector&&(e=t.querySelector(":focus")):e=null;for(var n in Ne.buttons){var a=Ne.buttons[n];if(a instanceof NodeList)for(var r=0;r<a.length;r++)m(a[r],x.classes.tabFocus,a[r]===e);else m(a,x.classes.tabFocus,a===e)}}var r="IE"==Ne.browser.name?"change":"input";y(e,"keyup",function(e){var t=e.keyCode?e.keyCode:e.which;9==t&&a()}),y(t.body,"click",function(){m(L("."+x.classes.tabFocus),x.classes.tabFocus,!1)});for(var s in Ne.buttons){var o=Ne.buttons[s];y(o,"blur",function(){m(o,"tab-focus",!1)})}v(Ne.buttons.play,"click",x.listeners.play,n),v(Ne.buttons.pause,"click",x.listeners.pause,n),v(Ne.buttons.restart,"click",x.listeners.restart,ne),v(Ne.buttons.rewind,"click",x.listeners.rewind,ee),v(Ne.buttons.forward,"click",x.listeners.forward,te),v(Ne.buttons.seek,r,x.listeners.seek,ne),v(Ne.volume.input,r,x.listeners.volume,function(){le(Ne.volume.input.value)}),v(Ne.buttons.mute,"click",x.listeners.mute,ie),v(Ne.buttons.fullscreen,"click",x.listeners.fullscreen,se),C.supportsFullScreen&&y(t,C.fullScreenEventName,se),y(Ne.buttons.captions,"click",de),y(Ne.progress.container,"mouseenter mouseleave mousemove",he),x.hideControls&&(y(Ne.container,"mouseenter mouseleave mousemove enterfullscreen",ke),y(Ne.controls,"mouseenter mouseleave",function(e){Ne.controls.active="mouseenter"===e.type}),y(Ne.controls,"focus blur",ke,!0)),y(Ne.volume.input,"wheel",function(e){e.preventDefault(),(e.deltaY<0||e.deltaX>0)&&ue(),(e.deltaY>0||e.deltaX<0)&&ce()})}function Ee(){if(y(Ne.media,"timeupdate seeking",ve),y(Ne.media,"timeupdate",P),y(Ne.media,"durationchange loadedmetadata",be),y(Ne.media,"ended",function(){"video"===Ne.type&&M(),re(),ne(0),be(),"video"===Ne.type&&x.showPosterOnEnd&&Ne.media.load()}),y(Ne.media,"progress playing",me),y(Ne.media,"volumechange",pe),y(Ne.media,"play pause",re),y(Ne.media,"waiting canplay seeked",Ae),x.clickToPlay&&"audio"!==Ne.type){var e=L("."+x.classes.videoWrapper);if(!e)return;e.style.cursor="pointer",y(e,"click",function(){Ne.media.paused?$():Ne.media.ended?(ne(),$()):J()})}y(Ne.media,x.events.join(" "),function(e){h(Ne.container,e.type,!0)})}function Ce(){if(s(x.types.html5,Ne.type)){for(var e=Ne.media.querySelectorAll("source"),t=0;t<e.length;t++)u(e[t]);Ne.media.setAttribute("src","data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAGm1kYXQAAAGzABAHAAABthBgUYI9t+8AAAMNbW9vdgAAAGxtdmhkAAAAAMXMvvrFzL76AAAD6AAAACoAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhpb2RzAAAAABCAgIAHAE/////+/wAAAiF0cmFrAAAAXHRraGQAAAAPxcy++sXMvvoAAAABAAAAAAAAACoAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAgAAAAIAAAAAAG9bWRpYQAAACBtZGhkAAAAAMXMvvrFzL76AAAAGAAAAAEVxwAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAABaG1pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAShzdGJsAAAAxHN0c2QAAAAAAAAAAQAAALRtcDR2AAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAgACABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAAXmVzZHMAAAAAA4CAgE0AAQAEgICAPyARAAAAAAMNQAAAAAAFgICALQAAAbABAAABtYkTAAABAAAAASAAxI2IAMUARAEUQwAAAbJMYXZjNTMuMzUuMAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAQAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAASAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1My4yMS4x"),
Ne.media.load(),E("Cancelled network requests for old media")}}function Fe(){if(!Ne.init)return null;if(Ne.container.setAttribute("class",A(x.selectors.container)),Ne.init=!1,u(L(x.selectors.controls.wrapper)),"youtube"===Ne.type)return void Ne.embed.destroy();"video"===Ne.type&&(u(L(x.selectors.captions)),l(Ne.videoContainer)),q(!0);var e=Ne.media.cloneNode(!0);Ne.media.parentNode.replaceChild(e,Ne.media)}function Se(){if(Ne.init)return null;if(C=T(),Ne.browser=n(),Ne.media=Ne.container.querySelectorAll("audio, video")[0],Ne.media||(Ne.media=Ne.container.querySelectorAll("div")[0]),Ne.media){Ne.originalClassName=Ne.container.className;var e=Ne.media.tagName.toLowerCase();if("div"===e?(Ne.type=Ne.media.getAttribute("data-type"),Ne.embedId=Ne.media.getAttribute("data-video-id"),Ne.media.removeAttribute("data-type"),Ne.media.removeAttribute("data-video-id")):(Ne.type=e,x.crossorigin=null!==Ne.media.getAttribute("crossorigin"),x.autoplay=x.autoplay||null!==Ne.media.getAttribute("autoplay"),x.loop=x.loop||null!==Ne.media.getAttribute("loop")),Ne.supported=F.supported(Ne.type),Y(),!Ne.supported.basic)return!1;if(E(Ne.browser.name+" "+Ne.browser.version),Q(),s(x.types.html5,Ne.type)){if(!Ne.supported.full)return void(Ne.init=!0);Ie(),z(),x.autoplay&&$()}Ne.init=!0}}function Ie(){if(!Ne.supported.full)return E("No full support for this media type ("+Ne.type+")",!0),u(L(x.selectors.controls.wrapper)),u(L(x.selectors.buttons.play)),void q(!0);var e=!B(x.selectors.controls.wrapper).length;e&&W(),G()&&(e&&_e(),Ee(),q(),I(),N(),le(),pe(),ve(),re(),be(),h(Ne.container,"ready"))}var Ne=this;return Ne.container=g,Ne.timers={},E(x),Se(),Ne.init?{media:Ne.media,play:$,pause:J,restart:ne,rewind:ee,forward:te,seek:ne,source:we,poster:Te,setVolume:le,togglePlay:K,toggleMute:ie,toggleCaptions:de,toggleFullscreen:se,isFullscreen:function(){return Ne.isFullscreen||!1},support:function(e){return a(Ne,e)},destroy:Fe,restore:Se}:{}}var C,F={},S={enabled:!0,debug:!1,autoplay:!1,loop:!1,seekTime:10,volume:5,volumeMin:0,volumeMax:10,volumeStep:1,duration:null,displayDuration:!0,iconPrefix:"plyr",iconUrl:"",clickToPlay:!0,hideControls:!0,showPosterOnEnd:!1,tooltips:{controls:!1,seek:!0},selectors:{container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{seek:'[data-plyr="seek"]',play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',forward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',fullscreen:'[data-plyr="fullscreen"]'},volume:{input:'[data-plyr="volume"]',display:".plyr__volume--display"},progress:{container:".plyr__progress",buffer:".plyr__progress--buffer",played:".plyr__progress--played"},captions:".plyr__captions",currentTime:".plyr__time--current",duration:".plyr__time--duration"},classes:{videoWrapper:"plyr__video-wrapper",embedWrapper:"plyr__video-embed",type:"plyr--{0}",stopped:"plyr--stopped",playing:"plyr--playing",muted:"plyr--muted",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",active:"plyr--fullscreen-active"},tabFocus:"tab-focus"},captions:{defaultActive:!1},fullscreen:{enabled:!0,fallback:!0,allowAudio:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","fullscreen"],i18n:{restart:"Restart",rewind:"Rewind {seektime} secs",play:"Play",pause:"Pause",forward:"Forward {seektime} secs",played:"played",buffered:"buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",toggleMute:"Toggle Mute",toggleCaptions:"Toggle Captions",toggleFullscreen:"Toggle Fullscreen",frameTitle:"Player for {title}"},types:{embed:["youtube","vimeo","soundcloud"],html5:["video","audio"]},urls:{vimeo:{api:"https://cdn.plyr.io/froogaloop/1.0.1/plyr.froogaloop.js"},youtube:{api:"https://www.youtube.com/iframe_api"},soundcloud:{api:"https://w.soundcloud.com/player/api.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,forward:null,mute:null,volume:null,captions:null,fullscreen:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","emptied"]};return F.supported=function(e){var a,r,s=n(),o="IE"===s.name&&s.version<=9,i=/iPhone|iPod/i.test(navigator.userAgent),l=!!t.createElement("audio").canPlayType,u=!!t.createElement("video").canPlayType;switch(e){case"video":a=u,r=a&&!o&&!i;break;case"audio":a=l,r=a&&!o;break;case"vimeo":case"youtube":case"soundcloud":a=!0,r=!o&&!i;break;default:a=l&&u,r=a&&!o}return{basic:a,full:r}},F.setup=function(e,n){var a=[];if("string"==typeof e?e=t.querySelectorAll(e):e instanceof HTMLElement?e=[e]:e instanceof NodeList||"string"==typeof e||("undefined"==typeof n&&"object"==typeof e&&(n=e),e=t.querySelectorAll(S.selectors.container)),!F.supported().basic||!e.length)return!1;for(var r=0;r<e.length;r++){var s=e[r];if("undefined"==typeof s.plyr){var o=x(S,n,JSON.parse(s.getAttribute("data-plyr")));if(!o.enabled)return;var i=new E(s,o);s.plyr=Object.keys(i).length?i:!1,h(s,"setup",{plyr:s.plyr})}a.push(s.plyr)}return a},F}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}return"function"==typeof window.CustomEvent?!1:(e.prototype=window.Event.prototype,void(window.CustomEvent=e))}();