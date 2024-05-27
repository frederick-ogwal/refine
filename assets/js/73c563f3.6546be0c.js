"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45933],{58860:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var n=t(37953);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(t),d=a,y=g["".concat(l,".").concat(d)]||g[d]||p[d]||o;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[g]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},32304:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>g});t(37953);var n=t(58860);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const s={title:"Getting Started with Terraform on AWS",description:"We'll walk through getting started with Terraform specifically for infrastructure provisioning on Amazon Web Services (AWS).",slug:"terraform-aws",authors:"shingai_zivuku",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-28-terraform-aws/social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/terraform-aws",source:"@site/blog/2023-11-28-terraform-aws.md",title:"Getting Started with Terraform on AWS",description:"We'll walk through getting started with Terraform specifically for infrastructure provisioning on Amazon Web Services (AWS).",date:"2023-11-28T00:00:00.000Z",formattedDate:"November 28, 2023",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:6.465,hasTruncateMarker:!1,authors:[{name:"Shangai Ziviku",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"shingai_zivuku"}],frontMatter:{title:"Getting Started with Terraform on AWS",description:"We'll walk through getting started with Terraform specifically for infrastructure provisioning on Amazon Web Services (AWS).",slug:"terraform-aws",authors:"shingai_zivuku",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-28-terraform-aws/social.png",hide_table_of_contents:!1},prevItem:{title:"What Exit Code 137 means for Kubernetes",permalink:"/blog/kubernetes-exit-code-137"},nextItem:{title:"A Complete guide to pnpm",permalink:"/blog/how-to-use-pnpm"},relatedPosts:[{title:"Getting started with Astro Framework",description:"We will learn how to set up Astrojs, create a new project, and basics.",permalink:"/blog/astro-js-guide",formattedDate:"February 7, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:16.44,date:"2024-02-07T00:00:00.000Z"},{title:"Kubernetes vs Docker - A Detailed Comparison",description:"Explore an in-depth comparison between Docker and Kubernetes, focusing on their unique features, advantages, and ideal use scenarios.",permalink:"/blog/kubernetes-vs-docker",formattedDate:"January 26, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:14.36,date:"2024-01-26T00:00:00.000Z"},{title:"How to Use Nodemon to Automatically Restart Node.js Applications",description:"This guide shows you how to install and use Nodemon to streamline your development process.",permalink:"/blog/nodemon",formattedDate:"April 30, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:5.845,date:"2024-04-30T00:00:00.000Z"}],authorPosts:[]},u={authorsImageUrls:[void 0]},g=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"AWS Account and Credentials",id:"aws-account-and-credentials",level:3},{value:"AWS CLI",id:"aws-cli",level:3},{value:"Terraform",id:"terraform",level:3},{value:"Configuring AWS Credentials",id:"configuring-aws-credentials",level:2},{value:"Access Keys and Secret Keys",id:"access-keys-and-secret-keys",level:3},{value:"~/.aws/credentials File",id:"awscredentials-file",level:3},{value:"Creating a Simple Configuration",id:"creating-a-simple-configuration",level:2},{value:"Modifying Infrastructure",id:"modifying-infrastructure",level:2},{value:"Cleaning Up",id:"cleaning-up",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:g},d="wrapper";function y(e){var{components:r}=e,t=i(e,["components"]);return(0,n.yg)(d,o(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},p,t),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"Managing infrastructure across multiple environments and regions can be an operational headache for teams as applications scale. Provisioning resources manually is boring and time-consuming while scripting the process requires significant engineering effort."),(0,n.yg)("p",null,"Infrastructure as code (IaC) tools like HashCorp's Terraform provides a compelling solution - allowing you to define reusable configurations for spinning up everything from storage buckets to Kubernetes clusters."),(0,n.yg)("p",null,"In this beginner's guide, I will walk through getting started with Terraform specifically for infrastructure provisioning on Amazon Web Services (AWS). I will cover the prerequisites, configuring access to AWS, writing a simple Terraform configuration, modifying your infrastructure, and then cleaning up."),(0,n.yg)("p",null,"Whether you're already using AWS or looking to explore it with an IaC approach, this article will equip you with the fundamentals for provisioning just about any infrastructure you need."),(0,n.yg)("p",null,"Steps we'll cover:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#aws-account-and-credentials"},"AWS Account and Credentials")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#aws-cli"},"AWS CLI")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#terraform"},"Terraform")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#configuring-aws-credentials"},"Configuring AWS Credentials"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#access-keys-and-secret-keys"},"Access Keys and Secret Keys")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#awscredentials-file"},"~/.aws/credentials File")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#creating-a-simple-configuration"},"Creating a Simple Configuration")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#modifying-infrastructure"},"Modifying Infrastructure"))),(0,n.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.yg)("p",null,"Before you can start using Terraform to manage infrastructure on AWS, you need a few prerequisites:"),(0,n.yg)("h3",{id:"aws-account-and-credentials"},"AWS Account and Credentials"),(0,n.yg)("p",null,"For this guide, you need an AWS account. Accounts are free to ",(0,n.yg)("a",{parentName:"p",href:"https://portal.aws.amazon.com/gp/aws/developer/registration/index.html"},"sign up")," for. As part of the account creation process, you will create a root user who has complete access to the account."),(0,n.yg)("p",null,"For security best practices, you will be creating an IAM user with more limited permissions for Terraform to use."),(0,n.yg)("p",null,"Once you have an AWS account, under the IAM service, create a new IAM user. Be sure to save the access key and secret access key. These keys will be used by Terraform to authenticate and interact with your AWS account."),(0,n.yg)("h3",{id:"aws-cli"},"AWS CLI"),(0,n.yg)("p",null,"The AWS CLI tool allows you to manage AWS services from the command line. Install this and configure it with your access keys for Terraform to provision resources."),(0,n.yg)("p",null,"Download and ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"install the CLI")," for your operating system. Once installed, run ",(0,n.yg)("inlineCode",{parentName:"p"},"aws configure")," and enter your access keys when prompted."),(0,n.yg)("h3",{id:"terraform"},"Terraform"),(0,n.yg)("p",null,"Finally, go to ",(0,n.yg)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/install?product_intent=terraform"},"terraform site")," and download the Terraform binary for your system. Terraform is distributed as a single binary, so once downloaded you can run Terraform commands from your terminal."),(0,n.yg)("p",null,"Be sure to add the Terraform binary to your PATH environment variable so it is accessible system-wide."),(0,n.yg)("h2",{id:"configuring-aws-credentials"},"Configuring AWS Credentials"),(0,n.yg)("p",null,"Now that you have your AWS account set up and Terraform installed, you need to ",(0,n.yg)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs#authentication-and-configuration"},"configure your access credentials")," for Terraform to use when interacting with AWS."),(0,n.yg)("p",null,"Here are some of the options for specifying credentials:"),(0,n.yg)("h3",{id:"access-keys-and-secret-keys"},"Access Keys and Secret Keys"),(0,n.yg)("p",null,"When you created your IAM user, AWS generated access and secret access keys for you. These keys act as username and password for programmatically interacting with AWS through their API."),(0,n.yg)("p",null,"You can pass these directly to Terraform through environment variables:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"export AWS_ACCESS_KEY_ID=<your_access_key>\n")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"export AWS_SECRET_ACCESS_KEY=<your_secret_key>\n")),(0,n.yg)("p",null,"Terraform will check these environment variables when needing credentials."),(0,n.yg)("h3",{id:"awscredentials-file"},"~/.aws/credentials File"),(0,n.yg)("p",null,"Another option is to save your keys in a local AWS credentials file that AWS CLI checks by default:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"[default]\naws_access_key_id = <your_access_key>\naws_secret_access_key = <your_secret_key>\n")),(0,n.yg)("p",null,"This file is located at ",(0,n.yg)("inlineCode",{parentName:"p"},"~/.aws/credentials")," on Linux/macOS. Terraform automatically checks this file for credentials to use."),(0,n.yg)("p",null,"With credentials configured through either approach, Terraform is now ready to build infrastructure on your AWS account."),(0,n.yg)("h2",{id:"creating-a-simple-configuration"},"Creating a Simple Configuration"),(0,n.yg)("p",null,"Now that Terraform can access your AWS account, let's write your first Terraform configuration file to deploy infrastructure. Terraform code is written in HCL (HashCorp Configuration Language) syntax."),(0,n.yg)("p",null,"Configuration files end in ",(0,n.yg)("inlineCode",{parentName:"p"},".tf")," and define providers and resources. You will specify that you want to use AWS as your provider."),(0,n.yg)("p",null,"Following the ",(0,n.yg)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs"},"AWS provider")," documentation, create ",(0,n.yg)("inlineCode",{parentName:"p"},"main.tf")," with the following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'terraform {\n  required_providers {\n    aws = {\n      source  = "hashicorp/aws"\n      version = "~> 5.0"\n    }\n  }\n}\n\nprovider "aws" {\n  region = "us-east-1"\n}\n')),(0,n.yg)("p",null,"Then define an AWS EC2 resource instance:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'resource "aws_instance" "refine-dev" {\n  ami           = "ami-0fc5d935ebf8bc3bc"\n  instance_type = "t2.micro"\n\n  tags = {\n    Name = "refine-dev"\n  }\n}\n')),(0,n.yg)("p",null,"This configures an EC2 instance in the us-east-1 region using a free Linux image. Put together, your configuration file should look like the following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'terraform {\n  required_providers {\n    aws = {\n      source  = "hashicorp/aws"\n      version = "~> 5.0"\n    }\n  }\n}\n\nprovider "aws" {\n  region = "us-east-1"\n}\n\nresource "aws_instance" "refine-dev" {\n  ami           = "ami-0fc5d935ebf8bc3bc"\n  instance_type = "t2.micro"\n}\n')),(0,n.yg)("p",null,"With your provider and initial resource defined, run:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"terraform init\n")),(0,n.yg)("p",null,"This will initialize your Terraform working directory complete with plugins for the AWS provider."),(0,n.yg)("p",null,"Then run:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"terraform plan\n")),(0,n.yg)("p",null,"Terraform reads your config file and outlines what infrastructure it will create. If the plan looks good, it's time to apply."),(0,n.yg)("p",null,"Run ",(0,n.yg)("inlineCode",{parentName:"p"},"terraform apply")," and Terraform will call out to AWS and create the EC2 instance."),(0,n.yg)("h2",{id:"modifying-infrastructure"},"Modifying Infrastructure"),(0,n.yg)("p",null,"A key advantage of infrastructure as code is how you can evolve your stack over time through code changes."),(0,n.yg)("p",null,"Let's make a small update to your configuration by adding some AWS tags into your resource:"),(0,n.yg)("p",null,'resource "aws_instance" "refine-dev" {\nami = "ami-0fc5d935ebf8bc3bc"\ninstance_type = "t2.micro"'),(0,n.yg)("p",null,'tags = {\nName = "refine-dev"\n}\n}'),(0,n.yg)("p",null,"After saving this update in your Terraform file, run:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"terraform plan\n")),(0,n.yg)("p",null,"Terraform will output the changes needed to add these tags to your EC2 instance."),(0,n.yg)("p",null,"If they look good, apply with:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,n.yg)("p",null,"Your instance will then be updated in place, adding a name to your instance:"),(0,n.yg)("p",null,"Terraform does this immutably by destroying the instance and recreating it, assigning it the same IP address throughout this process."),(0,n.yg)("p",null,"This immutable approach ensures consistency across updates and provides more visibility than manually editing existing resources in the AWS console."),(0,n.yg)("p",null,"By coding your infrastructure, you gain improved collaboration, version control integration, and automation capabilities for managing changes."),(0,n.yg)("h2",{id:"cleaning-up"},"Cleaning Up"),(0,n.yg)("p",null,"Once you\u2019re done experimenting with your infrastructure, it's best practice to clean up the resources you've created so you don't incur unnecessary charges."),(0,n.yg)("p",null,"Terraform makes this very simple - just run:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"terraform destroy\n")),(0,n.yg)("p",null,"Terraform will output all resources that will be destroyed and prompt for confirmation."),(0,n.yg)("p",null,"Type yes and Terraform will delete all the related infrastructure on AWS - EC2 instances, networking components, and security groups. Here, Terraform will delete your EC2 instance."),(0,n.yg)("p",null,"This is a key advantage over console-based provisioning. With all your infrastructure described in declarative config files, Terraform knows exactly what needs to be deleted based on the state. You don't have to manually track down orphaned resources or decompress tangled dependencies."),(0,n.yg)("p",null,"Properly cleaning up infrastructure keeps your accounts lean, extends the experience to production-grade workflows, and surfaces gaps in your understanding. Make sure to always destroy your test environments when finished experimenting!"),(0,n.yg)("p",null,"You can recreate your stack easily at any time by running ",(0,n.yg)("inlineCode",{parentName:"p"},"terraform apply"),". Your configuration code serves as the single source of truth."),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"Through this getting started, hopefully, you now appreciate why contractors, startups, and enterprises alike are adopting IaC practices with Terraform. I touched on several benefits like configuration files serving as the single source of truth."),(0,n.yg)("p",null,"Need to recreate something from last month? Just reapply an old config commit instead of decoding tribal knowledge and runbooks. Changes systematically pass through pull requests and can integrate with CI/CD pipelines just like application code changes. No more snowflake production hotfixes!"),(0,n.yg)("p",null,"So, what's next for you? Start by version-controlling your Terraform configurations, making them accessible to your team, and gradually converting more of your cloud infrastructure to code. As you gain experience, you'll be ready to use Terraform to manage infrastructure for production applications."),(0,n.yg)("p",null,"Thanks for following along with this getting started guide - hopefully you\u2019re feeling empowered to start down the path of harnessing infrastructure as code! What will you build next?"))}y.isMDXComponent=!0}}]);