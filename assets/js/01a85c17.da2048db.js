"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4013],{78665:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(80102),l=a(67294),n=a(86010),s=a(16936),c=a(39960),i="sidebar_a9qW",m="sidebarItemTitle_uKok",o="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",g="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",E=a(95999);function b(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,E.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(c.default,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var v=["sidebar","toc","children"];function f(e){var t=e.sidebar,a=e.toc,c=e.children,i=(0,r.Z)(e,v),m=t&&t.items.length>0;return l.createElement(s.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(b,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&l.createElement("div",{className:"col col--2"},a))))}},40497:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var r=a(67294),l=a(78665),n=a(7774),s=a(89575),c="tag_Shcx";function i(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(n.Z,e))}))),r.createElement("hr",null))}function m(e){var t=e.tags,a=(0,s.listTagsByLetters)(t);return r.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return r.createElement(i,{key:e.letter,letterEntry:e})})))}var o=a(14739),u=a(86010);function g(e){var t=e.tags,a=e.sidebar,n=(0,s.translateTagsPageTitle)();return r.createElement(s.HtmlClassNameProvider,{className:(0,u.Z)(s.ThemeClassNames.wrapper.blogPages,s.ThemeClassNames.page.blogTagsListPage)},r.createElement(s.PageMetadata,{title:n}),r.createElement(o.Z,{tag:"blog_tags_list"}),r.createElement(l.Z,{sidebar:a},r.createElement("h1",null,n),r.createElement(m,{tags:Object.values(t)})))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(67294),l=a(86010),n=a(39960),s="tag_hD8n",c="tagRegular_D6E_",i="tagWithCount_i0QQ";function m(e){var t=e.permalink,a=e.name,m=e.count;return r.createElement(n.default,{href:t,className:(0,l.Z)(s,m?i:c)},a,m&&r.createElement("span",null,m))}}}]);