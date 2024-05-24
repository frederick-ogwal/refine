"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52306],{58860:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var a=t(37953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,m=d["".concat(s,".").concat(u)]||d[u]||g[u]||o;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2006:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>d});t(37953);var a=t(58860);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const i={id:"adding-sort-and-filters",title:"6. Adding Sort and Filters",tutorial:{order:0,prev:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:!1}},s=void 0,p={unversionedId:"tutorial/adding-crud-pages/mantine/adding-sort-and-filters",id:"version-3.xx.xx/tutorial/adding-crud-pages/mantine/adding-sort-and-filters",title:"6. Adding Sort and Filters",description:"In the previous Adding List Page section, we have displayed blog posts data in a table. Now we will learn how to add sorting and filtering to the table to user can have more control over the data.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mantine/adding-sort-and-filters.md",sourceDirName:"tutorial/4-adding-crud-pages/mantine",slug:"/tutorial/adding-crud-pages/mantine/adding-sort-and-filters",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/mantine/adding-sort-and-filters",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mantine/adding-sort-and-filters.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1716561459,formattedLastUpdatedAt:"May 24, 2024",frontMatter:{id:"adding-sort-and-filters",title:"6. Adding Sort and Filters",tutorial:{order:0,prev:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:!1}}},c={},d=[{value:"Sort and Filters",id:"sort-and-filters",level:2},{value:"Adding Sorting",id:"adding-sorting",level:2},{value:"Adding Filters",id:"adding-filters",level:2}],g=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",n)},u=g("DocThumbsUpDownFeedbackWidget"),m=g("Checklist"),y=g("ChecklistItem"),h={toc:d},f="wrapper";function b(e){var{components:n}=e,t=l(e,["components"]);return(0,a.yg)(f,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){r(e,n,t[n])}))}return e}({},h,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"In the previous ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/adding-crud-pages/mantine/index"},"Adding List Page")," section, we have displayed blog posts data in a table. Now we will learn how to add sorting and filtering to the table to user can have more control over the data."),(0,a.yg)("h2",{id:"sort-and-filters"},"Sort and Filters"),(0,a.yg)(u,{id:"sort-and-filters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"@pankod/refine-react-table")," package based on the ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/table/v8"},(0,a.yg)("strong",{parentName:"a"},"Tanstack Table"))," package. So, we can add sorting and filtering features to our table as suggested in the ",(0,a.yg)("strong",{parentName:"p"},"Tanstack Table")," documentation."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/react-table/"},"Refer to the ",(0,a.yg)("strong",{parentName:"a"},"@pankod/refine-react-table")," ",(0,a.yg)("inlineCode",{parentName:"a"},"useTable")," documentation for more information ","\u2192")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Tanstack Table")," keeps the ",(0,a.yg)("inlineCode",{parentName:"p"},"sorting")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"filters")," states in the ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable")," hook. When we change the these states, the ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable")," hook will automatically fetch the data and update the table with the new data."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Under the hood, ",(0,a.yg)("inlineCode",{parentName:"p"},"sorting"),"\xa0and ",(0,a.yg)("inlineCode",{parentName:"p"},"filters")," states of ",(0,a.yg)("strong",{parentName:"p"},"Tanstack Table")," are converted to the ",(0,a.yg)("inlineCode",{parentName:"p"},"CrudSorting")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"CrudFilter")," types of ",(0,a.yg)("strong",{parentName:"p"},"refine"),". So, when you change the ",(0,a.yg)("strong",{parentName:"p"},"Tanstack Table"),"'s ",(0,a.yg)("inlineCode",{parentName:"p"},"sorting")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"filters")," state, ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable")," hook will pass the converted params to the ",(0,a.yg)("inlineCode",{parentName:"p"},"getList")," method of the ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider"),".")),(0,a.yg)("p",null,"Since ",(0,a.yg)("inlineCode",{parentName:"p"},"@pankod/refine-react-table")," provides a headless solution, there are many ways to handle filtering and sorting. In this tutorial, we will show basic examples of how to add sorting and filtering to the table.")),(0,a.yg)("h2",{id:"adding-sorting"},"Adding Sorting"),(0,a.yg)(u,{id:"adding-sorting",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Let's create a ",(0,a.yg)("inlineCode",{parentName:"p"},"<ColumnSorter/>")," component to use in our table header. This component will be responsible for changing the sorting state of the table."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/table/ColumnSorter.tsx"',title:'"src/components/table/ColumnSorter.tsx"'},'import { ActionIcon } from "@pankod/refine-mantine";\nimport { IconChevronDown, IconSelector, IconChevronUp } from "@tabler/icons";\nimport type { Column } from "@pankod/refine-react-table";\n\nexport const ColumnSorter: React.FC<{ column: Column<any, any> }> = ({\n  column,\n}) => {\n  if (!column.getCanSort()) {\n    return null;\n  }\n\n  const sorted = column.getIsSorted();\n\n  return (\n    <ActionIcon size="xs" onClick={column.getToggleSortingHandler()}>\n      {!sorted && <IconSelector size={18} />}\n      {sorted === "asc" && <IconChevronDown size={18} />}\n      {sorted === "desc" && <IconChevronUp size={18} />}\n    </ActionIcon>\n  );\n};\n')),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"<ColumnSorter/>")," is a simple component that renders a button. When the user clicks on the button, the ",(0,a.yg)("inlineCode",{parentName:"p"},"column.getToggleSortingHandler()")," method will be called. This method will change the sorting state of the table."),(0,a.yg)("p",null,"In addition, we are using the ",(0,a.yg)("inlineCode",{parentName:"p"},"column.getCanSort()")," method to check if the column is sortable. If the column is not sortable, we will not render the ",(0,a.yg)("inlineCode",{parentName:"p"},"<ColumnSorter/>")," component."),(0,a.yg)("p",null,"Lastly, If the column is sorted, we will render the ",(0,a.yg)("inlineCode",{parentName:"p"},"IconChevronDown")," icon. Otherwise, we will render the ",(0,a.yg)("inlineCode",{parentName:"p"},"IconSelector")," icon."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"In this example, we are using the ",(0,a.yg)("inlineCode",{parentName:"p"},"@tabler/icons")," package for icons. You can use any icon library you want.")),(0,a.yg)("br",null),(0,a.yg)("p",null,"Now, we can use ",(0,a.yg)("inlineCode",{parentName:"p"},"<ColumnSorter/>")," in our table header."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Import the ",(0,a.yg)("inlineCode",{parentName:"p"},"<ColumnSorter/>")," component."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/blog-posts/list.tsx"',title:'"src/pages/blog-posts/list.tsx"'},'import { ColumnSorter } from "../../components/table/ColumnSorter";\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Add the ",(0,a.yg)("inlineCode",{parentName:"p"},"<ColumnSorter/>")," component to the ",(0,a.yg)("inlineCode",{parentName:"p"},"<th/>")," as a child like below."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/blog-posts/list.tsx"',title:'"src/pages/blog-posts/list.tsx"'},"<thead>\n  {getHeaderGroups().map((headerGroup) => (\n    <tr key={headerGroup.id}>\n      {headerGroup.headers.map((header) => (\n        <th key={header.id}>\n          {!header.isPlaceholder &&\n            flexRender(header.column.columnDef.header, header.getContext())}\n          //highlight-next-line\n          <ColumnSorter column={header.column} />\n        </th>\n      ))}\n    </tr>\n  ))}\n</thead>\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Disable sorting for the ",(0,a.yg)("inlineCode",{parentName:"p"},"actions")," column by setting the ",(0,a.yg)("inlineCode",{parentName:"p"},"enableSorting")," property of the column to ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," in the column definition like below:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/blog-posts/list.tsx"',title:'"src/pages/blog-posts/list.tsx"'},'{\n    id: "actions",\n    accessorKey: "id",\n    header: "Actions",\n    //highlight-next-line\n    enableSorting: false,\n},\n')))),(0,a.yg)("p",null,"Now, we can sort the table by clicking on the sort button in the table header."),(0,a.yg)("details",null,(0,a.yg)("summary",null,(0,a.yg)("strong",null,"How can I disable sorting for a specific column?")),(0,a.yg)("p",null,"You can disable sorting for a specific column by setting the ",(0,a.yg)("inlineCode",{parentName:"p"},"enableSorting")," property of the column to ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," in the column definition like below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "name",\n    accessorKey: "name",\n    header: "Name",\n    //highlight-next-line\n    enableSorting: false,\n},\n')))),(0,a.yg)("h2",{id:"adding-filters"},"Adding Filters"),(0,a.yg)(u,{id:"adding-filters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Let's create a ",(0,a.yg)("inlineCode",{parentName:"p"},"<ColumnFilter/>")," component to use in our table header. This component will be responsible for changing the filters state of the table."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/table/ColumnFilter.tsx"',title:'"src/components/table/ColumnFilter.tsx"'},'import React, { useState } from "react";\nimport {\n  TextInput,\n  Menu,\n  ActionIcon,\n  Stack,\n  Group,\n} from "@pankod/refine-mantine";\nimport { IconFilter, IconX, IconCheck } from "@tabler/icons";\nimport type { Column } from "@pankod/refine-react-table";\n\nexport const ColumnFilter: React.FC<{ column: Column<any, any> }> = ({\n  column,\n}) => {\n  const [state, setState] = useState(null as null | { value: any });\n\n  if (!column.getCanFilter()) {\n    return null;\n  }\n\n  const open = () =>\n    setState({\n      value: column.getFilterValue(),\n    });\n\n  const close = () => setState(null);\n\n  const change = (value: any) => setState({ value });\n\n  const clear = () => {\n    column.setFilterValue(undefined);\n    close();\n  };\n\n  const save = () => {\n    if (!state) return;\n    column.setFilterValue(state.value);\n    close();\n  };\n\n  const renderFilterElement = () => {\n    const FilterComponent = (column.columnDef?.meta as any)?.filterElement;\n\n    if (!FilterComponent && !!state) {\n      return (\n        <TextInput\n          autoComplete="off"\n          value={state.value}\n          onChange={(e) => change(e.target.value)}\n        />\n      );\n    }\n\n    return <FilterComponent value={state?.value} onChange={change} />;\n  };\n\n  return (\n    <Menu\n      opened={!!state}\n      position="bottom"\n      withArrow\n      transition="scale-y"\n      shadow="xl"\n      onClose={close}\n      width="256px"\n      withinPortal\n    >\n      <Menu.Target>\n        <ActionIcon\n          size="xs"\n          onClick={open}\n          variant={column.getIsFiltered() ? "light" : "transparent"}\n          color={column.getIsFiltered() ? "primary" : "gray"}\n        >\n          <IconFilter size={18} />\n        </ActionIcon>\n      </Menu.Target>\n      <Menu.Dropdown>\n        {!!state && (\n          <Stack p="xs" spacing="xs">\n            {renderFilterElement()}\n            <Group position="right" spacing={6} noWrap>\n              <ActionIcon\n                size="md"\n                color="gray"\n                variant="outline"\n                onClick={clear}\n              >\n                <IconX size={18} />\n              </ActionIcon>\n              <ActionIcon\n                size="md"\n                onClick={save}\n                color="primary"\n                variant="outline"\n              >\n                <IconCheck size={18} />\n              </ActionIcon>\n            </Group>\n          </Stack>\n        )}\n      </Menu.Dropdown>\n    </Menu>\n  );\n};\n')),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"<ColumnFilter/>")," is a component that renders a button. When the user clicks on the button, the menu will be opened. In the menu, we are rendering the filter element of the column. By default, we are rendering an ",(0,a.yg)("inlineCode",{parentName:"p"},"<Input/>")," component. However, you can render any component you want."),(0,a.yg)("p",null,"Filter element is a component that renders an input element. When the user changes the value of the input element, the filter value of the column will be changed."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"<ColumnFilter/>")," also contains a clear and apply button. When the user clicks on the clear button, the filter value of the column will be cleared. When the user clicks on the apply button, the filter value of the column will be set."),(0,a.yg)("p",null,"Now, we can use ",(0,a.yg)("inlineCode",{parentName:"p"},"<ColumnFilter/>")," in our table header."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Import the ",(0,a.yg)("inlineCode",{parentName:"p"},"<ColumnFilter/>")," component."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/blog-posts/list.tsx"',title:'"src/pages/blog-posts/list.tsx"'},'import { ColumnFilter } from "../../components/table/ColumnFilter";\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Add the ",(0,a.yg)("inlineCode",{parentName:"p"},"<ColumnFilter/>")," component to the ",(0,a.yg)("inlineCode",{parentName:"p"},"<th/>")," as a child like below."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/blog-posts/list.tsx"',title:'"src/pages/blog-posts/list.tsx"'},"<thead>\n  {getHeaderGroups().map((headerGroup) => (\n    <tr key={headerGroup.id}>\n      {headerGroup.headers.map((header) => (\n        <th key={header.id}>\n          {!header.isPlaceholder &&\n            flexRender(header.column.columnDef.header, header.getContext())}\n          <ColumnSorter column={header.column} />\n          //highlight-next-line\n          <ColumnFilter column={header.column} />\n        </th>\n      ))}\n    </tr>\n  ))}\n</thead>\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},'Change the filter operator for columns to "contains" by changing the ',(0,a.yg)("inlineCode",{parentName:"p"},"meta")," property of the column definition like below:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "title",\n    accessorKey: "title",\n    header: "Title",\n    //highlight-start\n    meta: {\n        filterOperator: "contains",\n    },\n    //highlight-end\n},\n{\n    id: "content",\n    accessorKey: "content",\n    header: "Content",\n    //highlight-start\n    meta: {\n        filterOperator: "contains",\n    },\n    //highlight-end\n},\n')),(0,a.yg)("p",{parentName:"li"},"By default, the ",(0,a.yg)("inlineCode",{parentName:"p"},"filterOperator"),' is set to "eq". So, we have changed the ',(0,a.yg)("inlineCode",{parentName:"p"},"filterOperator"),' to "contains" for specific columns.')),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},'Disable filtering for the "actions" column by setting the ',(0,a.yg)("inlineCode",{parentName:"p"},"enableColumnFilter")," property of the column to ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," in the column definition like below:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "actions",\n    accessorKey: "id",\n    header: "Actions",\n    //highlight-next-line\n    enableColumnFilter: false,\n    ...\n},\n')))),(0,a.yg)("p",null,"Now, we can filter the table by clicking on the filter button in the table header."),(0,a.yg)("br",null),(0,a.yg)("details",null,(0,a.yg)("summary",null,(0,a.yg)("strong",null,"How can I use custom filter element?")),(0,a.yg)("p",null,"If you want to use a custom filter element, you can pass it to the ",(0,a.yg)("inlineCode",{parentName:"p"},"filterElement")," property of the ",(0,a.yg)("inlineCode",{parentName:"p"},"meta")," in column definition. For example, you can pass a ",(0,a.yg)("inlineCode",{parentName:"p"},"<Select/>")," component like below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "category",\n    header: "Category",\n    accessorKey: "category.id",\n    meta: {\n        filterElement: (props) => <Select {...props} />,\n    },\n},\n')),(0,a.yg)("p",null,"In the props, the filter element will receive the ",(0,a.yg)("inlineCode",{parentName:"p"},"value")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"onChange")," props. You can use these props to change the filter value of the column.")),(0,a.yg)("details",null,(0,a.yg)("summary",null,(0,a.yg)("strong",null,"How can I change the filter operator?")),(0,a.yg)("p",null,'By default, filter operator is "eq" for columns. You can change the filter operator by passing the ',(0,a.yg)("inlineCode",{parentName:"p"},"filterOperator")," property to the ",(0,a.yg)("inlineCode",{parentName:"p"},"meta"),' in column definition. For example, you can change the filter operator to "contains" like below:'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "description",\n    header: "Description",\n    accessorKey: "description",\n    //highlight-start\n    meta: {\n        filterOperator: "contains",\n    },\n    //highlight-end\n},\n'))),(0,a.yg)("details",null,(0,a.yg)("summary",null,(0,a.yg)("strong",null,"How can I disable filtering for a specific column?")),(0,a.yg)("p",null,"You can disable filtering for a specific column by setting the ",(0,a.yg)("inlineCode",{parentName:"p"},"enableColumnFilter")," property of the column to ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," in the column definition like below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "category",\n    header: "Category",\n    accessorKey: "category.id",\n    //highlight-next-line\n    enableColumnFilter: false,\n},\n'))),(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)(m,{mdxType:"Checklist"},(0,a.yg)(y,{id:"add-search-and-filters-mantine",mdxType:"ChecklistItem"},"I added search and filters to the table"))))}b.isMDXComponent=!0}}]);