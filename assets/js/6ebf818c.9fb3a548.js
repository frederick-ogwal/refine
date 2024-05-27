"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13934],{58860:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>h});var a=r(37953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),c=o,h=d["".concat(l,".").concat(c)]||d[c]||g[c]||n;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},82790:(e,t,r)=>{r.d(t,{Ay:()=>p});r(37953);var a=r(58860);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={toc:[]},l="wrapper";function p(e){var{components:t}=e,r=i(e,["components"]);return(0,a.yg)(l,n(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){o(e,t,r[t])}))}return e}({},s,r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"You can use the following auth provider examples as a starting point for your own auth provider or you can use them as it is. Check the links below to see the details of each example."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/examples/authentication/headless/"},"Basic")," - A basic auth provider example."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/enterprise-edition/okta"},"Okta")," - Okta, the enterprise-grade identity management service."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/examples/auth-provider/keycloak"},"Keycloak")," - An auth provider example with Keycloak."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/examples/auth-provider/auth0"},"Auth0")," - An auth provider example with Auth0."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/examples/auth-provider/google-auth"},"Google Auth")," - An auth provider example with Google Auth."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/examples/auth-provider/otpLogin"},"OTP Login")," - An auth provider example with OTP Login."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/examples/data-provider/appwrite"},"Appwrite")," - An auth provider example with Appwrite."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/examples/data-provider/supabase"},"Supabase")," - An auth provider example with Supabase."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/examples/data-provider/strapi-v4"},"Strapi")," - An auth provider example with Strapi."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/examples/next-js/"},"Basic with Nextjs")," - A basic auth provider example with Nextjs."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/examples/remix/remix-headless"},"Basic with Remix")," - A basic auth provider example with Remix."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/examples/auth-provider/kinde"},"Kinde")," - An auth provider example with Kinde.")))}p.isMDXComponent=!0},11531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>l,metadata:()=>u,toc:()=>g});r(37953);var a=r(58860),o=r(82790);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"auth-provider",title:"Auth Provider",sidebar_label:"Auth Provider"},p=void 0,u={unversionedId:"api-reference/core/providers/auth-provider",id:"version-3.xx.xx/api-reference/core/providers/auth-provider",title:"Auth Provider",description:"Auth provider is an object which contains methods to handle authentication and authorization in your app. It provides a way to authenticate users and authorize them to access resources. refine consumes these methods via auth hooks.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/providers/auth-provider.md",sourceDirName:"api-reference/core/providers",slug:"/api-reference/core/providers/auth-provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/auth-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/providers/auth-provider.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716808447,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{id:"auth-provider",title:"Auth Provider",sidebar_label:"Auth Provider"},sidebar:"someSidebar",previous:{title:"Access Control Provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider"},next:{title:"Audit Log Provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/audit-log-provider"}},d={},g=[{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Methods",id:"methods",level:2},{value:"Required Methods",id:"required-methods",level:2},{value:"login <PropTag required />",id:"login-",level:3},{value:"checkAuth <PropTag required />",id:"checkauth-",level:3},{value:"logout <PropTag required />",id:"logout-",level:3},{value:"checkError <PropTag required />",id:"checkerror-",level:3},{value:"Optional Methods",id:"optional-methods",level:2},{value:"getPermissions",id:"getpermissions",level:3},{value:"getUserIdentity",id:"getuseridentity",level:3},{value:"register",id:"register",level:3},{value:"forgotPassword",id:"forgotpassword",level:3},{value:"updatePassword",id:"updatepassword",level:3},{value:"Hooks and Components",id:"hooks-and-components",level:2},{value:"FAQ",id:"faq",level:2},{value:"How can I create authProvider?",id:"how-can-i-create-authprovider",level:3},{value:"How can I set authorization credentials?",id:"how-can-i-set-authorization-credentials",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Example",id:"example",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",t)},h=c("DocThumbsUpDownFeedbackWidget"),m=c("PropTag"),y=c("CodeSandboxExample"),f={toc:g},x="wrapper";function v(e){var{components:t}=e,r=s(e,["components"]);return(0,a.yg)(x,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Auth provider is an object which contains methods to handle authentication and authorization in your app. It provides a way to authenticate users and authorize them to access resources. ",(0,a.yg)("strong",{parentName:"p"},"refine")," consumes these methods via auth hooks."),(0,a.yg)("p",null,"By default, ",(0,a.yg)("strong",{parentName:"p"},"refine")," doesn't handle authentication in the app. When you need, you can pass ",(0,a.yg)("inlineCode",{parentName:"p"},"authProvider")," to the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine>")," component as a prop."),(0,a.yg)("p",null,"Auth provider's methods expect to return a Promise. So, you can use async methods to create auth provider. Therefore, to create auth provider from scratch, you can use any third-party authentication service like ",(0,a.yg)("a",{parentName:"p",href:"#examples"},"Auth0, Okta, etc."),", or your own custom methods."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/understanding-authprovider/create-authprovider"},'Refer to the "Create Auth Provider From Scratch" tutorial for more information ',"\u2192")),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)(h,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"To use ",(0,a.yg)("inlineCode",{parentName:"p"},"authProvider")," in ",(0,a.yg)("strong",{parentName:"p"},"refine"),", we have to pass the ",(0,a.yg)("inlineCode",{parentName:"p"},"authProvider")," to the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine />")," component."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport authProvider from "./auth-provider";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App = () => {\n  return (\n    <Refine\n      // highlight-next-line\n      authProvider={authProvider}\n      routerProvider={routerProvider}\n      dataProvider={dataProvider(API_URL)}\n    />\n  );\n};\n'))),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)(h,{id:"examples",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(o.Ay,{mdxType:"AuthProviderExamplesLinks"})),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)(h,{id:"methods",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Auth provider's methods are expected to return a Promise. So, you can use these async methods to ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/understanding-authprovider/create-authprovider"},"create auth provider"),"."),(0,a.yg)("p",null,"An ",(0,a.yg)("inlineCode",{parentName:"p"},"authProvider")," includes the following methods:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { AuthProvider } from "@pankod/refine-core";\n\nconst authProvider: AuthProvider = {\n  // required methods\n  login: () => Promise.resolve(),\n  checkAuth: () => Promise.resolve(),\n  logout: () => Promise.resolve(),\n  checkError: () => Promise.resolve(),\n  // optional methods\n  register: () => Promise.resolve(),\n  forgotPassword: () => Promise.resolve(),\n  updatePassword: () => Promise.resolve(),\n  getPermissions: () => Promise.resolve(),\n  getUserIdentity: () => Promise.resolve(),\n};\n')),(0,a.yg)("admonition",{type:"info-tip"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("strong",{parentName:"p"},"refine")," consumes these methods using ",(0,a.yg)("a",{parentName:"p",href:"#hooks-and-components"},"authorization hooks"),".\nAuthorization hooks are used to manage authentication and authorization operations like login, logout, catching ",(0,a.yg)("strong",{parentName:"p"},"HTTP")," errors, etc.")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/understanding-authprovider/create-authprovider"},"Refer to the Auth Provider tutorial for more information and usage examples. ","\u2192"))),(0,a.yg)("h2",{id:"required-methods"},"Required Methods"),(0,a.yg)("h3",{id:"login-"},"login ",(0,a.yg)(m,{required:!0,mdxType:"PropTag"})),(0,a.yg)(h,{id:"login-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"login")," method is used to authenticate users. It expects to return a Promise."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the Promise resolves, the user is authenticated and pages that require authentication will be accessible.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the Promise rejects, the user is not authenticated and stays on the login page."))),(0,a.yg)("p",null,"You can use ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useLogin/"},(0,a.yg)("inlineCode",{parentName:"a"},"useLogin"))," hook to call ",(0,a.yg)("inlineCode",{parentName:"p"},"login")," method.")),(0,a.yg)("h3",{id:"checkauth-"},"checkAuth ",(0,a.yg)(m,{required:!0,mdxType:"PropTag"})),(0,a.yg)(h,{id:"checkauth-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"checkAuth")," method is used to check if the user is authenticated. Internally, it is called when the user navigates to a page that requires authentication."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"checkAuth")," method expects to return a Promise."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the Promise resolves, the user is authenticated and pages that require authentication will be accessible.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the Promise rejects, the user is not authenticated and pages that require authentication will not be accessible and by default, the user will be redirected to the ",(0,a.yg)("inlineCode",{parentName:"p"},"/login")," page."))),(0,a.yg)("p",null,"You can use ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useAuthenticated/"},(0,a.yg)("inlineCode",{parentName:"a"},"useAuthenticated"))," hook to call ",(0,a.yg)("inlineCode",{parentName:"p"},"checkAuth")," method.")),(0,a.yg)("h3",{id:"logout-"},"logout ",(0,a.yg)(m,{required:!0,mdxType:"PropTag"})),(0,a.yg)(h,{id:"logout-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"logout")," method is used to log out users. It expects to return a Promise."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the Promise resolves, the user is logged out and pages that require authentication will not be accessible and by default, the user will be redirected to the ",(0,a.yg)("inlineCode",{parentName:"p"},"/login")," page.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the Promise rejects, the user is not logged out and stays on the page."))),(0,a.yg)("p",null,"You can use ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useLogout/"},(0,a.yg)("inlineCode",{parentName:"a"},"useLogout"))," hook to call ",(0,a.yg)("inlineCode",{parentName:"p"},"logout")," method.")),(0,a.yg)("h3",{id:"checkerror-"},"checkError ",(0,a.yg)(m,{required:!0,mdxType:"PropTag"})),(0,a.yg)(h,{id:"checkerror-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"checkError")," method is called when you get an error response from the API. You can create your own business logic to handle the error such as refreshing the token, logging out the user, etc."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"checkError")," method expects to return a Promise."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the Promise resolves, the user is not logged out and stays on the page.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the Promise rejects, the ",(0,a.yg)("inlineCode",{parentName:"p"},"logout")," method is called to log out the user and by default, the user is redirected to the ",(0,a.yg)("inlineCode",{parentName:"p"},"/login")," route."))),(0,a.yg)("p",null,"You can use ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useCheckError/"},(0,a.yg)("inlineCode",{parentName:"a"},"useCheckError"))," hook to call ",(0,a.yg)("inlineCode",{parentName:"p"},"checkError")," method.")),(0,a.yg)("h2",{id:"optional-methods"},"Optional Methods"),(0,a.yg)("h3",{id:"getpermissions"},"getPermissions"),(0,a.yg)(h,{id:"getpermissions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"getPermissions")," method is used to get the user's permissions. It expects to return a Promise."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the Promise resolves with data, the user's permissions will be available in the ",(0,a.yg)("inlineCode",{parentName:"p"},"usePermissions")," hook's ",(0,a.yg)("inlineCode",{parentName:"p"},"data")," property.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the Promise rejects, the user's permissions will not be available and ",(0,a.yg)("inlineCode",{parentName:"p"},"usePermissions")," hook throw an error."))),(0,a.yg)("p",null,"You can use ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/usePermissions/"},(0,a.yg)("inlineCode",{parentName:"a"},"usePermissions"))," hook to call ",(0,a.yg)("inlineCode",{parentName:"p"},"getPermissions")," method.")),(0,a.yg)("h3",{id:"getuseridentity"},"getUserIdentity"),(0,a.yg)(h,{id:"getuseridentity",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"getUserIdentity")," method is used to get the user's identity. It expects to return a Promise."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the Promise resolves with a data, the user's identity will be available in the ",(0,a.yg)("inlineCode",{parentName:"p"},"useGetIdentity")," hook's ",(0,a.yg)("inlineCode",{parentName:"p"},"data")," property.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the Promise rejects, the user's identity will not be available and ",(0,a.yg)("inlineCode",{parentName:"p"},"useGetIdentity")," hook throw an error."))),(0,a.yg)("p",null,"You can use ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useGetIdentity/"},(0,a.yg)("inlineCode",{parentName:"a"},"useGetIdentity"))," hook to call ",(0,a.yg)("inlineCode",{parentName:"p"},"getUserIdentity")," method.")),(0,a.yg)("h3",{id:"register"},"register"),(0,a.yg)(h,{id:"register",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"register")," method is used to register a new user. It is similar to the ",(0,a.yg)("inlineCode",{parentName:"p"},"login")," method. It expects to return a Promise."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the Promise resolves, by default, the user will be redirected to the ",(0,a.yg)("inlineCode",{parentName:"p"},"/")," page.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the Promise rejects, the ",(0,a.yg)("inlineCode",{parentName:"p"},"useRegister")," hook will throw an error."))),(0,a.yg)("p",null,"You can use ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useRegister/"},(0,a.yg)("inlineCode",{parentName:"a"},"useRegister"))," hook to call ",(0,a.yg)("inlineCode",{parentName:"p"},"register")," method.")),(0,a.yg)("h3",{id:"forgotpassword"},"forgotPassword"),(0,a.yg)(h,{id:"forgotpassword",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"forgotPassword")," method is used to send a password reset link to the user's email address. It expects to return a Promise."),(0,a.yg)("p",null,"You can use ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useForgotPassword/"},(0,a.yg)("inlineCode",{parentName:"a"},"useForgotPassword"))," hook to call ",(0,a.yg)("inlineCode",{parentName:"p"},"forgotPassword")," method.")),(0,a.yg)("h3",{id:"updatepassword"},"updatePassword"),(0,a.yg)(h,{id:"updatepassword",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"updatePassword")," method is used to update the user's password. It expects to return a Promise."),(0,a.yg)("p",null,"You can use ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useUpdatePassword/"},(0,a.yg)("inlineCode",{parentName:"a"},"useUpdatePassword"))," hook to call ",(0,a.yg)("inlineCode",{parentName:"p"},"updatePassword")," method.")),(0,a.yg)("h2",{id:"hooks-and-components"},"Hooks and Components"),(0,a.yg)(h,{id:"hooks-and-components",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"These hooks can be used with the ",(0,a.yg)("inlineCode",{parentName:"p"},"authProvider")," authentication and authorization operations."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useAuthenticated/"},"useAuthenticated")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useCheckError/"},"useCheckError")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useGetIdentity/"},"useGetIdentity")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useLogin/"},"useLogin")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useLogout/"},"useLogout")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/usePermissions/"},"usePermissions")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/auth/authenticated/"},(0,a.yg)("inlineCode",{parentName:"a"},"<Authenticated />"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useRegister/"},"useRegister")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useForgotPassword/"},"useForgotPassword")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useUpdatePassword/"},"useUpdatePassword")))),(0,a.yg)("h2",{id:"faq"},"FAQ"),(0,a.yg)("h3",{id:"how-can-i-create-authprovider"},"How can I create authProvider?"),(0,a.yg)(h,{id:"how-can-i-create-authprovider",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/understanding-authprovider/create-authprovider/"},'Refer to the "Create Auth Provider From Scratch" section in the tutorial for more information ',"\u2192"))),(0,a.yg)("h3",{id:"how-can-i-set-authorization-credentials"},"How can I set authorization credentials?"),(0,a.yg)(h,{id:"how-can-i-set-authorization-credentials",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/understanding-authprovider/create-authprovider/#setting-authorization-credentials"},'Refer to the "Setting Authorization Credentials" section in the tutorial for more information ',"\u2192"))),(0,a.yg)("h2",{id:"api-reference"},"API Reference"),(0,a.yg)("h3",{id:"properties"},"Properties"),(0,a.yg)(h,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Resolve condition"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"login ",(0,a.yg)("div",{className:" required"},"Required")),(0,a.yg)("td",{parentName:"tr",align:null},"Logs user in"),(0,a.yg)("td",{parentName:"tr",align:null},"Auth confirms login")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"logout ",(0,a.yg)("div",{className:" required"},"Required")),(0,a.yg)("td",{parentName:"tr",align:null},"Logs user out"),(0,a.yg)("td",{parentName:"tr",align:null},"Auth confirms logout")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"checkAuth ",(0,a.yg)("div",{className:" required"},"Required")),(0,a.yg)("td",{parentName:"tr",align:null},"Checks credentials on each route changes"),(0,a.yg)("td",{parentName:"tr",align:null},"Authentication still persist")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"checkError ",(0,a.yg)("div",{className:" required"},"Required")),(0,a.yg)("td",{parentName:"tr",align:null},"Checks if a dataProvider returns an error"),(0,a.yg)("td",{parentName:"tr",align:null},"Data provider doesn't return an error")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"getPermissions"),(0,a.yg)("td",{parentName:"tr",align:null},"Can be use to get user credentials"),(0,a.yg)("td",{parentName:"tr",align:null},"Authorization roles accepted")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"getUserIdentity"),(0,a.yg)("td",{parentName:"tr",align:null},"Can be use to get user identity"),(0,a.yg)("td",{parentName:"tr",align:null},"User identity available to return")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"register"),(0,a.yg)("td",{parentName:"tr",align:null},"Register user"),(0,a.yg)("td",{parentName:"tr",align:null},"Auth confirms register")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"forgotPassword"),(0,a.yg)("td",{parentName:"tr",align:null},"Can be use to get password reset"),(0,a.yg)("td",{parentName:"tr",align:null},"Auth confirms forgot password")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"updatePassword"),(0,a.yg)("td",{parentName:"tr",align:null},"Can be use to get update password"),(0,a.yg)("td",{parentName:"tr",align:null},"Auth confirms update password")))),(0,a.yg)("br",null)),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)(h,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(y,{path:"auth-antd",mdxType:"CodeSandboxExample"})))}v.isMDXComponent=!0}}]);