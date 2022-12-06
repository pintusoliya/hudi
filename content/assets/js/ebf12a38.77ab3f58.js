"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[81855],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76472:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={title:"Concurrency Control",summary:"In this page, we will discuss how to perform concurrent writes to Hudi Tables.",toc:!0,last_modified_at:new Date("2021-03-19T19:59:57.000Z")},a=void 0,l={unversionedId:"concurrency_control",id:"version-0.10.1/concurrency_control",title:"Concurrency Control",description:"In this section, we will cover Hudi's concurrency model and describe ways to ingest data into a Hudi Table from multiple writers; using the DeltaStreamer tool as well as",source:"@site/versioned_docs/version-0.10.1/concurrency_control.md",sourceDirName:".",slug:"/concurrency_control",permalink:"/docs/0.10.1/concurrency_control",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.1/concurrency_control.md",tags:[],version:"0.10.1",frontMatter:{title:"Concurrency Control",summary:"In this page, we will discuss how to perform concurrent writes to Hudi Tables.",toc:!0,last_modified_at:"2021-03-19T19:59:57.000Z"},sidebar:"version-0.10.1/docs",previous:{title:"Key Generation",permalink:"/docs/0.10.1/key_generation"},next:{title:"SQL DDL",permalink:"/docs/0.10.1/table_management"}},s=[{value:"Supported Concurrency Controls",id:"supported-concurrency-controls",children:[],level:2},{value:"Single Writer Guarantees",id:"single-writer-guarantees",children:[],level:2},{value:"Multi Writer Guarantees",id:"multi-writer-guarantees",children:[],level:2},{value:"Enabling Multi Writing",id:"enabling-multi-writing",children:[],level:2},{value:"Datasource Writer",id:"datasource-writer",children:[],level:2},{value:"DeltaStreamer",id:"deltastreamer",children:[],level:2},{value:"Best Practices when using Optimistic Concurrency Control",id:"best-practices-when-using-optimistic-concurrency-control",children:[],level:2},{value:"Disabling Multi Writing",id:"disabling-multi-writing",children:[],level:2},{value:"Caveats",id:"caveats",children:[],level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, we will cover Hudi's concurrency model and describe ways to ingest data into a Hudi Table from multiple writers; using the ",(0,o.kt)("a",{parentName:"p",href:"#deltastreamer"},"DeltaStreamer")," tool as well as\nusing the ",(0,o.kt)("a",{parentName:"p",href:"#datasource-writer"},"Hudi datasource"),"."),(0,o.kt)("h2",{id:"supported-concurrency-controls"},"Supported Concurrency Controls"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"MVCC")," : Hudi table services such as compaction, cleaning, clustering leverage Multi Version Concurrency Control to provide snapshot isolation\nbetween multiple table service writers and readers. Additionally, using MVCC, Hudi provides snapshot isolation between an ingestion writer and multiple concurrent readers.\nWith this model, Hudi supports running any number of table service jobs concurrently, without any concurrency conflict.\nThis is made possible by ensuring that scheduling plans of such table services always happens in a single writer mode to ensure no conflict and avoids race conditions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"[NEW]"," OPTIMISTIC CONCURRENCY")," : Write operations such as the ones described above (UPSERT, INSERT) etc, leverage optimistic concurrency control to enable multiple ingestion writers to\nthe same Hudi Table. Hudi supports ",(0,o.kt)("inlineCode",{parentName:"p"},"file level OCC"),", i.e., for any 2 commits (or writers) happening to the same table, if they do not have writes to overlapping files being changed, both writers are allowed to succeed.\nThis feature is currently ",(0,o.kt)("em",{parentName:"p"},"experimental")," and requires either Zookeeper or HiveMetastore to acquire locks."))),(0,o.kt)("p",null,"It may be helpful to understand the different guarantees provided by ",(0,o.kt)("a",{parentName:"p",href:"/docs/writing_data#write-operations"},"write operations")," via Hudi datasource or the delta streamer."),(0,o.kt)("h2",{id:"single-writer-guarantees"},"Single Writer Guarantees"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"UPSERT Guarantee"),": The target table will NEVER show duplicates."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"INSERT Guarantee"),": The target table wilL NEVER have duplicates if ",(0,o.kt)("a",{parentName:"li",href:"/docs/configurations#INSERT_DROP_DUPS_OPT_KEY"},"dedup")," is enabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"BULK_INSERT Guarantee"),": The target table will NEVER have duplicates if ",(0,o.kt)("a",{parentName:"li",href:"/docs/configurations#INSERT_DROP_DUPS_OPT_KEY"},"dedup")," is enabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"INCREMENTAL PULL Guarantee"),": Data consumption and checkpoints are NEVER out of order.")),(0,o.kt)("h2",{id:"multi-writer-guarantees"},"Multi Writer Guarantees"),(0,o.kt)("p",null,"With multiple writers using OCC, some of the above guarantees change as follows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"UPSERT Guarantee"),": The target table will NEVER show duplicates."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"INSERT Guarantee"),": The target table MIGHT have duplicates even if ",(0,o.kt)("a",{parentName:"li",href:"/docs/configurations#INSERT_DROP_DUPS_OPT_KEY"},"dedup")," is enabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"BULK_INSERT Guarantee"),": The target table MIGHT have duplicates even if ",(0,o.kt)("a",{parentName:"li",href:"/docs/configurations#INSERT_DROP_DUPS_OPT_KEY"},"dedup")," is enabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"INCREMENTAL PULL Guarantee"),": Data consumption and checkpoints MIGHT be out of order due to multiple writer jobs finishing at different times.")),(0,o.kt)("h2",{id:"enabling-multi-writing"},"Enabling Multi Writing"),(0,o.kt)("p",null,"The following properties are needed to be set properly to turn on optimistic concurrency control."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.cleaner.policy.failed.writes=LAZY\nhoodie.write.lock.provider=<lock-provider-classname>\n")),(0,o.kt)("p",null,"There are 3 different server based lock providers that require different configuration to be set."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Zookeeper"))," based lock provider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider\nhoodie.write.lock.zookeeper.url\nhoodie.write.lock.zookeeper.port\nhoodie.write.lock.zookeeper.lock_key\nhoodie.write.lock.zookeeper.base_path\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"HiveMetastore"))," based lock provider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.write.lock.provider=org.apache.hudi.hive.HiveMetastoreBasedLockProvider\nhoodie.write.lock.hivemetastore.database\nhoodie.write.lock.hivemetastore.table\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The HiveMetastore URI's are picked up from the hadoop configuration file loaded during runtime.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Amazon DynamoDB"))," based lock provider"),(0,o.kt)("p",null,"Amazon DynamoDB based lock provides a simple way to support multi writing across different clusters.  You can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#DynamoDB-based-Locks-Configurations"},"DynamoDB based Locks Configurations"),"\nsection for the details of each related configuration knob."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.write.lock.provider=org.apache.hudi.aws.transaction.lock.DynamoDBBasedLockProvider\nhoodie.write.lock.dynamodb.table (required)\nhoodie.write.lock.dynamodb.partition_key (optional)\nhoodie.write.lock.dynamodb.region (optional)\nhoodie.write.lock.dynamodb.endpoint_url (optional)\nhoodie.write.lock.dynamodb.billing_mode (optional)\n")),(0,o.kt)("p",null,"When using the DynamoDB-based lock provider, the name of the DynamoDB table acting as the lock table for Hudi is\nspecified by the config ",(0,o.kt)("inlineCode",{parentName:"p"},"hoodie.write.lock.dynamodb.table"),". This DynamoDB table is automatically created by Hudi, so you\ndon't have to create the table yourself. If you want to use an existing DynamoDB table, make sure that an attribute with\nthe name ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," is present in the table.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," attribute should be the partition key of the DynamoDB table. The\nconfig ",(0,o.kt)("inlineCode",{parentName:"p"},"hoodie.write.lock.dynamodb.partition_key")," specifies the value to put for the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," attribute (not the attribute\nname), which is used for the lock on the same table. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"hoodie.write.lock.dynamodb.partition_key")," is set to\nthe table name, so that multiple writers writing to the same table share the same lock. If you customize the name, make\nsure it's the same across multiple writers."),(0,o.kt)("p",null,"Also, to set up the credentials for accessing AWS resources, customers can pass the following props to Hudi jobs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.aws.access.key\nhoodie.aws.secret.key\nhoodie.aws.session.token\n")),(0,o.kt)("p",null,"If not configured, Hudi falls back to use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/DefaultAWSCredentialsProviderChain.html"},"DefaultAWSCredentialsProviderChain"),"."),(0,o.kt)("p",null,"IAM policy for your service instance will need to add the following permissions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Sid":"DynamoDBLocksTable",\n  "Effect": "Allow",\n  "Action": [\n    "dynamodb:CreateTable",\n    "dynamodb:DeleteItem",\n    "dynamodb:DescribeTable",\n    "dynamodb:GetItem",\n    "dynamodb:PutItem",\n    "dynamodb:Scan",\n    "dynamodb:UpdateItem"\n  ],\n  "Resource": "arn:${Partition}:dynamodb:${Region}:${Account}:table/${TableName}"\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TableName")," : same as ",(0,o.kt)("inlineCode",{parentName:"li"},"hoodie.write.lock.dynamodb.partition_key")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Region"),": same as ",(0,o.kt)("inlineCode",{parentName:"li"},"hoodie.write.lock.dynamodb.region"))),(0,o.kt)("p",null,"AWS SDK dependencies are not bundled with Hudi starting from v0.10.0 and will need to be added to your classpath.\nAdd the following Maven packages (check the latest versions at time of install):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"com.amazonaws:dynamodb-lock-client\ncom.amazonaws:aws-java-sdk-dynamodb\ncom.amazonaws:aws-java-sdk-core\n")),(0,o.kt)("h2",{id:"datasource-writer"},"Datasource Writer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"hudi-spark")," module offers the DataSource API to write (and read) a Spark DataFrame into a Hudi table."),(0,o.kt)("p",null,"Following is an example of how to use optimistic_concurrency_control via spark datasource"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'inputDF.write.format("hudi")\n       .options(getQuickstartWriteConfigs)\n       .option(PRECOMBINE_FIELD_OPT_KEY, "ts")\n       .option("hoodie.cleaner.policy.failed.writes", "LAZY")\n       .option("hoodie.write.concurrency.mode", "optimistic_concurrency_control")\n       .option("hoodie.write.lock.zookeeper.url", "zookeeper")\n       .option("hoodie.write.lock.zookeeper.port", "2181")\n       .option("hoodie.write.lock.zookeeper.lock_key", "test_table")\n       .option("hoodie.write.lock.zookeeper.base_path", "/test")\n       .option(RECORDKEY_FIELD_OPT_KEY, "uuid")\n       .option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath")\n       .option(TABLE_NAME, tableName)\n       .mode(Overwrite)\n       .save(basePath)\n')),(0,o.kt)("h2",{id:"deltastreamer"},"DeltaStreamer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer")," utility (part of hudi-utilities-bundle) provides ways to ingest from different sources such as DFS or Kafka, with the following capabilities."),(0,o.kt)("p",null,"Using optimistic_concurrency_control via delta streamer requires adding the above configs to the properties file that can be passed to the\njob. For example below, adding the configs to kafka-source.properties file and passing them to deltastreamer will enable optimistic concurrency.\nA deltastreamer job can then be triggered as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"[hoodie]$ spark-submit --class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` \\\n  --props file://${PWD}/hudi-utilities/src/test/resources/delta-streamer-config/kafka-source.properties \\\n  --schemaprovider-class org.apache.hudi.utilities.schema.SchemaRegistryProvider \\\n  --source-class org.apache.hudi.utilities.sources.AvroKafkaSource \\\n  --source-ordering-field impresssiontime \\\n  --target-base-path file:\\/\\/\\/tmp/hudi-deltastreamer-op \\ \n  --target-table uber.impressions \\\n  --op BULK_INSERT\n")),(0,o.kt)("h2",{id:"best-practices-when-using-optimistic-concurrency-control"},"Best Practices when using Optimistic Concurrency Control"),(0,o.kt)("p",null,"Concurrent Writing to Hudi tables requires acquiring a lock with either Zookeeper or HiveMetastore. Due to several reasons you might want to configure retries to allow your application to acquire the lock. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Network connectivity or excessive load on servers increasing time for lock acquisition resulting in timeouts"),(0,o.kt)("li",{parentName:"ol"},"Running a large number of concurrent jobs that are writing to the same hudi table can result in contention during lock acquisition can cause timeouts"),(0,o.kt)("li",{parentName:"ol"},"In some scenarios of conflict resolution, Hudi commit operations might take upto 10's of seconds while the lock is being held. This can result in timeouts for other jobs waiting to acquire a lock.")),(0,o.kt)("p",null,"Set the correct native lock provider client retries. NOTE that sometimes these settings are set on the server once and all clients inherit the same configs. Please check your settings before enabling optimistic concurrency."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.write.lock.wait_time_ms\nhoodie.write.lock.num_retries\n")),(0,o.kt)("p",null,"Set the correct hudi client retries for Zookeeper & HiveMetastore. This is useful in cases when native client retry settings cannot be changed. Please note that these retries will happen in addition to any native client retries that you may have set. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.write.lock.client.wait_time_ms\nhoodie.write.lock.client.num_retries\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Setting the right values for these depends on a case by case basis; some defaults have been provided for general cases.")),(0,o.kt)("h2",{id:"disabling-multi-writing"},"Disabling Multi Writing"),(0,o.kt)("p",null,"Remove the following settings that were used to enable multi-writer or override with default values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.write.concurrency.mode=single_writer\nhoodie.cleaner.policy.failed.writes=EAGER\n")),(0,o.kt)("h2",{id:"caveats"},"Caveats"),(0,o.kt)("p",null,"If you are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"WriteClient")," API, please note that multiple writes to the table need to be initiated from 2 different instances of the write client.\nIt is NOT recommended to use the same instance of the write client to perform multi writing."))}d.isMDXComponent=!0}}]);