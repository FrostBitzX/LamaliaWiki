"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[969],{1243:(e,n,r)=>{r.d(n,{A:()=>x});r(6540);var t=r(4164),s=r(7559),a=r(2583),i=r(9169),l=r(8774),o=r(1312),c=r(6025),d=r(4848);function u(e){return(0,d.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){var e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.A,{"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){var n=e.children,r=e.href,t="breadcrumbs__link";return e.isLast?(0,d.jsx)("span",{className:t,itemProp:"name",children:n}):r?(0,d.jsx)(l.A,{className:t,href:r,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:n})}):(0,d.jsx)("span",{className:t,children:n})}function g(e){var n=e.children,r=e.active,s=e.index,a=e.addMicrodata;return(0,d.jsxs)("li",Object.assign({},a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,t.A)("breadcrumbs__item",{"breadcrumbs__item--active":r}),children:[n,(0,d.jsx)("meta",{itemProp:"position",content:String(s+1)})]}))}function x(){var e=(0,a.OF)(),n=(0,i.Dt)();return e?(0,d.jsx)("nav",{className:(0,t.A)(s.G.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,d.jsx)(h,{}),e.map((function(n,r){var t=r===e.length-1,s="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,d.jsx)(g,{active:t,index:r,addMicrodata:!!s,children:(0,d.jsx)(b,{href:s,isLast:t,children:n.label})},r)}))]})}):null}},7247:(e,n,r)=>{r.r(n),r.d(n,{default:()=>O});var t=r(6540),s=r(1003),a=r(2583),i=r(6025),l=r(4164),o=r(8774),c=r(4586),d=["zero","one","two","few","many","other"];function u(e){return d.filter((function(n){return e.includes(n)}))}var m={locale:"en",pluralForms:u(["one","other"]),select:function(e){return 1===e?"one":"other"}};function h(){var e=(0,c.A)().i18n.currentLocale;return(0,t.useMemo)((function(){try{return n=e,r=new Intl.PluralRules(n),{locale:n,pluralForms:u(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),m}var n,r}),[e])}function v(){var e=h();return{selectMessage:function(n,r){return function(e,n,r){var t=e.split("|");if(1===t.length)return t[0];t.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+t.length+": "+e);var s=r.select(n),a=r.pluralForms.indexOf(s);return t[Math.min(a,t.length-1)]}(r,n,e)}}}var b=r(6654),g=r(1312),x=r(1107);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var f=r(4848);function j(e){var n=e.href,r=e.children;return(0,f.jsx)(o.A,{href:n,className:(0,l.A)("card padding--lg",p.cardContainer),children:r})}function A(e){var n=e.href,r=e.icon,t=e.title,s=e.description;return(0,f.jsxs)(j,{href:n,children:[(0,f.jsxs)(x.A,{as:"h2",className:(0,l.A)("text--truncate",p.cardTitle),title:t,children:[r," ",t]}),s&&(0,f.jsx)("p",{className:(0,l.A)("text--truncate",p.cardDescription),title:s,children:s})]})}function N(e){var n,r,t=e.item,s=(0,a.Nr)(t),i=(r=v().selectMessage,function(e){return r(e,(0,g.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return s?(0,f.jsx)(A,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:null!=(n=t.description)?n:i(t.items.length)}):null}function _(e){var n,r,t=e.item,s=(0,b.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.cC)(null!=(n=t.docId)?n:void 0);return(0,f.jsx)(A,{href:t.href,icon:s,title:t.label,description:null!=(r=t.description)?r:null==i?void 0:i.description})}function T(e){var n=e.item;switch(n.type){case"link":return(0,f.jsx)(_,{item:n});case"category":return(0,f.jsx)(N,{item:n});default:throw new Error("unknown item type "+JSON.stringify(n))}}function L(e){var n=e.className,r=(0,a.$S)();return(0,f.jsx)(k,{items:r.items,className:n})}function k(e){var n=e.items,r=e.className;if(!n)return(0,f.jsx)(L,Object.assign({},e));var t=(0,a.d1)(n);return(0,f.jsx)("section",{className:(0,l.A)("row",r),children:t.map((function(e,n){return(0,f.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,f.jsx)(T,{item:e})},n)}))})}var y=r(6929),w=r(1878),I=r(4267),C=r(1243);const F={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function M(e){var n=e.categoryGeneratedIndex;return(0,f.jsx)(s.be,{title:n.title,description:n.description,keywords:n.keywords,image:(0,i.Ay)(n.image)})}function P(e){var n=e.categoryGeneratedIndex,r=(0,a.$S)();return(0,f.jsxs)("div",{className:F.generatedIndexPage,children:[(0,f.jsx)(w.A,{}),(0,f.jsx)(C.A,{}),(0,f.jsx)(I.A,{}),(0,f.jsxs)("header",{children:[(0,f.jsx)(x.A,{as:"h1",className:F.title,children:n.title}),n.description&&(0,f.jsx)("p",{children:n.description})]}),(0,f.jsx)("article",{className:"margin-top--lg",children:(0,f.jsx)(k,{items:r.items,className:F.list})}),(0,f.jsx)("footer",{className:"margin-top--lg",children:(0,f.jsx)(y.A,{previous:n.navigation.previous,next:n.navigation.next})})]})}function O(e){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(M,Object.assign({},e)),(0,f.jsx)(P,Object.assign({},e))]})}},6929:(e,n,r)=>{r.d(n,{A:()=>o});r(6540);var t=r(1312),s=r(4164),a=r(8774),i=r(4848);function l(e){var n=e.permalink,r=e.title,t=e.subLabel,l=e.isNext;return(0,i.jsxs)(a.A,{className:(0,s.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[t&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:t}),(0,i.jsx)("div",{className:"pagination-nav__label",children:r})]})}function o(e){var n=e.previous,r=e.next;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,t.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,i.jsx)(l,Object.assign({},n,{subLabel:(0,i.jsx)(t.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),r&&(0,i.jsx)(l,Object.assign({},r,{subLabel:(0,i.jsx)(t.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}},4267:(e,n,r)=>{r.d(n,{A:()=>o});r(6540);var t=r(4164),s=r(1312),a=r(7559),i=r(3025),l=r(4848);function o(e){var n=e.className,r=(0,i.r)();return r.badge?(0,l.jsx)("span",{className:(0,t.A)(n,a.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(s.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:r.label},children:"Version: {versionLabel}"})}):null}},1878:(e,n,r)=>{r.d(n,{A:()=>g});r(6540);var t=r(4164),s=r(4586),a=r(8774),i=r(1312),l=r(4070),o=r(7559),c=r(3886),d=r(3025),u=r(4848);var m={unreleased:function(e){var n=e.siteTitle,r=e.versionMetadata;return(0,u.jsx)(i.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:r.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var n=e.siteTitle,r=e.versionMetadata;return(0,u.jsx)(i.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:r.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){var n=m[e.versionMetadata.banner];return(0,u.jsx)(n,Object.assign({},e))}function v(e){var n=e.versionLabel,r=e.to,t=e.onClick;return(0,u.jsx)(i.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(a.A,{to:r,onClick:t,children:(0,u.jsx)(i.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){var n,r=e.className,a=e.versionMetadata,i=(0,s.A)().siteConfig.title,d=(0,l.vT)({failfast:!0}).pluginId,m=(0,c.g1)(d).savePreferredVersionName,b=(0,l.HW)(d),g=b.latestDocSuggestion,x=b.latestVersionSuggestion,p=null!=g?g:(n=x).docs.find((function(e){return e.id===n.mainDocId}));return(0,u.jsxs)("div",{className:(0,t.A)(r,o.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:a})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(v,{versionLabel:x.label,to:p.path,onClick:function(){return m(x.name)}})})]})}function g(e){var n=e.className,r=(0,d.r)();return r.banner?(0,u.jsx)(b,{className:n,versionMetadata:r}):null}}}]);