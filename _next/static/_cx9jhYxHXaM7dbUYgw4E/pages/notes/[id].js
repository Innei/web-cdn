(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"7o6c":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notes/[id]",function(){return t("MjEs")}])},"90cV":function(e,n,t){"use strict";var a,c;t.d(n,"a",(function(){return a})),t.d(n,"c",(function(){return c})),t.d(n,"b",(function(){return o})),t.d(n,"d",(function(){return i})),function(e){e.happy="\u5f00\u5fc3",e.sad="\u4f24\u5fc3",e.angry="\u751f\u6c14",e.sorrow="\u60b2\u54c0",e.pain="\u75db\u82e6",e.terrible="\u53ef\u6015",e.unhappy="\u4e0d\u5feb",e.detestable="\u53ef\u6076",e.worry="\u62c5\u5fc3",e.despair="\u7edd\u671b",e.anxiety="\u7126\u8651",e.excite="\u6fc0\u52a8"}(a||(a={})),function(e){e.sunshine="\u6674",e.cloudy="\u591a\u4e91",e.rainy="\u96e8",e.overcast="\u9634",e.snow="\u96ea"}(c||(c={}));var o=Object.freeze(Object.fromEntries(Object.entries(a))),i=Object.freeze(Object.fromEntries(Object.entries(c)))},CBBT:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var a=t("wx14"),c=t("Ff2n"),o=t("MX0m"),i=t.n(o),r=t("q1tI"),s=t.n(r),u=t("8tEE"),l=t("IP2g"),d=t("PL58"),f=t.n(d),p=s.a.createElement;function m(e){var n=e.actions,t=void 0===n?[]:n,o=e.informs,r=void 0===o?[]:o,d=Object(c.a)(e,["actions","informs"]);return p(s.a.Fragment,null,p(i.a,{id:"2106237933"},[".note-action.jsx-2106237933{min-height:1rem;}"]),p("div",Object(a.a)({},d,{className:"jsx-2106237933 "+(d&&null!=d.className&&d.className||"note-inform")}),r.map((function(e,n){return p("span",{key:n,className:"jsx-2106237933"},p(l.a,{icon:e.icon,className:f.a.icon}),e.name)})),p("a",{href:"https://creativecommons.org/licenses/by-nc-sa/3.0/cn/",style:{color:"currentColor"},target:"_blank",className:"jsx-2106237933"},p("span",{title:"\u7f72\u540d-\u975e\u5546\u4e1a\u6027\u4f7f\u7528-\u76f8\u540c\u65b9\u5f0f\u5171\u4eab 3.0 \u4e2d\u56fd\u5927\u9646 (CC BY-NC-SA 3.0 CN)",className:"jsx-2106237933"},p(l.a,{icon:u.a,className:f.a.icon})))),p("div",{className:"jsx-2106237933 note-action"},t.map((function(e){return p("span",{key:e.name,style:{cursor:"pointer"},onClick:e.callback,className:"jsx-2106237933"},p(l.a,{icon:e.icon,className:f.a.icon}),e.name)}))))}},MjEs:function(e,n,t){"use strict";t.r(n);var a=t("o0o1"),c=t.n(a),o=t("HaE+"),i=t("QpBz"),r=t.n(i),s=t("q1tI"),u=t.n(s),l=t("twK/"),d=t("wHSu"),f=t("CBBT"),p=t("ib2w"),m=t("9uS9"),b=t("AauJ"),h=t("Wgwc"),j=t.n(h),v=t("PJ1c"),w=u.a.createElement,y=Object(s.forwardRef)((function(e,n){var t=e.children,a=e.date,c=e.title,o=(e.tips,j()(a).locale("en").format("YYYY-MM-DD ddd"));return w("main",{className:"is-article is-note post-content paul-note",ref:n},w(v.a,{type:"bottom",delay:500},w("article",{key:"a"},w("h1",null,o),w("h2",{style:{textAlign:"center"}},c),t)))})),N=t("TyAF"),g=t("90cV"),O=t("ffb8"),x=t("nOHt"),k=t("tcEi"),E=t.n(k),Y=t("WYo3"),C=t("AoAR"),_=t("eSIs"),S=function(e){return{sunshine:d.y,cloudy:d.j,overcast:d.h,snow:d.v,rainy:d.i}[e]},M=function(e){return{happy:l.j,sad:l.i,angry:l.a,pain:l.k,sorrow:l.h,unhappy:l.h,excite:l.g,worry:l.e,terrible:l.f,detestable:l.a,despair:l.e,anxiety:l.d}[e]},A=t("F/y2"),P=u.a.createElement,B=function(e){var n,t;console.log(e);var a=!!(null===(n=e.children[0])||void 0===n?void 0:null===(t=n.props)||void 0===t?void 0:t.src);return P("p",{className:a?void 0:"indent"},a?e.children:P("span",null,e.children))},D=function(e){var n=e.data,t=e.prev,a=e.next,c=n.title,o=n._id,i=n.text,h=n.mood,j=n.weather,v=Object(Y.d)(),w=v.userStore,N=v.appStore,k=Object(x.useRouter)(),D=Object(s.useState)(""),T=D[0],F=D[1],H=E()(i),I=H.slice(0,100);Object(s.useEffect)((function(){var e=H.length;F("\u521b\u5efa\u4e8e ".concat(Object(_.a)(n.created,"YYYY-MM-DD dddd"),", \u4fee\u6539\u4e8e ").concat(Object(_.a)(n.modified,"YYYY-MM-DD dddd"),", \u5168\u6587\u5b57\u6570: ").concat(e,", \u9605\u8bfb\u6b21\u6570: ").concat(n.count.read,", \u559c\u6b22\u6b21\u6570: ").concat(n.count.like))}),[i,n.created,n.modified,n.count.read,n.count.like,H.length]),Object(s.useEffect)((function(){window.scroll({top:0,left:0,behavior:"smooth"})}));var J={informs:[],actions:[{name:0!==n.count.like?n.count.like.toString():"\u559c\u6b22",icon:d.n,callback:function(){Object(C.a)("Note").get("like/"+o,{withCredentials:!0}).then((function(){r.a.success("\u611f\u8c22\u559c\u6b22!")}))}}]};return j&&Object.keys(g.c).includes(j)?J.informs.push({name:g.d[j],icon:S(j)}):j&&J.informs.push({name:j,icon:d.h}),h&&Object.keys(g.a).includes(h)?J.informs.push({name:g.b[h],icon:M(h)}):h&&J.informs.push({name:h,icon:l.j}),J.informs.push({name:w.name,icon:d.A},{name:Object(_.b)(n.created),icon:d.g},{name:n.count.read.toString(),icon:d.d}),Object(s.useEffect)((function(){return N.headerNav={title:c,meta:"\u65e5\u8bb0",show:!0},function(){N.headerNav.show=!1}}),[N,c]),P(u.a.Fragment,null,P(O.NextSeo,{title:c+" - "+(A.a.title||N.title),description:I,openGraph:{title:c,description:I,profile:{username:w.name}}}),P(y,{title:c,date:new Date(n.created),tips:T},P(m.a,{value:i,escapeHtml:!1,renderers:{paragraph:B}}),P(f.a,J),(!!a||!!t)&&P("section",{className:"paul-more"},!!a&&P("button",{className:"btn green",onClick:function(){k.push("/notes/[id]","/notes/".concat(a.nid),{})}},"\u524d\u4e00\u7bc7"),!!t&&P("button",{className:"btn green",onClick:function(){k.push("/notes/[id]","/notes/".concat(t.nid),{})}},"\u540e\u4e00\u7bc7"))),P(b.a,{style:{minHeight:"unset",paddingTop:"0"}},P(p.c,{type:"Note",id:o})))};D.getInitialProps=function(){var e=Object(o.a)(c.a.mark((function e(n){var t,a,o,i,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query,a=t.id,e.next=4,Object(C.a)("Note","nid").get(a);case 4:return o=e.sent,i=o.data,r=o.prev,s=o.next,e.abrupt("return",{data:i,prev:r,next:s});case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.default=Object(N.c)(D)},PJ1c:function(e,n,t){"use strict";var a=t("0Xwh");t.d(n,"a",(function(){return a.a}));t("2x5v")},PL58:function(e,n,t){e.exports={icon:"Action_icon__3BtwG"}}},[["7o6c",0,2,7,5,10,1,3,4,6,8,9,11,12,14,13,15,16,18,17,19,20,21]]]);