"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62515],{58860:(e,n,r)=>{r.d(n,{xA:()=>l,yg:()=>m});var t=r(37953);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?t.createElement(m,i(i({ref:n},l),{},{components:r})):t.createElement(m,i({ref:n},l))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},83491:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>p});r(37953);var t=r(58860);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={},s=void 0,u={unversionedId:"guides-concepts/authentication/auth-provider-interface",id:"guides-concepts/authentication/auth-provider-interface",title:"auth-provider-interface",description:"",source:"@site/docs/guides-concepts/authentication/auth-provider-interface.md",sourceDirName:"guides-concepts/authentication",slug:"/guides-concepts/authentication/auth-provider-interface",permalink:"/docs/guides-concepts/authentication/auth-provider-interface",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/authentication/auth-provider-interface.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716808447,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{}},l={},p=[],d={toc:p},f="wrapper";function m(e){var{components:n}=e,r=i(e,["components"]);return(0,t.yg)(f,o(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){a(e,n,r[n])}))}return e}({},d,r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},'import { Refine, AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  register: async (params) => {\n    if (params.email === authCredentials.email && params.password) {\n      localStorage.setItem("email", params.email);\n      return {\n        success: true,\n        redirectTo: "/",\n      };\n    }\n    return {\n      success: false,\n      error: {\n        message: "Register failed",\n        name: "Invalid email or password",\n      },\n    };\n  },\n  login: async ({ providerName, email }) => {\n    if (providerName === "google") {\n      window.location.href = "https://accounts.google.com/o/oauth2/v2/auth";\n      return {\n        success: true,\n      };\n    }\n\n    if (providerName === "github") {\n      window.location.href = "https://github.com/login/oauth/authorize";\n      return {\n        success: true,\n      };\n    }\n\n    if (email === authCredentials.email) {\n      localStorage.setItem("email", email);\n      return {\n        success: true,\n        redirectTo: "/",\n      };\n    }\n\n    return {\n      success: false,\n      error: {\n        message: "Login failed",\n        name: "Invalid email or password",\n      },\n    };\n  },\n  check: async () => {\n    return localStorage.getItem("email")\n      ? {\n          authenticated: true,\n        }\n      : {\n          authenticated: false,\n          error: {\n            message: "Check failed",\n            name: "Not authenticated",\n          },\n          logout: true,\n          redirectTo: "/login",\n        };\n  },\n  logout: async () => {\n    localStorage.removeItem("email");\n    return {\n      success: true,\n      redirectTo: "/login",\n    };\n  },\n  onError: async (error) => {\n    console.error(error);\n    return { error };\n  },\n  getIdentity: async () => ({\n    id: 1,\n    name: "Jane Doe",\n    avatar: "https://unsplash.com/photos/IWLOvomUmWU/download?force=true&w=640",\n  }),\n  updatePassword: async (params) => {\n    if (params.password === authCredentials.password) {\n      //we can update password here\n      return {\n        success: true,\n      };\n    }\n    return {\n      success: false,\n      error: {\n        message: "Update password failed",\n        name: "Invalid password",\n      },\n    };\n  },\n  forgotPassword: async (params) => {\n    if (params.email === authCredentials.email) {\n      //we can send email with reset password link here\n      return {\n        success: true,\n      };\n    }\n    return {\n      success: false,\n      error: {\n        message: "Forgot password failed",\n        name: "Invalid email",\n      },\n    };\n  },\n  getPermissions: async (params) => {\n    if (params) {\n      // do some logic like for example you can get roles for specific tenant\n      return ["admin"];\n    }\n\n    return ["admin"];\n  },\n};\n')))}m.isMDXComponent=!0}}]);