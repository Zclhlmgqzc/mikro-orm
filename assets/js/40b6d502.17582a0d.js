"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12078],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50030:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],l={id:"core.CountOptions",title:"Interface: CountOptions<T, P>",sidebar_label:"CountOptions",custom_edit_url:null},p=void 0,c={unversionedId:"api/interfaces/core.CountOptions",id:"api/interfaces/core.CountOptions",title:"Interface: CountOptions<T, P>",description:"core.CountOptions",source:"@site/docs/api/interfaces/core.CountOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.CountOptions",permalink:"/docs/next/api/interfaces/core.CountOptions",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.CountOptions",title:"Interface: CountOptions<T, P>",sidebar_label:"CountOptions",custom_edit_url:null},sidebar:"API",previous:{title:"ConnectionOptions",permalink:"/docs/next/api/interfaces/core.ConnectionOptions"},next:{title:"DeleteOptions",permalink:"/docs/next/api/interfaces/core.DeleteOptions"}},d=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"cache",id:"cache",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"ctx",id:"ctx",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"filters",id:"filters",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"groupBy",id:"groupby",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"having",id:"having",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"populate",id:"populate",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"schema",id:"schema",children:[{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3}],level:2}],s={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/core"},"core"),".CountOptions"),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"P")),(0,a.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," = ",(0,a.kt)("inlineCode",{parentName:"td"},"never"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cache"},"cache"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"cache"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"]"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/227d5bc/packages/core/src/drivers/IDatabaseDriver.ts#L132"},"packages/core/src/drivers/IDatabaseDriver.ts:132")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ctx"},"ctx"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"ctx"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/227d5bc/packages/core/src/drivers/IDatabaseDriver.ts#L134"},"packages/core/src/drivers/IDatabaseDriver.ts:134")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"filters"},"filters"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"filters"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[] ","|"," ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#dictionary"},(0,a.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#dictionary"},(0,a.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/227d5bc/packages/core/src/drivers/IDatabaseDriver.ts#L128"},"packages/core/src/drivers/IDatabaseDriver.ts:128")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"groupby"},"groupBy"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"groupBy"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," readonly ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/227d5bc/packages/core/src/drivers/IDatabaseDriver.ts#L130"},"packages/core/src/drivers/IDatabaseDriver.ts:130")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"having"},"having"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"having"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#qbfilterquery"},(0,a.kt)("inlineCode",{parentName:"a"},"QBFilterQuery")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/227d5bc/packages/core/src/drivers/IDatabaseDriver.ts#L131"},"packages/core/src/drivers/IDatabaseDriver.ts:131")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"populate"},"populate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"populate"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," readonly ",(0,a.kt)("inlineCode",{parentName:"p"},"AutoPath"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"P"),">","[]"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/227d5bc/packages/core/src/drivers/IDatabaseDriver.ts#L133"},"packages/core/src/drivers/IDatabaseDriver.ts:133")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"schema"},"schema"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"schema"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/227d5bc/packages/core/src/drivers/IDatabaseDriver.ts#L129"},"packages/core/src/drivers/IDatabaseDriver.ts:129")))}u.isMDXComponent=!0}}]);