"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[81523],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=n,m=s["".concat(c,".").concat(f)]||s[f]||p[f]||a;return r?o.createElement(m,i(i({ref:t},d),{},{components:r})):o.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},71173:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={title:"Cloud Storage",keywords:["hudi","aws","gcp","oss","azure","cloud","juicefs"],summary:"In this page, we introduce how Hudi work with different Cloud providers.",toc:!0,last_modified_at:new Date("2021-10-12T02:50:00.000Z")},i=void 0,l={unversionedId:"cloud",id:"version-0.12.2/cloud",title:"Cloud Storage",description:"Talking to Cloud Storage",source:"@site/versioned_docs/version-0.12.2/cloud.md",sourceDirName:".",slug:"/cloud",permalink:"/cn/docs/cloud",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.2/cloud.md",tags:[],version:"0.12.2",frontMatter:{title:"Cloud Storage",keywords:["hudi","aws","gcp","oss","azure","cloud","juicefs"],summary:"In this page, we introduce how Hudi work with different Cloud providers.",toc:!0,last_modified_at:"2021-10-12T02:50:00.000Z"},sidebar:"docs",previous:{title:"Tuning Guide",permalink:"/cn/docs/tuning-guide"},next:{title:"AWS S3",permalink:"/cn/docs/s3_hoodie"}},c=[{value:"Talking to Cloud Storage",id:"talking-to-cloud-storage",children:[],level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"talking-to-cloud-storage"},"Talking to Cloud Storage"),(0,n.kt)("p",null,"Immaterial of whether RDD/WriteClient APIs or Datasource is used, the following information helps configure access\nto cloud stores."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/s3_hoodie"},"AWS S3")," ",(0,n.kt)("br",null),"\nConfigurations required for S3 and Hudi co-operability."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/gcs_hoodie"},"Google Cloud Storage")," ",(0,n.kt)("br",null),"\nConfigurations required for GCS and Hudi co-operability."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/oss_hoodie"},"Alibaba Cloud OSS")," ",(0,n.kt)("br",null),"\nConfigurations required for OSS and Hudi co-operability."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/azure_hoodie"},"Microsoft Azure")," ",(0,n.kt)("br",null),"\nConfigurations required for Azure and Hudi co-operability."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/cos_hoodie"},"Tencent Cloud Object Storage")," ",(0,n.kt)("br",null),"\nConfigurations required for COS and Hudi co-operability."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ibm_cos_hoodie"},"IBM Cloud Object Storage")," ",(0,n.kt)("br",null),"\nConfigurations required for IBM Cloud Object Storage and Hudi co-operability."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"bos_hoodie"},"Baidu Cloud Object Storage")," ",(0,n.kt)("br",null),"\nConfigurations required for BOS and Hudi co-operability."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"jfs_hoodie"},"JuiceFS")," ",(0,n.kt)("br",null),"\nConfigurations required for JuiceFS and Hudi co-operability."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"oci_hoodie"},"Oracle Cloud Infrastructure")," ",(0,n.kt)("br",null),"\nConfigurations required for OCI and Hudi co-operability.")),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Many cloud object storage systems like ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/s3/"},"Amazon S3")," allow you to set\nlifecycle policies, such as ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html"},"S3 Lifecycle"),",\nto manage objects. One of the policies is related to object expiration. If your organisation has configured such policies,\nthen please ensure to exclude (or have a longer expiry period) for Hudi tables."))))}d.isMDXComponent=!0}}]);