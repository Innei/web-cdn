(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/0+H":function(e,t,a){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(n.default.useContext(r.AmpStateContext))};var o,n=(o=a("q1tI"))&&o.__esModule?o:{default:o},r=a("lwAK");function i(){var{ampFirst:e=!1,hybrid:t=!1,hasQuery:a=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&a}},"8Kt/":function(e,t,a){"use strict";a("oI91");t.__esModule=!0,t.defaultHead=c,t.default=void 0;var o,n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=o?Object.getOwnPropertyDescriptor(e,n):null;r&&(r.get||r.set)?Object.defineProperty(a,n,r):a[n]=e[n]}a.default=e,t&&t.set(e,a);return a}(a("q1tI")),r=(o=a("Xuae"))&&o.__esModule?o:{default:o},i=a("lwAK"),p=a("FYa8"),l=a("/0+H");function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[n.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===n.default.Fragment?e.concat(n.default.Children.toArray(t.props.children).reduce((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t),[])):e.concat(t)}var s=["name","httpEquiv","charSet","itemProp"];function u(e,t){return e.reduce((e,t)=>{var a=n.default.Children.toArray(t.props.children);return e.concat(a)},[]).reduce(d,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,o={};return n=>{var r=!0;if(n.key&&"number"!==typeof n.key&&n.key.indexOf("$")>0){var i=n.key.slice(n.key.indexOf("$")+1);e.has(i)?r=!1:e.add(i)}switch(n.type){case"title":case"base":t.has(n.type)?r=!1:t.add(n.type);break;case"meta":for(var p=0,l=s.length;p<l;p++){var h=s[p];if(n.props.hasOwnProperty(h))if("charSet"===h)a.has(h)?r=!1:a.add(h);else{var c=n.props[h],d=o[h]||new Set;d.has(c)?r=!1:(d.add(c),o[h]=d)}}}return r}}()).reverse().map((e,t)=>{var a=e.key||t;return n.default.cloneElement(e,{key:a})})}function m(e){var{children:t}=e,a=(0,n.useContext)(i.AmpStateContext),o=(0,n.useContext)(p.HeadManagerContext);return n.default.createElement(r.default,{reduceComponentsToState:u,headManager:o,inAmpMode:(0,l.isInAmpMode)(a)},t)}m.rewind=()=>{};var g=m;t.default=g},"9ixD":function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return u}));var o=a("8Kt/"),n=a.n(o),r=a("q1tI"),i=a.n(r);function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},h=function(e){var t=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var a="";e.title&&(a=e.title,l.templateTitle&&(a=l.templateTitle.replace(/%s/g,(function(){return a}))),t.push(i.a.createElement("title",{key:"title"},a)));var o=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,n=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow;if(o||n?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),t.push(i.a.createElement("meta",{key:"robots",name:"robots",content:(o?"noindex":"index")+","+(n?"nofollow":"follow")})),t.push(i.a.createElement("meta",{key:"googlebot",name:"googlebot",content:(o?"noindex":"index")+","+(n?"nofollow":"follow")}))):(t.push(i.a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"})),t.push(i.a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"}))),e.description&&t.push(i.a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&t.push(i.a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){t.push(i.a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&t.push(i.a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&t.push(i.a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&t.push(i.a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&t.push(i.a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&t.push(i.a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var r=e.openGraph.type.toLowerCase();t.push(i.a.createElement("meta",{key:"og:type",property:"og:type",content:r})),"profile"===r&&e.openGraph.profile?(e.openGraph.profile.firstName&&t.push(i.a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&t.push(i.a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&t.push(i.a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&t.push(i.a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===r&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"book:author:0"+a,property:"book:author",content:e}))})),e.openGraph.book.isbn&&t.push(i.a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&t.push(i.a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"book:tag:0"+a,property:"book:tag",content:e}))}))):"article"===r&&e.openGraph.article?(e.openGraph.article.publishedTime&&t.push(i.a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&t.push(i.a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&t.push(i.a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"article:author:0"+a,property:"article:author",content:e}))})),e.openGraph.article.section&&t.push(i.a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"article:tag:0"+a,property:"article:tag",content:e}))}))):"video.movie"!==r&&"video.episode"!==r&&"video.tv_show"!==r&&"video.other"!==r||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,a){e.profile&&t.push(i.a.createElement("meta",{key:"video:actor:0"+a,property:"video:actor",content:e.profile})),e.role&&t.push(i.a.createElement("meta",{key:"video:actor:role:0"+a,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"video:director:0"+a,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"video:writer:0"+a,property:"video:writer",content:e}))})),e.openGraph.video.duration&&t.push(i.a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&t.push(i.a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"video:tag:0"+a,property:"video:tag",content:e}))})),e.openGraph.video.series&&t.push(i.a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&t.push(i.a.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||a})),(e.openGraph.description||e.description)&&t.push(i.a.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"og:image:0"+a,property:"og:image",content:e.url})),e.alt&&t.push(i.a.createElement("meta",{key:"og:image:alt0"+a,property:"og:image:alt",content:e.alt})),e.width?t.push(i.a.createElement("meta",{key:"og:image:width0"+a,property:"og:image:width",content:e.width.toString()})):l.defaultOpenGraphImageWidth&&t.push(i.a.createElement("meta",{key:"og:image:width0"+a,property:"og:image:width",content:l.defaultOpenGraphImageWidth.toString()})),e.height?t.push(i.a.createElement("meta",{key:"og:image:height"+a,property:"og:image:height",content:e.height.toString()})):l.defaultOpenGraphImageHeight&&t.push(i.a.createElement("meta",{key:"og:image:height"+a,property:"og:image:height",content:l.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,a){t.push(i.a.createElement("meta",{key:"og:video:0"+a,property:"og:video",content:e.url})),e.alt&&t.push(i.a.createElement("meta",{key:"og:video:alt0"+a,property:"og:video:alt",content:e.alt})),e.width?t.push(i.a.createElement("meta",{key:"og:video:width0"+a,property:"og:video:width",content:e.width.toString()})):l.defaultOpenGraphVideoWidth&&t.push(i.a.createElement("meta",{key:"og:video:width0"+a,property:"og:video:width",content:l.defaultOpenGraphVideoWidth.toString()})),e.height?t.push(i.a.createElement("meta",{key:"og:video:height"+a,property:"og:video:height",content:e.height.toString()})):l.defaultOpenGraphVideoHeight&&t.push(i.a.createElement("meta",{key:"og:video:height"+a,property:"og:video:height",content:l.defaultOpenGraphVideoHeight.toString()}))})),e.openGraph.locale&&t.push(i.a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&t.push(i.a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&t.push(i.a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){t.push(i.a.createElement("meta",Object.assign({key:e.name?e.name:e.property},e)))})),t},c=(r.Component,function(e){function t(){return e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.noindex,o=void 0!==a&&a,r=e.nofollow,p=e.description,l=e.canonical,c=e.openGraph,d=e.facebook,s=e.twitter,u=e.additionalMetaTags,m=e.titleTemplate,g=e.mobileAlternate,f=e.languageAlternates;return i.a.createElement(n.a,null,h({title:t,noindex:o,nofollow:r,description:p,canonical:l,facebook:d,openGraph:c,additionalMetaTags:u,twitter:s,titleTemplate:m,mobileAlternate:g,languageAlternates:f}))},t}(r.Component)),d=function(e){return{__html:e}},s=function(e){var t='{\n    "@context": "http://schema.org",\n    "@type": "Organization",\n    "url": "'+e.url+'",\n    "logo": "'+e.logo+'"\n  }';return i.a.createElement(n.a,null,i.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:d(t),key:"jsonld-logo"}))},u=function(e){var t=e.type,a=e.name,o=e.url,r=e.sameAs,p='{\n    "@context": "http://schema.org",\n    "@type": "'+t+'",\n    "name": "'+a+'",\n    "url": "'+o+'",\n    "sameAs": [\n      '+(void 0===r?[]:r).map((function(e){return'"'+e+'"'}))+"\n     ]\n  }";return i.a.createElement(n.a,null,i.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:d(p),key:"jsonld-social"}))}},FYa8:function(e,t,a){"use strict";var o;t.__esModule=!0,t.HeadManagerContext=void 0;var n=((o=a("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.HeadManagerContext=n},Xuae:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;var o=a("q1tI"),n=!1;class r extends o.Component{constructor(e){super(e),this._hasHeadManager=void 0,this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances,n&&this._hasHeadManager&&(this.props.headManager.mountedInstances.add(this),this.emitChange())}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}t.default=r},ljhN:function(e,t){e.exports=function(e,t){return e===t||e!==e&&t!==t}},lwAK:function(e,t,a){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var n=((o=a("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=n},"mv/X":function(e,t,a){var o=a("ljhN"),n=a("MMmD"),r=a("wJg7"),i=a("GoyQ");e.exports=function(e,t,a){if(!i(a))return!1;var p=typeof t;return!!("number"==p?n(a)&&r(t,a.length):"string"==p&&t in a)&&o(a[t],e)}},oI91:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}}}]);
//# sourceMappingURL=b280ac5cf99f58f5f93034a67fc2d0977d5d2478.e7d8ffe084c92e1c51bd.module.js.map