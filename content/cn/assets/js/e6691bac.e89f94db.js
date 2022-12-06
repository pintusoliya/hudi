"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[7336],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>f});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(t),p=r,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||o;return t?n.createElement(f,i(i({ref:a},m),{},{components:t})):n.createElement(f,i({ref:a},m))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6746:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(67294),r=t(72389);function o(e){let{children:a,url:o}=e;return(0,r.Z)()&&(t.g.window.location.href=o),n.createElement("span",null,a,"or click ",n.createElement("a",{href:o},"here"))}},90089:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=t(87462),r=(t(67294),t(3905)),o=t(6746);const i={title:"Build a data lake using amazon kinesis data stream for amazon dynamodb and apache hudi",authors:[{name:"Dhiraj Thakur"},{name:"Dylan Qu"},{name:"Saurabh Shrivastava"}],category:"blog",image:"/assets/images/blog/2021-03-04-build-data-lake-using-amazon-kinesis-for-amazon-dynamodb-and-apache-hudi.jpeg",tags:["how-to","streaming ingestion","amazon"]},l=void 0,s={permalink:"/cn/blog/2021/03/04/Build-a-data-lake-using-amazon-kinesis-data-stream-for-amazon-dynamodb-and-apache-hudi",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-03-04-Build-a-data-lake-using-amazon-kinesis-data-stream-for-amazon-dynamodb-and-apache-hudi.mdx",source:"@site/blog/2021-03-04-Build-a-data-lake-using-amazon-kinesis-data-stream-for-amazon-dynamodb-and-apache-hudi.mdx",title:"Build a data lake using amazon kinesis data stream for amazon dynamodb and apache hudi",description:"Redirecting... please wait!!",date:"2021-03-04T00:00:00.000Z",formattedDate:"March 4, 2021",tags:[{label:"how-to",permalink:"/cn/blog/tags/how-to"},{label:"streaming ingestion",permalink:"/cn/blog/tags/streaming-ingestion"},{label:"amazon",permalink:"/cn/blog/tags/amazon"}],readingTime:.045,truncated:!1,authors:[{name:"Dhiraj Thakur"},{name:"Dylan Qu"},{name:"Saurabh Shrivastava"}],prevItem:{title:"New features from Apache hudi in Amazon EMR",permalink:"/cn/blog/2021/03/11/New-features-from-Apache-hudi-in-Amazon-EMR"},nextItem:{title:"Streaming Responsibly - How Apache Hudi maintains optimum sized files",permalink:"/cn/blog/2021/03/01/hudi-file-sizing"}},c={authorsImageUrls:[void 0,void 0,void 0]},m=[],d={toc:m};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{url:"https://aws.amazon.com/blogs/big-data/build-a-data-lake-using-amazon-kinesis-data-streams-for-amazon-dynamodb-and-apache-hudi/",mdxType:"Redirect"},"Redirecting... please wait!! "))}u.isMDXComponent=!0}}]);