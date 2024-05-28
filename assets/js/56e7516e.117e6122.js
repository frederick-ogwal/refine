"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87239],{58860:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var a=t(37953);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),p=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(i.Provider,{value:r},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),d=n,m=l["".concat(i,".").concat(d)]||l[d]||y[d]||o;return t?a.createElement(m,s(s({ref:r},u),{},{components:t})):a.createElement(m,s({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[l]="string"==typeof e?e:n,s[1]=c;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38390:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>c,metadata:()=>p,toc:()=>l});t(37953);var a=t(58860);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const c={id:"useCan",title:"useCan",siderbar_label:"useCan"},i=void 0,p={unversionedId:"api-reference/core/hooks/accessControl/useCan",id:"version-3.xx.xx/api-reference/core/hooks/accessControl/useCan",title:"useCan",description:"useCan uses the Access Control Provider's can function as the query function for TanStack Query's useQuery. It takes the parameters that can takes. It can also be configured with queryOptions for useQuery. Returns the result of useQuery.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/accessControl/useCan.md",sourceDirName:"api-reference/core/hooks/accessControl",slug:"/api-reference/core/hooks/accessControl/useCan",permalink:"/docs/3.xx.xx/api-reference/core/hooks/accessControl/useCan",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/accessControl/useCan.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716886555,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{id:"useCan",title:"useCan",siderbar_label:"useCan"},sidebar:"someSidebar",previous:{title:"Router Provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/router-provider"},next:{title:"useAuthenticated",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useAuthenticated"}},u={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Performance",id:"performance",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>resource</code> <PropTag required />",id:"resource-",level:3},{value:"<code>action</code> <PropTag required />",id:"action-",level:3},{value:"<code>params</code>",id:"params",level:3},{value:"<code>queryOptions</code>",id:"queryoptions",level:3},{value:"Return values",id:"return-values",level:2},{value:"API",id:"api",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values-1",level:3}],y=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",r)},d=y("DocThumbsUpDownFeedbackWidget"),m=y("PropTag"),g=y("PropsTable"),f={toc:l},h="wrapper";function b(e){var{components:r}=e,t=s(e,["components"]);return(0,a.yg)(h,o(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(r){n(e,r,t[r])}))}return e}({},f,t),{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"useCan")," uses the ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider/"},"Access Control Provider's")," ",(0,a.yg)("inlineCode",{parentName:"p"},"can")," function as the query function for ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest"},"TanStack Query's")," ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/queries"},(0,a.yg)("inlineCode",{parentName:"a"},"useQuery")),". It takes the ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences/#canparams"},"parameters")," that ",(0,a.yg)("inlineCode",{parentName:"p"},"can")," takes. It can also be configured with ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,a.yg)("inlineCode",{parentName:"a"},"queryOptions"))," for ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/queries"},(0,a.yg)("inlineCode",{parentName:"a"},"useQuery")),". Returns the result of ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/queries"},(0,a.yg)("inlineCode",{parentName:"a"},"useQuery")),"."),(0,a.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.yg)(d,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useCan } from "@pankod/refine-core";\n\nconst { data } = useCan({\n  resource: "resource-you-ask-for-access",\n  action: "action-type-on-resource",\n  params: { foo: "optional-params" },\n});\n'))),(0,a.yg)("h2",{id:"performance"},"Performance"),(0,a.yg)(d,{id:"performance",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"As the number of points that checks for access control in your app increases the performance of your app may take a hit especially if its access control involves remote endpoints. Caching the access control checks helps a great deal. Since ",(0,a.yg)("strong",{parentName:"p"},"refine")," uses ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest"},"TanStack Query")," it can be easily done configuring ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,a.yg)("inlineCode",{parentName:"a"},"staleTime")," and ",(0,a.yg)("inlineCode",{parentName:"a"},"cacheTime"))," properties."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'import { useCan } from "@pankod/refine-core";\n\n// inside your component\n\nconst { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" } },\n    queryOptions: {\n        staleTime: 5 * 60 * 1000, // 5 minutes\n    }\n});\n'))),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"resource-"},(0,a.yg)("inlineCode",{parentName:"h3"},"resource")," ",(0,a.yg)(m,{required:!0,mdxType:"PropTag"})),(0,a.yg)(d,{id:"resource-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Passes to ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider/"},"Access Control Provider's")," ",(0,a.yg)("inlineCode",{parentName:"p"},"can")," function's ",(0,a.yg)("inlineCode",{parentName:"p"},"resource")," parameter"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'useCan({\n  resource: "resource-you-ask-for-access",\n});\n'))),(0,a.yg)("h3",{id:"action-"},(0,a.yg)("inlineCode",{parentName:"h3"},"action")," ",(0,a.yg)(m,{required:!0,mdxType:"PropTag"})),(0,a.yg)(d,{id:"action-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Passes to ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider/"},"Access Control Provider's")," ",(0,a.yg)("inlineCode",{parentName:"p"},"can")," function's ",(0,a.yg)("inlineCode",{parentName:"p"},"action")," parameter"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'useCan({\n  action: "resource-you-ask-for-access",\n});\n'))),(0,a.yg)("h3",{id:"params"},(0,a.yg)("inlineCode",{parentName:"h3"},"params")),(0,a.yg)(d,{id:"params",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Passes to ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider/"},"Access Control Provider's")," ",(0,a.yg)("inlineCode",{parentName:"p"},"can")," function's ",(0,a.yg)("inlineCode",{parentName:"p"},"params")," parameter"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'useCan({\n  params: { foo: "optional-params" },\n});\n'))),(0,a.yg)("h3",{id:"queryoptions"},(0,a.yg)("inlineCode",{parentName:"h3"},"queryOptions")),(0,a.yg)(d,{id:"queryoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Query options for ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest"},"TanStack Query's")," ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/queries"},(0,a.yg)("inlineCode",{parentName:"a"},"useQuery")),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"useCan({\n  queryOptions: {\n    staleTime: 5 * 60 * 1000, // 5 minutes\n  },\n});\n"))),(0,a.yg)("h2",{id:"return-values"},"Return values"),(0,a.yg)(d,{id:"return-values",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Query result of ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest"},"TanStack Query's")," ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/queries"},(0,a.yg)("inlineCode",{parentName:"a"},"useQuery")),"."),(0,a.yg)("p",null,"For example if you want to check if the user can create a post return value will be:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'<Refine\n  accessControlProvider={{\n    can: async ({ resource, action }) => {\n      if (resource === "post" && action === "create") {\n        return Promise.resolve({\n          can: false,\n          reason: "Unauthorized",\n        });\n      }\n\n      return Promise.resolve({ can: true });\n    },\n  }}\n\n  // ...\n/>;\n\n// inside your component\nconst { data: canCreatePost } = useCan({\n  action: "create",\n  resource: "post",\n});\n\nconsole.log(canCreatePost); // { can: false, reason: "Unauthorized" }\n'))),(0,a.yg)("h2",{id:"api"},"API"),(0,a.yg)("h3",{id:"properties-1"},"Properties"),(0,a.yg)(d,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(g,{module:"@pankod/refine-core/useCan",mdxType:"PropsTable"})),(0,a.yg)("h3",{id:"type-parameters"},"Type Parameters"),(0,a.yg)(d,{id:"type-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Desription"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#canreturntype"},"CanReturnType")),(0,a.yg)("td",{parentName:"tr",align:null},"Result data of the query ",(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError"))))))),(0,a.yg)("h3",{id:"return-values-1"},"Return values"),(0,a.yg)(d,{id:"return-values-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Result of the ",(0,a.yg)("a",{parentName:"td",href:"https://tanstack.com/query/latest"},"TanStack Query's")," ",(0,a.yg)("a",{parentName:"td",href:"https://tanstack.com/query/latest/docs/react/guides/queries"},(0,a.yg)("inlineCode",{parentName:"a"},"useQuery"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,a.yg)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: CanReturnType; }>"))))))))}b.isMDXComponent=!0}}]);