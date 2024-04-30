"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54813],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=o,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67669:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>c});t(96540);var a=t(15680);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"save-and-continue",title:"Save and Continue"},l=void 0,u={unversionedId:"advanced-tutorials/forms/save-and-continue",id:"version-3.xx.xx/advanced-tutorials/forms/save-and-continue",title:"Save and Continue",description:"refine provides you with the necessary methods to add this feature. This feature is familiar to Django users.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/forms/save-and-continue.md",sourceDirName:"advanced-tutorials/forms",slug:"/advanced-tutorials/forms/save-and-continue",permalink:"/docs/3.xx.xx/advanced-tutorials/forms/save-and-continue",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/forms/save-and-continue.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1714506456,formattedLastUpdatedAt:"Apr 30, 2024",frontMatter:{id:"save-and-continue",title:"Save and Continue"},sidebar:"someSidebar",previous:{title:"Custom Form Validation",permalink:"/docs/3.xx.xx/advanced-tutorials/forms/custom-form-validation"},next:{title:"CSV Export",permalink:"/docs/3.xx.xx/advanced-tutorials/import-export/csv-export"}},d={},c=[{value:"Disable <code>useForm</code> redirection after successful mutation",id:"disable-useform-redirection-after-successful-mutation",level:3},{value:"Creating form and adding buttons",id:"creating-form-and-adding-buttons",level:3},{value:"Handling submit events on buttons",id:"handling-submit-events-on-buttons",level:3},{value:"Example",id:"example",level:2}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",n)},m=p("DocThumbsUpDownFeedbackWidget"),g=p("CodeSandboxExample"),f={toc:c},v="wrapper";function y(e){var{components:n}=e,t=i(e,["components"]);return(0,a.yg)(v,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){o(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"refine")," provides you with the necessary methods to add this feature. This feature is familiar to ",(0,a.yg)("a",{parentName:"p",href:"https://www.djangoproject.com/"},"Django")," users."),(0,a.yg)("p",null,"We have three save options: ",(0,a.yg)("inlineCode",{parentName:"p"},"Save"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"Save and continue editing")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Save and add another"),"."),(0,a.yg)("p",null,"Now let's see how to handle these cases,"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Show Posts List"),(0,a.yg)("p",null,(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/posts/pages/list.tsx"',title:'"src/posts/pages/list.tsx"'},'import { useTable, useNavigation } from "@pankod/refine-core";\n\nimport { IPost } from "interfaces";\n\nexport const PostList: React.FC = () => {\n  const { tableQueryResult } = useTable<IPost>();\n  const { edit, create } = useNavigation();\n\n  return (\n    <div>\n      <button onClick={() => create("posts")}>Create Post</button>\n      <table>\n        <thead>\n          <td>ID</td>\n          <td>Title</td>\n          <td>Actions</td>\n        </thead>\n        <tbody>\n          {tableQueryResult.data?.data.map((post) => (\n            <tr key={post.id}>\n              <td>{post.id}</td>\n              <td>{post.title}</td>\n              <td>\n                <button onClick={() => edit("posts", post.id)}>Edit</button>\n              </td>\n            </tr>\n          ))}\n        </tbody>\n      </table>\n    </div>\n  );\n};\n')))),(0,a.yg)("h3",{id:"disable-useform-redirection-after-successful-mutation"},"Disable ",(0,a.yg)("inlineCode",{parentName:"h3"},"useForm")," redirection after successful mutation"),(0,a.yg)(m,{id:"disable-useform-redirection-after-successful-mutation",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"When we create our Create Page, we pass ",(0,a.yg)("inlineCode",{parentName:"p"},"redirect")," false to the ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm"},(0,a.yg)("inlineCode",{parentName:"a"},"useForm"))," hook that we will use to manage the form. Thus, we will be able to do the redirection we want in our buttons."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/create.tsx"',title:'"src/pages/create.tsx"'},'// highlight-next-line\nimport { useForm } from "@pankod/refine-core";\n\nimport { IPost } from "interfaces";\n\nexport const PostCreate: React.FC = () => {\n  const { formLoading, onFinish, redirect } = useForm<IPost>({\n    // highlight-next-line\n    redirect: false,\n  });\n};\n'))),(0,a.yg)("h3",{id:"creating-form-and-adding-buttons"},"Creating form and adding buttons"),(0,a.yg)(m,{id:"creating-form-and-adding-buttons",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"We will create the form and listen to the changes in this form with the help of a state. We add the ",(0,a.yg)("inlineCode",{parentName:"p"},"Save"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"Save and continue editing")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Save and add another")," buttons that we will use to submit the form to our page."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/create.tsx"',title:'"src/pages/create.tsx"'},'import React, { useState } from "react";\nimport { useSelect, useForm, useNavigation } from "@pankod/refine-core";\n\nimport { IPost } from "interfaces";\n\nexport const PostCreate: React.FC = () => {\n  const [formValues, setFormValues] = useState({\n    title: "",\n    content: "",\n    status: "draft",\n    category: {\n      id: "",\n    },\n  });\n  const { formLoading, onFinish, redirect } = useForm<IPost>({\n    redirect: false,\n  });\n\n  const { goBack } = useNavigation();\n\n  const { options } = useSelect({\n    resource: "categories",\n  });\n\n  return (\n    <div>\n      <button className="back" onClick={() => goBack()}>\n        Go Back\n      </button>\n      <form className="form-wrapper">\n        <div className="form-group">\n          <label>Title: </label>\n          <input\n            required\n            onChange={(e) =>\n              setFormValues({\n                ...formValues,\n                title: e.target.value,\n              })\n            }\n            value={formValues.title}\n          />\n        </div>\n        <div className="form-group">\n          <label>Status: </label>\n          <select\n            required\n            onChange={(e) =>\n              setFormValues({\n                ...formValues,\n                status: e.target.value as IPost["status"],\n              })\n            }\n            value={formValues.status}\n          >\n            <option value="published">published</option>\n            <option value="draft">draft</option>\n            <option value="rejected">rejected</option>\n          </select>\n        </div>\n        <div className="form-group">\n          <label>Category: </label>\n          <select\n            required\n            onChange={(e) =>\n              setFormValues({\n                ...formValues,\n                category: {\n                  id: e.target.value,\n                },\n              })\n            }\n            value={formValues.category.id}\n          >\n            <option value={""} disabled>\n              Please select\n            </option>\n            {options?.map((category) => (\n              <option key={category.value} value={category.value}>\n                {category.label}\n              </option>\n            ))}\n          </select>\n        </div>\n        <div className="form-group">\n          <label>Content: </label>\n\n          <textarea\n            required\n            onChange={(e) =>\n              setFormValues({\n                ...formValues,\n                content: e.target.value,\n              })\n            }\n            rows={10}\n            cols={50}\n            value={formValues.content}\n          />\n        </div>\n        <div className="saveActions">\n          // highlight-start\n          <button type="button">Save</button>\n          <button stype="button">Save and continue editing</button>\n          <button type="button">Save and add another</button>\n          // highlight-end\n        </div>\n        {formLoading && <p>Loading</p>}\n      </form>\n    </div>\n  );\n};\n')),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/form/save-and-continue/saveButtons.png",alt:"save and continue buttons"}),(0,a.yg)("br",null)),(0,a.yg)("h3",{id:"handling-submit-events-on-buttons"},"Handling submit events on buttons"),(0,a.yg)(m,{id:"handling-submit-events-on-buttons",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"We will use ",(0,a.yg)("inlineCode",{parentName:"p"},"handleSubmit")," function to manage to submit event when clicking the buttons we created."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"onFinish")," function resolves to respect the ",(0,a.yg)("inlineCode",{parentName:"p"},"mutationMode")," property. In ",(0,a.yg)("inlineCode",{parentName:"p"},"pessimistic")," mode, it will resolve after the response is returned from the request, in ",(0,a.yg)("inlineCode",{parentName:"p"},"optimistic")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"undoable")," modes it will resolve immediately. Only real await will happen in pessimistic mode and this will resolve with the response data, others will resolve immediately with undefined data."),(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/advanced-tutorials/mutation-mode"},"Refer to the ",(0,a.yg)("inlineCode",{parentName:"a"},"mutationMode")," documentation for more details. ","\u2192"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/create.tsx"',title:'"src/pages/create.tsx"'},'import React, { useState } from "react";\nimport { useSelect, useForm, useNavigation } from "@pankod/refine-core";\n\nimport { IPost } from "interfaces";\n\nexport const PostCreate: React.FC = () => {\n  const [formValues, setFormValues] = useState({\n    title: "",\n    content: "",\n    status: "draft",\n    category: {\n      id: "",\n    },\n  });\n  const { formLoading, onFinish, redirect } = useForm<IPost>({\n    redirect: false,\n  });\n\n  const { goBack } = useNavigation();\n\n  const { options } = useSelect({\n    resource: "categories",\n  });\n\n  // highlight-start\n  const handleSubmit = async (redirectTo: "list" | "edit" | "create") => {\n    const response = await onFinish(formValues);\n\n    setFormValues({\n      title: "",\n      content: "",\n      status: "draft",\n      category: {\n        id: "",\n      },\n    });\n\n    redirect(redirectTo, response?.data?.id);\n  };\n  // highlight-end\n\n  return (\n    <div>\n      <button className="back" onClick={() => goBack()}>\n        Go Back\n      </button>\n      <form className="form-wrapper">\n        <div className="form-group">\n          <label>Title: </label>\n          <input\n            required\n            onChange={(e) =>\n              setFormValues({\n                ...formValues,\n                title: e.target.value,\n              })\n            }\n            value={formValues.title}\n          />\n        </div>\n        <div className="form-group">\n          <label>Status: </label>\n          <select\n            required\n            onChange={(e) =>\n              setFormValues({\n                ...formValues,\n                status: e.target.value as IPost["status"],\n              })\n            }\n            value={formValues.status}\n          >\n            <option value="published">published</option>\n            <option value="draft">draft</option>\n            <option value="rejected">rejected</option>\n          </select>\n        </div>\n        <div className="form-group">\n          <label>Category: </label>\n          <select\n            required\n            onChange={(e) =>\n              setFormValues({\n                ...formValues,\n                category: {\n                  id: e.target.value,\n                },\n              })\n            }\n            value={formValues.category.id}\n          >\n            <option value={""} disabled>\n              Please select\n            </option>\n            {options?.map((category) => (\n              <option key={category.value} value={category.value}>\n                {category.label}\n              </option>\n            ))}\n          </select>\n        </div>\n        <div className="form-group">\n          <label>Content: </label>\n\n          <textarea\n            required\n            onChange={(e) =>\n              setFormValues({\n                ...formValues,\n                content: e.target.value,\n              })\n            }\n            rows={10}\n            cols={50}\n            value={formValues.content}\n          />\n        </div>\n        <div className="saveActions">\n          // highlight-start\n          <button onClick={() => handleSubmit("list")} type="button">\n            Save\n          </button>\n          <button onClick={() => handleSubmit("edit")} type="button">\n            Save and continue editing\n          </button>\n          <button onClick={() => handleSubmit("create")} type="button">\n            Save and add another\n          </button>\n          // highlight-end\n        </div>\n        {formLoading && <p>Loading</p>}\n      </form>\n    </div>\n  );\n};\n')),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"We used the ",(0,a.yg)("inlineCode",{parentName:"p"},"redirect")," method to perform the redirection, which returns from ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm"},(0,a.yg)("inlineCode",{parentName:"a"},"useForm"))," instead of ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},(0,a.yg)("inlineCode",{parentName:"a"},"useNavigation"))," Thus, we can do our routing without dealing with managing resources."))),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)(m,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(g,{path:"form-save-and-continue",mdxType:"CodeSandboxExample"})))}y.isMDXComponent=!0}}]);