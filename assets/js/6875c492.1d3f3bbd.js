"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8610],{36299:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294),l=a(95999),s=a(71750);function r(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(s.Z,{permalink:r,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},69404:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(67294),l=a(39960),s=a(78665),r=a(38561),i=a(95999),o=a(89575),g=a(36299),m=a(14739),c=a(86010);function p(e){var t,a=e.metadata,p=e.items,u=e.sidebar,d=e.listMetadata,h=a.allTagsPath,b=a.name,E=a.count,f=(t=(0,o.usePluralForm)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),v=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:f(E),tagName:b});return n.createElement(o.HtmlClassNameProvider,{className:(0,c.Z)(o.ThemeClassNames.wrapper.blogPages,o.ThemeClassNames.page.blogTagPostListPage)},n.createElement(o.PageMetadata,{title:v}),n.createElement(m.Z,{tag:"blog_tags_posts"}),n.createElement(s.Z,{sidebar:u},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,v),n.createElement(l.default,{href:h},n.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),p.map((function(e){var t=e.content;return n.createElement(r.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},n.createElement(t,null))})),n.createElement(g.Z,{metadata:d})))}}}]);