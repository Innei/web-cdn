_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"+CCa":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[slug]",function(){return n("Jwva")}])},"+Qka":function(t,e,n){var r=n("fmRc"),a=n("t2Dn"),o=n("cq/+"),i=n("T1AV"),c=n("GoyQ"),u=n("mTTR"),s=n("itsj");t.exports=function t(e,n,l,f,p){e!==n&&o(n,(function(o,u){if(p||(p=new r),c(o))i(e,n,u,l,t,f,p);else{var d=f?f(s(e,u),o,u+"",e,n,p):void 0;void 0===d&&(d=o),a(e,u,d)}}),u)}},"3L66":function(t,e,n){var r=n("MMmD"),a=n("ExA7");t.exports=function(t){return a(t)&&r(t)}},7:function(t,e,n){n("j36g"),t.exports=n("+CCa")},AauJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=n.n(o),c=n("0Xwh"),u=n("2x5v"),s=n("dumg"),l=n("cBaE"),f=i.a.createElement,p=Object(o.memo)(Object(o.forwardRef)((function(t,e){var n=t.children,o=t.title,i=t.subtitle,p=t.delay,d=Object(a.a)(t,["children","title","subtitle","delay"]);return f("main",Object(r.a)({className:"is-article",ref:e},d,{id:"article-wrap"}),o&&f("section",{className:"post-title"},f("h1",null,f(c.a,{type:"alpha",leaveReverse:!0,appear:!1},Object(l.f)()?f(u.a,{type:"mask-bottom",mode:"smooth",key:o},o):o)),i&&f("h2",null,f(c.a,{type:"alpha"},Object(l.f)()?f(u.a,{type:"mask-bottom",mode:"smooth",delay:500,key:i},i):i))),f(c.a,{delay:null!==p&&void 0!==p?p:300,duration:500,animConfig:{opacity:[1,0],translateY:[0,50]},animatingClassName:s.b},f("article",{className:"post-content paul-note",key:o},n)))})))},EA7m:function(t,e,n){var r=n("zZ0H"),a=n("Ioao"),o=n("wclG");t.exports=function(t,e){return o(a(t,e,r),t+"")}},Jwva:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),a=n.n(r),o=n("HaE+"),i=n("q1tI"),c=n.n(i),u=n("Puqe"),s=n.n(u),l=n("YFqc"),f=n.n(l),p=n("PJ1c"),d=n("MaJT"),v=n("AauJ"),m=n("AoAR"),y=c.a.createElement,h=function(t){var e=t.category,n=t.children;return y(v.a,{title:"\u5206\u7c7b - "+e.name,subtitle:"\u5f53\u524d\u5171\u6709"+n.length+"\u7bc7\u6587\u7ae0, \u52a0\u6cb9!"},y(d.a,{title:"\u5206\u7c7b: "+e.name}),y("article",{className:"post-content paul-note article-list"},y("ul",null,y(p.a,{delay:700,forcedReplay:!0,appear:!0},n.map((function(t){var n=new Date(t.created);return y("li",{key:t._id},y(f.a,{href:"/posts/[category]/[slug]",as:"/posts/".concat(e.slug,"/").concat(t.slug)},y("a",null,t.title)),y("span",{className:"meta"},(n.getMonth()+1).toString().padStart(2,"0"),"/",n.getDate().toString().padStart(2,"0"),"/",n.getFullYear()))}))))))};h.getInitialProps=function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.query,r=n.slug,t.next=4,Object(m.a)("Category").get(r);case 4:return o=t.sent,t.abrupt("return",{category:s()(o.data,["children"]),children:o.data.children||[]});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.default=h},LsHQ:function(t,e,n){var r=n("EA7m"),a=n("mv/X");t.exports=function(t){return r((function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,c=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,c&&a(n[0],n[1],c)&&(i=o<3?void 0:i,o=1),e=Object(e);++r<o;){var u=n[r];u&&t(e,u,r,i)}return e}))}},MaJT:function(t,e,n){"use strict";n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return h}));var r=n("rePB"),a=n("Ff2n"),o=n("q1tI"),i=n.n(o),c=n("QkVN"),u=n.n(c),s=n("TyAF"),l=n("9ixD"),f=n("zQ19"),p=n("F/y2"),d=n("z1bh"),v=i.a.createElement;function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var y=Object(s.c)((function(t){var e=t.title,n=t.description,o=t.openGraph,i=Object(a.a)(t,["title","description","openGraph"]),c=Object(f.d)(),s=c.userStore,y=c.appStore,h=e+" - "+(p.a.title||y.title);return v(l.b,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({title:e,titleTemplate:"%s - "+(p.a.title||y.title),openGraph:u()({type:"article",locale:"zh-cn",site_name:p.a.title||y.title,description:n||p.a.description||y.description||s.introduce,article:{authors:[s.name||p.a.author,"mx-space"]},title:h,images:[{url:Object(d.d)().pop(),alt:e+" - "+(p.a.title||y.title)}]},o),description:n||p.a.description||y.description||s.introduce,twitter:{cardType:"summary_large_image",site:p.a.url}},i))})),h=y},PJ1c:function(t,e,n){"use strict";var r=n("0Xwh");n.d(e,"a",(function(){return r.a}));n("2x5v")},QkVN:function(t,e,n){var r=n("+Qka"),a=n("LsHQ")((function(t,e,n){r(t,e,n)}));t.exports=a},T1AV:function(t,e,n){var r=n("t2Dn"),a=n("5Tg0"),o=n("yP5f"),i=n("Q1l4"),c=n("+iFO"),u=n("03A+"),s=n("Z0cm"),l=n("3L66"),f=n("DSRE"),p=n("lSCD"),d=n("GoyQ"),v=n("YO3V"),m=n("c6wG"),y=n("itsj"),h=n("jeLo");t.exports=function(t,e,n,g,b,w,O){var j=y(t,n),E=y(e,n),x=O.get(E);if(x)r(t,n,x);else{var _=w?w(j,E,n+"",t,e,O):void 0,k=void 0===_;if(k){var P=s(E),T=!P&&f(E),N=!P&&!T&&m(E);_=E,P||T||N?s(j)?_=j:l(j)?_=i(j):T?(k=!1,_=a(E,!0)):N?(k=!1,_=o(E,!0)):_=[]:v(E)||u(E)?(_=j,u(j)?_=h(j):d(j)&&!p(j)||(_=c(E))):k=!1}k&&(O.set(E,_),b(_,E,g,w,O),O.delete(E)),r(t,n,_)}}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("zoAU"),a=n("7KCV");e.__esModule=!0,e.default=void 0;var o,i=a(n("q1tI")),c=n("elyg"),u=(n("g/15"),n("nOHt")),s=new Map,l=window.IntersectionObserver,f={};var p=function(t,e){var n=o||(l?o=new l((function(t){t.forEach((function(t){if(s.has(t.target)){var e=s.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(o.unobserve(t.target),s.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(t),s.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}s.delete(t)}):function(){}};function d(t,e,n,r){(0,c.isLocalURL)(e)&&(t.prefetch(e,n,r).catch((function(t){0})),f[e+"%"+n]=!0)}var v=function(t){var e=!1!==t.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],s=a[1],v=(0,u.useRouter)(),m=v&&v.pathname||"/",y=i.default.useMemo((function(){var e=(0,c.resolveHref)(m,t.href);return{href:e,as:t.as?(0,c.resolveHref)(m,t.as):e}}),[m,t.href,t.as]),h=y.href,g=y.as;i.default.useEffect((function(){if(e&&l&&o&&o.tagName&&(0,c.isLocalURL)(h)&&!f[h+"%"+g])return p(o,(function(){d(v,h,g)}))}),[e,o,h,g,v]);var b=t.children,w=t.replace,O=t.shallow,j=t.scroll;"string"===typeof b&&(b=i.default.createElement("a",null,b));var E=i.Children.only(b),x={ref:function(t){t&&s(t),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(t):"object"===typeof E.ref&&(E.ref.current=t))},onClick:function(t){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(t),t.defaultPrevented||function(t,e,n,r,a,o,i){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&(0,c.isLocalURL)(n))&&(t.preventDefault(),null==i&&(i=r.indexOf("#")<0),e[a?"replace":"push"](n,r,{shallow:o}).then((function(t){t&&i&&(window.scrollTo(0,0),document.body.focus())})))}(t,v,h,g,w,O,j)}};return e&&(x.onMouseEnter=function(t){(0,c.isLocalURL)(h)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(t),d(v,h,g,{priority:!0}))}),!t.passHref&&("a"!==E.type||"href"in E.props)||(x.href=(0,c.addBasePath)(g)),i.default.cloneElement(E,x)};e.default=v},"cq/+":function(t,e,n){var r=n("mc0g")();t.exports=r},dumg:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return l}));var r=n("q1tI"),a=n.n(r),o=n("Wgwc"),i=n.n(o),c=n("PJ1c"),u=a.a.createElement,s=["","absolute padding-b100"],l=Object(r.memo)(Object(r.forwardRef)((function(t,e){var n=t.children,r=t.date,a=t.title,o=t.tips,l=i()(r).locale("en").format("YYYY-MM-DD ddd");return u("main",{className:"is-article is-note post-content paul-note",ref:e},u(c.a,{type:["bottom","alpha"],delay:500,forcedReplay:!0,animatingClassName:s},u("article",{key:l},u("h1",null,l),u("h2",{title:o,style:{textAlign:"center"}},a),n)))})))},itsj:function(t,e){t.exports=function(t,e){if(("constructor"!==e||"function"!==typeof t[e])&&"__proto__"!=e)return t[e]}},jeLo:function(t,e,n){var r=n("juv8"),a=n("mTTR");t.exports=function(t){return r(t,a(t))}},mc0g:function(t,e){t.exports=function(t){return function(e,n,r){for(var a=-1,o=Object(e),i=r(e),c=i.length;c--;){var u=i[t?c:++a];if(!1===n(o[u],u,o))break}return e}}},t2Dn:function(t,e,n){var r=n("hypo"),a=n("ljhN");t.exports=function(t,e,n){(void 0===n||a(t[e],n))&&(void 0!==n||e in t)||r(t,e,n)}}},[[7,2,1,8,5,4,0,3,6,7,9,11,12,10,14,13,18]]]);