"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50290],{58860:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||l;return n?r.createElement(m,u(u({ref:t},s),{},{components:n})):r.createElement(m,u({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,u=new Array(l);u[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[f]="string"==typeof e?e:o,u[1]=a;for(var c=2;c<l;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88537:(e,t,n)=>{n.d(t,{E:()=>R});var r,o=n(37953),l=n(41220),u=n(71519),a=n(39334),i=n(26984),c=n(31004),s=n(59796),f=n(4974),p=n(57464),d=n(22227);let m=null!=(r=o.startTransition)?r:function(e){e()};var y,v=n(91641),P=((y=P||{})[y.Open=0]="Open",y[y.Closed=1]="Closed",y),E=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(E||{});let b={0:e=>({...e,disclosureState:(0,f.Y)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},g=(0,o.createContext)(null);function O(e){let t=(0,o.useContext)(g);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,O),t}return t}g.displayName="DisclosureContext";let h=(0,o.createContext)(null);function w(e){let t=(0,o.useContext)(h);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,w),t}return t}h.displayName="DisclosureAPIContext";let k=(0,o.createContext)(null);function x(e,t){return(0,f.Y)(t.type,b,e,t)}k.displayName="DisclosurePanelContext";let C=o.Fragment;let D=d.O5.RenderStrategy|d.O5.Static;let S=(0,d.FX)((function(e,t){let{defaultOpen:n=!1,...r}=e,u=(0,o.useRef)(null),a=(0,i.P)(t,(0,i.a)((e=>{u.current=e}),void 0===e.as||e.as===o.Fragment)),s=(0,o.useRef)(null),m=(0,o.useRef)(null),y=(0,o.useReducer)(x,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:m,panelRef:s,buttonId:null,panelId:null}),[{disclosureState:v,buttonId:P},E]=y,b=(0,l._)((e=>{E({type:1});let t=(0,p.T)(u);if(!t||!P)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(P):t.getElementById(P);null==n||n.focus()})),O=(0,o.useMemo)((()=>({close:b})),[b]),w=(0,o.useMemo)((()=>({open:0===v,close:b})),[v,b]),k={ref:a};return o.createElement(g.Provider,{value:y},o.createElement(h.Provider,{value:O},o.createElement(c.El,{value:(0,f.Y)(v,{0:c.Uw.Open,1:c.Uw.Closed})},(0,d.XX)({ourProps:k,theirProps:r,slot:w,defaultTag:C,name:"Disclosure"}))))})),I=(0,d.FX)((function(e,t){let n=(0,u.B)(),{id:r=`headlessui-disclosure-button-${n}`,...c}=e,[f,p]=O("Disclosure.Button"),m=(0,o.useContext)(k),y=null!==m&&m===f.panelId,P=(0,o.useRef)(null),E=(0,i.P)(P,t,y?null:f.buttonRef),b=(0,d.cq)();(0,o.useEffect)((()=>{if(!y)return p({type:2,buttonId:r}),()=>{p({type:2,buttonId:null})}}),[r,p,y]);let g=(0,l._)((e=>{var t;if(y){if(1===f.disclosureState)return;switch(e.key){case v.D.Space:case v.D.Enter:e.preventDefault(),e.stopPropagation(),p({type:0}),null==(t=f.buttonRef.current)||t.focus()}}else switch(e.key){case v.D.Space:case v.D.Enter:e.preventDefault(),e.stopPropagation(),p({type:0})}})),h=(0,l._)((e=>{if(e.key===v.D.Space)e.preventDefault()})),w=(0,l._)((t=>{var n;(0,s.l)(t.currentTarget)||e.disabled||(y?(p({type:0}),null==(n=f.buttonRef.current)||n.focus()):p({type:0}))})),x=(0,o.useMemo)((()=>({open:0===f.disclosureState})),[f]),C=(0,a.c)(e,P),D=y?{ref:E,type:C,onKeyDown:g,onClick:w}:{ref:E,id:r,type:C,"aria-expanded":0===f.disclosureState,"aria-controls":f.linkedPanel?f.panelId:void 0,onKeyDown:g,onKeyUp:h,onClick:w};return(0,d.XX)({mergeRefs:b,ourProps:D,theirProps:c,slot:x,defaultTag:"button",name:"Disclosure.Button"})})),T=(0,d.FX)((function(e,t){let n=(0,u.B)(),{id:r=`headlessui-disclosure-panel-${n}`,...l}=e,[a,s]=O("Disclosure.Panel"),{close:f}=w("Disclosure.Panel"),p=(0,d.cq)(),y=(0,i.P)(t,a.panelRef,(e=>{m((()=>s({type:e?4:5})))}));(0,o.useEffect)((()=>(s({type:3,panelId:r}),()=>{s({type:3,panelId:null})})),[r,s]);let v=(0,c.O_)(),P=null!==v?(v&c.Uw.Open)===c.Uw.Open:0===a.disclosureState,E=(0,o.useMemo)((()=>({open:0===a.disclosureState,close:f})),[a,f]),b={ref:y,id:r};return o.createElement(k.Provider,{value:a.panelId},(0,d.XX)({mergeRefs:p,ourProps:b,theirProps:l,slot:E,defaultTag:"div",features:D,visible:P,name:"Disclosure.Panel"}))})),R=Object.assign(S,{Button:I,Panel:T})},76169:(e,t,n)=>{n.d(t,{N:()=>P});var r=n(35285),o=n(37953),l=n(72854),u=n(81772),a=n(38808);function i(){var e=(0,o.useRef)(!1);return(0,a.E)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}var c=n(38671),s=n(68233),f=n(31030),p=function(e){var t=e.children,n=e.initial,l=e.isPresent,u=e.onExitComplete,a=e.custom,i=e.presenceAffectsLayout,p=(0,s.M)(d),m=(0,f.B)(),y=(0,o.useMemo)((function(){return{id:m,initial:n,isPresent:l,custom:a,onExitComplete:function(e){var t,n;p.set(e,!0);try{for(var o=(0,r.Ju)(p.values()),l=o.next();!l.done;l=o.next()){if(!l.value)return}}catch(a){t={error:a}}finally{try{l&&!l.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}null==u||u()},register:function(e){return p.set(e,!1),function(){return p.delete(e)}}}}),i?void 0:[l]);return(0,o.useMemo)((function(){p.forEach((function(e,t){return p.set(t,!1)}))}),[l]),o.useEffect((function(){!l&&!p.size&&(null==u||u())}),[l]),o.createElement(c.t.Provider,{value:y},t)};function d(){return new Map}var m=n(54769),y=n(55427),v=function(e){return e.key||""};var P=function(e){var t=e.children,n=e.custom,c=e.initial,s=void 0===c||c,f=e.onExitComplete,d=e.exitBeforeEnter,P=e.presenceAffectsLayout,E=void 0===P||P,b=(0,r.zs)(function(){var e=i(),t=(0,r.zs)((0,o.useState)(0),2),n=t[0],l=t[1],a=(0,o.useCallback)((function(){e.current&&l(n+1)}),[n]);return[(0,o.useCallback)((function(){return u.Ay.postRender(a)}),[a]),n]}(),1),g=b[0],O=(0,o.useContext)(m.L).forceRender;O&&(g=O);var h=i(),w=function(e){var t=[];return o.Children.forEach(e,(function(e){(0,o.isValidElement)(e)&&t.push(e)})),t}(t),k=w,x=new Set,C=(0,o.useRef)(k),D=(0,o.useRef)(new Map).current,S=(0,o.useRef)(!0);if((0,a.E)((function(){S.current=!1,function(e,t){e.forEach((function(e){var n=v(e);t.set(n,e)}))}(w,D),C.current=k})),(0,y.l)((function(){S.current=!0,D.clear(),x.clear()})),S.current)return o.createElement(o.Fragment,null,k.map((function(e){return o.createElement(p,{key:v(e),isPresent:!0,initial:!!s&&void 0,presenceAffectsLayout:E},e)})));k=(0,r.fX)([],(0,r.zs)(k),!1);for(var I=C.current.map(v),T=w.map(v),R=I.length,j=0;j<R;j++){var B=I[j];-1===T.indexOf(B)&&x.add(B)}return d&&x.size&&(k=[]),x.forEach((function(e){if(-1===T.indexOf(e)){var t=D.get(e);if(t){var r=I.indexOf(e);k.splice(r,0,o.createElement(p,{key:v(t),isPresent:!1,onExitComplete:function(){D.delete(e),x.delete(e);var t=C.current.findIndex((function(t){return t.key===e}));if(C.current.splice(t,1),!x.size){if(C.current=w,!1===h.current)return;g(),f&&f()}},custom:n,presenceAffectsLayout:E},t))}}})),k=k.map((function(e){var t=e.key;return x.has(t)?e:o.createElement(p,{key:v(e),isPresent:!0,presenceAffectsLayout:E},e)})),"production"!==l._&&d&&k.length>1&&console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."),o.createElement(o.Fragment,null,x.size?k:k.map((function(e){return(0,o.cloneElement)(e)})))}}}]);