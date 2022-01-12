"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87298],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?i.createElement(k,a(a({ref:t},s),{},{components:n})):i.createElement(k,a({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var d=2;d<l;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47151:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var i=n(83117),r=n(80102),l=(n(67294),n(3905)),a=["components"],o={id:"core.PoolConfig",title:"Interface: PoolConfig",sidebar_label:"PoolConfig",custom_edit_url:null},p=void 0,d={unversionedId:"api/interfaces/core.PoolConfig",id:"api/interfaces/core.PoolConfig",title:"Interface: PoolConfig",description:"core.PoolConfig",source:"@site/docs/api/interfaces/core.PoolConfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.PoolConfig",permalink:"/docs/next/api/interfaces/core.PoolConfig",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.PoolConfig",title:"Interface: PoolConfig",sidebar_label:"PoolConfig",custom_edit_url:null},sidebar:"API",previous:{title:"OneToOneOptions",permalink:"/docs/next/api/interfaces/core.OneToOneOptions"},next:{title:"PrimaryKeyOptions",permalink:"/docs/next/api/interfaces/core.PrimaryKeyOptions"}},s=[{value:"Properties",id:"properties",children:[{value:"Promise",id:"promise",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"acquireTimeoutMillis",id:"acquiretimeoutmillis",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"autostart",id:"autostart",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"evictionRunIntervalMillis",id:"evictionrunintervalmillis",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"fifo",id:"fifo",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"idleTimeoutMillis",id:"idletimeoutmillis",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"max",id:"max",children:[{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"maxWaitingClients",id:"maxwaitingclients",children:[{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3},{value:"min",id:"min",children:[{value:"Defined in",id:"defined-in-8",children:[],level:4}],level:3},{value:"name",id:"name",children:[{value:"Defined in",id:"defined-in-9",children:[],level:4}],level:3},{value:"numTestsPerRun",id:"numtestsperrun",children:[{value:"Defined in",id:"defined-in-10",children:[],level:4}],level:3},{value:"priorityRange",id:"priorityrange",children:[{value:"Defined in",id:"defined-in-11",children:[],level:4}],level:3},{value:"reapIntervalMillis",id:"reapintervalmillis",children:[{value:"Defined in",id:"defined-in-12",children:[],level:4}],level:3},{value:"refreshIdle",id:"refreshidle",children:[{value:"Defined in",id:"defined-in-13",children:[],level:4}],level:3},{value:"returnToHead",id:"returntohead",children:[{value:"Defined in",id:"defined-in-14",children:[],level:4}],level:3},{value:"softIdleTimeoutMillis",id:"softidletimeoutmillis",children:[{value:"Defined in",id:"defined-in-15",children:[],level:4}],level:3},{value:"testOnBorrow",id:"testonborrow",children:[{value:"Defined in",id:"defined-in-16",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"afterCreate",id:"aftercreate",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-17",children:[],level:4}],level:3},{value:"log",id:"log",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-18",children:[],level:4}],level:3}],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../modules/core"},"core"),".PoolConfig"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"promise"},"Promise"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"Promise"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"any")),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L386"},"packages/core/src/utils/Configuration.ts:386")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"acquiretimeoutmillis"},"acquireTimeoutMillis"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"acquireTimeoutMillis"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L380"},"packages/core/src/utils/Configuration.ts:380")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"autostart"},"autostart"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"autostart"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L382"},"packages/core/src/utils/Configuration.ts:382")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"evictionrunintervalmillis"},"evictionRunIntervalMillis"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"evictionRunIntervalMillis"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L383"},"packages/core/src/utils/Configuration.ts:383")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fifo"},"fifo"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"fifo"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L381"},"packages/core/src/utils/Configuration.ts:381")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"idletimeoutmillis"},"idleTimeoutMillis"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"idleTimeoutMillis"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L371"},"packages/core/src/utils/Configuration.ts:371")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"max"},"max"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"max"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L369"},"packages/core/src/utils/Configuration.ts:369")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maxwaitingclients"},"maxWaitingClients"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"maxWaitingClients"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L378"},"packages/core/src/utils/Configuration.ts:378")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"min"},"min"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"min"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L368"},"packages/core/src/utils/Configuration.ts:368")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"name"},"name"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"name"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L366"},"packages/core/src/utils/Configuration.ts:366")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"numtestsperrun"},"numTestsPerRun"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"numTestsPerRun"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L384"},"packages/core/src/utils/Configuration.ts:384")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"priorityrange"},"priorityRange"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"priorityRange"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L374"},"packages/core/src/utils/Configuration.ts:374")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"reapintervalmillis"},"reapIntervalMillis"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"reapIntervalMillis"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L372"},"packages/core/src/utils/Configuration.ts:372")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"refreshidle"},"refreshIdle"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"refreshIdle"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L370"},"packages/core/src/utils/Configuration.ts:370")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"returntohead"},"returnToHead"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"returnToHead"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L373"},"packages/core/src/utils/Configuration.ts:373")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"softidletimeoutmillis"},"softIdleTimeoutMillis"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"softIdleTimeoutMillis"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L385"},"packages/core/src/utils/Configuration.ts:385")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"testonborrow"},"testOnBorrow"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"testOnBorrow"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L379"},"packages/core/src/utils/Configuration.ts:379")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"aftercreate"},"afterCreate"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"afterCreate"),"(...",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"unknown")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"...a")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"unknown"),"[]")))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"unknown")),(0,l.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L367"},"packages/core/src/utils/Configuration.ts:367")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"log"},"log"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"log"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"message"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"logLevel"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"logLevel")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/072f23f/packages/core/src/utils/Configuration.ts#L375"},"packages/core/src/utils/Configuration.ts:375")))}m.isMDXComponent=!0}}]);