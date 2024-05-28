"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86840],{58860:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>m});var t=n(37953);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(n),c=r,m=g["".concat(l,".").concat(c)]||g[c]||u[c]||i;return n?t.createElement(m,o(o({ref:a},d),{},{components:n})):t.createElement(m,o({ref:a},d))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71548:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>g});n(37953);var t=n(58860);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})),e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Pilot & Refine architecture",description:"We'll be taking a look at the architecture of Refine and how week of Refine series will be structured.",slug:"refine-pixels-1",authors:"abdullah_numan",tags:["refine-week","Refine","supabase","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-02-04-refine-pixels-1/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/refine-pixels-1",source:"@site/blog/2023-02-14-refine-pixels-1.md",title:"Pilot & Refine architecture",description:"We'll be taking a look at the architecture of Refine and how week of Refine series will be structured.",date:"2023-02-14T00:00:00.000Z",formattedDate:"February 14, 2023",tags:[{label:"refine-week",permalink:"/blog/tags/refine-week"},{label:"Refine",permalink:"/blog/tags/refine"},{label:"supabase",permalink:"/blog/tags/supabase"},{label:"ant-design",permalink:"/blog/tags/ant-design"}],readingTime:10.66,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Pilot & Refine architecture",description:"We'll be taking a look at the architecture of Refine and how week of Refine series will be structured.",slug:"refine-pixels-1",authors:"abdullah_numan",tags:["refine-week","Refine","supabase","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-02-04-refine-pixels-1/social.png",hide_table_of_contents:!1},prevItem:{title:"Setting Up the Client App",permalink:"/blog/refine-pixels-2"},nextItem:{title:"Comparing the best headless CMS solutions",permalink:"/blog/best-headless-cms"},relatedPosts:[{title:"How to Build a React Admin Panel with Mantine and Strapi",description:"We'll be building a simple React Admin Panel with Refine and Mantine using Strapi as a backend service.",permalink:"/blog/react-admin-panel",formattedDate:"February 23, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:23.095,date:"2023-02-23T00:00:00.000Z"},{title:"Implementing Role Based Access Control",description:"We'll implement Role Based Access Control (RBAC)",permalink:"/blog/refine-pixels-6",formattedDate:"February 19, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:12.205,date:"2023-02-19T00:00:00.000Z"},{title:"React Hook Form Validation with Complete Examples",description:"We'll implement React Hook Form custom validations and schema validations using yup.",permalink:"/blog/react-hook-form-validation-examples",formattedDate:"September 27, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:19.94,date:"2022-09-27T00:00:00.000Z"}],authorPosts:[{title:"A Detailed Guide on TypeScript Pick Type",description:"We'll deep dive into the TypeScript Pick utility type with examples and use cases.",permalink:"/blog/typescript-pick-utility-type",formattedDate:"September 30, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.475,date:"2022-09-30T00:00:00.000Z"},{title:"How to Use the JavaScript Ternary Operator",description:"We expound on the use of JS Ternary Operator with examples of what it is, how it works and discuss the best practices.",permalink:"/blog/javascript-ternary-operator",formattedDate:"January 24, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:7.685,date:"2024-01-24T00:00:00.000Z"},{title:"Building a CRUD app with Shadcn UI and Refine",description:"We demonstrate how to integrate Shadcn UI components to build a collection of components and pages within a Refine app.",permalink:"/blog/shadcn-ui",formattedDate:"March 19, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:31.02,date:"2024-03-19T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},g=[{value:"RefineWeek series",id:"refineweek-series",level:3},{value:"Pixels Client",id:"pixels-client",level:3},{value:"Pixels Admin",id:"pixels-admin",level:3},{value:"What is <strong>Refine</strong> ?",id:"what-is-refine-",level:2},{value:"Refine Architecture",id:"refine-architecture",level:2},{value:"Providers and Hooks",id:"providers-and-hooks",level:2},{value:"Support Packages",id:"support-packages",level:2},{value:"What is Supabase?",id:"what-is-supabase",level:2},{value:"A week of Refine ft. Supabase",id:"a-week-of-refine-ft-supabase",level:2},{value:"Day One - On RefineWeek",id:"day-one---on-refineweek",level:3},{value:"Day Two - Setting Up the Client App",id:"day-two---setting-up-the-client-app",level:3},{value:"Day Three - Adding CRUD Actions &amp; Authentication",id:"day-three---adding-crud-actions--authentication",level:3},{value:"Day Four - Adding Realtime Collaboration",id:"day-four---adding-realtime-collaboration",level:3},{value:"Day Five - Initialize and Build Pixels Admin App",id:"day-five---initialize-and-build-pixels-admin-app",level:3},{value:"Day Six - Add Role Based Authorization",id:"day-six---add-role-based-authorization",level:3},{value:"Day Seven - Add Audit Log to Client App and Admin App",id:"day-seven---add-audit-log-to-client-app-and-admin-app",level:3},{value:"Summary",id:"summary",level:2}],u={toc:g},c="wrapper";function m(e){var{components:a}=e,n=o(e,["components"]);return(0,t.yg)(c,i(function(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(a){r(e,a,n[a])}))}return e}({},u,n),{components:a,mdxType:"MDXLayout"}),(0,t.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-02-04-refine-pixels-1/refine_supabase.png",alt:"refine banner"}),(0,t.yg)("h3",{id:"refineweek-series"},"RefineWeek series"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Day 1 - ",(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-1/"},"Pilot & Refine architecture")),(0,t.yg)("li",{parentName:"ul"},"Day 2 - ",(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-2/"},"Setting Up the Client App")),(0,t.yg)("li",{parentName:"ul"},"Day 3 - ",(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-3/"},"Adding CRUD Actions and Authentication")),(0,t.yg)("li",{parentName:"ul"},"Day 4 - ",(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-4/"},"Adding Realtime Collaboration")),(0,t.yg)("li",{parentName:"ul"},"Day 5 - ",(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-5/"},"Creating an Admin Dashboard with Refine")),(0,t.yg)("li",{parentName:"ul"},"Day 6 - ",(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-6/"},"Implementing Role Based Access Control")),(0,t.yg)("li",{parentName:"ul"},"Day 7 - ",(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-7/"},"Audit Log With Refine"))),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("p",null,"This post provides an introduction to ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},(0,t.yg)("strong",{parentName:"a"},"Refine")),", a React framework used to rapidly build data heavy CRUD apps like dashboards, admin panels and e-commerce storefronts."),(0,t.yg)("p",null,"It also presents the ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/week-of-refine-supabase/"},"RefineWeek")," series - which is a seven part quickfire guide that aims to help developers learn the ins-and-outs of ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},(0,t.yg)("strong",{parentName:"a"},"Refine"))," and ",(0,t.yg)("a",{parentName:"p",href:"https://supabase.com/"},(0,t.yg)("strong",{parentName:"a"},"Supabase"))," powerful capabilities and get going with ",(0,t.yg)("strong",{parentName:"p"},"Refine")," within a week."),(0,t.yg)("p",null,"At the end of this series, you'll be able to build a fully functional CRUD app named \"",(0,t.yg)("strong",{parentName:"p"},"Pixels"),'" with ',(0,t.yg)("strong",{parentName:"p"},"Refine")," and ",(0,t.yg)("strong",{parentName:"p"},"Supabase"),"."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://pixels.refine.dev/"},"The live version of the app is be available here.")),(0,t.yg)("p",null,"The final apps source codes are available on GitHub:"),(0,t.yg)("h3",{id:"pixels-client"},"Pixels Client"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/pixels"},"Source Code on GitHub")),(0,t.yg)("p",null,"To get completed client source code simply run:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"}," npm create refine-app@latest -- --example pixels\n")),(0,t.yg)("h3",{id:"pixels-admin"},"Pixels Admin"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/pixels-admin"},"Source Code on GitHub")),(0,t.yg)("p",null,"To get completed admin source code simply run:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"}," npm create refine-app@latest -- --example pixels-admin\n")),(0,t.yg)("h2",{id:"what-is-refine-"},"What is ",(0,t.yg)("strong",{parentName:"h2"},"Refine")," ?"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Refine")," is a highly customizable ",(0,t.yg)("strong",{parentName:"p"},"React"),' based framework for building CRUD apps that comes with a headless core package and supplementary "pick-and-plug" modules for the UI, backend API clients and Internationalization support.'),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Refine"),"'s (intentionally decapitalized) core is strongly opinionated about RESTful conventions, HTTPS networking, state management, authentication and authorization. It is, however, unopinionated about the UI and render logic. This makes it customizable according to one's choice of UI library and frameworks."),(0,t.yg)("p",null,"In a nutshell, you can build rock-solid CRUD apps easily using Refine\u2728."),(0,t.yg)("h2",{id:"refine-architecture"},"Refine Architecture"),(0,t.yg)("p",null,"Everything in ",(0,t.yg)("strong",{parentName:"p"},"Refine")," is centered around the ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/components/refine-config/"},(0,t.yg)("inlineCode",{parentName:"a"},"<Refine />"))," component, which is configured via a set of provider props that each requires a provider object to be passed in. A typical application of providers on the ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine />")," component looks like this:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider from "@refinedev/react-router-v6";\nimport { liveProvider } from "@refinedev/supabase";\nimport authProvider from "./authProvider";\n\n<Refine\n    dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n    routerProvider={routerProvider}\n    liveProvider={liveProvider(supabaseClient)}\n    authProvider={authProvider}\n    resources={[]}\n    ...\n/>;\n')),(0,t.yg)("p",null,"The above snippet lists a few of the props and their objects."),(0,t.yg)("p",null,"However, rather than precisely being a component, ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine />")," is largely a monolith of provider configurations backed by a context for each. Hence, inside ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/data-provider/"},(0,t.yg)("inlineCode",{parentName:"a"},"dataProvider")),", we have a standard set of methods for making API requests; inside ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/auth-provider/"},(0,t.yg)("inlineCode",{parentName:"a"},"authProvider")),", we have methods for dealing with authentication and authorization; inside ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/router-provider/"},(0,t.yg)("inlineCode",{parentName:"a"},"routerProvider")),", we have ",(0,t.yg)("em",{parentName:"p"},"exact")," definitions of routes and the components to render for that route, etc. And each provider comes with its own set of conventions and type definitions."),(0,t.yg)("p",null,"For example, a ",(0,t.yg)("inlineCode",{parentName:"p"},"dataProvider")," object has the following signature to which any definition of a data provider conform:"),(0,t.yg)("details",null,(0,t.yg)("summary",null,"Show data provider code"),(0,t.yg)("p",null,(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="dataProvider.ts"',title:'"dataProvider.ts"'},'const dataProvider = {\n  create: ({ resource, variables, metaData }) => Promise,\n  createMany: ({ resource, variables, metaData }) => Promise,\n  deleteOne: ({ resource, id, variables, metaData }) => Promise,\n  deleteMany: ({ resource, ids, variables, metaData }) => Promise,\n  //highlight-start\n  getList: ({ resource, pagination, pagination, sort, filters, meta }) =>\n    Promise,\n  //highlight-end\n  getMany: ({ resource, ids, metaData }) => Promise,\n  getOne: ({ resource, id, metaData }) => Promise,\n  update: ({ resource, id, variables, metaData }) => Promise,\n  updateMany: ({ resource, ids, variables, metaData }) => Promise,\n  custom: ({ url, method, sort, filters, payload, query, headers, metaData }) =>\n    Promise,\n  getApiUrl: () => "",\n};\n')))),(0,t.yg)("p",null,"The underlying architecture involves any presentational component passed to ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine />")," to be able to consume these configured methods via corresponding hooks. Each method in a provider has a corresponding hook via which a consumer component is able to fetch data from the backend, i.e. the ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/data/useList/"},(0,t.yg)("inlineCode",{parentName:"a"},"useList()"))," hook is the corresponding function accessing the ",(0,t.yg)("inlineCode",{parentName:"p"},"dataProvider.getList()")," provider method."),(0,t.yg)("p",null,"An example hook usage looks like this:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Inside a UI component"',title:'"Inside',a:!0,UI:!0,'component"':!0},'const { data } = useList<Canvas>({\n  resource: "canvases",\n  pagination: {\n    mode: "off",\n  },\n  sorters: {\n    initial: [\n      {\n        field: "created_at",\n        order: "desc",\n      },\n    ],\n  },\n});\n')),(0,t.yg)("p",null,"The hooks, in turn, leverage ",(0,t.yg)("a",{parentName:"p",href:"https://react-query-v3.tanstack.com/"},(0,t.yg)("strong",{parentName:"a"},"React Query"))," hooks in order to make API calls asked by the provider methods. Here's an early sneak peek into the action under the hood:"),(0,t.yg)("details",null,(0,t.yg)("summary",null,"Show Refine `useList` hook code"),(0,t.yg)("p",null,(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'const queryResponse = useQuery<GetListResponse<TData>, TError>(\n  queryKey.list(config),\n  ({ queryKey, pagination, signal }) => {\n    const { pagination, meta, ...restConfig } = config || {};\n    return getList<TData>({\n      resource,\n      ...restConfig,\n      pagination,\n      meta: {\n        ...meta,\n        queryContext: {\n          queryKey,\n          pageParam,\n          signal,\n        },\n      },\n    });\n  },\n  {\n    ...queryOptions,\n    onSuccess: (data) => {\n      queryOptions?.onSuccess?.(data);\n\n      const notificationConfig =\n        typeof successNotification === "function"\n          ? successNotification(data, { metaData, config }, resource)\n          : successNotification;\n\n      handleNotification(notificationConfig);\n    },\n    onError: (err: TError) => {\n      checkError(err);\n      queryOptions?.onError?.(err);\n\n      const notificationConfig =\n        typeof errorNotification === "function"\n          ? errorNotification(err, { metaData, config }, resource)\n          : errorNotification;\n\n      handleNotification(notificationConfig, {\n        key: `${resource}-useList-notification`,\n        message: translate(\n          "common:notifications.error",\n          { statusCode: err.statusCode },\n          `Error (status code: ${err.statusCode})`,\n        ),\n        description: err.message,\n        type: "error",\n      });\n    },\n  },\n);\n')))),(0,t.yg)("p",null,"We'll be visiting code like this often, but if you examine closely you can see that ",(0,t.yg)("strong",{parentName:"p"},"Refine")," uses ",(0,t.yg)("strong",{parentName:"p"},"React Query")," to handle caching, state management as well as errors out-of-the-box."),(0,t.yg)("p",null,"The following diagram illustrates the interactions:"),(0,t.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-02-04-refine-pixels-1/refine-flow.png",alt:"refine banner"}),(0,t.yg)("br",null),(0,t.yg)("h2",{id:"providers-and-hooks"},"Providers and Hooks"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Refine"),"'s power lies in the abstraction of various app component logic such as authentication, authorization, routing and data fetching - inside individual providers and their corresponding hooks."),(0,t.yg)("p",null,"Common providers include:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/docs/api-reference/core/providers/auth-provider/"},(0,t.yg)("inlineCode",{parentName:"a"},"authProvider"))," - for authentication and authorization."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/docs/api-reference/core/providers/data-provider/"},(0,t.yg)("inlineCode",{parentName:"a"},"dataProvider"))," - for CRUD operations."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/docs/api-reference/core/providers/router-provider/"},(0,t.yg)("inlineCode",{parentName:"a"},"routerProvider"))," - for defining routes, RESTful and non-RESTful."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/docs/api-reference/core/providers/live-provider/"},(0,t.yg)("inlineCode",{parentName:"a"},"liveProvider"))," - for implementing real time features."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/docs/api-reference/core/providers/accessControl-provider/"},(0,t.yg)("inlineCode",{parentName:"a"},"accessControlProvider"))," - for access control management."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://refine.dev/docs/api-reference/core/providers/audit-log-provider/"},(0,t.yg)("inlineCode",{parentName:"a"},"auditLogProvider"))," - for logging appwide activities.")),(0,t.yg)("p",null,"For an exhaustive list of providers, please visit the ",(0,t.yg)("strong",{parentName:"p"},"Refine")," providers documentation from ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/"},"here"),"."),(0,t.yg)("p",null,"Each method in these providers comes with its corresponding hook to be used from inside UI components and pages. For more details, please refer to the ",(0,t.yg)("strong",{parentName:"p"},"Refine")," hooks documentation starting ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/accessControl/useCan/"},"here"),"."),(0,t.yg)("h2",{id:"support-packages"},"Support Packages"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Refine")," is inherently headless in its core API and deliberately agnostic about the UI and backend layers. Being so, it is able to provide fantastic support for major UI libraries and frameworks as well as popular backend frameworks and services. To name a few, ",(0,t.yg)("strong",{parentName:"p"},"Refine"),"'s UI support packages include ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/antd/"},(0,t.yg)("strong",{parentName:"a"},"Ant Design")),", ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/mui/"},(0,t.yg)("strong",{parentName:"a"},"Material UI")),", ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/chakra-ui/"},(0,t.yg)("strong",{parentName:"a"},"Chakra UI"))," and ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/mantine/"},(0,t.yg)("strong",{parentName:"a"},"Mantine")),". Backend supplementary modules include ",(0,t.yg)("a",{parentName:"p",href:"https://supabase.com/"},(0,t.yg)("strong",{parentName:"a"},"Supabase")),", ",(0,t.yg)("a",{parentName:"p",href:"https://graphql.org/"},(0,t.yg)("strong",{parentName:"a"},"GraphQL")),", and ",(0,t.yg)("a",{parentName:"p",href:"https://nestjs.com/"},(0,t.yg)("strong",{parentName:"a"},"NestJS"))),(0,t.yg)("p",null,"For a complete list of all these modules, check out ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/packages/list-of-packages/"},"this page"),"."),(0,t.yg)("h2",{id:"what-is-supabase"},"What is Supabase?"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://supabase.com/"},(0,t.yg)("strong",{parentName:"a"},"Supabase"))," is an open source alternative to Firebase. It is a hosted backend that provides a realtime database, authentication, storage, and API services."),(0,t.yg)("p",null,"Refine has a built-in data provider support for Supabase. You can find the advanced tutorial ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/data-providers/supabase/"},"here"),"."),(0,t.yg)("p",null,"We'll be using ",(0,t.yg)("strong",{parentName:"p"},"Supabase")," to build our backend for ",(0,t.yg)("strong",{parentName:"p"},"Pixels")," app."),(0,t.yg)("h2",{id:"a-week-of-refine-ft-supabase"},"A week of Refine ft. Supabase"),(0,t.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-02-04-refine-pixels-1/pixel-logo-background.png",alt:"refine banner"}),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("p",null,"In this tutorial series, we will be going through most of the core features of ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},(0,t.yg)("strong",{parentName:"a"},"Refine"))," by building two apps related to drawing pixels on a canvas. This section is intended to provide an overview."),(0,t.yg)("p",null,"The first one, the client app - ",(0,t.yg)("strong",{parentName:"p"},"Pixels"),', allows a logged in user to create a canvas and draw on it together with other users. It also displays a public gallery of all canvases and a "Featured Canvases" page.'),(0,t.yg)("p",null,"The second app, ",(0,t.yg)("strong",{parentName:"p"},"Pixels Admin")," is an admin dashboard that allows authorized users like ",(0,t.yg)("inlineCode",{parentName:"p"},"editor"),"s and ",(0,t.yg)("inlineCode",{parentName:"p"},"admin"),"s to view the list of users registered with ",(0,t.yg)("strong",{parentName:"p"},"Pixels")," app and manage user drawn canvases, with actions like promoting, unpromoting and deleting a canvas."),(0,t.yg)("p",null,"We will be building these two apps day-by-day over a period of 7 days. And while doing so, we will dive deep into the details of related providers, hooks, UI components and how ",(0,t.yg)("strong",{parentName:"p"},"Refine")," works behind the scenes."),(0,t.yg)("p",null,"As far as our features and functionalities go, we will cover most of the providers and some of the related hooks. For the UI side, we will be using the optional ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/antd/"},(0,t.yg)("strong",{parentName:"a"},"Ant Design"))," package supported by ",(0,t.yg)("strong",{parentName:"p"},"Refine"),". For the backend, we will use a PostgreSQL database hosted on the ",(0,t.yg)("a",{parentName:"p",href:"https://supabase.com/"},(0,t.yg)("strong",{parentName:"a"},"Supabase"))," cloud."),(0,t.yg)("br",null),(0,t.yg)("p",null,"Here are the detailed outlines split per day:"),(0,t.yg)("h3",{id:"day-one---on-refineweek"},"Day One - On RefineWeek"),(0,t.yg)("p",null,"This post. Hello! \ud83d\udc4b \ud83d\udc4b ",(0,t.yg)("strong",{parentName:"p"},"Refine")," welcomes you! We are here \ud83d\ude04 \ud83d\ude04"),(0,t.yg)("h3",{id:"day-two---setting-up-the-client-app"},"Day Two - Setting Up the Client App"),(0,t.yg)("p",null,"We start with setting up the ",(0,t.yg)("strong",{parentName:"p"},"Pixels")," client app using ",(0,t.yg)("inlineCode",{parentName:"p"},"create refine-app"),". We choose ",(0,t.yg)("strong",{parentName:"p"},"Refine"),"'s optional ",(0,t.yg)("strong",{parentName:"p"},"Ant Design")," and ",(0,t.yg)("strong",{parentName:"p"},"Supabase")," modules as our support packages. After initialization, we explore the boilerplate code created by ",(0,t.yg)("inlineCode",{parentName:"p"},"create refine-app")," and look into the details of the ",(0,t.yg)("inlineCode",{parentName:"p"},"dataProvider")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider")," objects and briefly discuss their mechanisms."),(0,t.yg)("h3",{id:"day-three---adding-crud-actions--authentication"},"Day Three - Adding CRUD Actions & Authentication"),(0,t.yg)("p",null,"On Day Three, we start adding features to our app. We activate the ",(0,t.yg)("inlineCode",{parentName:"p"},"resources")," prop for ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine />")," and using the ",(0,t.yg)("inlineCode",{parentName:"p"},"dataProvider")," prop, we implement how to create a canvas, show a canvas and draw pixels on a canvas. We add a public gallery to show all canvases in a page and featured canvases in another. We also implement user authentication so that only signed in users can create and draw on a canvas - and while doing so we delve into the ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider")," object."),(0,t.yg)("p",null,"Here is a quick sum up of specifications we cover on Day Three:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The ",(0,t.yg)("strong",{parentName:"li"},"Pixels")," app has a public gallery."),(0,t.yg)("li",{parentName:"ol"},"The public gallery has a home page of featured canvases."),(0,t.yg)("li",{parentName:"ol"},"The public gallery contains a section for all the canvases."),(0,t.yg)("li",{parentName:"ol"},"All users can view the public gallery."),(0,t.yg)("li",{parentName:"ol"},"All users can view a canvas."),(0,t.yg)("li",{parentName:"ol"},"Only logged in users can create a canvas."),(0,t.yg)("li",{parentName:"ol"},"Only logged in users can draw pixels on a canvas."),(0,t.yg)("li",{parentName:"ol"},"A user can sign up to the app using email, Google and GitHub."),(0,t.yg)("li",{parentName:"ol"},"A user can log in to the app using email, Google and GitHub.")),(0,t.yg)("h3",{id:"day-four---adding-realtime-collaboration"},"Day Four - Adding Realtime Collaboration"),(0,t.yg)("p",null,"On Day Four, we add ",(0,t.yg)("strong",{parentName:"p"},"real time")," features to our app using the ",(0,t.yg)("inlineCode",{parentName:"p"},"liveProvider")," prop on ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine />"),". Real time updates on a canvas will facilitate multiple users to collaborate on it at the same time."),(0,t.yg)("p",null,"We are going to use ",(0,t.yg)("strong",{parentName:"p"},"Supabase"),"'s ",(0,t.yg)("strong",{parentName:"p"},"Realtime")," ",(0,t.yg)("a",{parentName:"p",href:"https://supabase.com/docs/guides/realtime/postgres-cdc"},"PostgreSQL CDC")," in order to perform row level updates on the PostgreSQL database in real time."),(0,t.yg)("h3",{id:"day-five---initialize-and-build-pixels-admin-app"},"Day Five - Initialize and Build Pixels Admin App"),(0,t.yg)("p",null,"Basing on the learning from the client app, we quickly implement an admin dashboard app and explore how ",(0,t.yg)("strong",{parentName:"p"},"Refine"),"'s ",(0,t.yg)("strong",{parentName:"p"},"Ant Design")," support module is geared to rapidly build CRUD pages for a ",(0,t.yg)("strong",{parentName:"p"},"Refine")," app."),(0,t.yg)("p",null,"Here are the requirements for ",(0,t.yg)("strong",{parentName:"p"},"Pixels Admin"),":"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Allow a user to sign up to the app using email, Google and GitHub."),(0,t.yg)("li",{parentName:"ol"},"Allow a user to log in to the app using email, Google and GitHub."),(0,t.yg)("li",{parentName:"ol"},"Build a dashboard that lists ",(0,t.yg)("inlineCode",{parentName:"li"},"users")," and ",(0,t.yg)("inlineCode",{parentName:"li"},"canvases"),"."),(0,t.yg)("li",{parentName:"ol"},"The dashboard shows a list of all users at ",(0,t.yg)("inlineCode",{parentName:"li"},"/users")," endpoint."),(0,t.yg)("li",{parentName:"ol"},"The dashboard shows a list of all canvases at ",(0,t.yg)("inlineCode",{parentName:"li"},"/canvases")," endpoint.")),(0,t.yg)("h3",{id:"day-six---add-role-based-authorization"},"Day Six - Add Role Based Authorization"),(0,t.yg)("p",null,"On Day Six, we implement user role based authorization to our admin app. While doing so, we analyze the ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider.getPermissions()")," method from the standpoint of implementing authorization and customize according to our needs. We use ",(0,t.yg)("strong",{parentName:"p"},"Casbin")," for implementing a Role Based Access Control model and use it to define the ",(0,t.yg)("inlineCode",{parentName:"p"},"can")," method of the ",(0,t.yg)("inlineCode",{parentName:"p"},"accessControlProvider")," provider."),(0,t.yg)("p",null,"Here are the features we implement on Day Six:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"There are two authorized roles for admin dashboard: ",(0,t.yg)("inlineCode",{parentName:"li"},"editor")," and ",(0,t.yg)("inlineCode",{parentName:"li"},"admin"),"."),(0,t.yg)("li",{parentName:"ol"},'An editor is able to promote a canvas to "featured" status and demote it back.'),(0,t.yg)("li",{parentName:"ol"},'An admin is able to promote a canvas to "featured" status and demote it back.'),(0,t.yg)("li",{parentName:"ol"},"An admin is able to delete a canvas.")),(0,t.yg)("h3",{id:"day-seven---add-audit-log-to-client-app-and-admin-app"},"Day Seven - Add Audit Log to Client App and Admin App"),(0,t.yg)("p",null,"On the last day, with the ",(0,t.yg)("inlineCode",{parentName:"p"},"auditLogProvider")," prop, we implement a log of all pixel drawing activities.Mutations for drawing pixels will be logged and saved in a ",(0,t.yg)("inlineCode",{parentName:"p"},"logs")," table in our ",(0,t.yg)("strong",{parentName:"p"},"Supabase")," database."),(0,t.yg)("p",null,"We will display these logs inside a modal for each canvas both in the client ",(0,t.yg)("strong",{parentName:"p"},"Pixels")," app and in the ",(0,t.yg)("strong",{parentName:"p"},"Pixels Admin")," dashboard app. So, we will implement audit logging on both our apps."),(0,t.yg)("h2",{id:"summary"},"Summary"),(0,t.yg)("p",null,"In this post, we introduced the ",(0,t.yg)("strong",{parentName:"p"},"Refine")," framework and the ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/week-of-refine/"},"RefineWeek")," series itself. We talked about ",(0,t.yg)("strong",{parentName:"p"},"Refine"),"'s underlying architecture which consists of providers, hooks and components that help rapidly build internal tools."),(0,t.yg)("p",null,"We laid out the plans for building a ",(0,t.yg)("strong",{parentName:"p"},"Pixels")," client app and an admin dashboard app in considerable depth."),(0,t.yg)("p",null,"Tomorrow, on ",(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/blog/refine-pixels-2/"},"Day Two"),', we are ready to start "Setting Up the Client App". See you soon!'),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://refine.dev/blog/refine-pixels-2/"},'Click here to read "Setting Up the Client App" article. ',"\u2192")))}m.isMDXComponent=!0}}]);