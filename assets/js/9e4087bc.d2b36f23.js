"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3608],{63012:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(67294),n=a(16936),l=a(39960),c=a(95999),i=a(89575);function m(e){var t=e.year,a=e.posts;return r.createElement(r.Fragment,null,r.createElement("h3",null,t),r.createElement("ul",null,a.map((function(e){return r.createElement("li",{key:e.metadata.date},r.createElement(l.default,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function s(e){var t=e.years;return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},r.createElement(m,e))})))))}function o(e){var t,a,l=e.archive,m=(0,c.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),o=(0,c.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),u=(t=l.blogPosts,a=t.reduceRight((function(e,t){var a,r=t.metadata.date.split("-")[0],n=null!=(a=e.get(r))?a:[];return e.set(r,[t].concat(n))}),new Map),Array.from(a,(function(e){return{year:e[0],posts:e[1]}})));return r.createElement(r.Fragment,null,r.createElement(i.PageMetadata,{title:m,description:o}),r.createElement(n.Z,null,r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},m),r.createElement("p",{className:"hero__subtitle"},o))),r.createElement("main",null,u.length>0&&r.createElement(s,{years:u}))))}}}]);