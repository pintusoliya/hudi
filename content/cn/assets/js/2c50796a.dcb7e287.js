"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[484],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6746:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(72389);function o(e){let{children:t,url:o}=e;return(0,n.Z)()&&(a.g.window.location.href=o),r.createElement("span",null,t,"or click ",r.createElement("a",{href:o},"here"))}},18080:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(6746);const i={title:"Implementation of SCD-2 (Slowly Changing Dimension) with Apache Hudi & Spark",authors:[{name:"Jayasheel Kalgal"},{name:"Esha Dhing"},{name:"Prashant Mishra"}],category:"blog",image:"/assets/images/blog/2022-08-24_implementation_of_scd_2_with_hudi_and_spark.jpeg",tags:["use-case","scd2","walmartglobaltech"]},l=void 0,c={permalink:"/cn/blog/2022/08/24/Implementation-of-SCD-2-with-Apache-Hudi-and-Spark",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2022-08-24-Implementation-of-SCD-2-with-Apache-Hudi-and-Spark.mdx",source:"@site/blog/2022-08-24-Implementation-of-SCD-2-with-Apache-Hudi-and-Spark.mdx",title:"Implementation of SCD-2 (Slowly Changing Dimension) with Apache Hudi & Spark",description:"Redirecting... please wait!!",date:"2022-08-24T00:00:00.000Z",formattedDate:"August 24, 2022",tags:[{label:"use-case",permalink:"/cn/blog/tags/use-case"},{label:"scd2",permalink:"/cn/blog/tags/scd-2"},{label:"walmartglobaltech",permalink:"/cn/blog/tags/walmartglobaltech"}],readingTime:.045,truncated:!1,authors:[{name:"Jayasheel Kalgal"},{name:"Esha Dhing"},{name:"Prashant Mishra"}],prevItem:{title:"Data Lake / Lakehouse Guide: Powered by Data Lake Table Formats (Delta Lake, Iceberg, Hudi)",permalink:"/cn/blog/2022/08/25/Data-Lake-Lakehouse-Guide-Powered-by-Data-Lake-Table-Formats-Delta-Lake-Iceberg-Hudi"},nextItem:{title:"Apache Hudi vs Delta Lake vs Apache Iceberg - Lakehouse Feature Comparison",permalink:"/cn/blog/2022/08/18/Apache-Hudi-vs-Delta-Lake-vs-Apache-Iceberg-Lakehouse-Feature-Comparison"}},s={authorsImageUrls:[void 0,void 0,void 0]},p=[],u={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{url:"https://medium.com/walmartglobaltech/implementation-of-scd-2-slowly-changing-dimension-with-apache-hudi-465e0eb94a5",mdxType:"Redirect"},"Redirecting... please wait!! "))}m.isMDXComponent=!0}}]);