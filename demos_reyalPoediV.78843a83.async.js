(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{ASxj:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=a("VTBJ"),c=a("wx14"),u=a("o0o1"),o=a.n(u),i=a("HaE+"),s=a("ODXe"),d=a("Ff2n"),m=e=>{var t=":",a=Math.floor(e/1e3),r=a%60,n=(a-r)/60,l=n%60,c=(n-l)/60;return 0===c?p(l)+t+p(r):p(c)+t+p(l)+t+p(r)},p=e=>e<10?"0"+e:""+e,v=(a("k49y"),e=>{var t=e.src,a=e.width,u=void 0===a?"100%":a,p=e.videoProps,v=void 0===p?{}:p,b=e.className,f=void 0===b?"":b,E=e.style,h=void 0===E?{}:E,y=e.poster,j=void 0===y?"":y,w=e.showPanel,O=void 0===w||w,k=e.height,g=void 0===k?"100%":k,P=e.autoHidePanel,S=void 0===P||P,F=e.panelOptions,R=void 0===F?{}:F,x=e.defaultVolume,M=void 0===x?1:x,C=e.defaultPlayRate,N=void 0===C?1:C,T=e.defaultPlayRateArray,_=void 0===T?[.5,.75,1,1.5,2]:T,X=Object(d["a"])(e,["src","width","videoProps","className","style","poster","showPanel","height","autoHidePanel","panelOptions","defaultVolume","defaultPlayRate","defaultPlayRateArray"]),q=R.showPlayBackForward,L=void 0===q||q,H=R.showStop,I=void 0===H||H,A=R.showVolume,V=void 0===A||A,z=R.showFullScreen,B=void 0===z||z,W=R.showPlayDuration,D=void 0===W||W,J=R.panelClassName,G=void 0===J?"":J,U=R.panelStyle,Y=void 0===U?{}:U,K=R.panelGap,Q=void 0===K?20:K,Z=R.panelHeight,$=void 0===Z?28:Z,ee=R.showPlayRate,te=void 0===ee||ee,ae=R.showPlayButton,re=void 0===ae||ae,ne=R.showPicInPic,le=void 0===ne||ne,ce=Math.abs(Q),ue="object"===typeof S&&S.timeout?S.timeout:3e3,oe=window.document,ie=()=>!!(oe.fullScreen||oe.webkitIsFullScreen||oe.mozFullScreen||oe.msFullscreenElement||oe.fullscreenElement),se=Object(r["useRef"])(),de=Object(r["useRef"])(),me=Object(r["useRef"])(),pe=Object(r["useRef"])(),ve=Object(r["useRef"])(),be=Object(r["useRef"])(),fe=Object(r["useRef"])(),Ee=Object(r["useState"])(!1),he=Object(s["a"])(Ee,2),ye=he[0],je=he[1],we=Object(r["useState"])(0===M),Oe=Object(s["a"])(we,2),ke=Oe[0],ge=Oe[1],Pe=Object(r["useState"])(0),Se=Object(s["a"])(Pe,2),Fe=Se[0],Re=Se[1],xe=Object(r["useState"])(0),Me=Object(s["a"])(xe,2),Ce=Me[0],Ne=Me[1],Te=Object(r["useState"])(N),_e=Object(s["a"])(Te,2),Xe=_e[0],qe=_e[1],Le=Object(r["useState"])(ie()),He=Object(s["a"])(Le,2),Ie=He[0],Ae=He[1],Ve=Object(r["useState"])(oe.pictureInPictureElement),ze=Object(s["a"])(Ve,2),Be=ze[0],We=ze[1],De=Object(r["useState"])(!1),Je=Object(s["a"])(De,2),Ge=Je[0],Ue=Je[1],Ye=Object(r["useState"])(!1),Ke=Object(s["a"])(Ye,2),Qe=Ke[0],Ze=Ke[1],$e=Object(r["useState"])(!S),et=Object(s["a"])($e,2),tt=et[0],at=et[1],rt=Object(r["useRef"])(!!oe.createElement("video").canPlayType),nt=Object(r["useRef"])(oe.fullscreenEnabled||oe.mozFullScreenEnabled||oe.msFullscreenEnabled||oe.webkitSupportsFullscreen||oe.webkitFullscreenEnabled||oe.createElement("video").webkitRequestFullScreen),lt=Object(r["useRef"])(void 0!==oe.createElement("progress").max),ct="pictureInPictureEnabled"in oe,ut=e=>{var t;Be&&We(!1);var a=se.current;null===a||void 0===a||null===(t=a.pause)||void 0===t||t.call(a),je(!1)};Object(r["useEffect"])((()=>{var e=se.current;return e.addEventListener("leavepictureinpicture",ut),()=>{e.removeEventListener("leavepictureinpicture",ut)}}),[]);var ot=()=>{var e=se.current;e.paused||e.ended?(e.playbackRate=Xe,e.play()):e.pause(),je(!ye)},it=()=>{var e=se.current,t=me.current;null===e||void 0===e||e.pause(),e.currentTime=0,t.value=0,je(!1)},st=e=>{var t=me.current,a=se.current,r=(e.pageX-t.offsetParent.offsetParent.offsetLeft-t.offsetLeft-ce)/t.offsetWidth,n=Math.floor(Math.max(0,Math.min(1,r))*a.duration*100)/100;console.log("==>",{value:n}),a.currentTime=n,t.value=n},dt=()=>{var e=me.current,t=se.current;e.getAttribute("max")||e.setAttribute("max",t.duration),Ne(t.currentTime)},mt=()=>{je(!1)},pt=()=>{var e=se.current;e.muted=!e.muted,ge(!ke)},vt=e=>{var t=pe.current,a=se.current,r=t.getBoundingClientRect(),n=r.top,l=(e.pageY-n)/t.offsetWidth,c=1-Math.max(0,Math.min(1,l));a.volume=c,t.value=c},bt=()=>{Ge||ke||Ue(!0)},ft=()=>{clearTimeout(ve.current),Ge&&(ve.current=setTimeout((()=>Ue(!1)),200))},Et=()=>{Qe||Ze(!0)},ht=()=>{clearTimeout(be.current),Qe&&(be.current=setTimeout((()=>Ze(!1)),200))},yt=()=>{if(ie())oe.exitFullscreen?oe.exitFullscreen():oe.mozCancelFullScreen?oe.mozCancelFullScreen():oe.webkitCancelFullScreen?oe.webkitCancelFullScreen():oe.msExitFullscreen&&oe.msExitFullscreen(),Ae(!1);else{var e=de.current,t=se.current;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen?t.webkitRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen(),Ae(!0)}},jt=()=>{var e=de.current,t=se.current;Re((null===t||void 0===t?void 0:t.duration)||0),t.volume=M,t.defaultPlaybackRate=N,e.clientWidth*t.videoHeight>=e.clientHeight*t.videoWidth?t.height=e.clientHeight:t.width=e.clientWidth},wt=e=>{var t=se.current,a=15;if("-"===e){var r=Math.max(Ce-a,0);if(r===Ce)return;t.currentTime=r,Ne(r)}if("+"===e){var n=Math.min(Ce+a,Fe);if(n===Ce)return;t.currentTime=n,Ne(n)}},Ot=e=>{var t=m(1e3*e);return n.a.createElement("li",{className:"video-time ".concat(t.length<=5?"video-time-short":"")},n.a.createElement("button",null,t))},kt=()=>{var e=se.current;e.playbackRate=5},gt=e=>{e&&(qe(e),se.current.playbackRate=e,Ze(!1))},Pt=function(){var e=Object(i["a"])(o.a.mark((function e(){var t;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=se.current,e.prev=1,t===oe.pictureInPictureElement){e.next=8;break}return e.next=5,t.requestPictureInPicture();case 5:We(!0),e.next=12;break;case 8:return e.next=10,oe.exitPictureInPicture();case 10:je(!(t.paused||t.ended)),We(!1);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](1),console.log("==>","Enter pic-in-pic mode failed!");case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}(),St=e=>e===Xe;return n.a.createElement("div",Object(c["a"])({"data-testid":"VideoPlayer"},X,{className:"video__player--wrapper",onContextMenu:e=>e.preventDefault(),style:{width:u,height:g},onMouseEnter:()=>{clearTimeout(fe.current),S&&at(!0)},onMouseLeave:()=>{S&&(fe.current=setTimeout((()=>at(!1)),ue))}}),n.a.createElement("figure",{className:"video__figure--container",ref:de},n.a.createElement("video",Object(c["a"])({},v,{style:h,className:f,id:"video",preload:"metadata",poster:j,src:t,ref:se,onTimeUpdate:dt,onEnded:mt,onLoadedMetadata:jt})),rt.current&&O&&tt&&n.a.createElement("ul",{className:"controls__panel--wrapper ".concat(G),style:Object(l["a"])(Object(l["a"])({},Y),{},{width:"calc(".concat(u," - ").concat(2*ce,"px)"),height:$})},L&&n.a.createElement("li",null,n.a.createElement("button",{type:"button","data-state":"play-back",onClick:()=>wt("-")})),n.a.createElement("li",null,n.a.createElement("button",{type:"button","data-state":ye?"pause":"play",onClick:ot})),L&&n.a.createElement("li",null,n.a.createElement("button",{type:"button","data-state":"play-front",onClick:()=>wt("+")})),I&&n.a.createElement("li",null,n.a.createElement("button",{type:"button","data-state":"stop",onClick:it})),D&&Ot(Ce),n.a.createElement("li",{className:"progress"},n.a.createElement("progress",{id:"progress",value:Ce,max:Fe,"data-state":lt.current?"progress":"fake",ref:me,onClick:st})),D&&Ot(Fe),V&&n.a.createElement("li",{style:{position:"relative"}},n.a.createElement("button",{className:"mute",type:"button",onClick:pt,"data-state":ke?"mute":"unmute",onMouseEnter:bt,onMouseLeave:ft}),Ge&&n.a.createElement("div",{className:"audio__progress--wrapper",onMouseEnter:()=>{Ge&&clearTimeout(ve.current)},onMouseLeave:ft},n.a.createElement("progress",{className:"audio__progress--block",value:ke?0:se.current.volume,max:1,"data-state":lt.current?"audio-progress":"fake",ref:pe,onClick:vt}))),te&&n.a.createElement("li",{className:"video-rate"},n.a.createElement("button",{onClick:kt,onMouseEnter:Et,onMouseLeave:ht},"x".concat(Xe)),Qe&&n.a.createElement("div",{className:"player__rate--wrapper",onMouseEnter:()=>{Qe&&clearTimeout(be.current)},onMouseLeave:ht},n.a.createElement("ul",null,_.map((e=>n.a.createElement("li",{key:"".concat(e,"-").concat(100*Math.random()),onClick:()=>gt(e),className:St(e)?"active":""},e)))))),nt.current&&B&&n.a.createElement("li",null,n.a.createElement("button",{type:"button","data-state":Ie?"exit-fullscreen":"fullscreen",onClick:yt})),ct&&le&&n.a.createElement("li",null,n.a.createElement("button",{type:"button","data-state":Be?"exit-pic-in-pic":"pic-in-pic",onClick:Pt}))),re&&n.a.createElement("div",{className:"fast__play--btn ".concat(ye?"":"not-play"),"data-state":ye?"pause":"play",onClick:ot})))});v.displayName="VideoPlayer";var b=v,f="http://jonsam.site/wp-content/uploads/2019/06/timervideo_2.mp4",E=()=>n.a.createElement("div",{style:{width:600,height:400}},n.a.createElement(b,{autoHidePanel:!1,src:f,poster:"https://img.alicdn.com/tfscom/TB19dgvGFXXXXXPXpXXSutbFXXX.jpg_200x200.jpg",panelOptions:{panelStyle:{bottom:8}},defaultVolume:.1,defaultPlayRate:2,defaultPlayRateArray:[.5,.75,1,1.5,2,3,5]}));t["default"]=()=>n.a.createElement(E,null)},ipwC:function(e,t,a){"use strict";a.r(t),t["default"]={"videoplayer-basic":{component:a("ASxj").default}}},k49y:function(e,t,a){}}]);