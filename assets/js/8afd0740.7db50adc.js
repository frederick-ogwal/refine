"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68339],{58860:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=o,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});t(37953);var r=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={id:"filter-dropdown",title:"<FilterDropdown>",sidebar_label:"<FilterDropdown>"},p=void 0,s={unversionedId:"api-reference/antd/components/filter-dropdown",id:"version-3.xx.xx/api-reference/antd/components/filter-dropdown",title:"<FilterDropdown>",description:"Usage",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/filter-dropdown.md",sourceDirName:"api-reference/antd/components",slug:"/api-reference/antd/components/filter-dropdown",permalink:"/docs/3.xx.xx/api-reference/antd/components/filter-dropdown",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/filter-dropdown.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1716561459,formattedLastUpdatedAt:"May 24, 2024",frontMatter:{id:"filter-dropdown",title:"<FilterDropdown>",sidebar_label:"<FilterDropdown>"},sidebar:"someSidebar",previous:{title:"Url",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/url"},next:{title:"Custom Inputs",permalink:"/docs/3.xx.xx/api-reference/antd/components/inputs/custom-inputs"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>selectedKeys</code>, <code>setSelectedKeys</code>, <code>confirm</code>, <code>clearFilters</code>",id:"selectedkeys-setselectedkeys-confirm-clearfilters",level:3},{value:"<code>mapValue</code>",id:"mapvalue",level:3}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},u=m("DocThumbsUpDownFeedbackWidget"),g=m("PropsTable"),y=m("CodeSandboxExample"),f={toc:d},b="wrapper";function h(e){var{components:n}=e,t=i(e,["components"]);return(0,r.yg)(b,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)(u,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(u,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<FilterDropdown>")," is a helper component for ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/table/#components-table-demo-custom-filter-panel"},"filter dropdowns in Ant Design ",(0,r.yg)("inlineCode",{parentName:"a"},"<Table>")," components.")),(0,r.yg)("p",null,"It serves as a bridge by synchronizing between its children's input value and ",(0,r.yg)("inlineCode",{parentName:"p"},"<Table>"),"'s filter values."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/pages/postList.tsx"',title:'"components/pages/postList.tsx"'},'import {\n  List,\n  Table,\n  // highlight-start\n  FilterDropdown,\n  Select,\n  // highlight-end\n  useTable,\n} from "@pankod/refine-antd";\n\nconst PostList: React.FC = (props) => {\n  const { tableProps } = useTable<IPost>();\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column\n          dataIndex={["category", "id"]}\n          title="Category"\n          key="category.id"\n          // highlight-start\n          filterDropdown={(props) => (\n            <FilterDropdown {...props}>\n              <Select\n                mode="multiple"\n                placeholder="Select Category"\n                options={[\n                  { label: "Ergonomic", value: "1" },\n                  { label: "Island", value: "2" },\n                ]}\n              />\n            </FilterDropdown>\n          )}\n          // highlight-end\n        />\n      </Table>\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  category: {\n    id: number;\n  };\n}\n')),(0,r.yg)("p",null,"Selecting categories from dropdown will send the id's of categories as filtering values to ",(0,r.yg)("strong",{parentName:"p"},"Table")," and data will be updated by ",(0,r.yg)("strong",{parentName:"p"},"refine")," under the hood."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<FilterDropdown>")," will put two buttons for filtering and clearing filter actions."),(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/category_filter-dropdown.png",alt:"Show record action"}),(0,r.yg)("br",null),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"We added category options for ",(0,r.yg)("inlineCode",{parentName:"p"},"<Select>")," manually for the sake of simplicity but ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/field/useSelect/"},"useSelect")," hook can be used to populate the props of ",(0,r.yg)("inlineCode",{parentName:"p"},"<Select>")),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps: categorySelectProps } = useSelect<ICategory>({\n  resource: "categories",\n  optionLabel: "title",\n  optionValue: "id",\n});\n\n<Select {...categorySelectProps} />;\n')))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"selectedkeys-setselectedkeys-confirm-clearfilters"},(0,r.yg)("inlineCode",{parentName:"h3"},"selectedKeys"),", ",(0,r.yg)("inlineCode",{parentName:"h3"},"setSelectedKeys"),", ",(0,r.yg)("inlineCode",{parentName:"h3"},"confirm"),", ",(0,r.yg)("inlineCode",{parentName:"h3"},"clearFilters")),(0,r.yg)(u,{id:"selectedkeys-setselectedkeys-confirm-clearfilters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"These are to be passed from ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/table/#Column"},(0,r.yg)("inlineCode",{parentName:"a"},"<Table.Column>"),"'s filterDropdown")," prop.")),(0,r.yg)("h3",{id:"mapvalue"},(0,r.yg)("inlineCode",{parentName:"h3"},"mapValue")),(0,r.yg)("p",null,"Determines the value passed to children. ",(0,r.yg)("inlineCode",{parentName:"p"},"mapValue")," takes ",(0,r.yg)("inlineCode",{parentName:"p"},"selectedKeys")," as an argument."),(0,r.yg)("p",null,"For example when using ",(0,r.yg)("inlineCode",{parentName:"p"},"useSelect")," for ",(0,r.yg)("inlineCode",{parentName:"p"},"<Select>")," component. In this case values must be mapped to ",(0,r.yg)("inlineCode",{parentName:"p"},"number"),"s using ",(0,r.yg)("inlineCode",{parentName:"p"},"mapValue"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { getDefaultFilter } from "@pankod/refine-core";\nimport {\n  useTable,\n  Table,\n  FilterDropdown,\n  Select,\n  useSelect,\n} from "@pankod/refine-antd";\n\nconst { tableProps, filters } = useTable<IPost>({\n  initialFilter: [\n    {\n      field: "category.id",\n      value: [1, 2],\n      operator: "in",\n    },\n  ],\n});\n\nconst { selectProps: categorySelectProps } = useSelect<ICategory>({\n  resource: "categories",\n  optionLabel: "title",\n  optionValue: "id",\n  defaultValue: getDefaultFilter("category.id", filters, "in"),\n});\n\n<Table>\n  <Table.Column dataIndex="id" title="ID" />\n  <Table.Column\n    dataIndex={["category", "id"]}\n    title="Category"\n    key="category.id"\n    filterDropdown={(props) => (\n      <FilterDropdown\n        {...props}\n        mapValue={(selectedKeys) =>\n          selectedKeys.map((i) => parseInt(i.toString()))\n        }\n      >\n        <Select\n          style={{ minWidth: 200 }}\n          mode="multiple"\n          placeholder="Select Category"\n          {...categorySelectProps}\n        />\n      </FilterDropdown>\n    )}\n    defaultFilteredValue={getDefaultFilter("category.id", filters, "in")}\n  />\n</Table>;\n')),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"If ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#syncwithlocation"},"syncWithLocation")," is enabled, on page refresh filter values will be type of ",(0,r.yg)("inlineCode",{parentName:"p"},"string")," since they will be parsed from URL. This might produce some incompatibility if data for filter input comes from an API and it's not type of ",(0,r.yg)("inlineCode",{parentName:"p"},"string"),"."),(0,r.yg)("blockquote",{parentName:"admonition"},(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"getDefaultFilter")," finds filter values for a given column from the given filters. In the example, ",(0,r.yg)("inlineCode",{parentName:"p"},"filters")," passed to ",(0,r.yg)("inlineCode",{parentName:"p"},"getDefaultFilter")," includes filter values from the URL since it comes from ",(0,r.yg)("inlineCode",{parentName:"p"},"useTable"),".\n:::")),(0,r.yg)(g,{module:"@pankod/refine-antd/FilterDropdown",mdxType:"PropsTable"}),(0,r.yg)("h2",{parentName:"admonition",id:"example"},"Example"),(0,r.yg)(y,{path:"table-antd-use-table",mdxType:"CodeSandboxExample"}))))}h.isMDXComponent=!0}}]);