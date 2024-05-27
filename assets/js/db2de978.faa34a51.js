"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52716],{58860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var i=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?i.createElement(g,r(r({ref:t},p),{},{components:n})):i.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>m});n(37953);var i=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"Build Access Control Mechanism using Permify",description:"We'll examine how to build an Access Control mechanism in Refine using Permify, an authorization as a service that helps you create any kind of authorization system easily with its panel.",slug:"access-control",authors:"ege",tags:["dev-tools","access-control","Refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-09-permify-access-control/social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/access-control",source:"@site/blog/2024-01-09-permify-access-control.md",title:"Build Access Control Mechanism using Permify",description:"We'll examine how to build an Access Control mechanism in Refine using Permify, an authorization as a service that helps you create any kind of authorization system easily with its panel.",date:"2024-01-09T00:00:00.000Z",formattedDate:"January 9, 2024",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"},{label:"access-control",permalink:"/blog/tags/access-control"},{label:"Refine",permalink:"/blog/tags/refine"}],readingTime:10.66,hasTruncateMarker:!1,authors:[{name:"Ege Ayt\u0131n",title:"Software Developer",url:"https://github.com/EgeAytin",imageURL:"https://github.com/EgeAytin.png",key:"ege"}],frontMatter:{title:"Build Access Control Mechanism using Permify",description:"We'll examine how to build an Access Control mechanism in Refine using Permify, an authorization as a service that helps you create any kind of authorization system easily with its panel.",slug:"access-control",authors:"ege",tags:["dev-tools","access-control","Refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-09-permify-access-control/social.png",hide_table_of_contents:!1},prevItem:{title:"React Ecosystem in 2024 - Sustaining Popularity",permalink:"/blog/react-js-ecosystem-in-2024"},nextItem:{title:"Check Kubernetes Version - Advanced Use Cases with kubectl version",permalink:"/blog/kubectl-version"},relatedPosts:[{title:"How to Use Nodemon to Automatically Restart Node.js Applications",description:"This guide shows you how to install and use Nodemon to streamline your development process.",permalink:"/blog/nodemon",formattedDate:"April 30, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:5.845,date:"2024-04-30T00:00:00.000Z"},{title:"How to use Docker Exec command?",description:"We'll go over the Docker exec command syntax, usage as well as some examples.",permalink:"/blog/docker-exec",formattedDate:"August 18, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.995,date:"2023-08-18T00:00:00.000Z"},{title:"Build internal tools using Low-Code with Refine, React-based framework",description:"Why you should be using low-code app Refine to build internal tools? Learn how to build low-code apps using Refine, React and Ant Design.",permalink:"/blog/build-internal-tools-using-low-code-with-refine",formattedDate:"February 21, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:9.65,date:"2022-02-21T00:00:00.000Z"}],authorPosts:[]},p={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"Step 1: Setup the Permify in Refine application",id:"step-1-setup-the-permify-in-refine-application",level:2},{value:"Permify Setup",id:"permify-setup",level:3},{value:"Test your connection",id:"test-your-connection",level:4},{value:"Step 2: Create an access control mechanism in Refine Access Control Provider",id:"step-2-create-an-access-control-mechanism-in-refine-access-control-provider",level:2},{value:"Step 3: Create an access control model with Permify &amp; Initialize Permify Client",id:"step-3-create-an-access-control-model-with-permify--initialize-permify-client",level:2},{value:"Creating Access Control Model / Policy",id:"creating-access-control-model--policy",level:3},{value:"Defining Access Control Model to Permify API",id:"defining-access-control-model-to-permify-api",level:3},{value:"Create a simple Permify REST Client",id:"create-a-simple-permify-rest-client",level:3},{value:"Step 4: Create Authorization Data to check user accesses.",id:"step-4-create-authorization-data-to-check-user-accesses",level:2},{value:"Sync Authorization Data",id:"sync-authorization-data",level:3},{value:"Step 5: Creating more advanced permissions (Options)",id:"step-5-creating-more-advanced-permissions-options",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:m},d="wrapper";function g(e){var{components:t}=e,n=r(e,["components"]);return(0,i.yg)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"In this article, we will examine how to build an Access Control mechanism in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"Refine")," using ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Permify/permify"},"Permify"),", an authorization as a service that helps you create any kind of authorization system easily with its panel."),(0,i.yg)("p",null,"Refer to ",(0,i.yg)("a",{parentName:"p",href:"https://docs.permify.co/docs/permify-overview/intro/"},"Permify docs")," for more detailed information."),(0,i.yg)("p",null,"As an overview, we will:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Setup Permify to Refine application"),(0,i.yg)("li",{parentName:"ul"},"Create an access control mechanism in Refine Access Control Provider"),(0,i.yg)("li",{parentName:"ul"},"Create an access control model with Permify & Initialize Permify Client"),(0,i.yg)("li",{parentName:"ul"},"Create Authorization Data to check user accesses.")),(0,i.yg)("h2",{id:"step-1-setup-the-permify-in-refine-application"},"Step 1: Setup the Permify in Refine application"),(0,i.yg)("p",null,"First, let's create a demo react application using refine. You can follow the ",(0,i.yg)("a",{parentName:"p",href:"https://refine.dev/tutorial"},"tutorial to create a simple")," admin panel for a CMS-like application."),(0,i.yg)("p",null,"If your application is ready, let's set up Permify Instance."),(0,i.yg)("h3",{id:"permify-setup"},"Permify Setup"),(0,i.yg)("p",null,"We need to set up Permify Service in our environment."),(0,i.yg)("p",null,"You can run Permify Service with various options, but we'll run it via the docker container in that tutorial."),(0,i.yg)("p",null,"Production usage of Permify needs some configurations, such as defining running options, selecting datastore to store authorization data, and more."),(0,i.yg)("p",null,"However, for the sake of this tutorial, we'll not do any configurations and quickly start Permify on your local by running the docker command below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"docker run -p 3476:3476 -p 3478:3478 ghcr.io/permify/permify serve\n")),(0,i.yg)("p",null,"You should see similar output in your terminal after this operation:"),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-09-permify-access-control/run-terminal-output.png",alt:"Verifying Kubectl installation"})),(0,i.yg)("h4",{id:"test-your-connection"},"Test your connection"),(0,i.yg)("p",null,"To interact with the Permify API, you can use any API provider you wish. For this tutorial, we'll use ",(0,i.yg)("a",{parentName:"p",href:"https://www.postman.com/permify-dev/workspace/permify/collection/"},"Permify Postman Collection")," to send API requests."),(0,i.yg)("p",null,"You can test your connection by creating an HTTP GET request."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"localhost:3476/healthz\n")),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-09-permify-access-control/healthz-check.png",alt:"Verifying Kubectl installation"})),(0,i.yg)("p",null,"Before creating and initializing Permify Client, let's first create the access control mechanism in Refine."),(0,i.yg)("h2",{id:"step-2-create-an-access-control-mechanism-in-refine-access-control-provider"},"Step 2: Create an access control mechanism in Refine Access Control Provider"),(0,i.yg)("p",null,"Refine provides an agnostic API via the ",(0,i.yg)("a",{parentName:"p",href:"https://refine.dev/docs/core/providers/accessControl-provider/"},"accessControlProvider")," to manage access control throughout your app.\nLet's create a mechanism in our Access Control Provider using the Permify client's isAuthorized function."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"Note:"))," ",(0,i.yg)("em",{parentName:"p"},"Since we haven't initialized the Permify Client yet, the isAuthorized function will generate an error. We will implement and initialize it in the third step.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},'accessControlProvider={{\n    can: async ({ action, params, resource }) => {\n      //post specific access checks - show, edit and delete a post\n      if (\n        action === "show" ||\n        action === "edit" ||\n        action === "delete"\n      ) {\n        const result = await permify.isAuthorized(\n          user.id,\n          resource!,\n          action,\n          params?.id\n        );\n        return Promise.resolve({\n          can: result,\n        });\n      }\n\n      //organization specific access checks - listing posts & creating posts\n      const result = await permify.isAuthorized(\n          user.id,\n        "organization",\n        action,\n        user.organization_id\n      );\n      return Promise.resolve({\n        can: result,\n      });\n    },\n}}\n')),(0,i.yg)("p",null,"With this setup, each access request can be captured by Permify and returns a decision according to your pre-defined rules and conditions that are defined on the Permify API."),(0,i.yg)("p",null,"Let's define an authorization model and sample authorization data to run our application to perform access checks!"),(0,i.yg)("h2",{id:"step-3-create-an-access-control-model-with-permify--initialize-permify-client"},"Step 3: Create an access control model with Permify & Initialize Permify Client"),(0,i.yg)("p",null,"Permify has its own domain-specific language that you can use to model your authorization logic."),(0,i.yg)("p",null,"The language allows the definition of arbitrary relations between users and objects, such as owner, editor, commenter, or roles like admin, manager, and member, and also dynamic attributes such as boolean variables, IP range, time period, etc."),(0,i.yg)("h3",{id:"creating-access-control-model--policy"},"Creating Access Control Model / Policy"),(0,i.yg)("p",null,"In our example project, we have posts, and these posts belong to a one-parent entity. This entity could be an application, business, or organization. Let's call it organization in this tutorial."),(0,i.yg)("p",null,"We've established ",(0,i.yg)("inlineCode",{parentName:"p"},"list"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"create"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"show"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"edit")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"delete")," permissions to grant users access to interact with these posts."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The ",(0,i.yg)("inlineCode",{parentName:"p"},"show"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"edit")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"delete")," actions can be considered post-specific permissions, as these actions are related to a specific post. For example, we might ask, ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"'Can user:23123 have access to delete post:14123412?'")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The ",(0,i.yg)("inlineCode",{parentName:"p"},"list")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"create")," permissions are organization-specific because they are not related to a single post but rather represent actions on cumulative posts that belong to a parent organization - as an example, we might ask, ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"' Can user:23123 list all posts that organization:1 has ?' "))))),(0,i.yg)("p",null,"Based on these considerations, we have developed an authorization logic with Permify domain-specific language to fulfill the above-mentioned requirements"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://play.permify.co/?s=GD27_Snr4trNo6W3DcG-8"},"Open Model in Permify Playground")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"entity user {}\n\nentity organization {\n\n    // application roles\n    relation member @user\n    relation admin @user\n\n    // permissions for listing posts\n    permission list = member or admin\n\n    // permissions for creating posts\n    permission create = member or admin\n\n}\n\nentity posts {\n\n    // represents posts from parent organization\n    relation org @organization\n\n    // represents post editor - owner\n    relation editor @user\n\n    // post specific permissions\n    permission show   = org.member or org.admin or editor\n    permission edit   = org.admin or editor\n    permission delete = org.admin\n}\n")),(0,i.yg)("p",null,"According to the above authorization model, the basic access conditions are:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Every member can list, create posts and see details of a post."),(0,i.yg)("li",{parentName:"ul"},"Only admins and editors could edit a post."),(0,i.yg)("li",{parentName:"ul"},"Only admins can delete a post."),(0,i.yg)("li",{parentName:"ul"},"To learn more about modeling authorization with Permify, see the related ",(0,i.yg)("a",{parentName:"li",href:"https://docs.permify.co/docs/getting-started/modeling/"},"docs"))),(0,i.yg)("h3",{id:"defining-access-control-model-to-permify-api"},"Defining Access Control Model to Permify API"),(0,i.yg)("p",null,"As we mentioned earlier, Permify evaluates Permission check requests according to the rules & conditions defined in the authorization schema (model) - which we created above."),(0,i.yg)("p",null,"Firstly, let's copy the above schema to ",(0,i.yg)("a",{parentName:"p",href:"https://play.permify.co/?s=GD27_Snr4trNo6W3DcG-8"},"Permify Playground's Schema")," section and copy the authorization schema to clipboard with clicking the ",(0,i.yg)("strong",{parentName:"p"},"Copy")," Button."),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-09-permify-access-control/copy-from-playground.png",alt:"Verifying Kubectl installation"})),(0,i.yg)("p",null,"Let's define this schema to our running instance with using ",(0,i.yg)("a",{parentName:"p",href:"https://docs.permify.co/docs/api-overview/schema/write-schema/"},"WriteSchema API"),". Again I will use the Postman to do so."),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-09-permify-access-control/write-schema-request.png",alt:"Verifying Kubectl installation"})),(0,i.yg)("p",null,"Voila! we successfully defined the authorization model!"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"Note:"))," ",(0,i.yg)("em",{parentName:"p"},"For production usage, you should configure these APIs on your internal Permify Client to make API calls programmatically. Alternatively, you can use the official Golang and Node.js gRPC clients of Permify.")),(0,i.yg)("h3",{id:"create-a-simple-permify-rest-client"},"Create a simple Permify REST Client"),(0,i.yg)("p",null,"In Permify, you can perform resource-based authorization checks, in the form of:\n",(0,i.yg)("inlineCode",{parentName:"p"},"Can user U perform action Y in resource Z ?")),(0,i.yg)("p",null,"In order to make that access check, we'll use the Permify API's ",(0,i.yg)("a",{parentName:"p",href:"https://docs.permify.co/docs/api-overview/permission/check-api/"},"PermissionCheck")," endpoint. But for that let's create a simple REST server in our project."),(0,i.yg)("p",null,"Open a ",(0,i.yg)("inlineCode",{parentName:"p"},"/authz")," folder in your root directory and create ",(0,i.yg)("inlineCode",{parentName:"p"},"permifyClient.ts")," file with following content:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},'import { BaseKey } from "@refinedev/core";\n\nexport class PermifyClient {\n  private instance: string;\n\n  constructor(instance: string) {\n    this.instance = instance;\n  }\n\n  async isAuthorized(user: string, resource: string, action: string, paramsId?: BaseKey | undefined): Promise<boolean> {\n    try {\n      const response = await fetch(`${this.instance}/v1/tenants/t1/permissions/check`, {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json",\n        },\n        body: JSON.stringify({\n          metadata: {\n            depth: 5,\n          },\n          entity: {\n            type: resource,\n            id: paramsId?.toString(),\n          },\n          permission: action,\n          subject: {\n            type: "user",\n            id: user, // user ID\n          },\n        }),\n      });\n\n      const responseData = await response.json();\n      return responseData?.can === "CHECK_RESULT_ALLOWED";\n    } catch (error) {\n      console.error("Error while authorizing:", error);\n      return false; // or handle the error as needed\n    }\n  }\n}\n')),(0,i.yg)("p",null,"This simple REST service will be responsible for permission checks. For more information, see the ",(0,i.yg)("a",{parentName:"p",href:"https://docs.permify.co/docs/api-overview/permission/check-api/"},"permission check documentation"),"."),(0,i.yg)("p",null,"After completing our client let's initialize it in the ",(0,i.yg)("inlineCode",{parentName:"p"},"App.tsx")," with running server, which is: ",(0,i.yg)("inlineCode",{parentName:"p"},"localhost:3476")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},'// Create an instance of Permify Client\nconst instance = "<http://localhost:3476>";\nconst permify = new PermifyClient(instance);\n')),(0,i.yg)("h2",{id:"step-4-create-authorization-data-to-check-user-accesses"},"Step 4: Create Authorization Data to check user accesses."),(0,i.yg)("p",null,"Let's run our application to see results."),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-09-permify-access-control/unauthorized-application-screenshot.png",alt:"Verifying Kubectl installation"})),(0,i.yg)("p",null,"Since Permify side doesn't have the necessary data and information about the logged user (user: demo_user_1) yet, our user has no access to list posts."),(0,i.yg)("p",null,"On the Permify side, you just need to match your users and resources. You can follow the Managing Authorization Data on Permify docs to learn how data management operates."),(0,i.yg)("h3",{id:"sync-authorization-data"},"Sync Authorization Data"),(0,i.yg)("p",null,"Permify stores your authorization data in a database you prefer. You can configure the database when running Permify Service."),(0,i.yg)("p",null,"These stored data are queried and utilized in Permify APIs, including the check API. As an example; to decide whether a user could view a protected resource, Permify looks up the authorization data and relations between that specific user and the protected resource."),(0,i.yg)("p",null,"Let's define the authorization data below to link our users to an organization."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"user:demo_user_1 is admin in organization:demo_org_1"),(0,i.yg)("li",{parentName:"ul"},"user:demo_user_2 is member in organization:demo_org_1")),(0,i.yg)("p",null,"We can define these to Permify side with a single ",(0,i.yg)("a",{parentName:"p",href:"https://docs.permify.co/docs/api-overview/data/write-data/"},"WriteData API")," request."),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-09-permify-access-control/first-write-api-request.png",alt:"Verifying Kubectl installation"})),(0,i.yg)("p",null,"Here is the full payload,"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "metadata": {},\n  "tuples": [\n    {\n      "entity": {\n        "type": "organization",\n        "id": "demo_org_1"\n      },\n      "relation": "admin",\n      "subject": {\n        "type": "user",\n        "id": "demo_user_1",\n        "relation": "  "\n      }\n    },\n    {\n      "entity": {\n        "type": "organization",\n        "id": "demo_org_1"\n      },\n      "relation": "member",\n      "subject": {\n        "type": "user",\n        "id": "demo_user_2",\n        "relation": "  "\n      }\n    }\n  ]\n}\n')),(0,i.yg)("p",null,"Let's run our application again."),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-09-permify-access-control/first-write-api-request.png",alt:"Verifying Kubectl installation"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"Note:"))," ",(0,i.yg)("em",{parentName:"p"},"If you're using Refine's demo API (as we did in this tutorial), create a data folder and add sample users there. We will use the ",(0,i.yg)("strong",{parentName:"em"},"Header")," layout component to change logged-in sample users.")),(0,i.yg)("p",null,"As you can see, according to our model, users can now be able to list posts and create posts."),(0,i.yg)("p",null,"But although our user has a ",(0,i.yg)("strong",{parentName:"p"},'"Admin"')," role according to the above tab, the edit button is still blocked. The reason for this is the Permify side doesn't have the information about which posts are defined below the ",(0,i.yg)("inlineCode",{parentName:"p"},"organization:demo_org_"),"."),(0,i.yg)("p",null,"Let's add ",(0,i.yg)("inlineCode",{parentName:"p"},"post:1")," relationships with again using WriteData API request:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"organization:demo_org_1")," is parent organization of ",(0,i.yg)("inlineCode",{parentName:"p"},"posts:1")," - Meaning post 1 is belong to organization demo_org_1.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"user:demo_user_2")," is editor in ",(0,i.yg)("inlineCode",{parentName:"p"},"posts:1")," - Assigning the ",(0,i.yg)("inlineCode",{parentName:"p"},"user:2")," as editor of post:1"),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-09-permify-access-control/second-write-data-request.png",alt:"Verifying Kubectl installation"})))),(0,i.yg)("p",null,"Let's run our application again; we should see the ",(0,i.yg)("strong",{parentName:"p"},'"Edit"')," button of the first resource (resource with id: 1) not blocked."),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-09-permify-access-control/edit-not-blocked.png",alt:"Verifying Kubectl installation"})),(0,i.yg)("p",null,"Now, let's move on to the details of this post."),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-09-permify-access-control/details-of-this-post.png",alt:"Verifying Kubectl installation"})),(0,i.yg)("p",null,"Since our current user (",(0,i.yg)("inlineCode",{parentName:"p"},"user:demo_user_1"),") is an admin in the organization to which this post belongs, this user can access everything."),(0,i.yg)("p",null,"On this page, let's switch to our second demo user (demo_user_2) by clicking the ",(0,i.yg)("strong",{parentName:"p"},'"Editor"')," tab above."),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-09-permify-access-control/clicking-editor-tab.png",alt:"Verifying Kubectl installation"})),(0,i.yg)("p",null,"Since only admins can delete a specific post, as defined in the authorization schema:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"permission edit   = org.admin or editor\npermission delete = org.admin\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("strong",{parentName:"p"},"Delete")," button gets blocked, as expected."),(0,i.yg)("h2",{id:"step-5-creating-more-advanced-permissions-options"},"Step 5: Creating more advanced permissions (Options)"),(0,i.yg)("p",null,"There are times when authorization structure conditions can't be straightforward forward, as we demonstrated.\nSometimes, business needs to force you to check multiple complex permissions or conditions. To demonstrate that, let's add a custom condition with Permify."),(0,i.yg)("p",null,"Lets say"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Users can edit any post if they are on a workday.")),(0,i.yg)("p",null,"This means users can view the posts only on workdays, excluding weekends, and the user must be a member of the organization."),(0,i.yg)("p",null,"According to this condition, let's update our existing authorization model by using rule and attribute keywords.\nentity"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://play.permify.co/?s=K4X_hS1flAwRQ6FDySBCg"},"Open Model in Permify Playground")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"user {}\n\nentity organization {\n\n    // application roles\n    relation member @user\n    relation admin @user\n\n    // permissions for listing posts\n    permission list = member or admin\n\n    // permissions for creating posts\n    permission create = member or admin\n\n}\n\nentity posts {\n\n    // represents posts parent organization\n    relation org @organization\n\n        // represents post editor - owner\n    relation editor @user\n\n    // permissions\n        permission show   = org.member or org.admin or editor\n    permission edit   = is_weekday(request.day_of_week) and (org.admin or editor)\n    permission delete = org.admin\n}\n\nrule is_weekday(day_of_week string) {\n      day_of_week != 'saturday' && day_of_week != 'sunday'\n}\n")),(0,i.yg)("p",null,"The edit permissions in this model state that to 'edit' the post, the user must fulfill two conditions:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"current day (according to the context data day_of_week) must not be a weekend (determined by the is_weekday rule),"),(0,i.yg)("li",{parentName:"ul"},"user must be either admin or editor in the organization level.")),(0,i.yg)("p",null,"Now add this rule to our edit permission and test the results by running our app."),(0,i.yg)("p",null,"Select the Editor role, and you should see the edit button disabled when you're performing that action outside the time interval we have determined (8:00 am to 6.00 pm)"),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"In this article, we create a couple of access check examples using ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Permify/permify"},"Permify"),"."),(0,i.yg)("p",null,"We mostly focused on the client side using Refine access control provider; hence, Permify is a full stack solution in which you can implement your authorization logic for every layer of your application from the backend to the front end."),(0,i.yg)("p",null,"So, if you are looking for an access control mechanism, you can create any kind of role or attribute-based authorization structures easily with Permify."))}g.isMDXComponent=!0}}]);