"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71433],{88123:(e,t,n)=>{n.d(t,{O:()=>m});var r=n(68835),o=n(37953),a=n(86743),i=n(22938),s=n(62201);const l=({horizontalSize:e,onMouseDown:t})=>o.createElement("div",{className:(0,r.A)("resize-handler","hidden","md:block","absolute","z-[3]","top-0","bottom-0","w-2.5","cursor-ew-resize"),"data-direction":"horizontal",onMouseDown:t,style:{left:`calc(${e}% - 5px)`}});function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const m=e=>"nextjs"===(null==e?void 0:e.template)?o.createElement(y,e):o.createElement(g,e),g=e=>{var t,n,d,m,g,y,{startRoute:f,showNavigator:b,showLineNumbers:h,showOpenInCodeSandbox:v,initialPercentage:x=50,dependencies:w,showReadOnly:k,options:O={showTabs:!0,initMode:"lazy",classes:{"sp-bridge-frame":"!hidden","sp-layout":"!rounded-lg !border-gray-300 dark:!border-gray-700","sp-editor":"!gap-0 border-r !border-r-gray-300 dark:!border-r-gray-700","sp-tabs":"!border-b-gray-300 dark:!border-b-gray-700 !bg-gray-0 dark:!bg-gray-800","sp-tabs-scrollable-container":"!min-h-[32px]","sp-input":"!text-gray-800 dark:!text-gray-100","sp-cm":(0,r.A)("p-0 bg-transparent","[&>.cm-editor]:!bg-refine-react-light-code","[&>.cm-editor]:dark:!bg-refine-react-dark-code","[&_.cm-activeLine]:!bg-gray-100 [&_.cm-activeLine]:dark:!bg-gray-800"),"sp-icon-standalone":"!bg-gray-300 dark:!bg-gray-700 !text-gray-400 dark:!text-gray-500","sp-file-explorer":"border-r !border-r-gray-300 dark:!border-r-gray-700","sp-console":(0,r.A)("not-prose","!border-t-0 !border !border-solid !border-t-none","!border-gray-300 dark:!border-gray-700","!rounded-bl-lg !rounded-br-lg","!bg-refine-react-light-code","dark:!bg-refine-react-dark-code"),"sp-console-header":(0,r.A)("!bg-gray-0 dark:!bg-gray-800","border-b border-solid !border-b-gray-300 dark:!border-b-gray-700","!h-[32px] !min-h-[32px]"),"sp-console-header-actions":(0,r.A)("h-full","!gap-0"),"sp-console-header-button":(0,r.A)("!bg-transparent","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link","h-full","!text-gray-800 dark:!text-gray-100","!rounded-none","-ml-px"),"sp-console-list":(0,r.A)("!bg-refine-react-light-code","dark:!bg-refine-react-dark-code","[&>code]:!bg-transparent"),"sp-tab-button":(0,r.A)("!h-8","!px-2 !pb-2 !pt-1.5","!text-gray-800 dark:!text-gray-100","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","-ml-px first:ml-0","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link")}},template:P="react-ts",customSetup:E,files:N,previewOnly:C,layout:I,height:S=420,wrapperClassName:j,className:R,showFiles:D=!1,showConsole:A=!1,hidePreview:M=!1}=e,L=u(e,["startRoute","showNavigator","showLineNumbers","showOpenInCodeSandbox","initialPercentage","dependencies","showReadOnly","options","template","customSetup","files","previewOnly","layout","height","wrapperClassName","className","showFiles","showConsole","hidePreview"]);const[T,z]=o.useState(!1);o.useEffect((()=>{z(!0)}),[]);const{colorMode:F}=(0,s.G)();var U,H;null!=O||(O={}),null!==(U=(g=O).resizablePanels)&&void 0!==U||(g.resizablePanels=!0),null!==(H=(y=O).editorWidthPercentage)&&void 0!==H||(y.editorWidthPercentage=null!=x?x:50);const V={showTabs:O.showTabs,showLineNumbers:O.showLineNumbers,showInlineErrors:O.showInlineErrors,wrapContent:O.wrapContent,closableTabs:O.closableTabs,initMode:O.initMode,extensions:null===(t=O.codeEditor)||void 0===t?void 0:t.extensions,extensionsKeymap:null===(n=O.codeEditor)||void 0===n?void 0:n.extensionsKeymap,readOnly:O.readOnly,showReadOnly:null!=k?k:O.showReadOnly,additionalLanguages:null===(d=O.codeEditor)||void 0===d?void 0:d.additionalLanguages},B={activeFile:O.activeFile,visibleFiles:O.visibleFiles,recompileMode:O.recompileMode,recompileDelay:O.recompileDelay,autorun:O.autorun,autoReload:O.autoReload,bundlerURL:O.bundlerURL,startRoute:O.startRoute,skipEval:O.skipEval,fileResolver:O.fileResolver,initMode:O.initMode,initModeObserverOptions:O.initModeObserverOptions,externalResources:O.externalResources,logLevel:O.logLevel,classes:O.classes},[W,$]=o.useState(!1),{onHandleMouseDown:G,horizontalSize:X}=(({initialSize:e=50})=>{const[t,n]=o.useState(e),r=o.useRef(null),a=e=>{if(!r.current)return;const t=r.current.parentElement;if(!t)return;const{left:o,width:a}=t.getBoundingClientRect(),i=(e.clientX-o)/a*100,s=Math.min(Math.max(i,25),75);n(s),t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents="none"}))},i=()=>{var e;const t=null===(e=r.current)||void 0===e?void 0:e.parentElement;t&&(t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents=""})),r.current=null)};return o.useEffect((()=>(document.body.addEventListener("mousemove",a),document.body.addEventListener("mouseup",i),()=>{document.body.removeEventListener("mousemove",a),document.body.removeEventListener("mouseup",i)})),[]),{horizontalSize:t,onHandleMouseDown:o.useCallback((e=>{r.current=e.target}),[])}})({initialSize:O.editorWidthPercentage}),q=!C&&!(null==I?void 0:I.includes("col"));var _,K,Y,Z,J;return o.createElement(o.Fragment,null,o.createElement("div",{className:(0,r.A)("pb-6",j)},o.createElement("div",{className:(0,r.A)("absolute","left-0","right-0","w-full","px-2","md:px-4","xl:px-6","max-w-screen-xl","mx-auto",R)},o.createElement(i.l5,p({key:`${P}-${F}-${T}`,customSetup:p({dependencies:w},E),files:N,options:c(p({},B),{classes:c(p({},B.classes),{"sp-layout":(0,r.A)(null===(m=B.classes)||void 0===m?void 0:m["sp-layout"],A&&"!rounded-bl-none !rounded-br-none")})}),template:P,theme:"light"===F?c(p({},a.Zw),{colors:c(p({},a.Zw.colors),{accent:"#1D1E30",surface1:"transparent",surface2:"transparent",surface3:"transparent"})}):c(p({},a.hc),{colors:c(p({},a.hc.colors),{surface1:"transparent",surface2:"transparent",surface3:"transparent"})}),className:(0,r.A)("not-prose sandpack-container","max-w-screen-xl","animate-reveal")},L),o.createElement(i.am,{className:(0,r.A)("col"===I&&"!flex-col","col-reverse"===I&&"!flex-col-reverse")},D&&o.createElement(i.Lm,{autoHiddenFiles:!0,style:{height:null!==(_=O.editorHeight)&&void 0!==_?_:S}}),!C&&o.createElement(i.cW,c(p({},V),{showLineNumbers:h,closableTabs:D,initMode:"lazy",style:c(p({height:null!==(K=O.editorHeight)&&void 0!==K?K:S},(null==I?void 0:I.includes("col"))?{flex:"initial"}:{flexGrow:X,flexShrink:X,flexBasis:0}),{overflow:"hidden"})})),q?o.createElement(l,{onMouseDown:G,horizontalSize:X}):null,M?null:o.createElement(o.Fragment,null,o.createElement(i.G5,{showOpenInCodeSandbox:v,startRoute:f,showNavigator:null!=b?b:O.showNavigator,showRefreshButton:O.showRefreshButton,style:c(p({display:M?"none":"flex"},(null==I?void 0:I.includes("col"))?{flex:"initial",width:"100%"}:{flexGrow:100-X,flexShrink:100-X,flexBasis:0,width:C?"100%":100-X+"%"}),{gap:0,height:null!==(Y=O.editorHeight)&&void 0!==Y?Y:S})},o.createElement("div",{className:"sp-custom-loading"},o.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/spinner.gif",className:(0,r.A)("w-12","h-12","rounded-full")}))))),A?o.createElement(i.X2,{style:c(p({height:200},(null==I?void 0:I.includes("col"))?{flex:"initial"}:{flexGrow:X,flexShrink:X,flexBasis:0}),{overflow:"hidden"})}):null)),o.createElement("div",{className:(0,r.A)(""),style:{height:Number(null!==(Z=O.editorHeight)&&void 0!==Z?Z:S)+2}}),o.createElement("div",{className:(0,r.A)((null==I?void 0:I.includes("col"))?"block":"block md:hidden"),style:{height:Number(null!==(J=O.editorHeight)&&void 0!==J?J:S)+2}}),o.createElement("div",{className:(0,r.A)(A?"block":"hidden","h-[200px]")})),o.createElement("section",{className:"hidden max-w-0 max-h-0"},o.createElement("p",null,`Dependencies: ${Object.keys(null!=w?w:{}).map((e=>`${e}@${w[e]}`))}`),o.createElement("h3",null,"Code Files"),Object.keys(null!=N?N:{}).map((e=>o.createElement("div",{key:e},o.createElement("div",null,`File: ${e}`),o.createElement("div",null,`Content: ${"code"in N[e]?N[e].code:N[e]}`))))))},y=e=>{const t={hidePreview:!0,showConsole:!1};return o.createElement(g,c(p({},t,e),{template:"react-ts"}))}},79985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>P,frontMatter:()=>y,metadata:()=>b,toc:()=>v});var r=n(37953),o=n(58860),a=n(88123);function i(){return r.createElement(a.O,{height:460,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest"},startRoute:"/",files:{"/App.tsx":{code:s},"/home-page.tsx":{code:l,active:!0}}})}const s='\nimport React from "react";\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport { HomePage } from "./home-page";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n      <Refine\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          resources={[\n              {\n                  name: "products",\n              },\n          ]}\n      >\n          <HomePage />\n      </Refine>\n  );\n};\n\nexport default App;\n\n'.trim(),l='\nimport React from "react";\nimport { useExport, useList } from "@refinedev/core";\n\nexport const HomePage = () => {\n  const { data } = useList({ resource: "products" });\n  const products = data?.data;\n\n  const { triggerExport, isLoading } = useExport<IProduct>({\n      resource: "products",\n      mapData: (item) => {\n          return {\n              ...item,\n              // category is an object, we need to stringify it\n              category: JSON.stringify(item.category),\n          };\n      },\n  });\n\n  return (\n      <div\n          style={{\n              display: "flex",\n              flexDirection: "column",\n              alignItems: "flex-start",\n              padding: "16px",\n          }}\n      >\n          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>\n              <h2>Products</h2>\n              <button onClick={triggerExport} disabled={isLoading}>\n                  {isLoading ? "Exporting..." : "Export Products"}\n              </button>\n          </div>\n          {products?.map((product) => (\n              <div key={product.id}>\n                  <h4>[ID: {product.id}] - {product.name}</h4>\n                  <p>{product.description}</p>\n              </div>\n          ))}\n      </div>\n  );\n};\n\ninterface IProduct {\n  id: string;\n  name: string;\n  description: string;\n  material: string;\n  price: number;\n  category: {\n      id: string;\n  };\n}\n\n\n'.trim();function d(){return r.createElement(a.O,{height:460,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest"},startRoute:"/",files:{"/App.tsx":{code:p},"/home-page.tsx":{code:c,active:!0}}})}const p='\nimport React from "react";\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport { HomePage } from "./home-page";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n      <Refine\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          resources={[\n              {\n                  name: "products",\n              },\n          ]}\n      >\n          <HomePage />\n      </Refine>\n  );\n};\n\nexport default App;\n\n'.trim(),c='\nimport React, { useState } from "react";\nimport { useImport, useList } from "@refinedev/core";\n\nexport const HomePage = () => {\n  const { data } = useList({\n      resource: "products",\n      sorters: [{ field: "id", order: "desc" }],\n  });\n  const products = data?.data;\n\n  const [importProgress, setImportProgress] = useState({\n      processed: 0,\n      total: 0,\n  });\n\n  const { inputProps, isLoading } = useImport<IProduct>({\n      resource: "products",\n      onFinish: () => {\n          alert("Import completed!");\n      },\n      onProgress: (progress) => {\n          setImportProgress({\n              processed: progress.processedAmount,\n              total: progress.totalAmount,\n          });\n      },\n  });\n\n  return (\n      <div\n          style={{\n              display: "flex",\n              flexDirection: "column",\n              alignItems: "flex-start",\n              padding: "16px",\n          }}\n      >\n          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>\n              <h2>Products</h2>\n\n              <label\n                  style={{\n                      display: "flex",\n                      alignItems: "center",\n                      gap: "8px",\n                      cursor: "pointer",\n                      padding: "8px",\n                      border: "1px solid #ccc",\n                      borderRadius: "4px",\n                  }}\n              >\n                  {isLoading ? (\n                      <p>\n                          {importProgress.processed} / {importProgress.total}\n                      </p>\n                  ) : (\n                      <p>Import CSV</p>\n                  )}\n                  <input name="csv" {...inputProps} />\n              </label>\n          </div>\n          {products?.map((product) => (\n              <div key={product.id}>\n                  <h4>\n                      [ID: {product.id}] - {product.name}\n                  </h4>\n                  <p>{product.description}</p>\n              </div>\n          ))}\n      </div>\n  );\n};\n\ninterface IProduct {\n  id: string;\n  name: string;\n  description: string;\n  material: string;\n  price: number;\n  category: {\n      id: string;\n  };\n}\n\n'.trim();function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const y={title:"Import - Export"},f="CSV Import - Export",b={unversionedId:"guides-concepts/import-export/index",id:"guides-concepts/import-export/index",title:"Import - Export",description:"Importing and exporting data are essential tasks for managing information in data extensive applications. With CSV export and import, we can speed up the process of data entry and data migration.",source:"@site/docs/guides-concepts/import-export/index.md",sourceDirName:"guides-concepts/import-export",slug:"/guides-concepts/import-export/",permalink:"/docs/guides-concepts/import-export/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/import-export/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716808447,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{title:"Import - Export"},sidebar:"mainSidebar",previous:{title:"Multitenancy",permalink:"/docs/guides-concepts/multi-tenancy/"},next:{title:"Internationalization (i18n)",permalink:"/docs/guides-concepts/i18n/"}},h={},v=[{value:"Import",id:"import",level:2},{value:"Export",id:"export",level:2}],x=(w="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+w+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)});var w;const k={toc:v},O="wrapper";function P(e){var{components:t}=e,n=g(e,["components"]);return(0,o.yg)(O,m(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"csv-import---export"},"CSV Import - Export"),(0,o.yg)("p",null,"Importing and exporting data are essential tasks for managing information in data extensive applications. With ",(0,o.yg)("inlineCode",{parentName:"p"},"CSV")," export and import, we can speed up the process of data entry and data migration."),(0,o.yg)("p",null,"Refine provides ",(0,o.yg)("a",{parentName:"p",href:"/docs/core/hooks/utilities/use-import/"},(0,o.yg)("inlineCode",{parentName:"a"},"useImport"))," and ",(0,o.yg)("a",{parentName:"p",href:"/docs/core/hooks/utilities/use-export/"},(0,o.yg)("inlineCode",{parentName:"a"},"useExport"))," hooks for both bulk importing and exporting data, making it easy to move large datasets between your application and external sources."),(0,o.yg)("h2",{id:"import"},"Import"),(0,o.yg)(x,{id:"import",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"useImport")," hook allows you to import data from a ",(0,o.yg)("inlineCode",{parentName:"p"},"CSV")," file. For each row in the file, it calls the ",(0,o.yg)("inlineCode",{parentName:"p"},"create")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"createMany")," method of your data provider according to your configuration."),(0,o.yg)("p",null,"Internally, it uses ",(0,o.yg)("a",{parentName:"p",href:"https://www.papaparse.com/"},"Papa Parse")," to parse the file contents."),(0,o.yg)(d,{mdxType:"UseImportExample"}),(0,o.yg)("p",null,"You can use the following ",(0,o.yg)("inlineCode",{parentName:"p"},"CSV")," file to test the import feature."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-csv",metastring:'title="products.csv"',title:'"products.csv"'},'name,material,description,price,category\n"Test Product 1","Test Material 1","Test Description 1","100","{""id"":1}"\n"Test Product 2","Test Material 2","Test Description 2","200","{""id"":2}"\n"Test Product 3","Test Material 3","Test Description 3","300","{""id"":3}"\n')),(0,o.yg)("p",null,"Refine also provides ",(0,o.yg)("inlineCode",{parentName:"p"},"<ImportButton />"),". It's compatible with ",(0,o.yg)("inlineCode",{parentName:"p"},"useImport")," hook to easily handle the import process."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/ui-integrations/ant-design/components/buttons/import-button/"},"Ant Design")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/ui-integrations/material-ui/components/buttons/import-button/"},"Material UI")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/ui-integrations/mantine/components/buttons/import-button/"},"Mantine")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/ui-integrations/chakra-ui/components/buttons/import-button/"},"Chakra UI")))),(0,o.yg)("h2",{id:"export"},"Export"),(0,o.yg)(x,{id:"export",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"useExport")," hook allows you to export data as a ",(0,o.yg)("inlineCode",{parentName:"p"},"CSV")," file. It calls the ",(0,o.yg)("inlineCode",{parentName:"p"},"getList")," method of your data provider and downloads the data as a ",(0,o.yg)("inlineCode",{parentName:"p"},"CSV")," file."),(0,o.yg)("p",null,"Internally, it uses ",(0,o.yg)("a",{parentName:"p",href:"https://www.papaparse.com/"},"Papa Parse")," to create the ",(0,o.yg)("inlineCode",{parentName:"p"},"CSV")," file."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"\ud83d\udea8 The download feature for ",(0,o.yg)("inlineCode",{parentName:"p"},"CSV")," files does not function within an iframe (live-previews). You can copy the code and run it in your own project to see it in action.")),(0,o.yg)(i,{mdxType:"UseExportExample"}),(0,o.yg)("p",null,"Refine also provides ",(0,o.yg)("inlineCode",{parentName:"p"},"<ExportButton />"),". It's compatible with ",(0,o.yg)("inlineCode",{parentName:"p"},"useExport")," hook to easily handle the export process."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/ui-integrations/ant-design/components/buttons/export-button/"},"Ant Design")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/ui-integrations/material-ui/components/buttons/export-button/"},"Material UI")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/ui-integrations/mantine/components/buttons/export-button/"},"Mantine")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/ui-integrations/chakra-ui/components/buttons/export-button/"},"Chakra UI")))))}P.isMDXComponent=!0}}]);