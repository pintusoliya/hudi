"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[92153],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),h=i,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||n;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<n;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},26615:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var r=a(87462),i=(a(67294),a(3905));const n={title:"Release 0.7.0",sidebar_position:10,layout:"releases",toc:!0,last_modified_at:new Date("2020-05-28T15:40:00.000Z")},l="[Release 0.7.0](https://github.com/apache/hudi/releases/tag/release-0.7.0) ([docs](/docs/quick-start-guide))",o={unversionedId:"release-0.7.0",id:"release-0.7.0",title:"Release 0.7.0",description:"Migration Guide for this release",source:"@site/releases/release-0.7.0.md",sourceDirName:".",slug:"/release-0.7.0",permalink:"/releases/release-0.7.0",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Release 0.7.0",sidebar_position:10,layout:"releases",toc:!0,last_modified_at:"2020-05-28T15:40:00.000Z"},sidebar:"releases",previous:{title:"Release 0.8.0",permalink:"/releases/release-0.8.0"},next:{title:"Older Releases",permalink:"/releases/older-releases"}},s=[{value:"Migration Guide for this release",id:"migration-guide-for-this-release",children:[],level:2},{value:"Release Highlights",id:"release-highlights",children:[{value:"Clustering",id:"clustering",children:[],level:3},{value:"Metadata Table",id:"metadata-table",children:[],level:3},{value:"Java/Flink Writers",id:"javaflink-writers",children:[],level:3},{value:"Writer side improvements",id:"writer-side-improvements",children:[],level:3},{value:"Query side improvements",id:"query-side-improvements",children:[],level:3},{value:"Raw Release Notes",id:"raw-release-notes",children:[],level:3}],level:2}],d={toc:s};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"release-070-docs"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/apache/hudi/releases/tag/release-0.7.0"},"Release 0.7.0")," (",(0,i.kt)("a",{parentName:"h1",href:"/docs/quick-start-guide"},"docs"),")"),(0,i.kt)("h2",{id:"migration-guide-for-this-release"},"Migration Guide for this release"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If migrating from release older than 0.5.3, please also check the upgrade instructions for each subsequent release below."),(0,i.kt)("li",{parentName:"ul"},"Specifically check upgrade instructions for 0.6.0. This release does not introduce any new table versions."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"HoodieRecordPayload")," interface deprecated existing methods, in favor of new ones that also lets us pass properties at runtime. Users are\nencouraged to migrate out of the deprecated methods, since they will be removed in 0.9.0.")),(0,i.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,i.kt)("h3",{id:"clustering"},"Clustering"),(0,i.kt)("p",null,"0.7.0 brings the ability to cluster your Hudi tables, to optimize for file sizes and also storage layout. Hudi will continue to\nenforce file sizes, as it always has been, during the write. Clustering provides more flexibility to increase the file sizes\ndown the line or ability to ingest data at much fresher intervals, and later coalesce them into bigger files. ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/vinothchandar/d7fa1338cddfae68390afcdfe310f94e#gistcomment-3383478"},"Microbenchmarks"),"\ndemonstrate a 3-4x reduction in query performance, for a 10-20x reduction in file sizes."),(0,i.kt)("p",null,"Additionally, clustering data based on fields that are often used in queries, dramatically\n",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance#RFC19Clusteringdataforfreshnessandqueryperformance-PerformanceEvaluation"},"improves query performance")," by allowing many files to be\ncompletely skipped. This is very similar to the benefits of clustering delivered by ",(0,i.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/tables-clustering-micropartitions"},"cloud data warehouses"),".\nWe are proud to announce that such capability is freely available in open source, for the first time, through the 0.7.0 release."),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance"},"RFC-19")," for more implementation details\nand checkout configs ",(0,i.kt)("a",{parentName:"p",href:"/docs/configurations#clustering-configs"},"here")," for how to use it in your pipelines. At the moment, we support both inline and async clustering modes."),(0,i.kt)("h3",{id:"metadata-table"},"Metadata Table"),(0,i.kt)("p",null,"Since Hudi was born at Uber, on a HDFS backed data lake, we have since been a tad apathetic to the plight of listing performance on cloud storage (partly in hopes that\ncloud providers will fix it over time:)). Nonetheless, 0.7.0 changes this and lays out the foundation for storing more indexes, metadata in an internal metadata table,\nwhich is implemented using a Hudi MOR table - which means it's compacted, cleaned and also incrementally updated like any other Hudi table. Also, unlike similar\nimplementations in other projects, we have chosen to index the file listing information as HFiles, which offers point-lookup performance to fetch listings for a single partition. "),(0,i.kt)("p",null,"In 0.7.0 release, ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.metadata.enable=true")," on the writer side, will populate the metadata table with file system listings\nso all operations don't have to explicitly use ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.listStatus()")," anymore on data partitions. We have introduced a sync mechanism that\nkeeps syncing file additions/deletions on the data timeline, to the metadata table, after each write operation."),(0,i.kt)("p",null,"In our testing, on a large 250K file table, the metadata table delivers ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/pull/2441#issuecomment-761742963"},"2-3x speedup")," over parallelized\nlisting done by the Hudi spark writer. Please check ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+15%3A+HUDI+File+Listing+and+Query+Planning+Improvements"},"RFC-15 (ongoing)"),"\nand the ",(0,i.kt)("a",{parentName:"p",href:"/docs/configurations#metadata-config"},"configurations"),", which offer flags to help adopt this feature safely in your production pipelines."),(0,i.kt)("h3",{id:"javaflink-writers"},"Java/Flink Writers"),(0,i.kt)("p",null,"Hudi was originally designed with a heavy dependency on Spark, given it had simply solve specific problems at Uber. But, as we have evolved as an Apache\nproject, we realized the need for abstracting the internal table format, table services and writing layers of code. In 0.7.0, we have additionally added\nJava and Flink based writers, as initial steps in this direction."),(0,i.kt)("p",null,"Specifically, the ",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieFlinkStreamer")," allows for Hudi Copy-On-Write table to built by streaming data from a Kafka topic."),(0,i.kt)("h3",{id:"writer-side-improvements"},"Writer side improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spark3 Support"),": We have added support for writing/querying data using Spark 3. please be sure to use the scala 2.12 hudi-spark-bundle."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Parallelized Listing"),": We have holistically moved all listings under the ",(0,i.kt)("inlineCode",{parentName:"li"},"HoodieTableMetadata")," interface, which does multi-threaded/spark parallelized list operations.\nWe expect this to improve cleaner, compaction scheduling performance, even when the metadata table is not used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Kafka Commit Callbacks"),": We have added ",(0,i.kt)("inlineCode",{parentName:"li"},"HoodieWriteCommitKafkaCallback"),", that publishes an event to Apache Kafka, for every commit operation. This can be used to trigger\nderived/ETL pipelines similar to data ",(0,i.kt)("a",{parentName:"li",href:"https://airflow.apache.org/docs/apache-airflow/stable/_api/airflow/sensors/index"},"sensors")," in Apache Airflow."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Insert Overwrite/Insert Overwrite Table"),": We have added these two new write operation types, predominantly to help existing batch ETL jobs, which typically overwrite entire\ntables/partitions each run. These operations are much cheaper, than having to issue upserts, given they are bulk replacing the target table.\nCheck ",(0,i.kt)("a",{parentName:"li",href:"/docs/quick-start-guide#insert-overwrite-table"},"here")," for examples."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete Partition"),": For users of WriteClient/RDD level apis, we have added an API to delete an entire partition, again without issuing deletes at the record level."),(0,i.kt)("li",{parentName:"ul"},"The current default ",(0,i.kt)("inlineCode",{parentName:"li"},"OverwriteWithLatestAvroPayload")," will overwrite the value in storage, even if for e.g the upsert was reissued for an older value of the key.\nAdded a new ",(0,i.kt)("inlineCode",{parentName:"li"},"DefaultHoodieRecordPayload")," and a new payload config ",(0,i.kt)("inlineCode",{parentName:"li"},"hoodie.payload.ordering.field")," helps specify a field, that the incoming upsert record can be compared with\nthe record on storage, to decide whether to overwrite or not. Users are encouraged to adopt this newer, more flexible model."),(0,i.kt)("li",{parentName:"ul"},"Hive sync supports hourly partitions via ",(0,i.kt)("inlineCode",{parentName:"li"},"SlashEncodedHourPartitionValueExtractor")),(0,i.kt)("li",{parentName:"ul"},"Support for IBM Cloud storage, Open J9 JVM.")),(0,i.kt)("h3",{id:"query-side-improvements"},"Query side improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Incremental Query on MOR (Spark Datasource)"),": Spark datasource now has experimental support for incremental queries on MOR table. This feature will be hardened and certified\nin the next release, along with a large overhaul of the spark datasource implementation. (sshh!:))"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Metadata Table For File Listings"),": Users can also leverage the metadata table on the query side for the following query paths. For Hive, setting the ",(0,i.kt)("inlineCode",{parentName:"li"},"hoodie.metadata.enable=true")," session\nproperty and for SparkSQL on Hive registered tables using ",(0,i.kt)("inlineCode",{parentName:"li"},"--conf spark.hadoop.hoodie.metadata.enable=true"),", allows the file listings for the partition to be fetched out of the metadata\ntable, instead of listing the underlying DFS partition.")),(0,i.kt)("h3",{id:"raw-release-notes"},"Raw Release Notes"),(0,i.kt)("p",null,"The raw release notes are available ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12348721"},"here")))}p.isMDXComponent=!0}}]);