(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[45],{P3uN:function(e,t,n){"use strict";n.r(t),n.d(t,"LazyImage",(function(){return M})),n.d(t,"ImageState",(function(){return b})),n.d(t,"LazyImageFull",(function(){return C}));var r=n("q1tI"),o=n.n(r),i=n("wx14"),a=n("zLVn");var c=n("JX7q"),s=n("rePB"),u=n("QLaP"),d=n.n(u),f=new Map,h=new Map;function l(e,t,n,r){void 0===n&&(n={}),d()(!f.has(e),"react-intersection-observer: Trying to observe %s, but it's already being observed by another instance.\nMake sure the `ref` is only used by a single <Observer /> instance.\n\n%s",e),n.threshold||(n.threshold=0);var o=n,i=o.root,a=o.rootMargin,c=o.threshold;if(e&&t){var s=a?c.toString()+"_"+a:c.toString();i&&(s=r?r+"_"+s:null);var u=s?h.get(s):null;u||(u=new IntersectionObserver(g,n),s&&h.set(s,u));var l={callback:t,visible:!1,options:n,observerId:s,observer:s?void 0:u};return f.set(e,l),u.observe(e),l}}function p(e){if(e){var t=f.get(e);if(t){var n=t.observerId,r=t.observer,o=n?h.get(n):r;o&&o.unobserve(e);var i=!1;n&&f.forEach((function(t,r){t&&t.observerId===n&&r!==e&&(i=!0)})),o&&!i&&(o.disconnect(),h.delete(n)),f.delete(e)}}}function g(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,o=f.get(r);if(o&&n>=0){var i=o.options,a=!1;Array.isArray(i.threshold)?a=i.threshold.some((function(e){return o.visible?n>e:n>=e})):void 0!==i.threshold&&(a=o.visible?n>i.threshold:n>=i.threshold),void 0!==t&&(a=a&&t),o.visible=a,o.callback(a,n)}}))}var v=function(e){var t,n;function o(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,Object(s.a)(Object(c.a)(Object(c.a)(t)),"state",{inView:!1,intersectionRatio:0}),Object(s.a)(Object(c.a)(Object(c.a)(t)),"node",null),Object(s.a)(Object(c.a)(Object(c.a)(t)),"handleNode",(function(e){t.node&&p(t.node),t.node=e,t.observeNode()})),Object(s.a)(Object(c.a)(Object(c.a)(t)),"handleChange",(function(e,n){t.setState({inView:e,intersectionRatio:n}),t.props.onChange&&t.props.onChange(e,n)})),t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var u=o.prototype;return u.componentDidMount=function(){0},u.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(p(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(p(this.node),this.node=null)},u.componentWillUnmount=function(){this.node&&(p(this.node),this.node=null)},u.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,o=e.rootId;l(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r},o)}},u.render=function(){var e=this.props,t=e.children,n=e.render,o=e.tag,c=(e.triggerOnce,e.threshold,e.root,e.rootId,e.rootMargin,Object(a.a)(e,["children","render","tag","triggerOnce","threshold","root","rootId","rootMargin"])),s=this.state,u=s.inView,d=s.intersectionRatio,f=t||n;return"function"===typeof f?f({inView:u,intersectionRatio:d,ref:this.handleNode}):Object(r.createElement)(o||"div",Object(i.a)({ref:this.handleNode},c),t)},o}(r.Component);Object(s.a)(v,"defaultProps",{threshold:0,triggerOnce:!1});var b,m,y=v,O=n("QFtp"),w=function(e,t){return(w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},S=function(){return(S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function j(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n}(m=b||(b={})).NotAsked="NotAsked",m.Loading="Loading",m.LoadSuccess="LoadSuccess",m.LoadError="LoadError";var L=Object(O.unionize)({NotAsked:{},Buffering:{},Loading:{},LoadSuccess:{},LoadError:Object(O.ofType)()}),P=Object(O.unionize)({ViewChanged:Object(O.ofType)(),BufferingEnded:{},LoadSuccess:{},LoadError:Object(O.ofType)()}),E=function(e,t){return function(n){var r=I(x(e,t));r.promise.then((function(e){return n.update(P.LoadSuccess({}))})).catch((function(e){e.isCanceled||n.update(P.LoadError({msg:"Failed to load"}))})),n.promiseCache.loading=r}},_=function(e){e.promiseCache.buffering.cancel()},C=function(e){function t(t){var n=e.call(this,t)||this;return n.promiseCache={},n.initialState=L.NotAsked(),n.state=n.initialState,n.update=n.update.bind(n),n}return function(e,t){function n(){this.constructor=e}w(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.reducer=function(e,t,n){return P.match(e,{ViewChanged:function(e){return!0===e.inView?n.src?L.match(t,{NotAsked:function(){return n.debounceDurationMs?{nextState:L.Buffering(),cmd:(e=n.debounceDurationMs,function(t){var n=I(N(e));n.promise.then((function(){return t.update(P.BufferingEnded())})).catch((function(e){})),t.promiseCache.buffering=n})}:{nextState:L.Loading(),cmd:E(n,n.experimentalDecode)};var e},default:function(){return{nextState:t}}}):{nextState:L.LoadSuccess()}:L.match(t,{Buffering:function(){return{nextState:L.NotAsked(),cmd:_}},default:function(){return{nextState:t}}})},BufferingEnded:function(){return{nextState:L.Loading(),cmd:E(n,n.experimentalDecode)}},LoadSuccess:function(){return{nextState:L.LoadSuccess()}},LoadError:function(e){return{nextState:L.LoadError(e)}}})},t.prototype.update=function(e){var n=this,r=t.reducer(e,this.state,this.props),o=r.nextState,i=r.cmd;this.props.debugActions&&(console.warn('You are running LazyImage with debugActions="true" in production. This might have performance implications.'),console.log({action:e,prevState:this.state,nextState:o})),this.setState(o,(function(){return i&&i(n)}))},t.prototype.componentWillUnmount=function(){this.promiseCache.loading&&this.promiseCache.loading.cancel(),this.promiseCache.buffering&&this.promiseCache.buffering.cancel(),this.promiseCache={}},t.prototype.render=function(){var e=this,t=this.props,n=t.children,r=t.loadEagerly,i=t.observerProps,a=j(t,["children","loadEagerly","observerProps","experimentalDecode","debounceDurationMs","debugActions"]);return r?n({imageState:L.LoadSuccess().tag,imageProps:a}):o.a.createElement(y,S({rootMargin:"50px 0px",threshold:.01},i,{onChange:function(t){return e.update(P.ViewChanged({inView:t}))}}),(function(t){return n({imageState:"Buffering"===e.state.tag?b.Loading:e.state.tag,imageProps:a,ref:t.ref})}))},t.displayName="LazyImageFull",t}(o.a.Component),x=function(e,t){var n=e.src,r=e.srcSet,o=e.alt,i=e.sizes;return void 0===t&&(t=!1),new Promise((function(e,a){var c=new Image;if(r&&(c.srcset=r),o&&(c.alt=o),i&&(c.sizes=i),c.src=n,t&&"decode"in c)return c.decode().then((function(t){return e(t)})).catch((function(e){return a(e)}));c.onload=e,c.onerror=a}))},N=function(e){return new Promise((function(t){return setTimeout(t,e)}))},I=function(e){var t=!1;return{promise:new Promise((function(n,r){e.then((function(e){return t?r({isCanceled:!0}):n(e)})),e.catch((function(e){return r(t?{isCanceled:!0}:e)}))})),cancel:function(){t=!0}}},M=function(e){var t=e.actual,n=e.placeholder,r=e.loading,i=e.error,a=j(e,["actual","placeholder","loading","error"]);return o.a.createElement(C,S({},a),(function(e){var o=e.imageProps,a=e.ref;switch(e.imageState){case b.NotAsked:return!!n&&n({imageProps:o,ref:a});case b.Loading:return r?r():!!n&&n({imageProps:o,ref:a});case b.LoadSuccess:return t({imageProps:o});case b.LoadError:return i?i():t({imageProps:o})}}))};M.displayName="LazyImage"},QFtp:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n=t||{},o=n.value,i=void 0===o?void 0:o,a=n.tag,c=void 0===a?"tag":a,s={},u=function(e){s[e]=function(t){var n,o;return void 0===t&&(t={}),i?((n={})[c]=e,n[i]=t,n):r({},t,((o={})[c]=e,o))}};for(var d in e)u(d);var f={},h=function(e){f[e]=function(t){return t[c]===e}};for(var d in e)h(d);function l(e,t,n){void 0===n&&(n=t.default);var r=t[e[c]];return r?r(i?e[i]:e):n(e)}var p=function(e,t){return t?l(e,t):function(t){return l(t,e)}},g=function(e){return e},v={},b=function(e){var t;v[e]=p(((t={})[e]=function(e){return e},t.default=function(t){throw new Error("Attempted to cast "+t[c]+" as "+e)},t))};for(var m in e)b(m);return Object.assign({is:f,as:v,match:p,transform:function(e,t){return t?l(e,t,g):function(t){return l(t,e,g)}},_Record:e},s)}Object.defineProperty(t,"__esModule",{value:!0}),t.unionize=o,t.ofType=function(){},t.default=o},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,a,c){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,c],d=0;(s=new Error(t.replace(/%s/g,(function(){return u[d++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}}}]);