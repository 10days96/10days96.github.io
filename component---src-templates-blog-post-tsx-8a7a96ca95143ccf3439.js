(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[7],{7757:function(e,t,n){e.exports=n(5666)},9047:function(e,t,n){var r={"./deckgo-highlight-code.entry.js":[9548,548]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=9047,e.exports=o},5397:function(e,t,n){"use strict";n.d(t,{H:function(){return q},b:function(){return Le},c:function(){return ie},g:function(){return ae},h:function(){return F},p:function(){return S},r:function(){return Re}});var r=n(5671),o=n(3144);function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var i=n(9611);function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,i.Z)(e,t)}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function $(e,t,n){return $=f()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&(0,i.Z)(o,n.prototype),o},$.apply(null,arguments)}function h(e){var t="function"==typeof Map?new Map:void 0;return h=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return $(e,arguments,s(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,i.Z)(r,e)},h(e)}var p=n(5861),m=n(2982);var d=n(181);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||(0,d.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=n(7757),g=n.n(v);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var b,E,L=!1,k="undefined"!=typeof window?window:{},x=k.document||{head:{}},R={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}},S=function(e){return Promise.resolve(e)},j=function(){try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1}(),N=function(e,t,n,r){n&&n.map((function(n){var r=y(n,3),o=r[0],a=r[1],i=r[2],l=P(e,o),c=O(t,i),u=T(o);R.ael(l,a,c,u),(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return R.rel(l,a,c,u)}))}))},O=function(e,t){return function(n){try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(r){Ne(r)}}},P=function(e,t){return 4&t?x:8&t?k:e},T=function(e){return 0!=(2&e)},M="{visibility:hidden}.hydrated{visibility:inherit}",_="http://www.w3.org/1999/xlink",C=new WeakMap,A=function(e,t,n){var r=Te.get(e);j&&n?(r=r||new CSSStyleSheet).replace(t):r=t,Te.set(e,r)},I=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,o=(t.$tagName$,function(){}),a=function(e,t,n,r){var o=Z(t),a=Te.get(o);if(e=11===e.nodeType?e:x,a)if("string"==typeof a){e=e.head||e;var i,l=C.get(e);l||C.set(e,l=new Set),l.has(o)||((i=x.createElement("style")).innerHTML=a,e.insertBefore(i,e.querySelector("link")),l&&l.add(o))}else e.adoptedStyleSheets.includes(a)||(e.adoptedStyleSheets=[].concat((0,m.Z)(e.adoptedStyleSheets),[a]));return o}(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=a,n.classList.add(a+"-h")),o()},Z=function(e,t){return"sc-"+e.$tagName$},B={},H=function(e){return"object"===(e=typeof e)||"function"===e},F=function(e,t){for(var n=null,r=null,o=!1,a=!1,i=[],l=function t(r){for(var l=0;l<r.length;l++)n=r[l],Array.isArray(n)?t(n):null!=n&&"boolean"!=typeof n&&((o="function"!=typeof e&&!H(n))&&(n=String(n)),o&&a?i[i.length-1].$text$+=n:i.push(o?G(null,n):n),a=o)},c=arguments.length,u=new Array(c>2?c-2:0),s=2;s<c;s++)u[s-2]=arguments[s];if(l(u),t){t.key&&(r=t.key);var f=t.className||t.class;f&&(t.class="object"!=typeof f?f:Object.keys(f).filter((function(e){return f[e]})).join(" "))}if("function"==typeof e)return e(null===t?{}:t,i,z);var $=G(e,null);return $.$attrs$=t,i.length>0&&($.$children$=i),$.$key$=r,$},G=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},q={},z={forEach:function(e,t){return e.map(U).forEach(t)},map:function(e,t){return e.map(U).map(t).map(D)}},U=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},D=function(e){if("function"==typeof e.vtag){var t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),F.apply(void 0,[e.vtag,t].concat((0,m.Z)(e.vchildren||[])))}var n=G(e.vtag,e.vtext);return n.$attrs$=e.vattrs,n.$children$=e.vchildren,n.$key$=e.vkey,n.$name$=e.vname,n},W=function(e,t,n,r,o,a){if(n!==r){var i=je(e,t),l=t.toLowerCase();if("class"===t){var c=e.classList,u=Y(n),s=Y(r);c.remove.apply(c,(0,m.Z)(u.filter((function(e){return e&&!s.includes(e)})))),c.add.apply(c,(0,m.Z)(s.filter((function(e){return e&&!u.includes(e)}))))}else if("style"===t){for(var f in n)r&&null!=r[f]||(f.includes("-")?e.style.removeProperty(f):e.style[f]="");for(var $ in r)n&&r[$]===n[$]||($.includes("-")?e.style.setProperty($,r[$]):e.style[$]=r[$])}else if("key"===t);else if("ref"===t)r&&r(e);else if(i||"o"!==t[0]||"n"!==t[1]){var h=H(r);if((i||h&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[t]=r;else{var p=null==r?"":r;"list"===t?i=!1:null!=n&&e[t]==p||(e[t]=p)}}catch(y){}var d=!1;l!==(l=l.replace(/^xlink\:?/,""))&&(t=l,d=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||(d?e.removeAttributeNS(_,t):e.removeAttribute(t)):(!i||4&a||o)&&!h&&(r=!0===r?"":r,d?e.setAttributeNS(_,t,r):e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):je(k,l)?l.slice(2):l[2]+t.slice(3),n&&R.rel(e,t,n,!1),r&&R.ael(e,t,r,!1)}},V=/\s/,Y=function(e){return e?e.split(V):[]},J=function(e,t,n,r){var o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,a=e&&e.$attrs$||B,i=t.$attrs$||B;for(r in a)r in i||W(o,r,a[r],void 0,n,t.$flags$);for(r in i)W(o,r,a[r],i[r],n,t.$flags$)},K=function e(t,n,r,o){var a,i,l=n.$children$[r],c=0;if(null!==l.$text$)a=l.$elm$=x.createTextNode(l.$text$);else if(a=l.$elm$=x.createElement(l.$tag$),J(null,l,false),null!=b&&a["s-si"]!==b&&a.classList.add(a["s-si"]=b),l.$children$)for(c=0;c<l.$children$.length;++c)(i=e(t,l,c))&&a.appendChild(i);return a},Q=function(e,t,n,r,o,a){var i,l=e;for(l.shadowRoot&&l.tagName===E&&(l=l.shadowRoot);o<=a;++o)r[o]&&(i=K(null,n,o))&&(r[o].$elm$=i,l.insertBefore(i,t))},X=function(e,t,n,r,o){for(;t<=n;++t)(r=e[t])&&(o=r.$elm$,re(r),o.remove())},ee=function(e,t,n,r){for(var o,a,i=0,l=0,c=0,u=0,s=t.length-1,f=t[0],$=t[s],h=r.length-1,p=r[0],m=r[h];i<=s&&l<=h;)if(null==f)f=t[++i];else if(null==$)$=t[--s];else if(null==p)p=r[++l];else if(null==m)m=r[--h];else if(te(f,p))ne(f,p),f=t[++i],p=r[++l];else if(te($,m))ne($,m),$=t[--s],m=r[--h];else if(te(f,m))ne(f,m),e.insertBefore(f.$elm$,$.$elm$.nextSibling),f=t[++i],m=r[--h];else if(te($,p))ne($,p),e.insertBefore($.$elm$,f.$elm$),$=t[--s],p=r[++l];else{for(c=-1,u=i;u<=s;++u)if(t[u]&&null!==t[u].$key$&&t[u].$key$===p.$key$){c=u;break}c>=0?((a=t[c]).$tag$!==p.$tag$?o=K(t&&t[l],n,c):(ne(a,p),t[c]=void 0,o=a.$elm$),p=r[++l]):(o=K(t&&t[l],n,l),p=r[++l]),o&&f.$elm$.parentNode.insertBefore(o,f.$elm$)}i>s?Q(e,null==r[h+1]?null:r[h+1].$elm$,n,r,l,h):l>h&&X(t,i,s)},te=function(e,t){return e.$tag$===t.$tag$&&e.$key$===t.$key$},ne=function(e,t){var n=t.$elm$=e.$elm$,r=e.$children$,o=t.$children$,a=t.$tag$,i=t.$text$;null===i?("slot"===a||J(e,t,false),null!==r&&null!==o?ee(n,r,t,o):null!==o?(null!==e.$text$&&(n.textContent=""),Q(n,null,t,o,0,o.length-1)):null!==r&&X(r,0,r.length-1)):e.$text$!==i&&(n.data=i)},re=function e(t){t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(e)},oe=function(e,t){var n,r=e.$hostElement$,o=e.$cmpMeta$,a=e.$vnode$||G(null,null),i=(n=t)&&n.$tag$===q?t:F(null,null,t);E=r.tagName,o.$attrsToReflect$&&(i.$attrs$=i.$attrs$||{},o.$attrsToReflect$.map((function(e){var t=y(e,2),n=t[0],o=t[1];return i.$attrs$[o]=r[n]}))),i.$tag$=null,i.$flags$|=4,e.$vnode$=i,i.$elm$=a.$elm$=r.shadowRoot||r,b=r["s-sc"],ne(a,i)},ae=function(e){return xe(e).$hostElement$},ie=function(e,t,n){var r=ae(e);return{emit:function(e){return le(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}}},le=function(e,t,n){var r=R.ce(t,n);return e.dispatchEvent(r),r},ce=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))},ue=function(e,t){if(e.$flags$|=16,!(4&e.$flags$)){ce(e,e.$ancestorComponent$);return Be((function(){return se(e,t)}))}e.$flags$|=512},se=function(e,t){var n,r=(e.$cmpMeta$.$tagName$,function(){}),o=e.$lazyInstance$;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(e){var t=y(e,2),n=t[0],r=t[1];return me(o,n,r)})),e.$queuedListeners$=null),n=me(o,"componentWillLoad")),r(),de(n,(function(){return fe(e,o,t)}))},fe=function(){var e=(0,p.Z)(g().mark((function e(t,n,r){var o,a,i,l,c,u;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.$hostElement$,t.$cmpMeta$.$tagName$,a=function(){},i=o["s-rc"],r&&I(t),t.$cmpMeta$.$tagName$,l=function(){},$e(t,n),i&&(i.map((function(e){return e()})),o["s-rc"]=void 0),l(),a(),c=o["s-p"],u=function(){return he(t)},0===c.length?u():(Promise.all(c).then(u),t.$flags$|=4,c.length=0);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),$e=function(e,t,n){try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,oe(e,t)}catch(r){Ne(r,e.$hostElement$)}return null},he=function(e){e.$cmpMeta$.$tagName$;var t=e.$hostElement$,n=function(){},r=e.$lazyInstance$,o=e.$ancestorComponent$;64&e.$flags$?(me(r,"componentDidUpdate"),n()):(e.$flags$|=64,ye(t),me(r,"componentDidLoad"),n(),e.$onReadyResolve$(t),o||pe()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&Ze((function(){return ue(e,!1)})),e.$flags$&=-517},pe=function(e){ye(x.documentElement),Ze((function(){return le(k,"appload",{detail:{namespace:"deckdeckgo-highlight-code"}})}))},me=function(e,t,n){if(e&&e[t])try{return e[t](n)}catch(r){Ne(r)}},de=function(e,t){return e&&e.then?e.then(t):t()},ye=function(e){return e.classList.add("hydrated")},ve=function(e,t,n,r){var o,a,i=xe(e),l=i.$hostElement$,c=i.$instanceValues$.get(t),u=i.$flags$,s=i.$lazyInstance$;if(o=n,a=r.$members$[t][0],n=null==o||H(o)?o:4&a?"false"!==o&&(""===o||!!o):1&a?String(o):o,!(8&u&&void 0!==c||n===c)&&(i.$instanceValues$.set(t,n),s)){if(r.$watchers$&&128&u){var f=r.$watchers$[t];f&&f.map((function(e){try{s[e](n,c,t)}catch(r){Ne(r,l)}}))}2==(18&u)&&ue(i,!1)}},ge=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),o=e.prototype;if(r.map((function(e){var r=y(e,2),a=r[0],i=y(r[1],1)[0];31&i||2&n&&32&i?Object.defineProperty(o,a,{get:function(){return e=a,xe(this).$instanceValues$.get(e);var e},set:function(e){ve(this,a,e,t)},configurable:!0,enumerable:!0}):1&n&&64&i&&Object.defineProperty(o,a,{value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=xe(this);return r.$onInstancePromise$.then((function(){var e;return(e=r.$lazyInstance$)[a].apply(e,t)}))}})})),1&n){var a=new Map;o.attributeChangedCallback=function(e,t,n){var r=this;R.jmp((function(){var t=a.get(e);if(r.hasOwnProperty(t))n=r[t],delete r[t];else if(o.hasOwnProperty(t)&&"number"==typeof r[t]&&r[t]==n)return;r[t]=(null!==n||"boolean"!=typeof r[t])&&n}))},e.observedAttributes=r.filter((function(e){var t=y(e,2);t[0];return 15&t[1][0]})).map((function(e){var n=y(e,2),r=n[0],o=n[1],i=o[1]||r;return a.set(i,r),512&o[0]&&t.$attrsToReflect$.push([r,i]),i}))}}return e},we=function(){var e=(0,p.Z)(g().mark((function e(t,n,r,o,a){var i,l,c,u,s,f,$;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=(32&n.$flags$)){e.next=17;break}if(n.$flags$|=32,!(a=Pe(r)).then){e.next=9;break}return i=function(){},e.next=7,a;case 7:a=e.sent,i();case 9:a.isProxied||(r.$watchers$=a.watchers,ge(a,r,2),a.isProxied=!0),r.$tagName$,l=function(){},n.$flags$|=8;try{new a(n)}catch(t){Ne(t)}n.$flags$&=-9,n.$flags$|=128,l(),a.style&&(c=a.style,u=Z(r),Te.has(u)||(r.$tagName$,s=function(){},A(u,c,!!(1&r.$flags$)),s()));case 17:f=n.$ancestorComponent$,$=function(){return ue(n,!0)},f&&f["s-rc"]?f["s-rc"].push($):$();case 20:case"end":return e.stop()}}),e)})));return function(t,n,r,o,a){return e.apply(this,arguments)}}(),be=function(e){if(0==(1&R.$flags$)){var t=xe(e),n=t.$cmpMeta$,r=(n.$tagName$,function(){});if(1&t.$flags$)N(e,t,n.$listeners$);else{t.$flags$|=1;for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){ce(t,t.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).map((function(t){var n=y(t,2),r=n[0];if(31&y(n[1],1)[0]&&e.hasOwnProperty(r)){var o=e[r];delete e[r],e[r]=o}})),we(e,t,n)}r()}},Ee=function(e){if(0==(1&R.$flags$)){var t=xe(e);t.$rmListeners$&&(t.$rmListeners$.map((function(e){return e()})),t.$rmListeners$=void 0)}},Le=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=function(){},c=[],u=n.exclude||[],s=k.customElements,f=x.head,$=f.querySelector("meta[charset]"),p=x.createElement("style"),m=[],d=!0;Object.assign(R,n),R.$resourcesUrl$=new URL(n.resourcesUrl||"./",x.baseURI).href,e.map((function(e){e[1].map((function(n){var i={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};i.$members$=n[2],i.$listeners$=n[3],i.$attrsToReflect$=[],i.$watchers$={};var f=i.$tagName$,$=function(e){l(c,e);var n=w(c);function c(e){var t;return(0,r.Z)(this,c),e=a(t=n.call(this,e)),Se(e,i),1&i.$flags$&&e.attachShadow({mode:"open"}),t}return(0,o.Z)(c,[{key:"connectedCallback",value:function(){var e=this;t&&(clearTimeout(t),t=null),d?m.push(this):R.jmp((function(){return be(e)}))}},{key:"disconnectedCallback",value:function(){var e=this;R.jmp((function(){return Ee(e)}))}},{key:"componentOnReady",value:function(){return xe(this).$onReadyPromise$}}]),c}(h(HTMLElement));i.$lazyBundleId$=e[0],u.includes(f)||s.get(f)||(c.push(f),s.define(f,ge($,i,1)))}))})),p.innerHTML=c+M,p.setAttribute("data-styles",""),f.insertBefore(p,$?$.nextSibling:f.firstChild),d=!1,m.length?m.map((function(e){return e.connectedCallback()})):R.jmp((function(){return t=setTimeout(pe,30)})),i()},ke=new WeakMap,xe=function(e){return ke.get(e)},Re=function(e,t){return ke.set(t.$lazyInstance$=e,t)},Se=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e})),n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],N(e,n,t.$listeners$),ke.set(e,n)},je=function(e,t){return t in e},Ne=function(e,t){return(0,console.error)(e,t)},Oe=new Map,Pe=function(e,t,r){var o=e.$tagName$.replace(/-/g,"_"),a=e.$lazyBundleId$,i=Oe.get(a);return i?i[o]:n(9047)("./".concat(a,".entry.js")).then((function(e){return Oe.set(a,e),e[o]}),Ne)},Te=new Map,Me=[],_e=[],Ce=function(e,t){return function(n){e.push(n),L||(L=!0,t&&4&R.$flags$?Ze(Ie):R.raf(Ie))}},Ae=function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){Ne(n)}e.length=0},Ie=function e(){Ae(Me),Ae(_e),(L=Me.length>0)&&R.raf(e)},Ze=function(e){return S().then(e)},Be=Ce(_e,!0)},6318:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r,o=n(7294),a=n(1597),i=function(e){var t,n=e.location,r=e.title,i=e.children,l="/"===n.pathname;return t=l?o.createElement("h1",{className:"main-heading"},o.createElement(a.Link,{to:"/"},r)):o.createElement(a.Link,{className:"header-link-home",to:"/"},r),o.createElement("div",{className:"global-wrapper","data-is-root-path":l},o.createElement("header",{className:"global-header"},t),o.createElement("main",{className:"post"},i),o.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))},l=n(3765),c=n(5397);!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():(0,c.p)().then((function(){return(0,c.b)([["deckgo-highlight-code",[[1,"deckgo-highlight-code",{language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],theme:[513],revealProgress:[1025,"reveal-progress"],themeStyle:[32],loaded:[32],highlightRows:[32],load:[64],reveal:[64],hide:[64],revealAll:[64],hideAll:[64],nextHighlight:[64],prevHighlight:[64]},[[5,"prismLanguageLoaded","onLanguageLoaded"],[5,"prismLanguageError","onLanguageError"],[8,"copy","onCopyCleanZeroWidthSpaces"]]]]]],r)}));var u=function(e){var t=e.data,n=e.location,r=t.markdownRemark.frontmatter.title,c=t.markdownRemark.frontmatter.date,u=t.markdownRemark.frontmatter.tags,s=t.excerpt,f=t.markdownRemark.html,$=t.site.siteMetadata.title||"Title",h=t.previous,p=t.next;return o.createElement(i,{location:n,title:$},o.createElement(l.Z,{title:r,description:r||s}),o.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("header",null,o.createElement("h1",{itemProp:"headline"},r),o.createElement("div",{className:"tag-group"},o.createElement("div",{className:"tag"},u),o.createElement("div",{className:"tag"},u)),o.createElement("div",{className:"date"},o.createElement("span",null,c))),o.createElement("section",{dangerouslySetInnerHTML:{__html:f},itemProp:"articleBody"}),o.createElement("hr",null),o.createElement("footer",null,o.createElement("nav",{className:"blog-post-nav"},o.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.createElement("li",null,h&&o.createElement(a.Link,{to:h.fields.slug,rel:"prev"},"← ",h.frontmatter.title)),o.createElement("li",null,p&&o.createElement(a.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →")))))))}},5666:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(e,t,n){var r=f;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return O()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var l=x(i,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=s(e,t,n);if("normal"===c.type){if(r=n.done?p:$,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(e,n,i),a}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=u;var f="suspendedStart",$="suspendedYield",h="executing",p="completed",m={};function d(){}function y(){}function v(){}var g={};c(g,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(N([])));b&&b!==n&&r.call(b,a)&&(g=b);var E=v.prototype=d.prototype=Object.create(g);function L(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function n(o,a,i,l){var c=s(e[o],e,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function x(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,x(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=s(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function R(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function N(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:O}}function O(){return{value:t,done:!0}}return y.prototype=v,c(E,"constructor",v),c(v,"constructor",y),y.displayName=c(v,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},L(k.prototype),c(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new k(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},L(E),c(E,l,"Generator"),c(E,a,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=N,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return l.type="throw",l.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},5861:function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var l=e[a](i),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function l(e){r(i,o,a,l,c,"next",e)}function c(e){r(i,o,a,l,c,"throw",e)}l(void 0)}))}}n.d(t,{Z:function(){return o}})},5671:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},3144:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-8a7a96ca95143ccf3439.js.map