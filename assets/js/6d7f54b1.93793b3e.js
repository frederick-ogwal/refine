"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"theming",title:"Theme",sidebar_label:"Theme"},l=void 0,c={unversionedId:"api-reference/chakra-ui/theming",id:"api-reference/chakra-ui/theming",title:"Theme",description:"The theme object is where you define your application's color palette, type scale, font stacks, breakpoints, border radius values, and more. You can either create your own theme object or use theme that provide from refine. You can find more information about theme in Chakra UI documentation.",source:"@site/docs/api-reference/chakra-ui/theming.md",sourceDirName:"api-reference/chakra-ui",slug:"/api-reference/chakra-ui/theming",permalink:"/docs/api-reference/chakra-ui/theming",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/chakra-ui/theming.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1701261539,formattedLastUpdatedAt:"Nov 29, 2023",frontMatter:{id:"theming",title:"Theme",sidebar_label:"Theme"},sidebar:"someSidebar",previous:{title:"<AutoSaveIndicator>",permalink:"/docs/api-reference/chakra-ui/components/chakra-ui-auto-save-indicator"},next:{title:"Introduction",permalink:"/docs/api-reference/mantine/introduction/"}},m={},u=[{value:"Predefined Themes",id:"predefined-themes",level:2},{value:"Theme customization",id:"theme-customization",level:2},{value:"Theme switching",id:"theme-switching",level:2}],p={toc:u};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import { List, Edit, Create, EditButton } from "@refinedev/chakra-ui";\nimport {\n  TableContainer,\n  Table,\n  Thead,\n  Tbody,\n  Tr,\n  Th,\n  Td,\n  Text,\n  FormControl,\n  FormErrorMessage,\n  FormLabel,\n  Input,\n} from "@chakra-ui/react";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\nimport { useForm } from "@refinedev/react-hook-form";\n\nconst PostList: React.FC = () => {\n  const columns = React.useMemo<ColumnDef<IPost>[]>(\n    () => [\n      {\n        id: "id",\n        header: "ID",\n        accessorKey: "id",\n      },\n      {\n        id: "title",\n        header: "Title",\n        accessorKey: "title",\n      },\n      {\n        id: "actions",\n        header: "Actions",\n        accessorKey: "id",\n        cell: function render({ getValue }) {\n          return <EditButton hideText recordItemId={getValue() as number} />;\n        },\n      },\n    ],\n    [],\n  );\n\n  const { getHeaderGroups, getRowModel } = useTable({\n    columns,\n    refineCoreProps: {\n      initialPageSize: 5,\n    },\n  });\n\n  return (\n    <List>\n      <TableContainer whiteSpace="pre-line">\n        <Table variant="simple">\n          <Thead>\n            {getHeaderGroups().map((headerGroup) => (\n              <Tr key={headerGroup.id}>\n                {headerGroup.headers.map((header) => (\n                  <Th key={header.id}>\n                    {!header.isPlaceholder && (\n                      <Text>{flexRender(header.column.columnDef.header, header.getContext())}</Text>\n                    )}\n                  </Th>\n                ))}\n              </Tr>\n            ))}\n          </Thead>\n          <Tbody>\n            {getRowModel().rows.map((row) => (\n              <Tr key={row.id}>\n                {row.getVisibleCells().map((cell) => (\n                  <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>\n                ))}\n              </Tr>\n            ))}\n          </Tbody>\n        </Table>\n      </TableContainer>\n    </List>\n  );\n};\n\nconst PostEdit: React.FC = () => {\n  const {\n    refineCore: { formLoading },\n    saveButtonProps,\n    register,\n    formState: { errors },\n  } = useForm<IPost>();\n\n  return (\n    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>\n      <FormControl mb="3" isInvalid={!!errors?.title}>\n        <FormLabel>Title</FormLabel>\n        <Input {...register("title", { required: "Title is required" })} />\n        <FormErrorMessage>{`${errors.title?.message}`}</FormErrorMessage>\n      </FormControl>\n    </Edit>\n  );\n};\n\nconst PostCreate = () => {\n  const {\n    refineCore: { formLoading },\n    saveButtonProps,\n    register,\n    formState: { errors },\n  } = useForm<IPost>();\n\n  return (\n    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>\n      <FormControl mb="3" isInvalid={!!errors?.title}>\n        <FormLabel>Title</FormLabel>\n        <Input {...register("title", { required: "Title is required" })} />\n        <FormErrorMessage>{`${errors.title?.message}`}</FormErrorMessage>\n      </FormControl>\n    </Create>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n')),(0,r.kt)("p",null,"The theme object is where you define your application's color palette, type scale, font stacks, breakpoints, border radius values, and more. You can either create your own theme object or use theme that provide from ",(0,r.kt)("strong",{parentName:"p"},"refine"),". You can find more information about theme in Chakra UI documentation."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/customize-theme"},"Chakra UI documentation ","\u2192"))),(0,r.kt)("h2",{id:"predefined-themes"},"Predefined Themes"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/packages/chakra-ui/src/theme/index.ts#L92"},(0,r.kt)("inlineCode",{parentName:"a"},"RefineThemes"))," has predefined themes for you. You can use them by importing them from the ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," package. It is not required if you decide to use the default Chakra UI theme."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { Blue, Purple, Magenta, Red, Orange, Yellow } = RefineThemes;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/chakra-ui";\n\nimport { ChakraProvider } from "@chakra-ui/react";\n\nconst App: React.FC = () => {\n  return (\n    <ChakraProvider theme={RefineThemes.Blue}>\n      <Refine\n      /* ... */\n      >\n        <ThemedLayoutV2>{/* ... */}</ThemedLayoutV2>\n      </Refine>\n    </ChakraProvider>\n  );\n};\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can see how themes change the look of the application in ",(0,r.kt)("a",{parentName:"p",href:"/docs/examples/themes/refine-themes-chakra-ui/"},"this example ","\u2192"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"<ThemedLayoutV2>")," you have to wrap your application with the ",(0,r.kt)("inlineCode",{parentName:"p"},"<ChakraProvider>")," component and should give ",(0,r.kt)("inlineCode",{parentName:"p"},"theme")," prop to it."),(0,r.kt)("p",{parentName:"admonition"},"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"RefineThemes")," provided by ",(0,r.kt)("strong",{parentName:"p"},"refine")," or you can create your own theme object."),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"For more information, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/customize-theme"},"Chakra UI documentation ","\u2192")))),(0,r.kt)("h2",{id:"theme-customization"},"Theme customization"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<ChakraProvider/>")," component can be used to change the theme and other global settings. It is not required if you decide to use the default theme. You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"RefineThemes")," provided by ",(0,r.kt)("strong",{parentName:"p"},"refine"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=450px",live:!0,url:"http://localhost:3000",previewHeight:"450px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n  ErrorComponent,\n  ThemedLayoutV2,\n  notificationProvider,\n  // highlight-next-line\n  RefineThemes,\n} from "@refinedev/chakra-ui";\nimport {\n  ChakraProvider,\n  // highlight-next-line\n  extendTheme,\n} from "@chakra-ui/react";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\nconst App = () => {\n  // highlight-start\n  const customTheme = extendTheme({\n    ...RefineThemes.Blue,\n    colors: {\n      sider: {\n        background: "#4A5568",\n        collapseButton: "#1a202c",\n      },\n    },\n  });\n  // highlight-end\n\n  return (\n    // highlight-next-line\n    <ChakraProvider theme={customTheme}>\n      <BrowserRouter>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={notificationProvider()}\n          resources={[\n            {\n              name: "posts",\n              list: "/posts",\n              edit: "/posts/edit/:id",\n              create: "/posts/create",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              <Route path="posts">\n                <Route index element={<PostList />} />\n                <Route path="create" element={<PostCreate />} />\n                <Route path="edit/:id" element={<PostEdit />} />\n              </Route>\n              <Route path="*" element={<ErrorComponent />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </BrowserRouter>\n    </ChakraProvider>\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/packages/chakra-ui/src/theme/index.ts"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"refineTheme")," object in the source code to see the default theme values ","\u2192"))),(0,r.kt)("h2",{id:"theme-switching"},"Theme switching"),(0,r.kt)("p",null,"Chakra UI comes with built-in support for managing color mode in your apps. You can manage the color mode on ",(0,r.kt)("strong",{parentName:"p"},"refine")," applications such as Chakra UI applications."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Chakra stores the color mode in ",(0,r.kt)("inlineCode",{parentName:"p"},"localStorage")," and appends a className to the body to ensure the color mode is persistent.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/color-mode"},"Chakra UI documentation ","\u2192"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=500px",live:!0,url:"http://localhost:3000",previewHeight:"500px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n  ErrorComponent,\n  ThemedLayoutV2,\n  notificationProvider,\n  // highlight-next-line\n  RefineThemes,\n} from "@refinedev/chakra-ui";\nimport {\n  ChakraProvider,\n  Box,\n  IconButton,\n  Icon,\n  // highlight-start\n  useColorMode,\n  extendTheme,\n  // highlight-end\n} from "@chakra-ui/react";\nimport { IconSun, IconMoonStars } from "@tabler/icons";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\n// highlight-start\nconst Header = () => {\n  const { colorMode, toggleColorMode } = useColorMode();\n  return (\n    <Box py="2" px="4" display="flex" justifyContent="flex-end" w="full" bg="chakra-body-bg">\n      <IconButton variant="ghost" aria-label="Toggle theme" onClick={toggleColorMode}>\n        <Icon as={colorMode === "light" ? IconMoonStars : IconSun} w="18px" h="18px" />\n      </IconButton>\n    </Box>\n  );\n};\n// highlight-end\n\nconst App = () => {\n  // highlight-start\n  const customTheme = extendTheme({\n    ...RefineThemes.Blue,\n    config: {\n      initialColorMode: "dark",\n      useSystemColorMode: false,\n    },\n  });\n  // highlight-end\n\n  return (\n    // highlight-next-line\n    <ChakraProvider theme={customTheme}>\n      <BrowserRouter>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={notificationProvider()}\n          resources={[\n            {\n              name: "posts",\n              list: "/posts",\n              edit: "/posts/edit/:id",\n              create: "/posts/create",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                // highlight-next-line\n                <ThemedLayoutV2 Header={Header}>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              <Route path="posts">\n                <Route index element={<PostList />} />\n                <Route path="create" element={<PostCreate />} />\n                <Route path="edit/:id" element={<PostEdit />} />\n              </Route>\n              <Route path="*" element={<ErrorComponent />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </BrowserRouter>\n    </ChakraProvider>\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to customize the default layout elements provided with ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," package, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/custom-layout"},"Custom Layout")," tutorial.")))}d.isMDXComponent=!0}}]);