"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55697],{58860:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var r=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=s(t),g=o,m=l["".concat(u,".").concat(g)]||l[g]||c[g]||a;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p[l]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},72213:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>l});t(37953);var r=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p={title:"Migrating Router Provider from 3.x.x to 4.x.x",sidebar_label:"Migrating Router Provider"},u=void 0,s={unversionedId:"migration-guide/router-provider",id:"migration-guide/router-provider",title:"Migrating Router Provider from 3.x.x to 4.x.x",description:"Motivation behind the changes",source:"@site/docs/migration-guide/router-provider.md",sourceDirName:"migration-guide",slug:"/migration-guide/router-provider",permalink:"/docs/migration-guide/router-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/migration-guide/router-provider.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716211387,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{title:"Migrating Router Provider from 3.x.x to 4.x.x",sidebar_label:"Migrating Router Provider"},sidebar:"mainSidebar",previous:{title:"Migrating Auth Provider",permalink:"/docs/migration-guide/auth-provider"},next:{title:"Testing",permalink:"/docs/further-readings/testing"}},d={},l=[{value:"Motivation behind the changes",id:"motivation-behind-the-changes",level:2},{value:"Important Notes",id:"important-notes",level:2},{value:"Changes in the <code>&lt;Refine&gt;</code> Component",id:"changes-in-the-refine-component",level:3},{value:"Changes in Custom <code>&lt;Sider&gt;</code> Components",id:"changes-in-custom-sider-components",level:3},{value:"Updating <code>useRouterContext</code> Usage",id:"updating-useroutercontext-usage",level:4},{value:"Behavioral Changes in Routing",id:"behavioral-changes-in-routing",level:3},{value:"Using the New Router Providers",id:"using-the-new-router-providers",level:2},{value:"React Router v6",id:"react-router-v6",level:3},{value:"Remix and Next.js",id:"remix-and-nextjs",level:3}],c=(g="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var g;const m={toc:l},y="wrapper";function h(e){var{components:n}=e,t=i(e,["components"]);return(0,r.yg)(y,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},m,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"motivation-behind-the-changes"},"Motivation behind the changes"),(0,r.yg)(c,{id:"motivation-behind-the-changes",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Our motivation behind the changes to ",(0,r.yg)("inlineCode",{parentName:"p"},"routerProvider")," and route handling was to increase flexibility and ease of use."),(0,r.yg)("p",null,"By simplifying the ",(0,r.yg)("inlineCode",{parentName:"p"},"routerProvider")," to just an interaction and connection point between ",(0,r.yg)("strong",{parentName:"p"},"Refine")," and the router, we eliminated the need for a specific way of defining routes and a ",(0,r.yg)("inlineCode",{parentName:"p"},"routerProvider")," altogether. This means that ",(0,r.yg)("strong",{parentName:"p"},"Refine")," will meet enterprise-grade requirements. While router bindings are optional, we recommend passing them to ",(0,r.yg)("strong",{parentName:"p"},"Refine")," for optimal usage."),(0,r.yg)("p",null,"By making these changes, we made it so that people can integrate Refine into their existing projects without needing to modify their current routes or applications"),(0,r.yg)("p",null,"Ultimately, our goal is to make it simple for users to handle their unique situations without enforcing a particular methodology. With the updated router provider, you can continue using routers like before while benefiting from the features that ",(0,r.yg)("strong",{parentName:"p"},"Refine")," offers.")),(0,r.yg)("h2",{id:"important-notes"},"Important Notes"),(0,r.yg)(c,{id:"important-notes",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"With the new router provider, the authentication checks are not handled by the routes. If your application utilizes ",(0,r.yg)("inlineCode",{parentName:"p"},"authProvider"),", you will be responsible for performing those checks yourself. You can easily do them by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"useIsAuthenticated")," hook or the ",(0,r.yg)("inlineCode",{parentName:"p"},"Authenticated")," component. Example implementations and more information on each router are present ",(0,r.yg)("a",{parentName:"p",href:"#using-the-new-router-providers"},"further down")," in the documentation and in the example apps."),(0,r.yg)("p",null,"Similar to authentication flow, access control checks are also not handled by the routes internally. You will need to handle them yourself using the ",(0,r.yg)("inlineCode",{parentName:"p"},"useCan")," hook or the ",(0,r.yg)("inlineCode",{parentName:"p"},"CanAccess")," component."),(0,r.yg)("p",null,"The creation and control of routes is entirely up to the user. You must manually create routes, and if desired, pass the routes to actions of your resources. Although we provide methods for generating routes from resources further down the documentation, they are optional and not recommended as they limit flexibility.")),(0,r.yg)("h3",{id:"changes-in-the-refine-component"},"Changes in the ",(0,r.yg)("inlineCode",{parentName:"h3"},"<Refine>")," Component"),(0,r.yg)(c,{id:"changes-in-the-refine-component",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Since route handling is now detached from the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine>")," component, props it accepts will change. Layout related props such as ",(0,r.yg)("inlineCode",{parentName:"p"},"Layout"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Sider"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Title"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Header"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Footer,")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"OffLayoutArea")," are deprecated and won't have any effect when using the new router providers. However, the UI components exported from the package are still well-supported and can be used inside your app while creating your routes and pages."),(0,r.yg)("p",null,"Similarly, the ",(0,r.yg)("inlineCode",{parentName:"p"},"DashboardPage"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"catchAll")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"LoginPage")," components are also deprecated and won't have any affect when using the new router providers. You need to create your own routes and pages to replace them."),(0,r.yg)("admonition",{title:"Legacy Behavior (Dashboard Page)",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Since the ",(0,r.yg)("inlineCode",{parentName:"p"},"DashboardPage")," prop is now deprecated, you need to create your own index route for your dashboard. You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"resources")," array to add this item to your ",(0,r.yg)("inlineCode",{parentName:"p"},"<Sider>")," menu. ",(0,r.yg)("inlineCode",{parentName:"p"},"useMenu")," will use the ",(0,r.yg)("inlineCode",{parentName:"p"},"resources")," array to generate the menu items. You can also use the ",(0,r.yg)("inlineCode",{parentName:"p"},"useMenu")," hook to create your own menu.")),(0,r.yg)("p",null,"You can now create your own error and login pages the appropriate way for your router to replace the ",(0,r.yg)("inlineCode",{parentName:"p"},"catchAll")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"LoginPage")," props that were used for the creation of their respective pages. You can find how its done ",(0,r.yg)("a",{parentName:"p",href:"#using-the-new-router-providers"},"further down")," in the documentation.")),(0,r.yg)("h3",{id:"changes-in-custom-sider-components"},"Changes in Custom ",(0,r.yg)("inlineCode",{parentName:"h3"},"<Sider>")," Components"),(0,r.yg)(c,{id:"changes-in-custom-sider-components",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you have swizzled the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Sider>")," component from your UI package and customized it, you might need to update them accordingly if you're using the new ",(0,r.yg)("inlineCode",{parentName:"p"},"routerProvider")," prop of ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine>"),".")),(0,r.yg)("h4",{id:"updating-useroutercontext-usage"},"Updating ",(0,r.yg)("inlineCode",{parentName:"h4"},"useRouterContext")," Usage"),(0,r.yg)(c,{id:"updating-useroutercontext-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"With the new ",(0,r.yg)("inlineCode",{parentName:"p"},"routerProvider")," prop, the v3 compatible router providers are now provided through the ",(0,r.yg)("inlineCode",{parentName:"p"},"legacyRouterProvider")," prop. If you're using the ",(0,r.yg)("inlineCode",{parentName:"p"},"legacyRouterProvider"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"useRouterContext")," will continue working as before. However, if you're using the new ",(0,r.yg)("inlineCode",{parentName:"p"},"routerProvider"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"useRouterContext")," hook will be deprecated and useless for you but can easily be replaced with the router hooks that are ",(0,r.yg)("inlineCode",{parentName:"p"},"useLink"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"useGo"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"useBack")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"useParsed.")),(0,r.yg)("p",null,"In the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Sider>")," components, we have used the ",(0,r.yg)("inlineCode",{parentName:"p"},"Link")," component from ",(0,r.yg)("inlineCode",{parentName:"p"},"useRouterContext"),". You can easily replace the usage of ",(0,r.yg)("inlineCode",{parentName:"p"},"Link")," with the ",(0,r.yg)("inlineCode",{parentName:"p"},"useLink")," hook or just switch to the ",(0,r.yg)("inlineCode",{parentName:"p"},"Link")," implementations from your router. (e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"react-router-dom"),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"Link")," component or the ",(0,r.yg)("inlineCode",{parentName:"p"},"next/link")," component)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-diff"},'- import { useRouterContext } from "@refinedev/core";\n+ import { useLink } from "@refinedev/core";\n\nconst CustomSider = () => {\n-   const { Link } = useRouterContext();\n+   const Link = useLink();\n\n    /* ... */\n}\n')),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If you have customized the use of ",(0,r.yg)("inlineCode",{parentName:"p"},"useMenu")," hook, you might need to check the usage of it to make sure it's working as expected. Even though the ",(0,r.yg)("inlineCode",{parentName:"p"},"useMenu")," hook has not been changed in its return values, the way it generates the menu item keys has changed."))),(0,r.yg)("h3",{id:"behavioral-changes-in-routing"},"Behavioral Changes in Routing"),(0,r.yg)(c,{id:"behavioral-changes-in-routing",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Since ",(0,r.yg)("strong",{parentName:"p"},"Refine")," doesn't create routes internally anymore, you are free to create your routes according to your framework without any limitations."),(0,r.yg)("p",null,"This means that tasks such as ",(0,r.yg)("inlineCode",{parentName:"p"},"authentication")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"access control")," are decoupled from ",(0,r.yg)("strong",{parentName:"p"},"Refine")," and should be handled in accordance with your framework. However, we do provide a set of helpers for you to use in your components to make these tasks easier to handle:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("a",{parentName:"li",href:"/docs/authentication/components/authenticated"},(0,r.yg)("inlineCode",{parentName:"a"},"Authenticated"))," component as a wrapper or the ",(0,r.yg)("inlineCode",{parentName:"li"},"useIsAuthenticated")," hook for authentication"),(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("a",{parentName:"li",href:"/docs/authorization/components/can-access"},(0,r.yg)("inlineCode",{parentName:"a"},"CanAccess"))," component as a wrapper or the ",(0,r.yg)("inlineCode",{parentName:"li"},"useCan")," hook for access control"))),(0,r.yg)("h2",{id:"using-the-new-router-providers"},"Using the New Router Providers"),(0,r.yg)(c,{id:"using-the-new-router-providers",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We have created documents for each router we provide bindings for, which you can check out below:")),(0,r.yg)("h3",{id:"react-router-v6"},"React Router v6"),(0,r.yg)(c,{id:"react-router-v6",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you are using ",(0,r.yg)("inlineCode",{parentName:"p"},"react-router-dom")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"@refinedev/react-router-v6"),", you will need to generate your routes using ",(0,r.yg)("inlineCode",{parentName:"p"},"Routes"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Route"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Outlet")," and similar components, and then wrap the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine>")," component with your chosen router (e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"<BrowserRouter>"),"). Afterwards, you may pass the routerProvider to the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine>")," component from ",(0,r.yg)("inlineCode",{parentName:"p"},"@refinedev/react-router-v6"),", and specify the paths for your resource actions in the ",(0,r.yg)("inlineCode",{parentName:"p"},"resources")," array. Our documentation provides detailed instructions on how to create routes, associate them with your resources, and includes examples for reference."),(0,r.yg)("admonition",{title:"Known Issues",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Refine previously utilized ",(0,r.yg)("inlineCode",{parentName:"p"},"react-router-dom@6.3.0"),", but it has now been updated to ",(0,r.yg)("inlineCode",{parentName:"p"},"react-router-dom@latest"),". Since partial segment support was removed in version ",(0,r.yg)("inlineCode",{parentName:"p"},"6.5.0"),", your custom routes may not function as intended. If you are still using partial segments in your routes, you will need to update your files like this:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-diff"},'  <Refine\n-    routerProvider={{\n-       ...routerProvider,\n-        routes: [\n-            {\n-                element: <ProfilePage />,\n-                path: "profile/@:username/:page",\n            },\n        ],\n    }}\n+    routerProvider={routerProvider}\n  >\n+  <Route path="profile/:username/:page" element={<ProfilePage />} />\n  </Refine>\n')),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-diff"},'- <Link to="profile/@:username/:page" />\n+ <Link to="profile/:username/:page" />\n')),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/remix-run/react-router/releases/tag/react-router%406.5.0"},"Refer to the ",(0,r.yg)("inlineCode",{parentName:"a"},"react-router-dom@6.5.0")," changelog for more information ->"))),(0,r.yg)("p",null,"Check out the documentation for ",(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.yg)("inlineCode",{parentName:"a"},"@refinedev/react-router-v6")),"\nand ",(0,r.yg)("a",{parentName:"p",href:"https://reactrouter.com"},(0,r.yg)("inlineCode",{parentName:"a"},"react-router-dom")))),(0,r.yg)("h3",{id:"remix-and-nextjs"},"Remix and Next.js"),(0,r.yg)(c,{id:"remix-and-nextjs",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you are using Remix or Next.js, you will first need to create your routes using the file system-based routing method as you would normally do. Afterwards, you can pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"routerProvider")," from ",(0,r.yg)("inlineCode",{parentName:"p"},"@refinedev/remix-router")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"@refinedev/nextjs-router")," to the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine>")," component, and specify the paths for your resource actions in the ",(0,r.yg)("inlineCode",{parentName:"p"},"resources")," array. Our documentation provides step-by-step instructions on how to create routes and associate them with your resources, complete with examples for your reference."),(0,r.yg)("p",null,"Check out their respective documentations:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.yg)("inlineCode",{parentName:"a"},"@refinedev/remix-router"))," and ",(0,r.yg)("a",{parentName:"p",href:"https://remix.run/docs/en/main"},(0,r.yg)("inlineCode",{parentName:"a"},"Remix"))," documentations for Remix"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.yg)("inlineCode",{parentName:"a"},"@refinedev/nextjs-router"))," and ",(0,r.yg)("a",{parentName:"p",href:"https://nextjs.org/docs/getting-started"},(0,r.yg)("inlineCode",{parentName:"a"},"Next.js"))," documentations for Next.js."))))))}h.isMDXComponent=!0}}]);