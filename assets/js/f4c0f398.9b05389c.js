"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49338],{58860:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>c});var n=t(37953);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),g=i,c=u["".concat(d,".").concat(g)]||u[g]||y[g]||r;return t?n.createElement(c,l(l({ref:a},p),{},{components:t})):n.createElement(c,l({ref:a},p))}));function c(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=g;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},93770:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});t(37953);var n=t(58860);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const o={title:"useInvalidate",source:"/packages/core/src/hooks/invalidate"},d=void 0,s={unversionedId:"data/hooks/use-invalidate/index",id:"data/hooks/use-invalidate/index",title:"useInvalidate",description:"useInvalidate is a hook that can be used to invalidate the state of a particular resource or dataProvider (with dataProviderName).",source:"@site/docs/data/hooks/use-invalidate/index.md",sourceDirName:"data/hooks/use-invalidate",slug:"/data/hooks/use-invalidate/",permalink:"/docs/data/hooks/use-invalidate/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/hooks/use-invalidate/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716808447,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{title:"useInvalidate",source:"/packages/core/src/hooks/invalidate"},sidebar:"mainSidebar",previous:{title:"useSelect",permalink:"/docs/data/hooks/use-select/"},next:{title:"useList",permalink:"/docs/data/hooks/use-list/"}},p={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Invalidation Parameters",id:"invalidation-parameters",level:2},{value:"resource",id:"resource",level:3},{value:"id",id:"id",level:3},{value:"dataProviderName",id:"dataprovidername",level:3},{value:"invalidates <PropTag required />",id:"invalidates-",level:3},{value:"invalidationFilters and invalidationOptions",id:"invalidationfilters-and-invalidationoptions",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Invalidation Parameters",id:"invalidation-parameters-1",level:3}],y=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",a)},g=y("DocThumbsUpDownFeedbackWidget"),c=y("PropTag"),m={toc:u},v="wrapper";function h(e){var{components:a}=e,t=l(e,["components"]);return(0,n.yg)(v,r(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){i(e,a,t[a])}))}return e}({},m,t),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useInvalidate")," is a hook that can be used to invalidate the state of a particular ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," or ",(0,n.yg)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider"))," (with dataProviderName)."),(0,n.yg)("p",null,"This hook will be called when a mutation hook is successful. For example, creating a ",(0,n.yg)("inlineCode",{parentName:"p"},"Posts")," with the ",(0,n.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-create"},"useCreate")," hook will invalidate the ",(0,n.yg)("inlineCode",{parentName:"p"},"list")," (",(0,n.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-list"},"useList"),") and ",(0,n.yg)("inlineCode",{parentName:"p"},"many")," (",(0,n.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-many"},"useMany"),") state of the ",(0,n.yg)("inlineCode",{parentName:"p"},"Posts")," resource."),(0,n.yg)("admonition",{title:"Good to know",type:"simple"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"This hook is used internally by Refine. In most cases, you won't need this hook, but we export it as it may be useful for some use-cases that may require customized invalidation."),(0,n.yg)("li",{parentName:"ul"},"Refine uses ",(0,n.yg)("a",{parentName:"li",href:"https://tanstack.com/query/latest"},"TanStack Query")," to fetch and manage the state of the data. For more information about invalidation, please read the TanStack Query's ",(0,n.yg)("a",{parentName:"li",href:"https://tanstack.com/query/v4/docs/react/guides/query-invalidation"},"invalidation")," docs."))),(0,n.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.yg)(g,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'import { useInvalidate } from "@refinedev/core";\n\nconst invalidate = useInvalidate();\n\n// `invalidate` function is async and returns a promise. If you want to wait for the invalidation process to complete, you can await it.\ninvalidate({\n  resource: "posts",\n  invalidates: ["list"],\n});\n'))),(0,n.yg)("h2",{id:"examples"},"Examples"),(0,n.yg)(g,{id:"examples",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"To invalidate the ",(0,n.yg)("inlineCode",{parentName:"p"},'"list"')," and ",(0,n.yg)("inlineCode",{parentName:"p"},'"many"')," states of the Posts ",(0,n.yg)("inlineCode",{parentName:"p"},"resource"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'invalidate({\n  resource: "posts",\n  invalidates: ["list", "many"],\n});\n')),(0,n.yg)("p",null,"To invalidate the state of a Posts with an id of ",(0,n.yg)("inlineCode",{parentName:"p"},"1"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'invalidate({\n  resource: "posts",\n  invalidates: ["detail"],\n  id: 1,\n});\n')),(0,n.yg)("p",null,"To invalidate the ",(0,n.yg)("inlineCode",{parentName:"p"},'"list"')," and ",(0,n.yg)("inlineCode",{parentName:"p"},'"many"')," states of the Posts ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," of the ",(0,n.yg)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider"))," named ",(0,n.yg)("inlineCode",{parentName:"p"},'"second-data-provider"'),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'invalidate({\n  resource: "posts",\n  dataProviderName: "second-data-provider",\n  invalidates: ["list"],\n});\n')),(0,n.yg)("p",null,"To invalidate all states of the ",(0,n.yg)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider"))," named ",(0,n.yg)("inlineCode",{parentName:"p"},'"second-data-provider"'),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'invalidate({\n  dataProviderName: "second-data-provider",\n  invalidates: ["all"],\n});\n')),(0,n.yg)("p",null,"To invalidate all states of the Posts."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'invalidate({\n  resource: "posts",\n  invalidates: ["resourceAll"],\n});\n'))),(0,n.yg)("h2",{id:"invalidation-parameters"},"Invalidation Parameters"),(0,n.yg)("h3",{id:"resource"},"resource"),(0,n.yg)(g,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"A ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," represents an entity in an endpoint in the API (e.g. ",(0,n.yg)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev/posts"},"https://api.fake-rest.refine.dev/posts"),"). It is used to invalidate the state of a particular resource.")),(0,n.yg)("h3",{id:"id"},"id"),(0,n.yg)(g,{id:"id",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," to use when invalidating the ",(0,n.yg)("inlineCode",{parentName:"p"},'"detail"')," state.")),(0,n.yg)("h3",{id:"dataprovidername"},"dataProviderName"),(0,n.yg)(g,{id:"dataprovidername",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If there is more than one ",(0,n.yg)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider")),", you should specify which one to use by passing the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProviderName")," prop.")),(0,n.yg)("h3",{id:"invalidates-"},"invalidates ",(0,n.yg)(c,{required:!0,mdxType:"PropTag"})),(0,n.yg)(g,{id:"invalidates-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The scope of the invalidation process. These scopes can be provided in an array."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"all"'),": Invalidates all states of the all resources."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"resourceAll"'),": Invalidates all states of the given ",(0,n.yg)("inlineCode",{parentName:"li"},"resource"),"."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"list"'),": Invalidates the ",(0,n.yg)("inlineCode",{parentName:"li"},'"list"')," state of the given ",(0,n.yg)("inlineCode",{parentName:"li"},"resource"),"."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"detail"'),": Invalidates the ",(0,n.yg)("inlineCode",{parentName:"li"},'"detail"')," state of the given ",(0,n.yg)("inlineCode",{parentName:"li"},"resource")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"id"),"."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"many"'),": Invalidates the ",(0,n.yg)("inlineCode",{parentName:"li"},'"many"')," state of the given ",(0,n.yg)("inlineCode",{parentName:"li"},"resource"),"."))),(0,n.yg)("h3",{id:"invalidationfilters-and-invalidationoptions"},"invalidationFilters and invalidationOptions"),(0,n.yg)(g,{id:"invalidationfilters-and-invalidationoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The filters and options applied to the invalidation process when picking which queries to invalidate. By default Refine applies some filters and options to fine-tune the invalidation process."),(0,n.yg)("p",null,"By default settings, all the targeted queries are invalidated and the active ones are triggered for a refetch. If there are any ongoing queries, they are kept as they are.")),(0,n.yg)("h2",{id:"api-reference"},"API Reference"),(0,n.yg)("h3",{id:"invalidation-parameters-1"},"Invalidation Parameters"),(0,n.yg)(g,{id:"invalidation-parameters-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"invalidated ",(0,n.yg)(c,{asterisk:!0,mdxType:"PropTag"})),(0,n.yg)("td",{parentName:"tr",align:null},"The states you want to invalidate."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"all"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"resourceAll"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"list"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"many"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"detail"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"false")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"resource"),(0,n.yg)("td",{parentName:"tr",align:null},"Resource name for State invalidation."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"id"),(0,n.yg)("td",{parentName:"tr",align:null},"The ",(0,n.yg)("inlineCode",{parentName:"td"},"id"),' to use when invalidating the "detail" state.'),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/core/interface-references#basekey"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseKey"))),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"dataProviderName"),(0,n.yg)("td",{parentName:"tr",align:null},"The name of the data provider whose state you want to invalidate."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"default"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"invalidationFilters"),(0,n.yg)("td",{parentName:"tr",align:null},"The filters to use when picking queries to invalidate"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://tanstack.com/query/latest/docs/react/reference/QueryClient#queryclientinvalidatequeries"},(0,n.yg)("inlineCode",{parentName:"a"},"InvalidateQueryFilters"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},'{ type: "all", refetchType: "active" }'))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"invalidationOptions"),(0,n.yg)("td",{parentName:"tr",align:null},"The options to use in the invalidation process"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://tanstack.com/query/latest/docs/react/reference/QueryClient#queryclientinvalidatequeries"},(0,n.yg)("inlineCode",{parentName:"a"},"InvalidateOptions"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"{ cancelRefetch: false }")))))))}h.isMDXComponent=!0}}]);