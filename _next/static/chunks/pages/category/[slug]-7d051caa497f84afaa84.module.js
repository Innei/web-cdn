(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"+CCa":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[slug]",function(){return r("Jwva")}])},"+Qka":function(e,t,r){var n=r("fmRc"),a=r("t2Dn"),o=r("cq/+"),i=r("T1AV"),c=r("GoyQ"),l=r("mTTR"),s=r("itsj");e.exports=function e(t,r,u,f,p){t!==r&&o(r,(function(o,l){if(p||(p=new n),c(o))i(t,r,l,u,e,f,p);else{var d=f?f(s(t,l),o,l+"",t,r,p):void 0;void 0===d&&(d=o),a(t,l,d)}}),l)}},"3L66":function(e,t,r){var n=r("MMmD"),a=r("ExA7");e.exports=function(e){return a(e)&&n(e)}},7:function(e,t,r){r("j36g"),e.exports=r("+CCa")},AauJ:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("wx14"),a=r("Ff2n"),o=r("q1tI"),i=r.n(o),c=r("0Xwh"),l=r("2x5v"),s=r("dumg"),u=r("cBaE"),f=i.a.createElement,p=Object(o.memo)(Object(o.forwardRef)((e,t)=>{var{children:r,title:o,subtitle:i,delay:p}=e,d=Object(a.a)(e,["children","title","subtitle","delay"]);return f("main",Object(n.a)({className:"is-article",ref:t},d,{id:"article-wrap"}),o&&f("section",{className:"post-title"},f("h1",null,f(c.a,{type:"alpha",leaveReverse:!0,appear:!1},Object(u.f)()?f(l.a,{type:"mask-bottom",mode:"smooth",key:o},o):o)),i&&f("h2",null,f(c.a,{type:"alpha"},Object(u.f)()?f(l.a,{type:"mask-bottom",mode:"smooth",delay:500,key:i},i):i))),f(c.a,{delay:null!==p&&void 0!==p?p:300,duration:500,animConfig:{opacity:[1,0],translateY:[0,50]},animatingClassName:s.b},f("article",{className:"post-content paul-note",key:o},r)))}))},EA7m:function(e,t,r){var n=r("zZ0H"),a=r("Ioao"),o=r("wclG");e.exports=function(e,t){return o(a(e,t,n),e+"")}},Jwva:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("Puqe"),i=r.n(o),c=r("YFqc"),l=r.n(c),s=r("PJ1c"),u=r("MaJT"),f=r("AauJ"),p=r("AoAR"),d=a.a.createElement,v=e=>{var{category:t,children:r}=e;return d(f.a,{title:"\u5206\u7c7b - "+t.name,subtitle:"\u5f53\u524d\u5171\u6709"+r.length+"\u7bc7\u6587\u7ae0, \u52a0\u6cb9!"},d(u.a,{title:"\u5206\u7c7b: "+t.name}),d("article",{className:"post-content paul-note article-list"},d("ul",null,d(s.a,{delay:700,forcedReplay:!0,appear:!0},r.map(e=>{var r=new Date(e.created);return d("li",{key:e._id},d(l.a,{href:"/posts/[category]/[slug]",as:"/posts/".concat(t.slug,"/").concat(e.slug)},d("a",null,e.title)),d("span",{className:"meta"},(r.getMonth()+1).toString().padStart(2,"0"),"/",r.getDate().toString().padStart(2,"0"),"/",r.getFullYear()))})))))};v.getInitialProps=async e=>{var{query:t}=e,{slug:r}=t,n=await Object(p.a)("Category").get(r);return{category:i()(n.data,["children"]),children:n.data.children||[]}},t.default=v},LsHQ:function(e,t,r){var n=r("EA7m"),a=r("mv/X");e.exports=function(e){return n((function(t,r){var n=-1,o=r.length,i=o>1?r[o-1]:void 0,c=o>2?r[2]:void 0;for(i=e.length>3&&"function"==typeof i?(o--,i):void 0,c&&a(r[0],r[1],c)&&(i=o<3?void 0:i,o=1),t=Object(t);++n<o;){var l=r[n];l&&e(t,l,n,i)}return t}))}},MaJT:function(e,t,r){"use strict";r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return h}));var n=r("rePB"),a=r("Ff2n"),o=r("q1tI"),i=r.n(o),c=r("QkVN"),l=r.n(c),s=r("TyAF"),u=r("9ixD"),f=r("zQ19"),p=r("F/y2"),d=r("z1bh"),v=i.a.createElement;function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var y=Object(s.c)(e=>{var{title:t,description:r,openGraph:o}=e,i=Object(a.a)(e,["title","description","openGraph"]),{userStore:c,appStore:s}=Object(f.d)(),y=t+" - "+(p.a.title||s.title);return v(u.b,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({title:t,titleTemplate:"%s - "+(p.a.title||s.title),openGraph:l()({type:"article",locale:"zh-cn",site_name:p.a.title||s.title,description:r||p.a.description||s.description||c.introduce,article:{authors:[c.name||p.a.author,"mx-space"]},title:y,images:[{url:Object(d.d)().pop(),alt:t+" - "+(p.a.title||s.title)}]},o),description:r||p.a.description||s.description||c.introduce,twitter:{cardType:"summary_large_image",site:p.a.url}},i))}),h=y},PJ1c:function(e,t,r){"use strict";var n=r("0Xwh");r.d(t,"a",(function(){return n.a}));r("2x5v")},QkVN:function(e,t,r){var n=r("+Qka"),a=r("LsHQ")((function(e,t,r){n(e,t,r)}));e.exports=a},T1AV:function(e,t,r){var n=r("t2Dn"),a=r("5Tg0"),o=r("yP5f"),i=r("Q1l4"),c=r("+iFO"),l=r("03A+"),s=r("Z0cm"),u=r("3L66"),f=r("DSRE"),p=r("lSCD"),d=r("GoyQ"),v=r("YO3V"),m=r("c6wG"),y=r("itsj"),h=r("jeLo");e.exports=function(e,t,r,g,b,w,O){var j=y(e,r),E=y(t,r),x=O.get(E);if(x)n(e,r,x);else{var _=w?w(j,E,r+"",e,t,O):void 0,P=void 0===_;if(P){var T=s(E),k=!T&&f(E),N=!T&&!k&&m(E);_=E,T||k||N?s(j)?_=j:u(j)?_=i(j):k?(P=!1,_=a(E,!0)):N?(P=!1,_=o(E,!0)):_=[]:v(E)||l(E)?(_=j,l(j)?_=h(j):d(j)&&!p(j)||(_=c(E))):P=!1}P&&(O.set(E,_),b(_,E,g,w,O),O.delete(E)),n(e,r,_)}}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("7KCV");t.__esModule=!0,t.default=void 0;var a,o=n(r("q1tI")),i=r("elyg"),c=(r("g/15"),r("nOHt")),l=new Map,s=window.IntersectionObserver,u={};var f=(e,t)=>{var r=a||(s?a=new s(e=>{e.forEach(e=>{if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),l.delete(e.target),t())}})},{rootMargin:"200px"}):void 0);return r?(r.observe(e),l.set(e,t),()=>{try{r.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):()=>{}};function p(e,t,r,n){(0,i.isLocalURL)(t)&&(e.prefetch(t,r,n).catch(e=>{0}),u[t+"%"+r]=!0)}var d=function(e){var t=!1!==e.prefetch,[r,n]=o.default.useState(),a=(0,c.useRouter)(),l=a&&a.pathname||"/",{href:d,as:v}=o.default.useMemo(()=>{var t=(0,i.resolveHref)(l,e.href);return{href:t,as:e.as?(0,i.resolveHref)(l,e.as):t}},[l,e.href,e.as]);o.default.useEffect(()=>{if(t&&s&&r&&r.tagName&&(0,i.isLocalURL)(d)&&!u[d+"%"+v])return f(r,()=>{p(a,d,v)})},[t,r,d,v,a]);var{children:m,replace:y,shallow:h,scroll:g}=e;"string"===typeof m&&(m=o.default.createElement("a",null,m));var b=o.Children.only(m),w={ref:e=>{e&&n(e),b&&"object"===typeof b&&b.ref&&("function"===typeof b.ref?b.ref(e):"object"===typeof b.ref&&(b.ref.current=e))},onClick:e=>{b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,c){var{nodeName:l}=e.currentTarget;("A"!==l||!function(e){var{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o}).then(e=>{e&&c&&(window.scrollTo(0,0),document.body.focus())}))}(e,a,d,v,y,h,g)}};return t&&(w.onMouseEnter=e=>{(0,i.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),p(a,d,v,{priority:!0}))}),!e.passHref&&("a"!==b.type||"href"in b.props)||(w.href=(0,i.addBasePath)(v)),o.default.cloneElement(b,w)};t.default=d},"cq/+":function(e,t,r){var n=r("mc0g")();e.exports=n},dumg:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return u}));var n=r("q1tI"),a=r.n(n),o=r("Wgwc"),i=r.n(o),c=r("PJ1c"),l=a.a.createElement,s=["","absolute padding-b100"],u=Object(n.memo)(Object(n.forwardRef)((e,t)=>{var{children:r,date:n,title:a,tips:o}=e,u=i()(n).locale("en").format("YYYY-MM-DD ddd");return l("main",{className:"is-article is-note post-content paul-note",ref:t},l(c.a,{type:["bottom","alpha"],delay:500,forcedReplay:!0,animatingClassName:s},l("article",{key:u},l("h1",null,u),l("h2",{title:o,style:{textAlign:"center"}},a),r)))}))},itsj:function(e,t){e.exports=function(e,t){if(("constructor"!==t||"function"!==typeof e[t])&&"__proto__"!=t)return e[t]}},jeLo:function(e,t,r){var n=r("juv8"),a=r("mTTR");e.exports=function(e){return n(e,a(e))}},mc0g:function(e,t){e.exports=function(e){return function(t,r,n){for(var a=-1,o=Object(t),i=n(t),c=i.length;c--;){var l=i[e?c:++a];if(!1===r(o[l],l,o))break}return t}}},t2Dn:function(e,t,r){var n=r("hypo"),a=r("ljhN");e.exports=function(e,t,r){(void 0===r||a(e[t],r))&&(void 0!==r||t in e)||n(e,t,r)}}},[[7,1,0,7,4,3,2,5,6,8,10,11,9,13,12,17]]]);