"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91335],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>p});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(i),p=o,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||a;return i?n.createElement(h,r(r({ref:t},c),{},{components:i})):n.createElement(h,r({ref:t},c))}));function p(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var m=2;m<a;m++)r[m]=i[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},21197:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>m,toc:()=>d});i(67294);var n=i(3905);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}const s={title:"What Exit Code 137 means for Kubernetes",description:"We'll discuss what exit code 137 means for Kubernetes, how it reflects the operating system's intervention due to memory concerns, and how to mitigate memory issues.",slug:"kubernetes-exit-code-137",authors:"muhammad_khabbab",tags:["kubernetes","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-29-exit-code-137/social.png",hide_table_of_contents:!1},l=void 0,m={permalink:"/blog/kubernetes-exit-code-137",source:"@site/blog/2023-11-29-exit-code-137.md",title:"What Exit Code 137 means for Kubernetes",description:"We'll discuss what exit code 137 means for Kubernetes, how it reflects the operating system's intervention due to memory concerns, and how to mitigate memory issues.",date:"2023-11-29T00:00:00.000Z",formattedDate:"November 29, 2023",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:10.26,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"What Exit Code 137 means for Kubernetes",description:"We'll discuss what exit code 137 means for Kubernetes, how it reflects the operating system's intervention due to memory concerns, and how to mitigate memory issues.",slug:"kubernetes-exit-code-137",authors:"muhammad_khabbab",tags:["kubernetes","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-29-exit-code-137/social.png",hide_table_of_contents:!1},prevItem:{title:"GraphQL vs REST - Key Differences and Use Cases",permalink:"/blog/graphql-vs-rest"},nextItem:{title:"Getting Started with Terraform on AWS",permalink:"/blog/terraform-aws"},relatedPosts:[{title:"Check Kubernetes Version - Advanced Use Cases with kubectl version",description:"Kubectl version is a very basic command, however, you might still face some errors like connection issues, version mismatches, or configuration problems. Here are some steps to debug these common errors.",permalink:"/blog/kubectl-version",formattedDate:"January 5, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.98,date:"2024-01-05T00:00:00.000Z"},{title:"Bun vs. Node.js",description:"We'll go over the new Bun runtime that has created a buzz in the tech space lately.",permalink:"/blog/bun-js-vs-node",formattedDate:"June 4, 2023",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:9.315,date:"2023-06-04T00:00:00.000Z"},{title:"Getting Started with Terraform on AWS",description:"We'll walk through getting started with Terraform specifically for infrastructure provisioning on Amazon Web Services (AWS).",permalink:"/blog/terraform-aws",formattedDate:"November 28, 2023",authors:[{name:"Shangai Ziviku",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"shingai_zivuku"}],readingTime:6.465,date:"2023-11-28T00:00:00.000Z"}],authorPosts:[{title:"Unraveling the Kubernetes ImagePullBackOff Error",description:"We'll discuss the ImagePullBackOff error in Kubernetes, its causes, and how to resolve it.",permalink:"/blog/kubernetes-imagepullbackoff-error",formattedDate:"November 4, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.275,date:"2023-11-04T00:00:00.000Z"},{title:"Kubernetes Image Pull Policy - A Detailed Guide",description:"Image pull policy in Kubernetes is a strategic decision that impacts applications' efficiency, reliability, and security.",permalink:"/blog/kubernetes-image-pull-policy",formattedDate:"January 3, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.045,date:"2024-01-03T00:00:00.000Z"},{title:"Kubernetes Statefulset vs Deployment with Examples",description:"We'll discuss the practical differences between Deployments and StatefulSets.",permalink:"/blog/kubernetes-statefulset-vs-deployment",formattedDate:"January 4, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.095,date:"2024-01-04T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"What exit code 137 means for Kubernetes",id:"what-exit-code-137-means-for-kubernetes",level:3},{value:"Importance of troubleshooting this exit code for maintaining a stable environment",id:"importance-of-troubleshooting-this-exit-code-for-maintaining-a-stable-environment",level:3},{value:"Background: Exit Codes Explained",id:"background-exit-codes-explained",level:2},{value:"What are exit codes and their significance?",id:"what-are-exit-codes-and-their-significance",level:3},{value:"Common exit codes and what they generally indicate",id:"common-exit-codes-and-what-they-generally-indicate",level:3},{value:"Dive into Exit Code 137",id:"dive-into-exit-code-137",level:2},{value:"Meaning and implications of exit code 137",id:"meaning-and-implications-of-exit-code-137",level:3},{value:"How it reflects the operating system&#39;s intervention due to memory concerns",id:"how-it-reflects-the-operating-systems-intervention-due-to-memory-concerns",level:3},{value:"Kubernetes and Exit Code 137",id:"kubernetes-and-exit-code-137",level:2},{value:"How Kubernetes pods display this exit code",id:"how-kubernetes-pods-display-this-exit-code",level:3},{value:"Importance of the OOMKilled status in Kubernetes",id:"importance-of-the-oomkilled-status-in-kubernetes",level:3},{value:"Common Causes for Memory Issues in Containers",id:"common-causes-for-memory-issues-in-containers",level:2},{value:"Inappropriately configured memory requests and limits",id:"inappropriately-configured-memory-requests-and-limits",level:3},{value:"Presence of an application memory leak",id:"presence-of-an-application-memory-leak",level:3},{value:"Surging user demands leading to increased memory consumption",id:"surging-user-demands-leading-to-increased-memory-consumption",level:3},{value:"Steps to Mitigate Memory Issues",id:"steps-to-mitigate-memory-issues",level:2},{value:"Importance of setting memory limits",id:"importance-of-setting-memory-limits",level:3},{value:"Example of a Kubernetes pod configuration with appropriate memory settings",id:"example-of-a-kubernetes-pod-configuration-with-appropriate-memory-settings",level:3},{value:"Techniques to Investigate Application Memory Consumption",id:"techniques-to-investigate-application-memory-consumption",level:2},{value:"Monitoring and correlating memory usage with traffic loads",id:"monitoring-and-correlating-memory-usage-with-traffic-loads",level:3},{value:"Differentiating between memory spikes and consistent memory growth",id:"differentiating-between-memory-spikes-and-consistent-memory-growth",level:3},{value:"Approaches to identify memory leaks and high memory consumption functions",id:"approaches-to-identify-memory-leaks-and-high-memory-consumption-functions",level:3},{value:"Best Practices and Recommendations",id:"best-practices-and-recommendations",level:2},{value:"Importance of proactive monitoring",id:"importance-of-proactive-monitoring",level:3},{value:"Benefits of setting appropriate memory limits and requests",id:"benefits-of-setting-appropriate-memory-limits-and-requests",level:3},{value:"Regularly auditing and optimizing application code",id:"regularly-auditing-and-optimizing-application-code",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d};function p(e){var{components:t}=e,i=r(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){o(e,t,i[t])}))}return e}({},u,i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("h3",{id:"what-exit-code-137-means-for-kubernetes"},"What exit code 137 means for Kubernetes"),(0,n.kt)("p",null,"Exit code 137 is a signal that occurs when a container's memory exceeds the memory limit provided in the pod specification. When a container consumes too much memory, Kubernetes kills it to protect it from consuming too many resources on the node. This ensures that other containers on the same node are able to keep running normally."),(0,n.kt)("p",null,"Steps we'll cover:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#dive-into-exit-code-137"},"Dive into Exit Code 137")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#kubernetes-and-exit-code-137"},"Kubernetes and Exit Code 137")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#common-causes-for-memory-issues-in-containers"},"Common Causes for Memory Issues in Containers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#steps-to-mitigate-memory-issues"},"Steps to Mitigate Memory Issues")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#techniques-to-investigate-application-memory-consumption"},"Techniques to Investigate Application Memory Consumption")),(0,n.kt)("li",{parentName:"ul"})),(0,n.kt)("h3",{id:"importance-of-troubleshooting-this-exit-code-for-maintaining-a-stable-environment"},"Importance of troubleshooting this exit code for maintaining a stable environment"),(0,n.kt)("p",null,"Troubleshooting this issue will reduce your maintenance overhead and help prevent inconsistencies caused by unexpected service interruptions. However, there are some causes of exit code 137 that may be specific to your environment, but most of the time, you can solve it using a simple troubleshooting procedure. Always remember that any problem that causes disruption is a business loss. We must be vigilant about this issue and attempt to permanently resolve it."),(0,n.kt)("h2",{id:"background-exit-codes-explained"},"Background: Exit Codes Explained"),(0,n.kt)("h3",{id:"what-are-exit-codes-and-their-significance"},"What are exit codes and their significance?"),(0,n.kt)("p",null,"When a container terminates, container engines utilize exit codes to report why it was terminated. Exit codes serve as a way to inform the user, operating system, and other applications about why the process was terminated. Each code is a number ranging from 0 to 255. Codes below 125 have application-specific meanings, whereas higher values have special meanings."),(0,n.kt)("h3",{id:"common-exit-codes-and-what-they-generally-indicate"},"Common exit codes and what they generally indicate"),(0,n.kt)("p",null,"Container failures are one of the most common causes of Kubernetes pod exceptions, and understanding container exit codes will assist you in determining the root cause of pod failures while troubleshooting.\n",(0,n.kt)("strong",{parentName:"p"},"Containers most commonly utilize the following exit codes:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Error Codes"),(0,n.kt)("th",{parentName:"tr",align:null},"What they indicate"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Exit Code 0"),(0,n.kt)("td",{parentName:"tr",align:null},"This Exit Code is triggered by developers when they terminate their container on purpose once a task is completed. Exit Code 0 technically indicates that the foreground process is not associated with a specific container.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Exit Code 1"),(0,n.kt)("td",{parentName:"tr",align:null},"This Exit Code indicates that the container stopped due to an application error or an incorrect image specification reference.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Exit Code 125"),(0,n.kt)("td",{parentName:"tr",align:null},"Exit Code 125 indicates that the container is being run by the command. In the system shell, for example, the docker run was invoked but did not execute correctly.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Exit Code 126"),(0,n.kt)("td",{parentName:"tr",align:null},"Exit Code 126 indicates that the command used for a container specification could not be invoked. In a continuous integration script used to run a container, this is often the cause of a missing dependency or error.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Exit Code 127"),(0,n.kt)("td",{parentName:"tr",align:null},"Exit Code 127 shows that a command used in the container specification points to a file or directory that doesn't exist.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Exit Code 128"),(0,n.kt)("td",{parentName:"tr",align:null},"Exit Code 128 refers to the fact that the code running from your container has successfully completed an exit command but was not able to produce a valid exit code.")))),(0,n.kt)("h2",{id:"dive-into-exit-code-137"},"Dive into Exit Code 137"),(0,n.kt)("h3",{id:"meaning-and-implications-of-exit-code-137"},"Meaning and implications of exit code 137"),(0,n.kt)("p",null,"The out-of-memory (OOM) killer is an operating system's mechanism used to terminate running processes when there is not enough available memory, and thus, it generates the exit code 137.\n",(0,n.kt)("strong",{parentName:"p"},"Different implications are associated with an application or service in a pod when it is terminated with exit code 137, and these implications include the following:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Termination of a pod may have impacts on the service that is being provided by the pod."),(0,n.kt)("li",{parentName:"ol"},"Data can be lost if the process running inside a container doesn't checkpoint properly when the container is terminated."),(0,n.kt)("li",{parentName:"ol"},"The pod is not terminated, but the performance of the application or service that is running in the pod might be affected when too much memory is utilized.")),(0,n.kt)("h3",{id:"how-it-reflects-the-operating-systems-intervention-due-to-memory-concerns"},"How it reflects the operating system's intervention due to memory concerns"),(0,n.kt)("p",null,"When an operating system kills a process in the background, it sends a signal to the process requesting it to terminate safely. In OOM, there is a signal with number 9 that is alternatively referred to as SIGKILL. By adding signal number 9 to 128, the exit code will become 137. That's why exit code 137 reflects the OS intervention triggered due to memory issues.\n",(0,n.kt)("strong",{parentName:"p"},"The below output shows that the 'sample-pod' has been terminated with exit code 137:")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-29-exit-code-137/Kube_Exit_1.png",alt:"kubernetes exit code 137"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"kubernetes-and-exit-code-137"},"Kubernetes and Exit Code 137"),(0,n.kt)("h3",{id:"how-kubernetes-pods-display-this-exit-code"},"How Kubernetes pods display this exit code"),(0,n.kt)("p",null,"Kubernetes can kill any container in the cluster when it reaches its memory limit and mark it with the 'OOMKilled' status, which means that the process was killed due to an 'out-of-memory' condition. The exit code for this error is 137. Your pods may experience this issue with their status labeled as 'OOMKilled' that can be viewed using the command ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl get pods"),"."),(0,n.kt)("h3",{id:"importance-of-the-oomkilled-status-in-kubernetes"},"Importance of the OOMKilled status in Kubernetes"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"'OOMKilled' status allows one to find out if pods are occupying more memory space than required. Providing such a type of data is very important in diagnosing performance bottlenecks and may also avoid future OOM kills."),(0,n.kt)("li",{parentName:"ol"},"This, in turn, will help you identify the cause of service interruption. If a pod ends up being terminated because it is running out of memory, then the service from that pod will also be affected. This status enables problem identification and rectification."),(0,n.kt)("li",{parentName:"ol"},"It also helps in more efficient use of resources. For Example, it allows you to identify which pods take up a lot of space, and that enables better distribution of resources for smoother operations.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The output below shows the 'OOMKilled' Status after running the '",(0,n.kt)("inlineCode",{parentName:"strong"},"kubectl get pods"),"' command:")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-29-exit-code-137/Kube_Exit_2.png",alt:"kubernetes exit code 137"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"common-causes-for-memory-issues-in-containers"},"Common Causes for Memory Issues in Containers"),(0,n.kt)("h3",{id:"inappropriately-configured-memory-requests-and-limits"},"Inappropriately configured memory requests and limits"),(0,n.kt)("p",null,"One common cause is an inappropriate setting of the memory limit value that is defined in the container's manifest. This shows the size of the container's maximum usable memory. If a pod gets assigned lesser memory than it would require, it tries to exceed its limits by using some additional amount of memory, and that results in an OOMKilled event. Additionally, there is a memory request value used to specify the minimum amount of memory required for a pod initialization and then run it. If the node doesn't have enough memory for pod requests to be fulfilled, it will not schedule a pod on that node."),(0,n.kt)("h3",{id:"presence-of-an-application-memory-leak"},"Presence of an application memory leak"),(0,n.kt)("p",null,"A memory leak in applications is another big reason for an OOMKilled event. Memory leaks happen when an application uses up memory but then does not release it to the system after it has finished using it. It can cause the application's memory usage to increase over time, ultimately terminating the pod with exit code 137."),(0,n.kt)("h3",{id:"surging-user-demands-leading-to-increased-memory-consumption"},"Surging user demands leading to increased memory consumption"),(0,n.kt)("p",null,"At times, when a pod is getting more user requests or traffic than usual, its memory usage may shoot up unexpectedly. This situation will make the pod use more memory than allowed, and after that, it will start experiencing memory issues."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The Configuration below highlights memory requests and limits:")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-29-exit-code-137/Kube_Exit_3.png",alt:"kubernetes exit code 137"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"steps-to-mitigate-memory-issues"},"Steps to Mitigate Memory Issues"),(0,n.kt)("h3",{id:"importance-of-setting-memory-limits"},"Importance of setting memory limits"),(0,n.kt)("p",null,"The application may need more memory than it was initially provided to accommodate a heavier load. Therefore, increasing the container's memory limit in the pod specification can help solve the OOMKilled status. In this case, if you set memory allocations that are too high, this error will not occur. Nevertheless, memory is a limited resource. A balance of memory allocations across different containers and nodes fulfilling various purposes is necessary. Despite having infinite memory available, it remains imperative to examine where the memory is going to be used and determine exactly how much is needed \u2013 minimum and maximum values, depending on what applications might consume it."),(0,n.kt)("h3",{id:"example-of-a-kubernetes-pod-configuration-with-appropriate-memory-settings"},"Example of a Kubernetes pod configuration with appropriate memory settings"),(0,n.kt)("p",null,"As an example, we have the pod named 'my-demo-pod' having an nginx container, and we added the following memory settings in the pod specification:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Below is the sample pod manifest demonstrating memory limit configurations:")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-29-exit-code-137/Kube_Exit_4.png",alt:"kubernetes exit code 137"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"techniques-to-investigate-application-memory-consumption"},"Techniques to Investigate Application Memory Consumption"),(0,n.kt)("h3",{id:"monitoring-and-correlating-memory-usage-with-traffic-loads"},"Monitoring and correlating memory usage with traffic loads"),(0,n.kt)("p",null,"For Each pod, Kibana, DataDog or Heapster are third-party tools that can be used to identify the pods' memory resources and container performance. As mentioned before, the command kubectl get pods provides information on the current amount of occupied memory by the pod as well as its containers. It is important to understand how memory usage changes over time and how an application behaves under different load conditions."),(0,n.kt)("h3",{id:"differentiating-between-memory-spikes-and-consistent-memory-growth"},"Differentiating between memory spikes and consistent memory growth"),(0,n.kt)("p",null,"To know the last state of a container that exited on code 137, you would use the ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl describe pod")," command. This may lead you to the problematic pod, causing the OOM error and allowing you to adjust resource allocation accordingly. Besides, you can run the ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl get events")," command to see if there are events associated with the OOM error, including evicted, failed or OOMkilled, that have already been logged. By examining how often and for how long this happens, one can tell if system memory has been gradually growing or not. A memory spike is a sudden increase in memory usage due to increased user demands or unexpected failures."),(0,n.kt)("h3",{id:"approaches-to-identify-memory-leaks-and-high-memory-consumption-functions"},"Approaches to identify memory leaks and high memory consumption functions"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl exec")," command if you want to access a ",(0,n.kt)("inlineCode",{parentName:"p"},"free")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"top")," command within your container so that you can see exactly how much memory is being used and available. In order to create a temporary copy of the pod and perform diagnostic operations on it while an original one is not being used, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl debug"),". Use a tool like HeapTrack, Memcheck or LeakSanitizer to find and debug memory leaks in your application."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Example, we have utilized heapster to view the Memory usage graph showing trends of 'my-demo-pod' in the Kubernetes Dashboard:")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-29-exit-code-137/Kube_Exit_5.png",alt:"kubernetes exit code 137"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"best-practices-and-recommendations"},"Best Practices and Recommendations"),(0,n.kt)("h3",{id:"importance-of-proactive-monitoring"},"Importance of proactive monitoring"),(0,n.kt)("p",null,"Proactive monitoring includes both monitoring and alerting. Instead of just avoiding OOMKilled (Out of Memory Killed) status, engage in monitoring and alerting practices. Regular monitoring captures the cluster's health and performance metrics. Alerts, on the other hand, alert you about potential issues before they snowball into bigger problems."),(0,n.kt)("h3",{id:"benefits-of-setting-appropriate-memory-limits-and-requests"},"Benefits of setting appropriate memory limits and requests"),(0,n.kt)("p",null,"When you set Kubernetes memory limits and requests in the right way, there are several benefits that come with it, including no more out-of-memory kills, fair resource allocations, optimized resource utilization, enhanced application performance, cluster stability, controlled cost spikes without any reason, effective autoscaling as well as efficient troubleshooting and even more productive development. These advantages demonstrate why this is a best practice for the smooth running of Kubernetes deployments."),(0,n.kt)("h3",{id:"regularly-auditing-and-optimizing-application-code"},"Regularly auditing and optimizing application code"),(0,n.kt)("p",null,"For you to avoid OOM killed status, it is important to regularly audit and optimize your application code. Code optimization means making your code efficient by reducing its memory footprint. This may involve refactoring complex functions, optimizing data structures or removing memory leaks."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"For your environment stability, it's very important to identify and resolve exit code 137 with Kubernetes. It means that there are memory problems happening, which, if not fixed promptly, can result in a service failure or even loss of data. Therefore, it must be closely watched, and resources must be allocated quite effectively to avoid the OOMKilled status."),(0,n.kt)("p",null,"Optimizing applications and configurations would make a resilient Kubernetes environment. To avoid events such as OOMKilled, all issues that cause memory problems should be addressed, for example, insufficient memory limit values or memory leakage. So, the code should be regularly audited and optimized in order to ensure effective cluster performance; proactive monitoring should be done, and appropriate memory limits should be set."))}p.isMDXComponent=!0}}]);