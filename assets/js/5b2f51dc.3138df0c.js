"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85719],{15680:(e,n,r)=>{r.d(n,{xA:()=>l,yg:()=>f});var a=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),s=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=t,f=d["".concat(p,".").concat(m)]||d[m]||h[m]||o;return r?a.createElement(f,i(i({ref:n},l),{},{components:r})):a.createElement(f,i({ref:n},l))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[d]="string"==typeof e?e:t,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89698:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>v,frontMatter:()=>p,metadata:()=>l,toc:()=>h});var a=r(96540),t=r(15680);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function c(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}const p={id:"inferencer",title:"Inferencer"},s=void 0,l={unversionedId:"api-reference/chakra-ui/components/inferencer",id:"version-3.xx.xx/api-reference/chakra-ui/components/inferencer",title:"Inferencer",description:"You can automatically generate views for your resources using @pankod/refine-inferencer. Inferencer exports ChakraUIListInferencer, ChakraUIShowInferencer, ChakraUIEditInferencer, ChakraUICreateInferencer and ChakraUIInferencer (which combines all in one place) components.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/inferencer.md",sourceDirName:"api-reference/chakra-ui/components",slug:"/api-reference/chakra-ui/components/inferencer",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/inferencer",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/inferencer.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1714506456,formattedLastUpdatedAt:"Apr 30, 2024",frontMatter:{id:"inferencer",title:"Inferencer"},sidebar:"someSidebar",previous:{title:"<AuthPage>",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/chakra-auth-page"},next:{title:"Create",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/basic-views/create"}},d={},h=[{value:"Usage",id:"usage",level:2},{value:"Views",id:"views",level:2},{value:"<code>List</code>",id:"list",level:3},{value:"<code>Show</code>",id:"show",level:3},{value:"<code>Create</code>",id:"create",level:3},{value:"<code>Edit</code>",id:"edit",level:3},{value:"Example",id:"example",level:2}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",n)},f=m("DocThumbsUpDownFeedbackWidget"),u=m("Tabs"),g=m("TabItem"),y=m("CodeSandboxExample"),k={toc:h},I="wrapper";function v(e){var{components:n}=e,r=c(e,["components"]);return(0,t.yg)(I,i(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(n){o(e,n,r[n])}))}return e}({},k,r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"You can automatically generate views for your resources using ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer"),". Inferencer exports ",(0,t.yg)("inlineCode",{parentName:"p"},"ChakraUIListInferencer"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"ChakraUIShowInferencer"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"ChakraUIEditInferencer"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"ChakraUICreateInferencer")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"ChakraUIInferencer")," (which combines all in one place) components."),(0,t.yg)("h2",{id:"usage"},"Usage"),(0,t.yg)(f,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Chakra UI components can be imported from ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/chakra-ui"),". You can directly use the components in ",(0,t.yg)("inlineCode",{parentName:"p"},"resources")," prop of ",(0,t.yg)("inlineCode",{parentName:"p"},"Refine")," component or you can use them in your custom components by passing the ",(0,t.yg)("inlineCode",{parentName:"p"},"resource")," prop as the resource name."),(0,t.yg)(u,{defaultValue:"resources",values:[{label:(0,t.yg)(a.Fragment,null,"In",(0,t.yg)("code",{style:{margin:"0 0.7ch"}},"resources"),"prop"),value:"resources"},{label:"In Custom Components",value:"custom"}],mdxType:"Tabs"},(0,t.yg)(g,{value:"resources",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, ChakraProvider, refineTheme } from "@pankod/refine-chakra-ui";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        resources={[\n          {\n            name: "samples",\n            // highlight-start\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n            create: ChakraUIInferencer,\n            edit: ChakraUIInferencer,\n            // highlight-end\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n'))),(0,t.yg)(g,{value:"custom",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst SampleList = () => {\n  return (\n    // highlight-next-line\n    <ChakraUIInferencer resource="samples" action="list" />\n  );\n};\n\nconst SampleShow = () => {\n  return (\n    // highlight-next-line\n    <ChakraUIInferencer resource="samples" action="show" id="1" />\n  );\n};\n\nconst SampleCreate = () => {\n  return (\n    // highlight-next-line\n    <ChakraUIInferencer resource="samples" action="create" />\n  );\n};\n\nconst SampleEdit = () => {\n  return (\n    // highlight-next-line\n    <ChakraUIInferencer resource="samples" action="edit" id="1" />\n  );\n};\n')))),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"To learn more about ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," package, please check out ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/inferencer"},"Docs")))),(0,t.yg)("h2",{id:"views"},"Views"),(0,t.yg)("h3",{id:"list"},(0,t.yg)("inlineCode",{parentName:"h3"},"List")),(0,t.yg)(f,{id:"list",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Generates a sample list view for your resources according to the API response. It uses ",(0,t.yg)("inlineCode",{parentName:"p"},"List")," component from ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-react-table"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples"},'setInitialRoutes(["/"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout, ChakraProvider, refineTheme } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        routerProvider={routerProvider}\n        dataProvider={dataProvider(API_URL)}\n        Layout={Layout}\n        resources={[\n          {\n            name: "samples",\n            // highlight-next-line\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n            create: ChakraUIInferencer,\n            edit: ChakraUIInferencer,\n            canDelete: true,\n          },\n          {\n            name: "categories",\n            // highlight-next-line\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n          },\n          {\n            name: "tags",\n            // highlight-next-line\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,t.yg)("h3",{id:"show"},(0,t.yg)("inlineCode",{parentName:"h3"},"Show")),(0,t.yg)(f,{id:"show",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Generates a sample show view for your resources according to the API response. It uses ",(0,t.yg)("inlineCode",{parentName:"p"},"Show")," and field components from ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," with ",(0,t.yg)("inlineCode",{parentName:"p"},"useShow")," hook from ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-core"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/show/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/show/123"},'setInitialRoutes(["/samples/show/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout, ChakraProvider, refineTheme } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        routerProvider={routerProvider}\n        dataProvider={dataProvider(API_URL)}\n        Layout={Layout}\n        resources={[\n          {\n            name: "samples",\n            list: ChakraUIInferencer,\n            // highlight-next-line\n            show: ChakraUIInferencer,\n            create: ChakraUIInferencer,\n            edit: ChakraUIInferencer,\n            canDelete: true,\n          },\n          {\n            name: "categories",\n            list: ChakraUIInferencer,\n            // highlight-next-line\n            show: ChakraUIInferencer,\n          },\n          {\n            name: "tags",\n            list: ChakraUIInferencer,\n            // highlight-next-line\n            show: ChakraUIInferencer,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,t.yg)("h3",{id:"create"},(0,t.yg)("inlineCode",{parentName:"h3"},"Create")),(0,t.yg)(f,{id:"create",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Generates a sample create view for your resources according to the first record in list API response. It uses ",(0,t.yg)("inlineCode",{parentName:"p"},"Create")," component from ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-react-hook-form"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/create",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/create"},'setInitialRoutes(["/samples/create"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout, ChakraProvider, refineTheme } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        routerProvider={routerProvider}\n        dataProvider={dataProvider(API_URL)}\n        Layout={Layout}\n        resources={[\n          {\n            name: "samples",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n            // highlight-next-line\n            create: ChakraUIInferencer,\n            edit: ChakraUIInferencer,\n            canDelete: true,\n          },\n          {\n            name: "categories",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n          },\n          {\n            name: "tags",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,t.yg)("h3",{id:"edit"},(0,t.yg)("inlineCode",{parentName:"h3"},"Edit")),(0,t.yg)(f,{id:"edit",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Generates a sample edit view for your resources according to the API response. It uses ",(0,t.yg)("inlineCode",{parentName:"p"},"Edit")," component from ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-react-hook-form"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/edit/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/edit/123"},'setInitialRoutes(["/samples/edit/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout, ChakraProvider, refineTheme } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        routerProvider={routerProvider}\n        dataProvider={dataProvider(API_URL)}\n        Layout={Layout}\n        resources={[\n          {\n            name: "samples",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n            create: ChakraUIInferencer,\n            // highlight-next-line\n            edit: ChakraUIInferencer,\n            canDelete: true,\n          },\n          {\n            name: "categories",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n          },\n          {\n            name: "tags",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,t.yg)("h2",{id:"example"},"Example"),(0,t.yg)(f,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Below you'll find a Live CodeSandbox Example displaying a fully setup ",(0,t.yg)("inlineCode",{parentName:"p"},"Refine")," app with ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/chakra-ui")," components."),(0,t.yg)(y,{path:"inferencer-chakra-ui",mdxType:"CodeSandboxExample"})))}v.isMDXComponent=!0}}]);