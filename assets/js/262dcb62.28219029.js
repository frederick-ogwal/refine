"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[702],{58860:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>f});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(n),y=o,f=d["".concat(s,".").concat(y)]||d[y]||p[y]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},57258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>u,metadata:()=>c,toc:()=>d});n(37953);var r=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={title:"useGetIdentity",description:"useGetIdentity data hook from Refine is a modified version of react-query's useQuery for retrieving user data",source:"/packages/core/src/hooks/auth/useGetIdentity/index.ts"},s=void 0,c={unversionedId:"authentication/hooks/use-get-identity/index",id:"authentication/hooks/use-get-identity/index",title:"useGetIdentity",description:"useGetIdentity data hook from Refine is a modified version of react-query's useQuery for retrieving user data",source:"@site/docs/authentication/hooks/use-get-identity/index.md",sourceDirName:"authentication/hooks/use-get-identity",slug:"/authentication/hooks/use-get-identity/",permalink:"/docs/authentication/hooks/use-get-identity/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/authentication/hooks/use-get-identity/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1716561459,formattedLastUpdatedAt:"May 24, 2024",frontMatter:{title:"useGetIdentity",description:"useGetIdentity data hook from Refine is a modified version of react-query's useQuery for retrieving user data",source:"/packages/core/src/hooks/auth/useGetIdentity/index.ts"},sidebar:"mainSidebar",previous:{title:"useOnError",permalink:"/docs/authentication/hooks/use-on-error/"},next:{title:"useLogin",permalink:"/docs/authentication/hooks/use-login/"}},l={},d=[{value:"Usage",id:"usage",level:2}],p=(y="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var y;const f={toc:d},g="wrapper";function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.yg)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useGetIdentity")," calls the ",(0,r.yg)("inlineCode",{parentName:"p"},"getIdentity")," method from the ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,r.yg)("p",null,"It returns the result of ",(0,r.yg)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties, some of which being ",(0,r.yg)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"isError"),"."),(0,r.yg)("p",null,"Data that is resolved from the ",(0,r.yg)("inlineCode",{parentName:"p"},"getIdentity")," will be returned as the ",(0,r.yg)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(p,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useGetIdentity")," can be useful when you want to get user information anywhere in your code."),(0,r.yg)("p",null,"Let's say that you want to show the user's name."),(0,r.yg)("p",null,"We have a logic in ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"getIdentity")," method like below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  // ...\n  // highlight-start\n  getIdentity: async () => {\n    return {\n      id: 1,\n      fullName: "Jane Doe",\n    };\n  },\n  // highlight-end\n};\n')),(0,r.yg)("p",null,"You can access identity data like below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { useGetIdentity } from "@refinedev/core";\n\nexport const User = () => {\n  // highlight-next-line\n  const { data: identity } = useGetIdentity<IIdentity>();\n\n  return <span>{identity?.fullName}</span>;\n};\n\ntype IIdentity = {\n  id: number;\n  fullName: string;\n};\n'))))}m.isMDXComponent=!0}}]);