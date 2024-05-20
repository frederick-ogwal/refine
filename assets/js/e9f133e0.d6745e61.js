"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52455],{58860:(e,r,o)=>{o.d(r,{xA:()=>p,yg:()=>f});var t=o(37953);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function i(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=t.createContext({}),u=function(e){var r=t.useContext(d),o=r;return e&&(o="function"==typeof e?e(r):s(s({},r),e)),o},p=function(e){var r=u(e.components);return t.createElement(d.Provider,{value:r},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(o),g=n,f=l["".concat(d,".").concat(g)]||l[g]||c[g]||a;return o?t.createElement(f,s(s({ref:r},p),{},{components:o})):t.createElement(f,s({ref:r},p))}));function f(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=g;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[l]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=o[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}g.displayName="MDXCreateElement"},31469:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>p,contentTitle:()=>d,default:()=>y,frontMatter:()=>i,metadata:()=>u,toc:()=>l});o(37953);var t=o(58860);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})),e}function s(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const i={id:"useForgotPassword",title:"useForgotPassword",siderbar_label:"useForgotPassword",description:"useForgotPassword data hook from refine is a modified version of react-query's useMutation for registration."},d=void 0,u={unversionedId:"api-reference/core/hooks/auth/useForgotPassword",id:"version-3.xx.xx/api-reference/core/hooks/auth/useForgotPassword",title:"useForgotPassword",description:"useForgotPassword data hook from refine is a modified version of react-query's useMutation for registration.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useForgotPassword.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useForgotPassword",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useForgotPassword",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useForgotPassword.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716211387,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"useForgotPassword",title:"useForgotPassword",siderbar_label:"useForgotPassword",description:"useForgotPassword data hook from refine is a modified version of react-query's useMutation for registration."},sidebar:"someSidebar",previous:{title:"useRegister",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useRegister"},next:{title:"useUpdatePassword",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useUpdatePassword"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Redirection after forgotPassword",id:"redirection-after-forgotpassword",level:2}],c=(g="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)});var g;const f={toc:l},m="wrapper";function y(e){var{components:r}=e,o=s(e,["components"]);return(0,t.yg)(m,a(function(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),t.forEach((function(r){n(e,r,o[r])}))}return e}({},f,o),{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"useForgotPassword")," calls ",(0,t.yg)("inlineCode",{parentName:"p"},"forgotPassword")," method from ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,t.yg)("inlineCode",{parentName:"a"},"authProvider"))," under the hood. It forgot passwords the user if ",(0,t.yg)("inlineCode",{parentName:"p"},"forgotPassword")," method from ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider")," resolves and if it rejects shows an error notification."),(0,t.yg)("p",null,"It returns the result of ",(0,t.yg)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,t.yg)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation"),"."),(0,t.yg)("p",null,"Data that is resolved from ",(0,t.yg)("inlineCode",{parentName:"p"},"forgotPassword")," will be returned as the ",(0,t.yg)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,t.yg)("h2",{id:"usage"},"Usage"),(0,t.yg)(c,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Normally refine provides a default forgot password page. If you prefer to use this default forgot password page, there is no need to handle forgot password flow manually.",(0,t.yg)("br",{parentName:"p"}),"\n","If we want to build a custom forgotPassword page instead of default one that comes with refine, ",(0,t.yg)("inlineCode",{parentName:"p"},"useForgotPassword")," can be used like this:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customForgotPasswordPage"',title:'"pages/customForgotPasswordPage"'},'import { useForgotPassword } from "@pankod/refine-core";\n\ntype forgotPasswordVariables = {\n    email: string;\n};\n\nexport const forgotPasswordPage = () => {\n    const { mutate: forgotPassword } =\n        useForgotPassword<forgotPasswordVariables>();\n\n    const onSubmit = (values: forgotPasswordVariables) => {\n        forgotPassword(values);\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <label>Email</label>\n            <input name="email" value="test@refine.com" />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n')),(0,t.yg)("admonition",{type:"tip"},(0,t.yg)("p",{parentName:"admonition"},(0,t.yg)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,t.yg)("inlineCode",{parentName:"p"},"useForgotPassword")," can accept any kind of object for values since ",(0,t.yg)("inlineCode",{parentName:"p"},"forgotPassword")," method from ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.",(0,t.yg)("br",{parentName:"p"}),"\n","A type parameter for the values can be provided to ",(0,t.yg)("inlineCode",{parentName:"p"},"useForgotPassword"),"."),(0,t.yg)("pre",{parentName:"admonition"},(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: forgotPassword } = useForgotPassword<{ email: string }>();\n")))),(0,t.yg)("h2",{id:"redirection-after-forgotpassword"},"Redirection after forgotPassword"),(0,t.yg)(c,{id:"redirection-after-forgotpassword",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"We have 2 options for redirecting the app after forgotPassword successfully ."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"A custom url can be resolved from the promise returned from the ",(0,t.yg)("inlineCode",{parentName:"li"},"forgotPassword")," method of the ",(0,t.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},"authProvider"),".")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n    ...\n    forgotPassword: () => {\n        ...\n        return Promise.resolve("/custom-url");\n    }\n}\n')),(0,t.yg)("p",null,"A custom url can be given to mutate function from the ",(0,t.yg)("inlineCode",{parentName:"p"},"useForgotPassword")," hook if you want to redirect yourself to a certain url."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useForgotPassword } from "@pankod/refine-core";\n\nconst { mutate: forgotPassword } = useForgotPassword();\n\nforgotPassword({ redirectPath: "/custom-url" });\n')),(0,t.yg)("p",null,"Then, you can handle this url in your ",(0,t.yg)("inlineCode",{parentName:"p"},"forgotPassword")," method of the ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},"\nconst authProvider: AuthProvider = {\n    ...\n    forgotPassword: ({ redirectPath }) => {\n        ...\n        return Promise.resolve(redirectPath);\n    }\n}\n\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"If the promise returned from the ",(0,t.yg)("inlineCode",{parentName:"li"},"forgotPassword")," method of the ",(0,t.yg)("inlineCode",{parentName:"li"},"authProvider")," gets resolved with ",(0,t.yg)("inlineCode",{parentName:"li"},"false")," no redirection will occur.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},"const authProvider: AuthProvider = {\n    ...\n    forgotPassword: () => {\n        ...\n        return Promise.resolve(false);\n    }\n}\n")),(0,t.yg)("admonition",{type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"If the promise returned from ",(0,t.yg)("inlineCode",{parentName:"p"},"forgotPassword")," is resolved with nothing, app won't be redirected to any route by default.")),(0,t.yg)("admonition",{type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"This hook can only be used if ",(0,t.yg)("inlineCode",{parentName:"p"},"authProvider")," is provided."))))}y.isMDXComponent=!0}}]);