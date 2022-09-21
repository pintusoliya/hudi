"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[7336],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>p});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),m=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=m(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(t),p=r,f=c["".concat(s,".").concat(p)]||c[p]||u[p]||o;return t?n.createElement(f,i(i({ref:a},d),{},{components:t})):n.createElement(f,i({ref:a},d))}));function p(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6746:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(67294),r=t(72389);function o(e){let{children:a,url:o}=e;return(0,r.Z)()&&(t.g.window.location.href=o),n.createElement("span",null,a,"or click ",n.createElement("a",{href:o},"here"))}},90089:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(87462),r=(t(67294),t(3905)),o=t(6746);const i={title:"Build a data lake using amazon kinesis data stream for amazon dynamodb and apache hudi",authors:[{name:"Dhiraj Thakur"},{name:"Dylan Qu"},{name:"Saurabh Shrivastava"}],category:"blog",image:"/assets/images/blog/2021-03-04-build-data-lake-using-amazon-kinesis-for-amazon-dynamodb-and-apache-hudi.jpeg",tags:["how-to","streaming ingestion","amazon"]},l=void 0,s={permalink:"/blog/2021/03/04/Build-a-data-lake-using-amazon-kinesis-data-stream-for-amazon-dynamodb-and-apache-hudi",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-03-04-Build-a-data-lake-using-amazon-kinesis-data-stream-for-amazon-dynamodb-and-apache-hudi.mdx",source:"@site/blog/2021-03-04-Build-a-data-lake-using-amazon-kinesis-data-stream-for-amazon-dynamodb-and-apache-hudi.mdx",title:"Build a data lake using amazon kinesis data stream for amazon dynamodb and apache hudi",description:"Redirecting... please wait!!",date:"2021-03-04T00:00:00.000Z",formattedDate:"March 4, 2021",tags:[{label:"how-to",permalink:"/blog/tags/how-to"},{label:"streaming ingestion",permalink:"/blog/tags/streaming-ingestion"},{label:"amazon",permalink:"/blog/tags/amazon"}],readingTime:.045,truncated:!1,authors:[{name:"Dhiraj Thakur"},{name:"Dylan Qu"},{name:"Saurabh Shrivastava"}],prevItem:{title:"New features from Apache hudi in Amazon EMR",permalink:"/blog/2021/03/11/New-features-from-Apache-hudi-in-Amazon-EMR"},nextItem:{title:"Streaming Responsibly - How Apache Hudi maintains optimum sized files",permalink:"/blog/2021/03/01/hudi-file-sizing"}},m={authorsImageUrls:[void 0,void 0,void 0]},d=[],u={toc:d};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{url:"https://aws.amazon.com/blogs/big-data/build-a-data-lake-using-amazon-kinesis-data-streams-for-amazon-dynamodb-and-apache-hudi/",mdxType:"Redirect"},"Redirecting... please wait!! "))}c.isMDXComponent=!0}}]);