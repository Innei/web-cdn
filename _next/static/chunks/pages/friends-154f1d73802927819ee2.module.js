(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"+Qka":function(t,e,r){var n=r("fmRc"),a=r("t2Dn"),i=r("cq/+"),o=r("T1AV"),l=r("GoyQ"),u=r("mTTR"),c=r("itsj");t.exports=function t(e,r,s,f,p){e!==r&&i(r,(function(i,u){if(p||(p=new n),l(i))o(e,r,u,s,t,f,p);else{var d=f?f(c(e,u),i,u+"",e,r,p):void 0;void 0===d&&(d=i),a(e,u,d)}}),u)}},10:function(t,e,r){r("j36g"),t.exports=r("oQRH")},"2Idn":function(t,e,r){"use strict";function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(!("string"===typeof t||t instanceof String)){var e;throw e=null===t?"null":"object"===(e=n(t))&&t.constructor&&t.constructor.hasOwnProperty("name")?t.constructor.name:"a ".concat(e),new TypeError("Expected string but received ".concat(e,"."))}},t.exports=e.default,t.exports.default=e.default},"3L66":function(t,e,r){var n=r("MMmD"),a=r("ExA7");t.exports=function(t){return a(t)&&n(t)}},"5AlR":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;for(var r in e)"undefined"===typeof t[r]&&(t[r]=e[r]);return t},t.exports=e.default,t.exports.default=e.default},AauJ:function(t,e,r){"use strict";r.d(e,"a",(function(){return p}));var n=r("wx14"),a=r("Ff2n"),i=r("q1tI"),o=r.n(i),l=r("0Xwh"),u=r("2x5v"),c=r("dumg"),s=r("cBaE"),f=o.a.createElement,p=Object(i.memo)(Object(i.forwardRef)((t,e)=>{var{children:r,title:i,subtitle:o,delay:p}=t,d=Object(a.a)(t,["children","title","subtitle","delay"]);return f("main",Object(n.a)({className:"is-article",ref:e},d,{id:"article-wrap"}),i&&f("section",{className:"post-title"},f("h1",null,f(l.a,{type:"alpha",leaveReverse:!0,appear:!1},Object(s.f)()?f(u.a,{type:"mask-bottom",mode:"smooth",key:i},i):i)),o&&f("h2",null,f(l.a,{type:"alpha"},Object(s.f)()?f(u.a,{type:"mask-bottom",mode:"smooth",delay:500,key:o},o):o))),f(l.a,{delay:null!==p&&void 0!==p?p:300,duration:500,animConfig:{opacity:[1,0],translateY:[0,50]},animatingClassName:c.b},f("article",{className:"post-content paul-note",key:i},r)))}))},EA7m:function(t,e,r){var n=r("zZ0H"),a=r("Ioao"),i=r("wclG");t.exports=function(t,e){return i(a(t,e,n),t+"")}},IOHr:function(t,e,r){"use strict";var n;r.d(e,"a",(function(){return n})),function(t){t[t.Friend=0]="Friend",t[t.Collection=1]="Collection"}(n||(n={}))},LjU7:function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),a=r.n(n),i=r("AoAR"),o=r("IOHr"),l=r("AauJ"),u=r("PJ1c"),c=r("MaJT"),s=r("QpBz"),f=r.n(s),p=r("twK/"),d=r("wHSu"),h=r("IP2g"),v=r("RoB+"),g=r("bM/q"),m=r.n(g),b=r("cBaE"),_=r("b5xm"),y=r.n(_),w=a.a.createElement,j=()=>{var{0:t,1:e}=Object(n.useState)(""),{0:r,1:a}=Object(n.useState)(""),{0:i,1:o}=Object(n.useState)(""),{0:l,1:u}=Object(n.useState)(""),{0:c,1:s}=Object(n.useState)(""),g=Object(n.useCallback)(()=>{[e,o,u,s,a].forEach(t=>t(""))},[]);return w("article",{className:y.a.wrap},w("h1",null,"\u6211\u60f3\u548c\u4f60\u4ea4\u670b\u53cb!"),w("form",{action:"#"},w(v.a,{placeholder:"\u6635\u79f0 *",required:!0,name:"friend-author",prefix:w(h.a,{icon:p.m}),value:t,onChange:t=>e(t.target.value)}),w(v.a,{placeholder:"\u7ad9\u70b9\u6807\u9898 *",required:!0,name:"friend-title",prefix:w(h.a,{icon:d.y}),value:r,onChange:t=>a(t.target.value)}),w(v.a,{placeholder:"\u7f51\u7ad9 *",required:!0,name:"friend-website",prefix:w(h.a,{icon:d.q}),value:i,onChange:t=>{o(t.target.value)}}),w(v.a,{placeholder:"\u5934\u50cf\u94fe\u63a5 *",required:!0,name:"friend-avatar",prefix:w(h.a,{icon:p.n}),value:l,onChange:t=>{u(t.target.value)}}),w(v.a,{multi:!0,maxLength:50,placeholder:"\u63cf\u8ff0",name:"friend-desc",value:c,onChange:t=>{s(t.target.value)}})),w("div",{style:{textAlign:"right",marginTop:"5px"}},w("button",{className:"btn red",onClick:g,style:{marginRight:"12px"}},"\u91cd\u7f6e"),w("button",{className:"btn yellow",onClick:()=>{Object(b.a)("Link","audit").post((t=>{var{author:e,site:r,avatar:n,description:a,title:i}=t;if(!!(!(e.trim()&&i.trim()&&m()(r,{require_protocol:!0})&&m()(n,{require_protocol:!0}))||a.trim().length>50))throw f.a.error("\u8f93\u5165\u6709\u8bef"),new TypeError("\u8f93\u5165\u6709\u8bef"+JSON.stringify({author:e,site:r,avatar:n,description:a}));return{name:e,url:r,avatar:n,description:a,author:e}})({author:t,site:i,avatar:l,description:c,title:r})).then(()=>{f.a.success("\u611f\u8c22\u4f60\u80fd\u548c\u6211\u4ea4\u670b\u53cb~")})}},"\u53d1\u9001")))},O=a.a.createElement,x=t=>O("div",{className:"note-item"},O("ul",null,O(u.a,{delay:700},O("div",{className:"",key:t.length},t.map(t=>O("li",{key:t._id},O("a",{href:t.url,target:"_blank"},t.name),O("span",{className:"meta"},t.description||""))))))),k=(t,e)=>O(u.a,{delay:e,type:"right"},O("strong",{key:e,style:{fontSize:"1.5rem"}},t)),S=t=>{var e=[],r=[];for(var n of t.data)if(!n.hide)switch(n.type){case o.a.Friend:e.push(n);break;case o.a.Collection:r.push(n)}return O(l.a,{title:"\u670b\u53cb\u4eec",subtitle:"\u6d77\u5185\u5b58\u77e5\u5df1, \u5929\u6daf\u82e5\u6bd4\u90bb"},O(c.a,{title:"\u670b\u53cb\u4eec"}),O("article",{className:"post-content paul-note article-list"},e.length>0&&O(a.a.Fragment,null,0!==r.length&&k("\u4e92\u76f8\u5173\u6ce8",650),x(e)),r.length>0&&O(a.a.Fragment,null,0!==e.length&&k("\u4e2a\u4eba\u6536\u85cf",850),x(r))),O(u.a,{delay:1e3},O(j,{key:"link"})))};S.getInitialProps=async()=>{var{data:t}=await Object(i.a)("Link").get("all");return{data:t}};e.default=S},LsHQ:function(t,e,r){var n=r("EA7m"),a=r("mv/X");t.exports=function(t){return n((function(e,r){var n=-1,i=r.length,o=i>1?r[i-1]:void 0,l=i>2?r[2]:void 0;for(o=t.length>3&&"function"==typeof o?(i--,o):void 0,l&&a(r[0],r[1],l)&&(o=i<3?void 0:o,i=1),e=Object(e);++n<i;){var u=r[n];u&&t(e,u,n,o)}return e}))}},MaJT:function(t,e,r){"use strict";r.d(e,"a",(function(){return g})),r.d(e,"b",(function(){return m}));var n=r("rePB"),a=r("Ff2n"),i=r("q1tI"),o=r.n(i),l=r("QkVN"),u=r.n(l),c=r("TyAF"),s=r("9ixD"),f=r("zQ19"),p=r("F/y2"),d=r("z1bh"),h=o.a.createElement;function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var g=Object(c.c)(t=>{var{title:e,description:r,openGraph:i}=t,o=Object(a.a)(t,["title","description","openGraph"]),{userStore:l,appStore:c}=Object(f.d)(),g=e+" - "+(p.a.title||c.title);return h(s.b,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({title:e,titleTemplate:"%s - "+(p.a.title||c.title),openGraph:u()({type:"article",locale:"zh-cn",site_name:p.a.title||c.title,description:r||p.a.description||c.description||l.introduce,article:{authors:[l.name||p.a.author,"mx-space"]},title:g,images:[{url:Object(d.d)().pop(),alt:e+" - "+(p.a.title||c.title)}]},i),description:r||p.a.description||c.description||l.introduce,twitter:{cardType:"summary_large_image",site:p.a.url}},o))}),m=g},PJ1c:function(t,e,r){"use strict";var n=r("0Xwh");r.d(e,"a",(function(){return n.a}));r("2x5v")},QkVN:function(t,e,r){var n=r("+Qka"),a=r("LsHQ")((function(t,e,r){n(t,e,r)}));t.exports=a},"RoB+":function(t,e,r){"use strict";r.d(e,"a",(function(){return p}));var n=r("wx14"),a=r("Ff2n"),i=r("q1tI"),o=r.n(i),l=r("TSYQ"),u=r.n(l),c=r("h6fd"),s=r.n(c),f=o.a.createElement,p=t=>{var{prefix:e,value:r,onChange:o,multi:l=!1}=t,c=Object(a.a)(t,["prefix","value","onChange","multi"]),{0:p,1:d}=Object(i.useState)(!1),h=Object(i.useRef)(null),{0:v,1:g}=Object(i.useState)({height:0,width:0}),m=Object(i.useMemo)(()=>2*(v.height+v.width),[v]);Object(i.useEffect)(()=>{if(h.current){var t=h.current,e={height:t.clientHeight,width:t.clientWidth};g(e)}},[h]);var b=l?"textarea":"input";return f("span",{className:u()(s.a["input-wrap"],p?s.a.focus:void 0),ref:h},e&&f("div",{className:s.a["prefix-wrap"]},e),f("div",{className:s.a.border},f("svg",null,f("rect",{height:v.height,width:v.width,style:{strokeDasharray:"".concat(m,"px"),strokeDashoffset:p?void 0:"".concat(m,"px")},className:s.a.rect}))),f(b,Object(n.a)({value:r},c,{onFocus:e=>{var r;d(!0),null===(r=t.onFocus)||void 0===r||r.call(t,e)},onBlur:e=>{var r;d(!1),null===(r=t.onBlur)||void 0===r||r.call(t,e)},onChange:o,className:u()(s.a.input,e?s.a["has-prefix"]:null)})))}},T1AV:function(t,e,r){var n=r("t2Dn"),a=r("5Tg0"),i=r("yP5f"),o=r("Q1l4"),l=r("+iFO"),u=r("03A+"),c=r("Z0cm"),s=r("3L66"),f=r("DSRE"),p=r("lSCD"),d=r("GoyQ"),h=r("YO3V"),v=r("c6wG"),g=r("itsj"),m=r("jeLo");t.exports=function(t,e,r,b,_,y,w){var j=g(t,r),O=g(e,r),x=w.get(O);if(x)n(t,r,x);else{var k=y?y(j,O,r+"",t,e,w):void 0,S=void 0===k;if(S){var q=c(O),N=!q&&f(O),E=!q&&!N&&v(O);k=O,q||N||E?c(j)?k=j:s(j)?k=o(j):N?(S=!1,k=a(O,!0)):E?(S=!1,k=i(O,!0)):k=[]:h(O)||u(O)?(k=j,u(j)?k=m(j):d(j)&&!p(j)||(k=l(O))):S=!1}S&&(w.set(O,k),_(k,O,b,y,w),w.delete(O)),n(t,r,k)}}},b5xm:function(t,e,r){t.exports={wrap:"ApplyLink_wrap__1x14Y"}},"bM/q":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if((0,n.default)(t),!t||t.length>=2083||/[\s<>]/.test(t))return!1;if(0===t.indexOf("mailto:"))return!1;var r,l,f,p,d,h,v,g;if(e=(0,o.default)(e,u),v=t.split("#"),t=v.shift(),v=t.split("?"),t=v.shift(),(v=t.split("://")).length>1){if(r=v.shift().toLowerCase(),e.require_valid_protocol&&-1===e.protocols.indexOf(r))return!1}else{if(e.require_protocol)return!1;if("//"===t.substr(0,2)){if(!e.allow_protocol_relative_urls)return!1;v[0]=t.substr(2)}}if(""===(t=v.join("://")))return!1;if(v=t.split("/"),""===(t=v.shift())&&!e.require_host)return!0;if((v=t.split("@")).length>1){if(e.disallow_auth)return!1;if((l=v.shift()).indexOf(":")>=0&&l.split(":").length>2)return!1}p=v.join("@"),h=null,g=null;var m=p.match(c);m?(f="",g=m[1],h=m[2]||null):(v=p.split(":"),f=v.shift(),v.length&&(h=v.join(":")));if(null!==h&&(d=parseInt(h,10),!/^[0-9]+$/.test(h)||d<=0||d>65535))return!1;if(!(0,i.default)(f)&&!(0,a.default)(f,e)&&(!g||!(0,i.default)(g,6)))return!1;if(f=f||g,e.host_whitelist&&!s(f,e.host_whitelist))return!1;if(e.host_blacklist&&s(f,e.host_blacklist))return!1;return!0};var n=l(r("2Idn")),a=l(r("f2Qg")),i=l(r("hHZz")),o=l(r("5AlR"));function l(t){return t&&t.__esModule?t:{default:t}}var u={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1},c=/^\[([^\]]+)\](?::([0-9]+))?$/;function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];if(t===n||(a=n,"[object RegExp]"===Object.prototype.toString.call(a)&&n.test(t)))return!0}var a;return!1}t.exports=e.default,t.exports.default=e.default},"cq/+":function(t,e,r){var n=r("mc0g")();t.exports=n},dumg:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return s}));var n=r("q1tI"),a=r.n(n),i=r("Wgwc"),o=r.n(i),l=r("PJ1c"),u=a.a.createElement,c=["","absolute padding-b100"],s=Object(n.memo)(Object(n.forwardRef)((t,e)=>{var{children:r,date:n,title:a,tips:i}=t,s=o()(n).locale("en").format("YYYY-MM-DD ddd");return u("main",{className:"is-article is-note post-content paul-note",ref:e},u(l.a,{type:["bottom","alpha"],delay:500,forcedReplay:!0,animatingClassName:c},u("article",{key:s},u("h1",null,s),u("h2",{title:i,style:{textAlign:"center"}},a),r)))}))},f2Qg:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){(0,n.default)(t),(e=(0,a.default)(e,o)).allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));for(var r=t.split("."),i=0;i<r.length;i++)if(r[i].length>63)return!1;if(e.require_tld){var l=r.pop();if(!r.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(l))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(l))return!1}for(var u,c=0;c<r.length;c++){if(u=r[c],e.allow_underscores&&(u=u.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(u))return!1;if(/[\uff01-\uff5e]/.test(u))return!1;if("-"===u[0]||"-"===u[u.length-1])return!1}return!0};var n=i(r("2Idn")),a=i(r("5AlR"));function i(t){return t&&t.__esModule?t:{default:t}}var o={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};t.exports=e.default,t.exports.default=e.default},h6fd:function(t,e,r){t.exports={"input-wrap":"Input_input-wrap__QJfMh",focus:"Input_focus__cspTU",rect:"Input_rect__S3k0K",border:"Input_border__1txS9",input:"Input_input__3cq_w","prefix-wrap":"Input_prefix-wrap__3SjsT"}},hHZz:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if((0,a.default)(e),!(r=String(r)))return t(e,4)||t(e,6);if("4"===r)return!!i.test(e)&&e.split(".").sort((function(t,e){return t-e}))[3]<=255;if("6"===r){var n=[e];if(e.includes("%")){if(2!==(n=e.split("%")).length)return!1;if(!n[0].includes(":"))return!1;if(""===n[1])return!1}var l=n[0].split(":"),u=!1,c=t(l[l.length-1],4),s=c?7:8;if(l.length>s)return!1;if("::"===e)return!0;"::"===e.substr(0,2)?(l.shift(),l.shift(),u=!0):"::"===e.substr(e.length-2)&&(l.pop(),l.pop(),u=!0);for(var f=0;f<l.length;++f)if(""===l[f]&&f>0&&f<l.length-1){if(u)return!1;u=!0}else if(c&&f===l.length-1);else if(!o.test(l[f]))return!1;return u?l.length>=1:l.length===s}return!1};var n,a=(n=r("2Idn"))&&n.__esModule?n:{default:n};var i=/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,o=/^[0-9A-F]{1,4}$/i;t.exports=e.default,t.exports.default=e.default},itsj:function(t,e){t.exports=function(t,e){if(("constructor"!==e||"function"!==typeof t[e])&&"__proto__"!=e)return t[e]}},jeLo:function(t,e,r){var n=r("juv8"),a=r("mTTR");t.exports=function(t){return n(t,a(t))}},mc0g:function(t,e){t.exports=function(t){return function(e,r,n){for(var a=-1,i=Object(e),o=n(e),l=o.length;l--;){var u=o[t?l:++a];if(!1===r(i[u],u,i))break}return e}}},oQRH:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/friends",function(){return r("LjU7")}])},t2Dn:function(t,e,r){var n=r("hypo"),a=r("ljhN");t.exports=function(t,e,r){(void 0===r||a(t[e],r))&&(void 0!==r||e in t)||n(t,e,r)}}},[[10,1,0,7,4,3,2,5,8,10,11,9,13,12,14]]]);