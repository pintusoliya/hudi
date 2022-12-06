"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[37051],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||n;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57753:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>o});var r=a(87462),i=(a(67294),a(3905));const n={title:"Release 0.10.1",sidebar_position:6,layout:"releases",toc:!0,last_modified_at:new Date("2022-01-27T14:07:00.000Z")},l="[Release 0.10.1](https://github.com/apache/hudi/releases/tag/release-0.10.1) ([docs](/docs/quick-start-guide))",s={unversionedId:"release-0.10.1",id:"release-0.10.1",title:"Release 0.10.1",description:"Migration Guide",source:"@site/releases/release-0.10.1.md",sourceDirName:".",slug:"/release-0.10.1",permalink:"/releases/release-0.10.1",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Release 0.10.1",sidebar_position:6,layout:"releases",toc:!0,last_modified_at:"2022-01-27T14:07:00.000Z"},sidebar:"releases",previous:{title:"Release 0.11.0",permalink:"/releases/release-0.11.0"},next:{title:"Release 0.10.0",permalink:"/releases/release-0.10.0"}},o=[{value:"Migration Guide",id:"migration-guide",children:[],level:2},{value:"Release Highlights",id:"release-highlights",children:[{value:"Explicit Spark 3 bundle names",id:"explicit-spark-3-bundle-names",children:[],level:3},{value:"Repair Utility",id:"repair-utility",children:[],level:3},{value:"Bug fixes",id:"bug-fixes",children:[],level:3}],level:2},{value:"Raw Release Notes",id:"raw-release-notes",children:[],level:2}],p={toc:o};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"release-0101-docs"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/apache/hudi/releases/tag/release-0.10.1"},"Release 0.10.1")," (",(0,i.kt)("a",{parentName:"h1",href:"/docs/quick-start-guide"},"docs"),")"),(0,i.kt)("h2",{id:"migration-guide"},"Migration Guide"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This release (0.10.1) does not introduce any new table version, hence no migration needed if you are on 0.10.0."),(0,i.kt)("li",{parentName:"ul"},"If migrating from an older release, please check the migration guide from the previous release notes, specifically the upgrade instructions in 0.6.0, 0.9.0 and 0.10.0.")),(0,i.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,i.kt)("h3",{id:"explicit-spark-3-bundle-names"},"Explicit Spark 3 bundle names"),(0,i.kt)("p",null,"In the previous release (0.10.0), we added Spark 3.1.x support and made it the default Spark 3 version to build with. In 0.10.1,\nwe made the Spark 3 version explicit in the bundle name and published a new bundle for Spark 3.0.x. Specifically, these 2 bundles\nare available in the public maven repository."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hudi-spark3.1.2-bundle_2.12-0.10.1.jar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hudi-spark3.0.3-bundle_2.12-0.10.1.jar"))),(0,i.kt)("h3",{id:"repair-utility"},"Repair Utility"),(0,i.kt)("p",null,"We added a new repair utility ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.utilities.HoodieRepairTool")," to clean up dangling base and log files. The utility\ncan be run as a separate Spark job as below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"spark-submit \\\n--class org.apache.hudi.utilities.HoodieRepairTool \\\n--driver-memory 4g \\\n--executor-memory 1g \\\n--conf spark.serializer=org.apache.spark.serializer.KryoSerializer \\\n--conf spark.sql.catalogImplementation=hive \\\n--conf spark.sql.extensions=org.apache.spark.sql.hudi.HoodieSparkSessionExtension \\\n--packages org.apache.spark:spark-avro_2.12:3.1.2 \\\n$HUDI_DIR/packaging/hudi-utilities-bundle/target/hudi-utilities-bundle_2.12-0.11.0-SNAPSHOT.jar \\\n--mode dry_run \\\n--base-path base_path \\\n--assume-date-partitioning\n")),(0,i.kt)("p",null,"Check out the javadoc in ",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieRepairTool")," for more instructions and examples."),(0,i.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,i.kt)("p",null,"0.10.1 is mainly intended for bug fixes and stability. The fixes span across many components, including"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HoodieDeltaStreamer"),(0,i.kt)("li",{parentName:"ul"},"Timeline related fixes"),(0,i.kt)("li",{parentName:"ul"},"Table services"),(0,i.kt)("li",{parentName:"ul"},"Metadata table"),(0,i.kt)("li",{parentName:"ul"},"Spark SQL support"),(0,i.kt)("li",{parentName:"ul"},"Timestamp-based key generator"),(0,i.kt)("li",{parentName:"ul"},"Hive Sync"),(0,i.kt)("li",{parentName:"ul"},"Flink and Java engines"),(0,i.kt)("li",{parentName:"ul"},"Kafka Connect")),(0,i.kt)("h2",{id:"raw-release-notes"},"Raw Release Notes"),(0,i.kt)("p",null,"The raw release notes are available ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12351135"},"here")))}u.isMDXComponent=!0}}]);