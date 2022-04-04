"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7918],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return v}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(a),v=r,f=u["".concat(o,".").concat(v)]||u[v]||d[v]||l;return a?n.createElement(f,s(s({ref:t},m),{},{components:a})):n.createElement(f,s({ref:t},m))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54067:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(67294),r=a(89575),l={breadcrumbsContainer:"breadcrumbsContainer_Xlws"},s=a(86010),i=a(39960),o=a(44996);function c(e){var t=e.children,a=e.href,r="breadcrumbs__link";return a?n.createElement(i.default,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r,itemProp:"item name"},t)}function m(e){var t=e.children,a=e.active,r=e.index;return n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function d(){var e=(0,o.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(i.default,{className:(0,s.Z)("breadcrumbs__link",l.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function u(){var e=(0,r.useSidebarBreadcrumbs)(),t=(0,r.useHomePageRoute)();return e?n.createElement("nav",{className:(0,s.Z)(r.ThemeClassNames.docs.docBreadcrumbs,l.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(d,null),e.map((function(t,a){return n.createElement(m,{key:a,active:a===e.length-1,index:a},n.createElement(c,{href:a<e.length-1?t.href:void 0},t.label))})))):null}},44384:function(e,t,a){a.r(t),a.d(t,{default:function(){return M}});var n=a(67294),r=a(86010),l=a(61101),s=a(52263),i=a(39960),o=a(95999),c=a(65551),m=a(89575);var d={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function u(e){var t=d[e.versionMetadata.banner];return n.createElement(t,e)}function v(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.default,{to:a,onClick:r},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function f(e){var t,a=e.className,l=e.versionMetadata,i=(0,s.default)().siteConfig.title,o=(0,c.useActivePlugin)({failfast:!0}).pluginId,d=(0,m.useDocsPreferredVersion)(o).savePreferredVersionName,f=(0,c.useDocVersionSuggestions)(o),p=f.latestDocSuggestion,b=f.latestVersionSuggestion,g=null!=p?p:(t=b).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(a,m.ThemeClassNames.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(u,{siteTitle:i,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(v,{versionLabel:b.label,to:g.path,onClick:function(){return d(b.name)}})))}function p(e){var t=e.className,a=(0,m.useDocsVersion)();return a.banner?n.createElement(f,{className:t,versionMetadata:a}):null}var b=a(27597);function g(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function h(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function E(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:m.ThemeClassNames.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(h,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(86753),y=a(20062),C="lastUpdated_foO9";function T(e){return n.createElement("div",{className:(0,r.Z)(m.ThemeClassNames.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(y.Z,e)))}function Z(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(m.ThemeClassNames.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(N.Z,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",C)},(a||l)&&n.createElement(E,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:l})))}function _(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,s=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,o=t.tags,c=o.length>0,d=!!(a||l||i);return c||d?n.createElement("footer",{className:(0,r.Z)(m.ThemeClassNames.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(T,{tags:o}),d&&n.createElement(Z,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:i,formattedLastUpdatedAt:s})):null}var L=a(51575),k=a(71074),w=a(39649),O="docItemContainer_vinB",U="docItemCol_DM6M",x="tocMobile_TmEX",P=a(54067),A=a(37823);function D(e){var t,a=e.content,r=a.metadata,l=a.frontMatter,s=a.assets,i=l.keywords,o=r.description,c=r.title,d=null!=(t=s.image)?t:l.image;return n.createElement(m.PageMetadata,{title:c,description:o,keywords:i,image:d})}function H(e){var t=e.content,a=t.metadata,s=t.frontMatter,i=s.hide_title,o=s.hide_table_of_contents,c=s.toc_min_heading_level,d=s.toc_max_heading_level,u=a.title,v=!i&&void 0===t.contentTitle,f=(0,m.useWindowSize)(),g=!o&&t.toc&&t.toc.length>0,h=g&&("desktop"===f||"ssr"===f);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",!o&&U)},n.createElement(p,null),n.createElement("div",{className:O},n.createElement("article",null,n.createElement(P.default,null),n.createElement(b.default,null),g&&n.createElement(k.default,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:d,className:(0,r.Z)(m.ThemeClassNames.docs.docTocMobile,x)}),n.createElement("div",{className:(0,r.Z)(m.ThemeClassNames.docs.docMarkdown,"markdown")},v&&n.createElement("header",null,n.createElement(w.default,{as:"h1"},u)),n.createElement(A.Z,null,n.createElement(t,null))),n.createElement(_,e)),n.createElement(l.default,{previous:a.previous,next:a.next}))),h&&n.createElement("div",{className:"col col--3"},n.createElement(L.default,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:d,className:m.ThemeClassNames.docs.docTocDesktop})))}function M(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(m.HtmlClassNameProvider,{className:t},n.createElement(D,e),n.createElement(H,e))}},61101:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(83117),r=a(67294),l=a(95999),s=a(71750);function i(e){var t=e.previous,a=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(s.Z,(0,n.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.createElement(s.Z,(0,n.Z)({},a,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},27597:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(67294),r=a(95999),l=a(89575),s=a(86010);function i(e){var t=e.className,a=(0,l.useDocsVersion)();return a.badge?n.createElement("span",{className:(0,s.Z)(t,l.ThemeClassNames.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},86753:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),r=a(95999),l=a(83117),s=a(80102),i=a(86010),o="iconEdit_dcUD",c=["className"];function m(e){var t=e.className,a=(0,s.Z)(e,c);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var d=a(89575);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.ThemeClassNames.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},37823:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(3905),l=a(63384);function s(e){var t=e.children;return n.createElement(r.Zo,{components:l.default},t)}},51575:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(83117),r=a(80102),l=a(67294),s=a(86010),i=a(25002),o="tableOfContents_cNA8",c=["className"];function m(e){var t=e.className,a=(0,r.Z)(e,c);return l.createElement("div",{className:(0,s.Z)(o,"thin-scrollbar",t)},l.createElement(i.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},71074:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(67294),r=a(86010),l=a(95999),s=a(89575),i="tocCollapsible_jdIR",o="tocCollapsibleButton_Fzxq",c="tocCollapsibleContent_MpvI",m="tocCollapsibleExpanded_laf4",d=a(25002);function u(e){var t=e.toc,a=e.className,u=e.minHeadingLevel,v=e.maxHeadingLevel,f=(0,s.useCollapsible)({initialState:!0}),p=f.collapsed,b=f.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(i,!p&&m,a)},n.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",o),onClick:b},n.createElement(l.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(s.Collapsible,{lazy:!0,className:c,collapsed:p},n.createElement(d.Z,{toc:t,minHeadingLevel:u,maxHeadingLevel:v})))}},25002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(83117),r=a(80102),l=a(67294),s=a(89575),i=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,d=void 0===m?"table-of-contents__link":m,u=e.linkActiveClassName,v=void 0===u?void 0:u,f=e.minHeadingLevel,p=e.maxHeadingLevel,b=(0,r.Z)(e,i),g=(0,s.useThemeConfig)(),h=null!=f?f:g.tableOfContents.minHeadingLevel,E=null!=p?p:g.tableOfContents.maxHeadingLevel,N=(0,s.useFilteredAndTreeifiedTOC)({toc:t,minHeadingLevel:h,maxHeadingLevel:E}),y=(0,l.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:h,maxHeadingLevel:E}}),[d,v,h,E]);return(0,s.useTOCHighlight)(y),l.createElement(o,(0,n.Z)({toc:N,className:c,linkClassName:d},b))}},7774:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(86010),l=a(39960),s="tag_hD8n",i="tagRegular_D6E_",o="tagWithCount_i0QQ";function c(e){var t=e.permalink,a=e.name,c=e.count;return n.createElement(l.default,{href:t,className:(0,r.Z)(s,c?o:i)},a,c&&n.createElement("span",null,c))}},20062:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(86010),l=a(95999),s=a(7774),i="tags_XVD_",o="tag_JSN8";function c(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(i,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:o},n.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);