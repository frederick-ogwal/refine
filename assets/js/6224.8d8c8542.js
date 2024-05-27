"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6224],{17790:(e,t,n)=>{n.d(t,{A:()=>h});var r=n(37953),i=n(5569),l=n(95068),a=n(97761),o=n(13499),s=n(83530);const u=r.createContext({collectLink:()=>{}});var c=n(45490);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function v(e,t){var{isNavLink:n,to:f,href:v,activeClassName:h,isActive:g,"data-noBrokenLinkCheck":b,autoAddBaseUrl:w=!0}=e,y=m(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:E,baseUrl:O}}=(0,a.A)(),{withBaseUrl:S}=(0,c.h)(),C=(0,r.useContext)(u),j=(0,r.useRef)(null);(0,r.useImperativeHandle)(t,(()=>j.current));const T=f||v;const P=(0,o.A)(T),F=null==T?void 0:T.replace("pathname://","");let k=void 0!==F?(L=F,w&&(e=>e.startsWith("/"))(L)?S(L):L):void 0;var L;k&&P&&(k=(0,l.applyTrailingSlash)(k,{trailingSlash:E,baseUrl:O}));const N=(0,r.useRef)(!1),A=n?i.k2:i.N_,R=s.A.canUseIntersectionObserver,x=(0,r.useRef)(),_=()=>{N.current||null==k||(window.docusaurus.preload(k),N.current=!0)};var U;(0,r.useEffect)((()=>(!R&&P&&null!=k&&window.docusaurus.prefetch(k),()=>{R&&x.current&&x.current.disconnect()})),[x,k,R,P]);const D=null!==(U=null==k?void 0:k.startsWith("#"))&&void 0!==U&&U,H=!k||!P||D;return H||b||C.collectLink(k),H?r.createElement("a",d({ref:j,href:k},T&&!P&&{target:"_blank",rel:"noopener noreferrer"},y)):r.createElement(A,d(p(d({},y),{onMouseEnter:_,onTouchStart:_,innerRef:e=>{j.current=e,R&&e&&P&&(x.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(x.current.unobserve(e),x.current.disconnect(),null!=k&&window.docusaurus.prefetch(k))}))})),x.current.observe(e))},to:k}),n&&{isActive:g,activeClassName:h}))}const h=r.forwardRef(v)},91641:(e,t,n)=>{n.d(t,{D:()=>i});var r,i=((r=i||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},77222:(e,t,n)=>{n.d(t,{e:()=>R});var r=n(37953),i=n(99151),l=n(41220),a=n(56507);var o=n(31110),s=n(3177),u=n(7988),c=n(26984),f=n(58108),d=n(4974);function p(e,...t){e&&t.length>0&&e.classList.add(...t)}function m(e,...t){e&&t.length>0&&e.classList.remove(...t)}function v(e,t,n,r){let i=n?"enter":"leave",l=(0,f.e)(),a=void 0!==r?function(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}(r):()=>{};"enter"===i&&(e.removeAttribute("hidden"),e.style.display="");let o=(0,d.Y)(i,{enter:()=>t.enter,leave:()=>t.leave}),s=(0,d.Y)(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),u=(0,d.Y)(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return m(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),p(e,...t.base,...o,...u),l.nextFrame((()=>{m(e,...t.base,...o,...u),p(e,...t.base,...o,...s),function(e,t){let n=(0,f.e)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[l,a]=[r,i].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t})),o=l+a;if(0!==o){n.group((n=>{n.setTimeout((()=>{t(),n.dispose()}),o),n.addEventListener(e,"transitionrun",(e=>{e.target===e.currentTarget&&n.dispose()}))}));let r=n.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t(),r())}))}else t();n.add((()=>t())),n.dispose}(e,(()=>(m(e,...t.base,...o),p(e,...t.base,...t.entered),a())))})),l.dispose}var h=n(31004),g=n(7522),b=n(22227);function w(e=""){return e.split(/\s+/).filter((e=>e.length>1))}let y=(0,r.createContext)(null);y.displayName="TransitionContext";var E,O=((E=O||{}).Visible="visible",E.Hidden="hidden",E);let S=(0,r.createContext)(null);function C(e){return"children"in e?C(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function j(e,t){let n=(0,s.Y)(e),o=(0,r.useRef)([]),u=(0,a.a)(),c=(0,i.L)(),f=(0,l._)(((e,t=b.mK.Hidden)=>{let r=o.current.findIndex((({el:t})=>t===e));-1!==r&&((0,d.Y)(t,{[b.mK.Unmount](){o.current.splice(r,1)},[b.mK.Hidden](){o.current[r].state="hidden"}}),c.microTask((()=>{var e;!C(o)&&u.current&&(null==(e=n.current)||e.call(n))})))})),p=(0,l._)((e=>{let t=o.current.find((({el:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):o.current.push({el:e,state:"visible"}),()=>f(e,b.mK.Unmount)})),m=(0,r.useRef)([]),v=(0,r.useRef)(Promise.resolve()),h=(0,r.useRef)({enter:[],leave:[],idle:[]}),g=(0,l._)(((e,n,r)=>{m.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter((([t])=>t!==e))),null==t||t.chains.current[n].push([e,new Promise((e=>{m.current.push(e)}))]),null==t||t.chains.current[n].push([e,new Promise((e=>{Promise.all(h.current[n].map((([e,t])=>t))).then((()=>e()))}))]),"enter"===n?v.current=v.current.then((()=>null==t?void 0:t.wait.current)).then((()=>r(n))):r(n)})),w=(0,l._)(((e,t,n)=>{Promise.all(h.current[t].splice(0).map((([e,t])=>t))).then((()=>{var e;null==(e=m.current.shift())||e()})).then((()=>n(t)))}));return(0,r.useMemo)((()=>({children:o,register:p,unregister:f,onStart:g,onStop:w,wait:v,chains:h})),[p,f,o,g,w,h,v])}function T(){}S.displayName="NestingContext";let P=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function F(e){var t;let n={};for(let r of P)n[r]=null!=(t=e[r])?t:T;return n}let k=b.O5.RenderStrategy;let L=(0,b.FX)((function(e,t){let{show:n,appear:i=!1,unmount:a=!0,...s}=e,f=(0,r.useRef)(null),d=(0,c.P)(f,t);(0,u.g)();let p=(0,h.O_)();if(void 0===n&&null!==p&&(n=(p&h.Uw.Open)===h.Uw.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[m,v]=(0,r.useState)(n?"visible":"hidden"),g=j((()=>{v("hidden")})),[w,E]=(0,r.useState)(!0),O=(0,r.useRef)([n]);(0,o.s)((()=>{!1!==w&&O.current[O.current.length-1]!==n&&(O.current.push(n),E(!1))}),[O,n]);let T=(0,r.useMemo)((()=>({show:n,appear:i,initial:w})),[n,i,w]);(0,r.useEffect)((()=>{if(n)v("visible");else if(C(g)){let e=f.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&v("hidden")}else v("hidden")}),[n,g]);let P={unmount:a},F=(0,l._)((()=>{var t;w&&E(!1),null==(t=e.beforeEnter)||t.call(e)})),L=(0,l._)((()=>{var t;w&&E(!1),null==(t=e.beforeLeave)||t.call(e)}));return r.createElement(S.Provider,{value:g},r.createElement(y.Provider,{value:T},(0,b.XX)({ourProps:{...P,as:r.Fragment,children:r.createElement(N,{ref:d,...P,...s,beforeEnter:F,beforeLeave:L})},theirProps:{},defaultTag:r.Fragment,features:k,visible:"visible"===m,name:"Transition"})))})),N=(0,b.FX)((function(e,t){var n,p;let{beforeEnter:m,afterEnter:E,beforeLeave:O,afterLeave:T,enter:P,enterFrom:L,enterTo:N,entered:A,leave:R,leaveFrom:x,leaveTo:_,...U}=e,D=(0,r.useRef)(null),H=(0,c.P)(D,t),Y=null==(n=U.unmount)||n?b.mK.Unmount:b.mK.Hidden,{show:B,appear:I,initial:M}=function(){let e=(0,r.useContext)(y);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[X,K]=(0,r.useState)(B?"visible":"hidden"),q=function(){let e=(0,r.useContext)(S);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:$,unregister:V}=q;(0,r.useEffect)((()=>$(D)),[$,D]),(0,r.useEffect)((()=>{if(Y===b.mK.Hidden&&D.current)return B&&"visible"!==X?void K("visible"):(0,d.Y)(X,{hidden:()=>V(D),visible:()=>$(D)})}),[X,D,$,V,B,Y]);let W=(0,s.Y)({base:w(U.className),enter:w(P),enterFrom:w(L),enterTo:w(N),entered:w(A),leave:w(R),leaveFrom:w(x),leaveTo:w(_)}),z=function(e){let t=(0,r.useRef)(F(e));return(0,r.useEffect)((()=>{t.current=F(e)}),[e]),t}({beforeEnter:m,afterEnter:E,beforeLeave:O,afterLeave:T}),G=(0,u.g)();(0,r.useEffect)((()=>{if(G&&"visible"===X&&null===D.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[D,X,G]);let J=I&&B&&M,Q=!G||M&&!I?"idle":B?"enter":"leave",Z=function(e=0){let[t,n]=(0,r.useState)(e),i=(0,a.a)(),l=(0,r.useCallback)((e=>{i.current&&n((t=>t|e))}),[t,i]),o=(0,r.useCallback)((e=>Boolean(t&e)),[t]),s=(0,r.useCallback)((e=>{i.current&&n((t=>t&~e))}),[n,i]),u=(0,r.useCallback)((e=>{i.current&&n((t=>t^e))}),[n]);return{flags:t,addFlag:l,hasFlag:o,removeFlag:s,toggleFlag:u}}(0),ee=(0,l._)((e=>(0,d.Y)(e,{enter:()=>{Z.addFlag(h.Uw.Opening),z.current.beforeEnter()},leave:()=>{Z.addFlag(h.Uw.Closing),z.current.beforeLeave()},idle:()=>{}}))),te=(0,l._)((e=>(0,d.Y)(e,{enter:()=>{Z.removeFlag(h.Uw.Opening),z.current.afterEnter()},leave:()=>{Z.removeFlag(h.Uw.Closing),z.current.afterLeave()},idle:()=>{}}))),ne=j((()=>{K("hidden"),V(D)}),q),re=(0,r.useRef)(!1);!function({immediate:e,container:t,direction:n,classes:r,onStart:l,onStop:u}){let c=(0,a.a)(),d=(0,i.L)(),p=(0,s.Y)(n);(0,o.s)((()=>{e&&(p.current="enter")}),[e]),(0,o.s)((()=>{let e=(0,f.e)();d.add(e.dispose);let n=t.current;if(n&&"idle"!==p.current&&c.current)return e.dispose(),l.current(p.current),e.add(v(n,r.current,"enter"===p.current,(()=>{e.dispose(),u.current(p.current)}))),e.dispose}),[n])}({immediate:J,container:D,classes:W,direction:Q,onStart:(0,s.Y)((e=>{re.current=!0,ne.onStart(D,e,ee)})),onStop:(0,s.Y)((e=>{re.current=!1,ne.onStop(D,e,te),"leave"===e&&!C(ne)&&(K("hidden"),V(D))}))});let ie=U,le={ref:H};return J?ie={...ie,className:(0,g.x)(U.className,...W.current.enter,...W.current.enterFrom)}:re.current&&(ie.className=(0,g.x)(U.className,null==(p=D.current)?void 0:p.className),""===ie.className&&delete ie.className),r.createElement(S.Provider,{value:ne},r.createElement(h.El,{value:(0,d.Y)(X,{visible:h.Uw.Open,hidden:h.Uw.Closed})|Z.flags},(0,b.XX)({ourProps:le,theirProps:ie,defaultTag:"div",features:k,visible:"visible"===X,name:"Transition.Child"})))})),A=(0,b.FX)((function(e,t){let n=null!==(0,r.useContext)(y),i=null!==(0,h.O_)();return r.createElement(r.Fragment,null,!n&&i?r.createElement(L,{ref:t,...e}):r.createElement(N,{ref:t,...e}))})),R=Object.assign(L,{Child:A,Root:L})},99151:(e,t,n)=>{n.d(t,{L:()=>l});var r=n(37953),i=n(58108);function l(){let[e]=(0,r.useState)(i.e);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}},41220:(e,t,n)=>{n.d(t,{_:()=>l});var r=n(37953),i=n(3177);let l=function(e){let t=(0,i.Y)(e);return r.useCallback(((...e)=>t.current(...e)),[t])}},71519:(e,t,n)=>{n.d(t,{B:()=>s});var r,i=n(37953),l=n(48112),a=n(31110),o=n(7988);let s=null!=(r=i.useId)?r:function(){let e=(0,o.g)(),[t,n]=i.useState(e?()=>l._.nextId():null);return(0,a.s)((()=>{null===t&&n(l._.nextId())}),[t]),null!=t?""+t:void 0}},56507:(e,t,n)=>{n.d(t,{a:()=>l});var r=n(37953),i=n(31110);function l(){let e=(0,r.useRef)(!1);return(0,i.s)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},31110:(e,t,n)=>{n.d(t,{s:()=>l});var r=n(37953),i=n(48112);let l=(e,t)=>{i._.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},3177:(e,t,n)=>{n.d(t,{Y:()=>l});var r=n(37953),i=n(31110);function l(e){let t=(0,r.useRef)(e);return(0,i.s)((()=>{t.current=e}),[e]),t}},39334:(e,t,n)=>{n.d(t,{c:()=>a});var r=n(37953),i=n(31110);function l(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function a(e,t){let[n,a]=(0,r.useState)((()=>l(e)));return(0,i.s)((()=>{a(l(e))}),[e.type,e.as]),(0,i.s)((()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")}),[n,t]),n}},7988:(e,t,n)=>{n.d(t,{g:()=>l});var r=n(37953),i=n(48112);function l(){let[e,t]=r.useState(i._.isHandoffComplete);return e&&!1===i._.isHandoffComplete&&t(!1),r.useEffect((()=>{!0!==e&&t(!0)}),[e]),r.useEffect((()=>i._.handoff()),[]),e}},26984:(e,t,n)=>{n.d(t,{P:()=>o,a:()=>a});var r=n(37953),i=n(41220);let l=Symbol();function a(e,t=!0){return Object.assign(e,{[l]:t})}function o(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=(0,i._)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[l])))?void 0:n}},31004:(e,t,n)=>{n.d(t,{El:()=>s,O_:()=>o,Uw:()=>a});var r=n(37953);let i=(0,r.createContext)(null);i.displayName="OpenClosedContext";var l,a=((l=a||{})[l.Open=1]="Open",l[l.Closed=2]="Closed",l[l.Closing=4]="Closing",l[l.Opening=8]="Opening",l);function o(){return(0,r.useContext)(i)}function s({value:e,children:t}){return r.createElement(i.Provider,{value:e},t)}},59796:(e,t,n)=>{function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{l:()=>r})},7522:(e,t,n)=>{function r(...e){return Array.from(new Set(e.flatMap((e=>"string"==typeof e?e.split(" "):[])))).filter(Boolean).join(" ")}n.d(t,{x:()=>r})},58108:(e,t,n)=>{n.d(t,{e:()=>i});var r=n(60777);function i(){let e=[],t={addEventListener:(e,n,r,i)=>(e.addEventListener(n,r,i),t.add((()=>e.removeEventListener(n,r,i)))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(n)))},nextFrame:(...e)=>t.requestAnimationFrame((()=>t.requestAnimationFrame(...e))),setTimeout(...e){let n=setTimeout(...e);return t.add((()=>clearTimeout(n)))},microTask(...e){let n={current:!0};return(0,r._)((()=>{n.current&&e[0]()})),t.add((()=>{n.current=!1}))},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add((()=>{Object.assign(e.style,{[t]:r})}))},group(e){let t=i();return e(t),this.add((()=>t.dispose()))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}},48112:(e,t,n)=>{n.d(t,{_:()=>l});var r=Object.defineProperty,i=(e,t,n)=>(((e,t,n)=>{t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);let l=new class{constructor(){i(this,"current",this.detect()),i(this,"handoffState","pending"),i(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},4974:(e,t,n)=>{function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let i=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,r),i}n.d(t,{Y:()=>r})},60777:(e,t,n)=>{function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}n.d(t,{_:()=>r})},57464:(e,t,n)=>{n.d(t,{T:()=>i});var r=n(48112);function i(e){return r._.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},22227:(e,t,n)=>{n.d(t,{FX:()=>v,O5:()=>s,XX:()=>c,cq:()=>d,mK:()=>u});var r,i,l=n(37953),a=n(7522),o=n(4974),s=((i=s||{})[i.None=0]="None",i[i.RenderStrategy=1]="RenderStrategy",i[i.Static=2]="Static",i),u=((r=u||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:l=!0,name:a,mergeRefs:s}){s=null!=s?s:p;let u=m(t,e);if(l)return f(u,n,r,a,s);let c=null!=i?i:0;if(2&c){let{static:e=!1,...t}=u;if(e)return f(t,n,r,a,s)}if(1&c){let{unmount:e=!0,...t}=u;return(0,o.Y)(e?0:1,{0:()=>null,1:()=>f({...t,hidden:!0,style:{display:"none"}},n,r,a,s)})}return f(u,n,r,a,s)}function f(e,t={},n,r,i){let{as:o=n,children:s,refName:u="ref",...c}=g(e,["unmount","static"]),f=void 0!==e.ref?{[u]:e.ref}:{},d="function"==typeof s?s(t):s;"className"in c&&c.className&&"function"==typeof c.className&&(c.className=c.className(t));let p={};if(t){let e=!1,n=[];for(let[r,i]of Object.entries(t))"boolean"==typeof i&&(e=!0),!0===i&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(o===l.Fragment&&Object.keys(h(c)).length>0){if(!(0,l.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,a.x)(null==e?void 0:e.className(...t),c.className):(0,a.x)(null==e?void 0:e.className,c.className),n=t?{className:t}:{};return(0,l.cloneElement)(d,Object.assign({},m(d.props,h(g(c,["ref"]))),p,f,{ref:i(d.ref,f.ref)},n))}return(0,l.createElement)(o,Object.assign({},g(c,["ref"]),o!==l.Fragment&&f,o!==l.Fragment&&p),d)}function d(){let e=(0,l.useRef)([]),t=(0,l.useCallback)((t=>{for(let n of e.current)null!=n&&("function"==typeof n?n(t):n.current=t)}),[]);return(...n)=>{if(!n.every((e=>null==e)))return e.current=n,t}}function p(...e){return e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}function m(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let i=n[r];for(let n of i){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function v(e){var t;return Object.assign((0,l.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function h(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function g(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}}}]);