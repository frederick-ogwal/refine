"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1058,87310],{17790:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(37953),o=r(5569),a=r(95068),i=r(97761),l=r(13499),s=r(83530);const u=n.createContext({collectLink:()=>{}});var c=r(45490);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function h(e,t){var{isNavLink:r,to:d,href:h,activeClassName:g,isActive:v,"data-noBrokenLinkCheck":b,autoAddBaseUrl:w=!0}=e,y=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:E,baseUrl:O}}=(0,i.A)(),{withBaseUrl:P}=(0,c.h)(),T=(0,n.useContext)(u),k=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,(()=>k.current));const S=d||h;const F=(0,l.A)(S),C=null==S?void 0:S.replace("pathname://","");let L=void 0!==C?(N=C,w&&(e=>e.startsWith("/"))(N)?P(N):N):void 0;var N;L&&F&&(L=(0,a.applyTrailingSlash)(L,{trailingSlash:E,baseUrl:O}));const j=(0,n.useRef)(!1),A=r?o.k2:o.N_,R=s.A.canUseIntersectionObserver,x=(0,n.useRef)(),_=()=>{j.current||null==L||(window.docusaurus.preload(L),j.current=!0)};var U;(0,n.useEffect)((()=>(!R&&F&&null!=L&&window.docusaurus.prefetch(L),()=>{R&&x.current&&x.current.disconnect()})),[x,L,R,F]);const D=null!==(U=null==L?void 0:L.startsWith("#"))&&void 0!==U&&U,B=!L||!F||D;return B||b||T.collectLink(L),B?n.createElement("a",f({ref:k,href:L},S&&!F&&{target:"_blank",rel:"noopener noreferrer"},y)):n.createElement(A,f(m(f({},y),{onMouseEnter:_,onTouchStart:_,innerRef:e=>{k.current=e,R&&e&&F&&(x.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(x.current.unobserve(e),x.current.disconnect(),null!=L&&window.docusaurus.prefetch(L))}))})),x.current.observe(e))},to:L}),r&&{isActive:v,activeClassName:g}))}const g=n.forwardRef(h)},64929:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(37953),o=r(90991),a=r(46962),i=r(25847);function l(){return n.createElement(n.Fragment,null,n.createElement(a.be,{title:(0,o.T)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(i.A,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},45475:(e,t,r)=>{r.d(t,{G:()=>n});const n={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button",codeBlock:"theme-code-block",admonition:"theme-admonition",admonitionType:e=>`theme-admonition-${e}`},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docBreadcrumbs:"theme-doc-breadcrumbs",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarContainer:"theme-doc-sidebar-container",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:e=>`theme-doc-sidebar-item-category-level-${e}`,docSidebarItemLinkLevel:e=>`theme-doc-sidebar-item-link-level-${e}`},blog:{}}},91641:(e,t,r)=>{r.d(t,{D:()=>o});var n,o=((n=o||{}).Space=" ",n.Enter="Enter",n.Escape="Escape",n.Backspace="Backspace",n.Delete="Delete",n.ArrowLeft="ArrowLeft",n.ArrowUp="ArrowUp",n.ArrowRight="ArrowRight",n.ArrowDown="ArrowDown",n.Home="Home",n.End="End",n.PageUp="PageUp",n.PageDown="PageDown",n.Tab="Tab",n)},77222:(e,t,r)=>{r.d(t,{e:()=>R});var n=r(37953),o=r(99151),a=r(41220),i=r(56507);var l=r(31110),s=r(3177),u=r(7988),c=r(26984),d=r(58108),f=r(4974);function m(e,...t){e&&t.length>0&&e.classList.add(...t)}function p(e,...t){e&&t.length>0&&e.classList.remove(...t)}function h(e,t,r,n){let o=r?"enter":"leave",a=(0,d.e)(),i=void 0!==n?function(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}(n):()=>{};"enter"===o&&(e.removeAttribute("hidden"),e.style.display="");let l=(0,f.Y)(o,{enter:()=>t.enter,leave:()=>t.leave}),s=(0,f.Y)(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),u=(0,f.Y)(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return p(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),m(e,...t.base,...l,...u),a.nextFrame((()=>{p(e,...t.base,...l,...u),m(e,...t.base,...l,...s),function(e,t){let r=(0,d.e)();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:o}=getComputedStyle(e),[a,i]=[n,o].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t})),l=a+i;if(0!==l){r.group((r=>{r.setTimeout((()=>{t(),r.dispose()}),l),r.addEventListener(e,"transitionrun",(e=>{e.target===e.currentTarget&&r.dispose()}))}));let n=r.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t(),n())}))}else t();r.add((()=>t())),r.dispose}(e,(()=>(p(e,...t.base,...l),m(e,...t.base,...t.entered),i())))})),a.dispose}var g=r(31004),v=r(7522),b=r(22227);function w(e=""){return e.split(/\s+/).filter((e=>e.length>1))}let y=(0,n.createContext)(null);y.displayName="TransitionContext";var E,O=((E=O||{}).Visible="visible",E.Hidden="hidden",E);let P=(0,n.createContext)(null);function T(e){return"children"in e?T(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function k(e,t){let r=(0,s.Y)(e),l=(0,n.useRef)([]),u=(0,i.a)(),c=(0,o.L)(),d=(0,a._)(((e,t=b.mK.Hidden)=>{let n=l.current.findIndex((({el:t})=>t===e));-1!==n&&((0,f.Y)(t,{[b.mK.Unmount](){l.current.splice(n,1)},[b.mK.Hidden](){l.current[n].state="hidden"}}),c.microTask((()=>{var e;!T(l)&&u.current&&(null==(e=r.current)||e.call(r))})))})),m=(0,a._)((e=>{let t=l.current.find((({el:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):l.current.push({el:e,state:"visible"}),()=>d(e,b.mK.Unmount)})),p=(0,n.useRef)([]),h=(0,n.useRef)(Promise.resolve()),g=(0,n.useRef)({enter:[],leave:[],idle:[]}),v=(0,a._)(((e,r,n)=>{p.current.splice(0),t&&(t.chains.current[r]=t.chains.current[r].filter((([t])=>t!==e))),null==t||t.chains.current[r].push([e,new Promise((e=>{p.current.push(e)}))]),null==t||t.chains.current[r].push([e,new Promise((e=>{Promise.all(g.current[r].map((([e,t])=>t))).then((()=>e()))}))]),"enter"===r?h.current=h.current.then((()=>null==t?void 0:t.wait.current)).then((()=>n(r))):n(r)})),w=(0,a._)(((e,t,r)=>{Promise.all(g.current[t].splice(0).map((([e,t])=>t))).then((()=>{var e;null==(e=p.current.shift())||e()})).then((()=>r(t)))}));return(0,n.useMemo)((()=>({children:l,register:m,unregister:d,onStart:v,onStop:w,wait:h,chains:g})),[m,d,l,v,w,g,h])}function S(){}P.displayName="NestingContext";let F=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function C(e){var t;let r={};for(let n of F)r[n]=null!=(t=e[n])?t:S;return r}let L=b.O5.RenderStrategy;let N=(0,b.FX)((function(e,t){let{show:r,appear:o=!1,unmount:i=!0,...s}=e,d=(0,n.useRef)(null),f=(0,c.P)(d,t);(0,u.g)();let m=(0,g.O_)();if(void 0===r&&null!==m&&(r=(m&g.Uw.Open)===g.Uw.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[p,h]=(0,n.useState)(r?"visible":"hidden"),v=k((()=>{h("hidden")})),[w,E]=(0,n.useState)(!0),O=(0,n.useRef)([r]);(0,l.s)((()=>{!1!==w&&O.current[O.current.length-1]!==r&&(O.current.push(r),E(!1))}),[O,r]);let S=(0,n.useMemo)((()=>({show:r,appear:o,initial:w})),[r,o,w]);(0,n.useEffect)((()=>{if(r)h("visible");else if(T(v)){let e=d.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")}),[r,v]);let F={unmount:i},C=(0,a._)((()=>{var t;w&&E(!1),null==(t=e.beforeEnter)||t.call(e)})),N=(0,a._)((()=>{var t;w&&E(!1),null==(t=e.beforeLeave)||t.call(e)}));return n.createElement(P.Provider,{value:v},n.createElement(y.Provider,{value:S},(0,b.XX)({ourProps:{...F,as:n.Fragment,children:n.createElement(j,{ref:f,...F,...s,beforeEnter:C,beforeLeave:N})},theirProps:{},defaultTag:n.Fragment,features:L,visible:"visible"===p,name:"Transition"})))})),j=(0,b.FX)((function(e,t){var r,m;let{beforeEnter:p,afterEnter:E,beforeLeave:O,afterLeave:S,enter:F,enterFrom:N,enterTo:j,entered:A,leave:R,leaveFrom:x,leaveTo:_,...U}=e,D=(0,n.useRef)(null),B=(0,c.P)(D,t),H=null==(r=U.unmount)||r?b.mK.Unmount:b.mK.Hidden,{show:Y,appear:I,initial:M}=function(){let e=(0,n.useContext)(y);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[X,$]=(0,n.useState)(Y?"visible":"hidden"),K=function(){let e=(0,n.useContext)(P);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:q,unregister:V}=K;(0,n.useEffect)((()=>q(D)),[q,D]),(0,n.useEffect)((()=>{if(H===b.mK.Hidden&&D.current)return Y&&"visible"!==X?void $("visible"):(0,f.Y)(X,{hidden:()=>V(D),visible:()=>q(D)})}),[X,D,q,V,Y,H]);let W=(0,s.Y)({base:w(U.className),enter:w(F),enterFrom:w(N),enterTo:w(j),entered:w(A),leave:w(R),leaveFrom:w(x),leaveTo:w(_)}),G=function(e){let t=(0,n.useRef)(C(e));return(0,n.useEffect)((()=>{t.current=C(e)}),[e]),t}({beforeEnter:p,afterEnter:E,beforeLeave:O,afterLeave:S}),z=(0,u.g)();(0,n.useEffect)((()=>{if(z&&"visible"===X&&null===D.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[D,X,z]);let J=I&&Y&&M,Q=!z||M&&!I?"idle":Y?"enter":"leave",Z=function(e=0){let[t,r]=(0,n.useState)(e),o=(0,i.a)(),a=(0,n.useCallback)((e=>{o.current&&r((t=>t|e))}),[t,o]),l=(0,n.useCallback)((e=>Boolean(t&e)),[t]),s=(0,n.useCallback)((e=>{o.current&&r((t=>t&~e))}),[r,o]),u=(0,n.useCallback)((e=>{o.current&&r((t=>t^e))}),[r]);return{flags:t,addFlag:a,hasFlag:l,removeFlag:s,toggleFlag:u}}(0),ee=(0,a._)((e=>(0,f.Y)(e,{enter:()=>{Z.addFlag(g.Uw.Opening),G.current.beforeEnter()},leave:()=>{Z.addFlag(g.Uw.Closing),G.current.beforeLeave()},idle:()=>{}}))),te=(0,a._)((e=>(0,f.Y)(e,{enter:()=>{Z.removeFlag(g.Uw.Opening),G.current.afterEnter()},leave:()=>{Z.removeFlag(g.Uw.Closing),G.current.afterLeave()},idle:()=>{}}))),re=k((()=>{$("hidden"),V(D)}),K),ne=(0,n.useRef)(!1);!function({immediate:e,container:t,direction:r,classes:n,onStart:a,onStop:u}){let c=(0,i.a)(),f=(0,o.L)(),m=(0,s.Y)(r);(0,l.s)((()=>{e&&(m.current="enter")}),[e]),(0,l.s)((()=>{let e=(0,d.e)();f.add(e.dispose);let r=t.current;if(r&&"idle"!==m.current&&c.current)return e.dispose(),a.current(m.current),e.add(h(r,n.current,"enter"===m.current,(()=>{e.dispose(),u.current(m.current)}))),e.dispose}),[r])}({immediate:J,container:D,classes:W,direction:Q,onStart:(0,s.Y)((e=>{ne.current=!0,re.onStart(D,e,ee)})),onStop:(0,s.Y)((e=>{ne.current=!1,re.onStop(D,e,te),"leave"===e&&!T(re)&&($("hidden"),V(D))}))});let oe=U,ae={ref:B};return J?oe={...oe,className:(0,v.x)(U.className,...W.current.enter,...W.current.enterFrom)}:ne.current&&(oe.className=(0,v.x)(U.className,null==(m=D.current)?void 0:m.className),""===oe.className&&delete oe.className),n.createElement(P.Provider,{value:re},n.createElement(g.El,{value:(0,f.Y)(X,{visible:g.Uw.Open,hidden:g.Uw.Closed})|Z.flags},(0,b.XX)({ourProps:ae,theirProps:oe,defaultTag:"div",features:L,visible:"visible"===X,name:"Transition.Child"})))})),A=(0,b.FX)((function(e,t){let r=null!==(0,n.useContext)(y),o=null!==(0,g.O_)();return n.createElement(n.Fragment,null,!r&&o?n.createElement(N,{ref:t,...e}):n.createElement(j,{ref:t,...e}))})),R=Object.assign(N,{Child:A,Root:N})},99151:(e,t,r)=>{r.d(t,{L:()=>a});var n=r(37953),o=r(58108);function a(){let[e]=(0,n.useState)(o.e);return(0,n.useEffect)((()=>()=>e.dispose()),[e]),e}},41220:(e,t,r)=>{r.d(t,{_:()=>a});var n=r(37953),o=r(3177);let a=function(e){let t=(0,o.Y)(e);return n.useCallback(((...e)=>t.current(...e)),[t])}},71519:(e,t,r)=>{r.d(t,{B:()=>s});var n,o=r(37953),a=r(48112),i=r(31110),l=r(7988);let s=null!=(n=o.useId)?n:function(){let e=(0,l.g)(),[t,r]=o.useState(e?()=>a._.nextId():null);return(0,i.s)((()=>{null===t&&r(a._.nextId())}),[t]),null!=t?""+t:void 0}},56507:(e,t,r)=>{r.d(t,{a:()=>a});var n=r(37953),o=r(31110);function a(){let e=(0,n.useRef)(!1);return(0,o.s)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},31110:(e,t,r)=>{r.d(t,{s:()=>a});var n=r(37953),o=r(48112);let a=(e,t)=>{o._.isServer?(0,n.useEffect)(e,t):(0,n.useLayoutEffect)(e,t)}},3177:(e,t,r)=>{r.d(t,{Y:()=>a});var n=r(37953),o=r(31110);function a(e){let t=(0,n.useRef)(e);return(0,o.s)((()=>{t.current=e}),[e]),t}},39334:(e,t,r)=>{r.d(t,{c:()=>i});var n=r(37953),o=r(31110);function a(e){var t;if(e.type)return e.type;let r=null!=(t=e.as)?t:"button";return"string"==typeof r&&"button"===r.toLowerCase()?"button":void 0}function i(e,t){let[r,i]=(0,n.useState)((()=>a(e)));return(0,o.s)((()=>{i(a(e))}),[e.type,e.as]),(0,o.s)((()=>{r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&i("button")}),[r,t]),r}},7988:(e,t,r)=>{r.d(t,{g:()=>a});var n=r(37953),o=r(48112);function a(){let[e,t]=n.useState(o._.isHandoffComplete);return e&&!1===o._.isHandoffComplete&&t(!1),n.useEffect((()=>{!0!==e&&t(!0)}),[e]),n.useEffect((()=>o._.handoff()),[]),e}},26984:(e,t,r)=>{r.d(t,{P:()=>l,a:()=>i});var n=r(37953),o=r(41220);let a=Symbol();function i(e,t=!0){return Object.assign(e,{[a]:t})}function l(...e){let t=(0,n.useRef)(e);(0,n.useEffect)((()=>{t.current=e}),[e]);let r=(0,o._)((e=>{for(let r of t.current)null!=r&&("function"==typeof r?r(e):r.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[a])))?void 0:r}},31004:(e,t,r)=>{r.d(t,{El:()=>s,O_:()=>l,Uw:()=>i});var n=r(37953);let o=(0,n.createContext)(null);o.displayName="OpenClosedContext";var a,i=((a=i||{})[a.Open=1]="Open",a[a.Closed=2]="Closed",a[a.Closing=4]="Closing",a[a.Opening=8]="Opening",a);function l(){return(0,n.useContext)(o)}function s({value:e,children:t}){return n.createElement(o.Provider,{value:e},t)}},59796:(e,t,r)=>{function n(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let n=""===(null==t?void 0:t.getAttribute("disabled"));return(!n||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(r))&&n}r.d(t,{l:()=>n})},7522:(e,t,r)=>{function n(...e){return Array.from(new Set(e.flatMap((e=>"string"==typeof e?e.split(" "):[])))).filter(Boolean).join(" ")}r.d(t,{x:()=>n})},58108:(e,t,r)=>{r.d(t,{e:()=>o});var n=r(60777);function o(){let e=[],t={addEventListener:(e,r,n,o)=>(e.addEventListener(r,n,o),t.add((()=>e.removeEventListener(r,n,o)))),requestAnimationFrame(...e){let r=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(r)))},nextFrame:(...e)=>t.requestAnimationFrame((()=>t.requestAnimationFrame(...e))),setTimeout(...e){let r=setTimeout(...e);return t.add((()=>clearTimeout(r)))},microTask(...e){let r={current:!0};return(0,n._)((()=>{r.current&&e[0]()})),t.add((()=>{r.current=!1}))},style(e,t,r){let n=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:r}),this.add((()=>{Object.assign(e.style,{[t]:n})}))},group(e){let t=o();return e(t),this.add((()=>t.dispose()))},add:t=>(e.push(t),()=>{let r=e.indexOf(t);if(r>=0)for(let t of e.splice(r,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}},48112:(e,t,r)=>{r.d(t,{_:()=>a});var n=Object.defineProperty,o=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r);let a=new class{constructor(){o(this,"current",this.detect()),o(this,"handoffState","pending"),o(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},4974:(e,t,r)=>{function n(e,t,...r){if(e in t){let n=t[e];return"function"==typeof n?n(...r):n}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,n),o}r.d(t,{Y:()=>n})},60777:(e,t,r)=>{function n(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}r.d(t,{_:()=>n})},57464:(e,t,r)=>{r.d(t,{T:()=>o});var n=r(48112);function o(e){return n._.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},22227:(e,t,r)=>{r.d(t,{FX:()=>h,O5:()=>s,XX:()=>c,cq:()=>f,mK:()=>u});var n,o,a=r(37953),i=r(7522),l=r(4974),s=((o=s||{})[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o),u=((n=u||{})[n.Unmount=0]="Unmount",n[n.Hidden=1]="Hidden",n);function c({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:o,visible:a=!0,name:i,mergeRefs:s}){s=null!=s?s:m;let u=p(t,e);if(a)return d(u,r,n,i,s);let c=null!=o?o:0;if(2&c){let{static:e=!1,...t}=u;if(e)return d(t,r,n,i,s)}if(1&c){let{unmount:e=!0,...t}=u;return(0,l.Y)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},r,n,i,s)})}return d(u,r,n,i,s)}function d(e,t={},r,n,o){let{as:l=r,children:s,refName:u="ref",...c}=v(e,["unmount","static"]),d=void 0!==e.ref?{[u]:e.ref}:{},f="function"==typeof s?s(t):s;"className"in c&&c.className&&"function"==typeof c.className&&(c.className=c.className(t));let m={};if(t){let e=!1,r=[];for(let[n,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&r.push(n);e&&(m["data-headlessui-state"]=r.join(" "))}if(l===a.Fragment&&Object.keys(g(c)).length>0){if(!(0,a.isValidElement)(f)||Array.isArray(f)&&f.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=f.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,i.x)(null==e?void 0:e.className(...t),c.className):(0,i.x)(null==e?void 0:e.className,c.className),r=t?{className:t}:{};return(0,a.cloneElement)(f,Object.assign({},p(f.props,g(v(c,["ref"]))),m,d,{ref:o(f.ref,d.ref)},r))}return(0,a.createElement)(l,Object.assign({},v(c,["ref"]),l!==a.Fragment&&d,l!==a.Fragment&&m),f)}function f(){let e=(0,a.useRef)([]),t=(0,a.useCallback)((t=>{for(let r of e.current)null!=r&&("function"==typeof r?r(t):r.current=t)}),[]);return(...r)=>{if(!r.every((e=>null==e)))return e.current=r,t}}function m(...e){return e.every((e=>null==e))?void 0:t=>{for(let r of e)null!=r&&("function"==typeof r?r(t):r.current=t)}}function p(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},r={};for(let n of e)for(let e in n)e.startsWith("on")&&"function"==typeof n[e]?(null!=r[e]||(r[e]=[]),r[e].push(n[e])):t[e]=n[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map((e=>[e,void 0]))));for(let n in r)Object.assign(t,{[n](e,...t){let o=r[n];for(let r of o){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;r(e,...t)}}});return t}function h(e){var t;return Object.assign((0,a.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function g(e){let t=Object.assign({},e);for(let r in t)void 0===t[r]&&delete t[r];return t}function v(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}}}]);