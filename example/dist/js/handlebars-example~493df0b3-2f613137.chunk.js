(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{156:function(t,e,n){var r=n(252);t.exports=(r.default||r).template({1:function(t,e,n,r,a){return"    <div>"+t.escapeExpression((n.toUpperCase||e&&e.toUpperCase||n.helperMissing).call(null!=e?e:t.nullContext||{},null!=e?e.name:e,{name:"toUpperCase",hash:{},data:a}))+"</div>\n"},compiler:[7,">= 4.0.0"],main:function(t,e,n,r,a){var o;return null!=(o=n.each.call(null!=e?e:t.nullContext||{},null!=e?e.list:e,{name:"each",hash:{},fn:t.program(1,a,0),inverse:t.noop,data:a}))?o:""},useData:!0})},19:function(t,e,n){"use strict";e.__esModule=!0,e.extend=u,e.indexOf=function(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},e.escapeExpression=function(t){if("string"!==typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}if(!o.test(t))return t;return t.replace(a,i)},e.isEmpty=function(t){return!t&&0!==t||!(!c(t)||0!==t.length)},e.createFrame=function(t){var e=u({},t);return e._parent=t,e},e.blockParams=function(t,e){return t.path=e,t},e.appendContextPath=function(t,e){return(t?t+".":"")+e};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},a=/[&<>"'`=]/g,o=/[&<>"'`=]/;function i(t){return r[t]}function u(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}var l=Object.prototype.toString;e.toString=l;var s=function(t){return"function"===typeof t};s(/x/)&&(e.isFunction=s=function(t){return"function"===typeof t&&"[object Function]"===l.call(t)}),e.isFunction=s;var c=Array.isArray||function(t){return!(!t||"object"!==typeof t)&&"[object Array]"===l.call(t)};e.isArray=c},252:function(t,e,n){t.exports=n(253).default},265:function(t,e,n){"use strict";function r(t){this.string=t}e.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},e.default=r,t.exports=e.default},266:function(t,e,n){"use strict";e.__esModule=!0,e.checkRevision=function(t){var e=t&&t[0]||1,n=u.COMPILER_REVISION;if(e!==n){if(e<n){var r=u.REVISION_CHANGES[n],a=u.REVISION_CHANGES[e];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+a+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}},e.template=function(t,e){if(!e)throw new i.default("No environment passed to template");if(!t||!t.main)throw new i.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var n={strict:function(t,e){if(!(e in t))throw new i.default('"'+e+'" not defined in '+t);return t[e]},lookup:function(t,e){for(var n=t.length,r=0;r<n;r++)if(t[r]&&null!=t[r][e])return t[r][e]},lambda:function(t,e){return"function"===typeof t?t.call(e):t},escapeExpression:a.escapeExpression,invokePartial:function(n,r,o){o.hash&&(r=a.extend({},r,o.hash),o.ids&&(o.ids[0]=!0)),n=e.VM.resolvePartial.call(this,n,r,o);var u=e.VM.invokePartial.call(this,n,r,o);if(null==u&&e.compile&&(o.partials[o.name]=e.compile(n,t.compilerOptions,e),u=o.partials[o.name](r,o)),null!=u){if(o.indent){for(var l=u.split("\n"),s=0,c=l.length;s<c&&(l[s]||s+1!==c);s++)l[s]=o.indent+l[s];u=l.join("\n")}return u}throw new i.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var n=t[e];return n.decorator=t[e+"_d"],n},programs:[],program:function(t,e,n,r,a){var o=this.programs[t],i=this.fn(t);return e||a||r||n?o=l(this,t,i,e,n,r,a):o||(o=this.programs[t]=l(this,t,i)),o},data:function(t,e){for(;t&&e--;)t=t._parent;return t},merge:function(t,e){var n=t||e;return t&&e&&t!==e&&(n=a.extend({},e,t)),n},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function r(e){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=a.data;r._setup(a),!a.partial&&t.useData&&(o=c(e,o));var i=void 0,u=t.useBlockParams?[]:void 0;function l(e){return""+t.main(n,e,n.helpers,n.partials,o,u,i)}return t.useDepths&&(i=a.depths?e!=a.depths[0]?[e].concat(a.depths):a.depths:[e]),(l=p(t.main,l,n,a.depths||[],o,u))(e,a)}return r.isTop=!0,r._setup=function(r){r.partial?(n.helpers=r.helpers,n.partials=r.partials,n.decorators=r.decorators):(n.helpers=n.merge(r.helpers,e.helpers),t.usePartial&&(n.partials=n.merge(r.partials,e.partials)),(t.usePartial||t.useDecorators)&&(n.decorators=n.merge(r.decorators,e.decorators)))},r._child=function(e,r,a,o){if(t.useBlockParams&&!a)throw new i.default("must pass block params");if(t.useDepths&&!o)throw new i.default("must pass parent depths");return l(n,e,t[e],r,0,a,o)},r},e.wrapProgram=l,e.resolvePartial=function(t,e,n){t?t.call||n.name||(n.name=t,t=n.partials[t]):t="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return t},e.invokePartial=function(t,e,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var o=void 0;n.fn&&n.fn!==s&&function(){n.data=u.createFrame(n.data);var t=n.fn;o=n.data["partial-block"]=function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=u.createFrame(n.data),n.data["partial-block"]=r,t(e,n)},t.partials&&(n.partials=a.extend({},n.partials,t.partials))}();void 0===t&&o&&(t=o);if(void 0===t)throw new i.default("The partial "+n.name+" could not be found");if(t instanceof Function)return t(e,n)},e.noop=s;var r,a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(19)),o=n(46),i=(r=o)&&r.__esModule?r:{default:r},u=n(136);function l(t,e,n,r,a,o,i){function u(e){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],u=i;return!i||e==i[0]||e===t.nullContext&&null===i[0]||(u=[e].concat(i)),n(t,e,t.helpers,t.partials,a.data||r,o&&[a.blockParams].concat(o),u)}return(u=p(n,u,t,i,r,o)).program=e,u.depth=i?i.length:0,u.blockParams=a||0,u}function s(){return""}function c(t,e){return e&&"root"in e||((e=e?u.createFrame(e):{}).root=t),e}function p(t,e,n,r,o,i){if(t.decorator){var u={};e=t.decorator(e,u,n,r&&r[0],o,i,r),a.extend(e,u)}return e}},267:function(t,e,n){"use strict";(function(n){e.__esModule=!0,e.default=function(t){var e="undefined"!==typeof n?n:window,r=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=r),t}},t.exports=e.default}).call(this,n(41))},339:function(t,e,n){"use strict";n.r(e);var r=n(156),a=n.n(r);document.getElementById("root").innerHTML=a()({list:[{name:"name1"},{name:"name2"},{name:"name3"}]},{helpers:{toUpperCase:function(){return"Hi, "+this.name.toUpperCase()}}})},41:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}}]);