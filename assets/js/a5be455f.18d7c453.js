"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54734],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(n),y=a,g=u["".concat(l,".").concat(y)]||u[y]||s[y]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},32544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>p,metadata:()=>d,toc:()=>u});n(37953);var r=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={title:"<Authenticated />"},l=void 0,d={unversionedId:"authentication/components/authenticated/index",id:"authentication/components/authenticated/index",title:"<Authenticated />",description:"` is the component form of useIsAuthenticated`.",source:"@site/docs/authentication/components/authenticated/index.md",sourceDirName:"authentication/components/authenticated",slug:"/authentication/components/authenticated/",permalink:"/docs/authentication/components/authenticated/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/authentication/components/authenticated/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1715777360,formattedLastUpdatedAt:"May 15, 2024",frontMatter:{title:"<Authenticated />"},sidebar:"mainSidebar",previous:{title:"Auth Provider",permalink:"/docs/authentication/auth-provider/"},next:{title:"<AuthPage />",permalink:"/docs/authentication/components/auth-page/"}},c={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"key <PropTag required />",id:"key-",level:3},{value:"Why is it required?",id:"why-is-it-required",level:4},{value:"redirectOnFail",id:"redirectonfail",level:3},{value:"appendCurrentPathToQuery",id:"appendcurrentpathtoquery",level:3},{value:"fallback",id:"fallback",level:3},{value:"loading",id:"loading",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},y=s("DocThumbsUpDownFeedbackWidget"),g=s("PropTag"),h=s("PropsTable"),m={toc:u},f="wrapper";function b(e){var{components:t}=e,n=o(e,["components"]);return(0,r.yg)(f,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<Authenticated>")," is the component form of ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/hooks/use-is-authenticated"},(0,r.yg)("inlineCode",{parentName:"a"},"useIsAuthenticated")),"."),(0,r.yg)("p",null,"It internally uses ",(0,r.yg)("inlineCode",{parentName:"p"},"useIsAuthenticated"),"'s return values (",(0,r.yg)("inlineCode",{parentName:"p"},"data.authenticated"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"data.error"),", and, ",(0,r.yg)("inlineCode",{parentName:"p"},"isLoading"),") to provide its functionality."),(0,r.yg)("p",null,"When:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"data.authenticated")," is ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),", it renders its children."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"data.authenticated")," is ",(0,r.yg)("inlineCode",{parentName:"li"},"false"),", it renders ",(0,r.yg)("a",{parentName:"li",href:"#fallback"},(0,r.yg)("inlineCode",{parentName:"a"},"fallback"))," prop if provided. Otherwise, it redirects to ",(0,r.yg)("inlineCode",{parentName:"li"},"data.redirectTo")," page."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"isLoading")," is ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),", it renders the ",(0,r.yg)("a",{parentName:"li",href:"#loading"},(0,r.yg)("inlineCode",{parentName:"a"},"loading"))," prop.")),(0,r.yg)("p",null,"You may want to use this component when rendering a page that requires authentication. You will be able to render a fallback or redirect to an authentication page depending on your case. ",(0,r.yg)("inlineCode",{parentName:"p"},"Authenticated")," can also be used to render a conditional content based on the user's authentication status."),(0,r.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.yg)(y,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Authenticated } from "@refinedev/core";\n\nconst MyPage = () => (\n  <Authenticated>\n    <YourComponent />\n  </Authenticated>\n);\n'))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"key-"},"key ",(0,r.yg)(g,{required:!0,mdxType:"PropTag"})),(0,r.yg)(y,{id:"key-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"A differentiator prop for the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Authenticated />")," component. This is crucial for the authentication logic to work properly in certain scenarios where ",(0,r.yg)("inlineCode",{parentName:"p"},"<Authenticated />")," is used multiple times in same tree level. key prop will signal React to remount the component rather than updating the current props.")),(0,r.yg)("h4",{id:"why-is-it-required"},"Why is it required?"),(0,r.yg)(y,{id:"why-is-it-required",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Due to the ",(0,r.yg)("a",{parentName:"p",href:"https://react.dev/learn/rendering-lists#why-does-react-need-keys"},"nature of React"),", components are not unmounted and remounted again if props are changed. While this is mostly a good practice for performance, in some cases you'll want your component to re-mount instead of updating; for example if you don't want to use any of the previous states and effects initiated with the old props."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"<Authenticated />")," component has this kind of scenario when its used for page level authentication checks. If the previous check results were used for the rendering of the content (",(0,r.yg)("inlineCode",{parentName:"p"},"fallback")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"children"),") this may lead to unexpected behaviors and flashing of the unwanted content."),(0,r.yg)("p",null,"To avoid this, a ",(0,r.yg)("inlineCode",{parentName:"p"},"key")," prop must be set with different values for each use of the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Authenticated />")," components. This will make sure that React will unmount and remount the component instead of updating the props."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Authenticated } from "@refinedev/core";\n\nconst MyPage = () => (\n  <Authenticated key="dashboard">\n    <h1>Dashboard Page</h1>\n  </Authenticated>\n);\n'))),(0,r.yg)("h3",{id:"redirectonfail"},"redirectOnFail"),(0,r.yg)(y,{id:"redirectonfail",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"The path to redirect to if the user is not logged in. If left empty, the user will be redirected to the value in the ",(0,r.yg)("inlineCode",{parentName:"p"},"redirectTo")," property of the ",(0,r.yg)("inlineCode",{parentName:"p"},"check")," function of the ",(0,r.yg)("inlineCode",{parentName:"p"},"AuthProvider"),"."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"This property only works if the ",(0,r.yg)("inlineCode",{parentName:"p"},"fallback")," prop is not provided."))),(0,r.yg)("h3",{id:"appendcurrentpathtoquery"},"appendCurrentPathToQuery"),(0,r.yg)(y,{id:"appendcurrentpathtoquery",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", the current path will be appended to the ",(0,r.yg)("inlineCode",{parentName:"p"},"to")," query parameter. This is useful when you want to redirect the user to the page they were trying to access after they log in.")),(0,r.yg)("h3",{id:"fallback"},"fallback"),(0,r.yg)(y,{id:"fallback",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Component to render if the user is not logged in. If ",(0,r.yg)("inlineCode",{parentName:"p"},"undefined"),", the page will be redirected to ",(0,r.yg)("inlineCode",{parentName:"p"},"/login"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"<Authenticated fallback={<div>You cannot access this section</div>}>\n  <YourComponent />\n</Authenticated>\n"))),(0,r.yg)("h3",{id:"loading"},"loading"),(0,r.yg)(y,{id:"loading",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Component to render while checking whether the user is logged in."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"<Authenticated loading={<div>loading...</div>}>\n  <YourComponent />\n</Authenticated>\n"))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties-1"},"Properties"),(0,r.yg)(y,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(h,{module:"@refinedev/core/Authenticated","v3LegacyAuthProviderCompatible-required":!1,"v3LegacyAuthProviderCompatible-type":"boolean","v3LegacyAuthProviderCompatible-description":"This must be set to `true` if legacy auth provider is being used.",mdxType:"PropsTable"})))}b.isMDXComponent=!0}}]);