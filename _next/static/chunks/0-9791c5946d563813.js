"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[0],{3756:function(h,c,a){a.d(c,{YF:function(){return K}});var i=a(48629);function j(a){return a&&a.document&&a.location&&a.alert&&a.setInterval}function k(a){if(null==a)return window;if(!j(a)){let b=a.ownerDocument;return b&&b.defaultView||window}return a}function l(a){return k(a).getComputedStyle(a)}function m(a){return j(a)?"":a?(a.nodeName||"").toLowerCase():""}function n(){let a=navigator.userAgentData;return null!=a&&a.brands?a.brands.map(a=>a.brand+"/"+a.version).join(" "):navigator.userAgent}function o(a){return a instanceof k(a).HTMLElement}function d(a){return a instanceof k(a).Element}function p(a){return"undefined"!=typeof ShadowRoot&&(a instanceof k(a).ShadowRoot||a instanceof ShadowRoot)}function q(a){let{overflow:b,overflowX:c,overflowY:d}=l(a);return/auto|scroll|overlay|hidden/.test(b+d+c)}function r(a){return["table","td","th"].includes(m(a))}function s(c){let b=/firefox/i.test(n()),a=l(c);return"none"!==a.transform||"none"!==a.perspective||"paint"===a.contain||["transform","perspective"].includes(a.willChange)||b&&"filter"===a.willChange||b&&!!a.filter&&"none"!==a.filter}function t(){return!/^((?!chrome|android).)*safari/i.test(n())}let u=Math.min,v=Math.max,w=Math.round;function x(a,c,e){var j,l,m,n;void 0===c&&(c=!1),void 0===e&&(e=!1);let b=a.getBoundingClientRect(),f=1,g=1;c&&o(a)&&(f=a.offsetWidth>0&&w(b.width)/a.offsetWidth||1,g=a.offsetHeight>0&&w(b.height)/a.offsetHeight||1);let p=d(a)?k(a):window,q=!t()&&e,h=(b.left+(q&&null!=(j=null==(l=p.visualViewport)?void 0:l.offsetLeft)?j:0))/f,i=(b.top+(q&&null!=(m=null==(n=p.visualViewport)?void 0:n.offsetTop)?m:0))/g,r=b.width/f,s=b.height/g;return{width:r,height:s,top:i,right:h+r,bottom:i+s,left:h,x:h,y:i}}function e(a){var b;return(((b=a)instanceof k(b).Node?a.ownerDocument:a.document)||window.document).documentElement}function y(a){return d(a)?{scrollLeft:a.scrollLeft,scrollTop:a.scrollTop}:{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function z(a){return x(e(a)).left+y(a).scrollLeft}function A(a){return"html"===m(a)?a:a.assignedSlot||a.parentNode||(p(a)?a.host:null)||e(a)}function B(a){return o(a)&&"fixed"!==getComputedStyle(a).position?a.offsetParent:null}function f(b){let c=k(b),a=B(b);for(;a&&r(a)&&"static"===getComputedStyle(a).position;)a=B(a);return a&&("html"===m(a)||"body"===m(a)&&"static"===getComputedStyle(a).position&&!s(a))?c:a||function(b){let a=A(b);for(p(a)&&(a=a.host);o(a)&&!["html","body"].includes(m(a));){if(s(a))return a;a=a.parentNode}return null}(b)||c}function g(a){if(o(a))return{width:a.offsetWidth,height:a.offsetHeight};let b=x(a);return{width:b.width,height:b.height}}function C(b){let a=A(b);return["html","body","#document"].includes(m(a))?b.ownerDocument.body:o(a)&&q(a)?a:C(a)}function D(c,b){var d;void 0===b&&(b=[]);let a=C(c),e=a===(null==(d=c.ownerDocument)?void 0:d.body),f=k(a),g=e?[f].concat(f.visualViewport||[],q(a)?a:[]):a,h=b.concat(g);return e?h:h.concat(D(g))}function E(b,a,c){return"viewport"===a?(0,i.JB)(function(b,j){let l=k(b),c=e(b),a=l.visualViewport,d=c.clientWidth,f=c.clientHeight,g=0,h=0;if(a){d=a.width,f=a.height;let i=t();(i|| !i&&"fixed"===j)&&(g=a.offsetLeft,h=a.offsetTop)}return{width:d,height:f,x:g,y:h}}(b,c)):d(a)?function(a,e){let d=x(a,!1,"fixed"===e),b=d.top+a.clientTop,c=d.left+a.clientLeft;return{top:b,left:c,x:c,y:b,right:c+a.clientWidth,bottom:b+a.clientHeight,width:a.clientWidth,height:a.clientHeight}}(a,c):(0,i.JB)(function(c){var d;let b=e(c),f=y(c),a=null==(d=c.ownerDocument)?void 0:d.body,g=v(b.scrollWidth,b.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),i=v(b.scrollHeight,b.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),h=-f.scrollLeft+z(c),j=-f.scrollTop;return"rtl"===l(a||b).direction&&(h+=v(b.clientWidth,a?a.clientWidth:0)-g),{width:g,height:i,x:h,y:j}}(e(b)))}let F={getClippingRect:function(g){let{element:b,boundary:c,rootBoundary:h,strategy:i}=g,e=[..."clippingAncestors"===c?function(a){let b=D(a),c=["absolute","fixed"].includes(l(a).position)&&o(a)?f(a):a;return d(c)?b.filter(a=>d(a)&&function(c,b){let d=null==b.getRootNode?void 0:b.getRootNode();if(c.contains(b))return!0;if(d&&p(d)){let a=b;do{if(a&&c===a)return!0;a=a.parentNode||a.host}while(a)}return!1}(a,c)&&"body"!==m(a)):[]}(b):[].concat(c),h],j=e[0],a=e.reduce((a,d)=>{let c=E(b,d,i);return a.top=v(c.top,a.top),a.right=u(c.right,a.right),a.bottom=u(c.bottom,a.bottom),a.left=v(c.left,a.left),a},E(b,j,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(i){let{rect:b,offsetParent:a,strategy:j}=i,f=o(a),g=e(a);if(a===g)return b;let d={scrollLeft:0,scrollTop:0},c={x:0,y:0};if((f|| !f&&"fixed"!==j)&&(("body"!==m(a)||q(g))&&(d=y(a)),o(a))){let h=x(a,!0);c.x=h.x+a.clientLeft,c.y=h.y+a.clientTop}return{...b,x:b.x-d.scrollLeft+c.x,y:b.y-d.scrollTop+c.y}},isElement:d,getDimensions:g,getOffsetParent:f,getDocumentElement:e,getElementRects(b){let{reference:c,floating:a,strategy:d}=b;return{reference:function(j,a,h){let d=o(a),f=e(a),c=x(j,d&&function(a){let b=x(a);return w(b.width)!==a.offsetWidth||w(b.height)!==a.offsetHeight}(a),"fixed"===h),g={scrollLeft:0,scrollTop:0},b={x:0,y:0};if(d|| !d&&"fixed"!==h){if(("body"!==m(a)||q(f))&&(g=y(a)),o(a)){let i=x(a,!0);b.x=i.x+a.clientLeft,b.y=i.y+a.clientTop}else f&&(b.x=z(f))}return{x:c.left+g.scrollLeft-b.x,y:c.top+g.scrollTop-b.y,width:c.width,height:c.height}}(c,f(a),d),floating:{...g(a),x:0,y:0}}},getClientRects:a=>Array.from(a.getClientRects()),isRTL:a=>"rtl"===l(a).direction},G=(a,b,c)=>(0,i.oo)(a,b,{platform:F,...c});var b=a(50959),H=a(10422),I="undefined"!=typeof document?b.useLayoutEffect:b.useEffect;function J(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let d,c,e;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if((d=a.length)!=b.length)return!1;for(c=d;0!=c--;)if(!J(a[c],b[c]))return!1;return!0}if((d=(e=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(c=d;0!=c--;)if(!Object.prototype.hasOwnProperty.call(b,e[c]))return!1;for(c=d;0!=c--;){let f=e[c];if(("_owner"!==f||!a.$$typeof)&&!J(a[f],b[f]))return!1}return!0}return a!=a&&b!=b}function K(e){let{middleware:a,placement:f="bottom",strategy:g="absolute",whileElementsMounted:i}=void 0===e?{}:e,p=b.useRef(null),q=b.useRef(null),j=function(a){let c=b.useRef(a);return I(()=>{c.current=a}),c}(i),r=b.useRef(null),[k,s]=b.useState({x:null,y:null,strategy:g,placement:f,middlewareData:{}}),[c,l]=b.useState(a);J(null==c?void 0:c.map(a=>{let{options:b}=a;return b}),null==a?void 0:a.map(a=>{let{options:b}=a;return b}))||l(a);let d=b.useCallback(()=>{p.current&&q.current&&G(p.current,q.current,{middleware:c,placement:f,strategy:g}).then(a=>{t.current&&H.flushSync(()=>{s(a)})})},[c,f,g]);I(()=>{t.current&&d()},[d]);let t=b.useRef(!1);I(()=>(t.current=!0,()=>{t.current=!1}),[]);let h=b.useCallback(()=>{if("function"==typeof r.current&&(r.current(),r.current=null),p.current&&q.current){if(j.current){let a=j.current(p.current,q.current,d);r.current=a}else d()}},[d,j]),m=b.useCallback(a=>{p.current=a,h()},[h]),n=b.useCallback(a=>{q.current=a,h()},[h]),o=b.useMemo(()=>({reference:p,floating:q}),[]);return b.useMemo(()=>({...k,update:d,refs:o,reference:m,floating:n}),[k,d,o,m,n])}},12485:function(c,a,b){function d(a){for(var c=[],b=1;b<arguments.length;b++)c[b-1]=arguments[b];a&&a.addEventListener&&a.addEventListener.apply(a,c)}function e(a){for(var c=[],b=1;b<arguments.length;b++)c[b-1]=arguments[b];a&&a.removeEventListener&&a.removeEventListener.apply(a,c)}b.d(a,{S1:function(){return e},on:function(){return d}})},77588:function(c,b,a){var d=a(50959),e=a(12485),f=["mousedown","touchstart"];b.Z=function(c,b,a){void 0===a&&(a=f);var g=(0,d.useRef)(b);(0,d.useEffect)(function(){g.current=b},[b]),(0,d.useEffect)(function(){for(var f=function(a){var b=c.current;b&&!b.contains(a.target)&&g.current(a)},b=0,d=a;b<d.length;b++){var h=d[b];(0,e.on)(document,h,f)}return function(){for(var b=0,c=a;b<c.length;b++){var d=c[b];(0,e.S1)(document,d,f)}}},[a,c])}},48629:function(c,a,b){function d(a){return a.split("-")[0]}function e(a){return a.split("-")[1]}function f(a){return["top","bottom"].includes(d(a))?"x":"y"}function g(a){return"y"===a?"height":"width"}function h(p,i,j){let{reference:a,floating:c}=p,k=a.x+a.width/2-c.width/2,l=a.y+a.height/2-c.height/2,h=f(i),m=g(h),n=a[m]/2-c[m]/2,o="x"===h,b;switch(d(i)){case"top":b={x:k,y:a.y-c.height};break;case"bottom":b={x:k,y:a.y+a.height};break;case"right":b={x:a.x+a.width,y:l};break;case"left":b={x:a.x-c.width,y:l};break;default:b={x:a.x,y:a.y}}switch(e(i)){case"start":b[h]-=n*(j&&o?-1:1);break;case"end":b[h]+=n*(j&&o?-1:1)}return b}b.d(a,{JB:function(){return j},RR:function(){return v},X5:function(){return u},cv:function(){return w},oo:function(){return i},uY:function(){return x}});let i=async(l,f,t)=>{let{placement:m="bottom",strategy:g="absolute",middleware:n=[],platform:b}=t,o=await (null==b.isRTL?void 0:b.isRTL(f)),i=await b.getElementRects({reference:l,floating:f,strategy:g}),{x:c,y:d}=h(i,m,o),j=m,e={},p=0;for(let k=0;k<n.length;k++){let{name:q,fn:u}=n[k],{x:r,y:s,data:v,reset:a}=await u({x:c,y:d,initialPlacement:m,placement:j,strategy:g,middlewareData:e,rects:i,platform:b,elements:{reference:l,floating:f}});c=null!=r?r:c,d=null!=s?s:d,e={...e,[q]:{...e[q],...v}},a&&p<=50&&(p++,"object"==typeof a&&(a.placement&&(j=a.placement),a.rects&&(i=!0===a.rects?await b.getElementRects({reference:l,floating:f,strategy:g}):a.rects),{x:c,y:d}=h(i,j,o)),k=-1)}return{x:c,y:d,placement:j,strategy:g,middlewareData:e}};function j(a){return{...a,top:a.y,left:a.x,right:a.x+a.width,bottom:a.y+a.height}}async function k(n,g){var l,b,u;void 0===g&&(g={});let{x:o,y:p,platform:a,rects:h,elements:i,strategy:m}=n,{boundary:q="clippingAncestors",rootBoundary:r="viewport",elementContext:c="floating",altBoundary:s=!1,padding:t=0}=g,d="number"!=typeof(b=t)?{top:0,right:0,bottom:0,left:0,...b}:{top:b,right:b,bottom:b,left:b},k=i[s?"floating"===c?"reference":"floating":c],e=j(await a.getClippingRect({element:null==(l=await (null==a.isElement?void 0:a.isElement(k)))||l?k:k.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(i.floating)),boundary:q,rootBoundary:r,strategy:m})),f=j(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===c?{...h.floating,x:o,y:p}:h.reference,offsetParent:await (null==a.getOffsetParent?void 0:a.getOffsetParent(i.floating)),strategy:m}):h[c]);return{top:e.top-f.top+d.top,bottom:f.bottom-e.bottom+d.bottom,left:e.left-f.left+d.left,right:f.right-e.right+d.right}}let l=Math.min,m=Math.max;function n(a,b,c){return m(a,l(b,c))}let o={left:"right",right:"left",bottom:"top",top:"bottom"};function p(a){return a.replace(/left|right|bottom|top/g,a=>o[a])}function q(c,d,b){void 0===b&&(b=!1);let h=e(c),i=f(c),j=g(i),a="x"===i?h===(b?"end":"start")?"right":"left":"start"===h?"bottom":"top";return d.reference[j]>d.floating[j]&&(a=p(a)),{main:a,cross:p(a)}}let r={start:"end",end:"start"};function s(a){return a.replace(/start|end/g,a=>r[a])}let t=["top","right","bottom","left"].reduce((b,a)=>b.concat(a,a+"-start",a+"-end"),[]),u=function(a){return void 0===a&&(a={}),{name:"autoPlacement",options:a,async fn(j){var l,m,n,o,p,r,B,c;let{x:C,y:D,rects:E,middlewareData:u,placement:v,platform:w,elements:F}=j,{alignment:G=null,allowedPlacements:H=t,autoAlignment:I=!0,...J}=a,g=(r=G,B=I,c=H,(r?[...c.filter(a=>e(a)===r),...c.filter(a=>e(a)!==r)]:c.filter(a=>d(a)===a)).filter(a=>!r||e(a)===r|| !!B&&s(a)!==a)),h=await k(j,J),f=null!=(l=null==(m=u.autoPlacement)?void 0:m.index)?l:0,b=g[f];if(null==b)return{};let{main:K,cross:L}=q(b,E,await (null==w.isRTL?void 0:w.isRTL(F.floating)));if(v!==b)return{x:C,y:D,reset:{placement:g[0]}};let M=[h[d(b)],h[K],h[L]],i=[...null!=(n=null==(o=u.autoPlacement)?void 0:o.overflows)?n:[],{placement:b,overflows:M}],x=g[f+1];if(x)return{data:{index:f+1,overflows:i},reset:{placement:x}};let y=i.slice().sort((a,b)=>a.overflows[0]-b.overflows[0]),z=null==(p=y.find(a=>{let{overflows:b}=a;return b.every(a=>a<=0)}))?void 0:p.placement,A=null!=z?z:y[0].placement;return A!==v?{data:{index:f+1,overflows:i},reset:{placement:A}}:{}}}},v=function(a){return void 0===a&&(a={}),{name:"flip",options:a,async fn(i){var j,l,m,n;let{placement:c,middlewareData:o,rects:x,initialPlacement:b,platform:r,elements:y}=i,{mainAxis:z=!0,crossAxis:A=!0,fallbackPlacements:B,fallbackStrategy:C="bestFit",flipAlignment:D=!0,...E}=a,t=d(c),F=B||(t!==b&&D?function(a){let b=p(a);return[s(a),b,s(b)]}(b):[p(b)]),h=await k(i,E),e=[],f=(null==(j=o.flip)?void 0:j.overflows)||[];if(z&&e.push(h[t]),A){let{main:G,cross:H}=q(c,x,await (null==r.isRTL?void 0:r.isRTL(y.floating)));e.push(h[G],h[H])}if(f=[...f,{placement:c,overflows:e}],!e.every(a=>a<=0)){let u=(null!=(l=null==(m=o.flip)?void 0:m.index)?l:0)+1,v=[b,...F][u];if(v)return{data:{index:u,overflows:f},reset:{placement:v}};let g="bottom";switch(C){case"bestFit":{let w=null==(n=f.map(a=>[a,a.overflows.filter(a=>a>0).reduce((a,b)=>a+b,0)]).sort((a,b)=>a[1]-b[1])[0])?void 0:n[0].placement;w&&(g=w);break}case"initialPlacement":g=b}if(c!==g)return{reset:{placement:g}}}return{}}}},w=function(a){return void 0===a&&(a=0),{name:"offset",options:a,async fn(c){let{x:g,y:h}=c,b=await async function(i,a){let{placement:b,platform:j,elements:p}=i,q=await (null==j.isRTL?void 0:j.isRTL(p.floating)),r=d(b),k=e(b),l="x"===f(b),m=["left","top"].includes(r)?-1:1,n=q&&l?-1:1,c="function"==typeof a?a(i):a,{mainAxis:o,crossAxis:g,alignmentAxis:h}="number"==typeof c?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return k&&"number"==typeof h&&(g="end"===k?-1*h:h),l?{x:g*n,y:o*m}:{x:o*m,y:g*n}}(c,a);return{x:g+b.x,y:h+b.y,data:b}}}},x=function(a){return void 0===a&&(a={}),{name:"shift",options:a,async fn(i){var p;let{x:l,y:m,placement:q}=i,{mainAxis:r=!0,crossAxis:s=!1,limiter:t={fn(a){let{x:b,y:c}=a;return{x:b,y:c}}},...u}=a,o={x:l,y:m},g=await k(i,u),b=f(d(q)),h="x"===(p=b)?"y":"x",c=o[b],e=o[h];if(r){let v="y"===b?"bottom":"right";c=n(c+g["y"===b?"top":"left"],c,c-g[v])}if(s){let w="y"===h?"bottom":"right";e=n(e+g["y"===h?"top":"left"],e,e-g[w])}let j=t.fn({...i,[b]:c,[h]:e});return{...j,data:{x:j.x-l,y:j.y-m}}}}}},49084:function(c,b,a){var d=a(64765),e=a(13383);b.Z=function(a,b){b=(0,d.Z)(b,a);for(var c=0,f=b.length;null!=a&&c<f;)a=a[(0,e.Z)(b[c++])];return c&&c==f?a:void 0}},64765:function(e,c,a){a.d(c,{Z:function(){return m}});var f=a(56052),g=a(61070),d=a(91380);function b(e,a){if("function"!=typeof e||null!=a&&"function"!=typeof a)throw new TypeError("Expected a function");var c=function(){var d=arguments,f=a?a.apply(this,d):d[0],b=c.cache;if(b.has(f))return b.get(f);var g=e.apply(this,d);return c.cache=b.set(f,g)||b,g};return c.cache=new(b.Cache||d.Z),c}b.Cache=d.Z;var h=b,i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,j=/\\(\\)?/g,k=function(b){var a=h(b,function(a){return 500===c.size&&c.clear(),a}),c=a.cache;return a}(function(a){var b=[];return 46===a.charCodeAt(0)&&b.push(""),a.replace(i,function(a,c,d,e){b.push(d?e.replace(j,"$1"):c||a)}),b}),l=a(99757),m=function(a,b){return(0,f.Z)(a)?a:(0,g.Z)(a,b)?[a]:k((0,l.Z)(a))}},61070:function(c,b,a){var d=a(56052),e=a(98111),f=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,g=/^\w*$/;b.Z=function(a,c){if((0,d.Z)(a))return!1;var b=typeof a;return!!("number"==b||"symbol"==b||"boolean"==b||null==a||(0,e.Z)(a))||g.test(a)||!f.test(a)||null!=c&&a in Object(c)}},13383:function(c,a,b){var d=b(98111),e=1/0;a.Z=function(a){if("string"==typeof a||(0,d.Z)(a))return a;var b=a+"";return"0"==b&&1/a== -e?"-0":b}}}])