"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19517],{58860:(e,t,o)=>{o.d(t,{xA:()=>d,yg:()=>p});var n=o(37953);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=l(o),b=r,p=c["".concat(u,".").concat(b)]||c[b]||h[b]||i;return o?n.createElement(p,s(s({ref:t},d),{},{components:o})):n.createElement(p,s({ref:t},d))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=b;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}b.displayName="MDXCreateElement"},49734:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});o(37953);var n=o(58860);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const a={title:"Buttons",source:"packages/core/src/hooks/button"},u=void 0,l={unversionedId:"core/hooks/utilities/buttons/index",id:"core/hooks/utilities/buttons/index",title:"Buttons",description:"Refine offers a set of buttons in UI integrations that you can use to perform actions like navigation, deletion and refresh. These buttons include many useful features such as confirmation dialogs, access control, i18n and inferring parameters from the current route.",source:"@site/docs/core/hooks/utilities/buttons/index.md",sourceDirName:"core/hooks/utilities/buttons",slug:"/core/hooks/utilities/buttons/",permalink:"/docs/core/hooks/utilities/buttons/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/core/hooks/utilities/buttons/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716808447,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{title:"Buttons",source:"packages/core/src/hooks/button"},sidebar:"mainSidebar",previous:{title:"useExport",permalink:"/docs/core/hooks/utilities/use-export/"},next:{title:"Introduction",permalink:"/docs/ui-integrations/ant-design/introduction/"}},d={},c=[{value:"Hooks",id:"hooks",level:2},{value:"useListButton",id:"uselistbutton",level:3},{value:"useCreateButton",id:"usecreatebutton",level:3},{value:"useShowButton",id:"useshowbutton",level:3},{value:"useEditButton",id:"useeditbutton",level:3},{value:"useCloneButton",id:"useclonebutton",level:3},{value:"useDeleteButton",id:"usedeletebutton",level:3},{value:"useRefreshButton",id:"userefreshbutton",level:3},{value:"useSaveButton",id:"usesavebutton",level:3},{value:"useExportButton",id:"useexportbutton",level:3},{value:"useImportButton",id:"useimportbutton",level:3}],h=(b="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var b;const p={toc:c},f="wrapper";function m(e){var{components:t}=e,o=s(e,["components"]);return(0,n.yg)(f,i(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){r(e,t,o[t])}))}return e}({},p,o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Refine offers a set of buttons in UI integrations that you can use to perform actions like navigation, deletion and refresh. These buttons include many useful features such as confirmation dialogs, access control, i18n and inferring parameters from the current route."),(0,n.yg)("p",null,"All these buttons are powered by respective hooks that you can use to create your own custom buttons or customizing the existing ones without having to write the logic from scratch."),(0,n.yg)("h2",{id:"hooks"},"Hooks"),(0,n.yg)("h3",{id:"uselistbutton"},"useListButton"),(0,n.yg)(h,{id:"uselistbutton",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useListButton")," provides set of values to be used for navigating to a list view of a resource."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'const {\n  to, // The path to navigate to.\n  label, // The label to be displayed on the button.\n  title, // If the button is disabled, the title will contain the reason for the button being disabled.\n  hidden, // Whether the button should be hidden or not.\n  disabled, // Whether the button should be disabled or not.\n  LinkComponent, // The component to be used as a link. This is provided by the router provider from `<Refine />`.\n} = useListButton({\n  resource: "posts", // Resource name/identifier, if not provided, it will be inferred from the current route.\n  accessControl, // To enable/disable the access control checks and hide/disable the button based on the permissions.\n  meta, // Meta object to be passed to the navigation. This can be used to pass additional parameters to the route if needed.\n});\n'))),(0,n.yg)("h3",{id:"usecreatebutton"},"useCreateButton"),(0,n.yg)(h,{id:"usecreatebutton",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useCreateButton")," provides set of values to be used for navigating to a create view of a resource."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'const {\n  to, // The path to navigate to.\n  label, // The label to be displayed on the button.\n  title, // If the button is disabled, the title will contain the reason for the button being disabled.\n  hidden, // Whether the button should be hidden or not.\n  disabled, // Whether the button should be disabled or not.\n  LinkComponent, // The component to be used as a link. This is provided by the router provider from `<Refine />`.\n} = useCreateButton({\n  resource: "posts", // Resource name/identifier, if not provided, it will be inferred from the current route.\n  accessControl, // To enable/disable the access control checks and hide/disable the button based on the permissions.\n  meta, // Meta object to be passed to the navigation. This can be used to pass additional parameters to the route if needed.\n});\n'))),(0,n.yg)("h3",{id:"useshowbutton"},"useShowButton"),(0,n.yg)(h,{id:"useshowbutton",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useShowButton")," provides set of values to be used for navigating to a show view of a resource for a given record."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'const {\n  to, // The path to navigate to.\n  label, // The label to be displayed on the button.\n  title, // If the button is disabled, the title will contain the reason for the button being disabled.\n  hidden, // Whether the button should be hidden or not.\n  disabled, // Whether the button should be disabled or not.\n  LinkComponent, // The component to be used as a link. This is provided by the router provider from `<Refine />`.\n} = useShowButton({\n  resource: "posts", // Resource name/identifier, if not provided, it will be inferred from the current route.\n  id, // Record identifier to navigate to the show view. If not provided, it will be inferred from the current route.\n  accessControl, // To enable/disable the access control checks and hide/disable the button based on the permissions.\n  meta, // Meta object to be passed to the navigation. This can be used to pass additional parameters to the route if needed.\n});\n'))),(0,n.yg)("h3",{id:"useeditbutton"},"useEditButton"),(0,n.yg)(h,{id:"useeditbutton",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useEditButton")," provides set of values to be used for navigating to an edit view of a resource for a given record."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'const {\n  to, // The path to navigate to.\n  label, // The label to be displayed on the button.\n  title, // If the button is disabled, the title will contain the reason for the button being disabled.\n  hidden, // Whether the button should be hidden or not.\n  disabled, // Whether the button should be disabled or not.\n  LinkComponent, // The component to be used as a link. This is provided by the router provider from `<Refine />`.\n} = useEditButton({\n  resource: "posts", // Resource name/identifier, if not provided, it will be inferred from the current route.\n  id, // Record identifier to navigate to the edit view. If not provided, it will be inferred from the current route.\n  accessControl, // To enable/disable the access control checks and hide/disable the button based on the permissions.\n  meta, // Meta object to be passed to the navigation. This can be used to pass additional parameters to the route if needed.\n});\n'))),(0,n.yg)("h3",{id:"useclonebutton"},"useCloneButton"),(0,n.yg)(h,{id:"useclonebutton",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useCloneButton")," provides set of values to be used for navigating to a clone view of a resource for a given record."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'const {\n  to, // The path to navigate to.\n  label, // The label to be displayed on the button.\n  title, // If the button is disabled, the title will contain the reason for the button being disabled.\n  hidden, // Whether the button should be hidden or not.\n  disabled, // Whether the button should be disabled or not.\n  LinkComponent, // The component to be used as a link. This is provided by the router provider from `<Refine />`.\n} = useCloneButton({\n  resource: "posts", // Resource name/identifier, if not provided, it will be inferred from the current route.\n  id, // Record identifier to navigate to the clone view. If not provided, it will be inferred from the current route.\n  accessControl, // To enable/disable the access control checks and hide/disable the button based on the permissions.\n  meta, // Meta object to be passed to the navigation. This can be used to pass additional parameters to the route if needed.\n});\n'))),(0,n.yg)("h3",{id:"usedeletebutton"},"useDeleteButton"),(0,n.yg)(h,{id:"usedeletebutton",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useDeleteButton")," provides set of values to be used for deleting a record. This hook will also provide labels for the confirmation dialog."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"const {\n  onConfirm, // The function to be called when the user confirms the deletion. This will call the mutation of `useDelete` under the hood.\n  label, // The label to be displayed on the button.\n  title, // If the button is disabled, the title will contain the reason for the button being disabled.\n  disabled, // Whether the button should be disabled or not.\n  hidden, // Whether the button should be hidden or not.\n  loading, // Whether the button should be in loading state or not.\n  confirmTitle, // The title of the confirmation dialog.\n  confirmOkLabel, // The label of the confirmation dialog's confirm button.\n  cancelLabel, // The label of the confirmation dialog's cancel button.\n} = useDeleteButton({\n  resource, // Resource name/identifier, if not provided, it will be inferred from the current route.\n  id, // Record identifier to delete. If not provided, it will be inferred from the current route.\n  onSuccess, // The function to be called when the deletion is successful.\n  mutationMode, // The mode of the mutation. If not passed, globally defined mutation mode will be used.\n  successNotification, // The notification to be shown when the deletion is successful.\n  errorNotification, // The notification to be shown when the deletion fails.\n  accessControl, // To enable/disable the access control checks and hide/disable the button based on the permissions.\n  meta, // Meta object to be passed to the deletion.\n  dataProviderName, // The name of the data provider to be used for the deletion. If not provided, the default data provider will be used.\n  invalidates, // The list of scopes of a resource to be invalidated after the deletion.\n});\n"))),(0,n.yg)("h3",{id:"userefreshbutton"},"useRefreshButton"),(0,n.yg)(h,{id:"userefreshbutton",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useRefreshButton")," provides set of values to be used for refreshing the record of a resource."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"const {\n  onClick, // The function to be called when the user clicks the button. This will trigger an invalidation of the query cache.\n  label, // The label to be displayed on the button.\n  loading, // Whether the button should be in loading state or not.\n} = useRefreshButton({\n  resource, // Resource name/identifier, if not provided, it will be inferred from the current route.\n  id, // Record identifier to refresh. If not provided, it will be inferred from the current route.\n  dataProviderName, // The name of the data provider to be used for the refresh. If not provided, the default data provider will be used.\n});\n"))),(0,n.yg)("h3",{id:"usesavebutton"},"useSaveButton"),(0,n.yg)(h,{id:"usesavebutton",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useSaveButton")," provides a label for a save button that can be used in forms. Props related to submission of the form will be provided by the ",(0,n.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-form"},(0,n.yg)("inlineCode",{parentName:"a"},"useForm"))," hook."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"const {\n  label, // The label to be displayed on the button.\n} = useSaveButton();\n"))),(0,n.yg)("h3",{id:"useexportbutton"},"useExportButton"),(0,n.yg)(h,{id:"useexportbutton",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useExportButton")," provides a label for an export button for a resource. Props related to exporting bulk data from the resource will be provided by the ",(0,n.yg)("a",{parentName:"p",href:"/docs/core/hooks/utilities/use-export"},(0,n.yg)("inlineCode",{parentName:"a"},"useExport"))," hook."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"const {\n  label, // The label to be displayed on the button.\n} = useExportButton();\n"))),(0,n.yg)("h3",{id:"useimportbutton"},"useImportButton"),(0,n.yg)(h,{id:"useimportbutton",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useImportButton")," provides a label for an import button for a resource. Props related to importing bulk data to the resource will be provided by the ",(0,n.yg)("a",{parentName:"p",href:"/docs/core/hooks/utilities/use-import"},(0,n.yg)("inlineCode",{parentName:"a"},"useImport"))," hook."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"const {\n  label, // The label to be displayed on the button.\n} = useImportButton();\n"))))}m.isMDXComponent=!0}}]);