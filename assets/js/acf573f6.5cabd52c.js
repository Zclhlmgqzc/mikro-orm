"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4553],{9649:function(e,t,a){a.r(t),a.d(t,{MainHeading:function(){return m},default:function(){return f}});var n=a(102),r=a(3117),l=a(7294),i=a(6010),c=a(5999),s=a(6681),u="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-",o=["id"],m=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},f=function(e){return"h1"===e?m:(t=e,function(e){var a,m=e.id,f=(0,n.Z)(e,o),p=(0,s.useThemeConfig)().navbar.hideOnScroll;return m?l.createElement(t,(0,r.Z)({},f,{className:(0,i.Z)("anchor",(a={},a[d]=p,a[u]=!p,a)),id:m}),f.children,l.createElement("a",{className:"hash-link",href:"#"+m,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,f)});var t}},538:function(e,t,a){var n=a(7294),r=a(9960),l=a(6681),i=a(9649),c=a(907),s=a(5845),u=a(7850),d=function(e){return e&&e.__esModule?e:{default:e}},o=d(n),m=d(r);function f(e,t,a){if(!e.match(/api\/(\d\.\d\.\d)/)&&!e.includes("api/next")&&a&&a.name!==t.name){var n="current"===a.name?"next":a.name;return e.endsWith("/api")?e+"/"+n:e.replace("/api/","/api/"+n+"/")}return e}e.exports=function(e){var t=e.packages,a=e.history,r=e.versionMetadata,d=c.useLatestVersion(),p=l.useDocsPreferredVersion(r.pluginId).preferredVersion;return n.useEffect((function(){1===t.length?a.replace(f(t[0].entryPoints[0].reflection.permalink,d,p)):p&&a.replace(f(a.location.pathname,d,p))}),[t,a,d,p]),o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col apiItemCol"},o.default.createElement(u.VersionBanner,{versionMetadata:r}),o.default.createElement("div",{className:"apiItemContainer"},o.default.createElement("article",null,o.default.createElement("div",{className:"markdown"},o.default.createElement(i.MainHeading,null,"API"),o.default.createElement("section",{className:"tsd-panel"},o.default.createElement("h3",{className:"tsd-panel-header"},"Packages"),o.default.createElement("div",{className:"tsd-panel-content"},o.default.createElement("ul",{className:"tsd-index-list"},t.map((function(e){return o.default.createElement("li",{key:e.packageName,className:"tsd-truncate"},o.default.createElement(m.default,{className:"tsd-kind-icon",to:e.entryPoints[0].reflection.permalink},o.default.createElement("span",{className:"tsd-signature-symbol"},"v",e.packageVersion)," ",o.default.createElement("span",null,e.packageName)))})))))),o.default.createElement(s.Footer,null)))))}},5845:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(a(7294));t.Footer=function(){return n.default.createElement("footer",{className:"tsd-footer"},"Powered by"," ",n.default.createElement("a",{href:"https://github.com/milesj/docusaurus-plugin-typedoc-api"},"docusaurus-plugin-typedoc-api")," ","and ",n.default.createElement("a",{href:"https://typedoc.org/"},"TypeDoc"))}},7850:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var n=a(7294),r=a(9960),l=a(6681),i=a(907),c=function(e){return e&&e.__esModule?e:{default:e}},s=c(n),u=c(r);t.VersionBanner=function(e){var t=e.versionMetadata,a=t.banner,r=t.version,c=i.useLatestVersion(),d=l.useDocsPreferredVersion(t.pluginId).savePreferredVersionName,o=n.useCallback((function(){d(c.name)}),[c.name,d]);if(!a)return null;var m=t.docs[c.name];return s.default.createElement("div",{className:l.ThemeClassNames.docs.docVersionBanner+" alert alert--warning margin-bottom--md",role:"alert"},s.default.createElement("div",null,"unreleased"===a&&s.default.createElement(s.default.Fragment,null,"This is documentation for an unreleased version."),"unmaintained"===a&&s.default.createElement(s.default.Fragment,null,"This is documentation for version ",s.default.createElement("b",null,r),".")," ","For the latest API, see version"," ",s.default.createElement("b",null,s.default.createElement(u.default,{to:m.id,onClick:o},m.title)),"."))}}}]);