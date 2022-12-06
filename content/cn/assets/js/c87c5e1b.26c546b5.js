"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[64947],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),g=r,d=p["".concat(s,".").concat(g)]||p[g]||m[g]||i;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6746:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(72389);function i(e){let{children:t,url:i}=e;return(0,r.Z)()&&(a.g.window.location.href=i),n.createElement("span",null,t,"or click ",n.createElement("a",{href:i},"here"))}},22048:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),i=a(6746);const o={title:"Ingest streaming data to Apache Hudi tables using AWS Glue and Apache Hudi DeltaStreamer",authors:[{name:"Vishal Pathak"},{name:"Anand Prakash"},{name:"Noritaka Sekiyama"}],category:"blog",image:"/assets/images/blog/2022-10-06_Ingest_streaming_data_to_Apache_Hudi_tables_using_AWS_Glue_and_DeltaStreamer.png",tags:["how-to","streaming ingestion","deltastreamer","amazon"]},l=void 0,s={permalink:"/cn/blog/2022/10/06/Ingest-streaming-data-to-Apache-Hudi-using-AWS-Glue-and-DeltaStreamer",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2022-10-06-Ingest-streaming-data-to-Apache-Hudi-using-AWS-Glue-and-DeltaStreamer.mdx",source:"@site/blog/2022-10-06-Ingest-streaming-data-to-Apache-Hudi-using-AWS-Glue-and-DeltaStreamer.mdx",title:"Ingest streaming data to Apache Hudi tables using AWS Glue and Apache Hudi DeltaStreamer",description:"Redirecting... please wait!!",date:"2022-10-06T00:00:00.000Z",formattedDate:"October 6, 2022",tags:[{label:"how-to",permalink:"/cn/blog/tags/how-to"},{label:"streaming ingestion",permalink:"/cn/blog/tags/streaming-ingestion"},{label:"deltastreamer",permalink:"/cn/blog/tags/deltastreamer"},{label:"amazon",permalink:"/cn/blog/tags/amazon"}],readingTime:.045,truncated:!1,authors:[{name:"Vishal Pathak"},{name:"Anand Prakash"},{name:"Noritaka Sekiyama"}],prevItem:{title:"Get started with Apache Hudi using AWS Glue by implementing key design concepts \u2013 Part 1",permalink:"/cn/blog/2022/10/17/Get-started-with-Apache-Hudi-using-AWS"},nextItem:{title:"Data processing with Spark: time traveling",permalink:"/cn/blog/2022/09/28/Data-processing-with-Spark-time-traveling"}},c={authorsImageUrls:[void 0,void 0,void 0]},u=[],p={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{url:"https://aws.amazon.com/blogs/big-data/ingest-streaming-data-to-apache-hudi-tables-using-aws-glue-and-apache-hudi-deltastreamer/",mdxType:"Redirect"},"Redirecting... please wait!! "))}m.isMDXComponent=!0}}]);