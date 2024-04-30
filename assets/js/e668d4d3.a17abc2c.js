"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98683],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>h});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),c=o,h=u["".concat(l,".").concat(c)]||u[c]||g[c]||a;return t?r.createElement(h,i(i({ref:n},d),{},{components:t})):r.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},31293:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});t(96540);var r=t(15680);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"<AuthPage />",description:"<AuthPage> component from Refine is an authentication page that can be used to login, register, forgot password, and update password.",source:"packages/core/src/components/pages/auth/index.tsx"},l=void 0,p={unversionedId:"authentication/components/auth-page/index",id:"authentication/components/auth-page/index",title:"<AuthPage />",description:"<AuthPage> component from Refine is an authentication page that can be used to login, register, forgot password, and update password.",source:"@site/docs/authentication/components/auth-page/index.md",sourceDirName:"authentication/components/auth-page",slug:"/authentication/components/auth-page/",permalink:"/docs/authentication/components/auth-page/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/authentication/components/auth-page/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1714506456,formattedLastUpdatedAt:"Apr 30, 2024",frontMatter:{title:"<AuthPage />",description:"<AuthPage> component from Refine is an authentication page that can be used to login, register, forgot password, and update password.",source:"packages/core/src/components/pages/auth/index.tsx"},sidebar:"mainSidebar",previous:{title:"<Authenticated />",permalink:"/docs/authentication/components/authenticated/"},next:{title:"useIsAuthenticated",permalink:"/docs/authentication/hooks/use-is-authenticated/"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Types",id:"types",level:2},{value:"Login",id:"login",level:3},{value:"Register",id:"register",level:3},{value:"ForgotPassword",id:"forgotpassword",level:3},{value:"UpdatePassword",id:"updatepassword",level:3},{value:"Props",id:"props",level:2},{value:"hideForm",id:"hideform",level:3},{value:"providers",id:"providers",level:3},{value:"rememberMe",id:"rememberme",level:3},{value:"loginLink",id:"loginlink",level:3},{value:"registerLink",id:"registerlink",level:3},{value:"forgotPasswordLink",id:"forgotpasswordlink",level:3},{value:"wrapperProps",id:"wrapperprops",level:3},{value:"contentProps",id:"contentprops",level:3},{value:"formProps",id:"formprops",level:3},{value:"renderContent",id:"rendercontent",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Interface",id:"interface",level:3}],g=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},c=g("DocThumbsUpDownFeedbackWidget"),h=g("PropsTable"),m={toc:u},y="wrapper";function f(e){var{components:n}=e,t=i(e,["components"]);return(0,r.yg)(y,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},m,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage>")," component from Refine contains authentication pages that can be used to login, register, forgot password, and update password."),(0,r.yg)("p",null,"Before using ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage>")," component you need to add ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},"authProvider")," that will be used to handle authentication."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n  background-color: #f5f5f5;\n}\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { useLogout: useLogoutShared } = RefineCore;\n\nwindow.__refineAuthStatus = false;\n\nconst authProvider = {\n  login: async () => {\n    window.__refineAuthStatus = true;\n    return {\n      success: true,\n      redirectTo: "/",\n    };\n  },\n  register: async () => {\n    return {\n      success: true,\n    };\n  },\n  forgotPassword: async () => {\n    return {\n      success: true,\n    };\n  },\n  updatePassword: async () => {\n    return {\n      success: true,\n    };\n  },\n  logout: async () => {\n    window.__refineAuthStatus = false;\n    return {\n      success: true,\n      redirectTo: "/login",\n    };\n  },\n  check: async () => ({\n    authenticated: window.__refineAuthStatus,\n  }),\n  onError: async (error) => {\n    console.error(error);\n    return { error };\n  },\n  getPermissions: async () => ["admin"],\n  getIdentity: async () => null,\n};\n\nconst DashboardPage = () => {\n  const { mutate: logout } = useLogoutShared();\n\n  return (\n    <div>\n      <h1>Dashboard Page</h1>\n      <button\n        onClick={() => {\n          logout();\n        }}\n      >\n        Logout\n      </button>\n    </div>\n  );\n};\n\nconst Wrapper = (children) => {\n  return (\n    <div\n      style={{\n        display: "flex",\n        justifyContent: "center",\n      }}\n    >\n      <div\n        style={{\n          width: "400px",\n        }}\n      >\n        {children}\n      </div>\n    </div>\n  );\n};\n')),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(c,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage>")," component can be used like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll  previewHeight=333px url=http://localhost:3000/login",live:!0,disableScroll:!0,"":!0,previewHeight:"333px",url:"http://localhost:3000/login"},'setInitialRoutes(["/login"]);\n\n// visible-block-start\nimport { Refine, AuthPage, Authenticated } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider, { CatchAllNavigate } from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { authProvider } from "./authProvider";\n\nimport { DashboardPage } from "pages/dashboard";\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        routerProvider={routerProvider}\n        authProvider={authProvider}\n      >\n        <Routes>\n          <Route\n            element={\n              <Authenticated fallback={<CatchAllNavigate to="/login" />}>\n                <Outlet />\n              </Authenticated>\n            }\n          >\n            <Route index element={<DashboardPage />} />\n          </Route>\n          <Route element={<Authenticated fallback={<Outlet />} />}>\n            {/* highlight-next-line */}\n            <Route path="/login" element={<AuthPage />} />\n          </Route>\n        </Routes>\n      </Refine>\n    </BrowserRouter>\n  );\n};\n// visible-block-end\nrender(<App />);\n'))),(0,r.yg)("h2",{id:"types"},"Types"),(0,r.yg)(c,{id:"types",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage>")," component has the following types:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#login"},(0,r.yg)("inlineCode",{parentName:"a"},"login"))," - a type of login page and default type."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#register"},(0,r.yg)("inlineCode",{parentName:"a"},"register"))," - a type of registration page."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#forgotpassword"},(0,r.yg)("inlineCode",{parentName:"a"},"forgotPassword"))," - a type of forgot password page."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#updatepassword"},(0,r.yg)("inlineCode",{parentName:"a"},"updatePassword"))," - a type of update password page."))),(0,r.yg)("h3",{id:"login"},"Login"),(0,r.yg)(c,{id:"login",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"You can use the following props for the ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage>")," component when the type is ",(0,r.yg)("inlineCode",{parentName:"p"},'"login"'),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll hideCode url=http://localhost:3000/login previewHeight=390px",live:!0,disableScroll:!0,hideCode:!0,url:"http://localhost:3000/login",previewHeight:"390px"},'setInitialRoutes(["/login"]);\n\n// visible-block-start\nimport { Refine, AuthPage, Authenticated } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider, { CatchAllNavigate } from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { authProvider } from "./authProvider";\n\nimport { DashboardPage } from "pages/dashboard";\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        routerProvider={routerProvider}\n        authProvider={authProvider}\n      >\n        <Routes>\n          <Route\n            element={\n              <Authenticated fallback={<CatchAllNavigate to="/login" />}>\n                <Outlet />\n              </Authenticated>\n            }\n          >\n            <Route index element={<DashboardPage />} />\n          </Route>\n          <Route element={<Authenticated fallback={<Outlet />} />}>\n            {/* highlight-next-line */}\n            <Route path="/login" element={<AuthPage />} />\n          </Route>\n        </Routes>\n      </Refine>\n    </BrowserRouter>\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.yg)("p",null,"After form submission, the ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider#login-"},(0,r.yg)("inlineCode",{parentName:"a"},"login"))," method of the ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"authProvider"))," will be called with the form values."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  // --\n  login: async ({ email, password, remember, providerName }) => {\n    // You can handle the login process according to your needs.\n\n    // If the process is successful.\n    return {\n      success: true,\n    };\n\n    return {\n      success: false,\n      error: {\n        name: "Login Error",\n        message: "Invalid email or password",\n      },\n    };\n  },\n  // --\n};\n'))),(0,r.yg)("h3",{id:"register"},"Register"),(0,r.yg)(c,{id:"register",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"The register page will be used to register new users. You can use the following props for the ",(0,r.yg)("inlineCode",{parentName:"p"},"<AuthPage>")," component when the type is ",(0,r.yg)("inlineCode",{parentName:"p"},'"register"'),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll hideCode url=http://localhost:3000/login previewHeight=390px",live:!0,disableScroll:!0,hideCode:!0,url:"http://localhost:3000/login",previewHeight:"390px"},'setInitialRoutes(["/register"]);\n\n// visible-block-start\nimport { Refine, AuthPage, Authenticated } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider, { CatchAllNavigate } from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { authProvider } from "./authProvider";\n\nimport { DashboardPage } from "pages/dashboard";\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        routerProvider={routerProvider}\n        authProvider={authProvider}\n      >\n        <Routes>\n          <Route\n            element={\n              <Authenticated fallback={<CatchAllNavigate to="/login" />}>\n                <Outlet />\n              </Authenticated>\n            }\n          >\n            <Route index element={<DashboardPage />} />\n          </Route>\n          <Route element={<Authenticated fallback={<Outlet />} />}>\n            <Route path="/login" element={<AuthPage />} />\n            {/* highlight-next-line */}\n            <Route path="/register" element={<AuthPage type="register" />} />\n          </Route>\n        </Routes>\n      </Refine>\n    </BrowserRouter>\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.yg)("p",null,"After form submission, the ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider#register"},(0,r.yg)("inlineCode",{parentName:"a"},"register"))," method of the ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"authProvider"))," will be called with the form values."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  // --\n  register: async ({ email, password, providerName }) => {\n    // You can handle the register process according to your needs.\n\n    // If the process is successful.\n    return {\n      success: true,\n    };\n\n    return {\n      success: false,\n      error: {\n        name: "Register Error",\n        message: "Invalid email or password",\n      },\n    };\n  },\n  // --\n};\n'))),(0,r.yg)("h3",{id:"forgotpassword"},"ForgotPassword"),(0,r.yg)(c,{id:"forgotpassword",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"forgotPassword")," type is a page that allows users to reset their passwords. You can use this page to reset your password."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/forgot-password",live:!0,url:"http://localhost:3000/forgot-password"},'setInitialRoutes(["/forgot-password"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, AuthPage, Authenticated } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider, { CatchAllNavigate } from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { authProvider } from "./authProvider";\n\nimport { DashboardPage } from "pages/dashboard";\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        routerProvider={routerProvider}\n        authProvider={authProvider}\n      >\n        <Routes>\n          <Route\n            element={\n              <Authenticated fallback={<CatchAllNavigate to="/login" />}>\n                <Outlet />\n              </Authenticated>\n            }\n          >\n            <Route index element={<DashboardPage />} />\n          </Route>\n          <Route element={<Authenticated fallback={<Outlet />} />}>\n            <Route path="/login" element={<AuthPage />} />\n            <Route path="/register" element={<AuthPage type="register" />} />\n            {/* highlight-next-line */}\n            <Route\n              path="/forgot-password"\n              element={<AuthPage type="forgotPassword" />}\n            />\n          </Route>\n        </Routes>\n      </Refine>\n    </BrowserRouter>\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.yg)("p",null,"After form submission, the ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider#forgotpassword"},(0,r.yg)("inlineCode",{parentName:"a"},"forgotPassword"))," method of the ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"authProvider"))," will be called with the form values."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  // --\n  forgotPassword: async ({ email }) => {\n    // You can handle the reset password process according to your needs.\n\n    // If process is successful.\n    return {\n      success: true,\n    };\n\n    return {\n      success: false,\n      error: {\n        name: "Forgot Password Error",\n        message: "Invalid email or password",\n      },\n    };\n  },\n  // --\n};\n'))),(0,r.yg)("h3",{id:"updatepassword"},"UpdatePassword"),(0,r.yg)(c,{id:"updatepassword",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"updatePassword")," type is the page used to update the password of the user."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/update-password",live:!0,url:"http://localhost:3000/update-password"},'setInitialRoutes(["/update-password"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, AuthPage, Authenticated } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider, { CatchAllNavigate } from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { authProvider } from "./authProvider";\n\nimport { DashboardPage } from "pages/dashboard";\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        routerProvider={routerProvider}\n        authProvider={authProvider}\n      >\n        <Routes>\n          <Route\n            element={\n              <Authenticated fallback={<CatchAllNavigate to="/login" />}>\n                <Outlet />\n              </Authenticated>\n            }\n          >\n            <Route index element={<DashboardPage />} />\n          </Route>\n          <Route element={<Authenticated fallback={<Outlet />} />}>\n            <Route path="/login" element={<AuthPage />} />\n            <Route path="/register" element={<AuthPage type="register" />} />\n            <Route\n              path="/forgot-password"\n              element={<AuthPage type="forgotPassword" />}\n            />\n            {/* highlight-next-line */}\n            <Route\n              path="/update-password"\n              element={<AuthPage type="updatePassword" />}\n            />\n          </Route>\n        </Routes>\n      </Refine>\n    </BrowserRouter>\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.yg)("p",null,"After form submission, the ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider#updatepassword"},(0,r.yg)("inlineCode",{parentName:"a"},"updatePassword"))," method of the ",(0,r.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"authProvider"))," will be called with the form values."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  // --\n  updatePassword: async ({ password, confirmPassword }) => {\n    // You can handle the update password process according to your needs.\n\n    // If the process is successful.\n    return {\n      success: true,\n    };\n\n    return {\n      success: false,\n      error: {\n        name: "Update Password Error",\n        message: "Invalid email or password",\n      },\n    };\n  },\n  // --\n};\n'))),(0,r.yg)("h2",{id:"props"},"Props"),(0,r.yg)("h3",{id:"hideform"},"hideForm"),(0,r.yg)(c,{id:"hideform",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"When you set ",(0,r.yg)("inlineCode",{parentName:"p"},"hideForm")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", the form will be hidden. You can use this property to show only providers."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login" // or "register"\n      hideForm={true}\n      providers={[\n        {\n          name: "google",\n          icon: GoogleIcon,\n          label: "Sign in with Google",\n        },\n        {\n          name: "github",\n          icon: GithubIcon,\n          label: "Sign in with GitHub",\n        },\n      ]}\n    />\n  );\n};\n'))),(0,r.yg)("h3",{id:"providers"},"providers"),(0,r.yg)(c,{id:"providers",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"providers")," property defines the list of providers used to handle login authentication. ",(0,r.yg)("inlineCode",{parentName:"p"},"providers")," accepts an array of ",(0,r.yg)("inlineCode",{parentName:"p"},"Provider")," type. This property is only available for ",(0,r.yg)("inlineCode",{parentName:"p"},"login")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"register")," types."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const LoginPage = () => {\n  return (\n    <AuthPage\n      providers={[\n        {\n          name: "github",\n          icon: <svg>{/* ... */}</svg>,\n          label: "Sign in with GitHub",\n        },\n        {\n          name: "google",\n          icon: <svg>{/* ... */}</svg>,\n          label: "Sign in with Google",\n        },\n      ]}\n    />\n  );\n};\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.yg)("a",{parentName:"p",href:"#interface"},"Interface section down below")))),(0,r.yg)("h3",{id:"rememberme"},"rememberMe"),(0,r.yg)(c,{id:"rememberme",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"rememberMe")," property defines to render your own remember me component or you can pass ",(0,r.yg)("inlineCode",{parentName:"p"},"false")," to don't render it. This property is only available for ",(0,r.yg)("inlineCode",{parentName:"p"},"login")," type."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const LoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      // highlight-start\n      rememberMe={\n        <div\n          style={{\n            border: "1px dashed cornflowerblue",\n            padding: 3,\n          }}\n        >\n          <input name="CustomRememberMe" type="checkbox" /> Custom remember me\n        </div>\n      }\n      // highlight-end\n    />\n  );\n};\n'))),(0,r.yg)("h3",{id:"loginlink"},"loginLink"),(0,r.yg)(c,{id:"loginlink",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"loginLink")," property defines the link to the login page and also you can give a node to render. The default value is ",(0,r.yg)("inlineCode",{parentName:"p"},'"/login"'),". This property is only available for ",(0,r.yg)("inlineCode",{parentName:"p"},"register")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"forgotPassword")," types."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const MyRegisterPage = () => {\n  return (\n    <AuthPage\n      type="register"\n      // highlight-start\n      loginLink={\n        <div\n          style={{\n            border: "1px dashed cornflowerblue",\n            padding: 3,\n          }}\n        >\n          <Link to="/login">Login</Link>\n        </div>\n      }\n      // highlight-end\n    />\n  );\n};\n'))),(0,r.yg)("h3",{id:"registerlink"},"registerLink"),(0,r.yg)(c,{id:"registerlink",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"registerLink")," property defines the link to the registration page and also you can give a node to render. The default value is ",(0,r.yg)("inlineCode",{parentName:"p"},'"/register"'),". This property is only available for ",(0,r.yg)("inlineCode",{parentName:"p"},"login")," type."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      // highlight-start\n      registerLink={\n        <div\n          style={{\n            border: "1px dashed cornflowerblue",\n            marginTop: 5,\n            padding: 5,\n          }}\n        >\n          <Link to="/register">Register</Link>\n        </div>\n      }\n      // highlight-end\n    />\n  );\n};\n'))),(0,r.yg)("h3",{id:"forgotpasswordlink"},"forgotPasswordLink"),(0,r.yg)(c,{id:"forgotpasswordlink",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"forgotPasswordLink")," property defines the link to the forgot password page and also you can give a node to render. The default value is ",(0,r.yg)("inlineCode",{parentName:"p"},'"/forgot-password"'),". This property is only available for ",(0,r.yg)("inlineCode",{parentName:"p"},"login")," type."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      // highlight-start\n      forgotPasswordLink={\n        <div\n          style={{\n            border: "1px dashed cornflowerblue",\n            marginTop: 5,\n            padding: 5,\n          }}\n        >\n          <Link to="/forgot-password">Forgot Password</Link>\n        </div>\n      }\n      // highlight-end\n    />\n  );\n};\n'))),(0,r.yg)("h3",{id:"wrapperprops"},"wrapperProps"),(0,r.yg)(c,{id:"wrapperprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"wrapperProps")," uses for passing props to the wrapper component. In the example below you can see that the background color is changed with ",(0,r.yg)("inlineCode",{parentName:"p"},"wrapperProps")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      // highlight-start\n      wrapperProps={{\n        style: {\n          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",\n          position: "absolute",\n          top: "0px",\n          right: "0px",\n          bottom: "0px",\n          left: "0px",\n        },\n      }}\n      // highlight-end\n    />\n  );\n};\n'))),(0,r.yg)("h3",{id:"contentprops"},"contentProps"),(0,r.yg)(c,{id:"contentprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"contentProps")," uses for passing props to the content component which is the card component. In the example below you can see that the title, header, and content styles are changed with ",(0,r.yg)("inlineCode",{parentName:"p"},"contentProps"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      // highlight-start\n      contentProps={{\n        style: {\n          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",\n        },\n      }}\n      // highlight-end\n    />\n  );\n};\n'))),(0,r.yg)("h3",{id:"formprops"},"formProps"),(0,r.yg)(c,{id:"formprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"formProps")," uses for passing props to the form component."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      // highlight-start\n      formProps={{\n        onSubmit: (e: any) => {\n          e.preventDefault();\n\n          const email = e.target.email.value;\n          const password = e.target.password.value;\n\n          alert(\n            JSON.stringify({\n              email,\n              password,\n            }),\n          );\n        },\n      }}\n      // highlight-end\n    />\n  );\n};\n'))),(0,r.yg)("h3",{id:"rendercontent"},"renderContent"),(0,r.yg)(c,{id:"rendercontent",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"renderContent")," is used to render the form content. You can use this property to render your own content. ",(0,r.yg)("inlineCode",{parentName:"p"},"renderContent")," gives you default content you can use to add some extra elements to the content."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      // highlight-start\n      renderContent={(content: React.ReactNode) => {\n        return (\n          <div\n            style={{\n              display: "flex",\n              flexDirection: "column",\n              justifyContent: "center",\n              alignItems: "center",\n            }}\n          >\n            <h1>Extra Header</h1>\n            {content}\n            <h2>Extra Footer</h2>\n          </div>\n        );\n      }}\n      // highlight-end\n    />\n  );\n};\n'))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties"},"Properties"),(0,r.yg)(c,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(h,{module:"@refinedev/core/AuthPage",mdxType:"PropsTable"})),(0,r.yg)("h3",{id:"interface"},"Interface"),(0,r.yg)(c,{id:"interface",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"interface OAuthProvider {\n  name: string;\n  icon?: React.ReactNode;\n  label?: string;\n}\n"))))}f.isMDXComponent=!0}}]);