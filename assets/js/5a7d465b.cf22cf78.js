"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34227],{58860:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var r=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,y=u["".concat(c,".").concat(g)]||u[g]||s[g]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},70077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(37953);var r=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"authenticated",title:"<Authenticated>"},c=void 0,p={unversionedId:"api-reference/core/components/auth/authenticated",id:"version-3.xx.xx/api-reference/core/components/auth/authenticated",title:"<Authenticated>",description:"` is the component form of useAuthenticated`.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/components/auth/authenticated.md",sourceDirName:"api-reference/core/components/auth",slug:"/api-reference/core/components/auth/authenticated",permalink:"/docs/3.xx.xx/api-reference/core/components/auth/authenticated",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/components/auth/authenticated.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716808447,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{id:"authenticated",title:"<Authenticated>"},sidebar:"someSidebar",previous:{title:"Inferencer",permalink:"/docs/3.xx.xx/api-reference/core/components/inferencer"},next:{title:"<CanAccess>",permalink:"/docs/3.xx.xx/api-reference/core/components/accessControl/can-access"}},d={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>fallback</code>",id:"fallback",level:3},{value:"<code>loading</code>",id:"loading",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},g=s("DocThumbsUpDownFeedbackWidget"),y=s("PropsTable"),m={toc:u},f="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(f,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<Authenticated>")," is the component form of ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useAuthenticated"},(0,r.yg)("inlineCode",{parentName:"a"},"useAuthenticated")),"."),(0,r.yg)("p",null,"It internally uses ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useAuthenticated"},(0,r.yg)("inlineCode",{parentName:"a"},"useAuthenticated")),"'s return values (",(0,r.yg)("inlineCode",{parentName:"p"},"isSuccess"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"isLoading"),", and, ",(0,r.yg)("inlineCode",{parentName:"p"},"isError"),") to provide its functionality."),(0,r.yg)("p",null,"When:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"isSuccess")," is ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),", it renders to children."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"isLoading")," is ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),", it renders ",(0,r.yg)("a",{parentName:"li",href:"#loading"},(0,r.yg)("inlineCode",{parentName:"a"},"loading"))," prop."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"isError")," is ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),", it renders ",(0,r.yg)("a",{parentName:"li",href:"#fallback"},(0,r.yg)("inlineCode",{parentName:"a"},"fallback"))," prop if provided. Otherwise, it redirects to ",(0,r.yg)("inlineCode",{parentName:"li"},"/login")," page.")),(0,r.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.yg)(g,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Authenticated } from "@pankod/refine-core";\n\nconst MyPage = () => (\n    <Authenticated>\n        <YourComponent />\n    </Authenticated>\n);\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/examples/customPages"},"Custom Pages Example")," and ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/advanced-tutorials/custom-pages#authenticated-custom-pages"},"it's explanation")," to learn how to use it with custom pages. ","\u2192"))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"fallback"},(0,r.yg)("inlineCode",{parentName:"h3"},"fallback")),(0,r.yg)(g,{id:"fallback",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Component to render if the user is not logged in. If ",(0,r.yg)("inlineCode",{parentName:"p"},"undefined"),", the page will be redirected to ",(0,r.yg)("inlineCode",{parentName:"p"},"/login"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"<Authenticated fallback={<div>You cannot access this section</div>}>\n    <YourComponent />\n</Authenticated>\n"))),(0,r.yg)("h3",{id:"loading"},(0,r.yg)("inlineCode",{parentName:"h3"},"loading")),(0,r.yg)(g,{id:"loading",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Component to render while checking whether the user is logged in."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"<Authenticated loading={<div>loading...</div>}>\n    <YourComponent />\n</Authenticated>\n"))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties-1"},"Properties"),(0,r.yg)(g,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(y,{module:"@pankod/refine-core/Authenticated",mdxType:"PropsTable"}),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fallback"),(0,r.yg)("td",{parentName:"tr",align:null},"Component to render if the user is not logged in. If ",(0,r.yg)("inlineCode",{parentName:"td"},"undefined"),", the page will be redirected to ",(0,r.yg)("inlineCode",{parentName:"td"},"/login")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ReactNode")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"loading"),(0,r.yg)("td",{parentName:"tr",align:null},"Component to render while checking whether user is logged in"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ReactNode")),(0,r.yg)("td",{parentName:"tr",align:null}))))))}h.isMDXComponent=!0}}]);