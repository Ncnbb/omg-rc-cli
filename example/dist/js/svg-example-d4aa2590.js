!function(t){function e(e){for(var r,u,a=e[0],c=e[1],s=e[2],l=0,d=[];l<a.length;l++)u=a[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(f&&f(e);d.length;)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={20:0},i=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/Users/lamho/Desktop/\u524d\u7aef\u4ee3\u7801/Ncnbb/omg-rc-cli/example/dist/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var f=c;i.push([327,0,1,2,19]),n()}({327:function(t,e,n){"use strict";n.r(e);var r=n(3),o=n(6),i=n(7),u=n(8),a=n(0),c=n.n(a),s=n(9),f=n.n(s),l=(n(324),n(72)),d=n.n(l),p=n(73),h=n.n(p),y=new d.a({id:"edit",use:"edit-usage",viewBox:"0 0 34 32",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 32" id="edit"><path fill="#232C36" d="M28.5 32h-23C3.6 32 2 30.4 2 28.5v-25C2 1.6 3.6 0 5.5 0h15c.8 0 1.5.7 1.5 1.5S21.3 3 20.5 3h-15c-.3 0-.5.2-.5.5v25c0 .3.2.5.5.5h23c.3 0 .5-.2.5-.5v-17c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v17c0 1.9-1.6 3.5-3.5 3.5z" /><path fill="#232C36" d="M13 20.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l17-17c.6-.6 1.5-.6 2.1 0s.6 1.5 0 2.1l-17 17c-.2.3-.6.4-1 .4z" /></symbol>'}),m=(h.a.add(y),y),v=new d.a({id:"ic_free",use:"ic_free-usage",viewBox:"0 0 18 18",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" id="ic_free"><path d="M9.1 5h.4v3H17V5H9.1zm-.2 0H1v3h7.5V5h.4zm1.2-1H17c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1h-1v7c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9H1c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h6.9L4.6.7l.7-.7 3.6 3.6L12.5 0l.7.7L10.1 4zM8.5 9H3v7c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V9H9.5v8h-1V9z" /></symbol>'});function g(t){return c.a.createElement("svg",t,c.a.createElement("use",{xlinkHref:"#ic_free"}))}h.a.add(v),console.log(m),console.log(g);var w=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"OMG-CLI"),c.a.createElement("div",{className:"inline-svg"}),c.a.createElement("div",{className:"url-svg"}),c.a.createElement("h1",null,"js\u5f15\u5165"),c.a.createElement("svg",null,c.a.createElement("use",{xlinkHref:"#".concat(m.id)})),c.a.createElement(g,{style:{fill:"red"},className:"123"}))}}]),n}(a.Component);f.a.render(c.a.createElement(w,null),document.getElementById("root"))},72:function(t,e,n){(function(e){var n;n=function(){"use strict";var t=function(t){var e=t.id,n=t.viewBox,r=t.content;this.id=e,this.viewBox=n,this.content=r};function n(t,e){return t(e={exports:{}},e.exports),e.exports}t.prototype.stringify=function(){return this.content},t.prototype.toString=function(){return this.stringify()},t.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))},"undefined"!==typeof window?window:"undefined"!==typeof e||"undefined"!==typeof self&&self;var r=n((function(t,e){t.exports=function(){function t(t){return t&&"object"===typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){var o;return n&&!0===n.clone&&t(e)?r((o=e,Array.isArray(o)?[]:{}),e,n):e}function n(n,o,i){var u=n.slice();return o.forEach((function(o,a){"undefined"===typeof u[a]?u[a]=e(o,i):t(o)?u[a]=r(n[a],o,i):-1===n.indexOf(o)&&u.push(e(o,i))})),u}function r(o,i,u){var a=Array.isArray(i),c=(u||{arrayMerge:n}).arrayMerge||n;return a?Array.isArray(o)?c(o,i,u):e(i,u):function(n,o,i){var u={};return t(n)&&Object.keys(n).forEach((function(t){u[t]=e(n[t],i)})),Object.keys(o).forEach((function(a){t(o[a])&&n[a]?u[a]=r(n[a],o[a],i):u[a]=e(o[a],i)})),u}(o,i,u)}return r.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,n){return r(t,n,e)}))},r}()})),o=n((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),i=o.svg,u=o.xlink,a={};a[i.name]=i.uri,a[u.name]=u.uri;var c=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(r(a,e||{}))+">"+t+"</svg>"};return function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"===typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n}(c(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(t)},t.exports=n()}).call(this,n(41))},73:function(t,e,n){(function(e){var n;n=function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}"undefined"!==typeof window?window:"undefined"!==typeof e||"undefined"!==typeof self&&self;var n=t((function(t,e){t.exports=function(){function t(t){return t&&"object"===typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,n){var o;return n&&!0===n.clone&&t(e)?r((o=e,Array.isArray(o)?[]:{}),e,n):e}function n(n,o,i){var u=n.slice();return o.forEach((function(o,a){"undefined"===typeof u[a]?u[a]=e(o,i):t(o)?u[a]=r(n[a],o,i):-1===n.indexOf(o)&&u.push(e(o,i))})),u}function r(o,i,u){var a=Array.isArray(i),c=(u||{arrayMerge:n}).arrayMerge||n;return a?Array.isArray(o)?c(o,i,u):e(i,u):function(n,o,i){var u={};return t(n)&&Object.keys(n).forEach((function(t){u[t]=e(n[t],i)})),Object.keys(o).forEach((function(a){t(o[a])&&n[a]?u[a]=r(n[a],o[a],i):u[a]=e(o[a],i)})),u}(o,i,u)}return r.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,n){return r(t,n,e)}))},r}()})),r=t((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),o=r.svg,i=r.xlink,u={};u[o.name]=o.uri,u[i.name]=i.uri;var a,c=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(n(u,e||{}))+">"+t+"</svg>"},s=r.svg,f=r.xlink,l={attrs:(a={style:["position: absolute","width: 0","height: 0"].join("; ")},a[s.name]=s.uri,a[f.name]=f.uri,a)},d=function(t){this.config=n(l,t||{}),this.symbols=[]};d.prototype.add=function(t){var e=this.symbols,n=this.find(t.id);return n?(e[e.indexOf(n)]=t,!1):(e.push(t),!0)},d.prototype.remove=function(t){var e=this.symbols,n=this.find(t);return!!n&&(e.splice(e.indexOf(n),1),n.destroy(),!0)},d.prototype.find=function(t){return this.symbols.filter((function(e){return e.id===t}))[0]||null},d.prototype.has=function(t){return null!==this.find(t)},d.prototype.stringify=function(){var t=this.config.attrs,e=this.symbols.map((function(t){return t.stringify()})).join("");return c(e,t)},d.prototype.toString=function(){return this.stringify()},d.prototype.destroy=function(){this.symbols.forEach((function(t){return t.destroy()}))};var p=function(t){var e=t.id,n=t.viewBox,r=t.content;this.id=e,this.viewBox=n,this.content=r};p.prototype.stringify=function(){return this.content},p.prototype.toString=function(){return this.stringify()},p.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))};var h=function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n},y=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"===typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return h(c(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(p),m={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},v=function(t){return Array.prototype.slice.call(t,0)},g=function(){return/firefox/i.test(navigator.userAgent)},w=function(){return/msie/i.test(navigator.userAgent)||/trident/i.test(navigator.userAgent)},b=function(){return/edge/i.test(navigator.userAgent)},x=function(t){return(t||window.location.href).split("#")[0]},E=function(t){angular.module("ng").run(["$rootScope",function(e){e.$on("$locationChangeSuccess",(function(e,n,r){!function(t,e){var n=document.createEvent("CustomEvent");n.initCustomEvent(t,!1,!1,e),window.dispatchEvent(n)}(t,{oldUrl:r,newUrl:n})}))}])},_=function(t,e){return void 0===e&&(e="linearGradient, radialGradient, pattern"),v(t.querySelectorAll("symbol")).forEach((function(t){v(t.querySelectorAll(e)).forEach((function(e){t.parentNode.insertBefore(e,t)}))})),t},O=r.xlink.uri,S=/[{}|\\\^\[\]`"<>]/g;function j(t){return t.replace(S,(function(t){return"%"+t[0].charCodeAt(0).toString(16).toUpperCase()}))}var A,C=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],M=C.map((function(t){return"["+t+"]"})).join(","),k=function(t,e,n,r){var o=j(n),i=j(r);(function(t,e){return v(t).reduce((function(t,n){if(!n.attributes)return t;var r=v(n.attributes),o=e?r.filter(e):r;return t.concat(o)}),[])})(t.querySelectorAll(M),(function(t){var e=t.localName,n=t.value;return-1!==C.indexOf(e)&&-1!==n.indexOf("url("+o)})).forEach((function(t){return t.value=t.value.replace(new RegExp(o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),i)})),function(t,e,n){v(t).forEach((function(t){var r=t.getAttribute("xlink:href");if(r&&0===r.indexOf(e)){var o=r.replace(e,n);t.setAttributeNS(O,"xlink:href",o)}}))}(e,o,i)},N="mount",B="symbol_mount",T=function(t){function e(e){var r=this;void 0===e&&(e={}),t.call(this,n(m,e));var o,i=(o=o||Object.create(null),{on:function(t,e){(o[t]||(o[t]=[])).push(e)},off:function(t,e){o[t]&&o[t].splice(o[t].indexOf(e)>>>0,1)},emit:function(t,e){(o[t]||[]).map((function(t){t(e)})),(o["*"]||[]).map((function(n){n(t,e)}))}});this._emitter=i,this.node=null;var u=this.config;if(u.autoConfigure&&this._autoConfigure(e),u.syncUrlsWithBaseTag){var a=document.getElementsByTagName("base")[0].getAttribute("href");i.on(N,(function(){return r.updateUrls("#",a)}))}var c=this._handleLocationChange.bind(this);this._handleLocationChange=c,u.listenLocationChangeEvent&&window.addEventListener(u.locationChangeEvent,c),u.locationChangeAngularEmitter&&E(u.locationChangeEvent),i.on(N,(function(t){u.moveGradientsOutsideSymbol&&_(t)})),i.on(B,(function(t){u.moveGradientsOutsideSymbol&&_(t.parentNode),(w()||b())&&function(t){var e=[];v(t.querySelectorAll("style")).forEach((function(t){t.textContent+="",e.push(t)}))}(t)}))}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={isMounted:{}};return r.isMounted.get=function(){return!!this.node},e.prototype._autoConfigure=function(t){var e=this.config;"undefined"===typeof t.syncUrlsWithBaseTag&&(e.syncUrlsWithBaseTag="undefined"!==typeof document.getElementsByTagName("base")[0]),"undefined"===typeof t.locationChangeAngularEmitter&&(e.locationChangeAngularEmitter="angular"in window),"undefined"===typeof t.moveGradientsOutsideSymbol&&(e.moveGradientsOutsideSymbol=g())},e.prototype._handleLocationChange=function(t){var e=t.detail,n=e.oldUrl,r=e.newUrl;this.updateUrls(n,r)},e.prototype.add=function(e){var n=t.prototype.add.call(this,e);return this.isMounted&&n&&(e.mount(this.node),this._emitter.emit(B,e.node)),n},e.prototype.attach=function(t){var e=this,n=this;if(n.isMounted)return n.node;var r="string"===typeof t?document.querySelector(t):t;return n.node=r,this.symbols.forEach((function(t){t.mount(n.node),e._emitter.emit(B,t.node)})),v(r.querySelectorAll("symbol")).forEach((function(t){var e=y.createFromExistingNode(t);e.node=t,n.add(e)})),this._emitter.emit(N,r),r},e.prototype.destroy=function(){var t=this.config,e=this.symbols,n=this._emitter;e.forEach((function(t){return t.destroy()})),n.off("*"),window.removeEventListener(t.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},e.prototype.mount=function(t,e){if(void 0===t&&(t=this.config.mountTo),void 0===e&&(e=!1),this.isMounted)return this.node;var n="string"===typeof t?document.querySelector(t):t,r=this.render();return this.node=r,e&&n.childNodes[0]?n.insertBefore(r,n.childNodes[0]):n.appendChild(r),this._emitter.emit(N,r),r},e.prototype.render=function(){return h(this.stringify())},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},e.prototype.updateUrls=function(t,e){if(!this.isMounted)return!1;var n=document.querySelectorAll(this.config.usagesToUpdate);return k(this.node,n,x(t)+"#",x(e)+"#"),!0},Object.defineProperties(e.prototype,r),e}(d),P=t((function(t){t.exports=function(){var t,e=[],n=document,r=n.documentElement.doScroll,o=(r?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return o||n.addEventListener("DOMContentLoaded",t=function(){for(n.removeEventListener("DOMContentLoaded",t),o=1;t=e.shift();)t()}),function(t){o?setTimeout(t,0):e.push(t)}}()}));window.__SVG_SPRITE__?A=window.__SVG_SPRITE__:(A=new T({attrs:{id:"__SVG_SPRITE_NODE__"}}),window.__SVG_SPRITE__=A);var L=function(){var t=document.getElementById("__SVG_SPRITE_NODE__");t?A.attach(t):A.mount(document.body,!0)};return document.body?L():P(L),A},t.exports=n()}).call(this,n(41))}});