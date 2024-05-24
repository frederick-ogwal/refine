"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25442],{58860:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>h});var o=t(37953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return t?o.createElement(h,a(a({ref:n},l),{},{components:t})):o.createElement(h,a({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98544:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});t(37953);var o=t(58860);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={id:"show-button",title:"Show",swizzle:!0},p=void 0,c={unversionedId:"api-reference/mui/components/buttons/show-button",id:"version-3.xx.xx/api-reference/mui/components/buttons/show-button",title:"Show",description:"` uses Material UI  component. It uses the show method from useNavigation` under the hood. It can be useful when redirecting the app to the show page with the record id route of resource.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mui/components/buttons/show.md",sourceDirName:"api-reference/mui/components/buttons",slug:"/api-reference/mui/components/buttons/show-button",permalink:"/docs/3.xx.xx/api-reference/mui/components/buttons/show-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mui/components/buttons/show.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1716561459,formattedLastUpdatedAt:"May 24, 2024",frontMatter:{id:"show-button",title:"Show",swizzle:!0},sidebar:"someSidebar",previous:{title:"Save",permalink:"/docs/3.xx.xx/api-reference/mui/components/buttons/save-button"},next:{title:"Boolean",permalink:"/docs/3.xx.xx/api-reference/mui/components/fields/boolean"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>accessControl</code>",id:"accesscontrol",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",n)},m=d("DocThumbsUpDownFeedbackWidget"),h=d("PropsTable"),g={toc:u},y="wrapper";function f(e){var{components:n}=e,t=a(e,["components"]);return(0,o.yg)(y,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){r(e,n,t[n])}))}return e}({},g,t),{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"<ShowButton>")," uses Material UI ",(0,o.yg)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,o.yg)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," method from ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},(0,o.yg)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful when redirecting the app to the show page with the record id route of resource."),(0,o.yg)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,o.yg)("strong",{parentName:"a"},"refine CLI")))),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'// visible-block-start\nimport {\n  useDataGrid,\n  DataGrid,\n  GridColumns,\n  List,\n  // highlight-next-line\n  ShowButton,\n} from "@pankod/refine-mui";\n\nconst columns: GridColumns = [\n  { field: "id", headerName: "ID", type: "number" },\n  { field: "title", headerName: "Title", minWidth: 400, flex: 1 },\n  {\n    field: "actions",\n    headerName: "Actions",\n    renderCell: function render({ row }) {\n      // highlight-next-line\n      return <ShowButton size="small" recordItemId={row.id} />;\n    },\n    align: "center",\n    headerAlign: "center",\n    minWidth: 80,\n  },\n];\n\nconst PostsList: React.FC = () => {\n  const { dataGridProps } = useDataGrid<IPost>();\n\n  return (\n    <List>\n      <DataGrid {...dataGridProps} columns={columns} autoHeight />\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n// visible-block-end\n\nrender(\n  <RefineMuiDemo\n    resources={[\n      {\n        name: "posts",\n        list: PostsList,\n        show: () => <RefineMui.Show>Rest of the page here...</RefineMui.Show>,\n      },\n    ]}\n  />,\n);\n'))),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"recorditemid"},(0,o.yg)("inlineCode",{parentName:"h3"},"recordItemId")),(0,o.yg)(m,{id:"recorditemid",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"recordItemId")," is used to append the record id to the end of the route path."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { ShowButton } from "@pankod/refine-mui";\n\nconst MyShowComponent = () => {\n  return (\n    <ShowButton\n      resourceNameOrRouteName="posts"\n      // highlight-next-line\n      recordItemId="1"\n    />\n  );\n};\n\n// visible-block-end\n\nconst ShowPage = () => {\n  const params = useRouterContext().useParams();\n  return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        show: ShowPage,\n      },\n    ]}\n    DashboardPage={MyShowComponent}\n  />,\n);\n')),(0,o.yg)("p",null,"Clicking the button will trigger the ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," method of ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},(0,o.yg)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to ",(0,o.yg)("inlineCode",{parentName:"p"},"/posts/show/1"),"."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("inlineCode",{parentName:"p"},"<ShowButton>")," component reads the id information from the route by default."))),(0,o.yg)("h3",{id:"resourcenameorroutename"},(0,o.yg)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,o.yg)(m,{id:"resourcenameorroutename",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Redirection endpoint(",(0,o.yg)("inlineCode",{parentName:"p"},"resourceNameOrRouteName/show"),") is defined by ",(0,o.yg)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," property. By default, ",(0,o.yg)("inlineCode",{parentName:"p"},"<ShowButton>")," uses ",(0,o.yg)("inlineCode",{parentName:"p"},"name")," property of the resource object as an endpoint to redirect after clicking."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { ShowButton } from "@pankod/refine-mui";\n\nconst MyShowComponent = () => {\n  return (\n    <ShowButton\n      // highlight-next-line\n      resourceNameOrRouteName="categories"\n      recordItemId="2"\n    />\n  );\n};\n\n// visible-block-end\n\nconst ShowPage = () => {\n  const params = useRouterContext().useParams();\n  return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n      },\n      {\n        name: "categories",\n        show: ShowPage,\n      },\n    ]}\n    DashboardPage={MyShowComponent}\n  />,\n);\n')),(0,o.yg)("p",null,"Clicking the button will trigger the ",(0,o.yg)("inlineCode",{parentName:"p"},"show")," method of ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},(0,o.yg)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to ",(0,o.yg)("inlineCode",{parentName:"p"},"/categories/show/2"),".")),(0,o.yg)("h3",{id:"hidetext"},(0,o.yg)("inlineCode",{parentName:"h3"},"hideText")),(0,o.yg)(m,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"It is used to show and not show the text of the button. When ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { ShowButton } from "@pankod/refine-mui";\n\nconst MyShowComponent = () => {\n  return (\n    <ShowButton\n      // highlight-next-line\n      hideText={true}\n    />\n  );\n};\n\n// visible-block-end\n\nconst ShowPage = () => {\n  const params = useRouterContext().useParams();\n  return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: MyShowComponent,\n        show: ShowPage,\n      },\n    ]}\n  />,\n);\n'))),(0,o.yg)("h3",{id:"accesscontrol"},(0,o.yg)("inlineCode",{parentName:"h3"},"accessControl")),(0,o.yg)(m,{id:"accesscontrol",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"This prop can be used to skip access control check with its ",(0,o.yg)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,o.yg)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider"},(0,o.yg)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,o.yg)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { ShowButton } from "@pankod/refine-mui";\n\nexport const MyListComponent = () => {\n  return (\n    <ShowButton accessControl={{ enabled: true, hideIfUnauthorized: true }} />\n  );\n};\n'))),(0,o.yg)("h2",{id:"api-reference"},"API Reference"),(0,o.yg)("h3",{id:"properties-1"},"Properties"),(0,o.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)(h,{module:"@pankod/refine-mui/ShowButton",mdxType:"PropsTable"}),(0,o.yg)("admonition",{title:"External Props",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,o.yg)("a",{parentName:"p",href:"https://mui.com/material-ui/api/button/"},"Button"),"."))))}f.isMDXComponent=!0}}]);