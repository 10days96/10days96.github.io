(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[7],{7757:function(e,t,n){e.exports=n(5666)},9047:function(e,t,n){var r={"./deckgo-highlight-code.entry.js":[9548,548]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=9047,e.exports=o},5397:function(e,t,n){"use strict";n.d(t,{H:function(){return z},b:function(){return be},c:function(){return ie},g:function(){return ae},h:function(){return _},p:function(){return C},r:function(){return xe}});var r=n(5671),o=n(3144);function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var i=n(9611);function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,i.Z)(e,t)}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function A(e,t,n){return A=f()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&(0,i.Z)(o,n.prototype),o},A.apply(null,arguments)}function $(e){var t="function"==typeof Map?new Map:void 0;return $=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return A(e,arguments,s(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,i.Z)(r,e)},$(e)}var h=n(5861),p=n(2982);var m=n(181);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||(0,m.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=n(7757),v=n.n(y);function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var M,w,b=!1,E="undefined"!=typeof window?window:{},G=E.document||{head:{}},x={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}},C=function(e){return Promise.resolve(e)},L=function(){try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1}(),B=function(e,t,n,r){n&&n.map((function(n){var r=d(n,3),o=r[0],a=r[1],i=r[2],u=Y(e,o),c=k(t,i),l=R(o);x.ael(u,a,c,l),(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return x.rel(u,a,c,l)}))}))},k=function(e,t){return function(n){try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(r){Be(r)}}},Y=function(e,t){return 4&t?G:8&t?E:e},R=function(e){return 0!=(2&e)},O="{visibility:hidden}.hydrated{visibility:inherit}",j="http://www.w3.org/1999/xlink",S=new WeakMap,I=function(e,t,n){var r=Re.get(e);L&&n?(r=r||new CSSStyleSheet).replace(t):r=t,Re.set(e,r)},N=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,o=(t.$tagName$,function(){}),a=function(e,t,n,r){var o=T(t),a=Re.get(o);if(e=11===e.nodeType?e:G,a)if("string"==typeof a){e=e.head||e;var i,u=S.get(e);u||S.set(e,u=new Set),u.has(o)||((i=G.createElement("style")).innerHTML=a,e.insertBefore(i,e.querySelector("link")),u&&u.add(o))}else e.adoptedStyleSheets.includes(a)||(e.adoptedStyleSheets=[].concat((0,p.Z)(e.adoptedStyleSheets),[a]));return o}(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=a,n.classList.add(a+"-h")),o()},T=function(e,t){return"sc-"+e.$tagName$},P={},Z=function(e){return"object"===(e=typeof e)||"function"===e},_=function(e,t){for(var n=null,r=null,o=!1,a=!1,i=[],u=function t(r){for(var u=0;u<r.length;u++)n=r[u],Array.isArray(n)?t(n):null!=n&&"boolean"!=typeof n&&((o="function"!=typeof e&&!Z(n))&&(n=String(n)),o&&a?i[i.length-1].$text$+=n:i.push(o?U(null,n):n),a=o)},c=arguments.length,l=new Array(c>2?c-2:0),s=2;s<c;s++)l[s-2]=arguments[s];if(u(l),t){t.key&&(r=t.key);var f=t.className||t.class;f&&(t.class="object"!=typeof f?f:Object.keys(f).filter((function(e){return f[e]})).join(" "))}if("function"==typeof e)return e(null===t?{}:t,i,D);var A=U(e,null);return A.$attrs$=t,i.length>0&&(A.$children$=i),A.$key$=r,A},U=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},z={},D={forEach:function(e,t){return e.map(H).forEach(t)},map:function(e,t){return e.map(H).map(t).map(F)}},H=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},F=function(e){if("function"==typeof e.vtag){var t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),_.apply(void 0,[e.vtag,t].concat((0,p.Z)(e.vchildren||[])))}var n=U(e.vtag,e.vtext);return n.$attrs$=e.vattrs,n.$children$=e.vchildren,n.$key$=e.vkey,n.$name$=e.vname,n},W=function(e,t,n,r,o,a){if(n!==r){var i=Le(e,t),u=t.toLowerCase();if("class"===t){var c=e.classList,l=V(n),s=V(r);c.remove.apply(c,(0,p.Z)(l.filter((function(e){return e&&!s.includes(e)})))),c.add.apply(c,(0,p.Z)(s.filter((function(e){return e&&!l.includes(e)}))))}else if("style"===t){for(var f in n)r&&null!=r[f]||(f.includes("-")?e.style.removeProperty(f):e.style[f]="");for(var A in r)n&&r[A]===n[A]||(A.includes("-")?e.style.setProperty(A,r[A]):e.style[A]=r[A])}else if("key"===t);else if("ref"===t)r&&r(e);else if(i||"o"!==t[0]||"n"!==t[1]){var $=Z(r);if((i||$&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[t]=r;else{var h=null==r?"":r;"list"===t?i=!1:null!=n&&e[t]==h||(e[t]=h)}}catch(d){}var m=!1;u!==(u=u.replace(/^xlink\:?/,""))&&(t=u,m=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||(m?e.removeAttributeNS(j,t):e.removeAttribute(t)):(!i||4&a||o)&&!$&&(r=!0===r?"":r,m?e.setAttributeNS(j,t,r):e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):Le(E,u)?u.slice(2):u[2]+t.slice(3),n&&x.rel(e,t,n,!1),r&&x.ael(e,t,r,!1)}},q=/\s/,V=function(e){return e?e.split(q):[]},K=function(e,t,n,r){var o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,a=e&&e.$attrs$||P,i=t.$attrs$||P;for(r in a)r in i||W(o,r,a[r],void 0,n,t.$flags$);for(r in i)W(o,r,a[r],i[r],n,t.$flags$)},Q=function e(t,n,r,o){var a,i,u=n.$children$[r],c=0;if(null!==u.$text$)a=u.$elm$=G.createTextNode(u.$text$);else if(a=u.$elm$=G.createElement(u.$tag$),K(null,u,false),null!=M&&a["s-si"]!==M&&a.classList.add(a["s-si"]=M),u.$children$)for(c=0;c<u.$children$.length;++c)(i=e(t,u,c))&&a.appendChild(i);return a},J=function(e,t,n,r,o,a){var i,u=e;for(u.shadowRoot&&u.tagName===w&&(u=u.shadowRoot);o<=a;++o)r[o]&&(i=Q(null,n,o))&&(r[o].$elm$=i,u.insertBefore(i,t))},X=function(e,t,n,r,o){for(;t<=n;++t)(r=e[t])&&(o=r.$elm$,re(r),o.remove())},ee=function(e,t,n,r){for(var o,a,i=0,u=0,c=0,l=0,s=t.length-1,f=t[0],A=t[s],$=r.length-1,h=r[0],p=r[$];i<=s&&u<=$;)if(null==f)f=t[++i];else if(null==A)A=t[--s];else if(null==h)h=r[++u];else if(null==p)p=r[--$];else if(te(f,h))ne(f,h),f=t[++i],h=r[++u];else if(te(A,p))ne(A,p),A=t[--s],p=r[--$];else if(te(f,p))ne(f,p),e.insertBefore(f.$elm$,A.$elm$.nextSibling),f=t[++i],p=r[--$];else if(te(A,h))ne(A,h),e.insertBefore(A.$elm$,f.$elm$),A=t[--s],h=r[++u];else{for(c=-1,l=i;l<=s;++l)if(t[l]&&null!==t[l].$key$&&t[l].$key$===h.$key$){c=l;break}c>=0?((a=t[c]).$tag$!==h.$tag$?o=Q(t&&t[u],n,c):(ne(a,h),t[c]=void 0,o=a.$elm$),h=r[++u]):(o=Q(t&&t[u],n,u),h=r[++u]),o&&f.$elm$.parentNode.insertBefore(o,f.$elm$)}i>s?J(e,null==r[$+1]?null:r[$+1].$elm$,n,r,u,$):u>$&&X(t,i,s)},te=function(e,t){return e.$tag$===t.$tag$&&e.$key$===t.$key$},ne=function(e,t){var n=t.$elm$=e.$elm$,r=e.$children$,o=t.$children$,a=t.$tag$,i=t.$text$;null===i?("slot"===a||K(e,t,false),null!==r&&null!==o?ee(n,r,t,o):null!==o?(null!==e.$text$&&(n.textContent=""),J(n,null,t,o,0,o.length-1)):null!==r&&X(r,0,r.length-1)):e.$text$!==i&&(n.data=i)},re=function e(t){t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(e)},oe=function(e,t){var n,r=e.$hostElement$,o=e.$cmpMeta$,a=e.$vnode$||U(null,null),i=(n=t)&&n.$tag$===z?t:_(null,null,t);w=r.tagName,o.$attrsToReflect$&&(i.$attrs$=i.$attrs$||{},o.$attrsToReflect$.map((function(e){var t=d(e,2),n=t[0],o=t[1];return i.$attrs$[o]=r[n]}))),i.$tag$=null,i.$flags$|=4,e.$vnode$=i,i.$elm$=a.$elm$=r.shadowRoot||r,M=r["s-sc"],ne(a,i)},ae=function(e){return Ge(e).$hostElement$},ie=function(e,t,n){var r=ae(e);return{emit:function(e){return ue(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}}},ue=function(e,t,n){var r=x.ce(t,n);return e.dispatchEvent(r),r},ce=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))},le=function(e,t){if(e.$flags$|=16,!(4&e.$flags$)){ce(e,e.$ancestorComponent$);return Pe((function(){return se(e,t)}))}e.$flags$|=512},se=function(e,t){var n,r=(e.$cmpMeta$.$tagName$,function(){}),o=e.$lazyInstance$;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(e){var t=d(e,2),n=t[0],r=t[1];return pe(o,n,r)})),e.$queuedListeners$=null),n=pe(o,"componentWillLoad")),r(),me(n,(function(){return fe(e,o,t)}))},fe=function(){var e=(0,h.Z)(v().mark((function e(t,n,r){var o,a,i,u,c,l;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.$hostElement$,t.$cmpMeta$.$tagName$,a=function(){},i=o["s-rc"],r&&N(t),t.$cmpMeta$.$tagName$,u=function(){},Ae(t,n),i&&(i.map((function(e){return e()})),o["s-rc"]=void 0),u(),a(),c=o["s-p"],l=function(){return $e(t)},0===c.length?l():(Promise.all(c).then(l),t.$flags$|=4,c.length=0);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),Ae=function(e,t,n){try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,oe(e,t)}catch(r){Be(r,e.$hostElement$)}return null},$e=function(e){e.$cmpMeta$.$tagName$;var t=e.$hostElement$,n=function(){},r=e.$lazyInstance$,o=e.$ancestorComponent$;64&e.$flags$?(pe(r,"componentDidUpdate"),n()):(e.$flags$|=64,de(t),pe(r,"componentDidLoad"),n(),e.$onReadyResolve$(t),o||he()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&Te((function(){return le(e,!1)})),e.$flags$&=-517},he=function(e){de(G.documentElement),Te((function(){return ue(E,"appload",{detail:{namespace:"deckdeckgo-highlight-code"}})}))},pe=function(e,t,n){if(e&&e[t])try{return e[t](n)}catch(r){Be(r)}},me=function(e,t){return e&&e.then?e.then(t):t()},de=function(e){return e.classList.add("hydrated")},ye=function(e,t,n,r){var o,a,i=Ge(e),u=i.$hostElement$,c=i.$instanceValues$.get(t),l=i.$flags$,s=i.$lazyInstance$;if(o=n,a=r.$members$[t][0],n=null==o||Z(o)?o:4&a?"false"!==o&&(""===o||!!o):1&a?String(o):o,!(8&l&&void 0!==c||n===c)&&(i.$instanceValues$.set(t,n),s)){if(r.$watchers$&&128&l){var f=r.$watchers$[t];f&&f.map((function(e){try{s[e](n,c,t)}catch(r){Be(r,u)}}))}2==(18&l)&&le(i,!1)}},ve=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),o=e.prototype;if(r.map((function(e){var r=d(e,2),a=r[0],i=d(r[1],1)[0];31&i||2&n&&32&i?Object.defineProperty(o,a,{get:function(){return e=a,Ge(this).$instanceValues$.get(e);var e},set:function(e){ye(this,a,e,t)},configurable:!0,enumerable:!0}):1&n&&64&i&&Object.defineProperty(o,a,{value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Ge(this);return r.$onInstancePromise$.then((function(){var e;return(e=r.$lazyInstance$)[a].apply(e,t)}))}})})),1&n){var a=new Map;o.attributeChangedCallback=function(e,t,n){var r=this;x.jmp((function(){var t=a.get(e);if(r.hasOwnProperty(t))n=r[t],delete r[t];else if(o.hasOwnProperty(t)&&"number"==typeof r[t]&&r[t]==n)return;r[t]=(null!==n||"boolean"!=typeof r[t])&&n}))},e.observedAttributes=r.filter((function(e){var t=d(e,2);t[0];return 15&t[1][0]})).map((function(e){var n=d(e,2),r=n[0],o=n[1],i=o[1]||r;return a.set(i,r),512&o[0]&&t.$attrsToReflect$.push([r,i]),i}))}}return e},ge=function(){var e=(0,h.Z)(v().mark((function e(t,n,r,o,a){var i,u,c,l,s,f,A;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=(32&n.$flags$)){e.next=17;break}if(n.$flags$|=32,!(a=Ye(r)).then){e.next=9;break}return i=function(){},e.next=7,a;case 7:a=e.sent,i();case 9:a.isProxied||(r.$watchers$=a.watchers,ve(a,r,2),a.isProxied=!0),r.$tagName$,u=function(){},n.$flags$|=8;try{new a(n)}catch(t){Be(t)}n.$flags$&=-9,n.$flags$|=128,u(),a.style&&(c=a.style,l=T(r),Re.has(l)||(r.$tagName$,s=function(){},I(l,c,!!(1&r.$flags$)),s()));case 17:f=n.$ancestorComponent$,A=function(){return le(n,!0)},f&&f["s-rc"]?f["s-rc"].push(A):A();case 20:case"end":return e.stop()}}),e)})));return function(t,n,r,o,a){return e.apply(this,arguments)}}(),Me=function(e){if(0==(1&x.$flags$)){var t=Ge(e),n=t.$cmpMeta$,r=(n.$tagName$,function(){});if(1&t.$flags$)B(e,t,n.$listeners$);else{t.$flags$|=1;for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){ce(t,t.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).map((function(t){var n=d(t,2),r=n[0];if(31&d(n[1],1)[0]&&e.hasOwnProperty(r)){var o=e[r];delete e[r],e[r]=o}})),ge(e,t,n)}r()}},we=function(e){if(0==(1&x.$flags$)){var t=Ge(e);t.$rmListeners$&&(t.$rmListeners$.map((function(e){return e()})),t.$rmListeners$=void 0)}},be=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=function(){},c=[],l=n.exclude||[],s=E.customElements,f=G.head,A=f.querySelector("meta[charset]"),h=G.createElement("style"),p=[],m=!0;Object.assign(x,n),x.$resourcesUrl$=new URL(n.resourcesUrl||"./",G.baseURI).href,e.map((function(e){e[1].map((function(n){var i={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};i.$members$=n[2],i.$listeners$=n[3],i.$attrsToReflect$=[],i.$watchers$={};var f=i.$tagName$,A=function(e){u(c,e);var n=g(c);function c(e){var t;return(0,r.Z)(this,c),e=a(t=n.call(this,e)),Ce(e,i),1&i.$flags$&&e.attachShadow({mode:"open"}),t}return(0,o.Z)(c,[{key:"connectedCallback",value:function(){var e=this;t&&(clearTimeout(t),t=null),m?p.push(this):x.jmp((function(){return Me(e)}))}},{key:"disconnectedCallback",value:function(){var e=this;x.jmp((function(){return we(e)}))}},{key:"componentOnReady",value:function(){return Ge(this).$onReadyPromise$}}]),c}($(HTMLElement));i.$lazyBundleId$=e[0],l.includes(f)||s.get(f)||(c.push(f),s.define(f,ve(A,i,1)))}))})),h.innerHTML=c+O,h.setAttribute("data-styles",""),f.insertBefore(h,A?A.nextSibling:f.firstChild),m=!1,p.length?p.map((function(e){return e.connectedCallback()})):x.jmp((function(){return t=setTimeout(he,30)})),i()},Ee=new WeakMap,Ge=function(e){return Ee.get(e)},xe=function(e,t){return Ee.set(t.$lazyInstance$=e,t)},Ce=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e})),n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],B(e,n,t.$listeners$),Ee.set(e,n)},Le=function(e,t){return t in e},Be=function(e,t){return(0,console.error)(e,t)},ke=new Map,Ye=function(e,t,r){var o=e.$tagName$.replace(/-/g,"_"),a=e.$lazyBundleId$,i=ke.get(a);return i?i[o]:n(9047)("./".concat(a,".entry.js")).then((function(e){return ke.set(a,e),e[o]}),Be)},Re=new Map,Oe=[],je=[],Se=function(e,t){return function(n){e.push(n),b||(b=!0,t&&4&x.$flags$?Te(Ne):x.raf(Ne))}},Ie=function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){Be(n)}e.length=0},Ne=function e(){Ie(Oe),Ie(je),(b=Oe.length>0)&&x.raf(e)},Te=function(e){return C().then(e)},Pe=Se(je,!0)},8797:function(e,t,n){var r="[object Symbol]",o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i="\\u2700-\\u27bf",u="a-z\\xdf-\\xf6\\xf8-\\xff",c="A-Z\\xc0-\\xd6\\xd8-\\xde",l="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",s="['’]",f="["+l+"]",A="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",$="\\d+",h="[\\u2700-\\u27bf]",p="["+u+"]",m="[^\\ud800-\\udfff"+l+$+i+u+c+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",y="[\\ud800-\\udbff][\\udc00-\\udfff]",v="["+c+"]",g="(?:"+p+"|"+m+")",M="(?:"+v+"|"+m+")",w="(?:['’](?:d|ll|m|re|s|t|ve))?",b="(?:['’](?:D|LL|M|RE|S|T|VE))?",E="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",G="[\\ufe0e\\ufe0f]?",x=G+E+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,y].join("|")+")"+G+E+")*"),C="(?:"+[h,d,y].join("|")+")"+x,L=RegExp(s,"g"),B=RegExp(A,"g"),k=RegExp([v+"?"+p+"+"+w+"(?="+[f,v,"$"].join("|")+")",M+"+"+b+"(?="+[f,v+g,"$"].join("|")+")",v+"?"+g+"+"+w,v+"+"+b,$,C].join("|"),"g"),Y=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,R="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,O="object"==typeof self&&self&&self.Object===Object&&self,j=R||O||Function("return this")();var S,I=(S={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==S?void 0:S[e]});var N=Object.prototype.toString,T=j.Symbol,P=T?T.prototype:void 0,Z=P?P.toString:void 0;function _(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&N.call(e)==r}(e))return Z?Z.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}function U(e){return null==e?"":_(e)}var z,D=(z=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,r){var o=-1,a=e?e.length:0;for(r&&a&&(n=e[++o]);++o<a;)n=t(n,e[o],o,e);return n}(function(e,t,n){return e=U(e),void 0===(t=n?void 0:t)?function(e){return Y.test(e)}(e)?function(e){return e.match(k)||[]}(e):function(e){return e.match(o)||[]}(e):e.match(t)||[]}(function(e){return(e=U(e))&&e.replace(a,I).replace(B,"")}(e).replace(L,"")),z,"")});e.exports=D},8310:function(e,t,n){"use strict";var r=n(7294),o=n(1597),a=n(6586);t.Z=function(e){var t,n=e.location,i=e.title,u=e.children,c="/"===n.pathname;return t=c?r.createElement("h1",{className:"main-heading"},r.createElement(o.Link,{to:"/"},i)):r.createElement(o.Link,{className:"header-link-home",to:"/"},i),r.createElement("div",{className:"global-wrapper","data-is-root-path":c},r.createElement("header",{className:"global-header"},t),r.createElement("main",{className:"post"},u),r.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with","   ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"),"    and","   ",r.createElement("a",{href:"https://blackbeaver37.github.io/fireworks"},r.createElement("img",{src:a.Z,className:"beaver"}))))}},9626:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var r=n(7294),o=n(1597),a=n(8797),i=n.n(a),u=r.memo((function(e){var t=e.repo,n=e.theme,o=(0,r.createRef)();return(0,r.useLayoutEffect)((function(){var e=document.createElement("script"),r={src:"https://utteranc.es/client.js",repo:t,theme:n,"issue-term":"pathname",label:"✨💬 comments ✨",crossOrigin:"anonymous",async:"true"};Object.entries(r).forEach((function(t){var n=t[0],r=t[1];e.setAttribute(n,r)})),o.current.appendChild(e)}),[t]),r.createElement("div",{ref:o})}));u.displayName="Utterances";var c,l=u,s=n(8310),f=n(3765),A=n(5397);!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():(0,A.p)().then((function(){return(0,A.b)([["deckgo-highlight-code",[[1,"deckgo-highlight-code",{language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],theme:[513],revealProgress:[1025,"reveal-progress"],themeStyle:[32],loaded:[32],highlightRows:[32],load:[64],reveal:[64],hide:[64],revealAll:[64],hideAll:[64],nextHighlight:[64],prevHighlight:[64]},[[5,"prismLanguageLoaded","onLanguageLoaded"],[5,"prismLanguageError","onLanguageError"],[8,"copy","onCopyCleanZeroWidthSpaces"]]]]]],c)}));var $=function(e){var t=e.data,n=e.location,a=t.markdownRemark.frontmatter.title,u=t.markdownRemark.frontmatter.date,c=t.markdownRemark.frontmatter.tags,A=t.excerpt,$=t.markdownRemark.html,h=t.site.siteMetadata.title||"Title",p=t.previous,m=t.next;return r.createElement(s.Z,{location:n,title:h},r.createElement(f.Z,{title:a,description:a||A}),r.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h1",{itemProp:"headline"},a),r.createElement("div",{className:"tag-group"},c?c.map((function(e){return r.createElement(o.Link,{to:"/tags/"+i()(e),className:"tag"},i()(e))})):null),r.createElement("div",{className:"date"},r.createElement("span",null,u))),r.createElement("section",{dangerouslySetInnerHTML:{__html:$},itemProp:"articleBody"}),r.createElement("hr",null),r.createElement("footer",null,r.createElement("nav",{className:"blog-post-nav"},r.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.createElement("li",null,p&&r.createElement(o.Link,{to:p.fields.slug,rel:"prev"},"← ",p.frontmatter.title)),r.createElement("li",null,m&&r.createElement(o.Link,{to:m.fields.slug,rel:"next"},m.frontmatter.title," →"))))),r.createElement(l,{repo:"10days96/blog-comment",theme:"github-light"})))}},5666:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(Y){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new L(r||[]);return a._invoke=function(e,t,n){var r=f;return function(o,a){if(r===$)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return k()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var u=G(i,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=$;var c=s(e,t,n);if("normal"===c.type){if(r=n.done?h:A,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,i),a}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(Y){return{type:"throw",arg:Y}}}e.wrap=l;var f="suspendedStart",A="suspendedYield",$="executing",h="completed",p={};function m(){}function d(){}function y(){}var v={};c(v,a,(function(){return this}));var g=Object.getPrototypeOf,M=g&&g(g(B([])));M&&M!==n&&r.call(M,a)&&(v=M);var w=y.prototype=m.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,a,i,u){var c=s(e[o],e,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,u)}),(function(e){n("throw",e,i,u)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,u)}))}u(c.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function G(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,G(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function B(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:k}}function k(){return{value:t,done:!0}}return d.prototype=y,c(w,"constructor",y),c(y,"constructor",d),d.displayName=c(y,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(E.prototype),c(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new E(l(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(w),c(w,u,"Generator"),c(w,a,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=B,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return u.type="throw",u.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:B(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=t}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},6586:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAADTklEQVR4nO3WQRHDMAwAwbYTFMZWDAYTDMYWGi0MPW6XgDR63Oh99vq9gKTP9ALAHAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAsGt6gWnf+xmdf/YanT/N/Wf5ACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACDsml5g2tlrdP73fkbnT5u+f50PAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMKu6QXqzl7TKxDmA4AwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYCwP3dcD4nwweu6AAAAAElFTkSuQmCC"},5861:function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function u(e){r(i,o,a,u,c,"next",e)}function c(e){r(i,o,a,u,c,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return o}})},5671:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},3144:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-5f2a2026e18787aec32a.js.map