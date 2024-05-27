"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43785],{58860:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var i=t(37953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return t?i.createElement(g,o(o({ref:n},c),{},{components:t})):i.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},17428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>p});t(37953);var i=t(58860);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={title:"Adding PDF Renderer",description:"We are going to add PDF renderer to our PDF Invoice Generator app that we have been building last few days. This is also where we summarize our accomplishments and wrap up the series.",slug:"refine-react-invoice-generator-5",authors:"abdullah_numan",tags:["refine-week","Refine","strapi","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-04-14-refine-invoicer-5/social.png",hide_table_of_contents:!1},s=void 0,d={permalink:"/blog/refine-react-invoice-generator-5",source:"@site/blog/2023-04-14-refine-invoicer-5.md",title:"Adding PDF Renderer",description:"We are going to add PDF renderer to our PDF Invoice Generator app that we have been building last few days. This is also where we summarize our accomplishments and wrap up the series.",date:"2023-04-14T00:00:00.000Z",formattedDate:"April 14, 2023",tags:[{label:"refine-week",permalink:"/blog/tags/refine-week"},{label:"Refine",permalink:"/blog/tags/refine"},{label:"strapi",permalink:"/blog/tags/strapi"},{label:"ant-design",permalink:"/blog/tags/ant-design"}],readingTime:8.625,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Adding PDF Renderer",description:"We are going to add PDF renderer to our PDF Invoice Generator app that we have been building last few days. This is also where we summarize our accomplishments and wrap up the series.",slug:"refine-react-invoice-generator-5",authors:"abdullah_numan",tags:["refine-week","Refine","strapi","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-04-14-refine-invoicer-5/social.png",hide_table_of_contents:!1},prevItem:{title:"How to implement a date picker in React",permalink:"/blog/react-date-picker"},nextItem:{title:"Creating Mission and Invoice Pages",permalink:"/blog/refine-react-invoice-generator-4"},relatedPosts:[{title:"Announcing the Refine Open Source Hackathon 2 Winners",description:"We're thrilled to announce the winners of the Refine Open Source Hackathon 2!",permalink:"/blog/refine-hackathon-2-winners",formattedDate:"August 4, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:5.005,date:"2023-08-04T00:00:00.000Z"},{title:"Building a React Admin Panel with PrimeReact and Refine",description:"We'll build a simple React admin Panel using Refine and PrimeReact.",permalink:"/blog/building-react-admin-panel-with-primereact-and-refine",formattedDate:"July 26, 2023",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:42.665,date:"2023-07-26T00:00:00.000Z"},{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.395,date:"2022-03-01T00:00:00.000Z"}],authorPosts:[{title:"Using Heroicons with TailwindCSS",description:"In this post, we see how to use Heroicons with TailwindCSS.",permalink:"/blog/heroicons-with-tailwind",formattedDate:"September 18, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.345,date:"2023-09-18T00:00:00.000Z"},{title:"Tailwind Flex for Responsive React Components",description:"This post is about how to use TailwindCSS Flex classes effectively to implement responsive components in React.",permalink:"/blog/tailwind-flex",formattedDate:"September 11, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:12.72,date:"2023-09-11T00:00:00.000Z"},{title:"Setting Up the Invoicer App",description:"We start with setting up the Invoicer app by choosing Ant Design as a UI framework and Strapi as a dataprovider",permalink:"/blog/refine-react-invoice-generator-2",formattedDate:"April 11, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:19.145,date:"2023-04-11T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},p=[{value:"RefineWeek ft. Strapi series",id:"refineweek-ft-strapi-series",level:3},{value:"Overview",id:"overview",level:2},{value:"Adding PDF Renderer",id:"adding-pdf-renderer",level:2},{value:"React PDF Layout",id:"react-pdf-layout",level:3},{value:"Displaying PDF Renderer in Refine Modal",id:"displaying-pdf-renderer-in-refine-modal",level:3},{value:"Series Wrap Up",id:"series-wrap-up",level:2}],m={toc:p},u="wrapper";function g(e){var{components:n}=e,t=o(e,["components"]);return(0,i.yg)(u,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){a(e,n,t[n])}))}return e}({},m,t),{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"In this post, we add pdf renderer to ",(0,i.yg)("strong",{parentName:"p"},"PDF Invoice Generator")," app that we have been building last few days. This is also where we summarize our accomplishments and wrap up the series."),(0,i.yg)("p",null,"This is Day 5, the final day of the running ",(0,i.yg)("a",{parentName:"p",href:"https://refine.dev/week-of-refine-strapi/"},(0,i.yg)("strong",{parentName:"a"},"#RefineWeek"))," series and this ",(0,i.yg)("a",{parentName:"p",href:"https://refine.dev/week-of-refine-strapi/"},(0,i.yg)("strong",{parentName:"a"},"#RefineWeek"))," is a five-part tutorial that aims to help developers learn the ins-and-outs of ",(0,i.yg)("strong",{parentName:"p"},"Refine"),"'s powerful capabilities and get going with ",(0,i.yg)("a",{parentName:"p",href:"https://strapi.io/"},(0,i.yg)("strong",{parentName:"a"},"Strapi"))," within a week."),(0,i.yg)("h3",{id:"refineweek-ft-strapi-series"},"RefineWeek ft. Strapi series"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Day 1 - ",(0,i.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-react-invoice-generator-1/"},"Pilot & Refine architecture")),(0,i.yg)("li",{parentName:"ul"},"Day 2 - ",(0,i.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-react-invoice-generator-2/"},"Setting Up the Invoicer App")),(0,i.yg)("li",{parentName:"ul"},"Day 3 - ",(0,i.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-react-invoice-generator-3/"},"Adding CRUD Actions & Views")),(0,i.yg)("li",{parentName:"ul"},"Day 4 - ",(0,i.yg)("a",{parentName:"li",href:"https://refine.dev/blog/refine-react-invoice-generator-4/"},"Creating Mission and Invoices Pages"))),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://invoice-generator.refine.dev/"},"\ud83d\udc49 The live version of the app is be available here.")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/refine-week-invoice-generator"},"\ud83d\udc49 The final apps source code is available on GitHub.")),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("p",null,"Over the last two episodes, we have implemented CRUD operations on several resources of our ",(0,i.yg)("strong",{parentName:"p"},"PDF Invoice Generator")," app. On the way, we have explored ",(0,i.yg)("inlineCode",{parentName:"p"},"dataProvider"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"authProvider"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"resources"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"routerProvider")," and their corresponding hooks that give ",(0,i.yg)("strong",{parentName:"p"},"Refine")," powerful tools to rapidly build data heavy applications. We became familiar with some sophisticated hooks such as ",(0,i.yg)("inlineCode",{parentName:"p"},"useSimpleList()"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"useModalForm()")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"useDrawerForm()")," that makes building with ",(0,i.yg)("strong",{parentName:"p"},"Refine")," a convenience many developers seek."),(0,i.yg)("p",null,"In this article, we come past the ",(0,i.yg)("strong",{parentName:"p"},"Refine")," features and add a pdf renderer to display our invoices in a PDF screen."),(0,i.yg)("p",null,"We are going to add the pdf renderer inside a modal and make it accessible from the invoices ",(0,i.yg)("inlineCode",{parentName:"p"},"list")," page at ",(0,i.yg)("inlineCode",{parentName:"p"},"/invoices"),"."),(0,i.yg)("p",null,"Let's get it done!"),(0,i.yg)("h2",{id:"adding-pdf-renderer"},"Adding PDF Renderer"),(0,i.yg)("p",null,"We are going to render an ",(0,i.yg)("inlineCode",{parentName:"p"},"invoices")," record data inside a pdf layout. We are using ",(0,i.yg)("inlineCode",{parentName:"p"},"@react-pdf/renderer")," ",(0,i.yg)("inlineCode",{parentName:"p"},"npm")," package as our pdf renderer. So let's go ahead and install the package first:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-npm"},"npm install @react-pdf --save\n")),(0,i.yg)("h3",{id:"react-pdf-layout"},"React PDF Layout"),(0,i.yg)("p",null,"And build the PDF layout component like this:"),(0,i.yg)("details",null,(0,i.yg)("summary",null,"Show PDFlayout code"),(0,i.yg)("p",null,(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/pd/pdfLayout.tsx"',title:'"src/components/pd/pdfLayout.tsx"'},'import {\n  Document,\n  Image,\n  Page,\n  StyleSheet,\n  View,\n  Text,\n  PDFViewer,\n} from "@react-pdf/renderer";\nimport { IInvoice } from "interfaces";\nimport { API_URL } from "../../constants";\n\ntype PdfProps = {\n  record: IInvoice | undefined;\n};\n\nexport const PdfLayout: React.FC<PdfProps> = ({ record }) => {\n  const subtotal =\n    record?.missions.reduce((prev, cur) => {\n      return prev + cur?.day * cur?.daily_rate;\n    }, 0) ?? 0;\n\n  return (\n    <PDFViewer style={styles.viewer}>\n      <Document>\n        <Page style={styles.page} size="A4">\n          <View>\n            <Image\n              src={API_URL + record?.company?.logo?.url}\n              style={{ width: "120px", height: "auto" }}\n            />\n            <View style={styles.invoiceTextNumberContainer}>\n              <Text\n                style={styles.invoiceText}\n              >{`Invoice: Invoice_#${record?.id}${record?.name}`}</Text>\n              <Text\n                style={styles.invoiceId}\n              >{`Invoice ID: INVOICE_#${record?.id}`}</Text>\n            </View>\n          </View>\n          <View style={styles.dividerLG} />\n\n          <View style={styles.invoiceForFromContainer}>\n            <View style={styles.invoiceFor}>\n              <Text style={styles.invoiceForFromTitle}>invoice For:</Text>\n              <View>\n                <Text style={styles.invoiceForFromText}>\n                  {record?.contact?.client?.name}\n                </Text>\n                <Text style={styles.invoiceForFromText}>\n                  {record?.contact?.first_name}\n                </Text>\n                <Text style={styles.invoiceForFromText}>\n                  {record?.contact?.last_name}\n                </Text>\n                <Text style={styles.invoiceForFromText}>\n                  {record?.contact?.email}\n                </Text>\n              </View>\n            </View>\n\n            <View style={styles.invoiceFrom}>\n              <Text style={styles.invoiceForFromTitle}>From:</Text>\n              <View>\n                <Text style={styles.invoiceForFromText}>\n                  {record?.company.name}\n                </Text>\n                <Text style={styles.invoiceForFromText}>\n                  {record?.company.city}\n                </Text>\n                <Text style={styles.invoiceForFromText}>\n                  {record?.company.address}, {record?.company.country}\n                </Text>\n              </View>\n              <View style={styles.dividerSM} />\n              <View>\n                <Text\n                  style={styles.invoiceForFromText}\n                >{`Invoice ID: ${record?.id}`}</Text>\n                <Text\n                  style={styles.invoiceForFromText}\n                >{`Invoice Custom ID: ${record?.custom_id}`}</Text>\n                <Text\n                  style={styles.invoiceForFromText}\n                >{`Invoice Date: ${record?.date}`}</Text>\n              </View>\n            </View>\n          </View>\n\n          <View style={styles.table}>\n            <View style={styles.tableHeader}>\n              <Text style={[styles.tableHeaderItem, { width: "40%" }]}>\n                Mission\n              </Text>\n              <Text style={[styles.tableHeaderItem, { width: "20%" }]}>\n                Day\n              </Text>\n              <Text style={[styles.tableHeaderItem, { width: "20%" }]}>\n                Day Rate\n              </Text>\n              <Text style={[styles.tableHeaderItem, { width: "20%" }]}>\n                Total\n              </Text>\n            </View>\n            {record?.missions.map((item) => {\n              return (\n                <View key={item.id} style={styles.tableRow}>\n                  <Text style={[styles.tableCol, { width: "40%" }]}>\n                    {item.mission}\n                  </Text>\n                  <Text style={[styles.tableCol, { width: "20%" }]}>\n                    {item?.day}\n                  </Text>\n                  <Text style={[styles.tableCol, { width: "20%" }]}>\n                    {item?.daily_rate}\n                  </Text>\n                  <Text style={[styles.tableCol, { width: "20%" }]}>\n                    {item?.daily_rate * item?.day}\n                  </Text>\n                </View>\n              );\n            })}\n          </View>\n\n          <View style={styles.signatureTotalContainer}>\n            <View style={styles.signatureContainer}>\n              <Text style={styles.signatureText}>\n                Signature: ________________\n              </Text>\n              <Text style={styles.signatureText}>\n                Date: {record?.date.toString()}\n              </Text>\n            </View>\n\n            <View style={styles.totalContainer}>\n              <Text style={styles.totalText}>SUBTOTAL: {subtotal}</Text>\n              <Text style={styles.totalText}>\n                Discount(%): {record?.discount}\n              </Text>\n              <Text style={styles.totalText}>Tax(%): {record?.tax}</Text>\n              <Text style={styles.totalText}>\n                Total($):\n                {subtotal +\n                  (subtotal * (record?.tax as number)) / 100 -\n                  (subtotal * (record?.discount as number)) / 100}\n              </Text>\n            </View>\n          </View>\n          <View style={styles.footer}>\n            <Text style={styles.footerText}>{record?.company.city}</Text>\n            <Text style={styles.footerText}>\n              {record?.company.address}, {record?.company.country}\n            </Text>\n          </View>\n        </Page>\n      </Document>\n    </PDFViewer>\n  );\n};\n\nconst styles = StyleSheet.create({\n  viewer: {\n    paddingTop: 32,\n    width: "100%",\n    height: "80vh",\n    border: "none",\n  },\n  page: {\n    display: "flex",\n    padding: "0.4in 0.4in",\n    fontSize: 12,\n    color: "#333",\n    backgroundColor: "#fff",\n  },\n  invoiceTextNumberContainer: {\n    display: "flex",\n    flexDirection: "row",\n    alignItems: "center",\n    justifyContent: "space-between",\n  },\n  invoiceText: {\n    color: "#3aabf0",\n  },\n  invoiceId: {\n    textAlign: "center",\n  },\n  invoiceForFromContainer: {\n    display: "flex",\n    flexDirection: "row",\n    justifyContent: "space-between",\n  },\n  invoiceForFromTitle: {\n    marginBottom: 24,\n  },\n  invoiceFor: {\n    flex: 1.5,\n  },\n  invoiceFrom: {\n    flex: 1,\n  },\n  invoiceForFromText: {\n    color: "#787878",\n    lineHeight: 1.5,\n  },\n  dividerSM: {\n    width: "100%",\n    height: 1,\n    marginTop: 12,\n    marginBottom: 12,\n    backgroundColor: "#e5e5e5",\n  },\n  dividerLG: {\n    width: "100%",\n    height: 1,\n    marginTop: 40,\n    marginBottom: 40,\n    backgroundColor: "#e5e5e5",\n  },\n  table: {\n    marginTop: 32,\n  },\n  tableHeader: {\n    display: "flex",\n    flexDirection: "row",\n    textAlign: "center",\n  },\n  tableHeaderItem: {\n    paddingVertical: 8,\n    border: "1px solid #000",\n    borderBottom: "none",\n  },\n  tableRow: {\n    display: "flex",\n    flexDirection: "row",\n  },\n  tableCol: {\n    paddingVertical: 8,\n    paddingHorizontal: 4,\n    border: "1px solid #000",\n  },\n  signatureTotalContainer: {\n    display: "flex",\n    flexDirection: "row",\n    justifyContent: "space-between",\n    marginTop: 32,\n  },\n  signatureContainer: {},\n  totalContainer: {},\n  signatureText: {\n    marginTop: 32,\n  },\n  totalText: {\n    marginTop: 16,\n  },\n  footer: {\n    borderTop: "1px solid #e5e5e5",\n    paddingTop: 8,\n    marginTop: "auto",\n  },\n  footerText: {\n    color: "#787878",\n    lineHeight: 1.5,\n  },\n});\n')))),(0,i.yg)("p",null,"Everything here is React-PDF stuff so we won't be delving into any of the components here. However, if you are interested in exploring what's happening, please feel free to check out the cool ",(0,i.yg)("a",{parentName:"p",href:"https://react-pdf.org/components"},(0,i.yg)("inlineCode",{parentName:"a"},"@react-pdf/renderer")," docs here"),"."),(0,i.yg)("h3",{id:"displaying-pdf-renderer-in-refine-modal"},"Displaying PDF Renderer in Refine Modal"),(0,i.yg)("p",null,"As implemented on ",(0,i.yg)("a",{parentName:"p",href:"https://refine.dev/blog/refine-react-invoice-generator-4/"},"Day 4"),", our ",(0,i.yg)("inlineCode",{parentName:"p"},"invoices")," ",(0,i.yg)("inlineCode",{parentName:"p"},"list")," page renders the ",(0,i.yg)("inlineCode",{parentName:"p"},"<InvoiceList />")," component, which displays invoice data in rows of a table."),(0,i.yg)("p",null,"We are going to display a button on each row which, when clicked, opens up a modal. The modal will show the pdf document created from the invoice record."),(0,i.yg)("p",null,"Here's the updated ",(0,i.yg)("inlineCode",{parentName:"p"},"<InvoiceList />")," component:"),(0,i.yg)("details",null,(0,i.yg)("summary",null,"Show InvoiceList.tsx code"),(0,i.yg)("p",null,(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/invoices/list.tsx"',title:'"src/pages/invoices/list.tsx"'},'import { useState } from "react";\nimport { useModal } from "@refinedev/core";\nimport {\n  List,\n  useTable,\n  DateField,\n  TagField,\n  EmailField,\n  DeleteButton,\n  EditButton,\n} from "@refinedev/antd";\n\n// It is recommended to use explicit import as seen below to reduce bundle size.\n// import { IconName } from "@ant-design/icons";\nimport * as Icons from "@ant-design/icons";\n\nimport { Table, Space, Button, Modal } from "antd";\n\nimport { IInvoice, IMission } from "interfaces";\nimport { PdfLayout } from "components/pdf";\n\nconst { FilePdfOutlined } = Icons;\n\nexport const InvoiceList: React.FC = () => {\n  const [record, setRecord] = useState<IInvoice>();\n\n  const { tableProps } = useTable<IInvoice>({\n    meta: {\n      populate: {\n        contact: { populate: ["client"] },\n        company: { populate: ["logo"] },\n        missions: "*",\n      },\n    },\n  });\n\n  const { show, visible, close } = useModal();\n\n  return (\n    <>\n      <List>\n        <Table {...tableProps}>\n          <Table.Column dataIndex="id" title="ID" />\n          <Table.Column<IInvoice>\n            dataIndex="name"\n            title="Invoice Name"\n            render={(_, record) => {\n              return `Invoice_#${record.id}${record?.name}`;\n            }}\n          />\n          <Table.Column<IInvoice>\n            dataIndex="date"\n            title="Invoice Date"\n            render={(value) => <DateField format="LL" value={value} />}\n          />\n          <Table.Column dataIndex={["company", "name"]} title="Company" />\n          <Table.Column\n            dataIndex={"missions"}\n            title="Missions"\n            render={(value) => {\n              return value.map((item: IMission) => {\n                return (\n                  <TagField key={item?.id} color="blue" value={item?.mission} />\n                );\n              });\n            }}\n          />\n          <Table.Column\n            dataIndex="discount"\n            title="Discount(%)"\n            render={(value) => <TagField color="blue" value={value} />}\n          />\n          <Table.Column\n            dataIndex="tax"\n            title="Tax(%)"\n            render={(value) => <TagField color="cyan" value={value} />}\n          />\n          <Table.Column dataIndex="custom_id" title="Custom Invoice ID" />\n\n          <Table.Column\n            dataIndex={["contact", "email"]}\n            title="Contact"\n            render={(value) => <EmailField value={value} />}\n          />\n          <Table.Column<IInvoice>\n            title="Actions"\n            dataIndex="actions"\n            render={(_, record) => {\n              return (\n                <Space>\n                  <EditButton hideText size="small" recordItemId={record?.id} />\n                  <DeleteButton\n                    hideText\n                    size="small"\n                    recordItemId={record?.id}\n                  />\n                  {record.company && (\n                    <Button\n                      size="small"\n                      icon={<FilePdfOutlined />}\n                      onClick={() => {\n                        setRecord(record);\n                        show();\n                      }}\n                    />\n                  )}\n                </Space>\n              );\n            }}\n          />\n        </Table>\n      </List>\n      <Modal visible={visible} onCancel={close} width="80%" footer={null}>\n        <PdfLayout record={record} />\n      </Modal>\n    </>\n  );\n};\n')))),(0,i.yg)("p",null,"With the amended code, we have added the ",(0,i.yg)("inlineCode",{parentName:"p"},"<FilePdfOutlined />")," icon on each row under the ",(0,i.yg)("inlineCode",{parentName:"p"},"Actions")," column, which is basically the button we need. The ",(0,i.yg)("inlineCode",{parentName:"p"},"<Modal />")," component houses the ",(0,i.yg)("inlineCode",{parentName:"p"},"<PdfLayout />")," which displays the pdf document for each invoice record loaded."),(0,i.yg)("p",null,"Do take note of the ",(0,i.yg)("inlineCode",{parentName:"p"},"meta.populate")," property of the ",(0,i.yg)("inlineCode",{parentName:"p"},"useTable()")," hook's argument object. Its nested, nasty. We can even get deeper collecting all associated collections. Basically, what we did was for each ",(0,i.yg)("inlineCode",{parentName:"p"},"invoices")," record, populate all associated ",(0,i.yg)("inlineCode",{parentName:"p"},"contacts")," with each of their associated ",(0,i.yg)("inlineCode",{parentName:"p"},"clients"),"; and populate all associated ",(0,i.yg)("inlineCode",{parentName:"p"},"companies")," with each of their ",(0,i.yg)("inlineCode",{parentName:"p"},"logo"),"s; and also populate all associated ",(0,i.yg)("inlineCode",{parentName:"p"},"missions"),"."),(0,i.yg)("p",null,"OK. With this done, we can now go ahead and test our app and should be able to view the pdf document by clicking on the pdf document icon."),(0,i.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-04-14-refine-invoicer-5/pdf.gif",alt:"react invoice generator"}),(0,i.yg)("br",null),(0,i.yg)("h2",{id:"series-wrap-up"},"Series Wrap Up"),(0,i.yg)("p",null,"In this ",(0,i.yg)("strong",{parentName:"p"},"#RefineWeek")," series, we built a pdf invoice generator which allows users to create companies, add their clients, their contacts. They are also able to create missions with payment details such as daily rate and number of days for the mission to be completed, and issue invoices on those missions."),(0,i.yg)("p",null,"While building the app, we covered several core ",(0,i.yg)("strong",{parentName:"p"},"Refine")," concepts, particularly how data providers and hooks interact in data fetching and authentication. We made use of ",(0,i.yg)("inlineCode",{parentName:"p"},"dataProvider")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"authProvider")," props, along with ",(0,i.yg)("inlineCode",{parentName:"p"},"resources")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"routerProvider"),"."),(0,i.yg)("p",null,"We also made distinction between ",(0,i.yg)("strong",{parentName:"p"},"Refine")," core modules and support packages such as the ",(0,i.yg)("inlineCode",{parentName:"p"},"@refinedev/strapi-4")," which provides support to core features like ",(0,i.yg)("inlineCode",{parentName:"p"},"dataProvider")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"authProvider")," with respect to communicating with the backend API."),(0,i.yg)("p",null,"We became familiar with the new ",(0,i.yg)("inlineCode",{parentName:"p"},"resources")," and routing definitions in ",(0,i.yg)("strong",{parentName:"p"},"Refine")," version ",(0,i.yg)("inlineCode",{parentName:"p"},"v4"),", where a particular resource item specifies the path to all its pages, instead of the exact component to render. The component to render is now specified in the route definitions, giving us more flexibility and control over defining a better routing system."),(0,i.yg)("p",null,"We delved into the details about the fantastic support ",(0,i.yg)("strong",{parentName:"p"},"Refine")," has for ",(0,i.yg)("strong",{parentName:"p"},"Ant Design")," components. We saw that ",(0,i.yg)("strong",{parentName:"p"},"Refine")," lets us use ",(0,i.yg)("strong",{parentName:"p"},"Ant Design")," components out of the box, but also has its own library of support package in ",(0,i.yg)("inlineCode",{parentName:"p"},"@refinedev/antd"),". We experienced the convenience of powerful ",(0,i.yg)("strong",{parentName:"p"},"refine-Ant Design")," hooks such as ",(0,i.yg)("inlineCode",{parentName:"p"},"useSimpleList()"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"useModalForm()")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"useDrawerForm()")," that handle tremendous amount of heavy tasks such as data fetching and state management. We explored the excruciating details of how ",(0,i.yg)("strong",{parentName:"p"},"Refine")," accomplishes these heavylifting in the background by digging into the source code of some of these hooks."),(0,i.yg)("p",null,"There are a lot more to ",(0,i.yg)("strong",{parentName:"p"},"Refine")," than what we have covered in this series. We have made great strides in covering these topics so far by going through the documentation, especially to understand the provider - hooks interactions."),(0,i.yg)("p",null,"We can always build on what we have covered so far. There are plenty of things that we can do moving forward, like implementing access control with the ",(0,i.yg)("inlineCode",{parentName:"p"},"accessControlProvider"),", audit logging with the ",(0,i.yg)("inlineCode",{parentName:"p"},"auditLogProvider"),", customizing the layout, header, auth pages, etc."),(0,i.yg)("p",null,"Please feel free to reach out to the Refine team or join the ",(0,i.yg)("a",{parentName:"p",href:"https://discord.gg/refine"},"Refine Discord Channel")," to learn more and / or contribute!"))}g.isMDXComponent=!0}}]);