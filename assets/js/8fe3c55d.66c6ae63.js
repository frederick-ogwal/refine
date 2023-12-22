"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"ethereum-signin",title:"Sign in with Ethereum Web3 Wallet"},l=void 0,d={unversionedId:"advanced-tutorials/web3/ethereum-signin",id:"advanced-tutorials/web3/ethereum-signin",title:"Sign in with Ethereum Web3 Wallet",description:"Introduction",source:"@site/docs/advanced-tutorials/web3/ethereum-signin.md",sourceDirName:"advanced-tutorials/web3",slug:"/advanced-tutorials/web3/ethereum-signin",permalink:"/docs/advanced-tutorials/web3/ethereum-signin",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/web3/ethereum-signin.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1703253118,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{id:"ethereum-signin",title:"Sign in with Ethereum Web3 Wallet"},sidebar:"mainSidebar",previous:{title:"Multipart Upload",permalink:"/docs/advanced-tutorials/upload/multipart-upload"},next:{title:"Development",permalink:"/docs/guides-concepts/development/"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Configure Refine Auth provider",id:"configure-refine-auth-provider",level:2},{value:"Override Login page\u200b",id:"override-login-page",level:3},{value:"Create Dashboard",id:"create-dashboard",level:2},{value:"Send Test Ethereum with Refine Dashboard",id:"send-test-ethereum-with-refine-dashboard",level:2},{value:"Example",id:"example",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=p("InstallPackagesCommand"),g=p("CodeSandboxExample"),h={toc:u};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this guide, you will examine what a web3 wallet is, how to sign in to your wallet, and how to use the popular wallet ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),". We will learn to log in to your Metamask wallet using ",(0,r.kt)("strong",{parentName:"p"},"Refine")," and ",(0,r.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.5.2/"},"Web3"),"."),(0,r.kt)("p",null,"A web3 wallet is a software that allows you to send, receive, or store cryptocurrency securely without the need for a 3rd party. Web3 wallet is your key to accessing your cryptocurrency. If you want to send cryptocurrency or receive it you will need a wallet."),(0,r.kt)("p",null,"We will show you how to log in to your Metamask wallet with ",(0,r.kt)("strong",{parentName:"p"},"Refine"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"We will need ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ChainSafe/web3.js"},"web3")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/web3modal/web3modal"},"web3-modal")," packages in our project. Let's start by downloading these packages."),(0,r.kt)(m,{args:"web3 web3modal",mdxType:"InstallPackagesCommand"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"))," package. If you are using Refine headless, you need to provide the components, hooks or helpers imported from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"))," package.")),(0,r.kt)("h2",{id:"configure-refine-auth-provider"},"Configure Refine Auth provider"),(0,r.kt)("p",null,"First, we need to define a web3modal and create a provider. We can get information about the wallet by connecting this provider that we have created to web3."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In this example, we will show the login with Metamask Wallet. If you want, you can connect to other wallets using web3modal's providers.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/authprovider.ts"',title:'"/src/authprovider.ts"'},'import { AuthBindings } from "@refinedev/core";\nimport Web3 from "web3";\nimport Web3Modal from "web3modal";\n\nimport { getBalance } from "./utility";\n\nexport const TOKEN_KEY = "refine-auth";\n\nconst providerOptions = {};\nconst web3Modal = new Web3Modal({\n  cacheProvider: true,\n  providerOptions,\n});\n\nlet provider: any | null = null;\n\nexport const authProvider: AuthBindings = {\n  login: async () => {\n    if (window.ethereum) {\n      provider = await web3Modal.connect();\n      const web3 = new Web3(provider);\n      const accounts = await web3.eth.getAccounts();\n      localStorage.setItem(TOKEN_KEY, accounts[0]);\n      return {\n        success: true,\n        redirectTo: "/",\n      };\n    } else {\n      return {\n        success: false,\n        error: new Error("Not set ethereum wallet or invalid. You need to install Metamask"),\n      };\n    }\n  },\n  logout: async () => {\n    localStorage.removeItem(TOKEN_KEY);\n    if (provider && provider.close) {\n      await provider.close;\n\n      provider = null;\n      await web3Modal.clearCachedProvider();\n    }\n    return {\n      success: true,\n      redirectTo: "/login",\n    };\n  },\n  onError: async (error) => {\n    console.error(error);\n    return { error };\n  },\n  check: async () => {\n    const token = localStorage.getItem(TOKEN_KEY);\n    if (token) {\n      return {\n        authenticated: true,\n      };\n    }\n\n    return {\n      authenticated: false,\n      redirectTo: "/login",\n      logout: true,\n    };\n  },\n  getPermissions: async () => null,\n  getIdentity: async () => {\n    const address = localStorage.getItem(TOKEN_KEY);\n    if (!address) {\n      return null;\n    }\n\n    const balance = await getBalance(address);\n\n    return {\n      address,\n      balance,\n    };\n  },\n};\n')))),(0,r.kt)("p",null,"We use web3's ",(0,r.kt)("inlineCode",{parentName:"p"},"getBalance()")," function to find out the ethereum amount of the account logged in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/utility.ts"',title:'"src/utility.ts"'},'const web3 = new Web3(window.ethereum);\n\nexport const getBalance = async (account: string): Promise<string> => {\n  return new Promise((resolve, reject) => {\n    web3.eth.getBalance(account, (err: any, result: any) => {\n      if (err) {\n        reject(err);\n      } else {\n        resolve(web3.utils.fromWei(result, "ether"));\n      }\n    });\n  });\n};\n')),(0,r.kt)("h3",{id:"override-login-page"},"Override Login page\u200b"),(0,r.kt)("p",null,"We need to override the Refine login page. In this way, we will redirect it to the Metamask Wallet login page. We create a ",(0,r.kt)("inlineCode",{parentName:"p"},"login.tsx")," file in the /pages folder."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/page/login.tsx"',title:'"/src/page/login.tsx"'},'import { Layout, Button, Space, Typography } from "antd";\nimport { ThemedTitleV2 } from "@refinedev/antd";\n// highlight-next-line\nimport { useLogin } from "@refinedev/core";\n\nexport const Login: React.FC = () => {\n  // highlight-next-line\n  const { mutate: login, isLoading } = useLogin();\n\n  return (\n    <Layout\n      style={{\n        height: "100vh",\n        justifyContent: "center",\n        alignItems: "center",\n      }}\n    >\n      <Space direction="vertical" align="center" size="large">\n        <ThemedTitleV2\n          collapsed={false}\n          wrapperStyles={{\n            fontSize: "22px",\n          }}\n        />\n        <Button type="primary" size="middle" loading={isLoading} onClick={() => login({})}>\n          Sign in with Ethereum\n        </Button>\n        <Typography.Text type="secondary">Powered by Auth0</Typography.Text>\n      </Space>\n    </Layout>\n  );\n};\n')))),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/web3/login-min.gif",alt:"ethereum-login",className:"border border-gray-200 rounded"}),(0,r.kt)("h2",{id:"create-dashboard"},"Create Dashboard"),(0,r.kt)("p",null,"After connecting with our account, we can now retrieve account information. We will display this information on the dashboard of the ",(0,r.kt)("strong",{parentName:"p"},"Refine"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/dashboard.tsx"',title:'"src/pages/dashboard.tsx"'},'import React from "react";\nimport { useGetIdentity } from "@refinedev/core";\nimport { useModal } from "@refinedev/antd";\nimport { Row, Col, Card, Typography, Space, Button, Modal, Form, Input } from "antd";\n\nconst { Text } = Typography;\n\nexport const DashboardPage: React.FC = () => {\n  const { data, isLoading } = useGetIdentity<{\n    address: string;\n    balance: string;\n  }>();\n\n  return (\n    <Row gutter={24}>\n      <Col span={12}>\n        <Card\n          title="Ethereum Public ID"\n          style={{ height: "150px", borderRadius: "15px" }}\n          headStyle={{ textAlign: "center" }}\n        >\n          <Space align="center" direction="horizontal">\n            <Text>{isLoading ? "loading" : data?.address}</Text>\n          </Space>\n        </Card>\n      </Col>\n      <Col span={8}>\n        <Card\n          title="Account Balance"\n          style={{ height: "150px", borderRadius: "15px" }}\n          headStyle={{ textAlign: "center" }}\n        >\n          <Text>{`${isLoading ? "loading" : data?.balance} Ether`}</Text>\n        </Card>\n      </Col>\n    </Row>\n  );\n};\n')))),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/web3/dashboard.jpg",alt:"refine-dashboard",className:"border border-gray-200 rounded"}),(0,r.kt)("p",null,"Now lets customize ",(0,r.kt)("strong",{parentName:"p"},"Refine")," dashboard. Send your test ethereum via ",(0,r.kt)("strong",{parentName:"p"},"Refine")," dashboard and Metamask."),(0,r.kt)("h2",{id:"send-test-ethereum-with-refine-dashboard"},"Send Test Ethereum with Refine Dashboard"),(0,r.kt)("p",null,"Here we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"sendTransaction")," function to send ethereum with your browser-enabled web3 wallet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/utility.ts"',title:'"src/utility.ts"'},'export const sendEthereum = async (sender: string, receiver: string, amount: string) => {\n  try {\n    const params = {\n      from: sender,\n      to: receiver,\n      value: web3.utils.toHex(web3.utils.toWei(amount, "ether")),\n      gas: 39000,\n    };\n    await window.ethereum.enable();\n    return await web3.eth.sendTransaction(params);\n  } catch (error) {\n    new Error("Something went wrong!");\n  }\n};\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/dashboard.tsx"',title:'"src/pages/dashboard.tsx"'},'import React, { useState } from "react";\nimport { useGetIdentity } from "@refinedev/core";\nimport { useModal } from "@refinedev/antd";\nimport { Row, Col, Card, Typography, Space, Button, Modal, Form, Input, notification } from "antd";\n\nimport { sendEthereum } from "../utility";\n\nconst { Text } = Typography;\n\nexport const DashboardPage: React.FC = () => {\n  const { data, isLoading } = useGetIdentity<{\n    address: string;\n    balance: string;\n  }>();\n  const { modalProps, show, close } = useModal();\n  const [form] = Form.useForm();\n  const [loading, setLoading] = useState(false);\n\n  const handleModal = async (values: any) => {\n    setLoading(true);\n    const tx: any | undefined = await sendEthereum(data?.address!!, values.receiver, values.amount);\n    const status = tx ? tx.status : undefined;\n    setLoading(false);\n\n    if (status) {\n      close();\n      notification["success"]({\n        message: "Transaction Success",\n        description: "Transaction successful you can check on Etherscan.io",\n      });\n    } else {\n      notification["warning"]({\n        message: "Transaction Failed",\n        description: "Transaction failed try again",\n      });\n    }\n  };\n\n  return (\n    <>\n      <Row gutter={24}>\n        <Col span={12}>\n          <Card\n            title="Ethereum Public ID"\n            style={{ height: "150px", borderRadius: "15px" }}\n            headStyle={{ textAlign: "center" }}\n          >\n            <Space align="center" direction="horizontal">\n              <Text>{isLoading ? "loading" : data?.address}</Text>\n            </Space>\n          </Card>\n        </Col>\n        <Col span={8}>\n          <Card\n            title="Account Balance"\n            style={{ height: "150px", borderRadius: "15px" }}\n            headStyle={{ textAlign: "center" }}\n          >\n            <Text>{`${isLoading ? "loading" : data?.balance} Ether`}</Text>\n          </Card>\n        </Col>\n        <Col span={12}>\n          <Button style={{ maxWidth: 300, marginTop: 24 }} type="primary" size="large" onClick={() => show()}>\n            Send Ethereum\n          </Button>\n          <Button\n            style={{ maxWidth: 300, marginTop: 24, marginLeft: 12 }}\n            type="primary"\n            size="large"\n            href={`https://ropsten.etherscan.io/address/${data?.address}`}\n          >\n            View on Etherscan\n          </Button>\n        </Col>\n      </Row>\n      <Modal\n        {...modalProps}\n        okText={"Send"}\n        title={"Send Test Ethereum via Ropsten Chain"}\n        onOk={form.submit}\n        okButtonProps={{ loading: loading }}\n      >\n        <Form layout="vertical" onFinish={handleModal} form={form}>\n          <Form.Item name="receiver" label="Receiver Public Address">\n            <Input />\n          </Form.Item>\n          <Form.Item name="amount" label="Amaount Ether">\n            <Input />\n          </Form.Item>\n        </Form>\n      </Modal>\n    </>\n  );\n};\n')))),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/web3/customize.jpg",alt:"refine-customize",className:"border border-gray-200 rounded"}),(0,r.kt)("p",null,"We can now request to send ethereum through our ",(0,r.kt)("strong",{parentName:"p"},"Refine")," dashboard and also view your account details on ",(0,r.kt)("a",{parentName:"p",href:"https://ropsten.etherscan.io/"},"Etherscan Ropsten Test Network")),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/web3/overview-min.gif",alt:"refine-overview",className:"border border-gray-200 rounded"}),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(g,{path:"with-web3",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);