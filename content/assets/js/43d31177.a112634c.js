"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[83660],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},16866:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={version:"0.5.0",title:"Concepts",keywords:["hudi","design","storage","views","timeline"],summary:"Here we introduce some basic concepts & give a broad technical overview of Hudi",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},o=void 0,l={unversionedId:"concepts",id:"version-0.5.0/concepts",title:"Concepts",description:"Apache Hudi (pronounced \u201cHudi\u201d) provides the following streaming primitives over datasets on DFS",source:"@site/versioned_docs/version-0.5.0/concepts.md",sourceDirName:".",slug:"/concepts",permalink:"/docs/0.5.0/concepts",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.0/concepts.md",tags:[],version:"0.5.0",frontMatter:{version:"0.5.0",title:"Concepts",keywords:["hudi","design","storage","views","timeline"],summary:"Here we introduce some basic concepts & give a broad technical overview of Hudi",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z"}},s=[{value:"Timeline",id:"timeline",children:[],level:2},{value:"File management",id:"file-management",children:[],level:2},{value:"Storage Types &amp; Views",id:"storage-types--views",children:[{value:"Storage Types",id:"storage-types",children:[],level:3},{value:"Views",id:"views",children:[],level:3}],level:2},{value:"Copy On Write Storage",id:"copy-on-write-storage",children:[],level:2},{value:"Merge On Read Storage",id:"merge-on-read-storage",children:[],level:2}],d={toc:s};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Hudi (pronounced \u201cHudi\u201d) provides the following streaming primitives over datasets on DFS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upsert                     (how do I change the dataset?)"),(0,i.kt)("li",{parentName:"ul"},"Incremental pull           (how do I fetch data that changed?)")),(0,i.kt)("p",null,"In this section, we will discuss key concepts & terminologies that are important to understand, to be able to effectively use these primitives."),(0,i.kt)("h2",{id:"timeline"},"Timeline"),(0,i.kt)("p",null,"At its core, Hudi maintains a ",(0,i.kt)("inlineCode",{parentName:"p"},"timeline")," of all actions performed on the dataset at different ",(0,i.kt)("inlineCode",{parentName:"p"},"instants")," of time that helps provide instantaneous views of the dataset,\nwhile also efficiently supporting retrieval of data in the order of arrival. A Hudi instant consists of the following components "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Action type")," : Type of action performed on the dataset"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Instant time")," : Instant time is typically a timestamp (e.g: 20190117010349), which monotonically increases in the order of action's begin time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state")," : current state of the instant")),(0,i.kt)("p",null,"Hudi guarantees that the actions performed on the timeline are atomic & timeline consistent based on the instant time."),(0,i.kt)("p",null,"Key actions performed include"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COMMITS")," - A commit denotes an ",(0,i.kt)("strong",{parentName:"li"},"atomic write")," of a batch of records into a dataset."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CLEANS")," - Background activity that gets rid of older versions of files in the dataset, that are no longer needed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DELTA_COMMIT")," - A delta commit refers to an ",(0,i.kt)("strong",{parentName:"li"},"atomic write")," of a batch of records into a  MergeOnRead storage type of dataset, where some/all of the data could be just written to delta logs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COMPACTION")," - Background activity to reconcile differential data structures within Hudi e.g: moving updates from row based log files to columnar formats. Internally, compaction manifests as a special commit on the timeline"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ROLLBACK")," - Indicates that a commit/delta commit was unsuccessful & rolled back, removing any partial files produced during such a write"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SAVEPOINT"),' - Marks certain file groups as "saved", such that cleaner will not delete them. It helps restore the dataset to a point on the timeline, in case of disaster/data recovery scenarios.')),(0,i.kt)("p",null,"Any given instant can be\nin one of the following states"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REQUESTED")," - Denotes an action has been scheduled, but has not initiated"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INFLIGHT")," - Denotes that the action is currently being performed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COMPLETED")," - Denotes completion of an action on the timeline")),(0,i.kt)("figure",null,(0,i.kt)("img",{className:"docimage",src:"/assets/images/hudi_timeline.png",alt:"hudi_timeline.png"})),(0,i.kt)("p",null,"Example above shows upserts happenings between 10:00 and 10:20 on a Hudi dataset, roughly every 5 mins, leaving commit metadata on the Hudi timeline, along\nwith other background cleaning/compactions. One key observation to make is that the commit time indicates the ",(0,i.kt)("inlineCode",{parentName:"p"},"arrival time")," of the data (10:20AM), while the actual data\norganization reflects the actual time or ",(0,i.kt)("inlineCode",{parentName:"p"},"event time"),", the data was intended for (hourly buckets from 07:00). These are two key concepts when reasoning about tradeoffs between latency and completeness of data."),(0,i.kt)("p",null,"When there is late arriving data (data intended for 9:00 arriving >1 hr late at 10:20), we can see the upsert producing new data into even older time buckets/folders.\nWith the help of the timeline, an incremental query attempting to get all new data that was committed successfully since 10:00 hours, is able to very efficiently consume\nonly the changed files without say scanning all the time buckets > 07:00."),(0,i.kt)("h2",{id:"file-management"},"File management"),(0,i.kt)("p",null,"Hudi organizes a datasets into a directory structure under a ",(0,i.kt)("inlineCode",{parentName:"p"},"basepath")," on DFS. Dataset is broken up into partitions, which are folders containing data files for that partition,\nvery similar to Hive tables. Each partition is uniquely identified by its ",(0,i.kt)("inlineCode",{parentName:"p"},"partitionpath"),", which is relative to the basepath."),(0,i.kt)("p",null,"Within each partition, files are organized into ",(0,i.kt)("inlineCode",{parentName:"p"},"file groups"),", uniquely identified by a ",(0,i.kt)("inlineCode",{parentName:"p"},"file id"),". Each file group contains several\n",(0,i.kt)("inlineCode",{parentName:"p"},"file slices"),", where each slice contains a base columnar file (",(0,i.kt)("inlineCode",{parentName:"p"},"*.parquet"),") produced at a certain commit/compaction instant time,\nalong with set of log files (",(0,i.kt)("inlineCode",{parentName:"p"},"*.log.*"),") that contain inserts/updates to the base file since the base file was produced.\nHudi adopts a MVCC design, where compaction action merges logs and base files to produce new file slices and cleaning action gets rid of\nunused/older file slices to reclaim space on DFS. "),(0,i.kt)("p",null,"Hudi provides efficient upserts, by mapping a given hoodie key (record key + partition path) consistently to a file group, via an indexing mechanism.\nThis mapping between record key and file group/file id, never changes once the first version of a record has been written to a file. In short, the\nmapped file group contains all versions of a group of records."),(0,i.kt)("h2",{id:"storage-types--views"},"Storage Types & Views"),(0,i.kt)("p",null,"Hudi storage types define how data is indexed & laid out on the DFS and how the above primitives and timeline activities are implemented on top of such organization (i.e how data is written).\nIn turn, ",(0,i.kt)("inlineCode",{parentName:"p"},"views")," define how the underlying data is exposed to the queries (i.e how data is read). "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Storage Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Supported Views"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Copy On Write"),(0,i.kt)("td",{parentName:"tr",align:null},"Snapshot Queries + Incremental Queries")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Merge On Read"),(0,i.kt)("td",{parentName:"tr",align:null},"Snapshot Queries + Incremental Queries + Read Optimized Queries")))),(0,i.kt)("h3",{id:"storage-types"},"Storage Types"),(0,i.kt)("p",null,"Hudi supports the following storage types."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#copy-on-write-storage"},"Copy On Write")," : Stores data using exclusively columnar file formats (e.g parquet). Updates simply version & rewrite the files by performing a synchronous merge during write."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#merge-on-read-storage"},"Merge On Read")," : Stores data using a combination of columnar (e.g parquet) + row based (e.g avro) file formats. Updates are logged to delta files & later compacted to produce new versions of columnar files synchronously or asynchronously.")),(0,i.kt)("p",null,"Following table summarizes the trade-offs between these two storage types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Trade-off"),(0,i.kt)("th",{parentName:"tr",align:null},"CopyOnWrite"),(0,i.kt)("th",{parentName:"tr",align:null},"MergeOnRead"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Latency"),(0,i.kt)("td",{parentName:"tr",align:null},"Higher"),(0,i.kt)("td",{parentName:"tr",align:null},"Lower")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Update cost (I/O)"),(0,i.kt)("td",{parentName:"tr",align:null},"Higher (rewrite entire parquet)"),(0,i.kt)("td",{parentName:"tr",align:null},"Lower (append to delta log)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Parquet File Size"),(0,i.kt)("td",{parentName:"tr",align:null},"Smaller (high update(I/0) cost)"),(0,i.kt)("td",{parentName:"tr",align:null},"Larger (low update cost)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Write Amplification"),(0,i.kt)("td",{parentName:"tr",align:null},"Higher"),(0,i.kt)("td",{parentName:"tr",align:null},"Lower (depending on compaction strategy)")))),(0,i.kt)("h3",{id:"views"},"Views"),(0,i.kt)("p",null,"Hudi supports the following views of stored data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Read Optimized View")," : Queries on this view see the latest snapshot of the dataset as of a given commit or compaction action.\nThis view exposes only the base/columnar files in latest file slices to the queries and guarantees the same columnar query performance compared to a non-hudi columnar dataset. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Incremental View")," : Queries on this view only see new data written to the dataset, since a given commit/compaction. This view effectively provides change streams to enable incremental data pipelines. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Realtime View")," : Queries on this view see the latest snapshot of dataset as of a given delta commit action. This view provides near-real time datasets (few mins)\nby merging the base and delta files of the latest file slice on-the-fly.")),(0,i.kt)("p",null,"Following table summarizes the trade-offs between the different views."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Trade-off"),(0,i.kt)("th",{parentName:"tr",align:null},"ReadOptimized"),(0,i.kt)("th",{parentName:"tr",align:null},"RealTime"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Latency"),(0,i.kt)("td",{parentName:"tr",align:null},"Higher"),(0,i.kt)("td",{parentName:"tr",align:null},"Lower")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Query Latency"),(0,i.kt)("td",{parentName:"tr",align:null},"Lower (raw columnar performance)"),(0,i.kt)("td",{parentName:"tr",align:null},"Higher (merge columnar + row based delta)")))),(0,i.kt)("h2",{id:"copy-on-write-storage"},"Copy On Write Storage"),(0,i.kt)("p",null,"File slices in Copy-On-Write storage only contain the base/columnar file and each commit produces new versions of base files.\nIn other words, we implicitly compact on every commit, such that only columnar data exists. As a result, the write amplification\n(number of bytes written for 1 byte of incoming data) is much higher, where read amplification is zero.\nThis is a much desired property for analytical workloads, which is predominantly read-heavy."),(0,i.kt)("p",null,"Following illustrates how this works conceptually, when  data written into copy-on-write storage  and two queries running on top of it."),(0,i.kt)("figure",null,(0,i.kt)("img",{className:"docimage",src:"/assets/images/hudi_cow.png",alt:"hudi_cow.png"})),(0,i.kt)("p",null,"As data gets written, updates to existing file groups produce a new slice for that file group stamped with the commit instant time,\nwhile inserts allocate a new file group and write its first slice for that file group. These file slices and their commit instant times are color coded above.\nSQL queries running against such a dataset (eg: ",(0,i.kt)("inlineCode",{parentName:"p"},"select count(*)")," counting the total records in that partition), first checks the timeline for the latest commit\nand filters all but latest file slices of each file group. As you can see, an old query does not see the current inflight commit's files color coded in pink,\nbut a new query starting after the commit picks up the new data. Thus queries are immune to any write failures/partial writes and only run on committed data."),(0,i.kt)("p",null,"The intention of copy on write storage, is to fundamentally improve how datasets are managed today through"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First class support for atomically updating data at file-level, instead of rewriting whole tables/partitions"),(0,i.kt)("li",{parentName:"ul"},"Ability to incremental consume changes, as opposed to wasteful scans or fumbling with heuristics"),(0,i.kt)("li",{parentName:"ul"},"Tight control file sizes to keep query performance excellent (small files hurt query performance considerably).")),(0,i.kt)("h2",{id:"merge-on-read-storage"},"Merge On Read Storage"),(0,i.kt)("p",null,"Merge on read storage is a superset of copy on write, in the sense it still provides a read optimized view of the dataset via the Read Optmized table.\nAdditionally, it stores incoming upserts for each file group, onto a row based delta log, that enables providing near real-time data to the queries\nby applying the delta log, onto the latest version of each file id on-the-fly during query time. Thus, this storage type attempts to balance read and write amplication intelligently, to provide near real-time queries.\nThe most significant change here, would be to the compactor, which now carefully chooses which delta logs need to be compacted onto\ntheir columnar base file, to keep the query performance in check (larger delta logs would incur longer merge times with merge data on query side)"),(0,i.kt)("p",null,"Following illustrates how the storage works, and shows queries on both near-real time table and read optimized table."),(0,i.kt)("figure",null,(0,i.kt)("img",{className:"docimage",src:"/assets/images/hudi_mor.png",alt:"hudi_mor.png"})),(0,i.kt)("p",null,"There are lot of interesting things happening in this example, which bring out the subtleties in the approach."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We now have commits every 1 minute or so, something we could not do in the other storage type."),(0,i.kt)("li",{parentName:"ul"},"Within each file id group, now there is an delta log, which holds incoming updates to records in the base columnar files. In the example, the delta logs hold\nall the data from 10:05 to 10:10. The base columnar files are still versioned with the commit, as before.\nThus, if one were to simply look at base files alone, then the storage layout looks exactly like a copy on write table."),(0,i.kt)("li",{parentName:"ul"},"A periodic compaction process reconciles these changes from the delta log and produces a new version of base file, just like what happened at 10:05 in the example."),(0,i.kt)("li",{parentName:"ul"},"There are two ways of querying the same underlying storage: ReadOptimized (RO) Table and Near-Realtime (RT) table, depending on whether we chose query performance or freshness of data."),(0,i.kt)("li",{parentName:"ul"},"The semantics around when data from a commit is available to a query changes in a subtle way for the RO table. Note, that such a query\nrunning at 10:10, wont see data after 10:05 above, while a query on the RT table always sees the freshest data."),(0,i.kt)("li",{parentName:"ul"},"When we trigger compaction & what it decides to compact hold all the key to solving these hard problems. By implementing a compacting\nstrategy, where we aggressively compact the latest partitions compared to older partitions, we could ensure the RO Table sees data\npublished within X minutes in a consistent fashion.")),(0,i.kt)("p",null,"The intention of merge on read storage is to enable near real-time processing directly on top of DFS, as opposed to copying\ndata out to specialized systems, which may not be able to handle the data volume. There are also a few secondary side benefits to\nthis storage such as reduced write amplification by avoiding synchronous merge of data, i.e, the amount of data written per 1 bytes of data in a batch"))}p.isMDXComponent=!0}}]);