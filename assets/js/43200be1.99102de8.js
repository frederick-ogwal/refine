"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56434],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),g=i,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50363:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={title:"How to create a CRUD app with SvelteKit",description:"We'll build a CRUD Blog app using SvelteKit and Svelte MUI",slug:"sveltekit-crud-app-with-svelte-mui",authors:"ekekenta_clinton",tags:["svelte","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-02-sveltekit-crud-app/social.png",hide_table_of_contents:!1},c=void 0,p={permalink:"/blog/sveltekit-crud-app-with-svelte-mui",source:"@site/blog/2022-09-02-sveltekit-crud-app.md",title:"How to create a CRUD app with SvelteKit",description:"We'll build a CRUD Blog app using SvelteKit and Svelte MUI",date:"2022-09-02T00:00:00.000Z",formattedDate:"September 2, 2022",tags:[{label:"svelte",permalink:"/blog/tags/svelte"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:10,hasTruncateMarker:!0,authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],frontMatter:{title:"How to create a CRUD app with SvelteKit",description:"We'll build a CRUD Blog app using SvelteKit and Svelte MUI",slug:"sveltekit-crud-app-with-svelte-mui",authors:"ekekenta_clinton",tags:["svelte","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-02-sveltekit-crud-app/social.png",hide_table_of_contents:!1},prevItem:{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component"},nextItem:{title:"Framer Motion examples for React animations",permalink:"/blog/framer-motion-react-animations"},relatedPosts:[{title:"React Admin Panel Tutorial with Chakra UI and Strapi",description:"We'll build a React admin tutorial app with refine",permalink:"/blog/react-admin-tutorial",formattedDate:"March 3, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:27.17,date:"2023-03-03T00:00:00.000Z"},{title:"Build a Progressive Web App (PWA) with Next.js",description:"We will walk you through the entire process of building a PWA using Next.JS and refine framework, from start to finish!",permalink:"/blog/next-js-pwa",formattedDate:"September 11, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:18.255,date:"2022-09-11T00:00:00.000Z"},{title:"Simple Web Application Example with Refine",description:"Do you want to develop a web application quickly? You are at the right place!",permalink:"/blog/simple-web-application-with-refine",formattedDate:"October 4, 2021",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:9.445,date:"2021-10-04T00:00:00.000Z"}],authorPosts:[{title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",permalink:"/blog/nextauth-google-github-authentication-nextjs",formattedDate:"August 18, 2022",authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],readingTime:12.535,date:"2022-08-18T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2}],m={toc:u};function g(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Because of Svelte\u2019s popularity over the years, many companies are beginning to migrate their applications or build new ones using the framework. However, developers have had difficulty implementing features such as routing in their web applications while using Svelte."),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"Sveltekit")," includes the features that ",(0,n.kt)("strong",{parentName:"p"},"Svelte")," lacks, saving developers time and allowing us to create complex hybrid web applications with relative ease."))}g.isMDXComponent=!0}}]);