"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[88652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},47626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Async Compaction Deployment Models",excerpt:"Mechanisms for executing compaction jobs in Hudi asynchronously",author:"vbalaji",category:"blog",tags:["how-to","compaction","apache hudi"]},i=void 0,l={permalink:"/blog/2020/08/21/async-compaction-deployment-model",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-08-21-async-compaction-deployment-model.md",source:"@site/blog/2020-08-21-async-compaction-deployment-model.md",title:"Async Compaction Deployment Models",description:"We will look at different deployment models for executing compactions asynchronously.",date:"2020-08-21T00:00:00.000Z",formattedDate:"August 21, 2020",tags:[{label:"how-to",permalink:"/blog/tags/how-to"},{label:"compaction",permalink:"/blog/tags/compaction"},{label:"apache hudi",permalink:"/blog/tags/apache-hudi"}],readingTime:1.925,truncated:!0,authors:[{name:"vbalaji"}],prevItem:{title:"Ingest multiple tables using Hudi",permalink:"/blog/2020/08/22/ingest-multiple-tables-using-hudi"},nextItem:{title:"Efficient Migration of Large Parquet Tables to Apache Hudi",permalink:"/blog/2020/08/20/efficient-migration-of-large-parquet-tables"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We will look at different deployment models for executing compactions asynchronously."))}u.isMDXComponent=!0}}]);