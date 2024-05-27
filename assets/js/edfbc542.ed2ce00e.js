"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95662],{58860:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(37953);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,m=d["".concat(s,".").concat(u)]||d[u]||g[u]||o;return t?a.createElement(m,r(r({ref:n},p),{},{components:t})):a.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},34464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});t(37953);var a=t(58860);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const l={title:"Kubernetes Terminated with exit code 1 error",description:'This article will help you troubleshoot the "Terminated with exit code 1" error in Kubernetes.',slug:"kubernetes-terminated-with-exit-code-1",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-31-exit-code-1/social.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/kubernetes-terminated-with-exit-code-1",source:"@site/blog/2024-01-31-exit-code-1.md",title:"Kubernetes Terminated with exit code 1 error",description:'This article will help you troubleshoot the "Terminated with exit code 1" error in Kubernetes.',date:"2024-01-31T00:00:00.000Z",formattedDate:"January 31, 2024",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:10.295,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Kubernetes Terminated with exit code 1 error",description:'This article will help you troubleshoot the "Terminated with exit code 1" error in Kubernetes.',slug:"kubernetes-terminated-with-exit-code-1",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-31-exit-code-1/social.png",hide_table_of_contents:!1},prevItem:{title:"Next.js vs React - A Beginner's Guide",permalink:"/blog/next-js-vs-react"},nextItem:{title:"How to Use JavaScript Slice Method",permalink:"/blog/javascript-slice"},relatedPosts:[{title:"Kubernetes Operators",description:"This article digs deep into the essence of Kubernetes operators, explaining their purpose, functionality, and how they are actually implemented.",permalink:"/blog/kubernetes-operators",formattedDate:"January 12, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.425,date:"2024-01-12T00:00:00.000Z"},{title:"Check Kubernetes Version - Advanced Use Cases with kubectl version",description:"Kubectl version is a very basic command, however, you might still face some errors like connection issues, version mismatches, or configuration problems. Here are some steps to debug these common errors.",permalink:"/blog/kubectl-version",formattedDate:"January 5, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.98,date:"2024-01-05T00:00:00.000Z"},{title:"Kubernetes vs Docker - A Detailed Comparison",description:"Explore an in-depth comparison between Docker and Kubernetes, focusing on their unique features, advantages, and ideal use scenarios.",permalink:"/blog/kubernetes-vs-docker",formattedDate:"January 26, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:14.36,date:"2024-01-26T00:00:00.000Z"}],authorPosts:[{title:"Unraveling the Kubernetes ImagePullBackOff Error",description:"We'll discuss the ImagePullBackOff error in Kubernetes, its causes, and how to resolve it.",permalink:"/blog/kubernetes-imagepullbackoff-error",formattedDate:"November 4, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.275,date:"2023-11-04T00:00:00.000Z"},{title:"Zsh and Bash",description:"We'll explore the unique features of these tools and their similarities and differences.",permalink:"/blog/zsh-vs-bash",formattedDate:"July 14, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:15.65,date:"2023-07-14T00:00:00.000Z"},{title:"Kubectl config set context Tutorial and Best Practices",description:"We'll discuss the kubectl config set-context command and how it can be used to manage contexts in Kubernetes. We'll also cover some best practices for managing contexts.",permalink:"/blog/kubectl-config-set-context",formattedDate:"October 27, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.835,date:"2023-10-27T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding Exit Code 1",id:"understanding-exit-code-1",level:2},{value:"What is an Exit Code",id:"what-is-an-exit-code",level:3},{value:"Common Scenarios Leading to Exit Code 1",id:"common-scenarios-leading-to-exit-code-1",level:3},{value:"Initial Steps for Troubleshooting",id:"initial-steps-for-troubleshooting",level:2},{value:"Checking Container Logs for Immediate Clues",id:"checking-container-logs-for-immediate-clues",level:3},{value:"Verifying Container and Application Configurations",id:"verifying-container-and-application-configurations",level:3},{value:"Advanced Diagnostic Techniques",id:"advanced-diagnostic-techniques",level:2},{value:"A. Application-Specific Debugging Tools",id:"a-application-specific-debugging-tools",level:3},{value:"Example for a Node.js Application:",id:"example-for-a-nodejs-application",level:5},{value:"B. Network and Dependency Checks",id:"b-network-and-dependency-checks",level:3},{value:"Example:",id:"example",level:4},{value:"C. Container Environment Issues",id:"c-container-environment-issues",level:3},{value:"Common Pitfalls in Container Setup",id:"common-pitfalls-in-container-setup",level:4},{value:"System and Network Considerations",id:"system-and-network-considerations",level:2},{value:"System-Level Logs",id:"system-level-logs",level:3},{value:"Network Configuration",id:"network-configuration",level:3},{value:"Firewall Rules",id:"firewall-rules",level:3},{value:"Best Practices to Avoid and Fix this Error",id:"best-practices-to-avoid-and-fix-this-error",level:2},{value:"Conclusion",id:"conclusion",level:2}],g={toc:d},u="wrapper";function m(e){var{components:n}=e,t=r(e,["components"]);return(0,a.yg)(u,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){i(e,n,t[n])}))}return e}({},g,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,'Getting an "Exit Code 1" error in Kubernetes is common and can be frustrating for developers. If you see this error, it means that something is wrong with your containerized application. In this article, we will get into the details of this error, look at some of the most common scenarios that cause it, and then give you a step-by-step plan for fixing it.'),(0,a.yg)("p",null,"Also, we will share with you some of the best practices to ensure that you identify and resolve this error swiftly. But first, let's start with understanding what exactly is an exit code and what is the significance of exit code 1."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#understanding-exit-code-1"},"Understanding Exit Code 1"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-an-exit-code"},"What is an Exit Code")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#common-scenarios-leading-to-exit-code-1"},"Common Scenarios Leading to Exit Code 1")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#initial-steps-for-troubleshooting"},"Initial Steps for Troubleshooting"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#checking-container-logs-for-immediate-clues"},"Checking Container Logs for Immediate Clues")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#verifying-container-and-application-configurations"},"Verifying Container and Application Configurations")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#advanced-diagnostic-techniques"},"Advanced Diagnostic Techniques"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#a-application-specific-debugging-tools"},"A. Application-Specific Debugging Tools"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#example-for-a-nodejs-application"},"Example for a Node.js Application:")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#b-network-and-dependency-checks"},"B. Network and Dependency Checks")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#c-container-environment-issues"},"C. Container Environment Issues"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#common-pitfalls-in-container-setup"},"Common Pitfalls in Container Setup")))))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#system-and-network-considerations"},"System and Network Considerations"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#system-level-logs"},"System-Level Logs")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#network-configuration"},"Network Configuration")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#firewall-rules"},"Firewall Rules")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#best-practices-to-avoid-and-fix-this-error"},"Best Practices to Avoid and Fix this Error"))),(0,a.yg)("h2",{id:"understanding-exit-code-1"},"Understanding Exit Code 1"),(0,a.yg)("h3",{id:"what-is-an-exit-code"},"What is an Exit Code"),(0,a.yg)("p",null,"Like on any Unix-like system, when a process inside a Kubernetes container stops running, the container will send an exit code to the Kubernetes system. An exit code of 0 typically indicates success, whereas any value other than zero, such as 1, indicates an error."),(0,a.yg)("p",null,"The presence of exit code 1 is typically indicative of an error. It says something went wrong with the execution of the containerized application but doesn't say what."),(0,a.yg)("h3",{id:"common-scenarios-leading-to-exit-code-1"},"Common Scenarios Leading to Exit Code 1"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Application Runtime Errors"),":\nExecution errors, such as a runtime exception or the failure to finish a critical task, can cause your application to exit with code 1. The application's internal tests typically discover that it is unable to operate properly, which leads to this."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'# Example Python snippet: Exiting with code 1 on a failed condition\n    if not critical_service_available():\n        print("Critical service is not available. Exiting.")\n        exit(1)\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Container Configuration Issues"),":\nMisconfiguration in your container's command or arguments can lead to immediate termination. For example, if the command you specified in your container spec doesn't exist or is incorrectly spelled, the container will exit with code 1."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'#Kubernetes YAML snippet with a typo in the command\n    containers:\n    - name: myapp\n      image: myapp:latest\n      command: ["/bin/sh", "-c", "exitt 1"]  # \'exitt\' is a typo\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Failed Health Checks"),":\nKubernetes can terminate a container that fails its liveness or readiness checks repeatedly. While this often leads to restarts rather than a direct exit code 1, it can contribute to a situation where the container is unable to stay running."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Dependency Issues Inside Containers"),":\nIf your containerized application has dependencies that are not met (e.g., missing libraries, inaccessible external services), this can cause the application to exit with code"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Resource Limit Constraints"),":\nContainers in Kubernetes have resource limits, and exceeding these can lead to termination. However, this usually results in an ",(0,a.yg)("inlineCode",{parentName:"p"},"OOMKilled")," error rather than an exit code 1, unless your application is explicitly designed to handle such scenarios with a custom exit code."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Improper Signal Handling"),":\nIf your application doesn't handle termination signals (",(0,a.yg)("inlineCode",{parentName:"p"},"SIGTERM"),") properly, Kubernetes' attempts to gracefully shut down the container might result in an abrupt exit with code 1."),(0,a.yg)("h2",{id:"initial-steps-for-troubleshooting"},"Initial Steps for Troubleshooting"),(0,a.yg)("h3",{id:"checking-container-logs-for-immediate-clues"},"Checking Container Logs for Immediate Clues"),(0,a.yg)("p",null,"Containers that exit with exit code 1 should be troubleshooted by checking their logs. Logs often contain container process output and can reveal why the process exited. Execute the command ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl logs")," to view container logs:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"    kubectl logs <your-pod-name>\n")),(0,a.yg)("p",null,"Replace ",(0,a.yg)("inlineCode",{parentName:"p"},"<your-pod-name>")," with the name of your pod. If your pod has more than one container, specify the container name."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"    kubectl logs <your-pod-name> -c <pods'container-name>\n  Here is an example output of the above command:\n\n      Error: Invalid configuration\n        at /app/server.js:20:21\n        at Layer.handle [as handle_request] (/app/node_modules/express/lib/router/layer.js:95:5)\n        ...\n    Process exited with status code 1\n")),(0,a.yg)("p",null,"This output indicates that there's an issue with the configuration, which is a good starting point for further investigation."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Expert tip"),": A container exiting multiple times with a non-zero exit code, such as ",(0,a.yg)("inlineCode",{parentName:"p"},"exit code 1"),", can lead to a ",(0,a.yg)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," state in Kubernetes. If you look at the below error logs, you can see ",(0,a.yg)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," which was caused because the container exited many times with exit code 1."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-31-exit-code-1/image3.png",alt:"describe pod error exit code 1"})),(0,a.yg)("h3",{id:"verifying-container-and-application-configurations"},"Verifying Container and Application Configurations"),(0,a.yg)("p",null,"Sometimes incorrect container or application configuration causes the error. Check your Kubernetes manifests and application configuration files. You can use the below command to see the details of your Kubernetes deployment:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"    kubectl get deployment <your-deployment-name> -o yaml\n")),(0,a.yg)("p",null,"To see configuration of a particular pod:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"    kubectl get pod <your-pod-name> -o yaml\n")),(0,a.yg)("p",null,"Look out for any misconfigurations in environment variables, command arguments, or volume mounts."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Expert Tips:"),"\nTo check the logs for a pod that has exited with an error, use the ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl logs")," command as described above. Additionally, you can check the events associated with the pod for any anomalies leading up to the termination:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl describe pod <pod-name>\n")),(0,a.yg)("p",null,"This command provides detailed information about the pod\u2019s lifecycle events, including errors leading to termination.\nThe below screenshot is what you might see in the output:"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-31-exit-code-1/image1.png",alt:"describe pod error exit code 1"})),(0,a.yg)("h2",{id:"advanced-diagnostic-techniques"},"Advanced Diagnostic Techniques"),(0,a.yg)("h3",{id:"a-application-specific-debugging-tools"},"A. Application-Specific Debugging Tools"),(0,a.yg)("p",null,"Each programming language or framework comes with its own set of debugging tools that can be leveraged to understand the nature of the error."),(0,a.yg)("h5",{id:"example-for-a-nodejs-application"},"Example for a Node.js Application:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"    # Install node inspect in the container and start the application with the inspect flag\n\n    kubectl exec -it <pod-name> -- npm install -g node-inspect\n    kubectl exec -it <pod-name> -- node --inspect-brk=0.0.0.0:9229 app.js\n")),(0,a.yg)("p",null,"Remember to expose the debugging port in the Dockerfile and Kubernetes deployment if not already done."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"    #Dockerfile snippet\n    expose 9229\n")),(0,a.yg)("p",null,"Below is example snippet for YAML file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"      #Kubernetes deployment snippet\n            ports:\n            - containerPort: 9229\n              name: debug\n              protocol: TCP\n")),(0,a.yg)("h3",{id:"b-network-and-dependency-checks"},"B. Network and Dependency Checks"),(0,a.yg)("p",null,"Check if the application's connection to external services or databases is properly configured. You can use ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl exec")," to run network checks from within the pod."),(0,a.yg)("h4",{id:"example"},"Example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"    # Check if the database is reachable\n\n    kubectl exec <pod-name> -- nc -zv <db-service-name> <db-port>\n")),(0,a.yg)("p",null,"If using an ORM or database client, enable verbose logging to capture detailed connection errors."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"// Example for a Node.js application using Sequelize\nconst sequelize = new Sequelize('database', 'username', 'password', {\n  host: 'db-service-name',\n  dialect: 'mysql',\n  logging: console.log,\n});\n")),(0,a.yg)("h3",{id:"c-container-environment-issues"},"C. Container Environment Issues"),(0,a.yg)("p",null,"Issues related to the container environment like Docker or Kubernetes can lead to exit code 1."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Common pitfalls include:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Misconfigured environment variables"),(0,a.yg)("li",{parentName:"ul"},"Incorrect file paths or permissions"),(0,a.yg)("li",{parentName:"ul"},"Resource limits being hit (memory, CPU)")),(0,a.yg)("p",null,"To diagnose these, check the container logs and describe events, use below mentioned command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"    # Retrieve the logs of the terminated container\n\n    kubectl logs <your-pod-name> --previous\n")),(0,a.yg)("h4",{id:"common-pitfalls-in-container-setup"},"Common Pitfalls in Container Setup"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Environment Variables:")," Ensure that all required environment variables are set. You can check the current environment variables with below command:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"kubectl exec <your-pod-name> -- env\n")),(0,a.yg)("p",{parentName:"li"},"Below screenshot shows all the env variables for a PostgreSQL installation."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-31-exit-code-1/image2.png",alt:"showing env variables of postgresql installation"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"File Permissions:")," If your application reads from or writes to files within the container, permissions might cause issues."))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"    # Check file permissions through below command\n    kubectl exec <your-pod-name> -- ls -l /path/to/check\n")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Resource Limits:")," Kubernetes allows you to set resource limits on your containers. If these are too low, your application might be terminated.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'  # Kubernetes deployment snippet to set resource limits\n    resources:\n      limits:\n        cpu: "1"\n        memory: "1024Mi"\n')),(0,a.yg)("h2",{id:"system-and-network-considerations"},"System and Network Considerations"),(0,a.yg)("p",null,"An application-level error is indicated when a Kubernetes pod terminates with the error 'Terminated with exit code 1'. However, it's critical to look into problems at the system and network levels that might be indirectly causing this issue."),(0,a.yg)("h3",{id:"system-level-logs"},"System-Level Logs"),(0,a.yg)("p",null,"First things first: look in the system logs. Lack of resources is a typical reason for abrupt termination.\n",(0,a.yg)("strong",{parentName:"p"},"Steps:")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Find the Kubernetes node where the pod is running."),(0,a.yg)("li",{parentName:"ol"},"Use command ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl describe node <node-name>")," to get a summary of the node's status."),(0,a.yg)("li",{parentName:"ol"},"Check for any events or conditions indicating resource bottleneck."),(0,a.yg)("li",{parentName:"ol"},"Check individual resource usage through below command:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Memory: ",(0,a.yg)("inlineCode",{parentName:"li"},"free -h")),(0,a.yg)("li",{parentName:"ul"},"CPU: ",(0,a.yg)("inlineCode",{parentName:"li"},"top")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"htop")),(0,a.yg)("li",{parentName:"ul"},"Disk: ",(0,a.yg)("inlineCode",{parentName:"li"},"df -h"))))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Tip:")," Pay close attention to ",(0,a.yg)("inlineCode",{parentName:"p"},"OOMKilled")," events, which indicate the pod was killed due to Out Of Memory."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Screenshot/Config Required:")," Capture a screenshot of the system log where any resource-related issues are clearly indicated. For instance, if the ",(0,a.yg)("inlineCode",{parentName:"p"},"dmesg")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"/var/log/syslog")," logs show ",(0,a.yg)("inlineCode",{parentName:"p"},"Out of memory: Killed process"),", it's a definite clue."),(0,a.yg)("h3",{id:"network-configuration"},"Network Configuration"),(0,a.yg)("p",null,"Next, examine the network configuration, as these can disrupt communication with the pod or between the containers."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Steps:")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Verify the network policies in Kubernetes by running the below command:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"kubectl get networkpolicies --all-namespaces")))),(0,a.yg)("li",{parentName:"ol"},"You need to make sure that the pod's network interface configuration aligns with the cluster's network."),(0,a.yg)("li",{parentName:"ol"},"Check if there are any firewall rules on the node that are blocking the traffic. Use below commands to verify that:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"sudo iptables -L -n")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"sudo ufw status"))))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Expert tip:")," Keep eye on the dropped packets in the firewall logs or use ",(0,a.yg)("inlineCode",{parentName:"p"},"tcpdump")," to trace network packets."),(0,a.yg)("h3",{id:"firewall-rules"},"Firewall Rules"),(0,a.yg)("p",null,"Firewalls can also block traffic that your application needs to route. You need to make sure that your firewall rules are not in conflict with the network requirements of your application."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Steps:")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"List current firewall rules with ",(0,a.yg)("inlineCode",{parentName:"li"},"iptables")," or your firewall management tool."),(0,a.yg)("li",{parentName:"ol"},"Cross-reference the required ports for your application with the allowed ports in the firewall."),(0,a.yg)("li",{parentName:"ol"},"Check for any recent modifications in the firewall rules that coincide with the onset of the issue.")),(0,a.yg)("p",null,"To list iptables rules, the following command can be used:\n",(0,a.yg)("inlineCode",{parentName:"p"},"sudo iptables -S")),(0,a.yg)("h2",{id:"best-practices-to-avoid-and-fix-this-error"},"Best Practices to Avoid and Fix this Error"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Validate Container Entrypoint"),": Ensure the container's entrypoint script is executable and has the correct shebang line (",(0,a.yg)("inlineCode",{parentName:"li"},"#!/bin/bash"),"). A common error is '",(0,a.yg)("inlineCode",{parentName:"li"},"No such file or directory"),"' if the entrypoint is not found or not executable."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Check Application Dependencies"),": Verify all required libraries and dependencies are present. Missing dependencies often lead to '",(0,a.yg)("inlineCode",{parentName:"li"},"Library not found"),"' errors within the container."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Inspect Application Code"),": Review recent code changes for possible mistakes. Errors such as '",(0,a.yg)("inlineCode",{parentName:"li"},"Undefined variable"),"' or '",(0,a.yg)("inlineCode",{parentName:"li"},"Syntax error"),"' in logs often point to new code issues."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Utilize Liveness Probes"),": Configure liveness probes in Kubernetes. Pods frequently restarting, as shown by ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl get events"),", suggest failing liveness checks."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Analyze Logs"),": Use ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl logs <pod-name>")," for immediate error output. '",(0,a.yg)("inlineCode",{parentName:"li"},"Permission denied"),"' messages could indicate execution permission issues."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Monitor Resource Usage"),": Set up alerts for memory and CPU to catch overuse. Pods terminated with '",(0,a.yg)("inlineCode",{parentName:"li"},"OOMKilled"),"' status have exceeded their memory limits."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Handle Signals Gracefully"),": Ensure your application handles signals like SIGTERM for proper shutdown. Logs stating '",(0,a.yg)("inlineCode",{parentName:"li"},"Signal received: SIGTERM"),"' without a graceful exit can mean improper signal handling."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Avoid Hardcoded Paths"),": Use relative paths or environment variables instead. '",(0,a.yg)("inlineCode",{parentName:"li"},"File not found"),"' errors often occur due to hardcoded paths that don't exist in the container's filesystem."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Use Init Containers"),": Leverage init containers to ensure the environment is correctly prepared before the main application starts. Failure logs in ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl describe pod <pod-name>")," for init containers indicate issues with environment setup."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Test Locally"),": Run your container locally to identify discrepancies. '",(0,a.yg)("inlineCode",{parentName:"li"},"Environment variable not set"),"' errors may arise due to differences between local and container environments.")),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,'In this article, we have walked through the most common causes of the "Terminated with exit code 1" error in Kubernetes and shown you how to fix them. Whether it is a careless typo in the YAML file, a resource bottleneck, or an application\'s internal error, you can follow the steps in this guide and get the error resolved. Remember that the most reliable systems are made through the mistakes and successes of fixing problems in the real world. Have fun fixing things!'))}m.isMDXComponent=!0}}]);