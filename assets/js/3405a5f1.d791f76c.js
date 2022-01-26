"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38272],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},66145:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return h}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],s={slug:"mikro-orm-4-1-released",title:"MikroORM 4.1: Let\u2019s talk about performance",author:"Martin Ad\xe1mek",authorTitle:"Author of MikroORM",authorURL:"https://github.com/B4nan",authorImageURL:"https://avatars1.githubusercontent.com/u/615580?s=460&v=4",authorTwitter:"B4nan",tags:["typescript","javascript","node","sql"]},l=void 0,p={permalink:"/blog/mikro-orm-4-1-released",source:"@site/blog/2020-10-13-mikro-orm-4-1-lets-talk-about-performance.md",title:"MikroORM 4.1: Let\u2019s talk about performance",description:"I just shipped version 4.1 of MikroORM,",date:"2020-10-13T00:00:00.000Z",formattedDate:"October 13, 2020",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"node",permalink:"/blog/tags/node"},{label:"sql",permalink:"/blog/tags/sql"}],readingTime:2.945,truncated:!0,authors:[{name:"Martin Ad\xe1mek",title:"Author of MikroORM",url:"https://github.com/B4nan",imageURL:"https://avatars1.githubusercontent.com/u/615580?s=460&v=4"}],frontMatter:{slug:"mikro-orm-4-1-released",title:"MikroORM 4.1: Let\u2019s talk about performance",author:"Martin Ad\xe1mek",authorTitle:"Author of MikroORM",authorURL:"https://github.com/B4nan",authorImageURL:"https://avatars1.githubusercontent.com/u/615580?s=460&v=4",authorTwitter:"B4nan",tags:["typescript","javascript","node","sql"]},nextItem:{title:"MikroORM 4: Filling the Gaps",permalink:"/blog/mikro-orm-4-released"}},u={authorsImageUrls:[void 0]},m=[{value:"In case you don\u2019t know\u2026",id:"in-case-you-dont-know",children:[],level:3},{value:"So what changed?",id:"so-what-changed",children:[],level:3},{value:"Batch inserts, updates and deletes",id:"batch-inserts-updates-and-deletes",children:[],level:3},{value:"JIT compilation",id:"jit-compilation",children:[],level:3},{value:"Results",id:"results",children:[],level:3},{value:"Acknowledgement",id:"acknowledgement",children:[],level:3}],c={toc:m};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I just shipped version 4.1 of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm"},"MikroORM"),",\nthe TypeScript ORM for Node.js, and I feel like this particular release deserves\na bit more attention than a regular feature release."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/725/0*R2CETMgg1344gf0V.jpg",alt:null})),(0,o.kt)("h3",{id:"in-case-you-dont-know"},"In case you don\u2019t know\u2026"),(0,o.kt)("p",null,"If you never heard of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm"},"MikroORM"),", it\u2019s a TypeScript data-mapper ORM with Unit of Work and Identity Map. It supports MongoDB, MySQL, PostgreSQL and SQLite drivers currently. Key features of the ORM are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm#implicit-transactions"},"Implicit transactions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm#changeset-based-persistence"},"ChangeSet based persistence")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mikro-orm.io/docs/identity-map/"},"Identity map"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/1024/0*zPahC74XliMguexT.png",alt:null})),(0,o.kt)("p",null,"You can read the full ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/dailyjs/introducing-mikro-orm-typescript-data-mapper-orm-with-identity-map-9ba58d049e02"},"introductory article here")," or ",(0,o.kt)("a",{parentName:"p",href:"https://mikro-orm.io/"},"browse through the docs"),"."),(0,o.kt)("h3",{id:"so-what-changed"},"So what changed?"),(0,o.kt)("p",null,"This release had only one clear goal in mind\u200a\u2014\u200athe performance. It all started with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/issues/732"},"an issue")," pointing out that flushing 10k entities in a single unit of work is very slow. While this kind of use case was never a target for me, I started to see all the possibilities the Unit of Work pattern offers."),(0,o.kt)("h3",{id:"batch-inserts-updates-and-deletes"},"Batch inserts, updates and deletes"),(0,o.kt)("p",null,"The biggest performance killer was the amount of queries\u200a\u2014\u200aeven if the query is as simple and optimised as possible, firing 10k of those will be always quite slow. For inserts and deletes, it was quite trivial to group all the queries. A bit more challenging were the updates\u200a\u2014\u200ato batch those, MikroORM now uses case statements."),(0,o.kt)("p",null,"As a result, when you now flush changes made to one entity type, only one query per given operation (create/update/delete) will be executed. This brings significant difference, as we are now executing fixed number of queries (in fact the changes are batched in chunks of 300 items)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"for (let i = 1; i <= 5; i++) {\n  const u = new User(`Peter ${i}`, `peter+${i}@foo.bar`);\n  em.persist(u);\n}\n\nawait em.flush();\n\n// insert into `user` (`name`, `email`) values\n//   ('Peter 1', 'peter+1@foo.bar'),\n//   ('Peter 2', 'peter+2@foo.bar'),\n//   ('Peter 3', 'peter+3@foo.bar'),\n//   ('Peter 4', 'peter+4@foo.bar'),\n//   ('Peter 5', 'peter+5@foo.bar');\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"for (const user of users) {\n  user.name += ' changed!';\n}\n\nawait em.flush();\n\n// update `user` set\n//   `name` = case \n//     when (`id` = 1) then 'Peter 1 changed!' \n//     when (`id` = 2) then 'Peter 2 changed!' \n//     when (`id` = 3) then 'Peter 3 changed!' \n//     when (`id` = 4) then 'Peter 4 changed!' \n//     when (`id` = 5) then 'Peter 5 changed!' \n//     else `priority` end \n//   where `id` in (1, 2, 3, 4, 5)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"em.remove(users);\nawait em.flush();\n\n// delete from `user` where `id` in (1, 2, 3, 4, 5)\n")),(0,o.kt)("h3",{id:"jit-compilation"},"JIT compilation"),(0,o.kt)("p",null,"Second important change in 4.1 is JIT compilation. Under the hood, MikroORM now first generates simple functions for comparing and hydrating entities, that are tailored to their metadata definition. The main difference is that those generated functions are accessing the object properties directly (e.g. o.name), instead of dynamically (e.g. o","[prop.name]","), as all the information from metadata are inlined there. This allows V8 to better understand the code so it is able to run it faster."),(0,o.kt)("h3",{id:"results"},"Results"),(0,o.kt)("p",null,"Here are the results for a simple 10k entities benchmark:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/1024/1*aROevToSrzcQdPsPzXYnSQ.png",alt:null})),(0,o.kt)("p",null,"In average, inserting 10k entities takes around 70ms with sqlite, updates are a tiny bit slower. You can see results for other drivers here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/benchmark"},"https://github.com/mikro-orm/benchmark"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/400/0*2WaopAkejC3T6213.jpg",alt:null})),(0,o.kt)("h3",{id:"acknowledgement"},"Acknowledgement"),(0,o.kt)("p",null,"Kudos to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/marcj"},"Marc J. Schmidt"),", the author of the initial issue, as without his help this would probably never happen, or at least not in near future. Thanks a lot!"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Like")," ",(0,o.kt)("a",{parentName:"p",href:"https://mikro-orm.io/"},(0,o.kt)("em",{parentName:"a"},"MikroORM")),(0,o.kt)("em",{parentName:"p"},"? \u2b50\ufe0f")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm"},(0,o.kt)("em",{parentName:"a"},"Star it"))," ",(0,o.kt)("em",{parentName:"p"},"on GitHub and share this article with your friends. If you want to support the project financially, you can do so via")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sponsors/B4nan"},(0,o.kt)("em",{parentName:"a"},"GitHub Sponsors")),(0,o.kt)("em",{parentName:"p"},"."))))}h.isMDXComponent=!0}}]);