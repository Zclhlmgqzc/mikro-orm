"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90668],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),y=p(n),m=r,c=y["".concat(s,".").concat(m)]||y[m]||u[m]||o;return n?i.createElement(c,l(l({ref:t},d),{},{components:n})):i.createElement(c,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=y;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},65754:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return y}});var i=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],a={title:"Using EntityRepository instead of EntityManager",sidebar_label:"Entity Repository"},s=void 0,p={unversionedId:"repositories",id:"version-3.6/repositories",title:"Using EntityRepository instead of EntityManager",description:"More convenient way of fetching entities from database is by using EntityRepository, that",source:"@site/versioned_docs/version-3.6/repositories.md",sourceDirName:".",slug:"/repositories",permalink:"/docs/3.6/repositories",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/repositories.md",tags:[],version:"3.6",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1641351132,formattedLastUpdatedAt:"1/5/2022",frontMatter:{title:"Using EntityRepository instead of EntityManager",sidebar_label:"Entity Repository"},sidebar:"version-3.6/docs",previous:{title:"Entity Manager",permalink:"/docs/3.6/entity-manager"},next:{title:"Identity Map and Request Context",permalink:"/docs/3.6/identity-map"}},d=[{value:"Custom Repository",id:"custom-repository",children:[],level:2},{value:"EntityRepository&lt;T&gt; API",id:"entityrepositoryt-api",children:[{value:"<code>find(where: FilterQuery&lt;T&gt;, options?: FindOptions): Promise&lt;T[]&gt;</code>",id:"findwhere-filterqueryt-options-findoptions-promiset",children:[],level:4},{value:"<code>find(where: FilterQuery&lt;T&gt;, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise&lt;T[]&gt;</code>",id:"findwhere-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset",children:[],level:4},{value:"<code>findAndCount(where: FilterQuery&lt;T&gt;, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise&lt;T[]&gt;</code>",id:"findandcountwhere-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset",children:[],level:4},{value:"<code>findAll(options?: FindOptions): Promise&lt;T[]&gt;</code>",id:"findalloptions-findoptions-promiset",children:[],level:4},{value:"<code>findAll(populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise&lt;T[]&gt;</code>",id:"findallpopulate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset",children:[],level:4},{value:"<code>findOne(where: FilterQuery&lt;T&gt; | string, populate?: string[]): Promise&lt;T | null&gt;</code>",id:"findonewhere-filterqueryt--string-populate-string-promiset--null",children:[],level:4},{value:"<code>findOneOrFail(where: FilterQuery&lt;T&gt; | string, populate?: string[]): Promise&lt;T&gt;</code>",id:"findoneorfailwhere-filterqueryt--string-populate-string-promiset",children:[],level:4},{value:"<code>merge(data: EntityData&lt;T&gt;): T</code>",id:"mergedata-entitydatat-t",children:[],level:4},{value:"<code>getReference(id: string): T</code>",id:"getreferenceid-string-t",children:[],level:4},{value:"<code>count(where?: FilterQuery&lt;T&gt;): Promise&lt;number&gt;</code>",id:"countwhere-filterqueryt-promisenumber",children:[],level:4},{value:"<code>persist(entity: AnyEntity | AnyEntity[], flush?: boolean): Promise&lt;void&gt;</code>",id:"persistentity-anyentity--anyentity-flush-boolean-promisevoid",children:[],level:4},{value:"<code>persistAndFlush(entity: AnyEntity | AnyEntity[]): Promise&lt;void&gt;</code>",id:"persistandflushentity-anyentity--anyentity-promisevoid",children:[],level:4},{value:"<code>persistLater(entity: AnyEntity | AnyEntity[]): void</code>",id:"persistlaterentity-anyentity--anyentity-void",children:[],level:4},{value:"<code>flush(): Promise&lt;void&gt;</code>",id:"flush-promisevoid",children:[],level:4},{value:"<code>remove(where: AnyEntity | FilterQuery&lt;T&gt;, flush?: boolean): Promise&lt;number&gt;</code>",id:"removewhere-anyentity--filterqueryt-flush-boolean-promisenumber",children:[],level:4},{value:"<code>removeAndFlush(entity: AnyEntity): Promise&lt;void&gt;</code>",id:"removeandflushentity-anyentity-promisevoid",children:[],level:4},{value:"<code>removeLater(entity: AnyEntity): void</code>",id:"removelaterentity-anyentity-void",children:[],level:4},{value:"<code>canPopulate(property: string): boolean</code>",id:"canpopulateproperty-string-boolean",children:[],level:4}],level:2}],u={toc:d};function y(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"More convenient way of fetching entities from database is by using ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityRepository"),", that\ncarries the entity name so you do not have to pass it to every ",(0,o.kt)("inlineCode",{parentName:"p"},"find")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"findOne")," calls:"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const booksRepository = orm.em.getRepository(Book);\n\n// with sorting, limit and offset parameters, populating author references\nconst books = await booksRepository.find({ author: '...' }, ['author'], { title: QueryOrder.DESC }, 2, 1);\n\n// or with options object\nconst books = await booksRepository.find({ author: '...' }, { \n  populate: ['author'],\n  limit: 1,\n  offset: 2,\n  sort: { title: QueryOrder.DESC },\n});\n\nconsole.log(books); // Book[]\n")),(0,o.kt)("h2",{id:"custom-repository"},"Custom Repository"),(0,o.kt)("p",null,"To use custom repository, just extend ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityRepository<T>")," class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Repository(Author)\nexport class CustomAuthorRepository extends EntityRepository<Author> {\n\n  // your custom methods...\n  public findAndUpdate(...) {\n    // ...\n  }\n\n}\n")),(0,o.kt)("p",null,"You can also omit the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Repository")," decorator and register your repository in ",(0,o.kt)("inlineCode",{parentName:"p"},"@Entity"),"\ndecorator instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity({ customRepository: () => CustomAuthorRepository })\nexport class Author {\n  // ...\n}\n")),(0,o.kt)("p",null,"Note that we need to pass that repository reference inside a callback so we will not run\ninto circular dependency issues when using entity references inside that repository."),(0,o.kt)("p",null,"Now you can access your custom repository via ",(0,o.kt)("inlineCode",{parentName:"p"},"em.getRepository()")," method."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can also register custom base repository (for all entities where you do not specify\n",(0,o.kt)("inlineCode",{parentName:"p"},"customRepository"),") globally, via ",(0,o.kt)("inlineCode",{parentName:"p"},"MikroORM.init({ entityRepository: CustomBaseRepository })"),".")),(0,o.kt)("p",null,"For more examples, take a look at\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mongo.test.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"tests/EntityManager.mongo.test.ts")),"\nor ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mysql.test.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"tests/EntityManager.mysql.test.ts")),"."),(0,o.kt)("h2",{id:"entityrepositoryt-api"},"EntityRepository\\<T",">"," API"),(0,o.kt)("h4",{id:"findwhere-filterqueryt-options-findoptions-promiset"},(0,o.kt)("inlineCode",{parentName:"h4"},"find(where: FilterQuery<T>, options?: FindOptions): Promise<T[]>")),(0,o.kt)("p",null,"Returns array of entities found for given condition. You can specify ",(0,o.kt)("inlineCode",{parentName:"p"},"FindOptions")," to request\npopulation of referenced entities or control the pagination:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface FindOptions {\n  populate?: string[];\n  orderBy?: { [k: string]: QueryOrder };\n  limit?: number;\n  offset?: number;\n  schema?: string;\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"findwhere-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},(0,o.kt)("inlineCode",{parentName:"h4"},"find(where: FilterQuery<T>, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),(0,o.kt)("p",null,"Same as previous ",(0,o.kt)("inlineCode",{parentName:"p"},"find")," method, just with dedicated parameters for ",(0,o.kt)("inlineCode",{parentName:"p"},"populate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"orderBy"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"limit"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"offset"),"."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"findandcountwhere-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},(0,o.kt)("inlineCode",{parentName:"h4"},"findAndCount(where: FilterQuery<T>, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),(0,o.kt)("p",null,"Combination of ",(0,o.kt)("inlineCode",{parentName:"p"},"find")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," methods. "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"findalloptions-findoptions-promiset"},(0,o.kt)("inlineCode",{parentName:"h4"},"findAll(options?: FindOptions): Promise<T[]>")),(0,o.kt)("p",null,"Returns all entities for given type. "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"findallpopulate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},(0,o.kt)("inlineCode",{parentName:"h4"},"findAll(populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),(0,o.kt)("p",null,"Same as previous ",(0,o.kt)("inlineCode",{parentName:"p"},"findAll")," method, just with dedicated parameters for ",(0,o.kt)("inlineCode",{parentName:"p"},"populate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"orderBy"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"limit"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"offset"),"."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"findonewhere-filterqueryt--string-populate-string-promiset--null"},(0,o.kt)("inlineCode",{parentName:"h4"},"findOne(where: FilterQuery<T> | string, populate?: string[]): Promise<T | null>")),(0,o.kt)("p",null,"Finds an entity by given ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," condition. You can use primary key as ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," value, then\nif the entity is already managed, no database call will be made. "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"findoneorfailwhere-filterqueryt--string-populate-string-promiset"},(0,o.kt)("inlineCode",{parentName:"h4"},"findOneOrFail(where: FilterQuery<T> | string, populate?: string[]): Promise<T>")),(0,o.kt)("p",null,"Just like ",(0,o.kt)("inlineCode",{parentName:"p"},"findOne"),", but throws when entity not found, so it always resolves to given entity.\nYou can customize the error either globally via ",(0,o.kt)("inlineCode",{parentName:"p"},"findOneOrFailHandler")," option, or locally via\n",(0,o.kt)("inlineCode",{parentName:"p"},"failHandler")," option in ",(0,o.kt)("inlineCode",{parentName:"p"},"findOneOrFail")," call."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"mergedata-entitydatat-t"},(0,o.kt)("inlineCode",{parentName:"h4"},"merge(data: EntityData<T>): T")),(0,o.kt)("p",null,"Adds given entity to current Identity Map. After merging, entity becomes managed.\nThis is useful when you want to work with cached entities. "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"getreferenceid-string-t"},(0,o.kt)("inlineCode",{parentName:"h4"},"getReference(id: string): T")),(0,o.kt)("p",null,"Gets a reference to the entity identified by the given type and identifier without actually\nloading it, if the entity is not yet loaded."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"countwhere-filterqueryt-promisenumber"},(0,o.kt)("inlineCode",{parentName:"h4"},"count(where?: FilterQuery<T>): Promise<number>")),(0,o.kt)("p",null,"Gets count of entities matching the ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," condition. "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"persistentity-anyentity--anyentity-flush-boolean-promisevoid"},(0,o.kt)("inlineCode",{parentName:"h4"},"persist(entity: AnyEntity | AnyEntity[], flush?: boolean): Promise<void>")),(0,o.kt)("p",null,"Tells the EntityManager to make an instance managed and persistent. The entity will be\nentered into the database at or before transaction commit or as a result of the flush\noperation. You can control immediate flushing via ",(0,o.kt)("inlineCode",{parentName:"p"},"flush")," parameter and via ",(0,o.kt)("inlineCode",{parentName:"p"},"autoFlush"),"\nconfiguration option. "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"persistandflushentity-anyentity--anyentity-promisevoid"},(0,o.kt)("inlineCode",{parentName:"h4"},"persistAndFlush(entity: AnyEntity | AnyEntity[]): Promise<void>")),(0,o.kt)("p",null,"Shortcut for ",(0,o.kt)("inlineCode",{parentName:"p"},"persist")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"flush"),"."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"persistlaterentity-anyentity--anyentity-void"},(0,o.kt)("inlineCode",{parentName:"h4"},"persistLater(entity: AnyEntity | AnyEntity[]): void")),(0,o.kt)("p",null,"Shortcut for just ",(0,o.kt)("inlineCode",{parentName:"p"},"persist"),", without flushing. "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"flush-promisevoid"},(0,o.kt)("inlineCode",{parentName:"h4"},"flush(): Promise<void>")),(0,o.kt)("p",null,"Flushes all changes to objects that have been queued up to now to the database."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"removewhere-anyentity--filterqueryt-flush-boolean-promisenumber"},(0,o.kt)("inlineCode",{parentName:"h4"},"remove(where: AnyEntity | FilterQuery<T>, flush?: boolean): Promise<number>")),(0,o.kt)("p",null,"When provided entity instance as ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," value, then it calls ",(0,o.kt)("inlineCode",{parentName:"p"},"removeEntity(entity, flush)"),",\notherwise it fires delete query with given ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," condition. "),(0,o.kt)("p",null,"This method fires ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeDelete")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterDelete")," hooks only if you provide entity instance.  "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"removeandflushentity-anyentity-promisevoid"},(0,o.kt)("inlineCode",{parentName:"h4"},"removeAndFlush(entity: AnyEntity): Promise<void>")),(0,o.kt)("p",null,"Shortcut for ",(0,o.kt)("inlineCode",{parentName:"p"},"removeEntity")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"flush"),"."),(0,o.kt)("p",null,"This method fires ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeDelete")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterDelete")," hooks. "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"removelaterentity-anyentity-void"},(0,o.kt)("inlineCode",{parentName:"h4"},"removeLater(entity: AnyEntity): void")),(0,o.kt)("p",null,"Shortcut for ",(0,o.kt)("inlineCode",{parentName:"p"},"removeEntity")," without flushing. "),(0,o.kt)("p",null,"This method fires ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeDelete")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterDelete")," hooks. "),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"canpopulateproperty-string-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"canPopulate(property: string): boolean")),(0,o.kt)("p",null,"Returns whether given entity has given property which can be populated (is reference or\ncollection)."),(0,o.kt)("hr",null))}y.isMDXComponent=!0}}]);