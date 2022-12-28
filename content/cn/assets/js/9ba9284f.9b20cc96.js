"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[44348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:a,o[1]=d;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2322:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={title:"Metadata Indexing",summary:"In this page, we describe how to run metadata indexing asynchronously.",toc:!0,last_modified_at:null},o=void 0,d={unversionedId:"metadata_indexing",id:"version-0.12.2/metadata_indexing",title:"Metadata Indexing",description:"We can now create different metadata indexes, including files, bloom filters and column stats,",source:"@site/versioned_docs/version-0.12.2/metadata_indexing.md",sourceDirName:".",slug:"/metadata_indexing",permalink:"/cn/docs/metadata_indexing",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.2/metadata_indexing.md",tags:[],version:"0.12.2",frontMatter:{title:"Metadata Indexing",summary:"In this page, we describe how to run metadata indexing asynchronously.",toc:!0,last_modified_at:null},sidebar:"docs",previous:{title:"Clustering",permalink:"/cn/docs/clustering"},next:{title:"Cleaning",permalink:"/cn/docs/hoodie_cleaner"}},l=[{value:"Setup Async Indexing",id:"setup-async-indexing",children:[{value:"Schedule indexing",id:"schedule-indexing",children:[],level:3},{value:"Execute Indexing",id:"execute-indexing",children:[],level:3},{value:"Drop Index",id:"drop-index",children:[],level:3}],level:2},{value:"Caveats",id:"caveats",children:[],level:2}],s={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We can now create different metadata indexes, including files, bloom filters and column stats,\nasynchronously in Hudi, which are then used by queries and writing to improve performance.\nBeing able to index without blocking writing has two benefits,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"improved write latency"),(0,a.kt)("li",{parentName:"ul"},"reduced resource wastage due to contention between writing and indexing.")),(0,a.kt)("p",null,"To learn more about the design of this feature, please check out ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/rfc/rfc-45/rfc-45.md"},"RFC-45"),"."),(0,a.kt)("h2",{id:"setup-async-indexing"},"Setup Async Indexing"),(0,a.kt)("p",null,"First, we will generate a continuous workload. In the below example, we are going to start a ",(0,a.kt)("a",{parentName:"p",href:"/docs/hoodie_deltastreamer#deltastreamer"},"deltastreamer")," which will continuously write data\nfrom raw parquet to Hudi table. We used the widely available ",(0,a.kt)("a",{parentName:"p",href:"https://registry.opendata.aws/nyc-tlc-trip-records-pds/"},"NY Taxi dataset"),", whose setup details are as below:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Ingestion write config"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"hoodie.datasource.write.recordkey.field=VendorID\nhoodie.datasource.write.partitionpath.field=tpep_dropoff_datetime\nhoodie.datasource.write.precombine.field=tpep_dropoff_datetime\nhoodie.deltastreamer.source.dfs.root=/Users/home/path/to/data/parquet_files/\nhoodie.deltastreamer.schemaprovider.target.schema.file=/Users/home/path/to/schema/schema.avsc\nhoodie.deltastreamer.schemaprovider.source.schema.file=/Users/home/path/to/schema/schema.avsc\n// set lock provider configs\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider\nhoodie.write.lock.zookeeper.url=<zk_url>\nhoodie.write.lock.zookeeper.port=<zk_port>\nhoodie.write.lock.zookeeper.lock_key=<zk_key>\nhoodie.write.lock.zookeeper.base_path=<zk_base_path>\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Run deltastreamer"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"spark-submit \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer `ls /Users/home/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.12.2-SNAPSHOT.jar` \\\n--props `ls /Users/home/path/to/write/config.properties` \\\n--source-class org.apache.hudi.utilities.sources.ParquetDFSSource  --schemaprovider-class org.apache.hudi.utilities.schema.FilebasedSchemaProvider \\\n--source-ordering-field tpep_dropoff_datetime   \\\n--table-type COPY_ON_WRITE \\\n--target-base-path file:///tmp/hudi-ny-taxi/   \\\n--target-table ny_hudi_tbl  \\\n--op UPSERT  \\\n--continuous \\\n--source-limit 5000000 \\\n--min-sync-interval-seconds 60\n")))),(0,a.kt)("p",null,"From version 0.11.0 onwards, Hudi metadata table is enabled by default and the files index will be automatically created. While the deltastreamer is running in continuous mode, let\nus schedule the indexing for COLUMN_STATS index. First we need to define a properties file for the indexer."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Enabling metadata table and configuring a lock provider are the prerequisites for using async indexer."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# ensure that both metadata and async indexing is enabled as below two configs\nhoodie.metadata.enable=true\nhoodie.metadata.index.async=true\n# enable column_stats index config\nhoodie.metadata.index.column.stats.enable=true\n# set concurrency mode and lock configs as this is a multi-writer scenario\n# check https://hudi.apache.org/docs/concurrency_control/ for differnt lock provider configs\nhoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider\nhoodie.write.lock.zookeeper.url=<zk_url>\nhoodie.write.lock.zookeeper.port=<zk_port>\nhoodie.write.lock.zookeeper.lock_key=<zk_key>\nhoodie.write.lock.zookeeper.base_path=<zk_base_path>\n")),(0,a.kt)("h3",{id:"schedule-indexing"},"Schedule indexing"),(0,a.kt)("p",null,"Now, we can schedule indexing using ",(0,a.kt)("inlineCode",{parentName:"p"},"HoodieIndexer")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"schedule")," mode as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"spark-submit \\\n--class org.apache.hudi.utilities.HoodieIndexer \\\n/Users/home/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.12.2-SNAPSHOT.jar \\\n--props /Users/home/path/to/indexer.properties \\\n--mode schedule \\\n--base-path /tmp/hudi-ny-taxi \\\n--table-name ny_hudi_tbl \\\n--index-types COLUMN_STATS \\\n--parallelism 1 \\\n--spark-memory 1g\n")),(0,a.kt)("p",null,"This will write an ",(0,a.kt)("inlineCode",{parentName:"p"},"indexing.requested")," instant to the timeline."),(0,a.kt)("h3",{id:"execute-indexing"},"Execute Indexing"),(0,a.kt)("p",null,"To execute indexing, run the indexer in ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," mode as below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"spark-submit \\\n--class org.apache.hudi.utilities.HoodieIndexer \\\n/Users/home/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.12.2-SNAPSHOT.jar \\\n--props /Users/home/path/to/indexer.properties \\\n--mode execute \\\n--base-path /tmp/hudi-ny-taxi \\\n--table-name ny_hudi_tbl \\\n--index-types COLUMN_STATS \\\n--parallelism 1 \\\n--spark-memory 1g\n")),(0,a.kt)("p",null,"We can also run the indexer in ",(0,a.kt)("inlineCode",{parentName:"p"},"scheduleAndExecute")," mode to do the above two steps in one shot. Doing it separately gives us better control over when we want to execute."),(0,a.kt)("p",null,"Let's look at the data timeline."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ls -lrt /tmp/hudi-ny-taxi/.hoodie\ntotal 1816\n-rw-r--r--  1 sagars  wheel       0 Apr 14 19:53 20220414195327683.commit.requested\n-rw-r--r--  1 sagars  wheel  153423 Apr 14 19:54 20220414195327683.inflight\n-rw-r--r--  1 sagars  wheel  207061 Apr 14 19:54 20220414195327683.commit\n-rw-r--r--  1 sagars  wheel       0 Apr 14 19:54 20220414195423420.commit.requested\n-rw-r--r--  1 sagars  wheel     659 Apr 14 19:54 20220414195437837.indexing.requested\n-rw-r--r--  1 sagars  wheel  323950 Apr 14 19:54 20220414195423420.inflight\n-rw-r--r--  1 sagars  wheel       0 Apr 14 19:55 20220414195437837.indexing.inflight\n-rw-r--r--  1 sagars  wheel  222920 Apr 14 19:55 20220414195423420.commit\n-rw-r--r--  1 sagars  wheel     734 Apr 14 19:55 hoodie.properties\n-rw-r--r--  1 sagars  wheel     979 Apr 14 19:55 20220414195437837.indexing\n")),(0,a.kt)("p",null,"In the data timeline, we can see that indexing was scheduled after one commit completed (",(0,a.kt)("inlineCode",{parentName:"p"},"20220414195327683.commit"),") and another was requested\n(",(0,a.kt)("inlineCode",{parentName:"p"},"20220414195423420.commit.requested"),"). This would have picked ",(0,a.kt)("inlineCode",{parentName:"p"},"20220414195327683")," as the base instant. Indexing was inflight with an inflight writer as well. If we parse the\nindexer logs, we would find that it indeed caught up with instant ",(0,a.kt)("inlineCode",{parentName:"p"},"20220414195423420")," after indexing upto the base instant."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"22/04/14 19:55:22 INFO HoodieTableMetaClient: Finished Loading Table of type MERGE_ON_READ(version=1, baseFileFormat=HFILE) from /tmp/hudi-ny-taxi/.hoodie/metadata\n22/04/14 19:55:22 INFO RunIndexActionExecutor: Starting Index Building with base instant: 20220414195327683\n22/04/14 19:55:22 INFO HoodieBackedTableMetadataWriter: Creating a new metadata index for partition 'column_stats' under path /tmp/hudi-ny-taxi/.hoodie/metadata upto instant 20220414195327683\n...\n...\n22/04/14 19:55:38 INFO RunIndexActionExecutor: Total remaining instants to index: 1\n22/04/14 19:55:38 INFO HoodieTableMetaClient: Loading HoodieTableMetaClient from /tmp/hudi-ny-taxi/.hoodie/metadata\n22/04/14 19:55:38 INFO HoodieTableConfig: Loading table properties from /tmp/hudi-ny-taxi/.hoodie/metadata/.hoodie/hoodie.properties\n22/04/14 19:55:38 INFO HoodieTableMetaClient: Finished Loading Table of type MERGE_ON_READ(version=1, baseFileFormat=HFILE) from /tmp/hudi-ny-taxi/.hoodie/metadata\n22/04/14 19:55:38 INFO HoodieActiveTimeline: Loaded instants upto : Option{val=[20220414195423420__deltacommit__COMPLETED]}\n22/04/14 19:55:38 INFO RunIndexActionExecutor: Starting index catchup task\n...\n")),(0,a.kt)("h3",{id:"drop-index"},"Drop Index"),(0,a.kt)("p",null,"To drop an index, just run the index in ",(0,a.kt)("inlineCode",{parentName:"p"},"dropindex")," mode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"spark-submit \\\n--class org.apache.hudi.utilities.HoodieIndexer \\\n/Users/home/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.12.2-SNAPSHOT.jar \\\n--props /Users/home/path/to/indexer.properties \\\n--mode dropindex \\\n--base-path /tmp/hudi-ny-taxi \\\n--table-name ny_hudi_tbl \\\n--index-types COLUMN_STATS \\\n--parallelism 1 \\\n--spark-memory 2g\n")),(0,a.kt)("h2",{id:"caveats"},"Caveats"),(0,a.kt)("p",null,"Asynchronous indexing feature is still evolving. Few points to note from deployment perspective while running the indexer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"While an index can be created concurrently with ingestion, it cannot be dropped concurrently. Please stop all writers\nbefore dropping an index."),(0,a.kt)("li",{parentName:"ul"},"Files index is created by default as long as the metadata table is enabled."),(0,a.kt)("li",{parentName:"ul"},"Trigger indexing for one metadata partition (or index type) at a time."),(0,a.kt)("li",{parentName:"ul"},"If an index is enabled via async HoodieIndexer, then ensure that index is also enabled in configs corresponding to regular ingestion writers. Otherwise, metadata writer will\nthink that particular index was disabled and cleanup the metadata partition."),(0,a.kt)("li",{parentName:"ul"},"In the case of multi-writers, enable async index and specific index config for all writers."),(0,a.kt)("li",{parentName:"ul"},"Unlike other table services like compaction and clustering, where we have a separate configuration to run inline, there is no such inline config here.\nFor example, if async indexing is disabled and metadata is enabled along with column stats index type, then both files and column stats index will be created synchronously with ingestion.")),(0,a.kt)("p",null,"Some of these limitations will be removed in the upcoming releases. Please\nfollow ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-2488"},"HUDI-2488")," for developments on this feature."))}p.isMDXComponent=!0}}]);