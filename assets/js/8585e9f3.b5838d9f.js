"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68012],{58860:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var n=a(37953);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||g[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},59329:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});a(37953);var n=a(58860);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={title:"How to Create a GraphQL API with Python and Django",description:"We will discuss how to create a GraphQL API with Python.",slug:"graphql-with-python",authors:"muhammad_khabbab",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-05-07-graphql-with-django/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/graphql-with-python",source:"@site/blog/2024-05-07-graphql-with-django.md",title:"How to Create a GraphQL API with Python and Django",description:"We will discuss how to create a GraphQL API with Python.",date:"2024-05-07T00:00:00.000Z",formattedDate:"May 7, 2024",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:7.395,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"How to Create a GraphQL API with Python and Django",description:"We will discuss how to create a GraphQL API with Python.",slug:"graphql-with-python",authors:"muhammad_khabbab",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-05-07-graphql-with-django/social.png",hide_table_of_contents:!1},prevItem:{title:"What is Headless CMS?",permalink:"/blog/headless-cms"},nextItem:{title:"Dictionaries in TypeScript -  How to Ensure Type Safety",permalink:"/blog/typescript-dictionary"},relatedPosts:[{title:"How to use Docker Exec command?",description:"We'll go over the Docker exec command syntax, usage as well as some examples.",permalink:"/blog/docker-exec",formattedDate:"August 18, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.995,date:"2023-08-18T00:00:00.000Z"},{title:"How to Use Nodemon to Automatically Restart Node.js Applications",description:"This guide shows you how to install and use Nodemon to streamline your development process.",permalink:"/blog/nodemon",formattedDate:"April 30, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:5.845,date:"2024-04-30T00:00:00.000Z"},{title:"What are Low Code Development Platforms?",description:"We'll looking into low-code platforms, when and where they can be used, and limitations you might face during the development.",permalink:"/blog/low-code",formattedDate:"March 18, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:8.97,date:"2024-03-18T00:00:00.000Z"}],authorPosts:[{title:"Docker Swarm Mode Guide",description:"We'll cover the basics of Docker Swarm mode, including how to set up your first Swarm, join nodes to the Swarm, deploy services, scale services, and monitor services.",permalink:"/blog/docker-swarm",formattedDate:"October 5, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.53,date:"2023-10-05T00:00:00.000Z"},{title:"Kubernetes Image Pull Policy - A Detailed Guide",description:"Image pull policy in Kubernetes is a strategic decision that impacts applications' efficiency, reliability, and security.",permalink:"/blog/kubernetes-image-pull-policy",formattedDate:"January 3, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.045,date:"2024-01-03T00:00:00.000Z"},{title:"How to Delete Local and Remote Git Branches",description:"We will take a look the example of deleting local and remote Git branches.",permalink:"/blog/git-delete-remote-branch-and-local-branch",formattedDate:"November 27, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.705,date:"2022-11-27T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Guide on setting up the development environment using Python and Django.",id:"guide-on-setting-up-the-development-environment-using-python-and-django",level:2},{value:"Step-by-Step Guide to Creating GraphQL API",id:"step-by-step-guide-to-creating-graphql-api",level:2},{value:"Setting Up the Database",id:"setting-up-the-database",level:3},{value:"Default SQLite setup on Django",id:"default-sqlite-setup-on-django",level:4},{value:"Describe the relationships: Many-to-many (students and courses), one-to-many (teachers and courses)",id:"describe-the-relationships-many-to-many-students-and-courses-one-to-many-teachers-and-courses",level:4},{value:"Creating Queries and Implementation of Resolvers in Django to handle and fetch nested data:",id:"creating-queries-and-implementation-of-resolvers-in-django-to-handle-and-fetch-nested-data",level:3},{value:"Create GraphQL view and add graphql/ URL",id:"create-graphql-view-and-add-graphql-url",level:3},{value:"Testing the API",id:"testing-the-api",level:2},{value:"Using tools like GraphiQL or Postman for testing GraphQL queries.",id:"using-tools-like-graphiql-or-postman-for-testing-graphql-queries",level:3},{value:"Conclusion",id:"conclusion",level:2}],g={toc:d},h="wrapper";function m(e){var{components:t}=e,a=i(e,["components"]);return(0,n.yg)(h,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"GraphQL is a query language used to communicate with databases and it is most effective and suitable when you have a complex data structure and the frontend only requires the data they requested. GraphQL utilizes a strongly-typed schema and fixed data structure approach which improves the overall system reliability. For Example, the declarative model of GraphQL API can make your API consistent and predictable, which allows front-end developers to avoid making any change from their end when there is a change from the backend."),(0,n.yg)("p",null,"GraphQL creates a layer on the backend and specifies the APIs that provide data to the frontend. It is capable of fetching specific data and reducing network usage which ultimately improves the performance of the overall system. For Example, in the micro-services architecture backend, just calling a single GraphQL endpoint can cut down the number of requests from the frontend by processing, combining, filtering, and returning the data from different services."),(0,n.yg)("p",null,"In this article, we will create GraphQL API for a school management system that will have data relationships for students, teachers, and courses. Let\u2019s suppose that we have enrolled students and assigned teachers to different courses, we will implement GraphQL API for the scenario where we are fetching the course along with the enrolled students and assigned teachers."),(0,n.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.yg)("p",null,"To get started with GraphQL API, you can choose the backend technology stack of your choice. The most commonly used are Nodejs, Python(Flask), and Python(Django).\n",(0,n.yg)("strong",{parentName:"p"},"We will be working with:"),"\n",(0,n.yg)("strong",{parentName:"p"},"Python \u2013")," Download from the Python Website according to your OS and Install it. We are using Windows OS, VS Code IDE, command line terminal, and Python version ",(0,n.yg)("inlineCode",{parentName:"p"},"3.12.3"),".\n",(0,n.yg)("strong",{parentName:"p"},"Django \u2013")," We are using Django as a web framework for clean and pragmatic design to speed up the development process.\n",(0,n.yg)("strong",{parentName:"p"},"Graphene-Django \u2013")," Graphene Django is a library specifically to work with GraphQL in Django Framework."),(0,n.yg)("h2",{id:"guide-on-setting-up-the-development-environment-using-python-and-django"},"Guide on setting up the development environment using Python and Django."),(0,n.yg)("p",null,"The very first step to working with any technology stack is to create a development environment. The good thing about working with Django is that you don't need a separate web server for it because it has its own.\n",(0,n.yg)("strong",{parentName:"p"},"Let\u2019s start by creating a virtual environment:"),"\nOpen your project directory in IDE and the command line terminal to run the following commands:\n",(0,n.yg)("inlineCode",{parentName:"p"},"python -m venv smsvenv")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},".\\smsvenv\\Scripts\\activate")),(0,n.yg)("p",null,"Before running the above commands, make sure that you have installed Python on your OS. These commands will create and activate a virtual environment where you have to install all required dependencies(Django, Graphene-Django, etc.)"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Now install the dependencies by running the commands below:")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"pip install django")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"pip install graphene-django")),(0,n.yg)("p",null,"Once the above installations are completed, using the Django commands below we will create a folder structure for our GraphQL API project."),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"django-admin startproject school_management")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"cd school_management")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"django-admin startapp")),(0,n.yg)("p",null,"Now, we need to add ",(0,n.yg)("inlineCode",{parentName:"p"},"graphene-django")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"school")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"INSTALLED_APPS")," located in ",(0,n.yg)("inlineCode",{parentName:"p"},"school_management/settings.py")),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-05-07-graphql-with-django/graphql_1.png",alt:"Snapshot of django installed apps"})),"*At this stage, our Development environment is set and we are ready to create GraphQL API.*",(0,n.yg)("h2",{id:"step-by-step-guide-to-creating-graphql-api"},"Step-by-Step Guide to Creating GraphQL API"),(0,n.yg)("h3",{id:"setting-up-the-database"},"Setting Up the Database"),(0,n.yg)("h4",{id:"default-sqlite-setup-on-django"},"Default SQLite setup on Django"),(0,n.yg)("p",null,"In the ",(0,n.yg)("inlineCode",{parentName:"p"},"school_management/settings.py")," file, you can add the configurations for the database. We are using SQLite database configurations that come by default with Django."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-05-07-graphql-with-django/graphql_2.png",alt:"Snapshot of default sqlite configuration in django"})),"#### Define Models for Students, Teachers, and Courses in Django.",(0,n.yg)("p",null,"We will create Models with their relationships in ",(0,n.yg)("inlineCode",{parentName:"p"},"school/models.py")," file for Django\u2019s ORM. We will add three classes i.e., ",(0,n.yg)("inlineCode",{parentName:"p"},"teacher"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"student"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"course"),". Each will have their column names and types."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"from django.db import models\n\nclass Student(models.Model):\n    name = models.CharField(max_length=100)\n    age = models.IntegerField()\n\nclass Teacher(models.Model):\n    name = models.CharField(max_length=100)\n\nclass Course(models.Model):\n    name = models.CharField(max_length=100)\n")),(0,n.yg)("h4",{id:"describe-the-relationships-many-to-many-students-and-courses-one-to-many-teachers-and-courses"},"Describe the relationships: Many-to-many (students and courses), one-to-many (teachers and courses)"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Many-to-Many")," \u2013 Each student can enroll in multiple courses and each course with have multiple students. We will add this relationship under the course model:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"class Course(models.Model):\n    name = models.CharField(max_length=100)\n    students = models.ManyToManyField(Student)\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"One-to-Many")," \u2013 Each course will have one teacher but one teacher can teach multiple courses. For this relationship, we will create a teacher foreign key field under the course model."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"class Course(models.Model):\n    name = models.CharField(max_length=100)\n    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)\n    students = models.ManyToManyField(Student)\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"The overall schema will look like this:")),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-05-07-graphql-with-django/sms_school_schema.png",alt:"Schema Diagram for scenario"})),"#### Brief explanation of inserting sample data. We will create sample data for student, teacher and course object. There are multiple ways to do it, we will Django admin by following the steps below:",(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"1. Migrate Models using the commands:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"python manage.py makemigrations\npython manage.py migrate\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"2. Create Superuser:")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"python manage.py createsuperuser")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"3. Register Models in school/admin.py:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"from django.contrib import admin\nfrom .models import Student, Teacher, Course\n\nadmin.site.register(Student)\nadmin.site.register(Teacher)\nadmin.site.register(Course)\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"4. Run the server using the command:")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"python manage.py runserver")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"5. Access the link on the browser:")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"http://localhost:8000/admin"},"http://localhost:8000/admin")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"6. Add the data from the admin interface:")),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-05-07-graphql-with-django/graphql_3.png",alt:"Snapshot of django admin interface for adding data"})),"## Step-by-Step implementation of GraphQL API ### Instructions on integrating Graphene-Django with Django for GraphQL schema creation. To create a schema of GeaphQL API, we will create a schema.py file in the `school/` directory where we will have two main sections:",(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Types \u2013")," Structure of data requested by the client.\n",(0,n.yg)("strong",{parentName:"p"},"Queries with their resolvers \u2013")," Definition of queries to fetch data(read-only) from the database."),(0,n.yg)("p",null,"After adding the ",(0,n.yg)("inlineCode",{parentName:"p"},"schema.py")," file, the directory structure of our project will look like this:"),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-05-07-graphql-with-django/graphql_4.png",alt:"Snapshot of directory structure after adding files for graphql schema"})),"### Define GraphQL types for Students, Teachers, and Courses using Graphene-Django. We will create the classes as GraphQL types using `DjangoObjectType` to define each field of the `student`, `teacher`, and `course` class in Django models. To do that, we will implement the following code:",(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"# schema.py\n\nimport graphene\nfrom graphene_django.types import DjangoObjectType\nfrom .models import Student, Teacher, Course\n\nclass StudentType(DjangoObjectType):\n    class Meta:\n        model = Student\n\nclass TeacherType(DjangoObjectType):\n    class Meta:\n        model = Teacher\n\nclass CourseType(DjangoObjectType):\n    class Meta:\n        model = Course\n")),(0,n.yg)("h3",{id:"creating-queries-and-implementation-of-resolvers-in-django-to-handle-and-fetch-nested-data"},"Creating Queries and Implementation of Resolvers in Django to handle and fetch nested data:"),(0,n.yg)("p",null,"Now we will use the types to fetch the information from the database. For example, if we want to fetch the information of the course assigned to a teacher with all the students that are enrolled in it, we need to define a Query that contains GraphQL lists for each type and their resolvers that are used to fetch and return data for list associated with each type of schema. The entire code in schema.py will be:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"# schema.py\n\nimport graphene\nfrom graphene_django.types import DjangoObjectType\nfrom .models import Student, Teacher, Course\n\nclass StudentType(DjangoObjectType):\n    class Meta:\n        model = Student\n\nclass TeacherType(DjangoObjectType):\n    class Meta:\n        model = Teacher\n\nclass CourseType(DjangoObjectType):\n    class Meta:\n        model = Course\n\nclass Query(graphene.ObjectType):\n    all_students = graphene.List(StudentType)\n    all_teachers = graphene.List(TeacherType)\n    all_courses = graphene.List(CourseType)\n\n    def resolve_all_students(self, info):\n        return Student.objects.all()\n\n    def resolve_all_teachers(self, info):\n        return Teacher.objects.all()\n\n    def resolve_all_courses(self, info):\n        return Course.objects.all()\n\nschema = graphene.Schema(query=Query)\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Note:")," Queries are used just the read-only operations like sorting or filtering. To update data we use mutations."),(0,n.yg)("h3",{id:"create-graphql-view-and-add-graphql-url"},"Create GraphQL view and add graphql/ URL"),(0,n.yg)("p",null,"In the last step, we will wire up GraphQL with Django by adding a view in ",(0,n.yg)("inlineCode",{parentName:"p"},"school/views.py")," to use the interface to test our queries and mapping the URL with that view in the main ",(0,n.yg)("inlineCode",{parentName:"p"},"school_management/urls.py")," to access it through the browser:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-rsx"},"# school/views.py\nfrom django.http import JsonResponse\nfrom graphene_django.views import GraphQLView\nfrom .schema import schema\n\ndef graphql_view(request):\n    view = GraphQLView.as_view(schema=schema, graphiql=True)\n    return view(request)\n")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"# school_management/urls.py\nfrom django.contrib import admin\nfrom school.views import graphql_view\nfrom django.urls import path\n\nurlpatterns = [\n    path('admin/', admin.site.urls),\n    path('graphql/', graphql_view),\n]\n")),(0,n.yg)("h2",{id:"testing-the-api"},"Testing the API"),(0,n.yg)("h3",{id:"using-tools-like-graphiql-or-postman-for-testing-graphql-queries"},"Using tools like GraphiQL or Postman for testing GraphQL queries."),(0,n.yg)("p",null,"In ",(0,n.yg)("inlineCode",{parentName:"p"},"graphql_view")," above, we passed a parameter ",(0,n.yg)("inlineCode",{parentName:"p"},"graphiql=True")," that allows us to use the graphqli interface to test our APIs. This can be accessed by navigating to ",(0,n.yg)("a",{parentName:"p",href:"https://http://127.0.0.1:8000/graphql/"},"http://127.0.0.1:8000/graphql/")),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-05-07-graphql-with-django/graphql_5.png",alt:"Snapshot of graphqli interface"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"The below snapshot of graphqli UI shows our query and its response that fetches the information of courses and their associated teacher and students:")),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-05-07-graphql-with-django/graphql_6.png",alt:"Snapshot of making an API call from graphqli interface"})),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"In this article, we have gone through the importance of using Graphql with fundamentals to build a simple Graphql API for handling complex data structures. Using Graphql is most beneficial and effective in situations where API is expected to be integrated across different clients with a specific data structure or only requires specific data with high performance and minimum bandwidth usage. The best way to have a grip on Graphql is to get your hands on it and start implementing it for various scenarios."))}m.isMDXComponent=!0}}]);