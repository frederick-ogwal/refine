"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92248],{58860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,d=c["".concat(l,".").concat(m)]||c[m]||g[m]||i;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(37953);var a=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Contributing"},l=void 0,p={unversionedId:"guides-concepts/contributing/index",id:"guides-concepts/contributing/index",title:"Contributing",description:"We follow a code of conduct when participating in the community. Please read it before you make any contributions.",source:"@site/docs/guides-concepts/contributing/index.md",sourceDirName:"guides-concepts/contributing",slug:"/guides-concepts/contributing/",permalink:"/docs/guides-concepts/contributing/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/contributing/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716808447,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{title:"Contributing"},sidebar:"mainSidebar",previous:{title:"Development",permalink:"/docs/guides-concepts/development/"},next:{title:"FAQ",permalink:"/docs/guides-concepts/faq/"}},u={},c=[{value:"Ways to contribute",id:"ways-to-contribute",level:2},{value:"Setting Up Your Environment for Development",id:"setting-up-your-environment-for-development",level:2},{value:"Cloning the Repository",id:"cloning-the-repository",level:3},{value:"Installing dependencies",id:"installing-dependencies",level:3},{value:"Building packages",id:"building-packages",level:3},{value:"Working with packages",id:"working-with-packages",level:3},{value:"Running Tests",id:"running-tests",level:3},{value:"Working on Documentation",id:"working-on-documentation",level:2},{value:"Creating Previews and Code Samples",id:"creating-previews-and-code-samples",level:3},{value:"Committing Your Work and Preparing a Pull Request",id:"committing-your-work-and-preparing-a-pull-request",level:2},{value:"Linting &amp; Formatting",id:"linting--formatting",level:3},{value:"Commit Convention",id:"commit-convention",level:3},{value:"Creating a Changeset",id:"creating-a-changeset",level:3},{value:"Creating a Pull Request",id:"creating-a-pull-request",level:3},{value:"Release Cycle",id:"release-cycle",level:2}],g=(m="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)});var m;const d={toc:c},y="wrapper";function h(e){var{components:t}=e,n=r(e,["components"]);return(0,a.yg)(y,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"We follow a ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/CODE_OF_CONDUCT.md"},"code of conduct")," when participating in the community. Please read it before you make any contributions."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"If you plan to work on an issue, mention so in the issue page before you start working on it."),(0,a.yg)("li",{parentName:"ul"},"If you plan to work on a new feature, create an issue and discuss it with other community members/maintainers."),(0,a.yg)("li",{parentName:"ul"},"Ask for help in our ",(0,a.yg)("a",{parentName:"li",href:"https://discord.gg/refine"},"community room"),".")),(0,a.yg)("h2",{id:"ways-to-contribute"},"Ways to contribute"),(0,a.yg)(g,{id:"ways-to-contribute",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Stars on GitHub"),": If you're a Refine user and enjoy using our platform, don't forget to star it on ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine"},"GitHub"),"! \ud83c\udf1f"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Improve documentation"),": Good documentation is imperative to the success of any project. You can make our documents the best they need to be by improving their quality or adding new ones."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Give feedback"),": We're always looking for ways to make Refine better, please share how you use Refine, what features are missing and what is done good via ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/discussions"},"GitHub Discussions")," or ",(0,a.yg)("a",{parentName:"li",href:"http://discord.gg/refine"},"Discord"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Share Refine"),": Help us reach people. Share ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine"},"Refine repository")," with everyone who can be interested."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Contribute to codebase"),": your help is needed to make this project the best it can be! You could develop new features or fix ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/issues"},"existing issues")," - every contribution will be welcomed with great pleasure!"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Share your own integrations"),": If you've created an integration for Refine, this can be a data provider, an auth provider, a UI integration or a routing integration, please share it with us! Refine's community has been growing rapidly and we're sure that your integration will be useful for many people. We'll be happy to add your integration to our ",(0,a.yg)("a",{parentName:"li",href:"https://refine.dev/integrations"},"integrations page")," along with the other community made integrations and share it with our community."))),(0,a.yg)("h2",{id:"setting-up-your-environment-for-development"},"Setting Up Your Environment for Development"),(0,a.yg)(g,{id:"setting-up-your-environment-for-development",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("admonition",{title:"Requirements",type:"simple"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," version 18 or higher"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://git-scm.com/"},"Git")," and ",(0,a.yg)("a",{parentName:"li",href:"https://github.com"},"GitHub")," account"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://pnpm.io/"},"pnpm")," version 9 or higher"))),(0,a.yg)("p",null,"If your environment is ready, you can ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/fork"},"fork the Refine repository")," and clone it to your local machine.")),(0,a.yg)("h3",{id:"cloning-the-repository"},"Cloning the Repository"),(0,a.yg)(g,{id:"cloning-the-repository",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"After you fork the Refine repository, you need to clone it to your local machine. Instead of using the ",(0,a.yg)("inlineCode",{parentName:"p"},"refinedev/refine")," repository, it's recommended to use your fork. This way, you can push your changes to your fork and create a pull request from there."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/refinedev/refine.git\n"))),(0,a.yg)("h3",{id:"installing-dependencies"},"Installing dependencies"),(0,a.yg)(g,{id:"installing-dependencies",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"After you clone the repository, you need to install the dependencies. We use pnpm as package manager with workspaces feature. You can run the following command to install, link dependencies and build packages:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh",metastring:'title="Terminal"',title:'"Terminal"'},"pnpm install\n")),(0,a.yg)("p",null,"If you don't want to wait for building packages, you can use"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh",metastring:'title="Terminal"',title:'"Terminal"'},"pnpm install --ignore-scripts\n"))),(0,a.yg)("h3",{id:"building-packages"},"Building packages"),(0,a.yg)(g,{id:"building-packages",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"You can use ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build")," command with ",(0,a.yg)("inlineCode",{parentName:"p"},"--scope")," flag to build packages & examples."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh",metastring:'title="Terminal"',title:'"Terminal"'},"pnpm build --scope @refinedev/antd --scope base-antd\n"))),(0,a.yg)("h3",{id:"working-with-packages"},"Working with packages"),(0,a.yg)(g,{id:"working-with-packages",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh",metastring:'title="Terminal"',title:'"Terminal"'},"pnpm dev --scope @refinedev/antd --scope base-antd\n")),(0,a.yg)("p",null,"After running this command, you should see the packages and examples you've started in watch mode. You can now make changes in any of them and see the results in the browser."),(0,a.yg)("p",null,"If you make a change in the ",(0,a.yg)("inlineCode",{parentName:"p"},"@refinedev/antd")," package, you will see that right after the compilation, the ",(0,a.yg)("inlineCode",{parentName:"p"},"base-antd")," example will re-compile and you will see the changes in the browser."),(0,a.yg)("admonition",{title:"Development Tip",type:"simple"},(0,a.yg)("p",{parentName:"admonition"},"It's recommended to always keep at least one example ready to run while you are working on Refine. This way, you can test your changes in the example and make sure everything works as expected.")),(0,a.yg)("details",null,(0,a.yg)("summary",null,"How to add a dependency to a package?"),(0,a.yg)("p",null,"Navigate to the folder and run the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh",metastring:'title="Terminal"',title:'"Terminal"'},"cd packages/core\npnpm add my-new-dep\n")))),(0,a.yg)("h3",{id:"running-tests"},"Running Tests"),(0,a.yg)(g,{id:"running-tests",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Just like the ",(0,a.yg)("inlineCode",{parentName:"p"},"dev")," command, we can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"test")," command to run tests for the packages and examples we're working on."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh",metastring:'title="Terminal"',title:'"Terminal"'},"pnpm test -- --scope @refinedev/antd\n")),(0,a.yg)("admonition",{title:"Good to know",type:"simple"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"Refine uses ",(0,a.yg)("a",{parentName:"li",href:"https://jestjs.io/"},"Jest")," as the test runner and ",(0,a.yg)("a",{parentName:"li",href:"https://testing-library.com/docs/react-testing-library/intro/"},"@testing-library/react")," for testing React components. For E2E tests, we're using ",(0,a.yg)("a",{parentName:"li",href:"https://www.cypress.io"},"Cypress"),"."),(0,a.yg)("li",{parentName:"ul"},"We're expecting to see proper tests for each feature/bugfix you make. If you're not sure how to write tests for your feature/bugfix, please ask for help in our ",(0,a.yg)("a",{parentName:"li",href:"https://discord.gg/refine"},"community room"),".")))),(0,a.yg)("h2",{id:"working-on-documentation"},"Working on Documentation"),(0,a.yg)(g,{id:"working-on-documentation",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Refine documentation is built with ",(0,a.yg)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),". Documentation is handled separately from Lerna, so you need to install the dependencies and start the documentation separately."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh",metastring:'title="Terminal"',title:'"Terminal"'},"cd documentation\npnpm install\npnpm dev:docs\n")),(0,a.yg)("admonition",{title:"Documentation Scripts",type:"simple"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"You can also use ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm dev:blog")," to start the blog section of the documentation.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"dev:docs")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"dev:blog")," scripts start a portion of the documentation and skips the unnecessary parts to speed up the development process such as type and props table generation, checklist generation, etc. If you want to start the documentation with all the features, you can use ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm dev")," command.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"To create a production build of the documentation, you can use ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build")," command. Then, you can use ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm serve")," command to serve the production build in your local machine."))))),(0,a.yg)("h3",{id:"creating-previews-and-code-samples"},"Creating Previews and Code Samples"),(0,a.yg)(g,{id:"creating-previews-and-code-samples",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"We're using ",(0,a.yg)("a",{parentName:"p",href:"https://sandpack.codesandbox.io"},"Codesandbox's Sandpack")," to provide live previews and code editors in our documentation. We've created a custom ",(0,a.yg)("inlineCode",{parentName:"p"},"<Sandpack />")," component to make it easier to use with Refine and provided some predefined configurations for the most common use cases."),(0,a.yg)("p",null,"Check out the example usage of ",(0,a.yg)("inlineCode",{parentName:"p"},"<Sandpack />")," in Core API's ",(0,a.yg)("inlineCode",{parentName:"p"},"useForm")," hook documentation:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/data/hooks/use-form/#usage"},"useForm Documentation")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/documentation/docs/core/hooks/use-form/basic-usage.tsx"},"Source Code for Sandpack")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/documentation/docs/core/hooks/use-form/index.md"},"Source Code for Markdown")))),(0,a.yg)("h2",{id:"committing-your-work-and-preparing-a-pull-request"},"Committing Your Work and Preparing a Pull Request"),(0,a.yg)(g,{id:"committing-your-work-and-preparing-a-pull-request",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Refine is a monorepo with multiple packages and examples. To make sure we're keeping things clean and in order, we're using couple of tools to enforce a good development experience.")),(0,a.yg)("h3",{id:"linting--formatting"},"Linting & Formatting"),(0,a.yg)(g,{id:"linting--formatting",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"We are using ",(0,a.yg)("a",{parentName:"p",href:"https://biomejs.dev"},"biome")," for linting & formatting across the repository."),(0,a.yg)("p",null,"We suggest using ",(0,a.yg)("a",{parentName:"p",href:"https://biomejs.dev/reference/vscode/"},"biome VSCode extension")," to handle linting & formatting on your local environment to avoid unexpected failures on CI."),(0,a.yg)("p",null,"Since biome doesn't have markdown support yet, we are using prettier to format markdown files.")),(0,a.yg)("h3",{id:"commit-convention"},"Commit Convention"),(0,a.yg)(g,{id:"commit-convention",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Commit messages are essential to keep everything clear in our development process. We use ",(0,a.yg)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits")," to keep our commit messages consistent and easy to understand."),(0,a.yg)("p",null,"We're expecting to see proper commit messages with the following format:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"<type>(optional scope): <description>\n")),(0,a.yg)("p",null,"An example commit message:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"feat(core): add useAwesome hook\n")),(0,a.yg)("admonition",{title:"Good to know",type:"simple"},(0,a.yg)("p",{parentName:"admonition"},"We're using ",(0,a.yg)("a",{parentName:"p",href:"https://commitlint.js.org/"},"commitlint")," to enforce conventional commits. If you don't follow the conventional commit format, you will see an error message when you try to commit your changes or a Github action will fail when you create a pull request."))),(0,a.yg)("h3",{id:"creating-a-changeset"},"Creating a Changeset"),(0,a.yg)(g,{id:"creating-a-changeset",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"To manage our releases, changelogs and versioning, we're using ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/changesets/changesets"},"Changesets")," and ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/changesets/action"},"Changesets GitHub Action")," to automate the process. Changesets are designed to make your workflows easier, by allowing the person making contributions to make key decisions when they are making their contribution. Changesets hold two key bits of information: a version type (following semver), and change information to be added to a changelog."),(0,a.yg)("p",null,"Follow the steps below to create a changeset:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"pnpm changeset\n")),(0,a.yg)("p",null,"After you run this command, you will be asked couple of questions:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Select the package(s) you are modifying"),(0,a.yg)("li",{parentName:"ul"},"Choose one of ",(0,a.yg)("inlineCode",{parentName:"li"},"major/patch/minor")," according to your change"),(0,a.yg)("li",{parentName:"ul"},"Add explanation about the changes")),(0,a.yg)("p",null,"After you answer these questions, a changeset file will be created under ",(0,a.yg)("inlineCode",{parentName:"p"},".changeset")," directory. You can commit this file with your changes."),(0,a.yg)("admonition",{title:"Good to know",type:"simple"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"We're expecting a changeset to include a description about the changes you've made and how it affects the users. Please make sure you provide a good description for your changeset."),(0,a.yg)("li",{parentName:"ul"},"It's required for a changeset to provide a link to the issue that is related with. If you don't have an issue for your changes, please create one and link it to your changeset."),(0,a.yg)("li",{parentName:"ul"},"You'll be able to edit your changeset after you create it. If you need to make changes to your changeset, you can edit it under ",(0,a.yg)("inlineCode",{parentName:"li"},".changeset")," directory."))),(0,a.yg)("p",null,"Check out the following examples to see how changesets should be formatted:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-md",metastring:'title=".changeset/some-changeset.md"',title:'".changeset/some-changeset.md"'},'---\n"@refinedev/core": minor\n---\n\nfeat: added x feature #ISSUE_ID\n\nNow with x feature, you can do y.\n\nResolves #1234\n')),(0,a.yg)("p",null,"or"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-md",metastring:'title=".changeset/some-other-changeset.md"',title:'".changeset/some-other-changeset.md"'},'---\n"@refinedev/mantine": patch\n---\n\nfix: issue with x. #ISSUE_ID\n\nWe had an edge where it causes x issue to happen, now it\'s fixed.\n\nFixes #5678\n'))),(0,a.yg)("h3",{id:"creating-a-pull-request"},"Creating a Pull Request"),(0,a.yg)(g,{id:"creating-a-pull-request",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"After you commit your changes and create a changeset, you can push your changes to your fork and ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/compare"},"create a pull request"),". When you create a pull request, you will see a Github action that will run the tests and check if your changeset is valid. Our maintainers will review your changes in short time and merge your pull request if everything is good."),(0,a.yg)("p",null,"Our Pull Request template is designed to make sure you provide all the necessary information about your changes. Please make sure you fill the template with the required information."),(0,a.yg)("p",null,"We're looking forward to see your contributions! \ud83c\udf89")),(0,a.yg)("h2",{id:"release-cycle"},"Release Cycle"),(0,a.yg)(g,{id:"release-cycle",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Refine follows a monthly release cycle. We're releasing a new version every month with the changes we've made in that month. Unless there's a critical bugfix, we're not releasing a new version in the middle of the month. If your PR is approved and ready to be merged, it will be labeled as ",(0,a.yg)("inlineCode",{parentName:"p"},"pr-ready")," and will be merged to the ",(0,a.yg)("inlineCode",{parentName:"p"},"master")," branch with the next release."),(0,a.yg)("p",null,"Each approved PR will be included to a milestone, these milestones are used to track the progress of the monthly release.")))}h.isMDXComponent=!0}}]);