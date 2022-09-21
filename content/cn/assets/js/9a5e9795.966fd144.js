"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[31591],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(g,o(o({ref:n},s),{},{components:t})):a.createElement(g,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6746:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),r=t(72389);function i(e){let{children:n,url:i}=e;return(0,r.Z)()&&(t.g.window.location.href=i),a.createElement("span",null,n,"or click ",a.createElement("a",{href:i},"here"))}},12484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=t(87462),r=(t(67294),t(3905)),i=t(6746);const o={title:"Create a low-latency source-to-data lake pipeline using Amazon MSK Connect, Apache Flink, and Apache Hudi",authors:[{name:"Ali Alemi"}],category:"blog",image:"/assets/images/blog/2022-03-01-low-latency-pipeline-using-msk-flink-hudi.png",tags:["how-to","streaming ingestion","apache flink","apache kafka","amazon"]},l=void 0,c={permalink:"/cn/blog/2022/03/01/Create-a-low-latency-source-to-data-lake-pipeline-using-Amazon-MSK-Connect-Apache-Flink-and-Apache-Hudi",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2022-03-01-Create-a-low-latency-source-to-data-lake-pipeline-using-Amazon-MSK-Connect-Apache-Flink-and-Apache-Hudi.mdx",source:"@site/blog/2022-03-01-Create-a-low-latency-source-to-data-lake-pipeline-using-Amazon-MSK-Connect-Apache-Flink-and-Apache-Hudi.mdx",title:"Create a low-latency source-to-data lake pipeline using Amazon MSK Connect, Apache Flink, and Apache Hudi",description:"Redirecting... please wait!!",date:"2022-03-01T00:00:00.000Z",formattedDate:"March 1, 2022",tags:[{label:"how-to",permalink:"/cn/blog/tags/how-to"},{label:"streaming ingestion",permalink:"/cn/blog/tags/streaming-ingestion"},{label:"apache flink",permalink:"/cn/blog/tags/apache-flink"},{label:"apache kafka",permalink:"/cn/blog/tags/apache-kafka"},{label:"amazon",permalink:"/cn/blog/tags/amazon"}],readingTime:.045,truncated:!1,authors:[{name:"Ali Alemi"}],prevItem:{title:"Build a serverless pipeline to analyze streaming data using AWS Glue, Apache Hudi, and Amazon S3",permalink:"/cn/blog/2022/03/09/Build-a-serverless-pipeline-to-analyze-streaming-data-using-AWS-Glue-Apache-Hudi-and-Amazon-S3"},nextItem:{title:"Understanding its core concepts from hudi persistence files",permalink:"/cn/blog/2022/02/20/Understanding-its-core-concepts-from-hudi-persistence-files"}},p={authorsImageUrls:[void 0]},s=[],u={toc:s};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{url:"https://aws.amazon.com/blogs/big-data/create-a-low-latency-source-to-data-lake-pipeline-using-amazon-msk-connect-apache-flink-and-apache-hudi/",mdxType:"Redirect"},"Redirecting... please wait!! "))}m.isMDXComponent=!0}}]);