"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91434],{58860:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(37953);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(l,".").concat(f)]||u[f]||b[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24632:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>u});r(37953);var n=r(58860);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={id:"basic",title:"Tables with Mantine",sidebar_label:"Basic Table","example-title":"Basic React Table with Mantine","example-tags":["table","mantine","react-table"]},l=void 0,s={unversionedId:"examples/table/mantine/basic",id:"examples/table/mantine/basic",title:"Tables with Mantine",description:"Refine allows you to use all the features of React Table with @refinedev/react-table adapter. In this way, you can manage your server-side data operations. By using this adapter, you can directly use all the features of React Table in your Refine project. For more information, you can view the live example or review the source code to see how it's used with Mantine.",source:"@site/docs/examples/table/mantine/basic.md",sourceDirName:"examples/table/mantine",slug:"/examples/table/mantine/basic",permalink:"/docs/examples/table/mantine/basic",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/table/mantine/basic.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716808447,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{id:"basic",title:"Tables with Mantine",sidebar_label:"Basic Table","example-title":"Basic React Table with Mantine","example-tags":["table","mantine","react-table"]},sidebar:"mainSidebar",previous:{title:"Authentication",permalink:"/docs/examples/authentication/mantine"},next:{title:"Advanced Table",permalink:"/docs/examples/table/mantine/advanced-react-table"}},p={},u=[],b=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var f;const m={toc:u},y="wrapper";function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(y,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Refine allows you to use all the features of ",(0,n.yg)("a",{parentName:"p",href:"https://react-table.tanstack.com/"},"React Table")," with ",(0,n.yg)("inlineCode",{parentName:"p"},"@refinedev/react-table")," adapter. In this way, you can manage your server-side data operations. By using this adapter, you can directly use all the features of React Table in your Refine project. For more information, you can view the live example or review the source code to see how it's used with Mantine."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"Refer to the React Table documentation for more information. \u2192")),(0,n.yg)(b,{path:"table-mantine-basic",mdxType:"CodeSandboxExample"}))}d.isMDXComponent=!0}}]);