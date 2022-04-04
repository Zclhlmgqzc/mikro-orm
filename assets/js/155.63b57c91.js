"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[155],{39649:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(83117),a=n(80102),o=n(67294),l=n(86010),c=n(95999),i=n(89575),s="anchorWithStickyNavbar_mojV",u="anchorWithHideOnScrollNavbar_R0VQ",p=["as","id"],m=["as"];function d(e){var t=e.as,n=e.id,m=(0,a.Z)(e,p),d=(0,i.useThemeConfig)().navbar.hideOnScroll;return n?o.createElement(t,(0,r.Z)({},m,{className:(0,l.Z)("anchor",d?u:s),id:n}),m.children,o.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,m)}function y(e){var t=e.as,n=(0,a.Z)(e,m);return"h1"===t?o.createElement("h1",(0,r.Z)({},n,{id:void 0}),n.children):o.createElement(d,(0,r.Z)({as:t},n))}},63384:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(83117),a=n(67294),o=n(80102),l=n(35742),c=["mdxType","originalType"];var i=n(86010),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},u={Prism:n(87410).default,theme:s};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var d=/\r\n|\r|\n/,y=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},f=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=m({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=m({},n,{backgroundColor:null}),a};function g(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var v=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?f(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=m({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?m({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),p(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),p(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=m({},g(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?m({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),p(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],p=n[l][o];if("string"==typeof p?(u=l>0?u:["plain"],s=p):(u=h(u,p.type),p.alias&&(u=h(u,p.alias)),s=p.content),"string"==typeof s){var m=s.split(d),f=m.length;c.push({types:u,content:m[0]});for(var g=1;g<f;g++)y(c),i.push(c=[]),c.push({types:u,content:m[g]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return y(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),k=v,b=n(89575);var E=n(95999),N="copyButton_eDfN",T="copyButtonCopied_ljy5",Z="copyButtonIcons_W9eQ",C="copyButtonIcon_XEyF",_="copyButtonSuccessIcon_i9w9";function B(e){var t=e.code,n=(0,a.useState)(!1),r=n[0],o=n[1],l=(0,a.useRef)(void 0),c=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}a.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(t),o(!0),l.current=window.setTimeout((function(){o(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),a.createElement("button",{type:"button","aria-label":r?(0,E.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,E.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)(N,"clean-btn",r&&T),onClick:c},a.createElement("span",{className:Z,"aria-hidden":"true"},a.createElement("svg",{className:C,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:_,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var L="codeBlockContainer_I0IT",x="codeBlockContent_wNvx",A="codeBlockTitle_BvAR",S="codeBlock_jd64",j="codeBlockStandalone_csWH",O="codeBlockLines_mRuA";function w(e){var t,n=e.children,o=e.className,l=void 0===o?"":o,c=e.metastring,s=e.title,p=e.language,m=(0,b.useThemeConfig)().prism,d=(0,a.useState)(!1),y=d[0],h=d[1];(0,a.useEffect)((function(){h(!0)}),[]);var f=(0,b.parseCodeBlockTitle)(c)||s,g=(0,b.usePrismTheme)();if(a.Children.toArray(n).some((function(e){return(0,a.isValidElement)(e)})))return a.createElement(k,(0,r.Z)({},u,{key:String(y),theme:g,code:"",language:"text"}),(function(e){var t=e.className,r=e.style;return a.createElement("pre",{tabIndex:0,className:(0,i.Z)(t,j,"thin-scrollbar",L,l,b.ThemeClassNames.common.codeBlock),style:r},a.createElement("code",{className:O},n))}));var v=Array.isArray(n)?n.join(""):n,E=null!=(t=null!=p?p:(0,b.parseLanguage)(l))?t:m.defaultLanguage,N=(0,b.parseLines)(v,c,E),T=N.highlightLines,Z=N.code;return a.createElement(k,(0,r.Z)({},u,{key:String(y),theme:g,code:Z,language:null!=E?E:"text"}),(function(e){var t,n=e.className,o=e.style,c=e.tokens,s=e.getLineProps,u=e.getTokenProps;return a.createElement("div",{className:(0,i.Z)(L,l,(t={},t["language-"+E]=E&&!l.includes("language-"+E),t),b.ThemeClassNames.common.codeBlock)},f&&a.createElement("div",{style:o,className:A},f),a.createElement("div",{className:x,style:o},a.createElement("pre",{tabIndex:0,className:(0,i.Z)(n,S,"thin-scrollbar")},a.createElement("code",{className:O},c.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=s({line:e,key:t});return T.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},u({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement(B,{code:Z})))}))}var P=n(39960);var D="details_BAp3";function I(e){var t=Object.assign({},e);return a.createElement(b.Details,(0,r.Z)({},t,{className:(0,i.Z)("alert alert--info",D,t.className)}))}var V=n(39649);function H(e){return a.createElement(V.default,e)}var R="img_E7b_";var z={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,o.Z)(r,c));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(l.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(w,e)},a:function(e){return a.createElement(P.default,e)},pre:function(e){var t;return a.createElement(w,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(I,(0,r.Z)({},e,{summary:n}),o)},ul:function(e){return a.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,i.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_tsSF"))}));var t},img:function(e){return a.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,i.Z)(t,R))}));var t},h1:function(e){return a.createElement(H,(0,r.Z)({as:"h1"},e))},h2:function(e){return a.createElement(H,(0,r.Z)({as:"h2"},e))},h3:function(e){return a.createElement(H,(0,r.Z)({as:"h3"},e))},h4:function(e){return a.createElement(H,(0,r.Z)({as:"h4"},e))},h5:function(e){return a.createElement(H,(0,r.Z)({as:"h5"},e))},h6:function(e){return a.createElement(H,(0,r.Z)({as:"h6"},e))}}},71750:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(39960);function o(e){var t=e.permalink,n=e.title,o=e.subLabel;return r.createElement(a.default,{className:"pagination-nav__link",to:t},o&&r.createElement("div",{className:"pagination-nav__sublabel"},o),r.createElement("div",{className:"pagination-nav__label"},n))}}}]);