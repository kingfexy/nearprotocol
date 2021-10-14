
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+o[i]<+n[i])return 1;if(+n[i]<+o[i])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.3.2",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;s.migrateDeduplicateWarnings&&r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a,c,d={},l=s.fn.init,p=s.find,f=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,y=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,m=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),l.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&f.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(y,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return p.apply(this,r)},p)Object.prototype.hasOwnProperty.call(p,i)&&(s.find[i]=p[i]);o(s.fn,"size",function(){return this.length},"jQuery.fn.size() is deprecated and removed; use the .length property"),o(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"jQuery.parseJSON is deprecated; use JSON.parse"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&o(s,"trim",function(e){return null==e?"":(e+"").replace(m,"")},"jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(o(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"jQuery.nodeName is deprecated"),o(s,"isArray",Array.isArray,"jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(o(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()}),o(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[Object.prototype.toString.call(e)]||"object":typeof e},"jQuery.type is deprecated"),o(s,"isFunction",function(e){return"function"==typeof e},"jQuery.isFunction() is deprecated"),o(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated")),s.ajax&&(a=s.ajax,c=/(=)\?(?=&|$)|\?\?/,s.ajax=function(){var e=a.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e},e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(c.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&c.test(e.data))&&u("JSON-to-JSONP auto-promotion is deprecated")}));var g=s.fn.removeAttr,h=s.fn.toggleClass,v=/\S+/g;function j(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}s.fn.removeAttr=function(e){var r=this;return s.each(e.match(v),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),g.apply(this,arguments)};var Q,b=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?h.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))}),w=/^[a-z]/,x=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return b=!0,e=r.apply(this,arguments),b=!1,e})}),s.swap=function(e,t,r,n){var o,i,a={};for(i in b||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o},e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("JQMIGRATE: jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),s.cssNumber||(s.cssNumber={}),Q=s.fn.css,s.fn.css=function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=j(e),n=r,w.test(n)&&x.test(n[0].toUpperCase()+n.slice(1))||s.cssNumber[r]||u('Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))};var A,k,S,M,N=s.data;s.data=function(e,t,r){var n,o,i;if(t&&"object"==typeof t&&2===arguments.length){for(i in n=s.hasData(e)&&N.call(this,e),o={},t)i!==j(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return N.call(this,e,o),t}return t&&"string"==typeof t&&t!==j(t)&&(n=s.hasData(e)&&N.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):N.apply(this,arguments)},s.fx&&(S=s.Tween.prototype.run,M=function(e){return e},s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=M),S.apply(this,arguments)},A=s.fx.interval||13,k="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(k),A},set:function(e){u(k),A=e}}));var R=s.fn.load,H=s.event.add,C=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=C.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),H.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?R.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}function P(e){var t=e.replace(O,"<$1></$2>");t!==e&&T(e)!==T(t)&&u("HTML tags must be properly nested and closed: "+e)}var O=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,q=s.htmlPrefilter;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.htmlPrefilter=function(e){return P(e),e.replace(O,"<$1></$2>")}},s.htmlPrefilter=function(e){return P(e),q(e)};var D,_=s.fn.offset;s.fn.offset=function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(u("jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},s.ajax&&(D=s.param,s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)});var E,F,J=s.fn.andSelf||s.fn.addBack;return s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),J.apply(this,arguments)},s.Deferred&&(E=s.Deferred,F=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],s.Deferred=function(e){var i=E(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(F,function(e,t){var r="function"==typeof o[e]&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(i,i),i},s.Deferred.exceptionHook=E.exceptionHook),s});
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define("uikit",e):(t="undefined"!=typeof globalThis?globalThis:t||self).UIkit=e()}(this,function(){"use strict";var t=Object.prototype,n=t.hasOwnProperty;function l(t,e){return n.call(t,e)}var e={},i=/([a-z\d])([A-Z])/g;function d(t){return t in e||(e[t]=t.replace(i,"$1-$2").toLowerCase()),e[t]}var r=/-(\w)/g;function f(t){return t.replace(r,o)}function o(t,e){return e?e.toUpperCase():""}function p(t){return t.length?o(0,t.charAt(0))+t.slice(1):""}var s=String.prototype,a=s.startsWith||function(t){return 0===this.lastIndexOf(t,0)};function w(t,e){return a.call(t,e)}var h=s.endsWith||function(t){return this.substr(-t.length)===t};function u(t,e){return h.call(t,e)}function c(t,e){return!!~this.indexOf(t,e)}var g=Array.prototype,m=s.includes||c,v=g.includes||c;function b(t,e){return t&&(z(t)?m:v).call(t,e)}var x=g.findIndex||function(t){for(var e=arguments,n=0;n<this.length;n++)if(t.call(e[1],this[n],n,this))return n;return-1};function y(t,e){return x.call(t,e)}var k=Array.isArray;function $(t){return"function"==typeof t}function I(t){return null!==t&&"object"==typeof t}var S=t.toString;function T(t){return"[object Object]"===S.call(t)}function E(t){return I(t)&&t===t.window}function _(t){return I(t)&&9===t.nodeType}function C(t){return I(t)&&!!t.jquery}function A(t){return I(t)&&1<=t.nodeType}function N(t){return I(t)&&1===t.nodeType}function M(t){return S.call(t).match(/^\[object (NodeList|HTMLCollection)\]$/)}function D(t){return"boolean"==typeof t}function z(t){return"string"==typeof t}function B(t){return"number"==typeof t}function P(t){return B(t)||z(t)&&!isNaN(t-parseFloat(t))}function O(t){return!(k(t)?t.length:I(t)&&Object.keys(t).length)}function H(t){return void 0===t}function L(t){return D(t)?t:"true"===t||"1"===t||""===t||"false"!==t&&"0"!==t&&t}function j(t){var e=Number(t);return!isNaN(e)&&e}function F(t){return parseFloat(t)||0}function W(t){return A(t)?t:M(t)||C(t)?t[0]:k(t)?W(t[0]):null}function V(t){return A(t)?[t]:M(t)?g.slice.call(t):k(t)?t.map(W).filter(Boolean):C(t)?t.toArray():[]}function R(t){return E(t)?t:(t=W(t))?(_(t)?t:t.ownerDocument).defaultView:window}function q(t){return k(t)?t:z(t)?t.split(/,(?![^(]*\))/).map(function(t){return P(t)?j(t):L(t.trim())}):[t]}function U(t){return t?u(t,"ms")?F(t):1e3*F(t):0}function Y(t,n){return t===n||I(t)&&I(n)&&Object.keys(t).length===Object.keys(n).length&&K(t,function(t,e){return t===n[e]})}function X(t,e,n){return t.replace(new RegExp(e+"|"+n,"g"),function(t){return t===e?n:e})}var G=Object.assign||function(t){for(var e=[],n=arguments.length-1;0<n--;)e[n]=arguments[n+1];t=Object(t);for(var i=0;i<e.length;i++){var r=e[i];if(null!==r)for(var o in r)l(r,o)&&(t[o]=r[o])}return t};function J(t){return t[t.length-1]}function K(t,e){for(var n in t)if(!1===e(t[n],n))return!1;return!0}function Z(t,r){return t.sort(function(t,e){var n=t[r];void 0===n&&(n=0);var i=e[r];return void 0===i&&(i=0),i<n?1:n<i?-1:0})}function Q(t,n){var i=new Set;return t.filter(function(t){var e=t[n];return!i.has(e)&&(i.add(e)||!0)})}function tt(t,e,n){return void 0===e&&(e=0),void 0===n&&(n=1),Math.min(Math.max(j(t)||0,e),n)}function et(){}function nt(t,e){return t.left<e.right&&t.right>e.left&&t.top<e.bottom&&t.bottom>e.top}function it(t,e){return t.x<=e.right&&t.x>=e.left&&t.y<=e.bottom&&t.y>=e.top}var rt={ratio:function(t,e,n){var i="width"===e?"height":"width",r={};return r[i]=t[e]?Math.round(n*t[i]/t[e]):t[i],r[e]=n,r},contain:function(n,i){var r=this;return K(n=G({},n),function(t,e){return n=n[e]>i[e]?r.ratio(n,e,i[e]):n}),n},cover:function(n,i){var r=this;return K(n=this.contain(n,i),function(t,e){return n=n[e]<i[e]?r.ratio(n,e,i[e]):n}),n}};function ot(t,e,n){if(I(e))for(var i in e)ot(t,i,e[i]);else{if(H(n))return(t=W(t))&&t.getAttribute(e);V(t).forEach(function(t){$(n)&&(n=n.call(t,ot(t,e))),null===n?at(t,e):t.setAttribute(e,n)})}}function st(t,e){return V(t).some(function(t){return t.hasAttribute(e)})}function at(t,e){t=V(t),e.split(" ").forEach(function(e){return t.forEach(function(t){return t.hasAttribute(e)&&t.removeAttribute(e)})})}function ht(t,e){for(var n=0,i=[e,"data-"+e];n<i.length;n++)if(st(t,i[n]))return ot(t,i[n])}var ut="undefined"!=typeof window,ct=ut&&/msie|trident/i.test(window.navigator.userAgent),lt=ut&&"rtl"===ot(document.documentElement,"dir"),dt=ut&&"ontouchstart"in window,ft=ut&&window.PointerEvent,pt=ut&&(dt||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints),gt=ft?"pointerdown":dt?"touchstart":"mousedown",mt=ft?"pointermove":dt?"touchmove":"mousemove",vt=ft?"pointerup":dt?"touchend":"mouseup",wt=ft?"pointerenter":dt?"":"mouseenter",bt=ft?"pointerleave":dt?"":"mouseleave",xt=ft?"pointercancel":"touchcancel";function yt(t,e){return W(t)||It(t,$t(t,e))}function kt(t,e){var n=V(t);return n.length&&n||St(t,$t(t,e))}function $t(t,e){return void 0===e&&(e=document),Ct(t)||_(e)?e:e.ownerDocument}function It(t,e){return W(Tt(t,e,"querySelector"))}function St(t,e){return V(Tt(t,e,"querySelectorAll"))}function Tt(t,s,e){if(void 0===s&&(s=document),!t||!z(t))return null;var a;Ct(t=t.replace(_t,"$1 *"))&&(a=[],t=t.match(At).map(function(t){return t.replace(/,$/,"").trim()}).map(function(t,e){var n,i,r,o=s;return"!"===t[0]&&(n=t.substr(1).trim().split(" "),o=Bt(Pt(s),n[0]),t=n.slice(1).join(" ").trim()),"-"===t[0]&&(i=t.substr(1).trim().split(" "),r=(o||s).previousElementSibling,o=Dt(r,t.substr(1))?r:null,t=i.slice(1).join(" ")),o?(o.id||(o.id="uk-"+Date.now()+e,a.push(function(){return at(o,"id")})),"#"+Ht(o.id)+" "+t):null}).filter(Boolean).join(","),s=document);try{return s[e](t)}catch(t){return null}finally{a&&a.forEach(function(t){return t()})}}var Et=/(^|[^\\],)\s*[!>+~-]/,_t=/([!>+~-])(?=\s+[!>+~-]|\s*$)/g;function Ct(t){return z(t)&&t.match(Et)}var At=/.*?[^\\](?:,|$)/g;var Nt=ut?Element.prototype:{},Mt=Nt.matches||Nt.webkitMatchesSelector||Nt.msMatchesSelector||et;function Dt(t,e){return V(t).some(function(t){return Mt.call(t,e)})}var zt=Nt.closest||function(t){var e=this;do{if(Dt(e,t))return e}while(e=Pt(e))};function Bt(t,e){return w(e,">")&&(e=e.slice(1)),N(t)?zt.call(t,e):V(t).map(function(t){return Bt(t,e)}).filter(Boolean)}function Pt(t){return(t=W(t))&&N(t.parentNode)&&t.parentNode}var Ot=ut&&window.CSS&&CSS.escape||function(t){return t.replace(/([^\x7f-\uFFFF\w-])/g,function(t){return"\\"+t})};function Ht(t){return z(t)?Ot.call(null,t):""}var Lt={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};function jt(t){return V(t).some(function(t){return Lt[t.tagName.toLowerCase()]})}function Ft(t){return V(t).some(function(t){return t.offsetWidth||t.offsetHeight||t.getClientRects().length})}var Wt="input,select,textarea,button";function Vt(t){return V(t).some(function(t){return Dt(t,Wt)})}function Rt(t,e){return V(t).filter(function(t){return Dt(t,e)})}function qt(t,e){return z(e)?Dt(t,e)||!!Bt(t,e):t===e||(_(e)?e.documentElement:W(e)).contains(W(t))}function Ut(t,e){for(var n=[];t=Pt(t);)e&&!Dt(t,e)||n.push(t);return n}function Yt(t,e){var n=(t=W(t))?V(t.children):[];return e?Rt(n,e):n}function Xt(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n,i,r=Qt(t),o=r[0],s=r[1],a=r[2],h=r[3],u=r[4],o=ie(o);return 1<h.length&&(n=h,h=function(t){return k(t.detail)?n.apply(void 0,[t].concat(t.detail)):n(t)}),u&&u.self&&(i=h,h=function(t){if(t.target===t.currentTarget||t.target===t.current)return i.call(null,t)}),a&&(h=function(t,i,r){var o=this;return function(n){t.forEach(function(t){var e=">"===i[0]?St(i,t).reverse().filter(function(t){return qt(n.target,t)})[0]:Bt(n.target,i);e&&(n.delegate=t,n.current=e,r.call(o,n))})}}(o,a,h)),u=te(u),s.split(" ").forEach(function(e){return o.forEach(function(t){return t.addEventListener(e,h,u)})}),function(){return Gt(o,s,h,u)}}function Gt(t,e,n,i){void 0===i&&(i=!1),i=te(i),t=ie(t),e.split(" ").forEach(function(e){return t.forEach(function(t){return t.removeEventListener(e,n,i)})})}function Jt(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n=Qt(t),i=n[0],r=n[1],o=n[2],s=n[3],a=n[4],h=n[5],u=Xt(i,r,o,function(t){var e=!h||h(t);e&&(u(),s(t,e))},a);return u}function Kt(t,n,i){return ie(t).reduce(function(t,e){return t&&e.dispatchEvent(Zt(n,!0,!0,i))},!0)}function Zt(t,e,n,i){var r;return void 0===e&&(e=!0),void 0===n&&(n=!1),z(t)&&((r=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,i),t=r),t}function Qt(t){return $(t[2])&&t.splice(2,0,!1),t}function te(t){return t&&ct&&!D(t)?!!t.capture:t}function ee(t){return t&&"addEventListener"in t}function ne(t){return ee(t)?t:W(t)}function ie(t){return k(t)?t.map(ne).filter(Boolean):z(t)?St(t):ee(t)?[t]:V(t)}function re(t){return"touch"===t.pointerType||!!t.touches}function oe(t){var e=t.touches,n=t.changedTouches,i=e&&e[0]||n&&n[0]||t;return{x:i.clientX,y:i.clientY}}function se(){var n=this;this.promise=new ae(function(t,e){n.reject=e,n.resolve=t})}var ae=ut&&window.Promise||ce,he=2,ue=ut&&window.setImmediate||setTimeout;function ce(t){this.state=he,this.value=void 0,this.deferred=[];var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(t){e.reject(t)}}ce.reject=function(n){return new ce(function(t,e){e(n)})},ce.resolve=function(n){return new ce(function(t,e){t(n)})},ce.all=function(o){return new ce(function(n,t){var i=[],r=0;0===o.length&&n(i);for(var e=0;e<o.length;e+=1)ce.resolve(o[e]).then(function(e){return function(t){i[e]=t,(r+=1)===o.length&&n(i)}}(e),t)})},ce.race=function(i){return new ce(function(t,e){for(var n=0;n<i.length;n+=1)ce.resolve(i[n]).then(t,e)})};var le=ce.prototype;function de(s,a){return new ae(function(t,e){var n=G({data:null,method:"GET",headers:{},xhr:new XMLHttpRequest,beforeSend:et,responseType:""},a);n.beforeSend(n);var i,r,o=n.xhr;for(i in n)if(i in o)try{o[i]=n[i]}catch(t){}for(r in o.open(n.method.toUpperCase(),s),n.headers)o.setRequestHeader(r,n.headers[r]);Xt(o,"load",function(){0===o.status||200<=o.status&&o.status<300||304===o.status?("json"===n.responseType&&z(o.response)&&(o=G(function(t){var e,n={};for(e in t)n[e]=t[e];return n}(o),{response:JSON.parse(o.response)})),t(o)):e(G(Error(o.statusText),{xhr:o,status:o.status}))}),Xt(o,"error",function(){return e(G(Error("Network Error"),{xhr:o}))}),Xt(o,"timeout",function(){return e(G(Error("Network Timeout"),{xhr:o}))}),o.send(n.data)})}function fe(i,r,o){return new ae(function(t,e){var n=new Image;n.onerror=function(t){return e(t)},n.onload=function(){return t(n)},o&&(n.sizes=o),r&&(n.srcset=r),n.src=i})}function pe(t){var e;"loading"===document.readyState?e=Xt(document,"DOMContentLoaded",function(){e(),t()}):t()}function ge(t,e){return e?V(t).indexOf(W(e)):Yt(Pt(t)).indexOf(t)}function me(t,e,n,i){void 0===n&&(n=0),void 0===i&&(i=!1);var r=(e=V(e)).length;return t=P(t)?j(t):"next"===t?n+1:"previous"===t?n-1:ge(e,t),i?tt(t,0,r-1):(t%=r)<0?t+r:t}function ve(t){return(t=Ne(t)).innerHTML="",t}function we(t,e){return t=Ne(t),H(e)?t.innerHTML:be(t.hasChildNodes()?ve(t):t,e)}function be(e,t){return e=Ne(e),ke(t,function(t){return e.appendChild(t)})}function xe(e,t){return e=Ne(e),ke(t,function(t){return e.parentNode.insertBefore(t,e)})}function ye(e,t){return e=Ne(e),ke(t,function(t){return e.nextSibling?xe(e.nextSibling,t):be(e.parentNode,t)})}function ke(t,e){return(t=z(t)?Ce(t):t)?"length"in t?V(t).map(e):e(t):null}function $e(t){V(t).map(function(t){return t.parentNode&&t.parentNode.removeChild(t)})}function Ie(t,e){for(e=W(xe(t,e));e.firstChild;)e=e.firstChild;return be(e,t),e}function Se(t,e){return V(V(t).map(function(t){return t.hasChildNodes?Ie(V(t.childNodes),e):be(t,e)}))}function Te(t){V(t).map(Pt).filter(function(t,e,n){return n.indexOf(t)===e}).forEach(function(t){xe(t,t.childNodes),$e(t)})}le.resolve=function(t){var e=this;if(e.state===he){if(t===e)throw new TypeError("Promise settled with itself.");var n=!1;try{var i=t&&t.then;if(null!==t&&I(t)&&$(i))return void i.call(t,function(t){n||e.resolve(t),n=!0},function(t){n||e.reject(t),n=!0})}catch(t){return void(n||e.reject(t))}e.state=0,e.value=t,e.notify()}},le.reject=function(t){var e=this;if(e.state===he){if(t===e)throw new TypeError("Promise settled with itself.");e.state=1,e.value=t,e.notify()}},le.notify=function(){var o=this;ue(function(){if(o.state!==he)for(;o.deferred.length;){var t=o.deferred.shift(),e=t[0],n=t[1],i=t[2],r=t[3];try{0===o.state?$(e)?i(e.call(void 0,o.value)):i(o.value):1===o.state&&($(n)?i(n.call(void 0,o.value)):r(o.value))}catch(t){r(t)}}})},le.then=function(n,i){var r=this;return new ce(function(t,e){r.deferred.push([n,i,t,e]),r.notify()})},le.catch=function(t){return this.then(void 0,t)};var Ee=/^\s*<(\w+|!)[^>]*>/,_e=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;function Ce(t){var e=_e.exec(t);if(e)return document.createElement(e[1]);var n=document.createElement("div");return Ee.test(t)?n.insertAdjacentHTML("beforeend",t.trim()):n.textContent=t,1<n.childNodes.length?V(n.childNodes):n.firstChild}function Ae(t,e){if(N(t))for(e(t),t=t.firstElementChild;t;){var n=t.nextElementSibling;Ae(t,e),t=n}}function Ne(t,e){return z(t)?De(t)?W(Ce(t)):It(t,e):W(t)}function Me(t,e){return z(t)?De(t)?V(Ce(t)):St(t,e):V(t)}function De(t){return"<"===t[0]||t.match(/^\s*</)}function ze(t){for(var e=[],n=arguments.length-1;0<n--;)e[n]=arguments[n+1];je(t,e,"add")}function Be(t){for(var e=[],n=arguments.length-1;0<n--;)e[n]=arguments[n+1];je(t,e,"remove")}function Pe(t,e){ot(t,"class",function(t){return(t||"").replace(new RegExp("\\b"+e+"\\b","g"),"")})}function Oe(t){for(var e=[],n=arguments.length-1;0<n--;)e[n]=arguments[n+1];e[0]&&Be(t,e[0]),e[1]&&ze(t,e[1])}function He(t,e){return e&&V(t).some(function(t){return t.classList.contains(e.split(" ")[0])})}function Le(t){for(var i,r=[],e=arguments.length-1;0<e--;)r[e]=arguments[e+1];r.length&&(i=z(J(r=Fe(r)))?[]:r.pop(),r=r.filter(Boolean),V(t).forEach(function(t){for(var e=t.classList,n=0;n<r.length;n++)We.Force?e.toggle.apply(e,[r[n]].concat(i)):e[(H(i)?!e.contains(r[n]):i)?"add":"remove"](r[n])}))}function je(t,n,i){(n=Fe(n).filter(Boolean)).length&&V(t).forEach(function(t){var e=t.classList;We.Multiple?e[i].apply(e,n):n.forEach(function(t){return e[i](t)})})}function Fe(t){return t.reduce(function(t,e){return t.concat.call(t,z(e)&&b(e," ")?e.trim().split(" "):e)},[])}var We={get Multiple(){return this.get("_multiple")},get Force(){return this.get("_force")},get:function(t){var e;return l(this,t)||((e=document.createElement("_").classList).add("a","b"),e.toggle("c",!1),this._multiple=e.contains("b"),this._force=!e.contains("c")),this[t]}},Ve={"animation-iteration-count":!0,"column-count":!0,"fill-opacity":!0,"flex-grow":!0,"flex-shrink":!0,"font-weight":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0,widows:!0,"z-index":!0,zoom:!0};function Re(t,e,r){return V(t).map(function(n){if(z(e)){if(e=Je(e),H(r))return Ue(n,e);r||B(r)?n.style[e]=P(r)&&!Ve[e]?r+"px":r:n.style.removeProperty(e)}else{if(k(e)){var i=qe(n);return e.reduce(function(t,e){return t[e]=i[Je(e)],t},{})}I(e)&&K(e,function(t,e){return Re(n,e,t)})}return n})[0]}function qe(t,e){return(t=W(t)).ownerDocument.defaultView.getComputedStyle(t,e)}function Ue(t,e,n){return qe(t,n)[e]}var Ye={};function Xe(t){var e,n=document.documentElement;return ct?(t in Ye||(ze(e=be(n,document.createElement("div")),"uk-"+t),Ye[t]=Ue(e,"content",":before").replace(/^["'](.*)["']$/,"$1"),$e(e)),Ye[t]):qe(n).getPropertyValue("--uk-"+t)}var Ge={};function Je(t){return Ge[t]||(Ge[t]=function(t){t=d(t);var e=document.documentElement.style;if(t in e)return t;var n,i=Ke.length;for(;i--;)if((n="-"+Ke[i]+"-"+t)in e)return n}(t)||t)}var Ke=["webkit","moz","ms"];function Ze(t,s,a,h){return void 0===a&&(a=400),void 0===h&&(h="linear"),ae.all(V(t).map(function(o){return new ae(function(n,i){for(var t in s){var e=Re(o,t);""===e&&Re(o,t,e)}var r=setTimeout(function(){return Kt(o,"transitionend")},a);Jt(o,"transitionend transitioncanceled",function(t){var e=t.type;clearTimeout(r),Be(o,"uk-transition"),Re(o,{transitionProperty:"",transitionDuration:"",transitionTimingFunction:""}),("transitioncanceled"===e?i:n)()},{self:!0}),ze(o,"uk-transition"),Re(o,G({transitionProperty:Object.keys(s).map(Je).join(","),transitionDuration:a+"ms",transitionTimingFunction:h},s))})}))}var Qe={start:Ze,stop:function(t){return Kt(t,"transitionend"),ae.resolve()},cancel:function(t){Kt(t,"transitioncanceled")},inProgress:function(t){return He(t,"uk-transition")}},tn="uk-animation-";function en(t,e,s,a,h){return void 0===s&&(s=200),ae.all(V(t).map(function(o){return new ae(function(n,i){Kt(o,"animationcanceled");var r=setTimeout(function(){return Kt(o,"animationend")},s);Jt(o,"animationend animationcanceled",function(t){var e=t.type;clearTimeout(r),("animationcanceled"===e?i:n)(),Re(o,"animationDuration",""),Pe(o,tn+"\\S*")},{self:!0}),Re(o,"animationDuration",s+"ms"),ze(o,e,tn+(h?"leave":"enter")),w(e,tn)&&ze(o,a&&"uk-transform-origin-"+a,h&&tn+"reverse")})}))}var nn=new RegExp(tn+"(enter|leave)"),rn={in:en,out:function(t,e,n,i){return en(t,e,n,i,!0)},inProgress:function(t){return nn.test(ot(t,"class"))},cancel:function(t){Kt(t,"animationcanceled")}},on={width:["x","left","right"],height:["y","top","bottom"]};function sn(t,e,c,l,d,n,i,r){c=mn(c),l=mn(l);var f={element:c,target:l};if(!t||!e)return f;var o,p=hn(t),g=hn(e),m=g;return gn(m,c,p,-1),gn(m,l,g,1),d=vn(d,p.width,p.height),n=vn(n,g.width,g.height),d.x+=n.x,d.y+=n.y,m.left+=d.x,m.top+=d.y,i&&(o=[hn(R(t))],r&&o.unshift(hn(r)),K(on,function(t,s){var a=t[0],h=t[1],u=t[2];!0!==i&&!b(i,a)||o.some(function(i){var t=c[a]===h?-p[s]:c[a]===u?p[s]:0,e=l[a]===h?g[s]:l[a]===u?-g[s]:0;if(m[h]<i[h]||m[h]+p[s]>i[u]){var n=p[s]/2,r="center"===l[a]?-g[s]/2:0;return"center"===c[a]&&(o(n,r)||o(-n,-r))||o(t,e)}function o(e,t){var n=F((m[h]+e+t-2*d[a]).toFixed(4));if(n>=i[h]&&n+p[s]<=i[u])return m[h]=n,["element","target"].forEach(function(t){f[t][a]=e?f[t][a]===on[s][1]?on[s][2]:on[s][1]:f[t][a]}),!0}})})),an(t,m),f}function an(n,i){if(!i)return hn(n);var r=hn(n),o=Re(n,"position");["left","top"].forEach(function(t){var e;t in i&&(e=Re(n,t),Re(n,t,i[t]-r[t]+F("absolute"===o&&"auto"===e?un(n)[t]:e)))})}function hn(t){var e=R(t),n=e.pageYOffset,i=e.pageXOffset,r=E(t)?{height:ln(t),width:dn(t),top:0,left:0}:function(t){if(!t)return{};var e;Ft(t)||(e=ot(t,"style"),t.style.setProperty("display","block","important"));var n=t.getBoundingClientRect();return ot(t,"style",e),n}(W(t));return{height:r.height,width:r.width,top:r.top+n,left:r.left+i,bottom:r.top+r.height+n,right:r.left+r.width+i}}function un(t,e){e=e||(W(t)||{}).offsetParent||R(t).document.documentElement;var n=an(t),i=an(e);return{top:n.top-i.top-F(Re(e,"borderTopWidth")),left:n.left-i.left-F(Re(e,"borderLeftWidth"))}}function cn(t){var e=[0,0];t=W(t);do{if(e[0]+=t.offsetTop,e[1]+=t.offsetLeft,"fixed"===Re(t,"position")){var n=R(t);return e[0]+=n.pageYOffset,e[1]+=n.pageXOffset,e}}while(t=t.offsetParent);return e}var ln=fn("height"),dn=fn("width");function fn(i){var r=p(i);return function(t,e){if(H(e)){if(E(t))return t["inner"+r];if(_(t)){var n=t.documentElement;return Math.max(n["offset"+r],n["scroll"+r])}return(e="auto"===(e=Re(t=W(t),i))?t["offset"+r]:F(e)||0)-pn(t,i)}Re(t,i,e||0===e?+e+pn(t,i)+"px":"")}}function pn(n,t,e){return void 0===e&&(e="border-box"),Re(n,"boxSizing")===e?on[t].slice(1).map(p).reduce(function(t,e){return t+F(Re(n,"padding"+e))+F(Re(n,"border"+e+"Width"))},0):0}function gn(o,s,a,h){K(on,function(t,e){var n=t[0],i=t[1],r=t[2];s[n]===r?o[i]+=a[e]*h:"center"===s[n]&&(o[i]+=a[e]*h/2)})}function mn(t){var e=/left|center|right/,n=/top|center|bottom/;return 1===(t=(t||"").split(" ")).length&&(t=e.test(t[0])?t.concat("center"):n.test(t[0])?["center"].concat(t):["center","center"]),{x:e.test(t[0])?t[0]:"center",y:n.test(t[1])?t[1]:"center"}}function vn(t,e,n){var i=(t||"").split(" "),r=i[0],o=i[1];return{x:r?F(r)*(u(r,"%")?e/100:1):0,y:o?F(o)*(u(o,"%")?n/100:1):0}}function wn(t){switch(t){case"left":return"right";case"right":return"left";case"top":return"bottom";case"bottom":return"top";default:return t}}function bn(t,e,n){return void 0===e&&(e="width"),void 0===n&&(n=window),P(t)?+t:u(t,"vh")?xn(ln(R(n)),t):u(t,"vw")?xn(dn(R(n)),t):u(t,"%")?xn(hn(n)[e],t):F(t)}function xn(t,e){return t*F(e)/100}var yn={reads:[],writes:[],read:function(t){return this.reads.push(t),In(),t},write:function(t){return this.writes.push(t),In(),t},clear:function(t){return Tn(this.reads,t)||Tn(this.writes,t)},flush:kn};function kn(t){void 0===t&&(t=1),Sn(yn.reads),Sn(yn.writes.splice(0,yn.writes.length)),yn.scheduled=!1,(yn.reads.length||yn.writes.length)&&In(t+1)}var $n=4;function In(t){yn.scheduled||(yn.scheduled=!0,t&&t<$n?ae.resolve().then(function(){return kn(t)}):requestAnimationFrame(function(){return kn()}))}function Sn(t){for(var e;e=t.shift();)e()}function Tn(t,e){var n=t.indexOf(e);return!!~n&&!!t.splice(n,1)}function En(){}En.prototype={positions:[],init:function(){var e,t=this;this.positions=[],this.unbind=Xt(document,"mousemove",function(t){return e=oe(t)}),this.interval=setInterval(function(){e&&(t.positions.push(e),5<t.positions.length&&t.positions.shift())},50)},cancel:function(){this.unbind&&this.unbind(),this.interval&&clearInterval(this.interval)},movesTo:function(t){if(this.positions.length<2)return!1;var n=t.getBoundingClientRect(),e=n.left,i=n.right,r=n.top,o=n.bottom,s=this.positions[0],a=J(this.positions),h=[s,a];return!it(a,n)&&[[{x:e,y:r},{x:i,y:o}],[{x:e,y:o},{x:i,y:r}]].some(function(t){var e=function(t,e){var n=t[0],i=n.x,r=n.y,o=t[1],s=o.x,a=o.y,h=e[0],u=h.x,c=h.y,l=e[1],d=l.x,f=l.y,p=(f-c)*(s-i)-(d-u)*(a-r);if(0==p)return!1;var g=((d-u)*(r-c)-(f-c)*(i-u))/p;if(g<0)return!1;return{x:i+g*(s-i),y:r+g*(a-r)}}(h,t);return e&&it(e,n)})}};var _n={};function Cn(t,e,n){return _n.computed($(t)?t.call(n,n):t,$(e)?e.call(n,n):e)}function An(t,e){return t=t&&!k(t)?[t]:t,e?t?t.concat(e):k(e)?e:[e]:t}function Nn(e,n,i){var t,r,o={};if($(n)&&(n=n.options),n.extends&&(e=Nn(e,n.extends,i)),n.mixins)for(var s=0,a=n.mixins.length;s<a;s++)e=Nn(e,n.mixins[s],i);for(t in e)h(t);for(r in n)l(e,r)||h(r);function h(t){o[t]=(_n[t]||function(t,e){return H(e)?t:e})(e[t],n[t],i)}return o}function Mn(t,e){var n;void 0===e&&(e=[]);try{return t?w(t,"{")?JSON.parse(t):e.length&&!b(t,":")?((n={})[e[0]]=t,n):t.split(";").reduce(function(t,e){var n=e.split(/:(.*)/),i=n[0],r=n[1];return i&&!H(r)&&(t[i.trim()]=r.trim()),t},{}):{}}catch(t){return{}}}function Dn(t){if(On(t)&&jn(t,{func:"playVideo",method:"play"}),Pn(t))try{t.play().catch(et)}catch(t){}}function zn(t){On(t)&&jn(t,{func:"pauseVideo",method:"pause"}),Pn(t)&&t.pause()}function Bn(t){On(t)&&jn(t,{func:"mute",method:"setVolume",value:0}),Pn(t)&&(t.muted=!0)}function Pn(t){return t&&"VIDEO"===t.tagName}function On(t){return t&&"IFRAME"===t.tagName&&(Hn(t)||Ln(t))}function Hn(t){return!!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)}function Ln(t){return!!t.src.match(/vimeo\.com\/video\/.*/)}function jn(t,e){(function(e){if(e[Wn])return e[Wn];var n,i=Hn(e),r=Ln(e),o=++Vn;return e[Wn]=new ae(function(t){i&&Jt(e,"load",function(){function t(){return Fn(e,{event:"listening",id:o})}n=setInterval(t,100),t()}),Jt(window,"message",t,!1,function(t){var e=t.data;try{return(e=JSON.parse(e))&&(i&&e.id===o&&"onReady"===e.event||r&&Number(e.player_id)===o)}catch(t){}}),e.src=e.src+(b(e.src,"?")?"&":"?")+(i?"enablejsapi=1":"api=1&player_id="+o)}).then(function(){return clearInterval(n)})})(t).then(function(){return Fn(t,e)})}function Fn(t,e){try{t.contentWindow.postMessage(JSON.stringify(G({event:"command"},e)),"*")}catch(t){}}_n.events=_n.created=_n.beforeConnect=_n.connected=_n.beforeDisconnect=_n.disconnected=_n.destroy=An,_n.args=function(t,e){return!1!==e&&An(e||t)},_n.update=function(t,e){return Z(An(t,$(e)?{read:e}:e),"order")},_n.props=function(t,e){return k(e)&&(e=e.reduce(function(t,e){return t[e]=String,t},{})),_n.methods(t,e)},_n.computed=_n.methods=function(t,e){return e?t?G({},t,e):e:t},_n.data=function(e,n,t){return t?Cn(e,n,t):n?e?function(t){return Cn(e,n,t)}:n:e};var Wn="_ukPlayer",Vn=0;function Rn(h,u,c){if(void 0===u&&(u=0),void 0===c&&(c=0),!Ft(h))return!1;var l=Jn(h);return l.every(function(t,e){var n=an(l[e+1]||h),i=an(Gn(t)),r=i.top,o=i.left,s=i.bottom,a=i.right;return nt(n,{top:r-u,left:o-c,bottom:s+u,right:a+c})})}function qn(t,e){(t=(E(t)||_(t)?Kn:W)(t)).scrollTop=e}function Un(t,e){void 0===e&&(e={});var c=e.offset;if(void 0===c&&(c=0),Ft(t)){for(var l=Jn(t).concat(t),n=ae.resolve(),i=function(u){n=n.then(function(){return new ae(function(n){var t,i=l[u],e=l[u+1],r=i.scrollTop,o=Math.ceil(un(e,Gn(i)).top-c),s=(t=Math.abs(o),40*Math.pow(t,.375)),a=Date.now(),h=function(){var t,e=(t=tt((Date.now()-a)/s),.5*(1-Math.cos(Math.PI*t)));qn(i,r+o*e),1!=e?requestAnimationFrame(h):n()};h()})})},r=0;r<l.length-1;r++)i(r);return n}}function Yn(t,e){if(void 0===e&&(e=0),!Ft(t))return 0;var n=J(Xn(t)),i=n.scrollHeight,r=n.scrollTop,o=an(Gn(n)).height,s=cn(t)[0]-r-cn(n)[0],a=Math.min(o,s+r);return tt(-1*(s-a)/Math.min(an(t).height+e+a,i-(s+r),i-o))}function Xn(t,e){void 0===e&&(e=/auto|scroll/);var n=Kn(t),i=Ut(t).filter(function(t){return t===n||e.test(Re(t,"overflow"))&&t.scrollHeight>Math.round(an(t).height)}).reverse();return i.length?i:[n]}function Gn(t){return t===Kn(t)?window:t}function Jn(t){return Xn(t,/auto|scroll|hidden/)}function Kn(t){var e=R(t).document;return e.scrollingElement||e.documentElement}var Zn=ut&&window.IntersectionObserver||function(){function t(e,t){var n=this;void 0===t&&(t={});var i=t.rootMargin;void 0===i&&(i="0 0"),this.targets=[];var r,o=(i||"0 0").split(" ").map(F),s=o[0],a=o[1];this.offsetTop=s,this.offsetLeft=a,this.apply=function(){r=r||requestAnimationFrame(function(){return setTimeout(function(){var t=n.takeRecords();t.length&&e(t,n),r=!1})})},this.off=Xt(window,"scroll resize load",this.apply,{passive:!0,capture:!0})}return t.prototype.takeRecords=function(){var n=this;return this.targets.filter(function(t){var e=Rn(t.target,n.offsetTop,n.offsetLeft);if(null===t.isIntersecting||e^t.isIntersecting)return t.isIntersecting=e,!0})},t.prototype.observe=function(t){this.targets.push({target:t,isIntersecting:null}),this.apply()},t.prototype.disconnect=function(){this.targets=[],this.off()},t}();function Qn(t){return!(!w(t,"uk-")&&!w(t,"data-uk-"))&&f(t.replace("data-uk-","").replace("uk-",""))}function ti(t){this._init(t)}var ei,ni,ii,ri,oi,si,ai,hi,ui;function ci(t,e){if(t)for(var n in t)t[n]._connected&&t[n]._callUpdate(e)}function li(t,e){var n={},i=t.args;void 0===i&&(i=[]);var r=t.props;void 0===r&&(r={});var o,s=t.el;if(!r)return n;for(o in r){var a=d(o),h=ht(s,a);H(h)||(h=r[o]===Boolean&&""===h||fi(r[o],h),("target"!==a||h&&!w(h,"_"))&&(n[o]=h))}var u,c=Mn(ht(s,e),i);for(u in c){var l=f(u);void 0!==r[l]&&(n[l]=fi(r[l],c[u]))}return n}function di(e,n,i){T(n)||(n={name:i,handler:n});var t=n.name,r=n.el,o=n.handler,s=n.capture,a=n.passive,h=n.delegate,u=n.filter,c=n.self,r=$(r)?r.call(e):r||e.$el;k(r)?r.forEach(function(t){return di(e,G({},n,{el:t}),i)}):!r||u&&!u.call(e)||e._events.push(Xt(r,t,h?z(h)?h:h.call(e):null,z(o)?e[o]:o.bind(e),{passive:a,capture:s,self:c}))}function fi(t,e){return t===Boolean?L(e):t===Number?j(e):"list"===t?q(e):t?t(e):e}ti.util=Object.freeze({__proto__:null,ajax:de,getImage:fe,transition:Ze,Transition:Qe,animate:en,Animation:rn,attr:ot,hasAttr:st,removeAttr:at,data:ht,addClass:ze,removeClass:Be,removeClasses:Pe,replaceClass:Oe,hasClass:He,toggleClass:Le,positionAt:sn,offset:an,position:un,offsetPosition:cn,height:ln,width:dn,boxModelAdjust:pn,flipPosition:wn,toPx:bn,ready:pe,index:ge,getIndex:me,empty:ve,html:we,prepend:function(e,t){return(e=Ne(e)).hasChildNodes()?ke(t,function(t){return e.insertBefore(t,e.firstChild)}):be(e,t)},append:be,before:xe,after:ye,remove:$e,wrapAll:Ie,wrapInner:Se,unwrap:Te,fragment:Ce,apply:Ae,$:Ne,$$:Me,inBrowser:ut,isIE:ct,isRtl:lt,hasTouch:pt,pointerDown:gt,pointerMove:mt,pointerUp:vt,pointerEnter:wt,pointerLeave:bt,pointerCancel:xt,on:Xt,off:Gt,once:Jt,trigger:Kt,createEvent:Zt,toEventTargets:ie,isTouch:re,getEventPos:oe,fastdom:yn,isVoidElement:jt,isVisible:Ft,selInput:Wt,isInput:Vt,filter:Rt,within:qt,parents:Ut,children:Yt,hasOwn:l,hyphenate:d,camelize:f,ucfirst:p,startsWith:w,endsWith:u,includes:b,findIndex:y,isArray:k,isFunction:$,isObject:I,isPlainObject:T,isWindow:E,isDocument:_,isJQuery:C,isNode:A,isElement:N,isNodeCollection:M,isBoolean:D,isString:z,isNumber:B,isNumeric:P,isEmpty:O,isUndefined:H,toBoolean:L,toNumber:j,toFloat:F,toNode:W,toNodes:V,toWindow:R,toList:q,toMs:U,isEqual:Y,swap:X,assign:G,last:J,each:K,sortBy:Z,uniqueBy:Q,clamp:tt,noop:et,intersectRect:nt,pointInRect:it,Dimensions:rt,MouseTracker:En,mergeOptions:Nn,parseOptions:Mn,play:Dn,pause:zn,mute:Bn,Promise:ae,Deferred:se,IntersectionObserver:Zn,query:yt,queryAll:kt,find:It,findAll:St,matches:Dt,closest:Bt,parent:Pt,escape:Ht,css:Re,getStyles:qe,getStyle:Ue,getCssVar:Xe,propName:Je,isInView:Rn,scrollTop:qn,scrollIntoView:Un,scrolledOver:Yn,scrollParents:Xn,getViewport:Gn}),ti.data="__uikit__",ti.prefix="uk-",ti.options={},ti.version="3.5.8",ii=(ei=ti).data,ei.use=function(t){if(!t.installed)return t.call(null,this),t.installed=!0,this},ei.mixin=function(t,e){(e=(z(e)?ei.component(e):e)||this).options=Nn(e.options,t)},ei.extend=function(t){t=t||{};function e(t){this._init(t)}return((e.prototype=Object.create(this.prototype)).constructor=e).options=Nn(this.options,t),e.super=this,e.extend=this.extend,e},ei.update=function(t,e){Ut(t=t?W(t):document.body).reverse().forEach(function(t){return ci(t[ii],e)}),Ae(t,function(t){return ci(t[ii],e)})},Object.defineProperty(ei,"container",{get:function(){return ni||document.body},set:function(t){ni=Ne(t)}}),(ri=ti).prototype._callHook=function(t){var e=this,n=this.$options[t];n&&n.forEach(function(t){return t.call(e)})},ri.prototype._callConnected=function(){this._connected||(this._data={},this._computeds={},this._frames={reads:{},writes:{}},this._initProps(),this._callHook("beforeConnect"),this._connected=!0,this._initEvents(),this._initObserver(),this._callHook("connected"),this._callUpdate())},ri.prototype._callDisconnected=function(){this._connected&&(this._callHook("beforeDisconnect"),this._observer&&(this._observer.disconnect(),this._observer=null),this._unbindEvents(),this._callHook("disconnected"),this._connected=!1)},ri.prototype._callUpdate=function(t){var o=this;void 0===t&&(t="update");var s=t.type||t;b(["update","resize"],s)&&this._callWatches();var e=this.$options.update,n=this._frames,a=n.reads,h=n.writes;e&&e.forEach(function(t,e){var n=t.read,i=t.write,r=t.events;"update"!==s&&!b(r,s)||(n&&!b(yn.reads,a[e])&&(a[e]=yn.read(function(){var t=o._connected&&n.call(o,o._data,s);!1===t&&i?yn.clear(h[e]):T(t)&&G(o._data,t)})),i&&!b(yn.writes,h[e])&&(h[e]=yn.write(function(){return o._connected&&i.call(o,o._data,s)})))})},ri.prototype._callWatches=function(){var h,u=this,c=this._frames;c._watch||(h=!l(c,"_watch"),c._watch=yn.read(function(){if(u._connected){var t,e=u.$options.computed,n=u._computeds;for(t in e){var i=l(n,t),r=n[t];delete n[t];var o=e[t],s=o.watch,a=o.immediate;s&&(h&&a||i&&!Y(r,u[t]))&&s.call(u,u[t],r)}c._watch=null}}))},si=0,(oi=ti).prototype._init=function(t){(t=t||{}).data=function(t,e){var n=t.data,i=(t.el,e.args),r=e.props;void 0===r&&(r={});if(n=k(n)?O(i)?void 0:n.slice(0,i.length).reduce(function(t,e,n){return T(e)?G(t,e):t[i[n]]=e,t},{}):n)for(var o in n)H(n[o])?delete n[o]:n[o]=r[o]?fi(r[o],n[o]):n[o];return n}(t,this.constructor.options),this.$options=Nn(this.constructor.options,t,this),this.$el=null,this.$props={},this._uid=si++,this._initData(),this._initMethods(),this._initComputeds(),this._callHook("created"),t.el&&this.$mount(t.el)},oi.prototype._initData=function(){var t,e=this.$options.data;for(t in void 0===e&&(e={}),e)this.$props[t]=this[t]=e[t]},oi.prototype._initMethods=function(){var t=this.$options.methods;if(t)for(var e in t)this[e]=t[e].bind(this)},oi.prototype._initComputeds=function(){var t=this.$options.computed;if(this._computeds={},t)for(var e in t)!function(i,r,o){Object.defineProperty(i,r,{enumerable:!0,get:function(){var t=i._computeds,e=i.$props,n=i.$el;return l(t,r)||(t[r]=(o.get||o).call(i,e,n)),t[r]},set:function(t){var e=i._computeds;e[r]=o.set?o.set.call(i,t):t,H(e[r])&&delete e[r]}})}(this,e,t[e])},oi.prototype._initProps=function(t){for(var e in t=t||li(this.$options,this.$name))H(t[e])||(this.$props[e]=t[e]);var n=[this.$options.computed,this.$options.methods];for(e in this.$props)e in t&&function(t,e){return t.every(function(t){return!t||!l(t,e)})}(n,e)&&(this[e]=this.$props[e])},oi.prototype._initEvents=function(){var n=this;this._events=[];var t=this.$options.events;t&&t.forEach(function(t){if(l(t,"handler"))di(n,t);else for(var e in t)di(n,t[e],e)})},oi.prototype._unbindEvents=function(){this._events.forEach(function(t){return t()}),delete this._events},oi.prototype._initObserver=function(){var t,r=this,e=this.$options,o=e.attrs,n=e.props,i=e.el;!this._observer&&n&&!1!==o&&(o=k(o)?o:Object.keys(n),this._observer=new MutationObserver(function(t){var i=li(r.$options,r.$name);t.some(function(t){var e=t.attributeName,n=e.replace("data-","");return(n===r.$name?o:[f(n),f(e)]).some(function(t){return!H(i[t])&&i[t]!==r.$props[t]})})&&r.$reset()}),t=o.map(d).concat(this.$name),this._observer.observe(i,{attributes:!0,attributeFilter:t.concat(t.map(function(t){return"data-"+t}))}))},hi=(ai=ti).data,ui={},ai.component=function(s,t){var e=d(s);if(s=f(e),!t)return T(ui[s])&&(ui[s]=ai.extend(ui[s])),ui[s];ai[s]=function(t,n){for(var e=arguments.length,i=Array(e);e--;)i[e]=arguments[e];var r=ai.component(s);return r.options.functional?new r({data:T(t)?t:[].concat(i)}):t?Me(t).map(o)[0]:o(t);function o(t){var e=ai.getComponent(t,s);if(e){if(!n)return e;e.$destroy()}return new r({el:t,data:n})}};var n=T(t)?G({},t):t.options;return n.name=s,n.install&&n.install(ai,n,s),ai._initialized&&!n.functional&&yn.read(function(){return ai[s]("[uk-"+e+"],[data-uk-"+e+"]")}),ui[s]=T(t)?n:t},ai.getComponents=function(t){return t&&t[hi]||{}},ai.getComponent=function(t,e){return ai.getComponents(t)[e]},ai.connect=function(t){if(t[hi])for(var e in t[hi])t[hi][e]._callConnected();for(var n=0;n<t.attributes.length;n++){var i=Qn(t.attributes[n].name);i&&i in ui&&ai[i](t)}},ai.disconnect=function(t){for(var e in t[hi])t[hi][e]._callDisconnected()},function(i){var r=i.data;i.prototype.$create=function(t,e,n){return i[t](e,n)},i.prototype.$mount=function(t){var e=this.$options.name;t[r]||(t[r]={}),t[r][e]||((t[r][e]=this).$el=this.$options.el=this.$options.el||t,qt(t,document)&&this._callConnected())},i.prototype.$reset=function(){this._callDisconnected(),this._callConnected()},i.prototype.$destroy=function(t){void 0===t&&(t=!1);var e=this.$options,n=e.el,i=e.name;n&&this._callDisconnected(),this._callHook("destroy"),n&&n[r]&&(delete n[r][i],O(n[r])||delete n[r],t&&$e(this.$el))},i.prototype.$emit=function(t){this._callUpdate(t)},i.prototype.$update=function(t,e){void 0===t&&(t=this.$el),i.update(t,e)},i.prototype.$getComponent=i.getComponent;var e={};Object.defineProperties(i.prototype,{$container:Object.getOwnPropertyDescriptor(i,"container"),$name:{get:function(){var t=this.$options.name;return e[t]||(e[t]=i.prefix+d(t)),e[t]}}})}(ti);var pi={connected:function(){He(this.$el,this.$name)||ze(this.$el,this.$name)}},gi={props:{cls:Boolean,animation:"list",duration:Number,origin:String,transition:String},data:{cls:!1,animation:[!1],duration:200,origin:!1,transition:"linear",initProps:{overflow:"",height:"",paddingTop:"",paddingBottom:"",marginTop:"",marginBottom:""},hideProps:{overflow:"hidden",height:0,paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0}},computed:{hasAnimation:function(t){return!!t.animation[0]},hasTransition:function(t){var e=t.animation;return this.hasAnimation&&!0===e[0]}},methods:{toggleElement:function(t,n,i){var r=this;return ae.all(V(t).map(function(e){return new ae(function(t){return r._toggleElement(e,n,i).then(t,et)})}))},isToggled:function(t){var e=V(t||this.$el);return this.cls?He(e,this.cls.split(" ")[0]):!st(e,"hidden")},updateAria:function(t){!1===this.cls&&ot(t,"aria-hidden",!this.isToggled(t))},_toggleElement:function(t,e,n){var i=this;if(e=D(e)?e:rn.inProgress(t)?He(t,"uk-animation-leave"):Qe.inProgress(t)?"0px"===t.style.height:!this.isToggled(t),!Kt(t,"before"+(e?"show":"hide"),[this]))return ae.reject();var o,r=($(n)?n:!1!==n&&this.hasAnimation?this.hasTransition?mi(this):(o=this,function(t,e){rn.cancel(t);var n=o.animation,i=o.duration,r=o._toggle;return e?(r(t,!0),rn.in(t,n[0],i,o.origin)):rn.out(t,n[1]||n[0],i,o.origin).then(function(){return r(t,!1)})}):this._toggle)(t,e);Kt(t,e?"show":"hide",[this]);return(r||ae.resolve()).then(function(){Kt(t,e?"shown":"hidden",[i]),i.$update(t)})},_toggle:function(t,e){var n;t&&(e=Boolean(e),this.cls?(n=b(this.cls," ")||e!==He(t,this.cls))&&Le(t,this.cls,b(this.cls," ")?void 0:e):(n=e===t.hidden)&&(t.hidden=!e),Me("[autofocus]",t).some(function(t){return Ft(t)?t.focus()||!0:t.blur()}),this.updateAria(t),n&&(Kt(t,"toggled",[this]),this.$update(t)))}}};function mi(t){var s=t.isToggled,a=t.duration,h=t.initProps,u=t.hideProps,c=t.transition,l=t._toggle;return function(t,e){var n=Qe.inProgress(t),i=t.hasChildNodes?F(Re(t.firstElementChild,"marginTop"))+F(Re(t.lastElementChild,"marginBottom")):0,r=Ft(t)?ln(t)+(n?0:i):0;Qe.cancel(t),s(t)||l(t,!0),ln(t,""),yn.flush();var o=ln(t)+(n?0:i);return ln(t,r),(e?Qe.start(t,G({},h,{overflow:"hidden",height:o}),Math.round(a*(1-r/o)),c):Qe.start(t,u,Math.round(a*(r/o)),c).then(function(){return l(t,!1)})).then(function(){return Re(t,h)})}}var vi={mixins:[pi,gi],props:{targets:String,active:null,collapsible:Boolean,multiple:Boolean,toggle:String,content:String,transition:String,offset:Number},data:{targets:"> *",active:!1,animation:[!0],collapsible:!0,multiple:!1,clsOpen:"uk-open",toggle:"> .uk-accordion-title",content:"> .uk-accordion-content",transition:"ease",offset:0},computed:{items:{get:function(t,e){return Me(t.targets,e)},watch:function(t,e){var n,i=this;t.forEach(function(t){return wi(Ne(i.content,t),!He(t,i.clsOpen))}),e||He(t,this.clsOpen)||(n=!1!==this.active&&t[Number(this.active)]||!this.collapsible&&t[0])&&this.toggle(n,!1)},immediate:!0}},events:[{name:"click",delegate:function(){return this.targets+" "+this.$props.toggle},handler:function(t){t.preventDefault(),this.toggle(ge(Me(this.targets+" "+this.$props.toggle,this.$el),t.current))}}],methods:{toggle:function(t,r){var o=this,e=[this.items[me(t,this.items)]],n=Rt(this.items,"."+this.clsOpen);this.multiple||b(n,e[0])||(e=e.concat(n)),!this.collapsible&&n.length<2&&!Rt(e,":not(."+this.clsOpen+")").length||e.forEach(function(t){return o.toggleElement(t,!He(t,o.clsOpen),function(e,n){Le(e,o.clsOpen,n);var i=Ne((e._wrapper?"> * ":"")+o.content,e);if(!1!==r&&o.hasTransition)return e._wrapper||(e._wrapper=Ie(i,"<div"+(n?" hidden":"")+">")),wi(i,!1),mi(o)(e._wrapper,n).then(function(){var t;wi(i,!n),delete e._wrapper,Te(i),n&&(Rn(t=Ne(o.$props.toggle,e))||Un(t,{offset:o.offset}))});wi(i,!n)})})}}};function wi(t,e){t&&(t.hidden=e)}var bi={mixins:[pi,gi],args:"animation",props:{close:String},data:{animation:[!0],selClose:".uk-alert-close",duration:150,hideProps:G({opacity:0},gi.data.hideProps)},events:[{name:"click",delegate:function(){return this.selClose},handler:function(t){t.preventDefault(),this.close()}}],methods:{close:function(){var t=this;this.toggleElement(this.$el).then(function(){return t.$destroy(!0)})}}},xi={args:"autoplay",props:{automute:Boolean,autoplay:Boolean},data:{automute:!1,autoplay:!0},computed:{inView:function(t){return"inview"===t.autoplay}},connected:function(){this.inView&&!st(this.$el,"preload")&&(this.$el.preload="none"),this.automute&&Bn(this.$el)},update:{read:function(){return{visible:Ft(this.$el)&&"hidden"!==Re(this.$el,"visibility"),inView:this.inView&&Rn(this.$el)}},write:function(t){var e=t.visible,n=t.inView;!e||this.inView&&!n?zn(this.$el):(!0===this.autoplay||this.inView&&n)&&Dn(this.$el)},events:["resize","scroll"]}},yi={mixins:[pi,xi],props:{width:Number,height:Number},data:{automute:!0},update:{read:function(){var t=this.$el,e=function(t){for(;t=Pt(t);)if("static"!==Re(t,"position"))return t}(t)||t.parentNode,n=e.offsetHeight,i=e.offsetWidth,r=rt.cover({width:this.width||t.naturalWidth||t.videoWidth||t.clientWidth,height:this.height||t.naturalHeight||t.videoHeight||t.clientHeight},{width:i+(i%2?1:0),height:n+(n%2?1:0)});return!(!r.width||!r.height)&&r},write:function(t){var e=t.height,n=t.width;Re(this.$el,{height:e,width:n})},events:["resize"]}};var ki,$i={props:{pos:String,offset:null,flip:Boolean,clsPos:String},data:{pos:"bottom-"+(lt?"right":"left"),flip:!0,offset:!1,clsPos:""},computed:{pos:function(t){var e=t.pos;return(e+(b(e,"-")?"":"-center")).split("-")},dir:function(){return this.pos[0]},align:function(){return this.pos[1]}},methods:{positionAt:function(t,e,n){var i;Pe(t,this.clsPos+"-(top|bottom|left|right)(-[a-z]+)?");var r=this.offset,o=this.getAxis();P(r)||(r=(i=Ne(r))?an(i)["x"===o?"left":"top"]-an(e)["x"===o?"right":"bottom"]:0);var s=sn(t,e,"x"===o?wn(this.dir)+" "+this.align:this.align+" "+wn(this.dir),"x"===o?this.dir+" "+this.align:this.align+" "+this.dir,"x"===o?""+("left"===this.dir?-r:r):" "+("top"===this.dir?-r:r),null,this.flip,n).target,a=s.x,h=s.y;this.dir="x"===o?a:h,this.align="x"===o?h:a,Le(t,this.clsPos+"-"+this.dir+"-"+this.align,!1===this.offset)},getAxis:function(){return"top"===this.dir||"bottom"===this.dir?"y":"x"}}},Ii={mixins:[$i,gi],args:"pos",props:{mode:"list",toggle:Boolean,boundary:Boolean,boundaryAlign:Boolean,delayShow:Number,delayHide:Number,clsDrop:String},data:{mode:["click","hover"],toggle:"- *",boundary:ut&&window,boundaryAlign:!1,delayShow:0,delayHide:800,clsDrop:!1,animation:["uk-animation-fade"],cls:"uk-open"},computed:{boundary:function(t,e){return yt(t.boundary,e)},clsDrop:function(t){return t.clsDrop||"uk-"+this.$options.name},clsPos:function(){return this.clsDrop}},created:function(){this.tracker=new En},connected:function(){ze(this.$el,this.clsDrop);var t=this.$props.toggle;this.toggle=t&&this.$create("toggle",yt(t,this.$el),{target:this.$el,mode:this.mode}),this.toggle||Kt(this.$el,"updatearia")},disconnected:function(){this.isActive()&&(ki=null)},events:[{name:"click",delegate:function(){return"."+this.clsDrop+"-close"},handler:function(t){t.preventDefault(),this.hide(!1)}},{name:"click",delegate:function(){return'a[href^="#"]'},handler:function(t){var e=t.defaultPrevented,n=t.current.hash;e||!n||qt(n,this.$el)||this.hide(!1)}},{name:"beforescroll",handler:function(){this.hide(!1)}},{name:"toggle",self:!0,handler:function(t,e){t.preventDefault(),this.isToggled()?this.hide(!1):this.show(e,!1)}},{name:"toggleshow",self:!0,handler:function(t,e){t.preventDefault(),this.show(e)}},{name:"togglehide",self:!0,handler:function(t){t.preventDefault(),this.hide()}},{name:wt,filter:function(){return b(this.mode,"hover")},handler:function(t){re(t)||this.clearTimers()}},{name:bt,filter:function(){return b(this.mode,"hover")},handler:function(t){!re(t)&&t.relatedTarget&&this.hide()}},{name:"toggled",self:!0,handler:function(){this.isToggled()&&(this.clearTimers(),this.position())}},{name:"show",self:!0,handler:function(){var o=this;(ki=this).tracker.init(),Kt(this.$el,"updatearia"),Jt(this.$el,"hide",Xt(document,gt,function(t){var r=t.target;return!qt(r,o.$el)&&Jt(document,vt+" "+xt+" scroll",function(t){var e=t.defaultPrevented,n=t.type,i=t.target;e||n!==vt||r!==i||o.toggle&&qt(r,o.toggle.$el)||o.hide(!1)},!0)}),{self:!0}),Jt(this.$el,"hide",Xt(document,"keydown",function(t){27===t.keyCode&&(t.preventDefault(),o.hide(!1))}),{self:!0})}},{name:"beforehide",self:!0,handler:function(){this.clearTimers()}},{name:"hide",handler:function(t){var e=t.target;this.$el===e?(ki=this.isActive()?null:ki,Kt(this.$el,"updatearia"),this.tracker.cancel()):ki=null===ki&&qt(e,this.$el)&&this.isToggled()?this:ki}},{name:"updatearia",self:!0,handler:function(t,e){t.preventDefault(),this.updateAria(this.$el),(e||this.toggle)&&(ot((e||this.toggle).$el,"aria-expanded",this.isToggled()),Le(this.toggle.$el,this.cls,this.isToggled()))}}],update:{write:function(){this.isToggled()&&!rn.inProgress(this.$el)&&this.position()},events:["resize"]},methods:{show:function(t,e){var n,i=this;if(void 0===t&&(t=this.toggle),void 0===e&&(e=!0),this.isToggled()&&t&&this.toggle&&t.$el!==this.toggle.$el&&this.hide(!1),this.toggle=t,this.clearTimers(),!this.isActive()){if(ki){if(e&&ki.isDelaying)return void(this.showTimer=setTimeout(this.show,10));for(;ki&&n!==ki&&!qt(this.$el,ki.$el);)(n=ki).hide(!1)}this.showTimer=setTimeout(function(){return!i.isToggled()&&i.toggleElement(i.$el,!0)},e&&this.delayShow||0)}},hide:function(t){var e=this;void 0===t&&(t=!0);function n(){return e.toggleElement(e.$el,!1,!1)}var i,r;this.clearTimers(),this.isDelaying=(i=this.$el,r=[],Ae(i,function(t){return"static"!==Re(t,"position")&&r.push(t)}),r.some(function(t){return e.tracker.movesTo(t)})),t&&this.isDelaying?this.hideTimer=setTimeout(this.hide,50):t&&this.delayHide?this.hideTimer=setTimeout(n,this.delayHide):n()},clearTimers:function(){clearTimeout(this.showTimer),clearTimeout(this.hideTimer),this.showTimer=null,this.hideTimer=null,this.isDelaying=!1},isActive:function(){return ki===this},position:function(){Be(this.$el,this.clsDrop+"-stack"),Le(this.$el,this.clsDrop+"-boundary",this.boundaryAlign);var t,e=an(this.boundary),n=this.boundaryAlign?e:an(this.toggle.$el);"justify"===this.align?(t="y"===this.getAxis()?"width":"height",Re(this.$el,t,n[t])):this.$el.offsetWidth>Math.max(e.right-n.left,n.right-e.left)&&ze(this.$el,this.clsDrop+"-stack"),this.positionAt(this.$el,this.boundaryAlign?this.boundary:this.toggle.$el,this.boundary)}}};var Si={mixins:[pi],args:"target",props:{target:Boolean},data:{target:!1},computed:{input:function(t,e){return Ne(Wt,e)},state:function(){return this.input.nextElementSibling},target:function(t,e){var n=t.target;return n&&(!0===n&&this.input.parentNode===e&&this.input.nextElementSibling||yt(n,e))}},update:function(){var t,e,n,i=this.target,r=this.input;!i||i[e=Vt(i)?"value":"textContent"]!==(n=r.files&&r.files[0]?r.files[0].name:Dt(r,"select")&&(t=Me("option",r).filter(function(t){return t.selected})[0])?t.textContent:r.value)&&(i[e]=n)},events:[{name:"change",handler:function(){this.$update()}},{name:"reset",el:function(){return Bt(this.$el,"form")},handler:function(){this.$update()}}]},Ti={update:{read:function(t){var e=Rn(this.$el);if(!e||t.isInView===e)return!1;t.isInView=e},write:function(){this.$el.src=""+this.$el.src},events:["scroll","resize"]}},Ei={props:{margin:String,firstColumn:Boolean},data:{margin:"uk-margin-small-top",firstColumn:"uk-first-column"},update:{read:function(){var n,t=_i(this.$el.children);return{rows:t,columns:(n=[[]],t.forEach(function(t){return Ci(t,"left","right").forEach(function(t,e){return n[e]=n[e]?n[e].concat(t):t})}),lt?n.reverse():n)}},write:function(t){var n=this,i=t.columns;t.rows.forEach(function(t,e){return t.forEach(function(t){Le(t,n.margin,0!==e),Le(t,n.firstColumn,b(i[0],t))})})},events:["resize"]}};function _i(t){return Ci(t,"top","bottom")}function Ci(t,e,n){for(var i=[[]],r=0;r<t.length;r++){var o=t[r];if(Ft(o))for(var s=Ai(o),a=i.length-1;0<=a;a--){var h=i[a];if(!h[0]){h.push(o);break}var u=void 0,u=h[0].offsetParent===o.offsetParent?Ai(h[0]):(s=Ai(o,!0),Ai(h[0],!0));if(s[e]>=u[n]-1&&s[e]!==u[e]){i.push([o]);break}if(s[n]-1>u[e]||s[e]===u[e]){h.push(o);break}if(0===a){i.unshift([o]);break}}}return i}function Ai(t,e){var n;void 0===e&&(e=!1);var i=t.offsetTop,r=t.offsetLeft,o=t.offsetHeight,s=t.offsetWidth;return e&&(i=(n=cn(t))[0],r=n[1]),{top:i,left:r,bottom:i+o,right:r+s}}var Ni={extends:Ei,mixins:[pi],name:"grid",props:{masonry:Boolean,parallax:Number},data:{margin:"uk-grid-margin",clsStack:"uk-grid-stack",masonry:!1,parallax:0},connected:function(){this.masonry&&ze(this.$el,"uk-flex-top uk-flex-wrap-top")},update:[{write:function(t){var e=t.columns;Le(this.$el,this.clsStack,e.length<2)},events:["resize"]},{read:function(t){var e=t.columns,n=t.rows,i=Yt(this.$el);if(!i.length||!this.masonry&&!this.parallax)return!1;var r,o,s,a,h,u=i.some(Qe.inProgress),c=!1,l=e.map(function(t){return t.reduce(function(t,e){return t+e.offsetHeight},0)}),d=(r=i,o=this.margin,F((s=r.filter(function(t){return He(t,o)})[0])?Re(s,"marginTop"):Re(r[0],"paddingLeft"))*(n.length-1)),f=Math.max.apply(Math,l)+d;this.masonry&&(e=e.map(function(t){return Z(t,"offsetTop")}),a=e,h=n.map(function(t){return Math.max.apply(Math,t.map(function(t){return t.offsetHeight}))}),c=a.map(function(n){var i=0;return n.map(function(t,e){return i+=e?h[e-1]-n[e-1].offsetHeight:0})}));var p=Math.abs(this.parallax);return{padding:p=p&&l.reduce(function(t,e,n){return Math.max(t,e+d+(n%2?p:p/8)-f)},0),columns:e,translates:c,height:!u&&(this.masonry?f:"")}},write:function(t){var e=t.height,n=t.padding;Re(this.$el,"paddingBottom",n||""),!1!==e&&Re(this.$el,"height",e)},events:["resize"]},{read:function(t){var e=t.height;return{scrolled:!!this.parallax&&Yn(this.$el,e?e-ln(this.$el):0)*Math.abs(this.parallax)}},write:function(t){var e=t.columns,i=t.scrolled,r=t.translates;!1===i&&!r||e.forEach(function(t,n){return t.forEach(function(t,e){return Re(t,"transform",i||r?"translateY("+((r&&-r[n][e])+(i?n%2?i:i/8:0))+"px)":"")})})},events:["scroll","resize"]}]};var Mi=ct?{props:{selMinHeight:String},data:{selMinHeight:!1,forceHeight:!1},computed:{elements:function(t,e){var n=t.selMinHeight;return n?Me(n,e):[e]}},update:[{read:function(){Re(this.elements,"height","")},order:-5,events:["resize"]},{write:function(){var n=this;this.elements.forEach(function(t){var e=F(Re(t,"minHeight"));e&&(n.forceHeight||Math.round(e+pn(t,"height","content-box"))>=t.offsetHeight)&&Re(t,"height",e)})},order:5,events:["resize"]}]}:{},Di={mixins:[Mi],args:"target",props:{target:String,row:Boolean},data:{target:"> *",row:!0,forceHeight:!0},computed:{elements:function(t,e){return Me(t.target,e)}},update:{read:function(){return{rows:(this.row?_i(this.elements):[this.elements]).map(zi)}},write:function(t){t.rows.forEach(function(t){var n=t.heights;return t.elements.forEach(function(t,e){return Re(t,"minHeight",n[e])})})},events:["resize"]}};function zi(t){var e;if(t.length<2)return{heights:[""],elements:t};var n=Bi(t),i=n.heights,r=n.max,o=t.some(function(t){return t.style.minHeight}),s=t.some(function(t,e){return!t.style.minHeight&&i[e]<r});return o&&s&&(Re(t,"minHeight",""),e=Bi(t),i=e.heights,r=e.max),{heights:i=t.map(function(t,e){return i[e]===r&&F(t.style.minHeight).toFixed(2)!==r.toFixed(2)?"":r}),elements:t}}function Bi(t){var e=t.map(function(t){return an(t).height-pn(t,"height","content-box")});return{heights:e,max:Math.max.apply(null,e)}}var Pi={mixins:[Mi],props:{expand:Boolean,offsetTop:Boolean,offsetBottom:Boolean,minHeight:Number},data:{expand:!1,offsetTop:!1,offsetBottom:!1,minHeight:0},update:{read:function(t){var e=t.minHeight;if(!Ft(this.$el))return!1;var n="",i=pn(this.$el,"height","content-box");if(this.expand){if(this.$el.dataset.heightExpand="",Ne("[data-height-expand]")!==this.$el)return!1;n=ln(window)-(Oi(document.documentElement)-Oi(this.$el))-i||""}else{var r,n="calc(100vh";this.offsetTop&&(n+=0<(r=an(this.$el).top)&&r<ln(window)/2?" - "+r+"px":""),!0===this.offsetBottom?n+=" - "+Oi(this.$el.nextElementSibling)+"px":P(this.offsetBottom)?n+=" - "+this.offsetBottom+"vh":this.offsetBottom&&u(this.offsetBottom,"px")?n+=" - "+F(this.offsetBottom)+"px":z(this.offsetBottom)&&(n+=" - "+Oi(yt(this.offsetBottom,this.$el))+"px"),n+=(i?" - "+i+"px":"")+")"}return{minHeight:n,prev:e}},write:function(t){var e=t.minHeight,n=t.prev;Re(this.$el,{minHeight:e}),e!==n&&this.$update(this.$el,"resize"),this.minHeight&&F(Re(this.$el,"minHeight"))<this.minHeight&&Re(this.$el,"minHeight",this.minHeight)},events:["resize"]}};function Oi(t){return t&&an(t).height||0}var Hi={args:"src",props:{id:Boolean,icon:String,src:String,style:String,width:Number,height:Number,ratio:Number,class:String,strokeAnimation:Boolean,focusable:Boolean,attributes:"list"},data:{ratio:1,include:["style","class","focusable"],class:"",strokeAnimation:!1},beforeConnect:function(){this.class+=" uk-svg"},connected:function(){var t,e=this;!this.icon&&b(this.src,"#")&&(t=this.src.split("#"),this.src=t[0],this.icon=t[1]),this.svg=this.getSvg().then(function(t){return e.applyAttributes(t),e.svgEl=function(t,e){if(jt(e)||"CANVAS"===e.tagName){e.hidden=!0;var n=e.nextElementSibling;return Vi(t,n)?n:ye(e,t)}var i=e.lastElementChild;return Vi(t,i)?i:be(e,t)}(t,e.$el)},et)},disconnected:function(){var e=this;jt(this.$el)&&(this.$el.hidden=!1),this.svg&&this.svg.then(function(t){return(!e._connected||t!==e.svgEl)&&$e(t)},et),this.svg=this.svgEl=null},update:{read:function(){return!!(this.strokeAnimation&&this.svgEl&&Ft(this.svgEl))},write:function(){var t,e;t=this.svgEl,(e=Wi(t))&&t.style.setProperty("--uk-animation-stroke",e)},type:["resize"]},methods:{getSvg:function(){var e=this;return function(n){if(Li[n])return Li[n];return Li[n]=new ae(function(e,t){n?w(n,"data:")?e(decodeURIComponent(n.split(",")[1])):de(n).then(function(t){return e(t.response)},function(){return t("SVG not found.")}):t()})}(this.src).then(function(t){return function(t,e){e&&b(t,"<symbol")&&(t=function(t,e){if(!Fi[t]){var n;for(Fi[t]={},ji.lastIndex=0;n=ji.exec(t);)Fi[t][n[3]]='<svg xmlns="http://www.w3.org/2000/svg"'+n[1]+"svg>"}return Fi[t][e]}(t,e)||t);return(t=Ne(t.substr(t.indexOf("<svg"))))&&t.hasChildNodes()&&t}(t,e.icon)||ae.reject("SVG not found.")})},applyAttributes:function(n){var t,e,i=this;for(t in this.$options.props)this[t]&&b(this.include,t)&&ot(n,t,this[t]);for(e in this.attributes){var r=this.attributes[e].split(":",2),o=r[0],s=r[1];ot(n,o,s)}this.id||at(n,"id");var a=["width","height"],h=[this.width,this.height];h.some(function(t){return t})||(h=a.map(function(t){return ot(n,t)}));var u=ot(n,"viewBox");u&&!h.some(function(t){return t})&&(h=u.split(" ").slice(2)),h.forEach(function(t,e){(t=(0|t)*i.ratio)&&ot(n,a[e],t),t&&!h[1^e]&&at(n,a[1^e])}),ot(n,"data-svg",this.icon||this.src)}}},Li={};var ji=/<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,Fi={};function Wi(t){return Math.ceil(Math.max.apply(Math,[0].concat(Me("[stroke]",t).map(function(t){try{return t.getTotalLength()}catch(t){return 0}}))))}function Vi(t,e){return ot(t,"data-svg")===ot(e,"data-svg")}var Ri={spinner:'<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',totop:'<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',marker:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',"close-icon":'<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',"close-large":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',"navbar-toggle-icon":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',"overlay-icon":'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',"pagination-next":'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',"pagination-previous":'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',"search-icon":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',"search-large":'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',"search-navbar":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',"slidenav-next":'<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',"slidenav-next-large":'<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',"slidenav-previous":'<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',"slidenav-previous-large":'<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'},qi={install:function(r){r.icon.add=function(t,e){var n,i=z(t)?((n={})[t]=e,n):t;K(i,function(t,e){Ri[e]=t,delete Ki[e]}),r._initialized&&Ae(document.body,function(t){return K(r.getComponents(t),function(t){t.$options.isIcon&&t.icon in i&&t.$reset()})})}},extends:Hi,args:"icon",props:["icon"],data:{include:["focusable"]},isIcon:!0,beforeConnect:function(){ze(this.$el,"uk-icon")},methods:{getSvg:function(){var t=function(t){if(!Ri[t])return null;Ki[t]||(Ki[t]=Ne((Ri[function(t){return lt?X(X(t,"left","right"),"previous","next"):t}(t)]||Ri[t]).trim()));return Ki[t].cloneNode(!0)}(this.icon);return t?ae.resolve(t):ae.reject("Icon not found.")}}},Ui={args:!1,extends:qi,data:function(t){return{icon:d(t.constructor.options.name)}},beforeConnect:function(){ze(this.$el,this.$name)}},Yi={extends:Ui,beforeConnect:function(){ze(this.$el,"uk-slidenav")},computed:{icon:function(t,e){var n=t.icon;return He(e,"uk-slidenav-large")?n+"-large":n}}},Xi={extends:Ui,computed:{icon:function(t,e){var n=t.icon;return He(e,"uk-search-icon")&&Ut(e,".uk-search-large").length?"search-large":Ut(e,".uk-search-navbar").length?"search-navbar":n}}},Gi={extends:Ui,computed:{icon:function(){return"close-"+(He(this.$el,"uk-close-large")?"large":"icon")}}},Ji={extends:Ui,connected:function(){var e=this;this.svg.then(function(t){return 1!==e.ratio&&Re(Ne("circle",t),"strokeWidth",1/e.ratio)},et)}},Ki={};var Zi={args:"dataSrc",props:{dataSrc:String,dataSrcset:Boolean,sizes:String,width:Number,height:Number,offsetTop:String,offsetLeft:String,target:String},data:{dataSrc:"",dataSrcset:!1,sizes:!1,width:!1,height:!1,offsetTop:"50vh",offsetLeft:0,target:!1},computed:{cacheKey:function(t){var e=t.dataSrc;return this.$name+"."+e},width:function(t){var e=t.width,n=t.dataWidth;return e||n},height:function(t){var e=t.height,n=t.dataHeight;return e||n},sizes:function(t){var e=t.sizes,n=t.dataSizes;return e||n},isImg:function(t,e){return or(e)},target:{get:function(t){var e=t.target;return[this.$el].concat(kt(e,this.$el))},watch:function(){this.observe()}},offsetTop:function(t){return bn(t.offsetTop,"height")},offsetLeft:function(t){return bn(t.offsetLeft,"width")}},connected:function(){ar[this.cacheKey]?Qi(this.$el,ar[this.cacheKey],this.dataSrcset,this.sizes):this.isImg&&this.width&&this.height&&Qi(this.$el,function(t,e,n){var i;n&&(i=rt.ratio({width:t,height:e},"width",bn(er(n))),t=i.width,e=i.height);return'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+e+'"></svg>'}(this.width,this.height,this.sizes)),this.observer=new Zn(this.load,{rootMargin:this.offsetTop+"px "+this.offsetLeft+"px"}),requestAnimationFrame(this.observe)},disconnected:function(){this.observer.disconnect()},update:{read:function(t){var e=this,n=t.image;if(n||"complete"!==document.readyState||this.load(this.observer.takeRecords()),this.isImg)return!1;n&&n.then(function(t){return t&&""!==t.currentSrc&&Qi(e.$el,sr(t))})},write:function(t){var e,n,i,r,o;this.dataSrcset&&1!==window.devicePixelRatio&&(!(e=Re(this.$el,"backgroundSize")).match(/^(auto\s?)+$/)&&F(e)!==t.bgSize||(t.bgSize=(n=this.dataSrcset,i=this.sizes,r=bn(er(i)),(o=(n.match(rr)||[]).map(F).sort(function(t,e){return t-e})).filter(function(t){return r<=t})[0]||o.pop()||""),Re(this.$el,"backgroundSize",t.bgSize+"px")))},events:["resize"]},methods:{load:function(t){var e=this;t.some(function(t){return H(t.isIntersecting)||t.isIntersecting})&&(this._data.image=fe(this.dataSrc,this.dataSrcset,this.sizes).then(function(t){return Qi(e.$el,sr(t),t.srcset,t.sizes),ar[e.cacheKey]=sr(t),t},function(t){return Kt(e.$el,new t.constructor(t.type,t))}),this.observer.disconnect())},observe:function(){var e=this;this._connected&&!this._data.image&&this.target.forEach(function(t){return e.observer.observe(t)})}}};function Qi(t,e,n,i){or(t)?(i&&(t.sizes=i),n&&(t.srcset=n),e&&(t.src=e)):e&&!b(t.style.backgroundImage,e)&&(Re(t,"backgroundImage","url("+Ht(e)+")"),Kt(t,Zt("load",!1)))}var tr=/\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;function er(t){var e,n;for(tr.lastIndex=0;e=tr.exec(t);)if(!e[1]||window.matchMedia(e[1]).matches){e=w(n=e[2],"calc")?n.substring(5,n.length-1).replace(nr,function(t){return bn(t)}).replace(/ /g,"").match(ir).reduce(function(t,e){return t+ +e},0):n;break}return e||"100vw"}var nr=/\d+(?:\w+|%)/g,ir=/[+-]?(\d+)/g;var rr=/\s+\d+w\s*(?:,|$)/g;function or(t){return"IMG"===t.tagName}function sr(t){return t.currentSrc||t.src}var ar,hr="__test__";try{(ar=window.sessionStorage||{})[hr]=1,delete ar[hr]}catch(t){ar={}}var ur={props:{media:Boolean},data:{media:!1},computed:{matchMedia:function(){var t=function(t){if(z(t)){if("@"===t[0])t=F(Xe("breakpoint-"+t.substr(1)));else if(isNaN(t))return t}return!(!t||isNaN(t))&&"(min-width: "+t+"px)"}(this.media);return!t||window.matchMedia(t).matches}}};var cr={mixins:[pi,ur],props:{fill:String},data:{fill:"",clsWrapper:"uk-leader-fill",clsHide:"uk-leader-hide",attrFill:"data-fill"},computed:{fill:function(t){return t.fill||Xe("leader-fill-content")}},connected:function(){var t=Se(this.$el,'<span class="'+this.clsWrapper+'">');this.wrapper=t[0]},disconnected:function(){Te(this.wrapper.childNodes)},update:{read:function(t){var e=t.changed,n=t.width,i=n;return{width:n=Math.floor(this.$el.offsetWidth/2),fill:this.fill,changed:e||i!==n,hide:!this.matchMedia}},write:function(t){Le(this.wrapper,this.clsHide,t.hide),t.changed&&(t.changed=!1,ot(this.wrapper,this.attrFill,new Array(t.width).join(t.fill)))},events:["resize"]}},lr={props:{container:Boolean},data:{container:!0},computed:{container:function(t){var e=t.container;return!0===e&&this.$container||e&&Ne(e)}}},dr=[],fr={mixins:[pi,lr,gi],props:{selPanel:String,selClose:String,escClose:Boolean,bgClose:Boolean,stack:Boolean},data:{cls:"uk-open",escClose:!0,bgClose:!0,overlay:!0,stack:!1},computed:{panel:function(t,e){return Ne(t.selPanel,e)},transitionElement:function(){return this.panel},bgClose:function(t){return t.bgClose&&this.panel}},beforeDisconnect:function(){this.isToggled()&&this.toggleElement(this.$el,!1,!1)},events:[{name:"click",delegate:function(){return this.selClose},handler:function(t){t.preventDefault(),this.hide()}},{name:"toggle",self:!0,handler:function(t){t.defaultPrevented||(t.preventDefault(),this.isToggled()===b(dr,this)&&this.toggle())}},{name:"beforeshow",self:!0,handler:function(t){if(b(dr,this))return!1;!this.stack&&dr.length?(ae.all(dr.map(function(t){return t.hide()})).then(this.show),t.preventDefault()):dr.push(this)}},{name:"show",self:!0,handler:function(){var o=this;dn(window)-dn(document)&&this.overlay&&Re(document.body,"overflowY","scroll"),this.stack&&Re(this.$el,"zIndex",F(Re(this.$el,"zIndex"))+dr.length),ze(document.documentElement,this.clsPage),this.bgClose&&Jt(this.$el,"hide",Xt(document,gt,function(t){var r=t.target;J(dr)!==o||o.overlay&&!qt(r,o.$el)||qt(r,o.panel)||Jt(document,vt+" "+xt+" scroll",function(t){var e=t.defaultPrevented,n=t.type,i=t.target;e||n!==vt||r!==i||o.hide()},!0)}),{self:!0}),this.escClose&&Jt(this.$el,"hide",Xt(document,"keydown",function(t){27===t.keyCode&&J(dr)===o&&(t.preventDefault(),o.hide())}),{self:!0})}},{name:"hidden",self:!0,handler:function(){var e=this;dr.splice(dr.indexOf(this),1),dr.length||Re(document.body,"overflowY",""),Re(this.$el,"zIndex",""),dr.some(function(t){return t.clsPage===e.clsPage})||Be(document.documentElement,this.clsPage)}}],methods:{toggle:function(){return this.isToggled()?this.hide():this.show()},show:function(){var e=this;return this.container&&this.$el.parentNode!==this.container?(be(this.container,this.$el),new ae(function(t){return requestAnimationFrame(function(){return e.show().then(t)})})):this.toggleElement(this.$el,!0,pr(this))},hide:function(){return this.toggleElement(this.$el,!1,pr(this))}}};function pr(t){var s=t.transitionElement,a=t._toggle;return function(r,o){return new ae(function(n,i){return Jt(r,"show hide",function(){r._reject&&r._reject(),r._reject=i,a(r,o);var t=Jt(s,"transitionstart",function(){Jt(s,"transitionend transitioncancel",n,{self:!0}),clearTimeout(e)},{self:!0}),e=setTimeout(function(){t(),n()},U(Re(s,"transitionDuration")))})})}}var gr={install:function(t){var a=t.modal;function e(t,e,n,i){e=G({bgClose:!1,escClose:!0,labels:a.labels},e);var r=a.dialog(t(e),e),o=new se,s=!1;return Xt(r.$el,"submit","form",function(t){t.preventDefault(),o.resolve(i&&i(r)),s=!0,r.hide()}),Xt(r.$el,"hide",function(){return!s&&n(o)}),o.promise.dialog=r,o.promise}a.dialog=function(t,e){var n=a('<div class="uk-modal"> <div class="uk-modal-dialog">'+t+"</div> </div>",e);return n.show(),Xt(n.$el,"hidden",function(){return ae.resolve().then(function(){return n.$destroy(!0)})},{self:!0}),n},a.alert=function(n,t){return e(function(t){var e=t.labels;return'<div class="uk-modal-body">'+(z(n)?n:we(n))+'</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>'+e.ok+"</button> </div>"},t,function(t){return t.resolve()})},a.confirm=function(n,t){return e(function(t){var e=t.labels;return'<form> <div class="uk-modal-body">'+(z(n)?n:we(n))+'</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">'+e.cancel+'</button> <button class="uk-button uk-button-primary" autofocus>'+e.ok+"</button> </div> </form>"},t,function(t){return t.reject()})},a.prompt=function(n,i,t){return e(function(t){var e=t.labels;return'<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>'+(z(n)?n:we(n))+'</label> <input class="uk-input" value="'+(i||"")+'" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">'+e.cancel+'</button> <button class="uk-button uk-button-primary">'+e.ok+"</button> </div> </form>"},t,function(t){return t.resolve(null)},function(t){return Ne("input",t.$el).value})},a.labels={ok:"Ok",cancel:"Cancel"}},mixins:[fr],data:{clsPage:"uk-modal-page",selPanel:".uk-modal-dialog",selClose:".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"},events:[{name:"show",self:!0,handler:function(){He(this.panel,"uk-margin-auto-vertical")?ze(this.$el,"uk-flex"):Re(this.$el,"display","block"),ln(this.$el)}},{name:"hidden",self:!0,handler:function(){Re(this.$el,"display",""),Be(this.$el,"uk-flex")}}]};var mr={extends:vi,data:{targets:"> .uk-parent",toggle:"> a",content:"> ul"}},vr={mixins:[pi,Mi],props:{dropdown:String,mode:"list",align:String,offset:Number,boundary:Boolean,boundaryAlign:Boolean,clsDrop:String,delayShow:Number,delayHide:Number,dropbar:Boolean,dropbarMode:String,dropbarAnchor:Boolean,duration:Number},data:{dropdown:".uk-navbar-nav > li",align:lt?"right":"left",clsDrop:"uk-navbar-dropdown",mode:void 0,offset:void 0,delayShow:void 0,delayHide:void 0,boundaryAlign:void 0,flip:"x",boundary:!0,dropbar:!1,dropbarMode:"slide",dropbarAnchor:!1,duration:200,forceHeight:!0,selMinHeight:".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle"},computed:{boundary:function(t,e){var n=t.boundary,i=t.boundaryAlign;return!0===n||i?e:n},dropbarAnchor:function(t,e){return yt(t.dropbarAnchor,e)},pos:function(t){return"bottom-"+t.align},dropbar:{get:function(t){var e=t.dropbar;return e?(e=this._dropbar||yt(e,this.$el)||Ne("+ .uk-navbar-dropbar",this.$el))||(this._dropbar=Ne("<div></div>")):null},watch:function(t){ze(t,"uk-navbar-dropbar")},immediate:!0},dropdowns:{get:function(t,e){return Me(t.dropdown+" ."+t.clsDrop,e)},watch:function(t){var e=this;this.$create("drop",t.filter(function(t){return!e.getDropdown(t)}),G({},this.$props,{boundary:this.boundary,pos:this.pos,offset:this.dropbar||this.offset}))},immediate:!0}},disconnected:function(){this.dropbar&&$e(this.dropbar),delete this._dropbar},events:[{name:"mouseover",delegate:function(){return this.dropdown},handler:function(t){var e=t.current,n=this.getActive();n&&n.toggle&&!qt(n.toggle.$el,e)&&!n.tracker.movesTo(n.$el)&&n.hide(!1)}},{name:"mouseleave",el:function(){return this.dropbar},handler:function(){var t=this.getActive();t&&!this.dropdowns.some(function(t){return Dt(t,":hover")})&&t.hide()}},{name:"beforeshow",capture:!0,filter:function(){return this.dropbar},handler:function(){this.dropbar.parentNode||ye(this.dropbarAnchor||this.$el,this.dropbar)}},{name:"show",filter:function(){return this.dropbar},handler:function(t,e){var n=e.$el,i=e.dir;He(n,this.clsDrop)&&("slide"===this.dropbarMode&&ze(this.dropbar,"uk-navbar-dropbar-slide"),this.clsDrop&&ze(n,this.clsDrop+"-dropbar"),"bottom"===i&&this.transitionTo(n.offsetHeight+F(Re(n,"marginTop"))+F(Re(n,"marginBottom")),n))}},{name:"beforehide",filter:function(){return this.dropbar},handler:function(t,e){var n=e.$el,i=this.getActive();Dt(this.dropbar,":hover")&&i&&i.$el===n&&t.preventDefault()}},{name:"hide",filter:function(){return this.dropbar},handler:function(t,e){var n,i=e.$el;!He(i,this.clsDrop)||(!(n=this.getActive())||n&&n.$el===i)&&this.transitionTo(0)}}],methods:{getActive:function(){var t=this.dropdowns.map(this.getDropdown).filter(function(t){return t&&t.isActive()})[0];return t&&b(t.mode,"hover")&&qt(t.toggle.$el,this.$el)&&t},transitionTo:function(t,e){var n=this,i=this.dropbar,r=Ft(i)?ln(i):0;return Re(e=r<t&&e,"clip","rect(0,"+e.offsetWidth+"px,"+r+"px,0)"),ln(i,r),Qe.cancel([e,i]),ae.all([Qe.start(i,{height:t},this.duration),Qe.start(e,{clip:"rect(0,"+e.offsetWidth+"px,"+t+"px,0)"},this.duration)]).catch(et).then(function(){Re(e,{clip:""}),n.$update(i)})},getDropdown:function(t){return this.$getComponent(t,"drop")||this.$getComponent(t,"dropdown")}}},wr={mixins:[fr],args:"mode",props:{mode:String,flip:Boolean,overlay:Boolean},data:{mode:"slide",flip:!1,overlay:!1,clsPage:"uk-offcanvas-page",clsContainer:"uk-offcanvas-container",selPanel:".uk-offcanvas-bar",clsFlip:"uk-offcanvas-flip",clsContainerAnimation:"uk-offcanvas-container-animation",clsSidebarAnimation:"uk-offcanvas-bar-animation",clsMode:"uk-offcanvas",clsOverlay:"uk-offcanvas-overlay",selClose:".uk-offcanvas-close",container:!1},computed:{clsFlip:function(t){var e=t.flip,n=t.clsFlip;return e?n:""},clsOverlay:function(t){var e=t.overlay,n=t.clsOverlay;return e?n:""},clsMode:function(t){var e=t.mode;return t.clsMode+"-"+e},clsSidebarAnimation:function(t){var e=t.mode,n=t.clsSidebarAnimation;return"none"===e||"reveal"===e?"":n},clsContainerAnimation:function(t){var e=t.mode,n=t.clsContainerAnimation;return"push"!==e&&"reveal"!==e?"":n},transitionElement:function(t){return"reveal"===t.mode?this.panel.parentNode:this.panel}},events:[{name:"click",delegate:function(){return'a[href^="#"]'},handler:function(t){var e=t.current.hash;!t.defaultPrevented&&e&&Ne(e,document.body)&&this.hide()}},{name:"touchstart",passive:!0,el:function(){return this.panel},handler:function(t){var e=t.targetTouches;1===e.length&&(this.clientY=e[0].clientY)}},{name:"touchmove",self:!0,passive:!1,filter:function(){return this.overlay},handler:function(t){t.cancelable&&t.preventDefault()}},{name:"touchmove",passive:!1,el:function(){return this.panel},handler:function(t){var e,n,i,r,o;1===t.targetTouches.length&&(e=event.targetTouches[0].clientY-this.clientY,i=(n=this.panel).scrollTop,((r=n.scrollHeight)<=(o=n.clientHeight)||0===i&&0<e||r-i<=o&&e<0)&&t.cancelable&&t.preventDefault())}},{name:"show",self:!0,handler:function(){"reveal"!==this.mode||He(this.panel.parentNode,this.clsMode)||(Ie(this.panel,"<div>"),ze(this.panel.parentNode,this.clsMode)),Re(document.documentElement,"overflowY",this.overlay?"hidden":""),ze(document.body,this.clsContainer,this.clsFlip),Re(document.body,"touch-action","pan-y pinch-zoom"),Re(this.$el,"display","block"),ze(this.$el,this.clsOverlay),ze(this.panel,this.clsSidebarAnimation,"reveal"!==this.mode?this.clsMode:""),ln(document.body),ze(document.body,this.clsContainerAnimation),this.clsContainerAnimation&&(br().content+=",user-scalable=0")}},{name:"hide",self:!0,handler:function(){Be(document.body,this.clsContainerAnimation),Re(document.body,"touch-action","")}},{name:"hidden",self:!0,handler:function(){var t;this.clsContainerAnimation&&((t=br()).content=t.content.replace(/,user-scalable=0$/,"")),"reveal"===this.mode&&Te(this.panel),Be(this.panel,this.clsSidebarAnimation,this.clsMode),Be(this.$el,this.clsOverlay),Re(this.$el,"display",""),Be(document.body,this.clsContainer,this.clsFlip),Re(document.documentElement,"overflowY","")}},{name:"swipeLeft swipeRight",handler:function(t){this.isToggled()&&u(t.type,"Left")^this.flip&&this.hide()}}]};function br(){return Ne('meta[name="viewport"]',document.head)||be(document.head,'<meta name="viewport">')}var xr={mixins:[pi],props:{selContainer:String,selContent:String},data:{selContainer:".uk-modal",selContent:".uk-modal-dialog"},computed:{container:function(t,e){return Bt(e,t.selContainer)},content:function(t,e){return Bt(e,t.selContent)}},connected:function(){Re(this.$el,"minHeight",150)},update:{read:function(){return!(!this.content||!this.container)&&{current:F(Re(this.$el,"maxHeight")),max:Math.max(150,ln(this.container)-(an(this.content).height-ln(this.$el)))}},write:function(t){var e=t.current,n=t.max;Re(this.$el,"maxHeight",n),Math.round(e)!==Math.round(n)&&Kt(this.$el,"resize")},events:["resize"]}},yr={props:["width","height"],connected:function(){ze(this.$el,"uk-responsive-width")},update:{read:function(){return!!(Ft(this.$el)&&this.width&&this.height)&&{width:dn(this.$el.parentNode),height:this.height}},write:function(t){ln(this.$el,rt.contain({height:this.height,width:this.width},t).height)},events:["resize"]}},kr={props:{offset:Number},data:{offset:0},methods:{scrollTo:function(t){var e=this;t=t&&Ne(t)||document.body,Kt(this.$el,"beforescroll",[this,t])&&Un(t,{offset:this.offset}).then(function(){return Kt(e.$el,"scrolled",[e,t])})}},events:{click:function(t){t.defaultPrevented||(t.preventDefault(),this.scrollTo(Ht(decodeURIComponent(this.$el.hash)).substr(1)))}}},$r="_ukScrollspy",Ir={args:"cls",props:{cls:String,target:String,hidden:Boolean,offsetTop:Number,offsetLeft:Number,repeat:Boolean,delay:Number},data:function(){return{cls:!1,target:!1,hidden:!0,offsetTop:0,offsetLeft:0,repeat:!1,delay:0,inViewClass:"uk-scrollspy-inview"}},computed:{elements:{get:function(t,e){var n=t.target;return n?Me(n,e):[e]},watch:function(t){this.hidden&&Re(Rt(t,":not(."+this.inViewClass+")"),"visibility","hidden")},immediate:!0}},update:[{read:function(t){var e=this;t.update&&this.elements.forEach(function(t){t[$r]||(t[$r]={cls:ht(t,"uk-scrollspy-class")||e.cls}),t[$r].show=Rn(t,e.offsetTop,e.offsetLeft)})},write:function(i){var r=this;if(!i.update)return this.$emit(),i.update=!0;this.elements.forEach(function(e){function t(t){Re(e,"visibility",!t&&r.hidden?"hidden":""),Le(e,r.inViewClass,t),Le(e,n.cls),Kt(e,t?"inview":"outview"),n.inview=t,r.$update(e)}var n=e[$r];!n.show||n.inview||n.queued?!n.show&&n.inview&&!n.queued&&r.repeat&&t(!1):(n.queued=!0,i.promise=(i.promise||ae.resolve()).then(function(){return new ae(function(t){return setTimeout(t,r.delay)})}).then(function(){t(!0),setTimeout(function(){n.queued=!1,r.$emit()},300)}))})},events:["scroll","resize"]}]},Sr={props:{cls:String,closest:String,scroll:Boolean,overflow:Boolean,offset:Number},data:{cls:"uk-active",closest:!1,scroll:!1,overflow:!0,offset:0},computed:{links:{get:function(t,e){return Me('a[href^="#"]',e).filter(function(t){return t.hash})},watch:function(t){this.scroll&&this.$create("scroll",t,{offset:this.offset||0})},immediate:!0},targets:function(){return Me(this.links.map(function(t){return Ht(t.hash).substr(1)}).join(","))},elements:function(t){var e=t.closest;return Bt(this.links,e||"*")}},update:[{read:function(){var n=this,t=this.targets.length;if(!t||!Ft(this.$el))return!1;var e=J(Xn(this.targets[0])),i=e.scrollTop,r=e.scrollHeight,o=Gn(e),s=r-an(o).height,a=!1;return i===s?a=t-1:(this.targets.every(function(t,e){if(un(t,o).top-n.offset<=0)return a=e,!0}),!1===a&&this.overflow&&(a=0)),{active:a}},write:function(t){var e=t.active;this.links.forEach(function(t){return t.blur()}),Be(this.elements,this.cls),!1!==e&&Kt(this.$el,"active",[e,ze(this.elements[e],this.cls)])},events:["scroll","resize"]}]},Tr={mixins:[pi,ur],props:{top:null,bottom:Boolean,offset:String,animation:String,clsActive:String,clsInactive:String,clsFixed:String,clsBelow:String,selTarget:String,widthElement:Boolean,showOnUp:Boolean,targetOffset:Number},data:{top:0,bottom:!1,offset:0,animation:"",clsActive:"uk-active",clsInactive:"",clsFixed:"uk-sticky-fixed",clsBelow:"uk-sticky-below",selTarget:"",widthElement:!1,showOnUp:!1,targetOffset:!1},computed:{offset:function(t){return bn(t.offset)},selTarget:function(t,e){var n=t.selTarget;return n&&Ne(n,e)||e},widthElement:function(t,e){return yt(t.widthElement,e)||this.placeholder},isActive:{get:function(){return He(this.selTarget,this.clsActive)},set:function(t){t&&!this.isActive?(Oe(this.selTarget,this.clsInactive,this.clsActive),Kt(this.$el,"active")):t||He(this.selTarget,this.clsInactive)||(Oe(this.selTarget,this.clsActive,this.clsInactive),Kt(this.$el,"inactive"))}}},connected:function(){this.placeholder=Ne("+ .uk-sticky-placeholder",this.$el)||Ne('<div class="uk-sticky-placeholder"></div>'),this.isFixed=!1,this.isActive=!1},disconnected:function(){this.isFixed&&(this.hide(),Be(this.selTarget,this.clsInactive)),$e(this.placeholder),this.placeholder=null,this.widthElement=null},events:[{name:"load hashchange popstate",el:ut&&window,handler:function(){var i,r=this;!1!==this.targetOffset&&location.hash&&0<window.pageYOffset&&((i=Ne(location.hash))&&yn.read(function(){var t=an(i).top,e=an(r.$el).top,n=r.$el.offsetHeight;r.isFixed&&t<=e+n&&e<=t+i.offsetHeight&&qn(window,t-n-(P(r.targetOffset)?r.targetOffset:0)-r.offset)}))}}],update:[{read:function(t,e){var n=t.height;if(this.inactive=!this.matchMedia||!Ft(this.$el),this.inactive)return!1;this.isActive&&"update"!==e&&(this.hide(),n=this.$el.offsetHeight,this.show()),n=this.isActive?n:this.$el.offsetHeight,this.topOffset=an(this.isFixed?this.placeholder:this.$el).top,this.bottomOffset=this.topOffset+n;var i=Er("bottom",this);return this.top=Math.max(F(Er("top",this)),this.topOffset)-this.offset,this.bottom=i&&i-this.$el.offsetHeight,this.width=an(Ft(this.widthElement)?this.widthElement:this.$el).width,{height:n,top:cn(this.placeholder)[0],margins:Re(this.$el,["marginTop","marginBottom","marginLeft","marginRight"])}},write:function(t){var e=t.height,n=t.margins,i=this.placeholder;Re(i,G({height:e},n)),qt(i,document)||(ye(this.$el,i),i.hidden=!0),this.isActive=!!this.isActive},events:["resize"]},{read:function(t){var e=t.scroll;return void 0===e&&(e=0),this.scroll=window.pageYOffset,{dir:e<=this.scroll?"down":"up",scroll:this.scroll}},write:function(t,e){var n=this,i=Date.now(),r=t.initTimestamp;void 0===r&&(r=0);var o=t.dir,s=t.lastDir,a=t.lastScroll,h=t.scroll,u=t.top;if(!((t.lastScroll=h)<0||h===a&&"scroll"===e||this.showOnUp&&"scroll"!==e&&!this.isFixed||((300<i-r||o!==s)&&(t.initScroll=h,t.initTimestamp=i),t.lastDir=o,this.showOnUp&&!this.isFixed&&Math.abs(t.initScroll-h)<=30&&Math.abs(a-h)<=10)))if(this.inactive||h<this.top||this.showOnUp&&(h<=this.top||"down"===o&&"scroll"===e||"up"===o&&!this.isFixed&&h<=this.bottomOffset)){if(!this.isFixed)return void(rn.inProgress(this.$el)&&h<u&&(rn.cancel(this.$el),this.hide()));this.isFixed=!1,this.animation&&h>this.topOffset?(rn.cancel(this.$el),rn.out(this.$el,this.animation).then(function(){return n.hide()},et)):this.hide()}else this.isFixed?this.update():this.animation?(rn.cancel(this.$el),this.show(),rn.in(this.$el,this.animation).catch(et)):this.show()},events:["resize","scroll"]}],methods:{show:function(){this.isFixed=!0,this.update(),this.placeholder.hidden=!1},hide:function(){this.isActive=!1,Be(this.$el,this.clsFixed,this.clsBelow),Re(this.$el,{position:"",top:"",width:""}),this.placeholder.hidden=!0},update:function(){var t=0!==this.top||this.scroll>this.top,e=Math.max(0,this.offset);P(this.bottom)&&this.scroll>this.bottom-this.offset&&(e=this.bottom-this.scroll),Re(this.$el,{position:"fixed",top:e+"px",width:this.width}),this.isActive=t,Le(this.$el,this.clsBelow,this.scroll>this.bottomOffset),ze(this.$el,this.clsFixed)}}};function Er(t,e){var n=e.$props,i=e.$el,r=e[t+"Offset"],o=n[t];if(o)return z(o)&&o.match(/^-?\d/)?r+bn(o):an(!0===o?i.parentNode:yt(o,i)).bottom}var _r,Cr,Ar,Nr={mixins:[gi],args:"connect",props:{connect:String,toggle:String,active:Number,swiping:Boolean},data:{connect:"~.uk-switcher",toggle:"> * > :first-child",active:0,swiping:!0,cls:"uk-active",clsContainer:"uk-switcher",attrItem:"uk-switcher-item"},computed:{connects:{get:function(t,e){return kt(t.connect,e)},watch:function(t){var e=this;t.forEach(function(t){return e.updateAria(t.children)}),this.swiping&&Re(t,"touch-action","pan-y pinch-zoom")},immediate:!0},toggles:{get:function(t,e){return Me(t.toggle,e).filter(function(t){return!Dt(t,".uk-disabled *, .uk-disabled, [disabled]")})},watch:function(t){var e=this.index();this.show(~e&&e||t[this.active]||t[0])},immediate:!0},children:function(){var t=this;return Yt(this.$el).filter(function(e){return t.toggles.some(function(t){return qt(t,e)})})}},events:[{name:"click",delegate:function(){return this.toggle},handler:function(t){b(this.toggles,t.current)&&(t.preventDefault(),this.show(t.current))}},{name:"click",el:function(){return this.connects},delegate:function(){return"["+this.attrItem+"],[data-"+this.attrItem+"]"},handler:function(t){t.preventDefault(),this.show(ht(t.current,this.attrItem))}},{name:"swipeRight swipeLeft",filter:function(){return this.swiping},el:function(){return this.connects},handler:function(t){var e=t.type;this.show(u(e,"Left")?"next":"previous")}}],methods:{index:function(){var e=this;return y(this.children,function(t){return He(t,e.cls)})},show:function(t){var n=this,i=this.index(),r=me(t,this.toggles,i);i!==r&&(this.children.forEach(function(t,e){Le(t,n.cls,r===e),ot(n.toggles[e],"aria-expanded",r===e)}),this.connects.forEach(function(t){var e=t.children;return n.toggleElement(V(e).filter(function(t,e){return e!==r&&n.isToggled(t)}),!1,0<=i).then(function(){return n.toggleElement(e[r],!0,0<=i)})}))}}},Mr={mixins:[pi],extends:Nr,props:{media:Boolean},data:{media:960,attrItem:"uk-tab-item"},connected:function(){var t=He(this.$el,"uk-tab-left")?"uk-tab-left":!!He(this.$el,"uk-tab-right")&&"uk-tab-right";t&&this.$create("toggle",this.$el,{cls:t,mode:"media",media:this.media})}},Dr={mixins:[ur,gi],args:"target",props:{href:String,target:null,mode:"list",queued:Boolean},data:{href:!1,target:!1,mode:"click",queued:!0},computed:{target:{get:function(t,e){var n=t.href,i=t.target;return(i=kt(i||n,e)).length&&i||[e]},watch:function(){Kt(this.target,"updatearia",[this])},immediate:!0}},events:[{name:wt+" "+bt,filter:function(){return b(this.mode,"hover")},handler:function(t){re(t)||this.toggle("toggle"+(t.type===wt?"show":"hide"))}},{name:"click",filter:function(){return b(this.mode,"click")||pt&&b(this.mode,"hover")},handler:function(t){var e;(Bt(t.target,'a[href="#"], a[href=""]')||(e=Bt(t.target,"a[href]"))&&(this.cls&&!He(this.target,this.cls.split(" ")[0])||!Ft(this.target)||e.hash&&Dt(this.target,e.hash)))&&t.preventDefault(),this.toggle()}}],update:{read:function(){return!(!b(this.mode,"media")||!this.media)&&{match:this.matchMedia}},write:function(t){var e=t.match,n=this.isToggled(this.target);(e?!n:n)&&this.toggle()},events:["resize"]},methods:{toggle:function(t){var e,n=this;Kt(this.target,t||"toggle",[this])&&(this.queued?(e=this.target.filter(this.isToggled),this.toggleElement(e,!1).then(function(){return n.toggleElement(n.target.filter(function(t){return!b(e,t)}),!0)})):this.toggleElement(this.target))}}};K(Object.freeze({__proto__:null,Accordion:vi,Alert:bi,Cover:yi,Drop:Ii,Dropdown:Ii,FormCustom:Si,Gif:Ti,Grid:Ni,HeightMatch:Di,HeightViewport:Pi,Icon:qi,Img:Zi,Leader:cr,Margin:Ei,Modal:gr,Nav:mr,Navbar:vr,Offcanvas:wr,OverflowAuto:xr,Responsive:yr,Scroll:kr,Scrollspy:Ir,ScrollspyNav:Sr,Sticky:Tr,Svg:Hi,Switcher:Nr,Tab:Mr,Toggle:Dr,Video:xi,Close:Gi,Spinner:Ji,SlidenavNext:Yi,SlidenavPrevious:Yi,SearchIcon:Xi,Marker:Ui,NavbarToggleIcon:Ui,OverlayIcon:Ui,PaginationNext:Ui,PaginationPrevious:Ui,Totop:Ui}),function(t,e){return ti.component(e,t)}),ti.use(function(r){ut&&pe(function(){var e;r.update(),Xt(window,"load resize",function(){return r.update(null,"resize")}),Xt(document,"loadedmetadata load",function(t){var e=t.target;return r.update(e,"resize")},!0),Xt(window,"scroll",function(t){e||(e=!0,yn.write(function(){return e=!1}),r.update(null,t.type))},{passive:!0,capture:!0});var n,i=0;Xt(document,"animationstart",function(t){var e=t.target;(Re(e,"animationName")||"").match(/^uk-.*(left|right)/)&&(i++,Re(document.body,"overflowX","hidden"),setTimeout(function(){--i||Re(document.body,"overflowX","")},U(Re(e,"animationDuration"))+100))},!0),Xt(document,gt,function(t){var s,a;n&&n(),re(t)&&(s=oe(t),a="tagName"in t.target?t.target:t.target.parentNode,n=Jt(document,vt+" "+xt,function(t){var e=oe(t),r=e.x,o=e.y;(a&&r&&100<Math.abs(s.x-r)||o&&100<Math.abs(s.y-o))&&setTimeout(function(){var t,e,n,i;Kt(a,"swipe"),Kt(a,"swipe"+(t=s.x,e=s.y,n=r,i=o,Math.abs(t-n)>=Math.abs(e-i)?0<t-n?"Left":"Right":0<e-i?"Up":"Down"))})}))},{passive:!0})})}),Cr=(_r=ti).connect,Ar=_r.disconnect,ut&&window.MutationObserver&&yn.read(function(){document.body&&Ae(document.body,Cr);new MutationObserver(function(t){var r=[];t.forEach(function(t){return n=r,i=(e=t).target,void(("attributes"!==e.type?function(t){for(var e=t.addedNodes,n=t.removedNodes,i=0;i<e.length;i++)Ae(e[i],Cr);for(var r=0;r<n.length;r++)Ae(n[r],Ar);return 1}:function(t){var e=t.target,n=t.attributeName;if("href"===n)return 1;var i=Qn(n);if(!(i&&i in _r))return;if(st(e,n))return _r[i](e),1;var r=_r.getComponent(e,i);if(r)return r.$destroy(),1})(e)&&!n.some(function(t){return t.contains(i)})&&n.push(i.contains?i:i.parentNode));var e,n,i}),r.forEach(function(t){return _r.update(t)})}).observe(document,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),_r._initialized=!0});var zr={mixins:[pi],props:{date:String,clsWrapper:String},data:{date:"",clsWrapper:".uk-countdown-%unit%"},computed:{date:function(t){var e=t.date;return Date.parse(e)},days:function(t,e){return Ne(t.clsWrapper.replace("%unit%","days"),e)},hours:function(t,e){return Ne(t.clsWrapper.replace("%unit%","hours"),e)},minutes:function(t,e){return Ne(t.clsWrapper.replace("%unit%","minutes"),e)},seconds:function(t,e){return Ne(t.clsWrapper.replace("%unit%","seconds"),e)},units:function(){var e=this;return["days","hours","minutes","seconds"].filter(function(t){return e[t]})}},connected:function(){this.start()},disconnected:function(){var e=this;this.stop(),this.units.forEach(function(t){return ve(e[t])})},events:[{name:"visibilitychange",el:ut&&document,handler:function(){document.hidden?this.stop():this.start()}}],update:{write:function(){var t,e,i=this,r=(t=this.date,{total:e=t-Date.now(),seconds:e/1e3%60,minutes:e/1e3/60%60,hours:e/1e3/60/60%24,days:e/1e3/60/60/24});r.total<=0&&(this.stop(),r.days=r.hours=r.minutes=r.seconds=0),this.units.forEach(function(t){var e=(e=String(Math.floor(r[t]))).length<2?"0"+e:e,n=i[t];n.textContent!==e&&((e=e.split("")).length!==n.children.length&&we(n,e.map(function(){return"<span></span>"}).join("")),e.forEach(function(t,e){return n.children[e].textContent=t}))})}},methods:{start:function(){this.stop(),this.date&&this.units.length&&(this.$update(),this.timer=setInterval(this.$update,1e3))},stop:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}}};var Br,Pr="uk-animation-target",Or={props:{animation:Number},data:{animation:150},methods:{animate:function(t,i){var n=this;void 0===i&&(i=this.$el),function(){if(Br)return;(Br=be(document.head,"<style>").sheet).insertRule("."+Pr+" > * {\n            margin-top: 0 !important;\n            transform: none !important;\n        }",0)}();var r=Yt(i),o=r.map(function(t){return Hr(t,!0)}),e=ln(i),s=window.pageYOffset;t(),Qe.cancel(i),r.forEach(Qe.cancel),Lr(i),this.$update(i,"resize"),yn.flush();var a=ln(i),h=(r=r.concat(Yt(i).filter(function(t){return!b(r,t)}))).map(function(t,e){return!!(t.parentNode&&e in o)&&(o[e]?Ft(t)?jr(t):{opacity:0}:{opacity:Ft(t)?1:0})}),o=h.map(function(t,e){var n=r[e].parentNode===i&&(o[e]||Hr(r[e]));return n&&(t?"opacity"in t||(n.opacity%1?t.opacity=1:delete n.opacity):delete n.opacity),n});return ze(i,Pr),r.forEach(function(t,e){return o[e]&&Re(t,o[e])}),Re(i,{height:e,display:"block"}),qn(window,s),ae.all(r.map(function(t,e){return["top","left","height","width"].some(function(t){return o[e][t]!==h[e][t]})&&Qe.start(t,h[e],n.animation,"ease")}).concat(e!==a&&Qe.start(i,{height:a},this.animation,"ease"))).then(function(){r.forEach(function(t,e){return Re(t,{display:0===h[e].opacity?"none":"",zIndex:""})}),Lr(i),n.$update(i,"resize"),yn.flush()},et)}}};function Hr(t,e){var n=Re(t,"zIndex");return!!Ft(t)&&G({display:"",opacity:e?Re(t,"opacity"):"0",pointerEvents:"none",position:"absolute",zIndex:"auto"===n?ge(t):n},jr(t))}function Lr(t){Re(t.children,{height:"",left:"",opacity:"",pointerEvents:"",position:"",top:"",width:""}),Be(t,Pr),Re(t,{height:"",display:""})}function jr(t){var e=an(t),n=e.height,i=e.width,r=un(t);return{top:r.top,left:r.left,height:n,width:i}}var Fr={mixins:[Or],args:"target",props:{target:Boolean,selActive:Boolean},data:{target:null,selActive:!1,attrItem:"uk-filter-control",cls:"uk-active",animation:250},computed:{toggles:{get:function(t,e){t.attrItem;return Me("["+this.attrItem+"],[data-"+this.attrItem+"]",e)},watch:function(){var e,n=this;this.updateState(),!1!==this.selActive&&(e=Me(this.selActive,this.$el),this.toggles.forEach(function(t){return Le(t,n.cls,b(e,t))}))},immediate:!0},children:{get:function(t,e){return Me(t.target+" > *",e)},watch:function(t,e){var n,i;i=e,(n=t).length===i.length&&n.every(function(t){return~i.indexOf(t)})||this.updateState()}}},events:[{name:"click",delegate:function(){return"["+this.attrItem+"],[data-"+this.attrItem+"]"},handler:function(t){t.preventDefault(),this.apply(t.current)}}],methods:{apply:function(t){this.setState(Rr(t,this.attrItem,this.getState()))},getState:function(){var n=this;return this.toggles.filter(function(t){return He(t,n.cls)}).reduce(function(t,e){return Rr(e,n.attrItem,t)},{filter:{"":""},sort:[]})},setState:function(n,i){var r=this;void 0===i&&(i=!0),n=G({filter:{"":""},sort:[]},n),Kt(this.$el,"beforeFilter",[this,n]),this.toggles.forEach(function(t){return Le(t,r.cls,!!function(t,e,n){var i=n.filter;void 0===i&&(i={"":""});var r=n.sort,o=r[0],s=r[1],a=Wr(t,e),h=a.filter;void 0===h&&(h="");var u=a.group;void 0===u&&(u="");var c=a.sort,l=a.order;void 0===l&&(l="asc");return H(c)?u in i&&h===i[u]||!h&&u&&!(u in i)&&!i[""]:o===c&&s===l}(t,r.attrItem,n))}),ae.all(Me(this.target,this.$el).map(function(t){var e=Yt(t);return i?r.animate(function(){return Vr(n,t,e)},t):Vr(n,t,e)})).then(function(){return Kt(r.$el,"afterFilter",[r])})},updateState:function(){var t=this;yn.write(function(){return t.setState(t.getState(),!1)})}}};function Wr(t,e){return Mn(ht(t,e),["filter"])}function Vr(t,e,n){var i,r,o=(i=t.filter,r="",K(i,function(t){return r+=t||""}),r);n.forEach(function(t){return Re(t,"display",o&&!Dt(t,o)?"none":"")});var s,a,h,u=t.sort,c=u[0],l=u[1];c&&(a=c,h=l,Y(s=G([],n).sort(function(t,e){return ht(t,a).localeCompare(ht(e,a),void 0,{numeric:!0})*("asc"===h||-1)}),n)||be(e,s))}function Rr(t,e,n){var i=Wr(t,e),r=i.filter,o=i.group,s=i.sort,a=i.order;return void 0===a&&(a="asc"),(r||H(s))&&(o?r?(delete n.filter[""],n.filter[o]=r):(delete n.filter[o],(O(n.filter)||""in n.filter)&&(n.filter={"":r||""})):n.filter={"":r||""}),H(s)||(n.sort=[s,a]),n}var qr={slide:{show:function(t){return[{transform:Yr(-100*t)},{transform:Yr()}]},percent:Ur,translate:function(t,e){return[{transform:Yr(-100*e*t)},{transform:Yr(100*e*(1-t))}]}}};function Ur(t){return Math.abs(Re(t,"transform").split(",")[4]/t.offsetWidth)||0}function Yr(t,e){return void 0===t&&(t=0),void 0===e&&(e="%"),t+=t?e:"",ct?"translateX("+t+")":"translate3d("+t+", 0, 0)"}function Xr(t){return"scale3d("+t+", "+t+", 1)"}var Gr=G({},qr,{fade:{show:function(){return[{opacity:0},{opacity:1}]},percent:function(t){return 1-Re(t,"opacity")},translate:function(t){return[{opacity:1-t},{opacity:t}]}},scale:{show:function(){return[{opacity:0,transform:Xr(.8)},{opacity:1,transform:Xr(1)}]},percent:function(t){return 1-Re(t,"opacity")},translate:function(t){return[{opacity:1-t,transform:Xr(1-.2*t)},{opacity:t,transform:Xr(.8+.2*t)}]}}});function Jr(t,e,n){Kt(t,Zt(e,!1,!1,n))}var Kr={mixins:[{props:{autoplay:Boolean,autoplayInterval:Number,pauseOnHover:Boolean},data:{autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0},connected:function(){this.autoplay&&this.startAutoplay()},disconnected:function(){this.stopAutoplay()},update:function(){ot(this.slides,"tabindex","-1")},events:[{name:"visibilitychange",el:ut&&document,filter:function(){return this.autoplay},handler:function(){document.hidden?this.stopAutoplay():this.startAutoplay()}}],methods:{startAutoplay:function(){var t=this;this.stopAutoplay(),this.interval=setInterval(function(){return(!t.draggable||!Ne(":focus",t.$el))&&(!t.pauseOnHover||!Dt(t.$el,":hover"))&&!t.stack.length&&t.show("next")},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)}}},{props:{draggable:Boolean},data:{draggable:!0,threshold:10},created:function(){var i=this;["start","move","end"].forEach(function(t){var n=i[t];i[t]=function(t){var e=oe(t).x*(lt?-1:1);i.prevPos=e!==i.pos?i.pos:i.prevPos,i.pos=e,n(t)}})},events:[{name:gt,delegate:function(){return this.selSlides},handler:function(t){var e;!this.draggable||!re(t)&&(!(e=t.target).children.length&&e.childNodes.length)||Bt(t.target,Wt)||0<t.button||this.length<2||this.start(t)}},{name:"dragstart",handler:function(t){t.preventDefault()}}],methods:{start:function(){this.drag=this.pos,this._transitioner?(this.percent=this._transitioner.percent(),this.drag+=this._transitioner.getDistance()*this.percent*this.dir,this._transitioner.cancel(),this._transitioner.translate(this.percent),this.dragging=!0,this.stack=[]):this.prevIndex=this.index,Xt(document,mt,this.move,{passive:!1}),Xt(document,vt+" "+xt,this.end,!0),Re(this.list,"userSelect","none")},move:function(t){var e=this,n=this.pos-this.drag;if(!(0==n||this.prevPos===this.pos||!this.dragging&&Math.abs(n)<this.threshold)){Re(this.list,"pointerEvents","none"),t.cancelable&&t.preventDefault(),this.dragging=!0,this.dir=n<0?1:-1;for(var i=this.slides,r=this.prevIndex,o=Math.abs(n),s=this.getIndex(r+this.dir,r),a=this._getDistance(r,s)||i[r].offsetWidth;s!==r&&a<o;)this.drag-=a*this.dir,r=s,o-=a,s=this.getIndex(r+this.dir,r),a=this._getDistance(r,s)||i[r].offsetWidth;this.percent=o/a;var h,u=i[r],c=i[s],l=this.index!==s,d=r===s;[this.index,this.prevIndex].filter(function(t){return!b([s,r],t)}).forEach(function(t){Kt(i[t],"itemhidden",[e]),d&&(h=!0,e.prevIndex=r)}),(this.index===r&&this.prevIndex!==r||h)&&Kt(i[this.index],"itemshown",[this]),l&&(this.prevIndex=r,this.index=s,d||Kt(u,"beforeitemhide",[this]),Kt(c,"beforeitemshow",[this])),this._transitioner=this._translate(Math.abs(this.percent),u,!d&&c),l&&(d||Kt(u,"itemhide",[this]),Kt(c,"itemshow",[this]))}},end:function(){var t;Gt(document,mt,this.move,{passive:!1}),Gt(document,vt+" "+xt,this.end,!0),this.dragging&&(this.dragging=null,this.index===this.prevIndex?(this.percent=1-this.percent,this.dir*=-1,this._show(!1,this.index,!0),this._transitioner=null):(t=(lt?this.dir*(lt?1:-1):this.dir)<0==this.prevPos>this.pos,this.index=t?this.index:this.prevIndex,t&&(this.percent=1-this.percent),this.show(0<this.dir&&!t||this.dir<0&&t?"next":"previous",!0))),Re(this.list,{userSelect:"",pointerEvents:""}),this.drag=this.percent=null}}},{data:{selNav:!1},computed:{nav:function(t,e){return Ne(t.selNav,e)},selNavItem:function(t){var e=t.attrItem;return"["+e+"],[data-"+e+"]"},navItems:function(t,e){return Me(this.selNavItem,e)}},update:{write:function(){var n=this;this.nav&&this.length!==this.nav.children.length&&we(this.nav,this.slides.map(function(t,e){return"<li "+n.attrItem+'="'+e+'"><a href></a></li>'}).join("")),Le(Me(this.selNavItem,this.$el).concat(this.nav),"uk-hidden",!this.maxIndex),this.updateNav()},events:["resize"]},events:[{name:"click",delegate:function(){return this.selNavItem},handler:function(t){t.preventDefault(),this.show(ht(t.current,this.attrItem))}},{name:"itemshow",handler:"updateNav"}],methods:{updateNav:function(){var n=this,i=this.getValidIndex();this.navItems.forEach(function(t){var e=ht(t,n.attrItem);Le(t,n.clsActive,j(e)===i),Le(t,"uk-invisible",n.finite&&("previous"===e&&0===i||"next"===e&&i>=n.maxIndex))})}}}],props:{clsActivated:Boolean,easing:String,index:Number,finite:Boolean,velocity:Number,selSlides:String},data:function(){return{easing:"ease",finite:!1,velocity:1,index:0,prevIndex:-1,stack:[],percent:0,clsActive:"uk-active",clsActivated:!1,Transitioner:!1,transitionOptions:{}}},connected:function(){this.prevIndex=-1,this.index=this.getValidIndex(this.index),this.stack=[]},disconnected:function(){Be(this.slides,this.clsActive)},computed:{duration:function(t,e){var n=t.velocity;return Zr(e.offsetWidth/n)},list:function(t,e){return Ne(t.selList,e)},maxIndex:function(){return this.length-1},selSlides:function(t){return t.selList+" "+(t.selSlides||"> *")},slides:{get:function(){return Me(this.selSlides,this.$el)},watch:function(){this.$reset()}},length:function(){return this.slides.length}},events:{itemshown:function(){this.$update(this.list)}},methods:{show:function(t,e){var n=this;if(void 0===e&&(e=!1),!this.dragging&&this.length){var i=this.stack,r=e?0:i.length,o=function(){i.splice(r,1),i.length&&n.show(i.shift(),!0)};if(i[e?"unshift":"push"](t),!e&&1<i.length)2===i.length&&this._transitioner.forward(Math.min(this.duration,200));else{var s,a,h=this.getIndex(this.index),u=He(this.slides,this.clsActive)&&this.slides[h],c=this.getIndex(t,this.index),l=this.slides[c];if(u!==l){if(this.dir=(a=h,"next"!==(s=t)&&("previous"===s||s<a)?-1:1),this.prevIndex=h,this.index=c,u&&!Kt(u,"beforeitemhide",[this])||!Kt(l,"beforeitemshow",[this,u]))return this.index=this.prevIndex,void o();var d=this._show(u,l,e).then(function(){return u&&Kt(u,"itemhidden",[n]),Kt(l,"itemshown",[n]),new ae(function(t){yn.write(function(){i.shift(),i.length?n.show(i.shift(),!0):n._transitioner=null,t()})})});return u&&Kt(u,"itemhide",[this]),Kt(l,"itemshow",[this]),d}o()}}},getIndex:function(t,e){return void 0===t&&(t=this.index),void 0===e&&(e=this.index),tt(me(t,this.slides,e,this.finite),0,this.maxIndex)},getValidIndex:function(t,e){return void 0===t&&(t=this.index),void 0===e&&(e=this.prevIndex),this.getIndex(t,e)},_show:function(t,e,n){if(this._transitioner=this._getTransitioner(t,e,this.dir,G({easing:n?e.offsetWidth<600?"cubic-bezier(0.25, 0.46, 0.45, 0.94)":"cubic-bezier(0.165, 0.84, 0.44, 1)":this.easing},this.transitionOptions)),!n&&!t)return this._translate(1),ae.resolve();var i=this.stack.length;return this._transitioner[1<i?"forward":"show"](1<i?Math.min(this.duration,75+75/(i-1)):this.duration,this.percent)},_getDistance:function(t,e){return this._getTransitioner(t,t!==e&&e).getDistance()},_translate:function(t,e,n){void 0===e&&(e=this.prevIndex),void 0===n&&(n=this.index);var i=this._getTransitioner(e!==n&&e,n);return i.translate(t),i},_getTransitioner:function(t,e,n,i){return void 0===t&&(t=this.prevIndex),void 0===e&&(e=this.index),void 0===n&&(n=this.dir||1),void 0===i&&(i=this.transitionOptions),new this.Transitioner(B(t)?this.slides[t]:t,B(e)?this.slides[e]:e,n*(lt?-1:1),i)}}};function Zr(t){return.5*t+300}var Qr={mixins:[Kr],props:{animation:String},data:{animation:"slide",clsActivated:"uk-transition-active",Animations:qr,Transitioner:function(o,s,a,t){var e=t.animation,h=t.easing,n=e.percent,i=e.translate,r=e.show;void 0===r&&(r=et);var u=r(a),c=new se;return{dir:a,show:function(t,e,n){var i=this;void 0===e&&(e=0);var r=n?"linear":h;return t-=Math.round(t*tt(e,-1,1)),this.translate(e),Jr(s,"itemin",{percent:e,duration:t,timing:r,dir:a}),Jr(o,"itemout",{percent:1-e,duration:t,timing:r,dir:a}),ae.all([Qe.start(s,u[1],t,r),Qe.start(o,u[0],t,r)]).then(function(){i.reset(),c.resolve()},et),c.promise},stop:function(){return Qe.stop([s,o])},cancel:function(){Qe.cancel([s,o])},reset:function(){for(var t in u[0])Re([s,o],t,"")},forward:function(t,e){return void 0===e&&(e=this.percent()),Qe.cancel([s,o]),this.show(t,e,!0)},translate:function(t){this.reset();var e=i(t,a);Re(s,e[1]),Re(o,e[0]),Jr(s,"itemtranslatein",{percent:t,dir:a}),Jr(o,"itemtranslateout",{percent:1-t,dir:a})},percent:function(){return n(o||s,s,a)},getDistance:function(){return o&&o.offsetWidth}}}},computed:{animation:function(t){var e=t.animation,n=t.Animations;return G(n[e]||n.slide,{name:e})},transitionOptions:function(){return{animation:this.animation}}},events:{"itemshow itemhide itemshown itemhidden":function(t){var e=t.target;this.$update(e)},beforeitemshow:function(t){ze(t.target,this.clsActive)},itemshown:function(t){ze(t.target,this.clsActivated)},itemhidden:function(t){Be(t.target,this.clsActive,this.clsActivated)}}},to={mixins:[lr,fr,gi,Qr],functional:!0,props:{delayControls:Number,preload:Number,videoAutoplay:Boolean,template:String},data:function(){return{preload:1,videoAutoplay:!1,delayControls:3e3,items:[],cls:"uk-open",clsPage:"uk-lightbox-page",selList:".uk-lightbox-items",attrItem:"uk-lightbox-item",selClose:".uk-close-large",selCaption:".uk-lightbox-caption",pauseOnHover:!1,velocity:2,Animations:Gr,template:'<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'}},created:function(){var t=Ne(this.template),e=Ne(this.selList,t);this.items.forEach(function(){return be(e,"<li>")}),this.$mount(be(this.container,t))},computed:{caption:function(t,e){t.selCaption;return Ne(".uk-lightbox-caption",e)}},events:[{name:mt+" "+gt+" keydown",handler:"showControls"},{name:"click",self:!0,delegate:function(){return this.selSlides},handler:function(t){t.defaultPrevented||this.hide()}},{name:"shown",self:!0,handler:function(){this.showControls()}},{name:"hide",self:!0,handler:function(){this.hideControls(),Be(this.slides,this.clsActive),Qe.stop(this.slides)}},{name:"hidden",self:!0,handler:function(){this.$destroy(!0)}},{name:"keyup",el:ut&&document,handler:function(t){if(this.isToggled(this.$el)&&this.draggable)switch(t.keyCode){case 37:this.show("previous");break;case 39:this.show("next")}}},{name:"beforeitemshow",handler:function(t){this.isToggled()||(this.draggable=!1,t.preventDefault(),this.toggleElement(this.$el,!0,!1),this.animation=Gr.scale,Be(t.target,this.clsActive),this.stack.splice(1,0,this.index))}},{name:"itemshow",handler:function(){we(this.caption,this.getItem().caption||"");for(var t=-this.preload;t<=this.preload;t++)this.loadItem(this.index+t)}},{name:"itemshown",handler:function(){this.draggable=this.$props.draggable}},{name:"itemload",handler:function(t,r){var o=this,i=r.source,e=r.type,s=r.alt;void 0===s&&(s="");var a,h,n,u=r.poster,c=r.attrs;void 0===c&&(c={}),this.setItem(r,"<span uk-spinner></span>"),i&&(h={frameborder:"0",allow:"autoplay",allowfullscreen:"",style:"max-width: 100%; box-sizing: border-box;","uk-responsive":"","uk-video":""+this.videoAutoplay},"image"===e||i.match(/\.(jpe?g|png|gif|svg|webp)($|\?)/i)?fe(i,c.srcset,c.size).then(function(t){var e=t.width,n=t.height;return o.setItem(r,eo("img",G({src:i,width:e,height:n,alt:s},c)))},function(){return o.setError(r)}):"video"===e||i.match(/\.(mp4|webm|ogv)($|\?)/i)?(Xt(n=eo("video",G({src:i,poster:u,controls:"",playsinline:"","uk-video":""+this.videoAutoplay},c)),"loadedmetadata",function(){ot(n,{width:n.videoWidth,height:n.videoHeight}),o.setItem(r,n)}),Xt(n,"error",function(){return o.setError(r)})):"iframe"===e||i.match(/\.(html|php)($|\?)/i)?this.setItem(r,eo("iframe",G({src:i,frameborder:"0",allowfullscreen:"",class:"uk-lightbox-iframe"},c))):(a=i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))?this.setItem(r,eo("iframe",G({src:"https://www.youtube"+(a[1]||"")+".com/embed/"+a[2]+(a[3]?"?"+a[3]:""),width:1920,height:1080},h,c))):(a=i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))&&de("https://vimeo.com/api/oembed.json?maxwidth=1920&url="+encodeURI(i),{responseType:"json",withCredentials:!1}).then(function(t){var e=t.response,n=e.height,i=e.width;return o.setItem(r,eo("iframe",G({src:"https://player.vimeo.com/video/"+a[1]+(a[2]?"?"+a[2]:""),width:i,height:n},h,c)))},function(){return o.setError(r)}))}}],methods:{loadItem:function(t){void 0===t&&(t=this.index);var e=this.getItem(t);this.getSlide(e).childElementCount||Kt(this.$el,"itemload",[e])},getItem:function(t){return void 0===t&&(t=this.index),this.items[me(t,this.slides)]},setItem:function(t,e){Kt(this.$el,"itemloaded",[this,we(this.getSlide(t),e)])},getSlide:function(t){return this.slides[this.items.indexOf(t)]},setError:function(t){this.setItem(t,'<span uk-icon="icon: bolt; ratio: 2"></span>')},showControls:function(){clearTimeout(this.controlsTimer),this.controlsTimer=setTimeout(this.hideControls,this.delayControls),ze(this.$el,"uk-active","uk-transition-active")},hideControls:function(){Be(this.$el,"uk-active","uk-transition-active")}}};function eo(t,e){var n=Ce("<"+t+">");return ot(n,e),n}var no,io={install:function(t,e){t.lightboxPanel||t.component("lightboxPanel",to);G(e.props,t.component("lightboxPanel").options.props)},props:{toggle:String},data:{toggle:"a"},computed:{toggles:{get:function(t,e){return Me(t.toggle,e)},watch:function(){this.hide()}}},disconnected:function(){this.hide()},events:[{name:"click",delegate:function(){return this.toggle+":not(.uk-disabled)"},handler:function(t){t.preventDefault(),this.show(t.current)}}],methods:{show:function(t){var n,e=this,i=Q(this.toggles.map(ro),"source");return N(t)&&(n=ro(t).source,t=y(i,function(t){var e=t.source;return n===e})),this.panel=this.panel||this.$create("lightboxPanel",G({},this.$props,{items:i})),Xt(this.panel.$el,"hidden",function(){return e.panel=!1}),this.panel.show(t)},hide:function(){return this.panel&&this.panel.hide()}}};function ro(e){var n={};return["href","caption","type","poster","alt","attrs"].forEach(function(t){n["href"===t?"source":t]=ht(e,t)}),n.attrs=Mn(n.attrs),n}var oo={functional:!0,args:["message","status"],data:{message:"",status:"",timeout:5e3,group:null,pos:"top-center",clsContainer:"uk-notification",clsClose:"uk-notification-close",clsMsg:"uk-notification-message"},install:function(r){r.notification.closeAll=function(n,i){Ae(document.body,function(t){var e=r.getComponent(t,"notification");!e||n&&n!==e.group||e.close(i)})}},computed:{marginProp:function(t){return"margin"+(w(t.pos,"top")?"Top":"Bottom")},startProps:function(){var t={opacity:0};return t[this.marginProp]=-this.$el.offsetHeight,t}},created:function(){var t=Ne("."+this.clsContainer+"-"+this.pos,this.$container)||be(this.$container,'<div class="'+this.clsContainer+" "+this.clsContainer+"-"+this.pos+'" style="display: block"></div>');this.$mount(be(t,'<div class="'+this.clsMsg+(this.status?" "+this.clsMsg+"-"+this.status:"")+'"> <a href class="'+this.clsClose+'" data-uk-close></a> <div>'+this.message+"</div> </div>"))},connected:function(){var t,e=this,n=F(Re(this.$el,this.marginProp));Qe.start(Re(this.$el,this.startProps),((t={opacity:1})[this.marginProp]=n,t)).then(function(){e.timeout&&(e.timer=setTimeout(e.close,e.timeout))})},events:((no={click:function(t){Bt(t.target,'a[href="#"],a[href=""]')&&t.preventDefault(),this.close()}})[wt]=function(){this.timer&&clearTimeout(this.timer)},no[bt]=function(){this.timeout&&(this.timer=setTimeout(this.close,this.timeout))},no),methods:{close:function(t){function e(){var t=n.$el.parentNode;Kt(n.$el,"close",[n]),$e(n.$el),t&&!t.hasChildNodes()&&$e(t)}var n=this;this.timer&&clearTimeout(this.timer),t?e():Qe.start(this.$el,this.startProps).then(e)}}};var so=["x","y","bgx","bgy","rotate","scale","color","backgroundColor","borderColor","opacity","blur","hue","grayscale","invert","saturate","sepia","fopacity","stroke"],ao={mixins:[ur],props:so.reduce(function(t,e){return t[e]="list",t},{}),data:so.reduce(function(t,e){return t[e]=void 0,t},{}),computed:{props:function(g,m){var v=this;return so.reduce(function(t,e){if(H(g[e]))return t;var n,i,r=e.match(/color/i),o=r||"opacity"===e,s=g[e].slice(0);o&&Re(m,e,""),s.length<2&&s.unshift(("scale"===e?1:o?Re(m,e):0)||0);var a,h,u,c,l,d,f=s.reduce(function(t,e){return z(e)&&e.replace(/-|\d/g,"").trim()||t},"");if(r?(a=m.style.color,s=s.map(function(t){return Re(Re(m,"color",t),"color").split(/[(),]/g).slice(1,-1).concat(1).slice(0,4).map(F)}),m.style.color=a):w(e,"bg")?(h="bgy"===e?"height":"width",s=s.map(function(t){return bn(t,h,v.$el)}),Re(m,"background-position-"+e[2],""),i=Re(m,"backgroundPosition").split(" ")["x"===e[2]?0:1],n=v.covers?(u=Math.min.apply(Math,s),c=Math.max.apply(Math,s),l=s.indexOf(u)<s.indexOf(c),d=c-u,s=s.map(function(t){return t-(l?u:c)}),(l?-d:0)+"px"):i):s=s.map(F),"stroke"===e){if(!s.some(function(t){return t}))return t;var p=Wi(v.$el);Re(m,"strokeDasharray",p),"%"===f&&(s=s.map(function(t){return t*p/100})),s=s.reverse(),e="strokeDashoffset"}return t[e]={steps:s,unit:f,pos:n,bgPos:i,diff:d},t},{})},bgProps:function(){var e=this;return["bgx","bgy"].filter(function(t){return t in e.props})},covers:function(t,e){return i=(n=e).style.backgroundSize,r="cover"===Re(Re(n,"backgroundSize",""),"backgroundSize"),n.style.backgroundSize=i,r;var n,i,r}},disconnected:function(){delete this._image},update:{read:function(t){var e,n,i,h,u,c,l=this;t.active=this.matchMedia,t.active&&(t.image||!this.covers||!this.bgProps.length||(e=Re(this.$el,"backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/,"$1"))&&((n=new Image).src=e,(t.image=n).naturalWidth||(n.onload=function(){return l.$update()})),(i=t.image)&&i.naturalWidth&&(h={width:this.$el.offsetWidth,height:this.$el.offsetHeight},u={width:i.naturalWidth,height:i.naturalHeight},c=rt.cover(u,h),this.bgProps.forEach(function(t){var e,n=l.props[t],i=n.diff,r=n.bgPos,o=n.steps,s="bgy"===t?"height":"width",a=c[s]-h[s];a<i?h[s]=c[s]+i-a:i<a&&((e=h[s]/bn(r,s,l.$el))&&(l.props[t].steps=o.map(function(t){return t-(a-i)/e}))),c=rt.cover(u,h)}),t.dim=c))},write:function(t){var e=t.dim;t.active?e&&Re(this.$el,{backgroundSize:e.width+"px "+e.height+"px",backgroundRepeat:"no-repeat"}):Re(this.$el,{backgroundSize:"",backgroundRepeat:""})},events:["resize"]},methods:{reset:function(){var n=this;K(this.getCss(0),function(t,e){return Re(n.$el,e,"")})},getCss:function(l){var d=this.props;return Object.keys(d).reduce(function(t,e){var n=d[e],i=n.steps,r=n.unit,o=n.pos,s=function(t,e,n){void 0===n&&(n=2);var i=ho(t,e),r=i[0],o=i[1],s=i[2];return(B(r)?r+Math.abs(r-o)*s*(r<o?1:-1):+o).toFixed(n)}(i,l);switch(e){case"x":case"y":r=r||"px",t.transform+=" translate"+p(e)+"("+F(s).toFixed("px"===r?0:2)+r+")";break;case"rotate":r=r||"deg",t.transform+=" rotate("+(s+r)+")";break;case"scale":t.transform+=" scale("+s+")";break;case"bgy":case"bgx":t["background-position-"+e[2]]="calc("+o+" + "+s+"px)";break;case"color":case"backgroundColor":case"borderColor":var a=ho(i,l),h=a[0],u=a[1],c=a[2];t[e]="rgba("+h.map(function(t,e){return t+=c*(u[e]-t),3===e?F(t):parseInt(t,10)}).join(",")+")";break;case"blur":r=r||"px",t.filter+=" blur("+(s+r)+")";break;case"hue":r=r||"deg",t.filter+=" hue-rotate("+(s+r)+")";break;case"fopacity":r=r||"%",t.filter+=" opacity("+(s+r)+")";break;case"grayscale":case"invert":case"saturate":case"sepia":r=r||"%",t.filter+=" "+e+"("+(s+r)+")";break;default:t[e]=s}return t},{transform:"",filter:""})}}};function ho(t,e){var n=t.length-1,i=Math.min(Math.floor(n*e),n-1),r=t.slice(i,i+2);return r.push(1===e?1:e%(1/n)*n),r}var uo={mixins:[ao],props:{target:String,viewport:Number,easing:Number},data:{target:!1,viewport:1,easing:1},computed:{target:function(t,e){var n=t.target;return function t(e){return e?"offsetTop"in e?e:t(e.parentNode):document.body}(n&&yt(n,e)||e)}},update:{read:function(t,e){var n=t.percent;if("scroll"!==e&&(n=!1),t.active){var i,r,o=n;return i=Yn(this.target)/(this.viewport||1),r=this.easing,{percent:n=tt(i*(1-(r-r*i))),style:o!==n&&this.getCss(n)}}},write:function(t){var e=t.style;t.active?e&&Re(this.$el,e):this.reset()},events:["scroll","resize"]}};var co={update:{write:function(){var t;this.stack.length||this.dragging||(t=this.getValidIndex(this.index),~this.prevIndex&&this.index===t||this.show(t))},events:["resize"]}};function lo(t,e,n){var i,r=go(t,e);return n?r-(i=t,an(e).width/2-an(i).width/2):Math.min(r,fo(e))}function fo(t){return Math.max(0,po(t)-an(t).width)}function po(t){return vo(t).reduce(function(t,e){return an(e).width+t},0)}function go(t,e){return(un(t).left+(lt?an(t).width-an(e).width:0))*(lt?-1:1)}function mo(t,e,n){Kt(t,Zt(e,!1,!1,n))}function vo(t){return Yt(t)}var wo={mixins:[pi,Kr,co],props:{center:Boolean,sets:Boolean},data:{center:!1,sets:!1,attrItem:"uk-slider-item",selList:".uk-slider-items",selNav:".uk-slider-nav",clsContainer:"uk-slider-container",Transitioner:function(o,s,a,t){var e=t.center,h=t.easing,u=t.list,c=new se,n=o?lo(o,u,e):lo(s,u,e)+an(s).width*a,l=s?lo(s,u,e):n+an(o).width*a*(lt?-1:1);return{dir:a,show:function(t,e,n){void 0===e&&(e=0);var i=n?"linear":h;t-=Math.round(t*tt(e,-1,1)),this.translate(e),o&&this.updateTranslates(),e=o?e:tt(e,0,1),mo(this.getItemIn(),"itemin",{percent:e,duration:t,timing:i,dir:a}),o&&mo(this.getItemIn(!0),"itemout",{percent:1-e,duration:t,timing:i,dir:a});var r=ge(s)/1e4;return Qe.start(u,{transform:Yr((r-l)*(lt?-1:1),"px")},t,i).then(c.resolve,et),c.promise},stop:function(){return Qe.stop(u)},cancel:function(){Qe.cancel(u)},reset:function(){Re(u,"transform","")},forward:function(t,e){return void 0===e&&(e=this.percent()),Qe.cancel(u),this.show(t,e,!0)},translate:function(t){var e=this.getDistance()*a*(lt?-1:1);Re(u,"transform",Yr(tt(e-e*t-l,-po(u),an(u).width)*(lt?-1:1),"px")),this.updateTranslates(),o&&(t=tt(t,-1,1),mo(this.getItemIn(),"itemtranslatein",{percent:t,dir:a}),mo(this.getItemIn(!0),"itemtranslateout",{percent:1-t,dir:a}))},percent:function(){return Math.abs((Re(u,"transform").split(",")[4]*(lt?-1:1)+n)/(l-n))},getDistance:function(){return Math.abs(l-n)},getItemIn:function(t){void 0===t&&(t=!1);var e=this.getActives(),n=Z(vo(u),"offsetLeft"),i=ge(n,e[0<a*(t?-1:1)?e.length-1:0]);return~i&&n[i+(o&&!t?a:0)]},getActives:function(){var n=lo(o||s,u,e);return Z(vo(u).filter(function(t){var e=go(t,u);return n<=e&&e+an(t).width<=an(u).width+n}),"offsetLeft")},updateTranslates:function(){var n=this.getActives();vo(u).forEach(function(t){var e=b(n,t);mo(t,"itemtranslate"+(e?"in":"out"),{percent:e?1:0,dir:t.offsetLeft<=s.offsetLeft?1:-1})})}}}},computed:{avgWidth:function(){return po(this.list)/this.length},finite:function(t){return t.finite||Math.ceil(po(this.list))<an(this.list).width+vo(this.list).reduce(function(t,e){return Math.max(t,an(e).width)},0)+this.center},maxIndex:function(){if(!this.finite||this.center&&!this.sets)return this.length-1;if(this.center)return J(this.sets);Re(this.slides,"order","");for(var t=fo(this.list),e=this.length;e--;)if(go(this.list.children[e],this.list)<t)return Math.min(e+1,this.length-1);return 0},sets:function(t){var o=this,e=t.sets,s=an(this.list).width/(this.center?2:1),a=0,h=s,u=0;return!O(e=e&&this.slides.reduce(function(t,e,n){var i,r=an(e).width;return a<u+r&&(!o.center&&n>o.maxIndex&&(n=o.maxIndex),b(t,n)||(i=o.slides[n+1],o.center&&i&&r<h-an(i).width/2?h-=r:(h=s,t.push(n),a=u+s+(o.center?r/2:0)))),u+=r,t},[]))&&e},transitionOptions:function(){return{center:this.center,list:this.list}}},connected:function(){Le(this.$el,this.clsContainer,!Ne("."+this.clsContainer,this.$el))},update:{write:function(){var n=this;Me("["+this.attrItem+"],[data-"+this.attrItem+"]",this.$el).forEach(function(t){var e=ht(t,n.attrItem);n.maxIndex&&Le(t,"uk-hidden",P(e)&&(n.sets&&!b(n.sets,F(e))||e>n.maxIndex))}),!this.length||this.dragging||this.stack.length||(this.reorder(),this._translate(1));var e=this._getTransitioner(this.index).getActives();this.slides.forEach(function(t){return Le(t,n.clsActive,b(e,t))}),this.sets&&!b(this.sets,F(this.index))||this.slides.forEach(function(t){return Le(t,n.clsActivated,b(e,t))})},events:["resize"]},events:{beforeitemshow:function(t){!this.dragging&&this.sets&&this.stack.length<2&&!b(this.sets,this.index)&&(this.index=this.getValidIndex());var e=Math.abs(this.index-this.prevIndex+(0<this.dir&&this.index<this.prevIndex||this.dir<0&&this.index>this.prevIndex?(this.maxIndex+1)*this.dir:0));if(!this.dragging&&1<e){for(var n=0;n<e;n++)this.stack.splice(1,0,0<this.dir?"next":"previous");t.preventDefault()}else this.duration=Zr(this.avgWidth/this.velocity)*(an(this.dir<0||!this.slides[this.prevIndex]?this.slides[this.index]:this.slides[this.prevIndex]).width/this.avgWidth),this.reorder()},itemshow:function(){~this.prevIndex&&ze(this._getTransitioner().getItemIn(),this.clsActive)}},methods:{reorder:function(){var n=this;if(this.finite)Re(this.slides,"order","");else{var i=0<this.dir&&this.slides[this.prevIndex]?this.prevIndex:this.index;if(this.slides.forEach(function(t,e){return Re(t,"order",0<n.dir&&e<i?1:n.dir<0&&e>=n.index?-1:"")}),this.center)for(var t=this.slides[i],e=an(this.list).width/2-an(t).width/2,r=0;0<e;){var o=this.getIndex(--r+i,i),s=this.slides[o];Re(s,"order",i<o?-2:-1),e-=an(s).width}}},getValidIndex:function(t,e){if(void 0===t&&(t=this.index),void 0===e&&(e=this.prevIndex),t=this.getIndex(t,e),!this.sets)return t;var n;do{if(b(this.sets,t))return t;n=t,t=this.getIndex(t+this.dir,e)}while(t!==n);return t}}},bo={mixins:[ao],data:{selItem:"!li"},computed:{item:function(t,e){return yt(t.selItem,e)}},events:[{name:"itemshown",self:!0,el:function(){return this.item},handler:function(){Re(this.$el,this.getCss(.5))}},{name:"itemin itemout",self:!0,el:function(){return this.item},handler:function(t){var e=t.type,n=t.detail,i=n.percent,r=n.duration,o=n.timing,s=n.dir;Qe.cancel(this.$el),Re(this.$el,this.getCss(yo(e,s,i))),Qe.start(this.$el,this.getCss(xo(e)?.5:0<s?1:0),r,o).catch(et)}},{name:"transitioncanceled transitionend",self:!0,el:function(){return this.item},handler:function(){Qe.cancel(this.$el)}},{name:"itemtranslatein itemtranslateout",self:!0,el:function(){return this.item},handler:function(t){var e=t.type,n=t.detail,i=n.percent,r=n.dir;Qe.cancel(this.$el),Re(this.$el,this.getCss(yo(e,r,i)))}}]};function xo(t){return u(t,"in")}function yo(t,e,n){return n/=2,xo(t)?e<0?1-n:n:e<0?n:1-n}var ko,$o,Io=G({},qr,{fade:{show:function(){return[{opacity:0,zIndex:0},{zIndex:-1}]},percent:function(t){return 1-Re(t,"opacity")},translate:function(t){return[{opacity:1-t,zIndex:0},{zIndex:-1}]}},scale:{show:function(){return[{opacity:0,transform:Xr(1.5),zIndex:0},{zIndex:-1}]},percent:function(t){return 1-Re(t,"opacity")},translate:function(t){return[{opacity:1-t,transform:Xr(1+.5*t),zIndex:0},{zIndex:-1}]}},pull:{show:function(t){return t<0?[{transform:Yr(30),zIndex:-1},{transform:Yr(),zIndex:0}]:[{transform:Yr(-100),zIndex:0},{transform:Yr(),zIndex:-1}]},percent:function(t,e,n){return n<0?1-Ur(e):Ur(t)},translate:function(t,e){return e<0?[{transform:Yr(30*t),zIndex:-1},{transform:Yr(-100*(1-t)),zIndex:0}]:[{transform:Yr(100*-t),zIndex:0},{transform:Yr(30*(1-t)),zIndex:-1}]}},push:{show:function(t){return t<0?[{transform:Yr(100),zIndex:0},{transform:Yr(),zIndex:-1}]:[{transform:Yr(-30),zIndex:-1},{transform:Yr(),zIndex:0}]},percent:function(t,e,n){return 0<n?1-Ur(e):Ur(t)},translate:function(t,e){return e<0?[{transform:Yr(100*t),zIndex:0},{transform:Yr(-30*(1-t)),zIndex:-1}]:[{transform:Yr(-30*t),zIndex:-1},{transform:Yr(100*(1-t)),zIndex:0}]}}}),So={mixins:[pi,Qr,co],props:{ratio:String,minHeight:Number,maxHeight:Number},data:{ratio:"16:9",minHeight:!1,maxHeight:!1,selList:".uk-slideshow-items",attrItem:"uk-slideshow-item",selNav:".uk-slideshow-nav",Animations:Io},update:{read:function(){var t=this.ratio.split(":").map(Number),e=t[0],n=(n=t[1])*this.list.offsetWidth/e||0;return this.minHeight&&(n=Math.max(this.minHeight,n)),this.maxHeight&&(n=Math.min(this.maxHeight,n)),{height:n-pn(this.list,"height","content-box")}},write:function(t){var e=t.height;0<e&&Re(this.list,"minHeight",e)},events:["resize"]}},To={mixins:[pi,Or],props:{group:String,threshold:Number,clsItem:String,clsPlaceholder:String,clsDrag:String,clsDragState:String,clsBase:String,clsNoDrag:String,clsEmpty:String,clsCustom:String,handle:String},data:{group:!1,threshold:5,clsItem:"uk-sortable-item",clsPlaceholder:"uk-sortable-placeholder",clsDrag:"uk-sortable-drag",clsDragState:"uk-drag",clsBase:"uk-sortable",clsNoDrag:"uk-sortable-nodrag",clsEmpty:"uk-sortable-empty",clsCustom:"",handle:!1,pos:{}},created:function(){var n=this;["init","start","move","end"].forEach(function(t){var e=n[t];n[t]=function(t){G(n.pos,oe(t)),e(t)}})},events:{name:gt,passive:!1,handler:"init"},computed:{target:function(){return(this.$el.tBodies||[this.$el])[0]},items:function(){return Yt(this.target)},isEmpty:{get:function(){return O(this.items)},watch:function(t){Le(this.target,this.clsEmpty,t)},immediate:!0},handles:{get:function(t,e){var n=t.handle;return n?Me(n,e):this.items},watch:function(t,e){Re(e,{touchAction:"",userSelect:""}),Re(t,{touchAction:pt?"none":"",userSelect:"none"})},immediate:!0}},update:{write:function(){if(this.drag&&Pt(this.placeholder)){var t=this.pos,e=t.x,n=t.y,i=this.origin,r=i.offsetTop,o=i.offsetLeft,s=this.drag,a=s.offsetHeight,h=s.offsetWidth,u=an(window),c=u.right,l=u.bottom,d=document.elementFromPoint(e,n);Re(this.drag,{top:tt(n-r,0,l-a),left:tt(e-o,0,c-h)});var f=this.getSortable(d),p=this.getSortable(this.placeholder),g=f!==p;if(f&&!qt(d,this.placeholder)&&(!g||f.group&&f.group===p.group)){if(d=f.target===d.parentNode&&d||f.items.filter(function(t){return qt(d,t)})[0],g)p.remove(this.placeholder);else if(!d)return;f.insert(this.placeholder,d),b(this.touched,f)||this.touched.push(f)}}},events:["move"]},methods:{init:function(t){var e=t.target,n=t.button,i=t.defaultPrevented,r=this.items.filter(function(t){return qt(e,t)})[0];!r||i||0<n||Vt(e)||qt(e,"."+this.clsNoDrag)||this.handle&&!qt(e,this.handle)||(t.preventDefault(),this.touched=[this],this.placeholder=r,this.origin=G({target:e,index:ge(r)},this.pos),Xt(document,mt,this.move),Xt(document,vt,this.end),this.threshold||this.start(t))},start:function(t){var e,n,i;this.drag=(e=this.$container,n=this.placeholder,(i=be(e,n.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g,"$1div$2"))).style.setProperty("margin","0","important"),Re(i,G({boxSizing:"border-box",width:n.offsetWidth,height:n.offsetHeight,overflow:"hidden"},Re(n,["paddingLeft","paddingRight","paddingTop","paddingBottom"]))),ln(i.firstElementChild,ln(n.firstElementChild)),i);var r,o,s=this.placeholder.getBoundingClientRect(),a=s.left,h=s.top;G(this.origin,{offsetLeft:this.pos.x-a,offsetTop:this.pos.y-h}),ze(this.drag,this.clsDrag,this.clsCustom),ze(this.placeholder,this.clsPlaceholder),ze(this.items,this.clsItem),ze(document.documentElement,this.clsDragState),Kt(this.$el,"start",[this,this.placeholder]),r=this.pos,o=Date.now(),ko=setInterval(function(){var t=r.x,a=r.y;a+=window.pageYOffset;var h=.3*(Date.now()-o);o=Date.now(),Xn(document.elementFromPoint(t,r.y)).some(function(t){var e=t.scrollTop,n=t.scrollHeight,i=an(Gn(t)),r=i.top,o=i.bottom,s=i.height;if(r<a&&a<r+30)e-=h;else{if(!(a<o&&o-30<a))return;e+=h}if(0<e&&e<n-s)return qn(t,e),!0})},15),this.move(t)},move:function(t){this.drag?this.$emit("move"):(Math.abs(this.pos.x-this.origin.x)>this.threshold||Math.abs(this.pos.y-this.origin.y)>this.threshold)&&this.start(t)},end:function(t){var e,n;Gt(document,mt,this.move),Gt(document,vt,this.end),Gt(window,"scroll",this.scroll),this.drag&&(clearInterval(ko),e=this.getSortable(this.placeholder),this===e?this.origin.index!==ge(this.placeholder)&&Kt(this.$el,"moved",[this,this.placeholder]):(Kt(e.$el,"added",[e,this.placeholder]),Kt(this.$el,"removed",[this,this.placeholder])),Kt(this.$el,"stop",[this,this.placeholder]),$e(this.drag),this.drag=null,n=this.touched.map(function(t){return t.clsPlaceholder+" "+t.clsItem}).join(" "),this.touched.forEach(function(t){return Be(t.items,n)}),Be(document.documentElement,this.clsDragState))},insert:function(n,i){var r=this;ze(this.items,this.clsItem);function t(){var t,e;i?(!qt(n,r.target)||(e=i,(t=n).parentNode===e.parentNode&&ge(t)>ge(e))?xe:ye)(i,n):be(r.target,n)}this.animation?this.animate(t):t()},remove:function(t){qt(t,this.target)&&(this.animation?this.animate(function(){return $e(t)}):$e(t))},getSortable:function(t){return t&&(this.$getComponent(t,"sortable")||this.getSortable(t.parentNode))}}};var Eo=[],_o={mixins:[lr,gi,$i],args:"title",props:{delay:Number,title:String},data:{pos:"top",title:"",delay:0,animation:["uk-animation-scale-up"],duration:100,cls:"uk-active",clsPos:"uk-tooltip"},beforeConnect:function(){this._hasTitle=st(this.$el,"title"),ot(this.$el,{title:"","aria-expanded":!1})},disconnected:function(){this.hide(),ot(this.$el,{title:this._hasTitle?this.title:null,"aria-expanded":null})},methods:{show:function(){var e=this;!this.isActive()&&this.title&&(Eo.forEach(function(t){return t.hide()}),Eo.push(this),this._unbind=Xt(document,vt,function(t){return!qt(t.target,e.$el)&&e.hide()}),clearTimeout(this.showTimer),this.showTimer=setTimeout(this._show,this.delay))},hide:function(){var t=this;this.isActive()&&!Dt(this.$el,"input:focus")&&this.toggleElement(this.tooltip,!1,!1).then(function(){Eo.splice(Eo.indexOf(t),1),clearTimeout(t.showTimer),t.tooltip=$e(t.tooltip),t._unbind()})},_show:function(){var e=this;this.tooltip=be(this.container,'<div class="'+this.clsPos+'"> <div class="'+this.clsPos+'-inner">'+this.title+"</div> </div>"),Xt(this.tooltip,"toggled",function(){var t=e.isToggled(e.tooltip);ot(e.$el,"aria-expanded",t),t&&(e.positionAt(e.tooltip,e.$el),e.origin="y"===e.getAxis()?wn(e.dir)+"-"+e.align:e.align+"-"+wn(e.dir))}),this.toggleElement(this.tooltip,!0)},isActive:function(){return b(Eo,this)}},events:(($o={focus:"show",blur:"hide"})[wt+" "+bt]=function(t){re(t)||(t.type===wt?this.show():this.hide())},$o[gt]=function(t){re(t)&&(this.isActive()?this.hide():this.show())},$o)},Co={props:{allow:String,clsDragover:String,concurrent:Number,maxSize:Number,method:String,mime:String,msgInvalidMime:String,msgInvalidName:String,msgInvalidSize:String,multiple:Boolean,name:String,params:Object,type:String,url:String},data:{allow:!1,clsDragover:"uk-dragover",concurrent:1,maxSize:0,method:"POST",mime:!1,msgInvalidMime:"Invalid File Type: %s",msgInvalidName:"Invalid File Name: %s",msgInvalidSize:"Invalid File Size: %s Kilobytes Max",multiple:!1,name:"files[]",params:{},type:"",url:"",abort:et,beforeAll:et,beforeSend:et,complete:et,completeAll:et,error:et,fail:et,load:et,loadEnd:et,loadStart:et,progress:et},events:{change:function(t){Dt(t.target,'input[type="file"]')&&(t.preventDefault(),t.target.files&&this.upload(t.target.files),t.target.value="")},drop:function(t){No(t);var e=t.dataTransfer;e&&e.files&&(Be(this.$el,this.clsDragover),this.upload(e.files))},dragenter:function(t){No(t)},dragover:function(t){No(t),ze(this.$el,this.clsDragover)},dragleave:function(t){No(t),Be(this.$el,this.clsDragover)}},methods:{upload:function(t){var i=this;if(t.length){Kt(this.$el,"upload",[t]);for(var e=0;e<t.length;e++){if(this.maxSize&&1e3*this.maxSize<t[e].size)return void this.fail(this.msgInvalidSize.replace("%s",this.maxSize));if(this.allow&&!Ao(this.allow,t[e].name))return void this.fail(this.msgInvalidName.replace("%s",this.allow));if(this.mime&&!Ao(this.mime,t[e].type))return void this.fail(this.msgInvalidMime.replace("%s",this.mime))}this.multiple||(t=[t[0]]),this.beforeAll(this,t);var r=function(t,e){for(var n=[],i=0;i<t.length;i+=e){for(var r=[],o=0;o<e;o++)r.push(t[i+o]);n.push(r)}return n}(t,this.concurrent),o=function(t){var e,n=new FormData;for(e in t.forEach(function(t){return n.append(i.name,t)}),i.params)n.append(e,i.params[e]);de(i.url,{data:n,method:i.method,responseType:i.type,beforeSend:function(t){var e=t.xhr;e.upload&&Xt(e.upload,"progress",i.progress),["loadStart","load","loadEnd","abort"].forEach(function(t){return Xt(e,t.toLowerCase(),i[t])}),i.beforeSend(t)}}).then(function(t){i.complete(t),r.length?o(r.shift()):i.completeAll(t)},function(t){return i.error(t)})};o(r.shift())}}}};function Ao(t,e){return e.match(new RegExp("^"+t.replace(/\//g,"\\/").replace(/\*\*/g,"(\\/[^\\/]+)*").replace(/\*/g,"[^\\/]+").replace(/((?!\\))\?/g,"$1.")+"$","i"))}function No(t){t.preventDefault(),t.stopPropagation()}return K(Object.freeze({__proto__:null,Countdown:zr,Filter:Fr,Lightbox:io,LightboxPanel:to,Notification:oo,Parallax:uo,Slider:wo,SliderParallax:bo,Slideshow:So,SlideshowParallax:bo,Sortable:To,Tooltip:_o,Upload:Co}),function(t,e){return ti.component(e,t)}),ti});
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define("uikiticons",i):(t="undefined"!=typeof globalThis?globalThis:t||self).UIkitIcons=i()}(this,function(){"use strict";function i(t){i.installed||t.icon.add({"500px":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"/><path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"/><path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"/><path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"/></svg>',album:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="10" height="1"/><rect x="3" y="4" width="14" height="1"/><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"/></svg>',"arrow-down":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"/><line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"/></svg>',"arrow-left":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"/><line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"/></svg>',"arrow-right":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"/><line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"/></svg>',"arrow-up":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"/><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"/></svg>',ban:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"/></svg>',behance:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"/><path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"/><rect x="13" y="4" width="5" height="1.4"/></svg>',bell:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"/><path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"/></svg>',bold:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"/></svg>',bolt:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"/></svg>',bookmark:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"/></svg>',calendar:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"/><rect width="1" height="3" x="6" y="2"/><rect width="1" height="3" x="13" y="2"/></svg>',camera:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"/><path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"/></svg>',cart:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="7.3" cy="17.3" r="1.4"/><circle cx="13.3" cy="17.3" r="1.4"/><polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"/></svg>',check:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"/></svg>',"chevron-double-left":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 14 6 10 10 6"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="14 14 10 10 14 6"/></svg>',"chevron-double-right":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 6 14 10 10 14"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="6 6 10 10 6 14"/></svg>',"chevron-down":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"/></svg>',"chevron-left":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"/></svg>',"chevron-right":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"/></svg>',"chevron-up":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"/></svg>',clock:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',close:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"/><path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"/></svg>',"cloud-download":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',"cloud-upload":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',code:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"/></svg>',cog:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"/><path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"/></svg>',comment:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"/></svg>',commenting:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"/><circle cx="10" cy="8" r="1"/><circle cx="6" cy="8" r="1"/><circle cx="14" cy="8" r="1"/></svg>',comments:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"/><path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"/></svg>',copy:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"/><polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"/></svg>',"credit-card":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"/><rect x="1" y="7" width="18" height="3"/></svg>',database:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"/><path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"/><path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"/><path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"/></svg>',desktop:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="15" width="1" height="2"/><rect x="11" y="15" width="1" height="2"/><rect x="5" y="16" width="10" height="1"/><rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"/></svg>',download:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"/></svg>',dribbble:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"/><path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"/><path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"/><circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"/></svg>',etsy:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z"/></svg>',expand:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 18 2 18 7 17 7 17 3 13 3"/><polygon points="2 13 3 13 3 17 7 17 7 18 2 18"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"/></svg>',facebook:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"/></svg>',"file-edit":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"/><polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"/></svg>',"file-pdf":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><path d="M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z"/></svg>',"file-text":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><line fill="none" stroke="#000" x1="6" x2="12" y1="12.5" y2="12.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="8.5" y2="8.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="6.5" y2="6.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="10.5" y2="10.5"/></svg>',file:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"/></svg>',flickr:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="5.5" cy="9.5" r="3.5"/><circle cx="14.5" cy="9.5" r="3.5"/></svg>',folder:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"/></svg>',forward:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"/></svg>',foursquare:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"/></svg>',future:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"/><rect x="9" y="4" width="1" height="7"/><path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"/></svg>',"git-branch":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2"/><path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5"/></svg>',"git-fork":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" r="1.79"/><path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57"/></svg>',"github-alt":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"/></svg>',github:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"/></svg>',gitter:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="1" width="1.531" height="11.471"/><rect x="7.324" y="4.059" width="1.529" height="15.294"/><rect x="11.148" y="4.059" width="1.527" height="15.294"/><rect x="14.971" y="4.059" width="1.529" height="8.412"/></svg>',"google-plus":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z"/><polygon points="20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9"/></svg>',google:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"/></svg>',grid:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="3" height="3"/><rect x="8" y="2" width="3" height="3"/><rect x="14" y="2" width="3" height="3"/><rect x="2" y="8" width="3" height="3"/><rect x="8" y="8" width="3" height="3"/><rect x="14" y="8" width="3" height="3"/><rect x="2" y="14" width="3" height="3"/><rect x="8" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>',happy:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="7" r="1"/><circle cx="7" cy="7" r="1"/><circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"/><path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"/></svg>',hashtag:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"/></svg>',heart:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"/></svg>',history:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',home:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"/><polygon points="15 4 18 4 18 7 17 7 17 5 15 5"/><polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"/></svg>',image:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="16.1" cy="6.1" r="1.1"/><rect fill="none" stroke="#000" x=".5" y="2.5" width="19" height="15"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"/></svg>',info:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',instagram:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"/><circle cx="14.87" cy="5.26" r="1.09"/><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"/></svg>',italic:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"/></svg>',joomla:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"/><path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"/><path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"/><path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"/></svg>',laptop:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="16" width="20" height="1"/><rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"/></svg>',lifesaver:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z"/></svg>',link:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"/></svg>',linkedin:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"/><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"/></svg>',list:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="12" height="1"/><rect x="6" y="9" width="12" height="1"/><rect x="6" y="14" width="12" height="1"/><rect x="2" y="4" width="2" height="1"/><rect x="2" y="9" width="2" height="1"/><rect x="2" y="14" width="2" height="1"/></svg>',location:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"/><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"/></svg>',lock:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"/><path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"/></svg>',mail:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"/><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"/></svg>',menu:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="16" height="1"/><rect x="2" y="9" width="16" height="1"/><rect x="2" y="14" width="16" height="1"/></svg>',microphone:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" x1="10" x2="10" y1="16.44" y2="18.5"/><line fill="none" stroke="#000" x1="7" x2="13" y1="18.5" y2="18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6"/></svg>',"minus-circle":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',minus:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect height="1" width="18" y="9" x="1"/></svg>',"more-vertical":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="3" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="17" r="2"/></svg>',more:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="10" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="17" cy="10" r="2"/></svg>',move:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="4,5 1,5 1,9 2,9 2,6 4,6"/><polygon points="1,16 2,16 2,18 4,18 4,19 1,19"/><polygon points="14,16 14,19 11,19 11,18 13,18 13,16"/><rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"/><rect x="1" y="11" width="1" height="3"/><rect x="6" y="18" width="3" height="1"/></svg>',nut:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"/><circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"/></svg>',pagekit:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19"/></svg>',"paint-bucket":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M6.42,2.33 L11.7,7.61"/><path d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z"/></svg>',pencil:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"/><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"/></svg>',"phone-landscape":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"/><circle cx="3.8" cy="10.5" r=".8"/></svg>',phone:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"/><circle cx="10.5" cy="16.5" r=".8"/></svg>',pinterest:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"/></svg>',"play-circle":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',play:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"/></svg>',"plus-circle":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',plus:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="1" width="1" height="17"/><rect x="1" y="9" width="17" height="1"/></svg>',print:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5"/><polyline fill="none" stroke="#000" points="15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5"/><rect fill="none" stroke="#000" width="11" height="6" x="4.5" y="11.5"/><rect width="8" height="1" x="6" y="13"/><rect width="8" height="1" x="6" y="15"/></svg>',pull:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"/><line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"/><polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"/></svg>',push:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"/><line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"/><polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"/></svg>',question:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><circle cx="10.44" cy="14.42" r="1.05"/><path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75"/></svg>',"quote-right":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"/><path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"/></svg>',receiver:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"/></svg>',reddit:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z"/><path d="M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z"/><path d="M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z"/><path d="M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z"/></svg>',refresh:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"/><polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"/></svg>',reply:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"/></svg>',rss:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3.12" cy="16.8" r="1.85"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"/></svg>',search:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',server:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="1" height="2"/><rect x="5" y="3" width="1" height="2"/><rect x="7" y="3" width="1" height="2"/><rect x="16" y="3" width="1" height="1"/><rect x="16" y="10" width="1" height="1"/><circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"/><rect x="3" y="10" width="1" height="2"/><rect x="5" y="10" width="1" height="2"/><rect x="9.5" y="14" width="1" height="2"/><rect x="3" y="17" width="6" height="1"/><rect x="11" y="17" width="6" height="1"/><rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"/><rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"/></svg>',settings:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"/><ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"/><circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"/><rect x="1" y="3" width="3" height="1"/><rect x="10" y="3" width="8" height="1"/><rect x="1" y="9" width="8" height="1"/><rect x="15" y="9" width="3" height="1"/><rect x="1" y="15" width="3" height="1"/><rect x="10" y="15" width="8" height="1"/></svg>',shrink:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="11 4 12 4 12 8 16 8 16 9 11 9"/><polygon points="4 11 9 11 9 16 8 16 8 12 4 12"/><path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"/></svg>',"sign-in":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"/><polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"/></svg>',"sign-out":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"/><polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"/></svg>',social:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"/></svg>',soundcloud:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"/><rect x="6" y="6.5" width="1.5" height="8.5"/><rect x="3" y="8" width="1.5" height="7"/><rect y="10" width="1.5" height="5"/></svg>',star:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"/></svg>',strikethrough:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"/><rect x="3" y="10" width="15" height="1"/></svg>',table:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="18" height="1"/><rect x="1" y="7" width="18" height="1"/><rect x="1" y="11" width="18" height="1"/><rect x="1" y="15" width="18" height="1"/></svg>',"tablet-landscape":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"/><circle cx="3.7" cy="10.5" r=".8"/></svg>',tablet:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"/><circle cx="10.5" cy="16.3" r=".8"/></svg>',tag:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"/><circle cx="14" cy="6" r="1"/></svg>',thumbnails:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"/><rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"/></svg>',trash:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"/><polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"/><rect x="8" y="7" width="1" height="9"/><rect x="11" y="7" width="1" height="9"/><rect x="2" y="3" width="16" height="1"/></svg>',"triangle-down":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 7 15 7 10 12"/></svg>',"triangle-left":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 5 7 10 12 15"/></svg>',"triangle-right":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="8 5 13 10 8 15"/></svg>',"triangle-up":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 13 10 8 15 13"/></svg>',tripadvisor:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"/></svg>',tumblr:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"/></svg>',tv:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="16" width="6" height="1"/><rect fill="none" stroke="#000" x=".5" y="3.5" width="19" height="11"/></svg>',twitter:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"/></svg>',uikit:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"/><polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"/></svg>',unlock:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"/><path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"/></svg>',upload:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"/></svg>',user:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"/></svg>',users:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"/></svg>',"video-camera":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="17.5 6.9 17.5 13.1 13.5 10.4 13.5 14.5 2.5 14.5 2.5 5.5 13.5 5.5 13.5 9.6 17.5 6.9"/></svg>',vimeo:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"/></svg>',warning:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="14" r="1"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"/></svg>',whatsapp:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"/></svg>',wordpress:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"/></svg>',world:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1,10.5 L19,10.5"/><path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"/><path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"/><path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"/><circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"/></svg>',xing:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"/><path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"/></svg>',yelp:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"/></svg>',youtube:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"/></svg>'})}return"undefined"!=typeof window&&window.UIkit&&window.UIkit.use(i),i});
var admin2020_utilities_ajax = {"ajax_url":"https:\/\/walletsnear.org\/ajax.php","security":"e64524880a"};
function a2020_save_user_prefences(a,e,s=null){""!=a&&jQuery.ajax({url:admin2020_utilities_ajax.ajax_url,type:"post",data:{action:"a2020_save_user_prefences",security:admin2020_utilities_ajax.security,pref:a,value:e},success:function(a){a&&(console.log(a),data=JSON.parse(a),data.error?UIkit.notification(data.error_message,"danger"):0!=s&&UIkit.notification(data.message,"success"))}})}
var a2020Vue = (function (exports) {
  "use strict";

  
  function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }

  
  const PatchFlagNames = {
    [1 ]: `TEXT`,
    [2 ]: `CLASS`,
    [4 ]: `STYLE`,
    [8 ]: `PROPS`,
    [16 ]: `FULL_PROPS`,
    [32 ]: `HYDRATE_EVENTS`,
    [64 ]: `STABLE_FRAGMENT`,
    [128 ]: `KEYED_FRAGMENT`,
    [256 ]: `UNKEYED_FRAGMENT`,
    [512 ]: `NEED_PATCH`,
    [1024 ]: `DYNAMIC_SLOTS`,
    [2048 ]: `DEV_ROOT_FRAGMENT`,
    [-1 ]: `HOISTED`,
    [-2 ]: `BAIL`,
  };

  
  const slotFlagsText = {
    [1 ]: "STABLE",
    [2 ]: "DYNAMIC",
    [3 ]: "FORWARDED",
  };

  const GLOBALS_WHITE_LISTED =
    "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI," +
    "decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array," +
    "Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
  const isGloballyWhitelisted =  makeMap(GLOBALS_WHITE_LISTED);

  const range = 2;
  function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (let j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) continue;
          const line = j + 1;
          res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
          const lineLength = lines[j].length;
          if (j === i) {
            // push underline
            const pad = start - (count - lineLength) + 1;
            const length = Math.max(1, end > count ? lineLength - pad : end - start);
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }

  
  const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  const isSpecialBooleanAttr =  makeMap(specialBooleanAttrs);

  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isObject(value)) {
      return value;
    }
  }
  const listDelimiterRE = /;(?![^(]*\))/g;
  const propertyDelimiterRE = /:(.+)/;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }

  // These tag configs are shared between compiler-dom and runtime-dom, so they
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
  const HTML_TAGS =
    "html,body,base,head,link,meta,style,title,address,article,aside,footer," +
    "header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption," +
    "figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code," +
    "data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup," +
    "time,u,var,wbr,area,audio,map,track,video,embed,object,param,source," +
    "canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td," +
    "th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup," +
    "option,output,progress,select,textarea,details,dialog,menu," +
    "summary,template,blockquote,iframe,tfoot";
  // https://developer.mozilla.org/en-US/docs/Web/SVG/Element
  const SVG_TAGS =
    "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile," +
    "defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer," +
    "feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap," +
    "feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR," +
    "feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset," +
    "fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter," +
    "foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask," +
    "mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern," +
    "polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol," +
    "text,textPath,title,tspan,unknown,use,view";
  const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
  const isHTMLTag =  makeMap(HTML_TAGS);
  const isSVGTag =  makeMap(SVG_TAGS);
  const isVoidTag =  makeMap(VOID_TAGS);

  function looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
      equal = looseEqual(a[i], b[i]);
    }
    return equal;
  }
  function looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
      
      if (!aValidType || !bValidType) {
        return false;
      }
      const aKeysCount = Object.keys(a).length;
      const bKeysCount = Object.keys(b).length;
      if (aKeysCount !== bKeysCount) {
        return false;
      }
      for (const key in a) {
        const aHasKey = a.hasOwnProperty(key);
        const bHasKey = b.hasOwnProperty(key);
        if ((aHasKey && !bHasKey) || (!aHasKey && bHasKey) || !looseEqual(a[key], b[key])) {
          return false;
        }
      }
    }
    return String(a) === String(b);
  }
  function looseIndexOf(arr, val) {
    return arr.findIndex((item) => looseEqual(item, val));
  }

  
  const toDisplayString = (val) => {
    return val == null ? "" : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
  };
  const replacer = (_key, val) => {
    if (isMap(val)) {
      return {
        [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
          entries[`${key} =>`] = val;
          return entries;
        }, {}),
      };
    } else if (isSet(val)) {
      return {
        [`Set(${val.size})`]: [...val.values()],
      };
    } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
      return String(val);
    }
    return val;
  };

  const EMPTY_OBJ = Object.freeze({});
  const EMPTY_ARR = Object.freeze([]);
  const NOOP = () => {};
  
  const NO = () => false;
  const onRE = /^on[^a-z]/;
  const isOn = (key) => onRE.test(key);
  const isModelListener = (key) => key.startsWith("onUpdate:");
  const extend = Object.assign;
  const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
      arr.splice(i, 1);
    }
  };
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const isArray = Array.isArray;
  const isMap = (val) => toTypeString(val) === "[object Map]";
  const isSet = (val) => toTypeString(val) === "[object Set]";
  const isDate = (val) => val instanceof Date;
  const isFunction = (val) => typeof val === "function";
  const isString = (val) => typeof val === "string";
  const isSymbol = (val) => typeof val === "symbol";
  const isObject = (val) => val !== null && typeof val === "object";
  const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  };
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
  };
  const isPlainObject = (val) => toTypeString(val) === "[object Object]";
  const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  const isReservedProp =  makeMap(
    // the leading comma is intentional so empty string "" is also included
    ",key,ref," + "onVnodeBeforeMount,onVnodeMounted," + "onVnodeBeforeUpdate,onVnodeUpdated," + "onVnodeBeforeUnmount,onVnodeUnmounted"
  );
  const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  const camelizeRE = /-(\w)/g;
  
  const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""));
  });
  const hyphenateRE = /\B([A-Z])/g;
  
  const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  
  const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  
  const toHandlerKey = cacheStringFunction((str) => (str ? `on${capitalize(str)}` : ``));
  // compare whether a value has changed, accounting for NaN.
  const hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
      fns[i](arg);
    }
  };
  const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      value,
    });
  };
  const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
  };
  let _globalThis;
  const getGlobalThis = () => {
    return (
      _globalThis ||
      (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
    );
  };

  const targetMap = new WeakMap();
  const effectStack = [];
  let activeEffect;
  const ITERATE_KEY = Symbol("iterate");
  const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
  function isEffect(fn) {
    return fn && fn._isEffect === true;
  }
  function effect(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) {
      fn = fn.raw;
    }
    const effect = createReactiveEffect(fn, options);
    if (!options.lazy) {
      effect();
    }
    return effect;
  }
  function stop(effect) {
    if (effect.active) {
      cleanup(effect);
      if (effect.options.onStop) {
        effect.options.onStop();
      }
      effect.active = false;
    }
  }
  let uid = 0;
  function createReactiveEffect(fn, options) {
    const effect = function reactiveEffect() {
      if (!effect.active) {
        return options.scheduler ? undefined : fn();
      }
      if (!effectStack.includes(effect)) {
        cleanup(effect);
        try {
          enableTracking();
          effectStack.push(effect);
          activeEffect = effect;
          return fn();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };
    effect.id = uid++;
    effect.allowRecurse = !!options.allowRecurse;
    effect._isEffect = true;
    effect.active = true;
    effect.raw = fn;
    effect.deps = [];
    effect.options = options;
    return effect;
  }
  function cleanup(effect) {
    const { deps } = effect;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect);
      }
      deps.length = 0;
    }
  }
  let shouldTrack = true;
  const trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === undefined ? true : last;
  }
  function track(target, type, key) {
    if (!shouldTrack || activeEffect === undefined) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, (dep = new Set()));
    }
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (activeEffect.options.onTrack) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key,
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      // never been tracked
      return;
    }
    const effects = new Set();
    const add = (effectsToAdd) => {
      if (effectsToAdd) {
        effectsToAdd.forEach((effect) => {
          if (effect !== activeEffect || effect.allowRecurse) {
            effects.add(effect);
          }
        });
      }
    };
    if (type === "clear" ) {
      // collection being cleared
      // trigger all effects for target
      depsMap.forEach(add);
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key) => {
        if (key === "length" || key >= newValue) {
          add(dep);
        }
      });
    } else {
      // schedule runs for SET | ADD | DELETE
      if (key !== void 0) {
        add(depsMap.get(key));
      }
      // also run for iteration key on ADD | DELETE | Map.SET
      switch (type) {
        case "add" :
          if (!isArray(target)) {
            add(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            // new index added to array -> length changes
            add(depsMap.get("length"));
          }
          break;
        case "delete" :
          if (!isArray(target)) {
            add(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set" :
          if (isMap(target)) {
            add(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const run = (effect) => {
      if (effect.options.onTrigger) {
        effect.options.onTrigger({
          effect,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget,
        });
      }
      if (effect.options.scheduler) {
        effect.options.scheduler(effect);
      } else {
        effect();
      }
    };
    effects.forEach(run);
  }

  const isNonTrackableKeys =  makeMap(`__proto__,__v_isRef,__isa2020Vue`);
  const builtInSymbols = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((key) => Symbol[key])
      .filter(isSymbol)
  );
  const get =  createGetter();
  const shallowGet =  createGetter(false, true);
  const readonlyGet =  createGetter(true);
  const shallowReadonlyGet =  createGetter(true, true);
  const arrayInstrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function (...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get" , i + "");
      }
      // we run the method using the original args first (which may be reactive)
      const res = method.apply(arr, args);
      if (res === -1 || res === false) {
        // if that didn't work, run it again using raw values.
        return method.apply(arr, args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function (...args) {
      pauseTracking();
      const res = method.apply(this, args);
      resetTracking();
      return res;
    };
  });
  function createGetter(isReadonly = false, shallow = false) {
    return function get(target, key, receiver) {
      if (key === "__v_isReactive" ) {
        return !isReadonly;
      } else if (key === "__v_isReadonly" ) {
        return isReadonly;
      } else if (key === "__v_raw"  && receiver === (isReadonly ? (shallow ? shallowReadonlyMap : readonlyMap) : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly) {
        track(target, "get" , key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        // ref unwrapping - does not apply for Array + integer key.
        const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (isObject(res)) {
        // Convert returned value into a proxy as well. we do the isObject check
        // here to avoid invalid value warning. Also need to lazy access readonly
        // and reactive here to avoid circular dependency.
        return isReadonly ? readonly(res) : reactive(res);
      }
      return res;
    };
  }
  const set =  createSetter();
  const shallowSet =  createSetter(true);
  function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      // don't trigger if target is something up in the prototype chain of original
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add" , key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set" , key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete" , key, undefined, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has" , key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate" , isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  const mutableHandlers = {
    get,
    set,
    deleteProperty,
    has,
    ownKeys,
  };
  const readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
  };
  const shallowReactiveHandlers = extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet,
  });
  // Props handlers are special in the sense that it should not unwrap top-level
  // refs (in order to allow refs to be explicitly passed down), but should
  // retain the reactivity of the normal readonly object.
  const shallowReadonlyHandlers = extend({}, readonlyHandlers, {
    get: shallowReadonlyGet,
  });

  const toReactive = (value) => (isObject(value) ? reactive(value) : value);
  const toReadonly = (value) => (isObject(value) ? readonly(value) : value);
  const toShallow = (value) => value;
  const getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1(target, key, isReadonly = false, isShallow = false) {
    // #1772: readonly(reactive(Map)) should return readonly + reactive version
    // of the value
    target = target["__v_raw" ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "get" , key);
    }
    !isReadonly && track(rawTarget, "get" , rawKey);
    const { has } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    }
  }
  function has$1(key, isReadonly = false) {
    const target = this["__v_raw" ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "has" , key);
    }
    !isReadonly && track(rawTarget, "has" , rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly = false) {
    target = target["__v_raw" ];
    !isReadonly && track(toRaw(target), "iterate" , ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add" , value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has.call(target, key);
    } else {
      checkIdentityKeys(target, has, key);
    }
    const oldValue = get.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add" , key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set" , key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has.call(target, key);
    } else {
      checkIdentityKeys(target, has, key);
    }
    const oldValue = get ? get.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete" , key, undefined, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = isMap(target) ? new Map(target) : new Set(target);
    // forward the operation before queueing reactions
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear" , undefined, undefined, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw" ];
      const rawTarget = toRaw(target);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate" , ITERATE_KEY);
      return target.forEach((value, key) => {
        // important: make sure the callback is
        // 1. invoked with the reactive map as `this` and 3rd arg
        // 2. the value received should be a corresponding reactive/readonly.
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly, isShallow) {
    return function (...args) {
      const target = this["__v_raw" ];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || (method === Symbol.iterator && targetIsMap);
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate" , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      // return a wrapped iterator which returns observed versions of the
      // values emitted from the real iterator
      return {
        // iterator protocol
        next() {
          const { value, done } = innerIterator.next();
          return done
            ? { value, done }
            : {
                value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                done,
              };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        },
      };
    };
  }
  function createReadonlyMethod(type) {
    return function (...args) {
      {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete"  ? false : this;
    };
  }
  const mutableInstrumentations = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false),
  };
  const shallowInstrumentations = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true),
  };
  const readonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add" ),
    set: createReadonlyMethod("set" ),
    delete: createReadonlyMethod("delete" ),
    clear: createReadonlyMethod("clear" ),
    forEach: createForEach(true, false),
  };
  const shallowReadonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add" ),
    set: createReadonlyMethod("set" ),
    delete: createReadonlyMethod("delete" ),
    clear: createReadonlyMethod("clear" ),
    forEach: createForEach(true, true),
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? (isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations) : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive" ) {
        return !isReadonly;
      } else if (key === "__v_isReadonly" ) {
        return isReadonly;
      } else if (key === "__v_raw" ) {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  const mutableCollectionHandlers = {
    get: createInstrumentationGetter(false, false),
  };
  const shallowCollectionHandlers = {
    get: createInstrumentationGetter(false, true),
  };
  const readonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, false),
  };
  const shallowReadonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, true),
  };
  function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
      const type = toRawType(target);
      console.warn(
        `Reactive ${type} contains both the raw and reactive ` +
          `versions of the same object${type === `Map` ? ` as keys` : ``}, ` +
          `which can lead to inconsistencies. ` +
          `Avoid differentiating between the raw and reactive versions ` +
          `of an object and only use the reactive version if possible.`
      );
    }
  }

  const reactiveMap = new WeakMap();
  const shallowReactiveMap = new WeakMap();
  const readonlyMap = new WeakMap();
  const shallowReadonlyMap = new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1 ;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2 ;
      default:
        return 0 ;
    }
  }
  function getTargetType(value) {
    return value["__v_skip" ] || !Object.isExtensible(value) ? 0  : targetTypeMap(toRawType(value));
  }
  function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (target && target["__v_isReadonly" ]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  
  function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
  }
  
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  
  function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
  }
  function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" ] && !(isReadonly && target["__v_isReactive" ])) {
      return target;
    }
    // target already has corresponding Proxy
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    // only a whitelist of value types can be observed.
    const targetType = getTargetType(target);
    if (targetType === 0 ) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2  ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function isReactive(value) {
    if (isReadonly(value)) {
      return isReactive(value["__v_raw" ]);
    }
    return !!(value && value["__v_isReactive" ]);
  }
  function isReadonly(value) {
    return !!(value && value["__v_isReadonly" ]);
  }
  function isProxy(value) {
    return isReactive(value) || isReadonly(value);
  }
  function toRaw(observed) {
    return (observed && toRaw(observed["__v_raw" ])) || observed;
  }
  function markRaw(value) {
    def(value, "__v_skip" , true);
    return value;
  }

  const convert = (val) => (isObject(val) ? reactive(val) : val);
  function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
  }
  function ref(value) {
    return createRef(value);
  }
  function shallowRef(value) {
    return createRef(value, true);
  }
  class RefImpl {
    constructor(_rawValue, _shallow = false) {
      this._rawValue = _rawValue;
      this._shallow = _shallow;
      this.__v_isRef = true;
      this._value = _shallow ? _rawValue : convert(_rawValue);
    }
    get value() {
      track(toRaw(this), "get" , "value");
      return this._value;
    }
    set value(newVal) {
      if (hasChanged(toRaw(newVal), this._rawValue)) {
        this._rawValue = newVal;
        this._value = this._shallow ? newVal : convert(newVal);
        trigger(toRaw(this), "set" , "value", newVal);
      }
    }
  }
  function createRef(rawValue, shallow = false) {
    if (isRef(rawValue)) {
      return rawValue;
    }
    return new RefImpl(rawValue, shallow);
  }
  function triggerRef(ref) {
    trigger(toRaw(ref), "set" , "value", ref.value);
  }
  function unref(ref) {
    return isRef(ref) ? ref.value : ref;
  }
  const shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
      const oldValue = target[key];
      if (isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      } else {
        return Reflect.set(target, key, value, receiver);
      }
    },
  };
  function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
  }
  class CustomRefImpl {
    constructor(factory) {
      this.__v_isRef = true;
      const { get, set } = factory(
        () => track(this, "get" , "value"),
        () => trigger(this, "set" , "value")
      );
      this._get = get;
      this._set = set;
    }
    get value() {
      return this._get();
    }
    set value(newVal) {
      this._set(newVal);
    }
  }
  function customRef(factory) {
    return new CustomRefImpl(factory);
  }
  function toRefs(object) {
    if (!isProxy(object)) {
      console.warn(`toRefs() expects a reactive object but received a plain one.`);
    }
    const ret = isArray(object) ? new Array(object.length) : {};
    for (const key in object) {
      ret[key] = toRef(object, key);
    }
    return ret;
  }
  class ObjectRefImpl {
    constructor(_object, _key) {
      this._object = _object;
      this._key = _key;
      this.__v_isRef = true;
    }
    get value() {
      return this._object[this._key];
    }
    set value(newVal) {
      this._object[this._key] = newVal;
    }
  }
  function toRef(object, key) {
    return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
  }

  class ComputedRefImpl {
    constructor(getter, _setter, isReadonly) {
      this._setter = _setter;
      this._dirty = true;
      this.__v_isRef = true;
      this.effect = effect(getter, {
        lazy: true,
        scheduler: () => {
          if (!this._dirty) {
            this._dirty = true;
            trigger(toRaw(this), "set" , "value");
          }
        },
      });
      this["__v_isReadonly" ] = isReadonly;
    }
    get value() {
      // the computed ref may get wrapped by other proxies e.g. readonly() #3376
      const self = toRaw(this);
      if (self._dirty) {
        self._value = this.effect();
        self._dirty = false;
      }
      track(self, "get" , "value");
      return self._value;
    }
    set value(newValue) {
      this._setter(newValue);
    }
  }
  function computed(getterOrOptions) {
    let getter;
    let setter;
    if (isFunction(getterOrOptions)) {
      getter = getterOrOptions;
      setter = () => {
        console.warn("Write operation failed: computed value is readonly");
      };
    } else {
      getter = getterOrOptions.get;
      setter = getterOrOptions.set;
    }
    return new ComputedRefImpl(getter, setter, isFunction(getterOrOptions) || !getterOrOptions.set);
  }

  const stack = [];
  function pushWarningContext(vnode) {
    stack.push(vnode);
  }
  function popWarningContext() {
    stack.pop();
  }
  function warn(msg, ...args) {
    // avoid props formatting or warn handler tracking deps that might be mutated
    // during patch, leading to infinite recursion.
    pauseTracking();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
      callWithErrorHandling(appWarnHandler, instance, 11 , [
        msg + args.join(""),
        instance && instance.proxy,
        trace.map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
        trace,
      ]);
    } else {
      const warnArgs = [`[a2020Vue warn]: ${msg}`, ...args];
      
      if (
        trace.length &&
        // avoid spamming console during tests
        !false
      ) {
        warnArgs.push(`\n`, ...formatTrace(trace));
      }
      console.warn(...warnArgs);
    }
    resetTracking();
  }
  function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) {
      return [];
    }
    // we can't just use the stack because it will be incomplete during updates
    // that did not start from the root. Re-construct the parent chain using
    // instance parent pointers.
    const normalizedStack = [];
    while (currentVNode) {
      const last = normalizedStack[0];
      if (last && last.vnode === currentVNode) {
        last.recurseCount++;
      } else {
        normalizedStack.push({
          vnode: currentVNode,
          recurseCount: 0,
        });
      }
      const parentInstance = currentVNode.component && currentVNode.component.parent;
      currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
  }
  
  function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i) => {
      logs.push(...(i === 0 ? [] : [`\n`]), ...formatTraceEntry(entry));
    });
    return logs;
  }
  function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
  }
  
  function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key) => {
      res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) {
      res.push(` ...`);
    }
    return res;
  }
  
  function formatProp(key, value, raw) {
    if (isString(value)) {
      value = JSON.stringify(value);
      return raw ? value : [`${key}=${value}`];
    } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
      return raw ? value : [`${key}=${value}`];
    } else if (isRef(value)) {
      value = formatProp(key, toRaw(value.value), true);
      return raw ? value : [`${key}=Ref<`, value, `>`];
    } else if (isFunction(value)) {
      return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    } else {
      value = toRaw(value);
      return raw ? value : [`${key}=`, value];
    }
  }

  const ErrorTypeStrings = {
    ["bc" ]: "beforeCreate hook",
    ["c" ]: "created hook",
    ["bm" ]: "beforeMount hook",
    ["m" ]: "mounted hook",
    ["bu" ]: "beforeUpdate hook",
    ["u" ]: "updated",
    ["bum" ]: "beforeUnmount hook",
    ["um" ]: "unmounted hook",
    ["a" ]: "activated hook",
    ["da" ]: "deactivated hook",
    ["ec" ]: "errorCaptured hook",
    ["rtc" ]: "renderTracked hook",
    ["rtg" ]: "renderTriggered hook",
    [0 ]: "setup function",
    [1 ]: "render function",
    [2 ]: "watcher getter",
    [3 ]: "watcher callback",
    [4 ]: "watcher cleanup function",
    [5 ]: "native event handler",
    [6 ]: "component event handler",
    [7 ]: "vnode hook",
    [8 ]: "directive hook",
    [9 ]: "transition hook",
    [10 ]: "app errorHandler",
    [11 ]: "app warnHandler",
    [12 ]: "ref function",
    [13 ]: "async component loader",
    [14 ]: "scheduler flush. This is likely a a2020Vue internals bug. " + "Please open an issue at https://new-issue.a2020Vuejs.org/?repo=a2020Vuejs/a2020Vue-next",
  };
  function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
      res = args ? fn(...args) : fn();
    } catch (err) {
      handleError(err, instance, type);
    }
    return res;
  }
  function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (isFunction(fn)) {
      const res = callWithErrorHandling(fn, instance, type, args);
      if (res && isPromise(res)) {
        res.catch((err) => {
          handleError(err, instance, type);
        });
      }
      return res;
    }
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
  }
  function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
      let cur = instance.parent;
      // the exposed instance is the render proxy to keep it consistent with 2.x
      const exposedInstance = instance.proxy;
      // in production the hook receives only the error code
      const errorInfo = ErrorTypeStrings[type];
      while (cur) {
        const errorCapturedHooks = cur.ec;
        if (errorCapturedHooks) {
          for (let i = 0; i < errorCapturedHooks.length; i++) {
            if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
              return;
            }
          }
        }
        cur = cur.parent;
      }
      // app-level handling
      const appErrorHandler = instance.appContext.config.errorHandler;
      if (appErrorHandler) {
        callWithErrorHandling(appErrorHandler, null, 10 , [err, exposedInstance, errorInfo]);
        return;
      }
    }
    logError(err, type, contextVNode, throwInDev);
  }
  function logError(err, type, contextVNode, throwInDev = true) {
    {
      const info = ErrorTypeStrings[type];
      if (contextVNode) {
        pushWarningContext(contextVNode);
      }
      warn(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
      if (contextVNode) {
        popWarningContext();
      }
      // crash in dev by default so it's more noticeable
      if (throwInDev) {
        throw err;
      } else {
        console.error(err);
      }
    }
  }

  let isFlushing = false;
  let isFlushPending = false;
  const queue = [];
  let flushIndex = 0;
  const pendingPreFlushCbs = [];
  let activePreFlushCbs = null;
  let preFlushIndex = 0;
  const pendingPostFlushCbs = [];
  let activePostFlushCbs = null;
  let postFlushIndex = 0;
  const resolvedPromise = Promise.resolve();
  let currentFlushPromise = null;
  let currentPreFlushParentJob = null;
  const RECURSION_LIMIT = 100;
  function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
  }
  // #2768
  // Use binary-search to find a suitable position in the queue,
  // so that the queue maintains the increasing order of job's id,
  // which can prevent the job from being skipped and also can avoid repeated patching.
  function findInsertionIndex(job) {
    // the start index should be `flushIndex + 1`
    let start = flushIndex + 1;
    let end = queue.length;
    const jobId = getId(job);
    while (start < end) {
      const middle = (start + end) >>> 1;
      const middleJobId = getId(queue[middle]);
      middleJobId < jobId ? (start = middle + 1) : (end = middle);
    }
    return start;
  }
  function queueJob(job) {
    // the dedupe search uses the startIndex argument of Array.includes()
    // by default the search index includes the current job that is being run
    // so it cannot recursively trigger itself again.
    // if the job is a watch() callback, the search will start with a +1 index to
    // allow it recursively trigger itself - it is the user's responsibility to
    // ensure it doesn't end up in an infinite loop.
    if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
      const pos = findInsertionIndex(job);
      if (pos > -1) {
        queue.splice(pos, 0, job);
      } else {
        queue.push(job);
      }
      queueFlush();
    }
  }
  function queueFlush() {
    if (!isFlushing && !isFlushPending) {
      isFlushPending = true;
      currentFlushPromise = resolvedPromise.then(flushJobs);
    }
  }
  function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) {
      queue.splice(i, 1);
    }
  }
  function queueCb(cb, activeQueue, pendingQueue, index) {
    if (!isArray(cb)) {
      if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
        pendingQueue.push(cb);
      }
    } else {
      // if cb is an array, it is a component lifecycle hook which can only be
      // triggered by a job, which is already deduped in the main queue, so
      // we can skip duplicate check here to improve perf
      pendingQueue.push(...cb);
    }
    queueFlush();
  }
  function queuePreFlushCb(cb) {
    queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
  }
  function queuePostFlushCb(cb) {
    queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
  }
  function flushPreFlushCbs(seen, parentJob = null) {
    if (pendingPreFlushCbs.length) {
      currentPreFlushParentJob = parentJob;
      activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
      pendingPreFlushCbs.length = 0;
      {
        seen = seen || new Map();
      }
      for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
        {
          checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex]);
        }
        activePreFlushCbs[preFlushIndex]();
      }
      activePreFlushCbs = null;
      preFlushIndex = 0;
      currentPreFlushParentJob = null;
      // recursively flush until it drains
      flushPreFlushCbs(seen, parentJob);
    }
  }
  function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
      const deduped = [...new Set(pendingPostFlushCbs)];
      pendingPostFlushCbs.length = 0;
      // #1947 already has active queue, nested flushPostFlushCbs call
      if (activePostFlushCbs) {
        activePostFlushCbs.push(...deduped);
        return;
      }
      activePostFlushCbs = deduped;
      {
        seen = seen || new Map();
      }
      activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
      for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
        {
          checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex]);
        }
        activePostFlushCbs[postFlushIndex]();
      }
      activePostFlushCbs = null;
      postFlushIndex = 0;
    }
  }
  const getId = (job) => (job.id == null ? Infinity : job.id);
  function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    {
      seen = seen || new Map();
    }
    flushPreFlushCbs(seen);
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child so its render effect will have smaller
    //    priority number)
    // 2. If a component is unmounted during a parent component's update,
    //    its update can be skipped.
    queue.sort((a, b) => getId(a) - getId(b));
    try {
      for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
        const job = queue[flushIndex];
        if (job) {
          if (true) {
            checkRecursiveUpdates(seen, job);
          }
          callWithErrorHandling(job, null, 14 );
        }
      }
    } finally {
      flushIndex = 0;
      queue.length = 0;
      flushPostFlushCbs(seen);
      isFlushing = false;
      currentFlushPromise = null;
      // some postFlushCb queued jobs!
      // keep flushing until it drains.
      if (queue.length || pendingPostFlushCbs.length) {
        flushJobs(seen);
      }
    }
  }
  function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) {
      seen.set(fn, 1);
    } else {
      const count = seen.get(fn);
      if (count > RECURSION_LIMIT) {
        throw new Error(
          `Maximum recursive updates exceeded. ` +
            `This means you have a reactive effect that is mutating its own ` +
            `dependencies and thus recursively triggering itself. Possible sources ` +
            `include component template, render function, updated hook or ` +
            `watcher source function.`
        );
      } else {
        seen.set(fn, count + 1);
      }
    }
  }

  
  let isHmrUpdating = false;
  const hmrDirtyComponents = new Set();
  // Expose the HMR runtime on the global object
  // This makes it entirely tree-shakable without polluting the exports and makes
  // it easier to be used in toolings like a2020Vue-loader
  // Note: for a component to be eligible for HMR it also needs the __hmrId option
  // to be set so that its instances can be registered / removed.
  {
    const globalObject = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
    globalObject.__a2020Vue_HMR_RUNTIME__ = {
      createRecord: tryWrap(createRecord),
      rerender: tryWrap(rerender),
      reload: tryWrap(reload),
    };
  }
  const map = new Map();
  function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
      createRecord(id, instance.type);
      record = map.get(id);
    }
    record.instances.add(instance);
  }
  function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
  }
  function createRecord(id, component) {
    if (!component) {
      warn(`HMR API usage is out of date.\n` + `Please upgrade a2020Vue-loader/vite/rollup-plugin-a2020Vue or other relevant ` + `dependency that handles a2020Vue SFC compilation.`);
      component = {};
    }
    if (map.has(id)) {
      return false;
    }
    map.set(id, {
      component: isClassComponent(component) ? component.__vccOpts : component,
      instances: new Set(),
    });
    return true;
  }
  function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) return;
    if (newRender) record.component.render = newRender;
    // Array.from creates a snapshot which avoids the set being mutated during
    // updates
    Array.from(record.instances).forEach((instance) => {
      if (newRender) {
        instance.render = newRender;
      }
      instance.renderCache = [];
      // this flag forces child components with slot content to update
      isHmrUpdating = true;
      instance.update();
      isHmrUpdating = false;
    });
  }
  function reload(id, newComp) {
    const record = map.get(id);
    if (!record) return;
    // Array.from creates a snapshot which avoids the set being mutated during
    // updates
    const { component, instances } = record;
    if (!hmrDirtyComponents.has(component)) {
      // 1. Update existing comp definition to match new one
      newComp = isClassComponent(newComp) ? newComp.__vccOpts : newComp;
      extend(component, newComp);
      for (const key in component) {
        if (!(key in newComp)) {
          delete component[key];
        }
      }
      // 2. Mark component dirty. This forces the renderer to replace the component
      // on patch.
      hmrDirtyComponents.add(component);
      // 3. Make sure to unmark the component after the reload.
      queuePostFlushCb(() => {
        hmrDirtyComponents.delete(component);
      });
    }
    Array.from(instances).forEach((instance) => {
      if (instance.parent) {
        // 4. Force the parent instance to re-render. This will cause all updated
        // components to be unmounted and re-mounted. Queue the update so that we
        // don't end up forcing the same parent to re-render multiple times.
        queueJob(instance.parent.update);
      } else if (instance.appContext.reload) {
        // root instance mounted via createApp() has a reload method
        instance.appContext.reload();
      } else if (typeof window !== "undefined") {
        // root instance inside tree created via raw render(). Force reload.
        window.location.reload();
      } else {
        console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
      }
    });
  }
  function tryWrap(fn) {
    return (id, arg) => {
      try {
        return fn(id, arg);
      } catch (e) {
        console.error(e);
        console.warn(`[HMR] Something went wrong during a2020Vue component hot-reload. ` + `Full reload required.`);
      }
    };
  }

  function setDevtoolsHook(hook) {
    exports.devtools = hook;
  }
  function devtoolsInitApp(app, version) {
    // TODO queue if devtools is undefined
    if (!exports.devtools) return;
    exports.devtools.emit("app:init" , app, version, {
      Fragment,
      Text,
      Comment,
      Static,
    });
  }
  function devtoolsUnmountApp(app) {
    if (!exports.devtools) return;
    exports.devtools.emit("app:unmount" , app);
  }
  const devtoolsComponentAdded =  createDevtoolsComponentHook("component:added" );
  const devtoolsComponentUpdated =  createDevtoolsComponentHook("component:updated" );
  const devtoolsComponentRemoved =  createDevtoolsComponentHook("component:removed" );
  function createDevtoolsComponentHook(hook) {
    return (component) => {
      if (!exports.devtools) return;
      exports.devtools.emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
    };
  }
  function devtoolsComponentEmit(component, event, params) {
    if (!exports.devtools) return;
    exports.devtools.emit("component:emit" , component.appContext.app, component, event, params);
  }

  function emit(instance, event, ...rawArgs) {
    const props = instance.vnode.props || EMPTY_OBJ;
    {
      const {
        emitsOptions,
        propsOptions: [propsOptions],
      } = instance;
      if (emitsOptions) {
        if (!(event in emitsOptions)) {
          if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
            warn(`Component emitted event "${event}" but it is neither declared in ` + `the emits option nor as an "${toHandlerKey(event)}" prop.`);
          }
        } else {
          const validator = emitsOptions[event];
          if (isFunction(validator)) {
            const isValid = validator(...rawArgs);
            if (!isValid) {
              warn(`Invalid event arguments: event validation failed for event "${event}".`);
            }
          }
        }
      }
    }
    let args = rawArgs;
    const isModelListener = event.startsWith("update:");
    // for v-model update:xxx events, apply modifiers on args
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
      const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
      const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
      if (trim) {
        args = rawArgs.map((a) => a.trim());
      } else if (number) {
        args = rawArgs.map(toNumber);
      }
    }
    {
      devtoolsComponentEmit(instance, event, args);
    }
    {
      const lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
        warn(
          `Event "${lowerCaseEvent}" is emitted in component ` +
            `${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". ` +
            `Note that HTML attributes are case-insensitive and you cannot use ` +
            `v-on to listen to camelCase events when using in-DOM templates. ` +
            `You should probably use "${hyphenate(event)}" instead of "${event}".`
        );
      }
    }
    let handlerName;
    let handler =
      props[(handlerName = toHandlerKey(event))] ||
      // also try camelCase event handler (#2249)
      props[(handlerName = toHandlerKey(camelize(event)))];
    // for v-model update:xxx events, also trigger kebab-case equivalent
    // for props passed via kebab-case
    if (!handler && isModelListener) {
      handler = props[(handlerName = toHandlerKey(hyphenate(event)))];
    }
    if (handler) {
      callWithAsyncErrorHandling(handler, instance, 6 , args);
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
      if (!instance.emitted) {
        (instance.emitted = {})[handlerName] = true;
      } else if (instance.emitted[handlerName]) {
        return;
      }
      callWithAsyncErrorHandling(onceHandler, instance, 6 , args);
    }
  }
  function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    if (!appContext.deopt && comp.__emits !== undefined) {
      return comp.__emits;
    }
    const raw = comp.emits;
    let normalized = {};
    // apply mixin/extends props
    let hasExtends = false;
    if (!isFunction(comp)) {
      const extendEmits = (raw) => {
        const normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);
        if (normalizedFromExtend) {
          hasExtends = true;
          extend(normalized, normalizedFromExtend);
        }
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendEmits);
      }
      if (comp.extends) {
        extendEmits(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendEmits);
      }
    }
    if (!raw && !hasExtends) {
      return (comp.__emits = null);
    }
    if (isArray(raw)) {
      raw.forEach((key) => (normalized[key] = null));
    } else {
      extend(normalized, raw);
    }
    return (comp.__emits = normalized);
  }
  // Check if an incoming prop key is a declared emit event listener.
  // e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
  // both considered matched listeners.
  function isEmitListener(options, key) {
    if (!options || !isOn(key)) {
      return false;
    }
    key = key.slice(2).replace(/Once$/, "");
    return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
  }

  let isRenderingCompiledSlot = 0;
  const setCompiledSlotRendering = (n) => (isRenderingCompiledSlot += n);
  
  function renderSlot(
    slots,
    name,
    props = {},
    // this is not a user-facing function, so the fallback is always generated by
    // the compiler and guaranteed to be a function returning an array
    fallback,
    noSlotted
  ) {
    let slot = slots[name];
    if (slot && slot.length > 1) {
      warn(`SSR-optimized slot function detected in a non-SSR-optimized render ` + `function. You need to mark this component with $dynamic-slots in the ` + `parent template.`);
      slot = () => [];
    }
    // a compiled slot disables block tracking by default to avoid manual
    // invocation interfering with template-based block tracking, but in
    // `renderSlot` we can be sure that it's template-based so we can force
    // enable it.
    isRenderingCompiledSlot++;
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(
      Fragment,
      { key: props.key || `_${name}` },
      validSlotContent || (fallback ? fallback() : []),
      validSlotContent && slots._ === 1  ? 64  : -2 
    );
    if (!noSlotted && rendered.scopeId) {
      rendered.slotScopeIds = [rendered.scopeId + "-s"];
    }
    isRenderingCompiledSlot--;
    return rendered;
  }
  function ensureValidVNode(vnodes) {
    return vnodes.some((child) => {
      if (!isVNode(child)) return true;
      if (child.type === Comment) return false;
      if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
      return true;
    })
      ? vnodes
      : null;
  }

  
  let currentRenderingInstance = null;
  let currentScopeId = null;
  
  function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = (instance && instance.type.__scopeId) || null;
    return prev;
  }
  
  function pushScopeId(id) {
    currentScopeId = id;
  }
  
  function popScopeId() {
    currentScopeId = null;
  }
  
  const withScopeId = (_id) => withCtx;
  
  function withCtx(fn, ctx = currentRenderingInstance) {
    if (!ctx) return fn;
    const renderFnWithContext = (...args) => {
      // If a user calls a compiled slot inside a template expression (#1745), it
      // can mess up block tracking, so by default we need to push a null block to
      // avoid that. This isn't necessary if rendering a compiled `<slot>`.
      if (!isRenderingCompiledSlot) {
        openBlock(true );
      }
      const prevInstance = setCurrentRenderingInstance(ctx);
      const res = fn(...args);
      setCurrentRenderingInstance(prevInstance);
      if (!isRenderingCompiledSlot) {
        closeBlock();
      }
      return res;
    };
    // mark this as a compiled slot function.
    // this is used in vnode.ts -> normalizeChildren() to set the slot
    // rendering flag.
    renderFnWithContext._c = true;
    return renderFnWithContext;
  }

  
  let accessedAttrs = false;
  function markAttrsAccessed() {
    accessedAttrs = true;
  }
  function renderComponentRoot(instance) {
    const {
      type: Component,
      vnode,
      proxy,
      withProxy,
      props,
      propsOptions: [propsOptions],
      slots,
      attrs,
      emit,
      render,
      renderCache,
      data,
      setupState,
      ctx,
    } = instance;
    let result;
    const prev = setCurrentRenderingInstance(instance);
    {
      accessedAttrs = false;
    }
    try {
      let fallthroughAttrs;
      if (vnode.shapeFlag & 4 ) {
        // withProxy is a proxy with a different `has` trap only for
        // runtime-compiled render functions using `with` block.
        const proxyToUse = withProxy || proxy;
        result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
        fallthroughAttrs = attrs;
      } else {
        // functional
        const render = Component;
        // in dev, mark attrs accessed if optional props (attrs === props)
        if (true && attrs === props) {
          markAttrsAccessed();
        }
        result = normalizeVNode(
          render.length > 1
            ? render(
                props,
                true
                  ? {
                      get attrs() {
                        markAttrsAccessed();
                        return attrs;
                      },
                      slots,
                      emit,
                    }
                  : { attrs, slots, emit }
              )
            : render(props, null )
        );
        fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
      }
      // attr merging
      // in dev mode, comments are preserved, and it's possible for a template
      // to have comments along side the root element which makes it a fragment
      let root = result;
      let setRoot = undefined;
      if (true && result.patchFlag > 0 && result.patchFlag & 2048 ) {
        [root, setRoot] = getChildRoot(result);
      }
      if (Component.inheritAttrs !== false && fallthroughAttrs) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag } = root;
        if (keys.length) {
          if (shapeFlag & 1  || shapeFlag & 6 ) {
            if (propsOptions && keys.some(isModelListener)) {
              // If a v-model listener (onUpdate:xxx) has a corresponding declared
              // prop, it indicates this component expects to handle v-model and
              // it should not fallthrough.
              // related: #1543, #1643, #1989
              fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
            }
            root = cloneVNode(root, fallthroughAttrs);
          } else if (true && !accessedAttrs && root.type !== Comment) {
            const allAttrs = Object.keys(attrs);
            const eventAttrs = [];
            const extraAttrs = [];
            for (let i = 0, l = allAttrs.length; i < l; i++) {
              const key = allAttrs[i];
              if (isOn(key)) {
                // ignore v-model handlers when they fail to fallthrough
                if (!isModelListener(key)) {
                  // remove `on`, lowercase first letter to reflect event casing
                  // accurately
                  eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                }
              } else {
                extraAttrs.push(key);
              }
            }
            if (extraAttrs.length) {
              warn(
                `Extraneous non-props attributes (` +
                  `${extraAttrs.join(", ")}) ` +
                  `were passed to component but could not be automatically inherited ` +
                  `because component renders fragment or text root nodes.`
              );
            }
            if (eventAttrs.length) {
              warn(
                `Extraneous non-emits event listeners (` +
                  `${eventAttrs.join(", ")}) ` +
                  `were passed to component but could not be automatically inherited ` +
                  `because component renders fragment or text root nodes. ` +
                  `If the listener is intended to be a component custom event listener only, ` +
                  `declare it using the "emits" option.`
              );
            }
          }
        }
      }
      // inherit directives
      if (vnode.dirs) {
        if (true && !isElementRoot(root)) {
          warn(`Runtime directive used on component with non-element root node. ` + `The directives will not function as intended.`);
        }
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
      }
      // inherit transition data
      if (vnode.transition) {
        if (true && !isElementRoot(root)) {
          warn(`Component inside <Transition> renders non-element root node ` + `that cannot be animated.`);
        }
        root.transition = vnode.transition;
      }
      if (true && setRoot) {
        setRoot(root);
      } else {
        result = root;
      }
    } catch (err) {
      blockStack.length = 0;
      handleError(err, instance, 1 );
      result = createVNode(Comment);
    }
    setCurrentRenderingInstance(prev);
    return result;
  }
  
  const getChildRoot = (vnode) => {
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren);
    if (!childRoot) {
      return [vnode, undefined];
    }
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot) => {
      rawChildren[index] = updatedRoot;
      if (dynamicChildren) {
        if (dynamicIndex > -1) {
          dynamicChildren[dynamicIndex] = updatedRoot;
        } else if (updatedRoot.patchFlag > 0) {
          vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
        }
      }
    };
    return [normalizeVNode(childRoot), setRoot];
  };
  function filterSingleRoot(children) {
    let singleRoot;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (isVNode(child)) {
        // ignore user comment
        if (child.type !== Comment || child.children === "v-if") {
          if (singleRoot) {
            // has more than 1 non-comment child, return now
            return;
          } else {
            singleRoot = child;
          }
        }
      } else {
        return;
      }
    }
    return singleRoot;
  }
  const getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
      if (key === "class" || key === "style" || isOn(key)) {
        (res || (res = {}))[key] = attrs[key];
      }
    }
    return res;
  };
  const filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
      if (!isModelListener(key) || !(key.slice(9) in props)) {
        res[key] = attrs[key];
      }
    }
    return res;
  };
  const isElementRoot = (vnode) => {
    return (
      vnode.shapeFlag & 6  || vnode.shapeFlag & 1  || vnode.type === Comment // potential v-if branch switch
    );
  };
  function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    // Parent component's render function was hot-updated. Since this may have
    // caused the child component's slots content to have changed, we need to
    // force the child to update as well.
    if ((prevChildren || nextChildren) && isHmrUpdating) {
      return true;
    }
    // force child update for runtime directive or transition on component vnode.
    if (nextVNode.dirs || nextVNode.transition) {
      return true;
    }
    if (optimized && patchFlag >= 0) {
      if (patchFlag & 1024 ) {
        // slot content that references values that might have changed,
        // e.g. in a v-for
        return true;
      }
      if (patchFlag & 16 ) {
        if (!prevProps) {
          return !!nextProps;
        }
        // presence of this flag indicates props are always non-null
        return hasPropsChanged(prevProps, nextProps, emits);
      } else if (patchFlag & 8 ) {
        const dynamicProps = nextVNode.dynamicProps;
        for (let i = 0; i < dynamicProps.length; i++) {
          const key = dynamicProps[i];
          if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
            return true;
          }
        }
      }
    } else {
      // this path is only taken by manually written render functions
      // so presence of any children leads to a forced update
      if (prevChildren || nextChildren) {
        if (!nextChildren || !nextChildren.$stable) {
          return true;
        }
      }
      if (prevProps === nextProps) {
        return false;
      }
      if (!prevProps) {
        return !!nextProps;
      }
      if (!nextProps) {
        return true;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
  }
  function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
      return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
      const key = nextKeys[i];
      if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
        return true;
      }
    }
    return false;
  }
  function updateHOCHostEl(
    { vnode, parent },
    el // HostNode
  ) {
    while (parent && parent.subTree === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    }
  }

  const isSuspense = (type) => type.__isSuspense;
  // Suspense exposes a component-like API, and is treated like a component
  // in the compiler, but internally it's a special built-in type that hooks
  // directly into the renderer.
  const SuspenseImpl = {
    name: "Suspense",
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process(
      n1,
      n2,
      container,
      anchor,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized,
      // platform-specific impl passed from renderer
      rendererInternals
    ) {
      if (n1 == null) {
        mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
      } else {
        patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
      }
    },
    hydrate: hydrateSuspense,
    create: createSuspenseBoundary,
  };
  // Force-casted public typing for h and TSX props inference
  const Suspense = SuspenseImpl;
  function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
    const {
      p: patch,
      o: { createElement },
    } = rendererInternals;
    const hiddenContainer = createElement("div");
    const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals));
    // start mounting the content subtree in an off-dom container
    patch(null, (suspense.pendingBranch = vnode.ssContent), hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds);
    // now check if we have encountered any async deps
    if (suspense.deps > 0) {
      // has async
      // mount the fallback tree
      patch(
        null,
        vnode.ssFallback,
        container,
        anchor,
        parentComponent,
        null, // fallback tree will not have suspense context
        isSVG,
        slotScopeIds
      );
      setActiveBranch(suspense, vnode.ssFallback);
    } else {
      // Suspense has no async deps. Just resolve.
      suspense.resolve();
    }
  }
  function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
    const suspense = (n2.suspense = n1.suspense);
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
    if (pendingBranch) {
      suspense.pendingBranch = newBranch;
      if (isSameVNodeType(newBranch, pendingBranch)) {
        // same root type but content may have changed.
        patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        if (suspense.deps <= 0) {
          suspense.resolve();
        } else if (isInFallback) {
          patch(
            activeBranch,
            newFallback,
            container,
            anchor,
            parentComponent,
            null, // fallback tree will not have suspense context
            isSVG,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, newFallback);
        }
      } else {
        // toggled before pending tree is resolved
        suspense.pendingId++;
        if (isHydrating) {
          // if toggled before hydration is finished, the current DOM tree is
          // no longer valid. set it as the active branch so it will be unmounted
          // when resolved
          suspense.isHydrating = false;
          suspense.activeBranch = pendingBranch;
        } else {
          unmount(pendingBranch, parentComponent, suspense);
        }
        // increment pending ID. this is used to invalidate async callbacks
        // reset suspense state
        suspense.deps = 0;
        // discard effects from pending branch
        suspense.effects.length = 0;
        // discard previous container
        suspense.hiddenContainer = createElement("div");
        if (isInFallback) {
          // already in fallback state
          patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
          if (suspense.deps <= 0) {
            suspense.resolve();
          } else {
            patch(
              activeBranch,
              newFallback,
              container,
              anchor,
              parentComponent,
              null, // fallback tree will not have suspense context
              isSVG,
              slotScopeIds,
              optimized
            );
            setActiveBranch(suspense, newFallback);
          }
        } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
          // toggled "back" to current active branch
          patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
          // force resolve
          suspense.resolve(true);
        } else {
          // switched to a 3rd branch
          patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
          if (suspense.deps <= 0) {
            suspense.resolve();
          }
        }
      }
    } else {
      if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        // root did not change, just normal patch
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, newBranch);
      } else {
        // root node toggled
        // invoke @pending event
        const onPending = n2.props && n2.props.onPending;
        if (isFunction(onPending)) {
          onPending();
        }
        // mount pending branch in off-dom container
        suspense.pendingBranch = newBranch;
        suspense.pendingId++;
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        if (suspense.deps <= 0) {
          // incoming branch has no async deps, resolve now.
          suspense.resolve();
        } else {
          const { timeout, pendingId } = suspense;
          if (timeout > 0) {
            setTimeout(() => {
              if (suspense.pendingId === pendingId) {
                suspense.fallback(newFallback);
              }
            }, timeout);
          } else if (timeout === 0) {
            suspense.fallback(newFallback);
          }
        }
      }
    }
  }
  let hasWarned = false;
  function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    
    if (!hasWarned) {
      hasWarned = true;
      // @ts-ignore `console.info` cannot be null error
      console[console.info ? "info" : "log"](`<Suspense> is an experimental feature and its API will likely change.`);
    }
    const {
      p: patch,
      m: move,
      um: unmount,
      n: next,
      o: { parentNode, remove },
    } = rendererInternals;
    const timeout = toNumber(vnode.props && vnode.props.timeout);
    const suspense = {
      vnode,
      parent,
      parentComponent,
      isSVG,
      container,
      hiddenContainer,
      anchor,
      deps: 0,
      pendingId: 0,
      timeout: typeof timeout === "number" ? timeout : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: true,
      isHydrating,
      isUnmounted: false,
      effects: [],
      resolve(resume = false) {
        {
          if (!resume && !suspense.pendingBranch) {
            throw new Error(`suspense.resolve() is called without a pending branch.`);
          }
          if (suspense.isUnmounted) {
            throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
          }
        }
        const { vnode, activeBranch, pendingBranch, pendingId, effects, parentComponent, container } = suspense;
        if (suspense.isHydrating) {
          suspense.isHydrating = false;
        } else if (!resume) {
          const delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
          if (delayEnter) {
            activeBranch.transition.afterLeave = () => {
              if (pendingId === suspense.pendingId) {
                move(pendingBranch, container, anchor, 0 );
              }
            };
          }
          // this is initial anchor on mount
          let { anchor } = suspense;
          // unmount current active tree
          if (activeBranch) {
            // if the fallback tree was mounted, it may have been moved
            // as part of a parent suspense. get the latest anchor for insertion
            anchor = next(activeBranch);
            unmount(activeBranch, parentComponent, suspense, true);
          }
          if (!delayEnter) {
            // move content from off-dom container to actual container
            move(pendingBranch, container, anchor, 0 );
          }
        }
        setActiveBranch(suspense, pendingBranch);
        suspense.pendingBranch = null;
        suspense.isInFallback = false;
        // flush buffered effects
        // check if there is a pending parent suspense
        let parent = suspense.parent;
        let hasUnresolvedAncestor = false;
        while (parent) {
          if (parent.pendingBranch) {
            // found a pending parent suspense, merge buffered post jobs
            // into that parent
            parent.effects.push(...effects);
            hasUnresolvedAncestor = true;
            break;
          }
          parent = parent.parent;
        }
        // no pending parent suspense, flush all jobs
        if (!hasUnresolvedAncestor) {
          queuePostFlushCb(effects);
        }
        suspense.effects = [];
        // invoke @resolve event
        const onResolve = vnode.props && vnode.props.onResolve;
        if (isFunction(onResolve)) {
          onResolve();
        }
      },
      fallback(fallbackVNode) {
        if (!suspense.pendingBranch) {
          return;
        }
        const { vnode, activeBranch, parentComponent, container, isSVG } = suspense;
        // invoke @fallback event
        const onFallback = vnode.props && vnode.props.onFallback;
        if (isFunction(onFallback)) {
          onFallback();
        }
        const anchor = next(activeBranch);
        const mountFallback = () => {
          if (!suspense.isInFallback) {
            return;
          }
          // mount the fallback tree
          patch(
            null,
            fallbackVNode,
            container,
            anchor,
            parentComponent,
            null, // fallback tree will not have suspense context
            isSVG,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, fallbackVNode);
        };
        const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
        if (delayEnter) {
          activeBranch.transition.afterLeave = mountFallback;
        }
        // unmount current active branch
        unmount(
          activeBranch,
          parentComponent,
          null, // no suspense so unmount hooks fire now
          true // shouldRemove
        );
        suspense.isInFallback = true;
        if (!delayEnter) {
          mountFallback();
        }
      },
      move(container, anchor, type) {
        suspense.activeBranch && move(suspense.activeBranch, container, anchor, type);
        suspense.container = container;
      },
      next() {
        return suspense.activeBranch && next(suspense.activeBranch);
      },
      registerDep(instance, setupRenderEffect) {
        const isInPendingSuspense = !!suspense.pendingBranch;
        if (isInPendingSuspense) {
          suspense.deps++;
        }
        const hydratedEl = instance.vnode.el;
        instance.asyncDep
          .catch((err) => {
            handleError(err, instance, 0 );
          })
          .then((asyncSetupResult) => {
            // retry when the setup() promise resolves.
            // component may have been unmounted before resolve.
            if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
              return;
            }
            // retry from this component
            instance.asyncResolved = true;
            const { vnode } = instance;
            {
              pushWarningContext(vnode);
            }
            handleSetupResult(instance, asyncSetupResult, false);
            if (hydratedEl) {
              // vnode may have been replaced if an update happened before the
              // async dep is resolved.
              vnode.el = hydratedEl;
            }
            const placeholder = !hydratedEl && instance.subTree.el;
            setupRenderEffect(
              instance,
              vnode,
              // component may have been moved before resolve.
              // if this is not a hydration, instance.subTree will be the comment
              // placeholder.
              parentNode(hydratedEl || instance.subTree.el),
              // anchor will not be used if this is hydration, so only need to
              // consider the comment placeholder case.
              hydratedEl ? null : next(instance.subTree),
              suspense,
              isSVG,
              optimized
            );
            if (placeholder) {
              remove(placeholder);
            }
            updateHOCHostEl(instance, vnode.el);
            {
              popWarningContext();
            }
            // only decrease deps count if suspense is not already resolved
            if (isInPendingSuspense && --suspense.deps === 0) {
              suspense.resolve();
            }
          });
      },
      unmount(parentSuspense, doRemove) {
        suspense.isUnmounted = true;
        if (suspense.activeBranch) {
          unmount(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
        }
        if (suspense.pendingBranch) {
          unmount(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
        }
      },
    };
    return suspense;
  }
  function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    
    const suspense = (vnode.suspense = createSuspenseBoundary(
      vnode,
      parentSuspense,
      parentComponent,
      node.parentNode,
      document.createElement("div"),
      null,
      isSVG,
      slotScopeIds,
      optimized,
      rendererInternals,
      true 
    ));
    // there are two possible scenarios for server-rendered suspense:
    // - success: ssr content should be fully resolved
    // - failure: ssr content should be the fallback branch.
    // however, on the client we don't really know if it has failed or not
    // attempt to hydrate the DOM assuming it has succeeded, but we still
    // need to construct a suspense boundary first
    const result = hydrateNode(node, (suspense.pendingBranch = vnode.ssContent), parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) {
      suspense.resolve();
    }
    return result;
    
  }
  function normalizeSuspenseChildren(vnode) {
    const { shapeFlag, children } = vnode;
    let content;
    let fallback;
    if (shapeFlag & 32 ) {
      content = normalizeSuspenseSlot(children.default);
      fallback = normalizeSuspenseSlot(children.fallback);
    } else {
      content = normalizeSuspenseSlot(children);
      fallback = normalizeVNode(null);
    }
    return {
      content,
      fallback,
    };
  }
  function normalizeSuspenseSlot(s) {
    if (isFunction(s)) {
      s = s();
    }
    if (isArray(s)) {
      const singleChild = filterSingleRoot(s);
      if (!singleChild) {
        warn(`<Suspense> slots expect a single root node.`);
      }
      s = singleChild;
    }
    return normalizeVNode(s);
  }
  function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
      if (isArray(fn)) {
        suspense.effects.push(...fn);
      } else {
        suspense.effects.push(fn);
      }
    } else {
      queuePostFlushCb(fn);
    }
  }
  function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode, parentComponent } = suspense;
    const el = (vnode.el = branch.el);
    // in case suspense is the root node of a component,
    // recursively update the HOC el
    if (parentComponent && parentComponent.subTree === vnode) {
      parentComponent.vnode.el = el;
      updateHOCHostEl(parentComponent, el);
    }
  }

  function initProps(
    instance,
    rawProps,
    isStateful, // result of bitwise flag comparison
    isSSR = false
  ) {
    const props = {};
    const attrs = {};
    def(attrs, InternalObjectKey, 1);
    instance.propsDefaults = Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    // validation
    {
      validateProps(rawProps || {}, props, instance);
    }
    if (isStateful) {
      // stateful
      instance.props = isSSR ? props : shallowReactive(props);
    } else {
      if (!instance.type.props) {
        // functional w/ optional props, props === attrs
        instance.props = attrs;
      } else {
        // functional w/ declared props
        instance.props = props;
      }
    }
    instance.attrs = attrs;
  }
  function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const {
      props,
      attrs,
      vnode: { patchFlag },
    } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    if (
      // always force full diff in dev
      // - #1942 if hmr is enabled with sfc component
      // - vite#872 non-sfc component used by sfc component
      !(instance.type.__hmrId || (instance.parent && instance.parent.type.__hmrId)) &&
      (optimized || patchFlag > 0) &&
      !((patchFlag & 16) )
    ) {
      if (patchFlag & 8 ) {
        // Compiler-generated props & no keys change, just set the updated
        // the props.
        const propsToUpdate = instance.vnode.dynamicProps;
        for (let i = 0; i < propsToUpdate.length; i++) {
          const key = propsToUpdate[i];
          // PROPS flag guarantees rawProps to be non-null
          const value = rawProps[key];
          if (options) {
            // attr / props separation was done on init and will be consistent
            // in this code path, so just check if attrs have it.
            if (hasOwn(attrs, key)) {
              attrs[key] = value;
            } else {
              const camelizedKey = camelize(key);
              props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance);
            }
          } else {
            attrs[key] = value;
          }
        }
      }
    } else {
      // full props update.
      setFullProps(instance, rawProps, props, attrs);
      // in case of dynamic props, check if we need to delete keys from
      // the props object
      let kebabKey;
      for (const key in rawCurrentProps) {
        if (
          !rawProps ||
          // for camelCase
          (!hasOwn(rawProps, key) &&
            // it's possible the original props was passed in as kebab-case
            // and converted to camelCase (#955)
            ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey)))
        ) {
          if (options) {
            if (
              rawPrevProps &&
              // for camelCase
              (rawPrevProps[key] !== undefined ||
                // for kebab-case
                rawPrevProps[kebabKey] !== undefined)
            ) {
              props[key] = resolvePropValue(options, rawProps || EMPTY_OBJ, key, undefined, instance);
            }
          } else {
            delete props[key];
          }
        }
      }
      // in the case of functional component w/o props declaration, props and
      // attrs point to the same object so it should already have been updated.
      if (attrs !== rawCurrentProps) {
        for (const key in attrs) {
          if (!rawProps || !hasOwn(rawProps, key)) {
            delete attrs[key];
          }
        }
      }
    }
    // trigger updates for $attrs in case it's used in component slots
    trigger(instance, "set" , "$attrs");
    {
      validateProps(rawProps || {}, props, instance);
    }
  }
  function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    if (rawProps) {
      for (const key in rawProps) {
        const value = rawProps[key];
        // key, ref are reserved and never passed down
        if (isReservedProp(key)) {
          continue;
        }
        // prop option names are camelized during normalization, so to support
        // kebab -> camel conversion here we need to camelize the key.
        let camelKey;
        if (options && hasOwn(options, (camelKey = camelize(key)))) {
          props[camelKey] = value;
        } else if (!isEmitListener(instance.emitsOptions, key)) {
          // Any non-declared (either as a prop or an emitted event) props are put
          // into a separate `attrs` object for spreading. Make sure to preserve
          // original key casing
          attrs[key] = value;
        }
      }
    }
    if (needCastKeys) {
      const rawCurrentProps = toRaw(props);
      for (let i = 0; i < needCastKeys.length; i++) {
        const key = needCastKeys[i];
        props[key] = resolvePropValue(options, rawCurrentProps, key, rawCurrentProps[key], instance);
      }
    }
  }
  function resolvePropValue(options, props, key, value, instance) {
    const opt = options[key];
    if (opt != null) {
      const hasDefault = hasOwn(opt, "default");
      // default values
      if (hasDefault && value === undefined) {
        const defaultValue = opt.default;
        if (opt.type !== Function && isFunction(defaultValue)) {
          const { propsDefaults } = instance;
          if (key in propsDefaults) {
            value = propsDefaults[key];
          } else {
            setCurrentInstance(instance);
            value = propsDefaults[key] = defaultValue(props);
            setCurrentInstance(null);
          }
        } else {
          value = defaultValue;
        }
      }
      // boolean casting
      if (opt[0 ]) {
        if (!hasOwn(props, key) && !hasDefault) {
          value = false;
        } else if (opt[1 ] && (value === "" || value === hyphenate(key))) {
          value = true;
        }
      }
    }
    return value;
  }
  function normalizePropsOptions(comp, appContext, asMixin = false) {
    if (!appContext.deopt && comp.__props) {
      return comp.__props;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    // apply mixin/extends props
    let hasExtends = false;
    if (!isFunction(comp)) {
      const extendProps = (raw) => {
        hasExtends = true;
        const [props, keys] = normalizePropsOptions(raw, appContext, true);
        extend(normalized, props);
        if (keys) needCastKeys.push(...keys);
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendProps);
      }
      if (comp.extends) {
        extendProps(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendProps);
      }
    }
    if (!raw && !hasExtends) {
      return (comp.__props = EMPTY_ARR);
    }
    if (isArray(raw)) {
      for (let i = 0; i < raw.length; i++) {
        if (!isString(raw[i])) {
          warn(`props must be strings when using array syntax.`, raw[i]);
        }
        const normalizedKey = camelize(raw[i]);
        if (validatePropName(normalizedKey)) {
          normalized[normalizedKey] = EMPTY_OBJ;
        }
      }
    } else if (raw) {
      if (!isObject(raw)) {
        warn(`invalid props options`, raw);
      }
      for (const key in raw) {
        const normalizedKey = camelize(key);
        if (validatePropName(normalizedKey)) {
          const opt = raw[key];
          const prop = (normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : opt);
          if (prop) {
            const booleanIndex = getTypeIndex(Boolean, prop.type);
            const stringIndex = getTypeIndex(String, prop.type);
            prop[0 ] = booleanIndex > -1;
            prop[1 ] = stringIndex < 0 || booleanIndex < stringIndex;
            // if the prop needs boolean casting or default value
            if (booleanIndex > -1 || hasOwn(prop, "default")) {
              needCastKeys.push(normalizedKey);
            }
          }
        }
      }
    }
    return (comp.__props = [normalized, needCastKeys]);
  }
  function validatePropName(key) {
    if (key[0] !== "$") {
      return true;
    } else {
      warn(`Invalid prop name: "${key}" is a reserved property.`);
    }
    return false;
  }
  // use function string name to check type constructors
  // so that it works across vms / iframes.
  function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : "";
  }
  function isSameType(a, b) {
    return getType(a) === getType(b);
  }
  function getTypeIndex(type, expectedTypes) {
    if (isArray(expectedTypes)) {
      return expectedTypes.findIndex((t) => isSameType(t, type));
    } else if (isFunction(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
  }
  
  function validateProps(rawProps, props, instance) {
    const resolvedValues = toRaw(props);
    const options = instance.propsOptions[0];
    for (const key in options) {
      let opt = options[key];
      if (opt == null) continue;
      validateProp(key, resolvedValues[key], opt, !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
    }
  }
  
  function validateProp(name, value, prop, isAbsent) {
    const { type, required, validator } = prop;
    // required!
    if (required && isAbsent) {
      warn('Missing required prop: "' + name + '"');
      return;
    }
    // missing but optional
    if (value == null && !prop.required) {
      return;
    }
    // type check
    if (type != null && type !== true) {
      let isValid = false;
      const types = isArray(type) ? type : [type];
      const expectedTypes = [];
      // value is valid as long as one of the specified types match
      for (let i = 0; i < types.length && !isValid; i++) {
        const { valid, expectedType } = assertType(value, types[i]);
        expectedTypes.push(expectedType || "");
        isValid = valid;
      }
      if (!isValid) {
        warn(getInvalidTypeMessage(name, value, expectedTypes));
        return;
      }
    }
    // custom validator
    if (validator && !validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".');
    }
  }
  const isSimpleType =  makeMap("String,Number,Boolean,Function,Symbol,BigInt");
  
  function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
      const t = typeof value;
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === "object") {
        valid = value instanceof type;
      }
    } else if (expectedType === "Object") {
      valid = isObject(value);
    } else if (expectedType === "Array") {
      valid = isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid,
      expectedType,
    };
  }
  
  function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}".` + ` Expected ${expectedTypes.map(capitalize).join(", ")}`;
    const expectedType = expectedTypes[0];
    const receivedType = toRawType(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
      message += ` with value ${expectedValue}`;
    }
    message += `, got ${receivedType} `;
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
      message += `with value ${receivedValue}.`;
    }
    return message;
  }
  
  function styleValue(value, type) {
    if (type === "String") {
      return `"${value}"`;
    } else if (type === "Number") {
      return `${Number(value)}`;
    } else {
      return `${value}`;
    }
  }
  
  function isExplicable(type) {
    const explicitTypes = ["string", "number", "boolean"];
    return explicitTypes.some((elem) => type.toLowerCase() === elem);
  }
  
  function isBoolean(...args) {
    return args.some((elem) => elem.toLowerCase() === "boolean");
  }

  function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
      const hooks = target[type] || (target[type] = []);
      // cache the error handling wrapper for injected hooks so the same hook
      // can be properly deduped by the scheduler. "__weh" stands for "with error
      // handling".
      const wrappedHook =
        hook.__weh ||
        (hook.__weh = (...args) => {
          if (target.isUnmounted) {
            return;
          }
          // disable tracking inside all lifecycle hooks
          // since they can potentially be called inside effects.
          pauseTracking();
          // Set currentInstance during hook invocation.
          // This assumes the hook does not synchronously trigger other hooks, which
          // can only be false when the user does something really funky.
          setCurrentInstance(target);
          const res = callWithAsyncErrorHandling(hook, target, type, args);
          setCurrentInstance(null);
          resetTracking();
          return res;
        });
      if (prepend) {
        hooks.unshift(wrappedHook);
      } else {
        hooks.push(wrappedHook);
      }
      return wrappedHook;
    } else {
      const apiName = toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ""));
      warn(
        `${apiName} is called when there is no active component instance to be ` +
          `associated with. ` +
          `Lifecycle injection APIs can only be used during execution of setup().` +
          (` If you are using async setup(), make sure to register lifecycle ` + `hooks before the first await statement.`)
      );
    }
  }
  const createHook =
    (lifecycle) =>
    (hook, target = currentInstance) =>
      // post-create lifecycle registrations are noops during SSR
      !isInSSRComponentSetup && injectHook(lifecycle, hook, target);
  const onBeforeMount = createHook("bm" );
  const onMounted = createHook("m" );
  const onBeforeUpdate = createHook("bu" );
  const onUpdated = createHook("u" );
  const onBeforeUnmount = createHook("bum" );
  const onUnmounted = createHook("um" );
  const onRenderTriggered = createHook("rtg" );
  const onRenderTracked = createHook("rtc" );
  const onErrorCaptured = (hook, target = currentInstance) => {
    injectHook("ec" , hook, target);
  };

  // Simple effect.
  function watchEffect(effect, options) {
    return doWatch(effect, null, options);
  }
  // initial value for watchers to trigger on undefined initial values
  const INITIAL_WATCHER_VALUE = {};
  // implementation
  function watch(source, cb, options) {
    if (!isFunction(cb)) {
      warn(
        `\`watch(fn, options?)\` signature has been moved to a separate API. ` + `Use \`watchEffect(fn, options?)\` instead. \`watch\` now only ` + `supports \`watch(source, cb, options?) signature.`
      );
    }
    return doWatch(source, cb, options);
  }
  function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ, instance = currentInstance) {
    if (!cb) {
      if (immediate !== undefined) {
        warn(`watch() "immediate" option is only respected when using the ` + `watch(source, callback, options?) signature.`);
      }
      if (deep !== undefined) {
        warn(`watch() "deep" option is only respected when using the ` + `watch(source, callback, options?) signature.`);
      }
    }
    const warnInvalidSource = (s) => {
      warn(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, ` + `a reactive object, or an array of these types.`);
    };
    let getter;
    let forceTrigger = false;
    if (isRef(source)) {
      getter = () => source.value;
      forceTrigger = !!source._shallow;
    } else if (isReactive(source)) {
      getter = () => source;
      deep = true;
    } else if (isArray(source)) {
      getter = () =>
        source.map((s) => {
          if (isRef(s)) {
            return s.value;
          } else if (isReactive(s)) {
            return traverse(s);
          } else if (isFunction(s)) {
            return callWithErrorHandling(s, instance, 2 , [instance && instance.proxy]);
          } else {
            warnInvalidSource(s);
          }
        });
    } else if (isFunction(source)) {
      if (cb) {
        // getter with cb
        getter = () => callWithErrorHandling(source, instance, 2 , [instance && instance.proxy]);
      } else {
        // no cb -> simple effect
        getter = () => {
          if (instance && instance.isUnmounted) {
            return;
          }
          if (cleanup) {
            cleanup();
          }
          return callWithAsyncErrorHandling(source, instance, 3 , [onInvalidate]);
        };
      }
    } else {
      getter = NOOP;
      warnInvalidSource(source);
    }
    if (cb && deep) {
      const baseGetter = getter;
      getter = () => traverse(baseGetter());
    }
    let cleanup;
    let onInvalidate = (fn) => {
      cleanup = runner.options.onStop = () => {
        callWithErrorHandling(fn, instance, 4 );
      };
    };
    let oldValue = isArray(source) ? [] : INITIAL_WATCHER_VALUE;
    const job = () => {
      if (!runner.active) {
        return;
      }
      if (cb) {
        // watch(source, cb)
        const newValue = runner();
        if (deep || forceTrigger || hasChanged(newValue, oldValue)) {
          // cleanup before running cb again
          if (cleanup) {
            cleanup();
          }
          callWithAsyncErrorHandling(cb, instance, 3 , [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
            onInvalidate,
          ]);
          oldValue = newValue;
        }
      } else {
        // watchEffect
        runner();
      }
    };
    // important: mark the job as a watcher callback so that scheduler knows
    // it is allowed to self-trigger (#1727)
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === "sync") {
      scheduler = job;
    } else if (flush === "post") {
      scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
    } else {
      // default: 'pre'
      scheduler = () => {
        if (!instance || instance.isMounted) {
          queuePreFlushCb(job);
        } else {
          // with 'pre' option, the first call must happen before
          // the component is mounted so it is called synchronously.
          job();
        }
      };
    }
    const runner = effect(getter, {
      lazy: true,
      onTrack,
      onTrigger,
      scheduler,
    });
    recordInstanceBoundEffect(runner, instance);
    // initial run
    if (cb) {
      if (immediate) {
        job();
      } else {
        oldValue = runner();
      }
    } else if (flush === "post") {
      queuePostRenderEffect(runner, instance && instance.suspense);
    } else {
      runner();
    }
    return () => {
      stop(runner);
      if (instance) {
        remove(instance.effects, runner);
      }
    };
  }
  // this.$watch
  function instanceWatch(source, cb, options) {
    const publicThis = this.proxy;
    const getter = isString(source) ? () => publicThis[source] : source.bind(publicThis);
    return doWatch(getter, cb.bind(publicThis), options, this);
  }
  function traverse(value, seen = new Set()) {
    if (!isObject(value) || seen.has(value)) {
      return value;
    }
    seen.add(value);
    if (isRef(value)) {
      traverse(value.value, seen);
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        traverse(value[i], seen);
      }
    } else if (isSet(value) || isMap(value)) {
      value.forEach((v) => {
        traverse(v, seen);
      });
    } else {
      for (const key in value) {
        traverse(value[key], seen);
      }
    }
    return value;
  }

  function useTransitionState() {
    const state = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: new Map(),
    };
    onMounted(() => {
      state.isMounted = true;
    });
    onBeforeUnmount(() => {
      state.isUnmounting = true;
    });
    return state;
  }
  const TransitionHookValidator = [Function, Array];
  const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      // enter
      onBeforeEnter: TransitionHookValidator,
      onEnter: TransitionHookValidator,
      onAfterEnter: TransitionHookValidator,
      onEnterCancelled: TransitionHookValidator,
      // leave
      onBeforeLeave: TransitionHookValidator,
      onLeave: TransitionHookValidator,
      onAfterLeave: TransitionHookValidator,
      onLeaveCancelled: TransitionHookValidator,
      // appear
      onBeforeAppear: TransitionHookValidator,
      onAppear: TransitionHookValidator,
      onAfterAppear: TransitionHookValidator,
      onAppearCancelled: TransitionHookValidator,
    },
    setup(props, { slots }) {
      const instance = getCurrentInstance();
      const state = useTransitionState();
      let prevTransitionKey;
      return () => {
        const children = slots.default && getTransitionRawChildren(slots.default(), true);
        if (!children || !children.length) {
          return;
        }
        // warn multiple elements
        if (children.length > 1) {
          warn("<transition> can only be used on a single element or component. Use " + "<transition-group> for lists.");
        }
        // there's no need to track reactivity for these props so use the raw
        // props for a bit better perf
        const rawProps = toRaw(props);
        const { mode } = rawProps;
        // check mode
        if (mode && !["in-out", "out-in", "default"].includes(mode)) {
          warn(`invalid <transition> mode: ${mode}`);
        }
        // at this point children has a guaranteed length of 1.
        const child = children[0];
        if (state.isLeaving) {
          return emptyPlaceholder(child);
        }
        // in the case of <transition><keep-alive/></transition>, we need to
        // compare the type of the kept-alive children.
        const innerChild = getKeepAliveChild(child);
        if (!innerChild) {
          return emptyPlaceholder(child);
        }
        const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
        setTransitionHooks(innerChild, enterHooks);
        const oldChild = instance.subTree;
        const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
        let transitionKeyChanged = false;
        const { getTransitionKey } = innerChild.type;
        if (getTransitionKey) {
          const key = getTransitionKey();
          if (prevTransitionKey === undefined) {
            prevTransitionKey = key;
          } else if (key !== prevTransitionKey) {
            prevTransitionKey = key;
            transitionKeyChanged = true;
          }
        }
        // handle mode
        if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
          const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
          // update old tree's hooks in case of dynamic transition
          setTransitionHooks(oldInnerChild, leavingHooks);
          // switching between different views
          if (mode === "out-in") {
            state.isLeaving = true;
            // return placeholder node and queue update when leave finishes
            leavingHooks.afterLeave = () => {
              state.isLeaving = false;
              instance.update();
            };
            return emptyPlaceholder(child);
          } else if (mode === "in-out" && innerChild.type !== Comment) {
            leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
              const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
              leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
              // early removal callback
              el._leaveCb = () => {
                earlyRemove();
                el._leaveCb = undefined;
                delete enterHooks.delayedLeave;
              };
              enterHooks.delayedLeave = delayedLeave;
            };
          }
        }
        return child;
      };
    },
  };
  // export the public type for h/tsx inference
  // also to avoid inline import() in generated d.ts files
  const BaseTransition = BaseTransitionImpl;
  function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
      leavingVNodesCache = Object.create(null);
      leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
  }
  // The transition hooks are attached to the vnode as vnode.transition
  // and will be called at appropriate timing in the renderer.
  function resolveTransitionHooks(vnode, props, state, instance) {
    const {
      appear,
      mode,
      persisted = false,
      onBeforeEnter,
      onEnter,
      onAfterEnter,
      onEnterCancelled,
      onBeforeLeave,
      onLeave,
      onAfterLeave,
      onLeaveCancelled,
      onBeforeAppear,
      onAppear,
      onAfterAppear,
      onAppearCancelled,
    } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook = (hook, args) => {
      hook && callWithAsyncErrorHandling(hook, instance, 9 , args);
    };
    const hooks = {
      mode,
      persisted,
      beforeEnter(el) {
        let hook = onBeforeEnter;
        if (!state.isMounted) {
          if (appear) {
            hook = onBeforeAppear || onBeforeEnter;
          } else {
            return;
          }
        }
        // for same element (v-show)
        if (el._leaveCb) {
          el._leaveCb(true );
        }
        // for toggled element with same key (v-if)
        const leavingVNode = leavingVNodesCache[key];
        if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
          // force early removal (not cancelled)
          leavingVNode.el._leaveCb();
        }
        callHook(hook, [el]);
      },
      enter(el) {
        let hook = onEnter;
        let afterHook = onAfterEnter;
        let cancelHook = onEnterCancelled;
        if (!state.isMounted) {
          if (appear) {
            hook = onAppear || onEnter;
            afterHook = onAfterAppear || onAfterEnter;
            cancelHook = onAppearCancelled || onEnterCancelled;
          } else {
            return;
          }
        }
        let called = false;
        const done = (el._enterCb = (cancelled) => {
          if (called) return;
          called = true;
          if (cancelled) {
            callHook(cancelHook, [el]);
          } else {
            callHook(afterHook, [el]);
          }
          if (hooks.delayedLeave) {
            hooks.delayedLeave();
          }
          el._enterCb = undefined;
        });
        if (hook) {
          hook(el, done);
          if (hook.length <= 1) {
            done();
          }
        } else {
          done();
        }
      },
      leave(el, remove) {
        const key = String(vnode.key);
        if (el._enterCb) {
          el._enterCb(true );
        }
        if (state.isUnmounting) {
          return remove();
        }
        callHook(onBeforeLeave, [el]);
        let called = false;
        const done = (el._leaveCb = (cancelled) => {
          if (called) return;
          called = true;
          remove();
          if (cancelled) {
            callHook(onLeaveCancelled, [el]);
          } else {
            callHook(onAfterLeave, [el]);
          }
          el._leaveCb = undefined;
          if (leavingVNodesCache[key] === vnode) {
            delete leavingVNodesCache[key];
          }
        });
        leavingVNodesCache[key] = vnode;
        if (onLeave) {
          onLeave(el, done);
          if (onLeave.length <= 1) {
            done();
          }
        } else {
          done();
        }
      },
      clone(vnode) {
        return resolveTransitionHooks(vnode, props, state, instance);
      },
    };
    return hooks;
  }
  // the placeholder really only handles one special case: KeepAlive
  // in the case of a KeepAlive in a leave phase we need to return a KeepAlive
  // placeholder with empty content to avoid the KeepAlive instance from being
  // unmounted.
  function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
      vnode = cloneVNode(vnode);
      vnode.children = null;
      return vnode;
    }
  }
  function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode) ? (vnode.children ? vnode.children[0] : undefined) : vnode;
  }
  function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6  && vnode.component) {
      setTransitionHooks(vnode.component.subTree, hooks);
    } else if (vnode.shapeFlag & 128 ) {
      vnode.ssContent.transition = hooks.clone(vnode.ssContent);
      vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else {
      vnode.transition = hooks;
    }
  }
  function getTransitionRawChildren(children, keepComment = false) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      // handle fragment children case, e.g. v-for
      if (child.type === Fragment) {
        if (child.patchFlag & 128 ) keyedFragmentCount++;
        ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
      }
      // comment placeholders should be skipped, e.g. v-if
      else if (keepComment || child.type !== Comment) {
        ret.push(child);
      }
    }
    // #1126 if a transition children list contains multiple sub fragments, these
    // fragments will be merged into a flat children array. Since each v-for
    // fragment may contain different static bindings inside, we need to de-op
    // these children to force full diffs to ensure correct behavior.
    if (keyedFragmentCount > 1) {
      for (let i = 0; i < ret.length; i++) {
        ret[i].patchFlag = -2 ;
      }
    }
    return ret;
  }

  const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
  const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(props, { slots }) {
      const instance = getCurrentInstance();
      // KeepAlive communicates with the instantiated renderer via the
      // ctx where the renderer passes in its internals,
      // and the KeepAlive instance exposes activate/deactivate implementations.
      // The whole point of this is to avoid importing KeepAlive directly in the
      // renderer to facilitate tree-shaking.
      const sharedContext = instance.ctx;
      // if the internal renderer is not registered, it indicates that this is server-side rendering,
      // for KeepAlive, we just need to render its children
      if (!sharedContext.renderer) {
        return slots.default;
      }
      const cache = new Map();
      const keys = new Set();
      let current = null;
      const parentSuspense = instance.suspense;
      const {
        renderer: {
          p: patch,
          m: move,
          um: _unmount,
          o: { createElement },
        },
      } = sharedContext;
      const storageContainer = createElement("div");
      sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
        const instance = vnode.component;
        move(vnode, container, anchor, 0 , parentSuspense);
        // in case props have changed
        patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
        queuePostRenderEffect(() => {
          instance.isDeactivated = false;
          if (instance.a) {
            invokeArrayFns(instance.a);
          }
          const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
          if (vnodeHook) {
            invokeVNodeHook(vnodeHook, instance.parent, vnode);
          }
        }, parentSuspense);
      };
      sharedContext.deactivate = (vnode) => {
        const instance = vnode.component;
        move(vnode, storageContainer, null, 1 , parentSuspense);
        queuePostRenderEffect(() => {
          if (instance.da) {
            invokeArrayFns(instance.da);
          }
          const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
          if (vnodeHook) {
            invokeVNodeHook(vnodeHook, instance.parent, vnode);
          }
          instance.isDeactivated = true;
        }, parentSuspense);
      };
      function unmount(vnode) {
        // reset the shapeFlag so it can be properly unmounted
        resetShapeFlag(vnode);
        _unmount(vnode, instance, parentSuspense);
      }
      function pruneCache(filter) {
        cache.forEach((vnode, key) => {
          const name = getComponentName(vnode.type);
          if (name && (!filter || !filter(name))) {
            pruneCacheEntry(key);
          }
        });
      }
      function pruneCacheEntry(key) {
        const cached = cache.get(key);
        if (!current || cached.type !== current.type) {
          unmount(cached);
        } else if (current) {
          // current active instance should no longer be kept-alive.
          // we can't unmount it now but it might be later, so reset its flag now.
          resetShapeFlag(current);
        }
        cache.delete(key);
        keys.delete(key);
      }
      // prune cache on include/exclude prop change
      watch(
        () => [props.include, props.exclude],
        ([include, exclude]) => {
          include && pruneCache((name) => matches(include, name));
          exclude && pruneCache((name) => !matches(exclude, name));
        },
        // prune post-render after `current` has been updated
        { flush: "post", deep: true }
      );
      // cache sub tree after render
      let pendingCacheKey = null;
      const cacheSubtree = () => {
        // fix #1621, the pendingCacheKey could be 0
        if (pendingCacheKey != null) {
          cache.set(pendingCacheKey, getInnerChild(instance.subTree));
        }
      };
      onMounted(cacheSubtree);
      onUpdated(cacheSubtree);
      onBeforeUnmount(() => {
        cache.forEach((cached) => {
          const { subTree, suspense } = instance;
          const vnode = getInnerChild(subTree);
          if (cached.type === vnode.type) {
            // current instance will be unmounted as part of keep-alive's unmount
            resetShapeFlag(vnode);
            // but invoke its deactivated hook here
            const da = vnode.component.da;
            da && queuePostRenderEffect(da, suspense);
            return;
          }
          unmount(cached);
        });
      });
      return () => {
        pendingCacheKey = null;
        if (!slots.default) {
          return null;
        }
        const children = slots.default();
        const rawVNode = children[0];
        if (children.length > 1) {
          {
            warn(`KeepAlive should contain exactly one component child.`);
          }
          current = null;
          return children;
        } else if (!isVNode(rawVNode) || (!((rawVNode.shapeFlag & 4) ) && !((rawVNode.shapeFlag & 128) ))) {
          current = null;
          return rawVNode;
        }
        let vnode = getInnerChild(rawVNode);
        const comp = vnode.type;
        const name = getComponentName(comp);
        const { include, exclude, max } = props;
        if ((include && (!name || !matches(include, name))) || (exclude && name && matches(exclude, name))) {
          current = vnode;
          return rawVNode;
        }
        const key = vnode.key == null ? comp : vnode.key;
        const cachedVNode = cache.get(key);
        // clone vnode if it's reused because we are going to mutate it
        if (vnode.el) {
          vnode = cloneVNode(vnode);
          if (rawVNode.shapeFlag & 128 ) {
            rawVNode.ssContent = vnode;
          }
        }
        // #1513 it's possible for the returned vnode to be cloned due to attr
        // fallthrough or scopeId, so the vnode here may not be the final vnode
        // that is mounted. Instead of caching it directly, we store the pending
        // key and cache `instance.subTree` (the normalized vnode) in
        // beforeMount/beforeUpdate hooks.
        pendingCacheKey = key;
        if (cachedVNode) {
          // copy over mounted state
          vnode.el = cachedVNode.el;
          vnode.component = cachedVNode.component;
          if (vnode.transition) {
            // recursively update transition hooks on subTree
            setTransitionHooks(vnode, vnode.transition);
          }
          // avoid vnode being mounted as fresh
          vnode.shapeFlag |= 512 ;
          // make this key the freshest
          keys.delete(key);
          keys.add(key);
        } else {
          keys.add(key);
          // prune oldest entry
          if (max && keys.size > parseInt(max, 10)) {
            pruneCacheEntry(keys.values().next().value);
          }
        }
        // avoid vnode being unmounted
        vnode.shapeFlag |= 256 ;
        current = vnode;
        return rawVNode;
      };
    },
  };
  // export the public type for h/tsx inference
  // also to avoid inline import() in generated d.ts files
  const KeepAlive = KeepAliveImpl;
  function matches(pattern, name) {
    if (isArray(pattern)) {
      return pattern.some((p) => matches(p, name));
    } else if (isString(pattern)) {
      return pattern.split(",").indexOf(name) > -1;
    } else if (pattern.test) {
      return pattern.test(name);
    }
    
    return false;
  }
  function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a" , target);
  }
  function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da" , target);
  }
  function registerKeepAliveHook(hook, type, target = currentInstance) {
    // cache the deactivate branch check wrapper for injected hooks so the same
    // hook can be properly deduped by the scheduler. "__wdc" stands for "with
    // deactivation check".
    const wrappedHook =
      hook.__wdc ||
      (hook.__wdc = () => {
        // only fire the hook if the target instance is NOT in a deactivated branch.
        let current = target;
        while (current) {
          if (current.isDeactivated) {
            return;
          }
          current = current.parent;
        }
        hook();
      });
    injectHook(type, wrappedHook, target);
    // In addition to registering it on the target instance, we walk up the parent
    // chain and register it on all ancestor instances that are keep-alive roots.
    // This avoids the need to walk the entire component tree when invoking these
    // hooks, and more importantly, avoids the need to track child components in
    // arrays.
    if (target) {
      let current = target.parent;
      while (current && current.parent) {
        if (isKeepAlive(current.parent.vnode)) {
          injectToKeepAliveRoot(wrappedHook, type, target, current);
        }
        current = current.parent;
      }
    }
  }
  function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    // injectHook wraps the original for error handling, so make sure to remove
    // the wrapped version.
    const injected = injectHook(type, hook, keepAliveRoot, true );
    onUnmounted(() => {
      remove(keepAliveRoot[type], injected);
    }, target);
  }
  function resetShapeFlag(vnode) {
    let shapeFlag = vnode.shapeFlag;
    if (shapeFlag & 256 ) {
      shapeFlag -= 256 ;
    }
    if (shapeFlag & 512 ) {
      shapeFlag -= 512 ;
    }
    vnode.shapeFlag = shapeFlag;
  }
  function getInnerChild(vnode) {
    return vnode.shapeFlag & 128  ? vnode.ssContent : vnode;
  }

  const isInternalKey = (key) => key[0] === "_" || key === "$stable";
  const normalizeSlotValue = (value) => (isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)]);
  const normalizeSlot = (key, rawSlot, ctx) =>
    withCtx((props) => {
      if (currentInstance) {
        warn(`Slot "${key}" invoked outside of the render function: ` + `this will not track dependencies used in the slot. ` + `Invoke the slot function inside the render function instead.`);
      }
      return normalizeSlotValue(rawSlot(props));
    }, ctx);
  const normalizeObjectSlots = (rawSlots, slots) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
      if (isInternalKey(key)) continue;
      const value = rawSlots[key];
      if (isFunction(value)) {
        slots[key] = normalizeSlot(key, value, ctx);
      } else if (value != null) {
        {
          warn(`Non-function value encountered for slot "${key}". ` + `Prefer function slots for better performance.`);
        }
        const normalized = normalizeSlotValue(value);
        slots[key] = () => normalized;
      }
    }
  };
  const normalizeVNodeSlots = (instance, children) => {
    if (!isKeepAlive(instance.vnode)) {
      warn(`Non-function value encountered for default slot. ` + `Prefer function slots for better performance.`);
    }
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
  };
  const initSlots = (instance, children) => {
    if (instance.vnode.shapeFlag & 32 ) {
      const type = children._;
      if (type) {
        instance.slots = children;
        // make compiler marker non-enumerable
        def(children, "_", type);
      } else {
        normalizeObjectSlots(children, (instance.slots = {}));
      }
    } else {
      instance.slots = {};
      if (children) {
        normalizeVNodeSlots(instance, children);
      }
    }
    def(instance.slots, InternalObjectKey, 1);
  };
  const updateSlots = (instance, children, optimized) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = EMPTY_OBJ;
    if (vnode.shapeFlag & 32 ) {
      const type = children._;
      if (type) {
        // compiled slots.
        if (isHmrUpdating) {
          // Parent was HMR updated so slot content may have changed.
          // force update slots and mark instance for hmr as well
          extend(slots, children);
        } else if (optimized && type === 1 ) {
          // compiled AND stable.
          // no need to update, and skip stale slots removal.
          needDeletionCheck = false;
        } else {
          // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
          // normalization.
          extend(slots, children);
          // #2893
          // when rendering the optimized slots by manually written render function,
          // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
          // i.e. let the `renderSlot` create the bailed Fragment
          if (!optimized && type === 1 ) {
            delete slots._;
          }
        }
      } else {
        needDeletionCheck = !children.$stable;
        normalizeObjectSlots(children, slots);
      }
      deletionComparisonTarget = children;
    } else if (children) {
      // non slot object children (direct value) passed to a component
      normalizeVNodeSlots(instance, children);
      deletionComparisonTarget = { default: 1 };
    }
    // delete stale slots
    if (needDeletionCheck) {
      for (const key in slots) {
        if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
          delete slots[key];
        }
      }
    }
  };

  
  const isBuiltInDirective =  makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text");
  function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) {
      warn("Do not use built-in directive ids as custom directive id: " + name);
    }
  }
  
  function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
      warn(`withDirectives can only be used inside render functions.`);
      return vnode;
    }
    const instance = internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for (let i = 0; i < directives.length; i++) {
      let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
      if (isFunction(dir)) {
        dir = {
          mounted: dir,
          updated: dir,
        };
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers,
      });
    }
    return vnode;
  }
  function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
      const binding = bindings[i];
      if (oldBindings) {
        binding.oldValue = oldBindings[i].value;
      }
      const hook = binding.dir[name];
      if (hook) {
        callWithAsyncErrorHandling(hook, instance, 8 , [vnode.el, binding, vnode, prevVNode]);
      }
    }
  }

  function createAppContext() {
    return {
      app: null,
      config: {
        isNativeTag: NO,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        isCustomElement: NO,
        errorHandler: undefined,
        warnHandler: undefined,
      },
      mixins: [],
      components: {},
      directives: {},
      provides: Object.create(null),
    };
  }
  let uid$1 = 0;
  function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
      if (rootProps != null && !isObject(rootProps)) {
        warn(`root props passed to app.mount() must be an object.`);
        rootProps = null;
      }
      const context = createAppContext();
      const installedPlugins = new Set();
      let isMounted = false;
      const app = (context.app = {
        _uid: uid$1++,
        _component: rootComponent,
        _props: rootProps,
        _container: null,
        _context: context,
        version,
        get config() {
          return context.config;
        },
        set config(v) {
          {
            warn(`app.config cannot be replaced. Modify individual options instead.`);
          }
        },
        use(plugin, ...options) {
          if (installedPlugins.has(plugin)) {
            warn(`Plugin has already been applied to target app.`);
          } else if (plugin && isFunction(plugin.install)) {
            installedPlugins.add(plugin);
            plugin.install(app, ...options);
          } else if (isFunction(plugin)) {
            installedPlugins.add(plugin);
            plugin(app, ...options);
          } else {
            warn(`A plugin must either be a function or an object with an "install" ` + `function.`);
          }
          return app;
        },
        mixin(mixin) {
          {
            if (!context.mixins.includes(mixin)) {
              context.mixins.push(mixin);
              // global mixin with props/emits de-optimizes props/emits
              // normalization caching.
              if (mixin.props || mixin.emits) {
                context.deopt = true;
              }
            } else {
              warn("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
            }
          }
          return app;
        },
        component(name, component) {
          {
            validateComponentName(name, context.config);
          }
          if (!component) {
            return context.components[name];
          }
          if (context.components[name]) {
            warn(`Component "${name}" has already been registered in target app.`);
          }
          context.components[name] = component;
          return app;
        },
        directive(name, directive) {
          {
            validateDirectiveName(name);
          }
          if (!directive) {
            return context.directives[name];
          }
          if (context.directives[name]) {
            warn(`Directive "${name}" has already been registered in target app.`);
          }
          context.directives[name] = directive;
          return app;
        },
        mount(rootContainer, isHydrate, isSVG) {
          if (!isMounted) {
            const vnode = createVNode(rootComponent, rootProps);
            // store app context on the root VNode.
            // this will be set on the root instance on initial mount.
            vnode.appContext = context;
            // HMR root reload
            {
              context.reload = () => {
                render(cloneVNode(vnode), rootContainer, isSVG);
              };
            }
            if (isHydrate && hydrate) {
              hydrate(vnode, rootContainer);
            } else {
              render(vnode, rootContainer, isSVG);
            }
            isMounted = true;
            app._container = rootContainer;
            rootContainer.__a2020Vue_app__ = app;
            {
              devtoolsInitApp(app, version);
            }
            return vnode.component.proxy;
          } else {
            warn(
              `App has already been mounted.\n` +
                `If you want to remount the same app, move your app creation logic ` +
                `into a factory function and create fresh app instances for each ` +
                `mount - e.g. \`const createMyApp = () => createApp(App)\``
            );
          }
        },
        unmount() {
          if (isMounted) {
            render(null, app._container);
            {
              devtoolsUnmountApp(app);
            }
            delete app._container.__a2020Vue_app__;
          } else {
            warn(`Cannot unmount an app that is not mounted.`);
          }
        },
        provide(key, value) {
          if (key in context.provides) {
            warn(`App already provides property with key "${String(key)}". ` + `It will be overwritten with the new value.`);
          }
          // TypeScript doesn't allow symbols as index type
          // https://github.com/Microsoft/TypeScript/issues/24587
          context.provides[key] = value;
          return app;
        },
      });
      return app;
    };
  }

  let hasMismatch = false;
  const isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== "foreignObject";
  const isComment = (node) => node.nodeType === 8; 
  // Note: hydration is DOM-specific
  // But we have to place it in core due to tight coupling with core - splitting
  // it out creates a ton of unnecessary complexity.
  // Hydration also depends on some renderer internal logic which needs to be
  // passed in via arguments.
  function createHydrationFunctions(rendererInternals) {
    const {
      mt: mountComponent,
      p: patch,
      o: { patchProp, nextSibling, parentNode, remove, insert, createComment },
    } = rendererInternals;
    const hydrate = (vnode, container) => {
      if (!container.hasChildNodes()) {
        warn(`Attempting to hydrate existing markup but container is empty. ` + `Performing full mount instead.`);
        patch(null, vnode, container);
        return;
      }
      hasMismatch = false;
      hydrateNode(container.firstChild, vnode, null, null, null);
      flushPostFlushCbs();
      if (hasMismatch && !false) {
        // this error should show up in production
        console.error(`Hydration completed but contains mismatches.`);
      }
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
      const isFragmentStart = isComment(node) && node.data === "[";
      const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
      const { type, ref, shapeFlag } = vnode;
      const domType = node.nodeType;
      vnode.el = node;
      let nextNode = null;
      switch (type) {
        case Text:
          if (domType !== 3 ) {
            nextNode = onMismatch();
          } else {
            if (node.data !== vnode.children) {
              hasMismatch = true;
              warn(`Hydration text mismatch:` + `\n- Client: ${JSON.stringify(node.data)}` + `\n- Server: ${JSON.stringify(vnode.children)}`);
              node.data = vnode.children;
            }
            nextNode = nextSibling(node);
          }
          break;
        case Comment:
          if (domType !== 8  || isFragmentStart) {
            nextNode = onMismatch();
          } else {
            nextNode = nextSibling(node);
          }
          break;
        case Static:
          if (domType !== 1 ) {
            nextNode = onMismatch();
          } else {
            // determine anchor, adopt content
            nextNode = node;
            // if the static vnode has its content stripped during build,
            // adopt it from the server-rendered HTML.
            const needToAdoptContent = !vnode.children.length;
            for (let i = 0; i < vnode.staticCount; i++) {
              if (needToAdoptContent) vnode.children += nextNode.outerHTML;
              if (i === vnode.staticCount - 1) {
                vnode.anchor = nextNode;
              }
              nextNode = nextSibling(nextNode);
            }
            return nextNode;
          }
          break;
        case Fragment:
          if (!isFragmentStart) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
          }
          break;
        default:
          if (shapeFlag & 1 ) {
            if (domType !== 1  || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
              nextNode = onMismatch();
            } else {
              nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
          } else if (shapeFlag & 6 ) {
            // when setting up the render effect, if the initial vnode already
            // has .el set, the component will perform hydration instead of mount
            // on its sub-tree.
            vnode.slotScopeIds = slotScopeIds;
            const container = parentNode(node);
            const hydrateComponent = () => {
              mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
            };
            // async component
            const loadAsync = vnode.type.__asyncLoader;
            if (loadAsync) {
              loadAsync().then(hydrateComponent);
            } else {
              hydrateComponent();
            }
            // component may be async, so in the case of fragments we cannot rely
            // on component's rendered output to determine the end of the fragment
            // instead, we do a lookahead to find the end anchor node.
            nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
          } else if (shapeFlag & 64 ) {
            if (domType !== 8 ) {
              nextNode = onMismatch();
            } else {
              nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
            }
          } else if (shapeFlag & 128 ) {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
          } else {
            warn("Invalid HostVNode type:", type, `(${typeof type})`);
          }
      }
      if (ref != null) {
        setRef(ref, null, parentSuspense, vnode);
      }
      return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
      optimized = optimized || !!vnode.dynamicChildren;
      const { props, patchFlag, shapeFlag, dirs } = vnode;
      // skip props & children if this is hoisted static nodes
      if (patchFlag !== -1 ) {
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "created");
        }
        // props
        if (props) {
          if (!optimized || patchFlag & 16  || patchFlag & 32 ) {
            for (const key in props) {
              if (!isReservedProp(key) && isOn(key)) {
                patchProp(el, key, null, props[key]);
              }
            }
          } else if (props.onClick) {
            // Fast path for click listeners (which is most often) to avoid
            // iterating through props.
            patchProp(el, "onClick", null, props.onClick);
          }
        }
        // vnode / directive hooks
        let vnodeHooks;
        if ((vnodeHooks = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHooks, parentComponent, vnode);
        }
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
        }
        if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
          queueEffectWithSuspense(() => {
            vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
          }, parentSuspense);
        }
        // children
        if (
          shapeFlag & 16  &&
          // skip if element has innerHTML / textContent
          !(props && (props.innerHTML || props.textContent))
        ) {
          let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
          let hasWarned = false;
          while (next) {
            hasMismatch = true;
            if (!hasWarned) {
              warn(`Hydration children mismatch in <${vnode.type}>: ` + `server rendered element contains more child nodes than client vdom.`);
              hasWarned = true;
            }
            // The SSRed DOM contains more nodes than it should. Remove them.
            const cur = next;
            next = next.nextSibling;
            remove(cur);
          }
        } else if (shapeFlag & 8 ) {
          if (el.textContent !== vnode.children) {
            hasMismatch = true;
            warn(`Hydration text content mismatch in <${vnode.type}>:\n` + `- Client: ${el.textContent}\n` + `- Server: ${vnode.children}`);
            el.textContent = vnode.children;
          }
        }
      }
      return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
      optimized = optimized || !!parentVNode.dynamicChildren;
      const children = parentVNode.children;
      const l = children.length;
      let hasWarned = false;
      for (let i = 0; i < l; i++) {
        const vnode = optimized ? children[i] : (children[i] = normalizeVNode(children[i]));
        if (node) {
          node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
        } else if (vnode.type === Text && !vnode.children) {
          continue;
        } else {
          hasMismatch = true;
          if (!hasWarned) {
            warn(`Hydration children mismatch in <${container.tagName.toLowerCase()}>: ` + `server rendered element contains fewer child nodes than client vdom.`);
            hasWarned = true;
          }
          // the SSRed DOM didn't contain enough nodes. Mount the missing ones.
          patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
        }
      }
      return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
      const { slotScopeIds: fragmentSlotScopeIds } = vnode;
      if (fragmentSlotScopeIds) {
        slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
      }
      const container = parentNode(node);
      const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
      if (next && isComment(next) && next.data === "]") {
        return nextSibling((vnode.anchor = next));
      } else {
        // fragment didn't hydrate successfully, since we didn't get a end anchor
        // back. This should have led to node/children mismatch warnings.
        hasMismatch = true;
        // since the anchor is missing, we need to create one and insert it
        insert((vnode.anchor = createComment(`]`)), container, next);
        return next;
      }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
      hasMismatch = true;
      warn(
        `Hydration node mismatch:\n- Client vnode:`,
        vnode.type,
        `\n- Server rendered DOM:`,
        node,
        node.nodeType === 3  ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``
      );
      vnode.el = null;
      if (isFragment) {
        // remove excessive fragment nodes
        const end = locateClosingAsyncAnchor(node);
        while (true) {
          const next = nextSibling(node);
          if (next && next !== end) {
            remove(next);
          } else {
            break;
          }
        }
      }
      const next = nextSibling(node);
      const container = parentNode(node);
      remove(node);
      patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
      return next;
    };
    const locateClosingAsyncAnchor = (node) => {
      let match = 0;
      while (node) {
        node = nextSibling(node);
        if (node && isComment(node)) {
          if (node.data === "[") match++;
          if (node.data === "]") {
            if (match === 0) {
              return nextSibling(node);
            } else {
              match--;
            }
          }
        }
      }
      return node;
    };
    return [hydrate, hydrateNode];
  }

  let supported;
  let perf;
  function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
      perf.mark(`a2020Vue-${type}-${instance.uid}`);
    }
  }
  function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
      const startTag = `a2020Vue-${type}-${instance.uid}`;
      const endTag = startTag + `:end`;
      perf.mark(endTag);
      perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
    }
  }
  function isSupported() {
    if (supported !== undefined) {
      return supported;
    }
    
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else {
      supported = false;
    }
    
    return supported;
  }

  // implementation, close to no-op
  function defineComponent(options) {
    return isFunction(options) ? { setup: options, name: options.name } : options;
  }

  const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
  function defineAsyncComponent(source) {
    if (isFunction(source)) {
      source = { loader: source };
    }
    const {
      loader,
      loadingComponent,
      errorComponent,
      delay = 200,
      timeout, // undefined = never times out
      suspensible = true,
      onError: userOnError,
    } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = () => {
      retries++;
      pendingRequest = null;
      return load();
    };
    const load = () => {
      let thisRequest;
      return (
        pendingRequest ||
        (thisRequest = pendingRequest =
          loader()
            .catch((err) => {
              err = err instanceof Error ? err : new Error(String(err));
              if (userOnError) {
                return new Promise((resolve, reject) => {
                  const userRetry = () => resolve(retry());
                  const userFail = () => reject(err);
                  userOnError(err, userRetry, userFail, retries + 1);
                });
              } else {
                throw err;
              }
            })
            .then((comp) => {
              if (thisRequest !== pendingRequest && pendingRequest) {
                return pendingRequest;
              }
              if (!comp) {
                warn(`Async component loader resolved to undefined. ` + `If you are using retry(), make sure to return its return value.`);
              }
              // interop module default
              if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
                comp = comp.default;
              }
              if (comp && !isObject(comp) && !isFunction(comp)) {
                throw new Error(`Invalid async component load result: ${comp}`);
              }
              resolvedComp = comp;
              return comp;
            }))
      );
    };
    return defineComponent({
      __asyncLoader: load,
      name: "AsyncComponentWrapper",
      setup() {
        const instance = currentInstance;
        // already resolved
        if (resolvedComp) {
          return () => createInnerComp(resolvedComp, instance);
        }
        const onError = (err) => {
          pendingRequest = null;
          handleError(err, instance, 13 , !errorComponent );
        };
        // suspense-controlled or SSR.
        if ((suspensible && instance.suspense) || false) {
          return load()
            .then((comp) => {
              return () => createInnerComp(comp, instance);
            })
            .catch((err) => {
              onError(err);
              return () =>
                errorComponent
                  ? createVNode(errorComponent, {
                      error: err,
                    })
                  : null;
            });
        }
        const loaded = ref(false);
        const error = ref();
        const delayed = ref(!!delay);
        if (delay) {
          setTimeout(() => {
            delayed.value = false;
          }, delay);
        }
        if (timeout != null) {
          setTimeout(() => {
            if (!loaded.value && !error.value) {
              const err = new Error(`Async component timed out after ${timeout}ms.`);
              onError(err);
              error.value = err;
            }
          }, timeout);
        }
        load()
          .then(() => {
            loaded.value = true;
          })
          .catch((err) => {
            onError(err);
            error.value = err;
          });
        return () => {
          if (loaded.value && resolvedComp) {
            return createInnerComp(resolvedComp, instance);
          } else if (error.value && errorComponent) {
            return createVNode(errorComponent, {
              error: error.value,
            });
          } else if (loadingComponent && !delayed.value) {
            return createVNode(loadingComponent);
          }
        };
      },
    });
  }
  function createInnerComp(comp, { vnode: { ref, props, children } }) {
    const vnode = createVNode(comp, props, children);
    // ensure inner component inherits the async wrapper's ref owner
    vnode.ref = ref;
    return vnode;
  }

  function createDevEffectOptions(instance) {
    return {
      scheduler: queueJob,
      allowRecurse: true,
      onTrack: instance.rtc ? (e) => invokeArrayFns(instance.rtc, e) : void 0,
      onTrigger: instance.rtg ? (e) => invokeArrayFns(instance.rtg, e) : void 0,
    };
  }
  const queuePostRenderEffect = queueEffectWithSuspense;
  const setRef = (rawRef, oldRawRef, parentSuspense, vnode) => {
    if (isArray(rawRef)) {
      rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode));
      return;
    }
    let value;
    if (!vnode) {
      // means unmount
      value = null;
    } else if (isAsyncWrapper(vnode)) {
      // when mounting async components, nothing needs to be done,
      // because the template ref is forwarded to inner component
      return;
    } else if (vnode.shapeFlag & 4 ) {
      value = vnode.component.exposed || vnode.component.proxy;
    } else {
      value = vnode.el;
    }
    const { i: owner, r: ref } = rawRef;
    if (!owner) {
      warn(`Missing ref owner context. ref cannot be used on hoisted vnodes. ` + `A vnode with ref must be created inside the render function.`);
      return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === EMPTY_OBJ ? (owner.refs = {}) : owner.refs;
    const setupState = owner.setupState;
    // unset old ref
    if (oldRef != null && oldRef !== ref) {
      if (isString(oldRef)) {
        refs[oldRef] = null;
        if (hasOwn(setupState, oldRef)) {
          setupState[oldRef] = null;
        }
      } else if (isRef(oldRef)) {
        oldRef.value = null;
      }
    }
    if (isString(ref)) {
      const doSet = () => {
        refs[ref] = value;
        if (hasOwn(setupState, ref)) {
          setupState[ref] = value;
        }
      };
      // #1789: for non-null values, set them after render
      // null values means this is unmount and it should not overwrite another
      // ref with the same key
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else if (isRef(ref)) {
      const doSet = () => {
        ref.value = value;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else if (isFunction(ref)) {
      callWithErrorHandling(ref, owner, 12 , [value, refs]);
    } else {
      warn("Invalid template ref type:", value, `(${typeof value})`);
    }
  };
  
  function createRenderer(options) {
    return baseCreateRenderer(options);
  }
  // Separate API for creating hydration-enabled renderer.
  // Hydration logic is only used when calling this function, making it
  // tree-shakable.
  function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
  }
  // implementation
  function baseCreateRenderer(options, createHydrationFns) {
    {
      const target = getGlobalThis();
      target.__a2020Vue__ = true;
      setDevtoolsHook(target.__a2020Vue_DEVTOOLS_GLOBAL_HOOK__);
    }
    const {
      insert: hostInsert,
      remove: hostRemove,
      patchProp: hostPatchProp,
      forcePatchProp: hostForcePatchProp,
      createElement: hostCreateElement,
      createText: hostCreateText,
      createComment: hostCreateComment,
      setText: hostSetText,
      setElementText: hostSetElementText,
      parentNode: hostParentNode,
      nextSibling: hostNextSibling,
      setScopeId: hostSetScopeId = NOOP,
      cloneNode: hostCloneNode,
      insertStaticContent: hostInsertStaticContent,
    } = options;
    // Note: functions inside this closure should use `const xxx = () => {}`
    // style in order to prevent being inlined by minifiers.
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = false) => {
      // patching & not same type, unmount old tree
      if (n1 && !isSameVNodeType(n1, n2)) {
        anchor = getNextHostNode(n1);
        unmount(n1, parentComponent, parentSuspense, true);
        n1 = null;
      }
      if (n2.patchFlag === -2 ) {
        optimized = false;
        n2.dynamicChildren = null;
      }
      const { type, ref, shapeFlag } = n2;
      switch (type) {
        case Text:
          processText(n1, n2, container, anchor);
          break;
        case Comment:
          processCommentNode(n1, n2, container, anchor);
          break;
        case Static:
          if (n1 == null) {
            mountStaticNode(n2, container, anchor, isSVG);
          } else {
            patchStaticNode(n1, n2, container, isSVG);
          }
          break;
        case Fragment:
          processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          break;
        default:
          if (shapeFlag & 1 ) {
            processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 6 ) {
            processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 64 ) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else if (shapeFlag & 128 ) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else {
            warn("Invalid VNode type:", type, `(${typeof type})`);
          }
      }
      // set ref
      if (ref != null && parentComponent) {
        setRef(ref, n1 && n1.ref, parentSuspense, n2);
      }
    };
    const processText = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert((n2.el = hostCreateText(n2.children)), container, anchor);
      } else {
        const el = (n2.el = n1.el);
        if (n2.children !== n1.children) {
          hostSetText(el, n2.children);
        }
      }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert((n2.el = hostCreateComment(n2.children || "")), container, anchor);
      } else {
        // there's no support for dynamic comments
        n2.el = n1.el;
      }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
      [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
    };
    
    const patchStaticNode = (n1, n2, container, isSVG) => {
      // static nodes are only patched during dev for HMR
      if (n2.children !== n1.children) {
        const anchor = hostNextSibling(n1.anchor);
        // remove existing
        removeStaticNode(n1);
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
      } else {
        n2.el = n1.el;
        n2.anchor = n1.anchor;
      }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostInsert(el, container, nextSibling);
        el = next;
      }
      hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostRemove(el);
        el = next;
      }
      hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      isSVG = isSVG || n2.type === "svg";
      if (n1 == null) {
        mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      let el;
      let vnodeHook;
      const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
      {
        el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
        // mount children first, since some props may rely on child content
        // being already rendered, e.g. `<select value>`
        if (shapeFlag & 8 ) {
          hostSetElementText(el, vnode.children);
        } else if (shapeFlag & 16 ) {
          mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized || !!vnode.dynamicChildren);
        }
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "created");
        }
        // props
        if (props) {
          for (const key in props) {
            if (!isReservedProp(key)) {
              hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
          if ((vnodeHook = props.onVnodeBeforeMount)) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
          }
        }
        // scopeId
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
      }
      {
        Object.defineProperty(el, "__vnode", {
          value: vnode,
          enumerable: false,
        });
        Object.defineProperty(el, "__a2020VueParentComponent", {
          value: parentComponent,
          enumerable: false,
        });
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
      // #1689 For inside suspense + suspense resolved case, just call it
      const needCallTransitionHooks = (!parentSuspense || (parentSuspense && !parentSuspense.pendingBranch)) && transition && !transition.persisted;
      if (needCallTransitionHooks) {
        transition.beforeEnter(el);
      }
      hostInsert(el, container, anchor);
      if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
      if (scopeId) {
        hostSetScopeId(el, scopeId);
      }
      if (slotScopeIds) {
        for (let i = 0; i < slotScopeIds.length; i++) {
          hostSetScopeId(el, slotScopeIds[i]);
        }
      }
      if (parentComponent) {
        let subTree = parentComponent.subTree;
        if (subTree.patchFlag > 0 && subTree.patchFlag & 2048 ) {
          subTree = filterSingleRoot(subTree.children) || subTree;
        }
        if (vnode === subTree) {
          const parentVNode = parentComponent.vnode;
          setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
        }
      }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, optimized, slotScopeIds, start = 0) => {
      for (let i = start; i < children.length; i++) {
        const child = (children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]));
        patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, optimized, slotScopeIds);
      }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      const el = (n2.el = n1.el);
      let { patchFlag, dynamicChildren, dirs } = n2;
      // #1426 take the old vnode's patch flag into account since user may clone a
      // compiler-generated vnode, which de-opts to FULL_PROPS
      patchFlag |= n1.patchFlag & 16 ;
      const oldProps = n1.props || EMPTY_OBJ;
      const newProps = n2.props || EMPTY_OBJ;
      let vnodeHook;
      if ((vnodeHook = newProps.onVnodeBeforeUpdate)) {
        invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
      }
      if (dirs) {
        invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
      }
      if (isHmrUpdating) {
        // HMR updated, force full diff
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      if (patchFlag > 0) {
        // the presence of a patchFlag means this element's render code was
        // generated by the compiler and can take the fast path.
        // in this path old node and new node are guaranteed to have the same shape
        // (i.e. at the exact same position in the source template)
        if (patchFlag & 16 ) {
          // element props contain dynamic keys, full diff needed
          patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        } else {
          // class
          // this flag is matched when the element has dynamic class bindings.
          if (patchFlag & 2 ) {
            if (oldProps.class !== newProps.class) {
              hostPatchProp(el, "class", null, newProps.class, isSVG);
            }
          }
          // style
          // this flag is matched when the element has dynamic style bindings
          if (patchFlag & 4 ) {
            hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
          }
          // props
          // This flag is matched when the element has dynamic prop/attr bindings
          // other than class and style. The keys of dynamic prop/attrs are saved for
          // faster iteration.
          // Note dynamic keys like :[foo]="bar" will cause this optimization to
          // bail out and go through a full diff because we need to unset the old key
          if (patchFlag & 8 ) {
            // if the flag is present then dynamicProps must be non-null
            const propsToUpdate = n2.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
              const key = propsToUpdate[i];
              const prev = oldProps[key];
              const next = newProps[key];
              if (next !== prev || (hostForcePatchProp && hostForcePatchProp(el, key))) {
                hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
              }
            }
          }
        }
        // text
        // This flag is matched when the element has only dynamic text children.
        if (patchFlag & 1 ) {
          if (n1.children !== n2.children) {
            hostSetElementText(el, n2.children);
          }
        }
      } else if (!optimized && dynamicChildren == null) {
        // unoptimized, full diff
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      }
      const areChildrenSVG = isSVG && n2.type !== "foreignObject";
      if (dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
        if (parentComponent && parentComponent.type.__hmrId) {
          traverseStaticChildren(n1, n2);
        }
      } else if (!optimized) {
        // full diff
        patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
      }
      if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
          dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
      }
    };
    // The fast path for blocks.
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
      for (let i = 0; i < newChildren.length; i++) {
        const oldVNode = oldChildren[i];
        const newVNode = newChildren[i];
        // Determine the container (parent element) for the patch.
        const container =
          // - In the case of a Fragment, we need to provide the actual parent
          // of the Fragment itself so it can move its children.
          oldVNode.type === Fragment ||
          // - In the case of different nodes, there is going to be a replacement
          // which also requires the correct parent container
          !isSameVNodeType(oldVNode, newVNode) ||
          // - In the case of a component, it could contain anything.
          oldVNode.shapeFlag & 6  ||
          oldVNode.shapeFlag & 64 
            ? hostParentNode(oldVNode.el)
            : // In other cases, the parent container is not actually used so we
              // just pass the block element here to avoid a DOM parentNode call.
              fallbackContainer;
        patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
      }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
      if (oldProps !== newProps) {
        for (const key in newProps) {
          // empty string is not valid prop
          if (isReservedProp(key)) continue;
          const next = newProps[key];
          const prev = oldProps[key];
          if (next !== prev || (hostForcePatchProp && hostForcePatchProp(el, key))) {
            hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if (oldProps !== EMPTY_OBJ) {
          for (const key in oldProps) {
            if (!isReservedProp(key) && !(key in newProps)) {
              hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      const fragmentStartAnchor = (n2.el = n1 ? n1.el : hostCreateText(""));
      const fragmentEndAnchor = (n2.anchor = n1 ? n1.anchor : hostCreateText(""));
      let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
      if (patchFlag > 0) {
        optimized = true;
      }
      // check if this is a slot fragment with :slotted scope ids
      if (fragmentSlotScopeIds) {
        slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
      }
      if (isHmrUpdating) {
        // HMR updated, force full diff
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      if (n1 == null) {
        hostInsert(fragmentStartAnchor, container, anchor);
        hostInsert(fragmentEndAnchor, container, anchor);
        // a fragment can only have array children
        // since they are either generated by the compiler, or implicitly created
        // from arrays.
        mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        if (
          patchFlag > 0 &&
          patchFlag & 64  &&
          dynamicChildren &&
          // #2715 the previous fragment could've been a BAILed one as a result
          // of renderSlot() with no valid children
          n1.dynamicChildren
        ) {
          // a stable fragment (template root or <template v-for>) doesn't need to
          // patch children order, but it may contain dynamicChildren.
          patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
          if (parentComponent && parentComponent.type.__hmrId) {
            traverseStaticChildren(n1, n2);
          } else if (
            // #2080 if the stable fragment has a key, it's a <template v-for> that may
            //  get moved around. Make sure all root level vnodes inherit el.
            // #2134 or if it's a component root, it may also get moved around
            // as the component is being moved.
            n2.key != null ||
            (parentComponent && n2 === parentComponent.subTree)
          ) {
            traverseStaticChildren(n1, n2, true );
          }
        } else {
          // keyed / unkeyed, or manual fragments.
          // for keyed & unkeyed, since they are compiler generated from v-for,
          // each child is guaranteed to be a block so the fragment will never
          // have dynamicChildren.
          patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      n2.slotScopeIds = slotScopeIds;
      if (n1 == null) {
        if (n2.shapeFlag & 512 ) {
          parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
        } else {
          mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
      } else {
        updateComponent(n1, n2, optimized);
      }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
      const instance = (initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense));
      if (instance.type.__hmrId) {
        registerHMR(instance);
      }
      {
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
      }
      // inject renderer internals for keepAlive
      if (isKeepAlive(initialVNode)) {
        instance.ctx.renderer = internals;
      }
      // resolve props and slots for setup context
      {
        startMeasure(instance, `init`);
      }
      setupComponent(instance);
      {
        endMeasure(instance, `init`);
      }
      // setup() is async. This component relies on async logic to be resolved
      // before proceeding
      if (instance.asyncDep) {
        parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
        // Give it a placeholder if this is not hydration
        // TODO handle self-defined fallback
        if (!initialVNode.el) {
          const placeholder = (instance.subTree = createVNode(Comment));
          processCommentNode(null, placeholder, container, anchor);
        }
        return;
      }
      setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
      {
        popWarningContext();
        endMeasure(instance, `mount`);
      }
    };
    const updateComponent = (n1, n2, optimized) => {
      const instance = (n2.component = n1.component);
      if (shouldUpdateComponent(n1, n2, optimized)) {
        if (instance.asyncDep && !instance.asyncResolved) {
          // async & still pending - just update props and slots
          // since the component's reactive effect for render isn't set-up yet
          {
            pushWarningContext(n2);
          }
          updateComponentPreRender(instance, n2, optimized);
          {
            popWarningContext();
          }
          return;
        } else {
          // normal update
          instance.next = n2;
          // in case the child component is also queued, remove it to avoid
          // double updating the same child component in the same flush.
          invalidateJob(instance.update);
          // instance.update is the reactive effect runner.
          instance.update();
        }
      } else {
        // no update needed. just copy over properties
        n2.component = n1.component;
        n2.el = n1.el;
        instance.vnode = n2;
      }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
      // create reactive effect for rendering
      instance.update = effect(function componentEffect() {
        if (!instance.isMounted) {
          let vnodeHook;
          const { el, props } = initialVNode;
          const { bm, m, parent } = instance;
          // beforeMount hook
          if (bm) {
            invokeArrayFns(bm);
          }
          // onVnodeBeforeMount
          if ((vnodeHook = props && props.onVnodeBeforeMount)) {
            invokeVNodeHook(vnodeHook, parent, initialVNode);
          }
          // render
          {
            startMeasure(instance, `render`);
          }
          const subTree = (instance.subTree = renderComponentRoot(instance));
          {
            endMeasure(instance, `render`);
          }
          if (el && hydrateNode) {
            {
              startMeasure(instance, `hydrate`);
            }
            // vnode has adopted host node - perform hydration instead of mount.
            hydrateNode(initialVNode.el, subTree, instance, parentSuspense, null);
            {
              endMeasure(instance, `hydrate`);
            }
          } else {
            {
              startMeasure(instance, `patch`);
            }
            patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
            {
              endMeasure(instance, `patch`);
            }
            initialVNode.el = subTree.el;
          }
          // mounted hook
          if (m) {
            queuePostRenderEffect(m, parentSuspense);
          }
          // onVnodeMounted
          if ((vnodeHook = props && props.onVnodeMounted)) {
            const scopedInitialVNode = initialVNode;
            queuePostRenderEffect(() => {
              invokeVNodeHook(vnodeHook, parent, scopedInitialVNode);
            }, parentSuspense);
          }
          // activated hook for keep-alive roots.
          // #1742 activated hook must be accessed after first render
          // since the hook may be injected by a child keep-alive
          const { a } = instance;
          if (a && initialVNode.shapeFlag & 256 ) {
            queuePostRenderEffect(a, parentSuspense);
          }
          instance.isMounted = true;
          {
            devtoolsComponentAdded(instance);
          }
          // #2458: deference mount-only object parameters to prevent memleaks
          initialVNode = container = anchor = null;
        } else {
          // updateComponent
          // This is triggered by mutation of component's own state (next: null)
          // OR parent calling processComponent (next: VNode)
          let { next, bu, u, parent, vnode } = instance;
          let originNext = next;
          let vnodeHook;
          {
            pushWarningContext(next || instance.vnode);
          }
          if (next) {
            next.el = vnode.el;
            updateComponentPreRender(instance, next, optimized);
          } else {
            next = vnode;
          }
          // beforeUpdate hook
          if (bu) {
            invokeArrayFns(bu);
          }
          // onVnodeBeforeUpdate
          if ((vnodeHook = next.props && next.props.onVnodeBeforeUpdate)) {
            invokeVNodeHook(vnodeHook, parent, next, vnode);
          }
          // render
          {
            startMeasure(instance, `render`);
          }
          const nextTree = renderComponentRoot(instance);
          {
            endMeasure(instance, `render`);
          }
          const prevTree = instance.subTree;
          instance.subTree = nextTree;
          {
            startMeasure(instance, `patch`);
          }
          patch(
            prevTree,
            nextTree,
            // parent may have changed if it's in a teleport
            hostParentNode(prevTree.el),
            // anchor may have changed if it's in a fragment
            getNextHostNode(prevTree),
            instance,
            parentSuspense,
            isSVG
          );
          {
            endMeasure(instance, `patch`);
          }
          next.el = nextTree.el;
          if (originNext === null) {
            // self-triggered update. In case of HOC, update parent component
            // vnode el. HOC is indicated by parent instance's subTree pointing
            // to child component's vnode
            updateHOCHostEl(instance, nextTree.el);
          }
          // updated hook
          if (u) {
            queuePostRenderEffect(u, parentSuspense);
          }
          // onVnodeUpdated
          if ((vnodeHook = next.props && next.props.onVnodeUpdated)) {
            queuePostRenderEffect(() => {
              invokeVNodeHook(vnodeHook, parent, next, vnode);
            }, parentSuspense);
          }
          {
            devtoolsComponentUpdated(instance);
          }
          {
            popWarningContext();
          }
        }
      }, createDevEffectOptions(instance));
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
      nextVNode.component = instance;
      const prevProps = instance.vnode.props;
      instance.vnode = nextVNode;
      instance.next = null;
      updateProps(instance, nextVNode.props, prevProps, optimized);
      updateSlots(instance, nextVNode.children, optimized);
      pauseTracking();
      // props update may have triggered pre-flush watchers.
      // flush them before the render update.
      flushPreFlushCbs(undefined, instance.update);
      resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
      const c1 = n1 && n1.children;
      const prevShapeFlag = n1 ? n1.shapeFlag : 0;
      const c2 = n2.children;
      const { patchFlag, shapeFlag } = n2;
      // fast path
      if (patchFlag > 0) {
        if (patchFlag & 128 ) {
          // this could be either fully-keyed or mixed (some keyed some not)
          // presence of patchFlag means children are guaranteed to be arrays
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        } else if (patchFlag & 256 ) {
          // unkeyed
          patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        }
      }
      // children has 3 possibilities: text, array or no children.
      if (shapeFlag & 8 ) {
        // text children fast path
        if (prevShapeFlag & 16 ) {
          unmountChildren(c1, parentComponent, parentSuspense);
        }
        if (c2 !== c1) {
          hostSetElementText(container, c2);
        }
      } else {
        if (prevShapeFlag & 16 ) {
          // prev children was array
          if (shapeFlag & 16 ) {
            // two arrays, cannot assume anything, do full diff
            patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else {
            // no new children, just unmount old
            unmountChildren(c1, parentComponent, parentSuspense, true);
          }
        } else {
          // prev children was text OR null
          // new children is array OR null
          if (prevShapeFlag & 8 ) {
            hostSetElementText(container, "");
          }
          // mount new if array
          if (shapeFlag & 16 ) {
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
        }
      }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      c1 = c1 || EMPTY_ARR;
      c2 = c2 || EMPTY_ARR;
      const oldLength = c1.length;
      const newLength = c2.length;
      const commonLength = Math.min(oldLength, newLength);
      let i;
      for (i = 0; i < commonLength; i++) {
        const nextChild = (c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]));
        patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
      if (oldLength > newLength) {
        // remove old
        unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
      } else {
        // mount new
        mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
      }
    };
    // can be all-keyed or mixed
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      let i = 0;
      const l2 = c2.length;
      let e1 = c1.length - 1; // prev ending index
      let e2 = l2 - 1; // next ending index
      // 1. sync from start
      // (a b) c
      // (a b) d e
      while (i <= e1 && i <= e2) {
        const n1 = c1[i];
        const n2 = (c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]));
        if (isSameVNodeType(n1, n2)) {
          patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          break;
        }
        i++;
      }
      // 2. sync from end
      // a (b c)
      // d e (b c)
      while (i <= e1 && i <= e2) {
        const n1 = c1[e1];
        const n2 = (c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]));
        if (isSameVNodeType(n1, n2)) {
          patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          break;
        }
        e1--;
        e2--;
      }
      // 3. common sequence + mount
      // (a b)
      // (a b) c
      // i = 2, e1 = 1, e2 = 2
      // (a b)
      // c (a b)
      // i = 0, e1 = -1, e2 = 0
      if (i > e1) {
        if (i <= e2) {
          const nextPos = e2 + 1;
          const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
          while (i <= e2) {
            patch(null, (c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i])), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            i++;
          }
        }
      }
      // 4. common sequence + unmount
      // (a b) c
      // (a b)
      // i = 2, e1 = 2, e2 = 1
      // a (b c)
      // (b c)
      // i = 0, e1 = 0, e2 = -1
      else if (i > e2) {
        while (i <= e1) {
          unmount(c1[i], parentComponent, parentSuspense, true);
          i++;
        }
      }
      // 5. unknown sequence
      // [i ... e1 + 1]: a b [c d e] f g
      // [i ... e2 + 1]: a b [e d c h] f g
      // i = 2, e1 = 4, e2 = 5
      else {
        const s1 = i; // prev starting index
        const s2 = i; // next starting index
        // 5.1 build key:index map for newChildren
        const keyToNewIndexMap = new Map();
        for (i = s2; i <= e2; i++) {
          const nextChild = (c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]));
          if (nextChild.key != null) {
            if (keyToNewIndexMap.has(nextChild.key)) {
              warn(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
            }
            keyToNewIndexMap.set(nextChild.key, i);
          }
        }
        // 5.2 loop through old children left to be patched and try to patch
        // matching nodes & remove nodes that are no longer present
        let j;
        let patched = 0;
        const toBePatched = e2 - s2 + 1;
        let moved = false;
        // used to track whether any node has moved
        let maxNewIndexSoFar = 0;
        // works as Map<newIndex, oldIndex>
        // Note that oldIndex is offset by +1
        // and oldIndex = 0 is a special value indicating the new node has
        // no corresponding old node.
        // used for determining longest stable subsequence
        const newIndexToOldIndexMap = new Array(toBePatched);
        for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
        for (i = s1; i <= e1; i++) {
          const prevChild = c1[i];
          if (patched >= toBePatched) {
            // all new children have been patched so this can only be a removal
            unmount(prevChild, parentComponent, parentSuspense, true);
            continue;
          }
          let newIndex;
          if (prevChild.key != null) {
            newIndex = keyToNewIndexMap.get(prevChild.key);
          } else {
            // key-less node, try to locate a key-less node of the same type
            for (j = s2; j <= e2; j++) {
              if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                newIndex = j;
                break;
              }
            }
          }
          if (newIndex === undefined) {
            unmount(prevChild, parentComponent, parentSuspense, true);
          } else {
            newIndexToOldIndexMap[newIndex - s2] = i + 1;
            if (newIndex >= maxNewIndexSoFar) {
              maxNewIndexSoFar = newIndex;
            } else {
              moved = true;
            }
            patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            patched++;
          }
        }
        // 5.3 move and mount
        // generate longest stable subsequence only when nodes have moved
        const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
        j = increasingNewIndexSequence.length - 1;
        // looping backwards so that we can use last patched node as anchor
        for (i = toBePatched - 1; i >= 0; i--) {
          const nextIndex = s2 + i;
          const nextChild = c2[nextIndex];
          const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
          if (newIndexToOldIndexMap[i] === 0) {
            // mount new
            patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (moved) {
            // move if:
            // There is no stable subsequence (e.g. a reverse)
            // OR current node is not among the stable sequence
            if (j < 0 || i !== increasingNewIndexSequence[j]) {
              move(nextChild, container, anchor, 2 );
            } else {
              j--;
            }
          }
        }
      }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
      const { el, type, transition, children, shapeFlag } = vnode;
      if (shapeFlag & 6 ) {
        move(vnode.component.subTree, container, anchor, moveType);
        return;
      }
      if (shapeFlag & 128 ) {
        vnode.suspense.move(container, anchor, moveType);
        return;
      }
      if (shapeFlag & 64 ) {
        type.move(vnode, container, anchor, internals);
        return;
      }
      if (type === Fragment) {
        hostInsert(el, container, anchor);
        for (let i = 0; i < children.length; i++) {
          move(children[i], container, anchor, moveType);
        }
        hostInsert(vnode.anchor, container, anchor);
        return;
      }
      if (type === Static) {
        moveStaticNode(vnode, container, anchor);
        return;
      }
      // single nodes
      const needTransition = moveType !== 2  && shapeFlag & 1  && transition;
      if (needTransition) {
        if (moveType === 0 ) {
          transition.beforeEnter(el);
          hostInsert(el, container, anchor);
          queuePostRenderEffect(() => transition.enter(el), parentSuspense);
        } else {
          const { leave, delayLeave, afterLeave } = transition;
          const remove = () => hostInsert(el, container, anchor);
          const performLeave = () => {
            leave(el, () => {
              remove();
              afterLeave && afterLeave();
            });
          };
          if (delayLeave) {
            delayLeave(el, remove, performLeave);
          } else {
            performLeave();
          }
        }
      } else {
        hostInsert(el, container, anchor);
      }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
      const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
      // unset ref
      if (ref != null) {
        setRef(ref, null, parentSuspense, null);
      }
      if (shapeFlag & 256 ) {
        parentComponent.ctx.deactivate(vnode);
        return;
      }
      const shouldInvokeDirs = shapeFlag & 1  && dirs;
      let vnodeHook;
      if ((vnodeHook = props && props.onVnodeBeforeUnmount)) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
      if (shapeFlag & 6 ) {
        unmountComponent(vnode.component, parentSuspense, doRemove);
      } else {
        if (shapeFlag & 128 ) {
          vnode.suspense.unmount(parentSuspense, doRemove);
          return;
        }
        if (shouldInvokeDirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
        }
        if (shapeFlag & 64 ) {
          vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
        } else if (
          dynamicChildren &&
          // #1153: fast path should not be taken for non-stable (v-for) fragments
          (type !== Fragment || (patchFlag > 0 && patchFlag & 64)) 
        ) {
          // fast path for block nodes: only need to unmount dynamic children.
          unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
        } else if ((type === Fragment && (patchFlag & 128  || patchFlag & 256))  || (!optimized && shapeFlag & 16) ) {
          unmountChildren(children, parentComponent, parentSuspense);
        }
        if (doRemove) {
          remove(vnode);
        }
      }
      if ((vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
      }
    };
    const remove = (vnode) => {
      const { type, el, anchor, transition } = vnode;
      if (type === Fragment) {
        removeFragment(el, anchor);
        return;
      }
      if (type === Static) {
        removeStaticNode(vnode);
        return;
      }
      const performRemove = () => {
        hostRemove(el);
        if (transition && !transition.persisted && transition.afterLeave) {
          transition.afterLeave();
        }
      };
      if (vnode.shapeFlag & 1  && transition && !transition.persisted) {
        const { leave, delayLeave } = transition;
        const performLeave = () => leave(el, performRemove);
        if (delayLeave) {
          delayLeave(vnode.el, performRemove, performLeave);
        } else {
          performLeave();
        }
      } else {
        performRemove();
      }
    };
    const removeFragment = (cur, end) => {
      // For fragments, directly remove all contained DOM nodes.
      // (fragment child nodes cannot have transition)
      let next;
      while (cur !== end) {
        next = hostNextSibling(cur);
        hostRemove(cur);
        cur = next;
      }
      hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
      if (instance.type.__hmrId) {
        unregisterHMR(instance);
      }
      const { bum, effects, update, subTree, um } = instance;
      // beforeUnmount hook
      if (bum) {
        invokeArrayFns(bum);
      }
      if (effects) {
        for (let i = 0; i < effects.length; i++) {
          stop(effects[i]);
        }
      }
      // update may be null if a component is unmounted before its async
      // setup has resolved.
      if (update) {
        stop(update);
        unmount(subTree, instance, parentSuspense, doRemove);
      }
      // unmounted hook
      if (um) {
        queuePostRenderEffect(um, parentSuspense);
      }
      queuePostRenderEffect(() => {
        instance.isUnmounted = true;
      }, parentSuspense);
      // A component with async dep inside a pending suspense is unmounted before
      // its async dep resolves. This should remove the dep from the suspense, and
      // cause the suspense to resolve immediately if that was the last dep.
      if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
        parentSuspense.deps--;
        if (parentSuspense.deps === 0) {
          parentSuspense.resolve();
        }
      }
      {
        devtoolsComponentRemoved(instance);
      }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
      for (let i = start; i < children.length; i++) {
        unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
      }
    };
    const getNextHostNode = (vnode) => {
      if (vnode.shapeFlag & 6 ) {
        return getNextHostNode(vnode.component.subTree);
      }
      if (vnode.shapeFlag & 128 ) {
        return vnode.suspense.next();
      }
      return hostNextSibling(vnode.anchor || vnode.el);
    };
    const render = (vnode, container, isSVG) => {
      if (vnode == null) {
        if (container._vnode) {
          unmount(container._vnode, null, null, true);
        }
      } else {
        patch(container._vnode || null, vnode, container, null, null, null, isSVG);
      }
      flushPostFlushCbs();
      container._vnode = vnode;
    };
    const internals = {
      p: patch,
      um: unmount,
      m: move,
      r: remove,
      mt: mountComponent,
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      n: getNextHostNode,
      o: options,
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
      [hydrate, hydrateNode] = createHydrationFns(internals);
    }
    return {
      render,
      hydrate,
      createApp: createAppAPI(render, hydrate),
    };
  }
  function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7 , [vnode, prevVNode]);
  }
  
  function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (isArray(ch1) && isArray(ch2)) {
      for (let i = 0; i < ch1.length; i++) {
        // this is only called in the optimized path so array children are
        // guaranteed to be vnodes
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1  && !c2.dynamicChildren) {
          if (c2.patchFlag <= 0 || c2.patchFlag === 32 ) {
            c2 = ch2[i] = cloneIfMounted(ch2[i]);
            c2.el = c1.el;
          }
          if (!shallow) traverseStaticChildren(c1, c2);
        }
        // also inherit for comment nodes, but not placeholders (e.g. v-if which
        // would have received .el during block patch)
        if (c2.type === Comment && !c2.el) {
          c2.el = c1.el;
        }
      }
    }
  }
  // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
  function getSequence(arr) {
    const p = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
      const arrI = arr[i];
      if (arrI !== 0) {
        j = result[result.length - 1];
        if (arr[j] < arrI) {
          p[i] = j;
          result.push(i);
          continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
          c = ((u + v) / 2) | 0;
          if (arr[result[c]] < arrI) {
            u = c + 1;
          } else {
            v = c;
          }
        }
        if (arrI < arr[result[u]]) {
          if (u > 0) {
            p[i] = result[u - 1];
          }
          result[u] = i;
        }
      }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
      result[u] = v;
      v = p[v];
    }
    return result;
  }

  const isTeleport = (type) => type.__isTeleport;
  const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
  const isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
  const resolveTarget = (props, select) => {
    const targetSelector = props && props.to;
    if (isString(targetSelector)) {
      if (!select) {
        warn(`Current renderer does not support string target for Teleports. ` + `(missing querySelector renderer option)`);
        return null;
      } else {
        const target = select(targetSelector);
        if (!target) {
          warn(
            `Failed to locate Teleport target with selector "${targetSelector}". ` +
              `Note the target element must exist before the component is mounted - ` +
              `i.e. the target cannot be rendered by the component itself, and ` +
              `ideally should be outside of the entire a2020Vue component tree.`
          );
        }
        return target;
      }
    } else {
      if (!targetSelector && !isTeleportDisabled(props)) {
        warn(`Invalid Teleport target: ${targetSelector}`);
      }
      return targetSelector;
    }
  };
  const TeleportImpl = {
    __isTeleport: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
      const {
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        o: { insert, querySelector, createText, createComment },
      } = internals;
      const disabled = isTeleportDisabled(n2.props);
      const { shapeFlag, children } = n2;
      // #3302
      // HMR updated, force full diff
      if (isHmrUpdating) {
        optimized = false;
        n2.dynamicChildren = null;
      }
      if (n1 == null) {
        // insert anchors in the main view
        const placeholder = (n2.el = createComment("teleport start"));
        const mainAnchor = (n2.anchor = createComment("teleport end"));
        insert(placeholder, container, anchor);
        insert(mainAnchor, container, anchor);
        const target = (n2.target = resolveTarget(n2.props, querySelector));
        const targetAnchor = (n2.targetAnchor = createText(""));
        if (target) {
          insert(targetAnchor, target);
          // #2652 we could be teleporting from a non-SVG tree into an SVG tree
          isSVG = isSVG || isTargetSVG(target);
        } else if (!disabled) {
          warn("Invalid Teleport target on mount:", target, `(${typeof target})`);
        }
        const mount = (container, anchor) => {
          // Teleport *always* has Array children. This is enforced in both the
          // compiler and vnode children normalization.
          if (shapeFlag & 16 ) {
            mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
        };
        if (disabled) {
          mount(container, mainAnchor);
        } else if (target) {
          mount(target, targetAnchor);
        }
      } else {
        // update content
        n2.el = n1.el;
        const mainAnchor = (n2.anchor = n1.anchor);
        const target = (n2.target = n1.target);
        const targetAnchor = (n2.targetAnchor = n1.targetAnchor);
        const wasDisabled = isTeleportDisabled(n1.props);
        const currentContainer = wasDisabled ? container : target;
        const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
        isSVG = isSVG || isTargetSVG(target);
        if (n2.dynamicChildren) {
          // fast path when the teleport happens to be a block root
          patchBlockChildren(n1.dynamicChildren, n2.dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
          // even in block tree mode we need to make sure all root-level nodes
          // in the teleport inherit previous DOM references so that they can
          // be moved in future patches.
          traverseStaticChildren(n1, n2, true);
        } else if (!optimized) {
          patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
        }
        if (disabled) {
          if (!wasDisabled) {
            // enabled -> disabled
            // move into main container
            moveTeleport(n2, container, mainAnchor, internals, 1 );
          }
        } else {
          // target changed
          if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
            const nextTarget = (n2.target = resolveTarget(n2.props, querySelector));
            if (nextTarget) {
              moveTeleport(n2, nextTarget, null, internals, 0 );
            } else {
              warn("Invalid Teleport target on update:", target, `(${typeof target})`);
            }
          } else if (wasDisabled) {
            // disabled -> enabled
            // move into teleport target
            moveTeleport(n2, target, targetAnchor, internals, 1 );
          }
        }
      }
    },
    remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
      const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
      if (target) {
        hostRemove(targetAnchor);
      }
      // an unmounted teleport should always remove its children if not disabled
      if (doRemove || !isTeleportDisabled(props)) {
        hostRemove(anchor);
        if (shapeFlag & 16 ) {
          for (let i = 0; i < children.length; i++) {
            unmount(children[i], parentComponent, parentSuspense, true, optimized);
          }
        }
      }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport,
  };
  function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2 ) {
    // move target anchor if this is a target change.
    if (moveType === 0 ) {
      insert(vnode.targetAnchor, container, parentAnchor);
    }
    const { el, anchor, shapeFlag, children, props } = vnode;
    const isReorder = moveType === 2; 
    // move main view anchor if this is a re-order.
    if (isReorder) {
      insert(el, container, parentAnchor);
    }
    // if this is a re-order and teleport is enabled (content is in target)
    // do not move children. So the opposite is: only move children if this
    // is not a reorder, or the teleport is disabled
    if (!isReorder || isTeleportDisabled(props)) {
      // Teleport has either Array children or no children.
      if (shapeFlag & 16 ) {
        for (let i = 0; i < children.length; i++) {
          move(children[i], container, parentAnchor, 2 );
        }
      }
    }
    // move main view anchor if this is a re-order.
    if (isReorder) {
      insert(anchor, container, parentAnchor);
    }
  }
  function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
    const target = (vnode.target = resolveTarget(vnode.props, querySelector));
    if (target) {
      // if multiple teleports rendered to the same target element, we need to
      // pick up from where the last teleport finished instead of the first node
      const targetNode = target._lpa || target.firstChild;
      if (vnode.shapeFlag & 16 ) {
        if (isTeleportDisabled(vnode.props)) {
          vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
          vnode.targetAnchor = targetNode;
        } else {
          vnode.anchor = nextSibling(node);
          vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
        }
        target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
      }
    }
    return vnode.anchor && nextSibling(vnode.anchor);
  }
  // Force-casted public typing for h and TSX props inference
  const Teleport = TeleportImpl;

  const COMPONENTS = "components";
  const DIRECTIVES = "directives";
  
  function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
  }
  const NULL_DYNAMIC_COMPONENT = Symbol();
  
  function resolveDynamicComponent(component) {
    if (isString(component)) {
      return resolveAsset(COMPONENTS, component, false) || component;
    } else {
      // invalid types will fallthrough to createVNode and raise warning
      return component || NULL_DYNAMIC_COMPONENT;
    }
  }
  
  function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
  }
  // implementation
  function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
      const Component = instance.type;
      // explicit self name has highest priority
      if (type === COMPONENTS) {
        const selfName = getComponentName(Component);
        if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
          return Component;
        }
      }
      const res =
        // local registration
        // check instance[type] first for components with mixin or extends.
        resolve(instance[type] || Component[type], name) ||
        // global registration
        resolve(instance.appContext[type], name);
      if (!res && maybeSelfReference) {
        // fallback to implicit self-reference
        return Component;
      }
      if (warnMissing && !res) {
        warn(`Failed to resolve ${type.slice(0, -1)}: ${name}`);
      }
      return res;
    } else {
      warn(`resolve${capitalize(type.slice(0, -1))} ` + `can only be used in render() or setup().`);
    }
  }
  function resolve(registry, name) {
    return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
  }

  const Fragment = Symbol("Fragment");
  const Text = Symbol("Text");
  const Comment = Symbol("Comment");
  const Static = Symbol("Static");
  // Since v-if and v-for are the two possible ways node structure can dynamically
  // change, once we consider v-if branches and each v-for fragment a block, we
  // can divide a template into nested blocks, and within each block the node
  // structure would be stable. This allows us to skip most children diffing
  // and only worry about the dynamic nodes (indicated by patch flags).
  const blockStack = [];
  let currentBlock = null;
  
  function openBlock(disableTracking = false) {
    blockStack.push((currentBlock = disableTracking ? null : []));
  }
  function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
  }
  // Whether we should be tracking dynamic child nodes inside a block.
  // Only tracks when this value is > 0
  // We are not using a simple boolean because this value may need to be
  // incremented/decremented by nested usage of v-once (see below)
  let shouldTrack$1 = 1;
  
  function setBlockTracking(value) {
    shouldTrack$1 += value;
  }
  
  function createBlock(type, props, children, patchFlag, dynamicProps) {
    const vnode = createVNode(type, props, children, patchFlag, dynamicProps, true );
    // save current block children on the block vnode
    vnode.dynamicChildren = currentBlock || EMPTY_ARR;
    // close block
    closeBlock();
    // a block is always going to be patched, so track it as a child of its
    // parent block
    if (shouldTrack$1 > 0 && currentBlock) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
  }
  function isSameVNodeType(n1, n2) {
    if (n2.shapeFlag & 6  && hmrDirtyComponents.has(n2.type)) {
      // HMR only: if the component has been hot-updated, force a reload.
      return false;
    }
    return n1.type === n2.type && n1.key === n2.key;
  }
  let vnodeArgsTransformer;
  
  function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
  }
  const createVNodeWithArgsTransform = (...args) => {
    return _createVNode(...(vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args));
  };
  const InternalObjectKey = `__vInternal`;
  const normalizeKey = ({ key }) => (key != null ? key : null);
  const normalizeRef = ({ ref }) => {
    return ref != null ? (isString(ref) || isRef(ref) || isFunction(ref) ? { i: currentRenderingInstance, r: ref } : ref) : null;
  };
  const createVNode = createVNodeWithArgsTransform;
  function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
      if (!type) {
        warn(`Invalid vnode type when creating vnode: ${type}.`);
      }
      type = Comment;
    }
    if (isVNode(type)) {
      // createVNode receiving an existing vnode. This happens in cases like
      // <component :is="vnode"/>
      // #2078 make sure to merge refs during the clone instead of overwriting it
      const cloned = cloneVNode(type, props, true );
      if (children) {
        normalizeChildren(cloned, children);
      }
      return cloned;
    }
    // class component normalization.
    if (isClassComponent(type)) {
      type = type.__vccOpts;
    }
    // class & style normalization.
    if (props) {
      // for reactive or proxy objects, we need to clone it to enable mutation.
      if (isProxy(props) || InternalObjectKey in props) {
        props = extend({}, props);
      }
      let { class: klass, style } = props;
      if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
      }
      if (isObject(style)) {
        // reactive state objects need to be cloned since they are likely to be
        // mutated
        if (isProxy(style) && !isArray(style)) {
          style = extend({}, style);
        }
        props.style = normalizeStyle(style);
      }
    }
    // encode the vnode type information into a bitmap
    const shapeFlag = isString(type)
      ? 1 
      : isSuspense(type)
      ? 128 
      : isTeleport(type)
      ? 64 
      : isObject(type)
      ? 4 
      : isFunction(type)
      ? 2 
      : 0;
    if (shapeFlag & 4  && isProxy(type)) {
      type = toRaw(type);
      warn(
        `a2020Vue received a Component which was made a reactive object. This can ` +
          `lead to unnecessary performance overhead, and should be avoided by ` +
          `marking the component with \`markRaw\` or using \`shallowRef\` ` +
          `instead of \`ref\`.`,
        `\nComponent that was made reactive: `,
        type
      );
    }
    const vnode = {
      __v_isVNode: true,
      ["__v_skip" ]: true,
      type,
      props,
      key: props && normalizeKey(props),
      ref: props && normalizeRef(props),
      scopeId: currentScopeId,
      slotScopeIds: null,
      children: null,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag,
      patchFlag,
      dynamicProps,
      dynamicChildren: null,
      appContext: null,
    };
    // validate key
    if (vnode.key !== vnode.key) {
      warn(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    }
    normalizeChildren(vnode, children);
    // normalize suspense children
    if (shapeFlag & 128 ) {
      const { content, fallback } = normalizeSuspenseChildren(vnode);
      vnode.ssContent = content;
      vnode.ssFallback = fallback;
    }
    if (
      shouldTrack$1 > 0 &&
      // avoid a block node from tracking itself
      !isBlockNode &&
      // has current parent block
      currentBlock &&
      // presence of a patch flag indicates this node needs patching on updates.
      // component nodes also should always be patched, because even if the
      // component doesn't need to update, it needs to persist the instance on to
      // the next vnode so that it can be properly unmounted later.
      (patchFlag > 0 || shapeFlag & 6)  &&
      // the EVENTS flag is only for hydration and if it is the only flag, the
      // vnode should not be considered dynamic due to handler caching.
      patchFlag !== 32 
    ) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  function cloneVNode(vnode, extraProps, mergeRef = false) {
    // This is intentionally NOT using spread or extend to avoid the runtime
    // key enumeration cost.
    const { props, ref, patchFlag, children } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    return {
      __v_isVNode: true,
      ["__v_skip" ]: true,
      type: vnode.type,
      props: mergedProps,
      key: mergedProps && normalizeKey(mergedProps),
      ref:
        extraProps && extraProps.ref
          ? // #2078 in the case of <component :is="vnode" ref="extra"/>
            // if the vnode itself already has a ref, cloneVNode will need to merge
            // the refs so the single vnode can be set on multiple refs
            mergeRef && ref
            ? isArray(ref)
              ? ref.concat(normalizeRef(extraProps))
              : [ref, normalizeRef(extraProps)]
            : normalizeRef(extraProps)
          : ref,
      scopeId: vnode.scopeId,
      slotScopeIds: vnode.slotScopeIds,
      children: patchFlag === -1  && isArray(children) ? children.map(deepCloneVNode) : children,
      target: vnode.target,
      targetAnchor: vnode.targetAnchor,
      staticCount: vnode.staticCount,
      shapeFlag: vnode.shapeFlag,
      // if the vnode is cloned with extra props, we can no longer assume its
      // existing patch flag to be reliable and need to add the FULL_PROPS flag.
      // note: perserve flag for fragments since they use the flag for children
      // fast paths only.
      patchFlag:
        extraProps && vnode.type !== Fragment
          ? patchFlag === -1 // hoisted node
            ? 16 
            : patchFlag | 16 
          : patchFlag,
      dynamicProps: vnode.dynamicProps,
      dynamicChildren: vnode.dynamicChildren,
      appContext: vnode.appContext,
      dirs: vnode.dirs,
      transition: vnode.transition,
      // These should technically only be non-null on mounted VNodes. However,
      // they *should* be copied for kept-alive vnodes. So we just always copy
      // them since them being non-null during a mount doesn't affect the logic as
      // they will simply be overwritten.
      component: vnode.component,
      suspense: vnode.suspense,
      ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
      ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
      el: vnode.el,
      anchor: vnode.anchor,
    };
  }
  
  function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if (isArray(vnode.children)) {
      cloned.children = vnode.children.map(deepCloneVNode);
    }
    return cloned;
  }
  
  function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
  }
  
  function createStaticVNode(content, numberOfNodes) {
    // A static vnode can contain multiple stringified elements, and the number
    // of elements is necessary for hydration.
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
  }
  
  function createCommentVNode(
    text = "",
    // when used as the v-else branch, the comment node must be created as a
    // block to ensure correct updates.
    asBlock = false
  ) {
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
  }
  function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") {
      // empty placeholder
      return createVNode(Comment);
    } else if (isArray(child)) {
      // fragment
      return createVNode(Fragment, null, child);
    } else if (typeof child === "object") {
      // already vnode, this should be the most common since compiled templates
      // always produce all-vnode children arrays
      return child.el === null ? child : cloneVNode(child);
    } else {
      // strings and numbers
      return createVNode(Text, null, String(child));
    }
  }
  // optimized normalization for template-compiled render fns
  function cloneIfMounted(child) {
    return child.el === null ? child : cloneVNode(child);
  }
  function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
      children = null;
    } else if (isArray(children)) {
      type = 16 ;
    } else if (typeof children === "object") {
      if (shapeFlag & 1  || shapeFlag & 64 ) {
        // Normalize slot to plain children for plain element and Teleport
        const slot = children.default;
        if (slot) {
          // _c marker is added by withCtx() indicating this is a compiled slot
          slot._c && setCompiledSlotRendering(1);
          normalizeChildren(vnode, slot());
          slot._c && setCompiledSlotRendering(-1);
        }
        return;
      } else {
        type = 32 ;
        const slotFlag = children._;
        if (!slotFlag && !(InternalObjectKey in children)) {
          children._ctx = currentRenderingInstance;
        } else if (slotFlag === 3  && currentRenderingInstance) {
          // a child component receives forwarded slots from the parent.
          // its slot type is determined by its parent's slot type.
          if (currentRenderingInstance.vnode.patchFlag & 1024 ) {
            children._ = 2 ;
            vnode.patchFlag |= 1024 ;
          } else {
            children._ = 1 ;
          }
        }
      }
    } else if (isFunction(children)) {
      children = { default: children, _ctx: currentRenderingInstance };
      type = 32 ;
    } else {
      children = String(children);
      // force teleport children to array so it can be moved around
      if (shapeFlag & 64 ) {
        type = 16 ;
        children = [createTextVNode(children)];
      } else {
        type = 8 ;
      }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
  }
  function mergeProps(...args) {
    const ret = extend({}, args[0]);
    for (let i = 1; i < args.length; i++) {
      const toMerge = args[i];
      for (const key in toMerge) {
        if (key === "class") {
          if (ret.class !== toMerge.class) {
            ret.class = normalizeClass([ret.class, toMerge.class]);
          }
        } else if (key === "style") {
          ret.style = normalizeStyle([ret.style, toMerge.style]);
        } else if (isOn(key)) {
          const existing = ret[key];
          const incoming = toMerge[key];
          if (existing !== incoming) {
            ret[key] = existing ? [].concat(existing, toMerge[key]) : incoming;
          }
        } else if (key !== "") {
          ret[key] = toMerge[key];
        }
      }
    }
    return ret;
  }

  function provide(key, value) {
    if (!currentInstance) {
      {
        warn(`provide() can only be used inside setup().`);
      }
    } else {
      let provides = currentInstance.provides;
      // by default an instance inherits its parent's provides object
      // but when it needs to provide values of its own, it creates its
      // own provides object using parent provides object as prototype.
      // this way in `inject` we can simply look up injections from direct
      // parent and let the prototype chain do the work.
      const parentProvides = currentInstance.parent && currentInstance.parent.provides;
      if (parentProvides === provides) {
        provides = currentInstance.provides = Object.create(parentProvides);
      }
      // TS doesn't allow symbol as index type
      provides[key] = value;
    }
  }
  function inject(key, defaultValue, treatDefaultAsFactory = false) {
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
      // #2400
      // to support `app.use` plugins,
      // fallback to appContext's `provides` if the intance is at root
      const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
      if (provides && key in provides) {
        // TS doesn't allow symbol as index type
        return provides[key];
      } else if (arguments.length > 1) {
        return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue() : defaultValue;
      } else {
        warn(`injection "${String(key)}" not found.`);
      }
    } else {
      warn(`inject() can only be used inside setup() or functional components.`);
    }
  }

  function createDuplicateChecker() {
    const cache = Object.create(null);
    return (type, key) => {
      if (cache[key]) {
        warn(`${type} property "${key}" is already defined in ${cache[key]}.`);
      } else {
        cache[key] = type;
      }
    };
  }
  let shouldCacheAccess = true;
  function applyOptions(instance, options, deferredData = [], deferredWatch = [], deferredProvide = [], asMixin = false) {
    const {
      // composition
      mixins,
      extends: extendsOptions,
      // state
      data: dataOptions,
      computed: computedOptions,
      methods,
      watch: watchOptions,
      provide: provideOptions,
      inject: injectOptions,
      // assets
      components,
      directives,
      // lifecycle
      beforeMount,
      mounted,
      beforeUpdate,
      updated,
      activated,
      deactivated,
      beforeDestroy,
      beforeUnmount,
      destroyed,
      unmounted,
      render,
      renderTracked,
      renderTriggered,
      errorCaptured,
      // public API
      expose,
    } = options;
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    const globalMixins = instance.appContext.mixins;
    if (asMixin && render && instance.render === NOOP) {
      instance.render = render;
    }
    // applyOptions is called non-as-mixin once per instance
    if (!asMixin) {
      shouldCacheAccess = false;
      callSyncHook("beforeCreate", "bc" , options, instance, globalMixins);
      shouldCacheAccess = true;
      // global mixins are applied first
      applyMixins(instance, globalMixins, deferredData, deferredWatch, deferredProvide);
    }
    // extending a base component...
    if (extendsOptions) {
      applyOptions(instance, extendsOptions, deferredData, deferredWatch, deferredProvide, true);
    }
    // local mixins
    if (mixins) {
      applyMixins(instance, mixins, deferredData, deferredWatch, deferredProvide);
    }
    const checkDuplicateProperties = createDuplicateChecker();
    {
      const [propsOptions] = instance.propsOptions;
      if (propsOptions) {
        for (const key in propsOptions) {
          checkDuplicateProperties("Props" , key);
        }
      }
    }
    // options initialization order (to be consistent with a2020Vue 2):
    // - props (already done outside of this function)
    // - inject
    // - methods
    // - data (deferred since it relies on `this` access)
    // - computed
    // - watch (deferred since it relies on `this` access)
    if (injectOptions) {
      if (isArray(injectOptions)) {
        for (let i = 0; i < injectOptions.length; i++) {
          const key = injectOptions[i];
          ctx[key] = inject(key);
          {
            checkDuplicateProperties("Inject" , key);
          }
        }
      } else {
        for (const key in injectOptions) {
          const opt = injectOptions[key];
          if (isObject(opt)) {
            ctx[key] = inject(opt.from || key, opt.default, true );
          } else {
            ctx[key] = inject(opt);
          }
          {
            checkDuplicateProperties("Inject" , key);
          }
        }
      }
    }
    if (methods) {
      for (const key in methods) {
        const methodHandler = methods[key];
        if (isFunction(methodHandler)) {
          // In dev mode, we use the `createRenderContext` function to define methods to the proxy target,
          // and those are read-only but reconfigurable, so it needs to be redefined here
          {
            Object.defineProperty(ctx, key, {
              value: methodHandler.bind(publicThis),
              configurable: true,
              enumerable: true,
              writable: true,
            });
          }
          {
            checkDuplicateProperties("Methods" , key);
          }
        } else {
          warn(`Method "${key}" has type "${typeof methodHandler}" in the component definition. ` + `Did you reference the function correctly?`);
        }
      }
    }
    if (!asMixin) {
      if (deferredData.length) {
        deferredData.forEach((dataFn) => resolveData(instance, dataFn, publicThis));
      }
      if (dataOptions) {
        // @ts-ignore dataOptions is not fully type safe
        resolveData(instance, dataOptions, publicThis);
      }
      {
        const rawData = toRaw(instance.data);
        for (const key in rawData) {
          checkDuplicateProperties("Data" , key);
          // expose data on ctx during dev
          if (key[0] !== "$" && key[0] !== "_") {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => rawData[key],
              set: NOOP,
            });
          }
        }
      }
    } else if (dataOptions) {
      deferredData.push(dataOptions);
    }
    if (computedOptions) {
      for (const key in computedOptions) {
        const opt = computedOptions[key];
        const get = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
        if (get === NOOP) {
          warn(`Computed property "${key}" has no getter.`);
        }
        const set =
          !isFunction(opt) && isFunction(opt.set)
            ? opt.set.bind(publicThis)
            : () => {
                warn(`Write operation failed: computed property "${key}" is readonly.`);
              };
        const c = computed$1({
          get,
          set,
        });
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => c.value,
          set: (v) => (c.value = v),
        });
        {
          checkDuplicateProperties("Computed" , key);
        }
      }
    }
    if (watchOptions) {
      deferredWatch.push(watchOptions);
    }
    if (!asMixin && deferredWatch.length) {
      deferredWatch.forEach((watchOptions) => {
        for (const key in watchOptions) {
          createWatcher(watchOptions[key], ctx, publicThis, key);
        }
      });
    }
    if (provideOptions) {
      deferredProvide.push(provideOptions);
    }
    if (!asMixin && deferredProvide.length) {
      deferredProvide.forEach((provideOptions) => {
        const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
        Reflect.ownKeys(provides).forEach((key) => {
          provide(key, provides[key]);
        });
      });
    }
    // asset options.
    // To reduce memory usage, only components with mixins or extends will have
    // resolved asset registry attached to instance.
    if (asMixin) {
      if (components) {
        extend(instance.components || (instance.components = extend({}, instance.type.components)), components);
      }
      if (directives) {
        extend(instance.directives || (instance.directives = extend({}, instance.type.directives)), directives);
      }
    }
    // lifecycle options
    if (!asMixin) {
      callSyncHook("created", "c" , options, instance, globalMixins);
    }
    if (beforeMount) {
      onBeforeMount(beforeMount.bind(publicThis));
    }
    if (mounted) {
      onMounted(mounted.bind(publicThis));
    }
    if (beforeUpdate) {
      onBeforeUpdate(beforeUpdate.bind(publicThis));
    }
    if (updated) {
      onUpdated(updated.bind(publicThis));
    }
    if (activated) {
      onActivated(activated.bind(publicThis));
    }
    if (deactivated) {
      onDeactivated(deactivated.bind(publicThis));
    }
    if (errorCaptured) {
      onErrorCaptured(errorCaptured.bind(publicThis));
    }
    if (renderTracked) {
      onRenderTracked(renderTracked.bind(publicThis));
    }
    if (renderTriggered) {
      onRenderTriggered(renderTriggered.bind(publicThis));
    }
    if (beforeDestroy) {
      warn(`\`beforeDestroy\` has been renamed to \`beforeUnmount\`.`);
    }
    if (beforeUnmount) {
      onBeforeUnmount(beforeUnmount.bind(publicThis));
    }
    if (destroyed) {
      warn(`\`destroyed\` has been renamed to \`unmounted\`.`);
    }
    if (unmounted) {
      onUnmounted(unmounted.bind(publicThis));
    }
    if (isArray(expose)) {
      if (!asMixin) {
        if (expose.length) {
          const exposed = instance.exposed || (instance.exposed = proxyRefs({}));
          expose.forEach((key) => {
            exposed[key] = toRef(publicThis, key);
          });
        } else if (!instance.exposed) {
          instance.exposed = EMPTY_OBJ;
        }
      } else {
        warn(`The \`expose\` option is ignored when used in mixins.`);
      }
    }
  }
  function callSyncHook(name, type, options, instance, globalMixins) {
    for (let i = 0; i < globalMixins.length; i++) {
      callHookWithMixinAndExtends(name, type, globalMixins[i], instance);
    }
    callHookWithMixinAndExtends(name, type, options, instance);
  }
  function callHookWithMixinAndExtends(name, type, options, instance) {
    const { extends: base, mixins } = options;
    const selfHook = options[name];
    if (base) {
      callHookWithMixinAndExtends(name, type, base, instance);
    }
    if (mixins) {
      for (let i = 0; i < mixins.length; i++) {
        callHookWithMixinAndExtends(name, type, mixins[i], instance);
      }
    }
    if (selfHook) {
      callWithAsyncErrorHandling(selfHook.bind(instance.proxy), instance, type);
    }
  }
  function applyMixins(instance, mixins, deferredData, deferredWatch, deferredProvide) {
    for (let i = 0; i < mixins.length; i++) {
      applyOptions(instance, mixins[i], deferredData, deferredWatch, deferredProvide, true);
    }
  }
  function resolveData(instance, dataFn, publicThis) {
    if (!isFunction(dataFn)) {
      warn(`The data option must be a function. ` + `Plain object usage is no longer supported.`);
    }
    shouldCacheAccess = false;
    const data = dataFn.call(publicThis, publicThis);
    shouldCacheAccess = true;
    if (isPromise(data)) {
      warn(`data() returned a Promise - note data() cannot be async; If you ` + `intend to perform data fetching before component renders, use ` + `async setup() + <Suspense>.`);
    }
    if (!isObject(data)) {
      warn(`data() should return an object.`);
    } else if (instance.data === EMPTY_OBJ) {
      instance.data = reactive(data);
    } else {
      // existing data: this is a mixin or extends.
      extend(instance.data, data);
    }
  }
  function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
    if (isString(raw)) {
      const handler = ctx[raw];
      if (isFunction(handler)) {
        watch(getter, handler);
      } else {
        warn(`Invalid watch handler specified by key "${raw}"`, handler);
      }
    } else if (isFunction(raw)) {
      watch(getter, raw.bind(publicThis));
    } else if (isObject(raw)) {
      if (isArray(raw)) {
        raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
      } else {
        const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
        if (isFunction(handler)) {
          watch(getter, handler, raw);
        } else {
          warn(`Invalid watch handler specified by key "${raw.handler}"`, handler);
        }
      }
    } else {
      warn(`Invalid watch option: "${key}"`, raw);
    }
  }
  function createPathGetter(ctx, path) {
    const segments = path.split(".");
    return () => {
      let cur = ctx;
      for (let i = 0; i < segments.length && cur; i++) {
        cur = cur[segments[i]];
      }
      return cur;
    };
  }
  function resolveMergedOptions(instance) {
    const raw = instance.type;
    const { __merged, mixins, extends: extendsOptions } = raw;
    if (__merged) return __merged;
    const globalMixins = instance.appContext.mixins;
    if (!globalMixins.length && !mixins && !extendsOptions) return raw;
    const options = {};
    globalMixins.forEach((m) => mergeOptions(options, m, instance));
    mergeOptions(options, raw, instance);
    return (raw.__merged = options);
  }
  function mergeOptions(to, from, instance) {
    const strats = instance.appContext.config.optionMergeStrategies;
    const { mixins, extends: extendsOptions } = from;
    extendsOptions && mergeOptions(to, extendsOptions, instance);
    mixins && mixins.forEach((m) => mergeOptions(to, m, instance));
    for (const key in from) {
      if (strats && hasOwn(strats, key)) {
        to[key] = strats[key](to[key], from[key], instance.proxy, key);
      } else {
        to[key] = from[key];
      }
    }
  }

  
  const getPublicInstance = (i) => {
    if (!i) return null;
    if (isStatefulComponent(i)) return i.exposed ? i.exposed : i.proxy;
    return getPublicInstance(i.parent);
  };
  const publicPropertiesMap = extend(Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => shallowReadonly(i.props),
    $attrs: (i) => shallowReadonly(i.attrs),
    $slots: (i) => shallowReadonly(i.slots),
    $refs: (i) => shallowReadonly(i.refs),
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => () => queueJob(i.update),
    $nextTick: (i) => nextTick.bind(i.proxy),
    $watch: (i) => instanceWatch.bind(i),
  });
  const PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
      const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
      // let @a2020Vue/reactivity know it should never observe a2020Vue public instances.
      if (key === "__v_skip" ) {
        return true;
      }
      // for internal formatters to know that this is a a2020Vue instance
      if (key === "__isa2020Vue") {
        return true;
      }
      // data / props / ctx
      // This getter gets called for every property access on the render context
      // during render and is a major hotspot. The most expensive part of this
      // is the multiple hasOwn() calls. It's much faster to do a simple property
      // access on a plain object, so we use an accessCache object (with null
      // prototype) to memoize what access type a key corresponds to.
      let normalizedProps;
      if (key[0] !== "$") {
        const n = accessCache[key];
        if (n !== undefined) {
          switch (n) {
            case 0 :
              return setupState[key];
            case 1 :
              return data[key];
            case 3 :
              return ctx[key];
            case 2 :
              return props[key];
            // default: just fallthrough
          }
        } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
          accessCache[key] = 0 ;
          return setupState[key];
        } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
          accessCache[key] = 1 ;
          return data[key];
        } else if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (normalizedProps = instance.propsOptions[0]) &&
          hasOwn(normalizedProps, key)
        ) {
          accessCache[key] = 2 ;
          return props[key];
        } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
          accessCache[key] = 3 ;
          return ctx[key];
        } else if (shouldCacheAccess) {
          accessCache[key] = 4 ;
        }
      }
      const publicGetter = publicPropertiesMap[key];
      let cssModule, globalProperties;
      // public $xxx properties
      if (publicGetter) {
        if (key === "$attrs") {
          track(instance, "get" , key);
          markAttrsAccessed();
        }
        return publicGetter(instance);
      } else if (
        // css module (injected by a2020Vue-loader)
        (cssModule = type.__cssModules) &&
        (cssModule = cssModule[key])
      ) {
        return cssModule;
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        // user may set custom properties to `this` that start with `$`
        accessCache[key] = 3 ;
        return ctx[key];
      } else if (
        // global properties
        ((globalProperties = appContext.config.globalProperties), hasOwn(globalProperties, key))
      ) {
        return globalProperties[key];
      } else if (
        currentRenderingInstance &&
        (!isString(key) ||
          // #1091 avoid internal isRef/isVNode checks on component instance leading
          // to infinite warning loop
          key.indexOf("__v") !== 0)
      ) {
        if (data !== EMPTY_OBJ && (key[0] === "$" || key[0] === "_") && hasOwn(data, key)) {
          warn(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved ` + `character ("$" or "_") and is not proxied on the render context.`);
        } else if (instance === currentRenderingInstance) {
          warn(`Property ${JSON.stringify(key)} was accessed during render ` + `but is not defined on instance.`);
        }
      }
    },
    set({ _: instance }, key, value) {
      const { data, setupState, ctx } = instance;
      if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
        setupState[key] = value;
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        data[key] = value;
      } else if (hasOwn(instance.props, key)) {
        warn(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
        return false;
      }
      if (key[0] === "$" && key.slice(1) in instance) {
        warn(`Attempting to mutate public property "${key}". ` + `Properties starting with $ are reserved and readonly.`, instance);
        return false;
      } else {
        if (key in instance.appContext.config.globalProperties) {
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value,
          });
        } else {
          ctx[key] = value;
        }
      }
      return true;
    },
    has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
      let normalizedProps;
      return (
        accessCache[key] !== undefined ||
        (data !== EMPTY_OBJ && hasOwn(data, key)) ||
        (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) ||
        ((normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key)) ||
        hasOwn(ctx, key) ||
        hasOwn(publicPropertiesMap, key) ||
        hasOwn(appContext.config.globalProperties, key)
      );
    },
  };
  {
    PublicInstanceProxyHandlers.ownKeys = (target) => {
      warn(`Avoid app logic that relies on enumerating keys on a component instance. ` + `The keys will be empty in production mode to avoid performance overhead.`);
      return Reflect.ownKeys(target);
    };
  }
  const RuntimeCompiledPublicInstanceProxyHandlers = extend({}, PublicInstanceProxyHandlers, {
    get(target, key) {
      // fast path for unscopables when using `with` block
      if (key === Symbol.unscopables) {
        return;
      }
      return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has(_, key) {
      const has = key[0] !== "_" && !isGloballyWhitelisted(key);
      if (!has && PublicInstanceProxyHandlers.has(_, key)) {
        warn(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for a2020Vue internals.`);
      }
      return has;
    },
  });
  // In dev mode, the proxy target exposes the same properties as seen on `this`
  // for easier console inspection. In prod mode it will be an empty object so
  // these properties definitions can be skipped.
  function createRenderContext(instance) {
    const target = {};
    // expose internal instance for proxy handlers
    Object.defineProperty(target, `_`, {
      configurable: true,
      enumerable: false,
      get: () => instance,
    });
    // expose public properties
    Object.keys(publicPropertiesMap).forEach((key) => {
      Object.defineProperty(target, key, {
        configurable: true,
        enumerable: false,
        get: () => publicPropertiesMap[key](instance),
        // intercepted by the proxy so no need for implementation,
        // but needed to prevent set errors
        set: NOOP,
      });
    });
    // expose global properties
    const { globalProperties } = instance.appContext.config;
    Object.keys(globalProperties).forEach((key) => {
      Object.defineProperty(target, key, {
        configurable: true,
        enumerable: false,
        get: () => globalProperties[key],
        set: NOOP,
      });
    });
    return target;
  }
  // dev only
  function exposePropsOnRenderContext(instance) {
    const {
      ctx,
      propsOptions: [propsOptions],
    } = instance;
    if (propsOptions) {
      Object.keys(propsOptions).forEach((key) => {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => instance.props[key],
          set: NOOP,
        });
      });
    }
  }
  // dev only
  function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys(toRaw(setupState)).forEach((key) => {
      if (key[0] === "$" || key[0] === "_") {
        warn(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" ` + `which are reserved prefixes for a2020Vue internals.`);
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: NOOP,
      });
    });
  }

  const emptyAppContext = createAppContext();
  let uid$2 = 0;
  function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    // inherit parent app context - or - if root, adopt from root vnode
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
      uid: uid$2++,
      vnode,
      type,
      parent,
      appContext,
      root: null,
      next: null,
      subTree: null,
      update: null,
      render: null,
      proxy: null,
      exposed: null,
      withProxy: null,
      effects: null,
      provides: parent ? parent.provides : Object.create(appContext.provides),
      accessCache: null,
      renderCache: [],
      // local resovled assets
      components: null,
      directives: null,
      // resolved props and emits options
      propsOptions: normalizePropsOptions(type, appContext),
      emitsOptions: normalizeEmitsOptions(type, appContext),
      // emit
      emit: null,
      emitted: null,
      // props default value
      propsDefaults: EMPTY_OBJ,
      // state
      ctx: EMPTY_OBJ,
      data: EMPTY_OBJ,
      props: EMPTY_OBJ,
      attrs: EMPTY_OBJ,
      slots: EMPTY_OBJ,
      refs: EMPTY_OBJ,
      setupState: EMPTY_OBJ,
      setupContext: null,
      // suspense related
      suspense,
      suspenseId: suspense ? suspense.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      // lifecycle hooks
      // not using enums here because it results in computed properties
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
    };
    {
      instance.ctx = createRenderContext(instance);
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = emit.bind(null, instance);
    return instance;
  }
  let currentInstance = null;
  const getCurrentInstance = () => currentInstance || currentRenderingInstance;
  const setCurrentInstance = (instance) => {
    currentInstance = instance;
  };
  const isBuiltInTag =  makeMap("slot,component");
  function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || NO;
    if (isBuiltInTag(name) || appIsNativeTag(name)) {
      warn("Do not use built-in or reserved HTML elements as component id: " + name);
    }
  }
  function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4 ;
  }
  let isInSSRComponentSetup = false;
  function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : undefined;
    isInSSRComponentSetup = false;
    return setupResult;
  }
  function setupStatefulComponent(instance, isSSR) {
    const Component = instance.type;
    {
      if (Component.name) {
        validateComponentName(Component.name, instance.appContext.config);
      }
      if (Component.components) {
        const names = Object.keys(Component.components);
        for (let i = 0; i < names.length; i++) {
          validateComponentName(names[i], instance.appContext.config);
        }
      }
      if (Component.directives) {
        const names = Object.keys(Component.directives);
        for (let i = 0; i < names.length; i++) {
          validateDirectiveName(names[i]);
        }
      }
    }
    // 0. create render proxy property access cache
    instance.accessCache = Object.create(null);
    // 1. create public instance / render proxy
    // also mark it raw so it's never observed
    instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
    {
      exposePropsOnRenderContext(instance);
    }
    // 2. call setup()
    const { setup } = Component;
    if (setup) {
      const setupContext = (instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null);
      currentInstance = instance;
      pauseTracking();
      const setupResult = callWithErrorHandling(setup, instance, 0 , [shallowReadonly(instance.props), setupContext]);
      resetTracking();
      currentInstance = null;
      if (isPromise(setupResult)) {
        if (isSSR) {
          // return the promise so server-renderer can wait on it
          return setupResult
            .then((resolvedResult) => {
              handleSetupResult(instance, resolvedResult, isSSR);
            })
            .catch((e) => {
              handleError(e, instance, 0 );
            });
        } else {
          // async setup returned Promise.
          // bail here and wait for re-entry.
          instance.asyncDep = setupResult;
        }
      } else {
        handleSetupResult(instance, setupResult, isSSR);
      }
    } else {
      finishComponentSetup(instance, isSSR);
    }
  }
  function handleSetupResult(instance, setupResult, isSSR) {
    if (isFunction(setupResult)) {
      // setup returned an inline render function
      {
        instance.render = setupResult;
      }
    } else if (isObject(setupResult)) {
      if (isVNode(setupResult)) {
        warn(`setup() should not return VNodes directly - ` + `return a render function instead.`);
      }
      // setup returned bindings.
      // assuming a render function compiled from template is present.
      {
        instance.devtoolsRawSetupState = setupResult;
      }
      instance.setupState = proxyRefs(setupResult);
      {
        exposeSetupStateOnRenderContext(instance);
      }
    } else if (setupResult !== undefined) {
      warn(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
    }
    finishComponentSetup(instance, isSSR);
  }
  let compile;
  // dev only
  const isRuntimeOnly = () => !compile;
  
  function registerRuntimeCompiler(_compile) {
    compile = _compile;
  }
  function finishComponentSetup(instance, isSSR) {
    const Component = instance.type;
    // template / render function normalization
    if (!instance.render) {
      // could be set from setup()
      if (compile && Component.template && !Component.render) {
        {
          startMeasure(instance, `compile`);
        }
        Component.render = compile(Component.template, {
          isCustomElement: instance.appContext.config.isCustomElement,
          delimiters: Component.delimiters,
        });
        {
          endMeasure(instance, `compile`);
        }
      }
      instance.render = Component.render || NOOP;
      // for runtime-compiled render functions using `with` blocks, the render
      // proxy used needs a different `has` handler which is more performant and
      // also only allows a whitelist of globals to fallthrough.
      if (instance.render._rc) {
        instance.withProxy = new Proxy(instance.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
      }
    }
    // support for 2.x options
    {
      currentInstance = instance;
      pauseTracking();
      applyOptions(instance, Component);
      resetTracking();
      currentInstance = null;
    }
    // warn missing template/render
    // the runtime compilation of template in SSR is done by server-render
    if (!Component.render && instance.render === NOOP && !isSSR) {
      
      if (!compile && Component.template) {
        warn(`Component provided template option but ` + `runtime compilation is not supported in this build of a2020Vue.` + ` Use "a2020Vue.global.js" instead.` );
      } else {
        warn(`Component is missing template or render function.`);
      }
    }
  }
  const attrHandlers = {
    get: (target, key) => {
      {
        markAttrsAccessed();
      }
      return target[key];
    },
    set: () => {
      warn(`setupContext.attrs is readonly.`);
      return false;
    },
    deleteProperty: () => {
      warn(`setupContext.attrs is readonly.`);
      return false;
    },
  };
  function createSetupContext(instance) {
    const expose = (exposed) => {
      if (instance.exposed) {
        warn(`expose() should be called only once per setup().`);
      }
      instance.exposed = proxyRefs(exposed);
    };
    {
      // We use getters in dev in case libs like test-utils overwrite instance
      // properties (overwrites should not be done in prod)
      return Object.freeze({
        get attrs() {
          return new Proxy(instance.attrs, attrHandlers);
        },
        get slots() {
          return shallowReadonly(instance.slots);
        },
        get emit() {
          return (event, ...args) => instance.emit(event, ...args);
        },
        expose,
      });
    }
  }
  // record effects created during a component's setup() so that they can be
  // stopped when the component unmounts
  function recordInstanceBoundEffect(effect, instance = currentInstance) {
    if (instance) {
      (instance.effects || (instance.effects = [])).push(effect);
    }
  }
  const classifyRE = /(?:^|[-_])(\w)/g;
  const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
  function getComponentName(Component) {
    return isFunction(Component) ? Component.displayName || Component.name : Component.name;
  }
  
  function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
      const match = Component.__file.match(/([^/\\]+)\.\w+$/);
      if (match) {
        name = match[1];
      }
    }
    if (!name && instance && instance.parent) {
      // try to infer the name based on reverse resolution
      const inferFromRegistry = (registry) => {
        for (const key in registry) {
          if (registry[key] === Component) {
            return key;
          }
        }
      };
      name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
  }
  function isClassComponent(value) {
    return isFunction(value) && "__vccOpts" in value;
  }

  function computed$1(getterOrOptions) {
    const c = computed(getterOrOptions);
    recordInstanceBoundEffect(c.effect);
    return c;
  }

  // implementation
  function defineProps() {
    {
      warn(
        `defineProps() is a compiler-hint helper that is only usable inside ` +
          `<script setup> of a single file component. Its arguments should be ` +
          `compiled away and passing it at runtime has no effect.`
      );
    }
    return null;
  }
  // implementation
  function defineEmit() {
    {
      warn(
        `defineEmit() is a compiler-hint helper that is only usable inside ` +
          `<script setup> of a single file component. Its arguments should be ` +
          `compiled away and passing it at runtime has no effect.`
      );
    }
    return null;
  }
  function useContext() {
    const i = getCurrentInstance();
    if (!i) {
      warn(`useContext() called without active instance.`);
    }
    return i.setupContext || (i.setupContext = createSetupContext(i));
  }

  // Actual implementation
  function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
      if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
        // single vnode without props
        if (isVNode(propsOrChildren)) {
          return createVNode(type, null, [propsOrChildren]);
        }
        // props without children
        return createVNode(type, propsOrChildren);
      } else {
        // omit props
        return createVNode(type, null, propsOrChildren);
      }
    } else {
      if (l > 3) {
        children = Array.prototype.slice.call(arguments, 2);
      } else if (l === 3 && isVNode(children)) {
        children = [children];
      }
      return createVNode(type, propsOrChildren, children);
    }
  }

  const ssrContextKey = Symbol(`ssrContext`);
  const useSSRContext = () => {
    {
      warn(`useSSRContext() is not supported in the global build.`);
    }
  };

  function initCustomFormatter() {
    
    if (typeof window === "undefined") {
      return;
    }
    const a2020VueStyle = { style: "color:#3ba776" };
    const numberStyle = { style: "color:#0b1bc9" };
    const stringStyle = { style: "color:#b62e24" };
    const keywordStyle = { style: "color:#9d288c" };
    // custom formatter for Chrome
    // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
    const formatter = {
      header(obj) {
        // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
        if (!isObject(obj)) {
          return null;
        }
        if (obj.__isa2020Vue) {
          return ["div", a2020VueStyle, `a2020VueInstance`];
        } else if (isRef(obj)) {
          return ["div", {}, ["span", a2020VueStyle, genRefFlag(obj)], "<", formatValue(obj.value), `>`];
        } else if (isReactive(obj)) {
          return ["div", {}, ["span", a2020VueStyle, "Reactive"], "<", formatValue(obj), `>${isReadonly(obj) ? ` (readonly)` : ``}`];
        } else if (isReadonly(obj)) {
          return ["div", {}, ["span", a2020VueStyle, "Readonly"], "<", formatValue(obj), ">"];
        }
        return null;
      },
      hasBody(obj) {
        return obj && obj.__isa2020Vue;
      },
      body(obj) {
        if (obj && obj.__isa2020Vue) {
          return ["div", {}, ...formatInstance(obj.$)];
        }
      },
    };
    function formatInstance(instance) {
      const blocks = [];
      if (instance.type.props && instance.props) {
        blocks.push(createInstanceBlock("props", toRaw(instance.props)));
      }
      if (instance.setupState !== EMPTY_OBJ) {
        blocks.push(createInstanceBlock("setup", instance.setupState));
      }
      if (instance.data !== EMPTY_OBJ) {
        blocks.push(createInstanceBlock("data", toRaw(instance.data)));
      }
      const computed = extractKeys(instance, "computed");
      if (computed) {
        blocks.push(createInstanceBlock("computed", computed));
      }
      const injected = extractKeys(instance, "inject");
      if (injected) {
        blocks.push(createInstanceBlock("injected", injected));
      }
      blocks.push([
        "div",
        {},
        [
          "span",
          {
            style: keywordStyle.style + ";opacity:0.66",
          },
          "$ (internal): ",
        ],
        ["object", { object: instance }],
      ]);
      return blocks;
    }
    function createInstanceBlock(type, target) {
      target = extend({}, target);
      if (!Object.keys(target).length) {
        return ["span", {}];
      }
      return [
        "div",
        { style: "line-height:1.25em;margin-bottom:0.6em" },
        [
          "div",
          {
            style: "color:#476582",
          },
          type,
        ],
        [
          "div",
          {
            style: "padding-left:1.25em",
          },
          ...Object.keys(target).map((key) => {
            return ["div", {}, ["span", keywordStyle, key + ": "], formatValue(target[key], false)];
          }),
        ],
      ];
    }
    function formatValue(v, asRaw = true) {
      if (typeof v === "number") {
        return ["span", numberStyle, v];
      } else if (typeof v === "string") {
        return ["span", stringStyle, JSON.stringify(v)];
      } else if (typeof v === "boolean") {
        return ["span", keywordStyle, v];
      } else if (isObject(v)) {
        return ["object", { object: asRaw ? toRaw(v) : v }];
      } else {
        return ["span", stringStyle, String(v)];
      }
    }
    function extractKeys(instance, type) {
      const Comp = instance.type;
      if (isFunction(Comp)) {
        return;
      }
      const extracted = {};
      for (const key in instance.ctx) {
        if (isKeyOfType(Comp, key, type)) {
          extracted[key] = instance.ctx[key];
        }
      }
      return extracted;
    }
    function isKeyOfType(Comp, key, type) {
      const opts = Comp[type];
      if ((isArray(opts) && opts.includes(key)) || (isObject(opts) && key in opts)) {
        return true;
      }
      if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
        return true;
      }
      if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
        return true;
      }
    }
    function genRefFlag(v) {
      if (v._shallow) {
        return `ShallowRef`;
      }
      if (v.effect) {
        return `ComputedRef`;
      }
      return `Ref`;
    }
    if (window.devtoolsFormatters) {
      window.devtoolsFormatters.push(formatter);
    } else {
      window.devtoolsFormatters = [formatter];
    }
  }

  
  function renderList(source, renderItem) {
    let ret;
    if (isArray(source) || isString(source)) {
      ret = new Array(source.length);
      for (let i = 0, l = source.length; i < l; i++) {
        ret[i] = renderItem(source[i], i);
      }
    } else if (typeof source === "number") {
      if (!Number.isInteger(source)) {
        warn(`The v-for range expect an integer value but got ${source}.`);
        return [];
      }
      ret = new Array(source);
      for (let i = 0; i < source; i++) {
        ret[i] = renderItem(i + 1, i);
      }
    } else if (isObject(source)) {
      if (source[Symbol.iterator]) {
        ret = Array.from(source, renderItem);
      } else {
        const keys = Object.keys(source);
        ret = new Array(keys.length);
        for (let i = 0, l = keys.length; i < l; i++) {
          const key = keys[i];
          ret[i] = renderItem(source[key], key, i);
        }
      }
    } else {
      ret = [];
    }
    return ret;
  }

  
  function toHandlers(obj) {
    const ret = {};
    if (!isObject(obj)) {
      warn(`v-on with no argument expects an object value.`);
      return ret;
    }
    for (const key in obj) {
      ret[toHandlerKey(key)] = obj[key];
    }
    return ret;
  }

  
  function createSlots(slots, dynamicSlots) {
    for (let i = 0; i < dynamicSlots.length; i++) {
      const slot = dynamicSlots[i];
      // array of dynamic slot generated by <template v-for="..." #[...]>
      if (isArray(slot)) {
        for (let j = 0; j < slot.length; j++) {
          slots[slot[j].name] = slot[j].fn;
        }
      } else if (slot) {
        // conditional single slot generated by <template v-if="..." #foo>
        slots[slot.name] = slot.fn;
      }
    }
    return slots;
  }

  // Core API ------------------------------------------------------------------
  const version = "3.0.11";
  
  const ssrUtils = null;

  const svgNS = "http://www.w3.org/2000/svg";
  const doc = typeof document !== "undefined" ? document : null;
  let tempContainer;
  let tempSVGContainer;
  const nodeOps = {
    insert: (child, parent, anchor) => {
      parent.insertBefore(child, anchor || null);
    },
    remove: (child) => {
      const parent = child.parentNode;
      if (parent) {
        parent.removeChild(child);
      }
    },
    createElement: (tag, isSVG, is, props) => {
      const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : undefined);
      if (tag === "select" && props && props.multiple != null) {
        el.setAttribute("multiple", props.multiple);
      }
      return el;
    },
    createText: (text) => doc.createTextNode(text),
    createComment: (text) => doc.createComment(text),
    setText: (node, text) => {
      node.nodeValue = text;
    },
    setElementText: (el, text) => {
      el.textContent = text;
    },
    parentNode: (node) => node.parentNode,
    nextSibling: (node) => node.nextSibling,
    querySelector: (selector) => doc.querySelector(selector),
    setScopeId(el, id) {
      el.setAttribute(id, "");
    },
    cloneNode(el) {
      const cloned = el.cloneNode(true);
      // #3072
      // - in `patchDOMProp`, we store the actual value in the `el._value` property.
      // - normally, elements using `:value` bindings will not be hoisted, but if
      //   the bound value is a constant, e.g. `:value="true"` - they do get
      //   hoisted.
      // - in production, hoisted nodes are cloned when subsequent inserts, but
      //   cloneNode() does not copy the custom property we attached.
      // - This may need to account for other custom DOM properties we attach to
      //   elements in addition to `_value` in the future.
      if (`_value` in el) {
        cloned._value = el._value;
      }
      return cloned;
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, isSVG) {
      const temp = isSVG ? tempSVGContainer || (tempSVGContainer = doc.createElementNS(svgNS, "svg")) : tempContainer || (tempContainer = doc.createElement("div"));
      temp.innerHTML = content;
      const first = temp.firstChild;
      let node = first;
      let last = node;
      while (node) {
        last = node;
        nodeOps.insert(node, parent, anchor);
        node = temp.firstChild;
      }
      return [first, last];
    },
  };

  // compiler should normalize class + :class bindings on the same element
  // into a single binding ['staticClass', dynamic]
  function patchClass(el, value, isSVG) {
    if (value == null) {
      value = "";
    }
    if (isSVG) {
      el.setAttribute("class", value);
    } else {
      // directly setting className should be faster than setAttribute in theory
      // if this is an element during a transition, take the temporary transition
      // classes into account.
      const transitionClasses = el._vtc;
      if (transitionClasses) {
        value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
      }
      el.className = value;
    }
  }

  function patchStyle(el, prev, next) {
    const style = el.style;
    if (!next) {
      el.removeAttribute("style");
    } else if (isString(next)) {
      if (prev !== next) {
        const current = style.display;
        style.cssText = next;
        // indicates that the `display` of the element is controlled by `v-show`,
        // so we always keep the current `display` value regardless of the `style` value,
        // thus handing over control to `v-show`.
        if ("_vod" in el) {
          style.display = current;
        }
      }
    } else {
      for (const key in next) {
        setStyle(style, key, next[key]);
      }
      if (prev && !isString(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
    }
  }
  const importantRE = /\s*!important$/;
  function setStyle(style, name, val) {
    if (isArray(val)) {
      val.forEach((v) => setStyle(style, name, v));
    } else {
      if (name.startsWith("--")) {
        // custom property definition
        style.setProperty(name, val);
      } else {
        const prefixed = autoPrefix(style, name);
        if (importantRE.test(val)) {
          // !important
          style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
        } else {
          style[prefixed] = val;
        }
      }
    }
  }
  const prefixes = ["Webkit", "Moz", "ms"];
  const prefixCache = {};
  function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
      return cached;
    }
    let name = camelize(rawName);
    if (name !== "filter" && name in style) {
      return (prefixCache[rawName] = name);
    }
    name = capitalize(name);
    for (let i = 0; i < prefixes.length; i++) {
      const prefixed = prefixes[i] + name;
      if (prefixed in style) {
        return (prefixCache[rawName] = prefixed);
      }
    }
    return rawName;
  }

  const xlinkNS = "http://www.w3.org/1999/xlink";
  function patchAttr(el, key, value, isSVG) {
    if (isSVG && key.startsWith("xlink:")) {
      if (value == null) {
        el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      // note we are only checking boolean attributes that don't have a
      // corresponding dom prop of the same name here.
      const isBoolean = isSpecialBooleanAttr(key);
      if (value == null || (isBoolean && value === false)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, isBoolean ? "" : value);
      }
    }
  }

  // __UNSAFE__
  // functions. The user is responsible for using them with only trusted content.
  function patchDOMProp(
    el,
    key,
    value,
    // the following args are passed only due to potential innerHTML/textContent
    // overriding existing VNodes, in which case the old tree must be properly
    // unmounted.
    prevChildren,
    parentComponent,
    parentSuspense,
    unmountChildren
  ) {
    if (key === "innerHTML" || key === "textContent") {
      if (prevChildren) {
        unmountChildren(prevChildren, parentComponent, parentSuspense);
      }
      el[key] = value == null ? "" : value;
      return;
    }
    if (key === "value" && el.tagName !== "PROGRESS") {
      // store value as _value as well since
      // non-string values will be stringified.
      el._value = value;
      const newValue = value == null ? "" : value;
      if (el.value !== newValue) {
        el.value = newValue;
      }
      return;
    }
    if (value === "" || value == null) {
      const type = typeof el[key];
      if (value === "" && type === "boolean") {
        // e.g. <select multiple> compiles to { multiple: '' }
        el[key] = true;
        return;
      } else if (value == null && type === "string") {
        // e.g. <div :id="null">
        el[key] = "";
        el.removeAttribute(key);
        return;
      } else if (type === "number") {
        // e.g. <img :width="null">
        el[key] = 0;
        el.removeAttribute(key);
        return;
      }
    }
    // some properties perform value validation and throw
    try {
      el[key] = value;
    } catch (e) {
      {
        warn(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: ` + `value ${value} is invalid.`, e);
      }
    }
  }

  // Async edge case fix requires storing an event listener's attach timestamp.
  let _getNow = Date.now;
  let skipTimestampCheck = false;
  if (typeof window !== "undefined") {
    // Determine what event timestamp the browser is using. Annoyingly, the
    // timestamp can either be hi-res (relative to page load) or low-res
    // (relative to UNIX epoch), so in order to compare time we have to use the
    // same timestamp type when saving the flush timestamp.
    if (_getNow() > document.createEvent("Event").timeStamp) {
      // if the low-res timestamp which is bigger than the event timestamp
      // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listeners as well.
      _getNow = () => performance.now();
    }
    // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
    // and does not fire microtasks in between event propagation, so safe to exclude.
    const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
    skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
  }
  // To avoid the overhead of repeatedly calling performance.now(), we cache
  // and use the same timestamp for all event listeners attached in the same tick.
  let cachedNow = 0;
  const p = Promise.resolve();
  const reset = () => {
    cachedNow = 0;
  };
  const getNow = () => cachedNow || (p.then(reset), (cachedNow = _getNow()));
  function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
  }
  function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
  }
  function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    // vei = a2020Vue event invokers
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
      // patch
      existingInvoker.value = nextValue;
    } else {
      const [name, options] = parseName(rawName);
      if (nextValue) {
        // add
        const invoker = (invokers[rawName] = createInvoker(nextValue, instance));
        addEventListener(el, name, invoker, options);
      } else if (existingInvoker) {
        // remove
        removeEventListener(el, name, existingInvoker, options);
        invokers[rawName] = undefined;
      }
    }
  }
  const optionsModifierRE = /(?:Once|Passive|Capture)$/;
  function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
      options = {};
      let m;
      while ((m = name.match(optionsModifierRE))) {
        name = name.slice(0, name.length - m[0].length);
        options[m[0].toLowerCase()] = true;
      }
    }
    return [hyphenate(name.slice(2)), options];
  }
  function createInvoker(initialValue, instance) {
    const invoker = (e) => {
      // async edge case #6566: inner click event triggers patch, event handler
      // attached to outer element during patch, and triggered again. This
      // happens because browsers fire microtask ticks between event propagation.
      // the solution is simple: we save the timestamp when a handler is attached,
      // and the handler would only fire if the event passed to it was fired
      // AFTER it was attached.
      const timeStamp = e.timeStamp || _getNow();
      if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
        callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5 , [e]);
      }
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
  }
  function patchStopImmediatePropagation(e, value) {
    if (isArray(value)) {
      const originalStop = e.stopImmediatePropagation;
      e.stopImmediatePropagation = () => {
        originalStop.call(e);
        e._stopped = true;
      };
      return value.map((fn) => (e) => !e._stopped && fn(e));
    } else {
      return value;
    }
  }

  const nativeOnRE = /^on[a-z]/;
  const forcePatchProp = (_, key) => key === "value";
  const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    switch (key) {
      // special
      case "class":
        patchClass(el, nextValue, isSVG);
        break;
      case "style":
        patchStyle(el, prevValue, nextValue);
        break;
      default:
        if (isOn(key)) {
          // ignore v-model listeners
          if (!isModelListener(key)) {
            patchEvent(el, key, prevValue, nextValue, parentComponent);
          }
        } else if (shouldSetAsProp(el, key, nextValue, isSVG)) {
          patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
        } else {
          // special case for <input v-model type="checkbox"> with
          // :true-value & :false-value
          // store value as dom properties since non-string values will be
          // stringified.
          if (key === "true-value") {
            el._trueValue = nextValue;
          } else if (key === "false-value") {
            el._falseValue = nextValue;
          }
          patchAttr(el, key, nextValue, isSVG);
        }
        break;
    }
  };
  function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
      // most keys must be set as attribute on svg elements to work
      // ...except innerHTML
      if (key === "innerHTML") {
        return true;
      }
      // or native onclick with function values
      if (key in el && nativeOnRE.test(key) && isFunction(value)) {
        return true;
      }
      return false;
    }
    // spellcheck and draggable are numerated attrs, however their
    // corresponding DOM properties are actually booleans - this leads to
    // setting it with a string "false" value leading it to be coerced to
    // `true`, so we need to always treat them as attributes.
    // Note that `contentEditable` doesn't have this problem: its DOM
    // property is also enumerated string values.
    if (key === "spellcheck" || key === "draggable") {
      return false;
    }
    // #1787, #2840 form property on form elements is readonly and must be set as
    // attribute.
    if (key === "form") {
      return false;
    }
    // #1526 <input list> must be set as attribute
    if (key === "list" && el.tagName === "INPUT") {
      return false;
    }
    // #2766 <textarea type> must be set as attribute
    if (key === "type" && el.tagName === "TEXTAREA") {
      return false;
    }
    // native onclick with string value, must be set as attribute
    if (nativeOnRE.test(key) && isString(value)) {
      return false;
    }
    return key in el;
  }

  function useCssModule(name = "$style") {
    
    {
      {
        warn(`useCssModule() is not supported in the global build.`);
      }
      return EMPTY_OBJ;
    }
  }

  
  function useCssVars(getter) {
    const instance = getCurrentInstance();
    
    if (!instance) {
      warn(`useCssVars is called without current active component instance.`);
      return;
    }
    const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
    onMounted(() => watchEffect(setVars, { flush: "post" }));
    onUpdated(setVars);
  }
  function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128 ) {
      const suspense = vnode.suspense;
      vnode = suspense.activeBranch;
      if (suspense.pendingBranch && !suspense.isHydrating) {
        suspense.effects.push(() => {
          setVarsOnVNode(suspense.activeBranch, vars);
        });
      }
    }
    // drill down HOCs until it's a non-component vnode
    while (vnode.component) {
      vnode = vnode.component.subTree;
    }
    if (vnode.shapeFlag & 1  && vnode.el) {
      const style = vnode.el.style;
      for (const key in vars) {
        style.setProperty(`--${key}`, vars[key]);
      }
    } else if (vnode.type === Fragment) {
      vnode.children.forEach((c) => setVarsOnVNode(c, vars));
    }
  }

  const TRANSITION = "transition";
  const ANIMATION = "animation";
  // DOM Transition is a higher-order-component based on the platform-agnostic
  // base Transition component, with DOM-specific logic.
  const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
  Transition.displayName = "Transition";
  const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: true,
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  };
  const TransitionPropsValidators = (Transition.props =  extend({}, BaseTransition.props, DOMTransitionPropsValidators));
  function resolveTransitionProps(rawProps) {
    let {
      name = "v",
      type,
      css = true,
      duration,
      enterFromClass = `${name}-enter-from`,
      enterActiveClass = `${name}-enter-active`,
      enterToClass = `${name}-enter-to`,
      appearFromClass = enterFromClass,
      appearActiveClass = enterActiveClass,
      appearToClass = enterToClass,
      leaveFromClass = `${name}-leave-from`,
      leaveActiveClass = `${name}-leave-active`,
      leaveToClass = `${name}-leave-to`,
    } = rawProps;
    const baseProps = {};
    for (const key in rawProps) {
      if (!(key in DOMTransitionPropsValidators)) {
        baseProps[key] = rawProps[key];
      }
    }
    if (!css) {
      return baseProps;
    }
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done) => {
      removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
      removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
      done && done();
    };
    const finishLeave = (el, done) => {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
      done && done();
    };
    const makeEnterHook = (isAppear) => {
      return (el, done) => {
        const hook = isAppear ? onAppear : onEnter;
        const resolve = () => finishEnter(el, isAppear, done);
        hook && hook(el, resolve);
        nextFrame(() => {
          removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
          addTransitionClass(el, isAppear ? appearToClass : enterToClass);
          if (!(hook && hook.length > 1)) {
            whenTransitionEnds(el, type, enterDuration, resolve);
          }
        });
      };
    };
    return extend(baseProps, {
      onBeforeEnter(el) {
        onBeforeEnter && onBeforeEnter(el);
        addTransitionClass(el, enterFromClass);
        addTransitionClass(el, enterActiveClass);
      },
      onBeforeAppear(el) {
        onBeforeAppear && onBeforeAppear(el);
        addTransitionClass(el, appearFromClass);
        addTransitionClass(el, appearActiveClass);
      },
      onEnter: makeEnterHook(false),
      onAppear: makeEnterHook(true),
      onLeave(el, done) {
        const resolve = () => finishLeave(el, done);
        addTransitionClass(el, leaveFromClass);
        // force reflow so *-leave-from classes immediately take effect (#2593)
        forceReflow();
        addTransitionClass(el, leaveActiveClass);
        nextFrame(() => {
          removeTransitionClass(el, leaveFromClass);
          addTransitionClass(el, leaveToClass);
          if (!(onLeave && onLeave.length > 1)) {
            whenTransitionEnds(el, type, leaveDuration, resolve);
          }
        });
        onLeave && onLeave(el, resolve);
      },
      onEnterCancelled(el) {
        finishEnter(el, false);
        onEnterCancelled && onEnterCancelled(el);
      },
      onAppearCancelled(el) {
        finishEnter(el, true);
        onAppearCancelled && onAppearCancelled(el);
      },
      onLeaveCancelled(el) {
        finishLeave(el);
        onLeaveCancelled && onLeaveCancelled(el);
      },
    });
  }
  function normalizeDuration(duration) {
    if (duration == null) {
      return null;
    } else if (isObject(duration)) {
      return [NumberOf(duration.enter), NumberOf(duration.leave)];
    } else {
      const n = NumberOf(duration);
      return [n, n];
    }
  }
  function NumberOf(val) {
    const res = toNumber(val);
    validateDuration(res);
    return res;
  }
  function validateDuration(val) {
    if (typeof val !== "number") {
      warn(`<transition> explicit duration is not a valid number - ` + `got ${JSON.stringify(val)}.`);
    } else if (isNaN(val)) {
      warn(`<transition> explicit duration is NaN - ` + "the duration expression might be incorrect.");
    }
  }
  function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
    (el._vtc || (el._vtc = new Set())).add(cls);
  }
  function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
    const { _vtc } = el;
    if (_vtc) {
      _vtc.delete(cls);
      if (!_vtc.size) {
        el._vtc = undefined;
      }
    }
  }
  function nextFrame(cb) {
    requestAnimationFrame(() => {
      requestAnimationFrame(cb);
    });
  }
  let endId = 0;
  function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = (el._endId = ++endId);
    const resolveIfNotStale = () => {
      if (id === el._endId) {
        resolve();
      }
    };
    if (explicitTimeout) {
      return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
      return resolve();
    }
    const endEvent = type + "end";
    let ended = 0;
    const end = () => {
      el.removeEventListener(endEvent, onEnd);
      resolveIfNotStale();
    };
    const onEnd = (e) => {
      if (e.target === el && ++ended >= propCount) {
        end();
      }
    };
    setTimeout(() => {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
  }
  function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const getStyleProperties = (key) => (styles[key] || "").split(", ");
    const transitionDelays = getStyleProperties(TRANSITION + "Delay");
    const transitionDurations = getStyleProperties(TRANSITION + "Duration");
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + "Delay");
    const animationDurations = getStyleProperties(ANIMATION + "Duration");
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? (transitionTimeout > animationTimeout ? TRANSITION : ANIMATION) : null;
      propCount = type ? (type === TRANSITION ? transitionDurations.length : animationDurations.length) : 0;
    }
    const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + "Property"]);
    return {
      type,
      timeout,
      propCount,
      hasTransform,
    };
  }
  function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
  }
  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer
  // numbers in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down
  // (i.e. acting as a floor function) causing unexpected behaviors
  function toMs(s) {
    return Number(s.slice(0, -1).replace(",", ".")) * 1000;
  }
  // synchronously force layout to put elements into a certain state
  function forceReflow() {
    return document.body.offsetHeight;
  }

  const positionMap = new WeakMap();
  const newPositionMap = new WeakMap();
  const TransitionGroupImpl = {
    name: "TransitionGroup",
    props:  extend({}, TransitionPropsValidators, {
      tag: String,
      moveClass: String,
    }),
    setup(props, { slots }) {
      const instance = getCurrentInstance();
      const state = useTransitionState();
      let prevChildren;
      let children;
      onUpdated(() => {
        // children is guaranteed to exist after initial render
        if (!prevChildren.length) {
          return;
        }
        const moveClass = props.moveClass || `${props.name || "v"}-move`;
        if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
          return;
        }
        // we divide the work into three loops to avoid mixing DOM reads and writes
        // in each iteration - which helps prevent layout thrashing.
        prevChildren.forEach(callPendingCbs);
        prevChildren.forEach(recordPosition);
        const movedChildren = prevChildren.filter(applyTranslation);
        // force reflow to put everything in position
        forceReflow();
        movedChildren.forEach((c) => {
          const el = c.el;
          const style = el.style;
          addTransitionClass(el, moveClass);
          style.transform = style.webkitTransform = style.transitionDuration = "";
          const cb = (el._moveCb = (e) => {
            if (e && e.target !== el) {
              return;
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener("transitionend", cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
          el.addEventListener("transitionend", cb);
        });
      });
      return () => {
        const rawProps = toRaw(props);
        const cssTransitionProps = resolveTransitionProps(rawProps);
        const tag = rawProps.tag || Fragment;
        prevChildren = children;
        children = slots.default ? getTransitionRawChildren(slots.default()) : [];
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (child.key != null) {
            setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
          } else {
            warn(`<TransitionGroup> children must be keyed.`);
          }
        }
        if (prevChildren) {
          for (let i = 0; i < prevChildren.length; i++) {
            const child = prevChildren[i];
            setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
            positionMap.set(child, child.el.getBoundingClientRect());
          }
        }
        return createVNode(tag, null, children);
      };
    },
  };
  const TransitionGroup = TransitionGroupImpl;
  function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) {
      el._moveCb();
    }
    if (el._enterCb) {
      el._enterCb();
    }
  }
  function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
  }
  function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
      const s = c.el.style;
      s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
      s.transitionDuration = "0s";
      return c;
    }
  }
  function hasCSSTransform(el, root, moveClass) {
    // Detect whether an element with the move class applied has
    // CSS transitions. Since the element may be inside an entering
    // transition at this very moment, we make a clone of it and remove
    // all other transition classes applied to ensure only the move class
    // is applied.
    const clone = el.cloneNode();
    if (el._vtc) {
      el._vtc.forEach((cls) => {
        cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
      });
    }
    moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
    clone.style.display = "none";
    const container = root.nodeType === 1 ? root : root.parentNode;
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
  }

  const getModelAssigner = (vnode) => {
    const fn = vnode.props["onUpdate:modelValue"];
    return isArray(fn) ? (value) => invokeArrayFns(fn, value) : fn;
  };
  function onCompositionStart(e) {
    e.target.composing = true;
  }
  function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
      target.composing = false;
      trigger$1(target, "input");
    }
  }
  function trigger$1(el, type) {
    const e = document.createEvent("HTMLEvents");
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }
  // We are exporting the v-model runtime directly as vnode hooks so that it can
  // be tree-shaken in case v-model is never used.
  const vModelText = {
    created(el, { modifiers: { lazy, trim, number } }, vnode) {
      el._assign = getModelAssigner(vnode);
      const castToNumber = number || el.type === "number";
      addEventListener(el, lazy ? "change" : "input", (e) => {
        if (e.target.composing) return;
        let domValue = el.value;
        if (trim) {
          domValue = domValue.trim();
        } else if (castToNumber) {
          domValue = toNumber(domValue);
        }
        el._assign(domValue);
      });
      if (trim) {
        addEventListener(el, "change", () => {
          el.value = el.value.trim();
        });
      }
      if (!lazy) {
        addEventListener(el, "compositionstart", onCompositionStart);
        addEventListener(el, "compositionend", onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        addEventListener(el, "change", onCompositionEnd);
      }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted(el, { value }) {
      el.value = value == null ? "" : value;
    },
    beforeUpdate(el, { value, modifiers: { trim, number } }, vnode) {
      el._assign = getModelAssigner(vnode);
      // avoid clearing unresolved text. #2302
      if (el.composing) return;
      if (document.activeElement === el) {
        if (trim && el.value.trim() === value) {
          return;
        }
        if ((number || el.type === "number") && toNumber(el.value) === value) {
          return;
        }
      }
      const newValue = value == null ? "" : value;
      if (el.value !== newValue) {
        el.value = newValue;
      }
    },
  };
  const vModelCheckbox = {
    created(el, _, vnode) {
      el._assign = getModelAssigner(vnode);
      addEventListener(el, "change", () => {
        const modelValue = el._modelValue;
        const elementValue = getValue(el);
        const checked = el.checked;
        const assign = el._assign;
        if (isArray(modelValue)) {
          const index = looseIndexOf(modelValue, elementValue);
          const found = index !== -1;
          if (checked && !found) {
            assign(modelValue.concat(elementValue));
          } else if (!checked && found) {
            const filtered = [...modelValue];
            filtered.splice(index, 1);
            assign(filtered);
          }
        } else if (isSet(modelValue)) {
          const cloned = new Set(modelValue);
          if (checked) {
            cloned.add(elementValue);
          } else {
            cloned.delete(elementValue);
          }
          assign(cloned);
        } else {
          assign(getCheckboxValue(el, checked));
        }
      });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate(el, binding, vnode) {
      el._assign = getModelAssigner(vnode);
      setChecked(el, binding, vnode);
    },
  };
  function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    if (isArray(value)) {
      el.checked = looseIndexOf(value, vnode.props.value) > -1;
    } else if (isSet(value)) {
      el.checked = value.has(vnode.props.value);
    } else if (value !== oldValue) {
      el.checked = looseEqual(value, getCheckboxValue(el, true));
    }
  }
  const vModelRadio = {
    created(el, { value }, vnode) {
      el.checked = looseEqual(value, vnode.props.value);
      el._assign = getModelAssigner(vnode);
      addEventListener(el, "change", () => {
        el._assign(getValue(el));
      });
    },
    beforeUpdate(el, { value, oldValue }, vnode) {
      el._assign = getModelAssigner(vnode);
      if (value !== oldValue) {
        el.checked = looseEqual(value, vnode.props.value);
      }
    },
  };
  const vModelSelect = {
    created(el, { value, modifiers: { number } }, vnode) {
      const isSetModel = isSet(value);
      addEventListener(el, "change", () => {
        const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map((o) => (number ? toNumber(getValue(o)) : getValue(o)));
        el._assign(el.multiple ? (isSetModel ? new Set(selectedVal) : selectedVal) : selectedVal[0]);
      });
      el._assign = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted(el, { value }) {
      setSelected(el, value);
    },
    beforeUpdate(el, _binding, vnode) {
      el._assign = getModelAssigner(vnode);
    },
    updated(el, { value }) {
      setSelected(el, value);
    },
  };
  function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !isArray(value) && !isSet(value)) {
      warn(`<select multiple v-model> expects an Array or Set value for its binding, ` + `but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
      return;
    }
    for (let i = 0, l = el.options.length; i < l; i++) {
      const option = el.options[i];
      const optionValue = getValue(option);
      if (isMultiple) {
        if (isArray(value)) {
          option.selected = looseIndexOf(value, optionValue) > -1;
        } else {
          option.selected = value.has(optionValue);
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          el.selectedIndex = i;
          return;
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }
  // retrieve raw value set via :value bindings
  function getValue(el) {
    return "_value" in el ? el._value : el.value;
  }
  // retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
  function getCheckboxValue(el, checked) {
    const key = checked ? "_trueValue" : "_falseValue";
    return key in el ? el[key] : checked;
  }
  const vModelDynamic = {
    created(el, binding, vnode) {
      callModelHook(el, binding, vnode, null, "created");
    },
    mounted(el, binding, vnode) {
      callModelHook(el, binding, vnode, null, "mounted");
    },
    beforeUpdate(el, binding, vnode, prevVNode) {
      callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
    },
    updated(el, binding, vnode, prevVNode) {
      callModelHook(el, binding, vnode, prevVNode, "updated");
    },
  };
  function callModelHook(el, binding, vnode, prevVNode, hook) {
    let modelToUse;
    switch (el.tagName) {
      case "SELECT":
        modelToUse = vModelSelect;
        break;
      case "TEXTAREA":
        modelToUse = vModelText;
        break;
      default:
        switch (vnode.props && vnode.props.type) {
          case "checkbox":
            modelToUse = vModelCheckbox;
            break;
          case "radio":
            modelToUse = vModelRadio;
            break;
          default:
            modelToUse = vModelText;
        }
    }
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
  }

  const systemModifiers = ["ctrl", "shift", "alt", "meta"];
  const modifierGuards = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m)),
  };
  
  const withModifiers = (fn, modifiers) => {
    return (event, ...args) => {
      for (let i = 0; i < modifiers.length; i++) {
        const guard = modifierGuards[modifiers[i]];
        if (guard && guard(event, modifiers)) return;
      }
      return fn(event, ...args);
    };
  };
  // Kept for 2.x compat.
  // Note: IE11 compat for `spacebar` and `del` is removed for now.
  const keyNames = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  };
  
  const withKeys = (fn, modifiers) => {
    return (event) => {
      if (!("key" in event)) return;
      const eventKey = hyphenate(event.key);
      if (
        // None of the provided key modifiers match the current event key
        !modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)
      ) {
        return;
      }
      return fn(event);
    };
  };

  const vShow = {
    beforeMount(el, { value }, { transition }) {
      el._vod = el.style.display === "none" ? "" : el.style.display;
      if (transition && value) {
        transition.beforeEnter(el);
      } else {
        setDisplay(el, value);
      }
    },
    mounted(el, { value }, { transition }) {
      if (transition && value) {
        transition.enter(el);
      }
    },
    updated(el, { value, oldValue }, { transition }) {
      if (!value === !oldValue) return;
      if (transition) {
        if (value) {
          transition.beforeEnter(el);
          setDisplay(el, true);
          transition.enter(el);
        } else {
          transition.leave(el, () => {
            setDisplay(el, false);
          });
        }
      } else {
        setDisplay(el, value);
      }
    },
    beforeUnmount(el, { value }) {
      setDisplay(el, value);
    },
  };
  function setDisplay(el, value) {
    el.style.display = value ? el._vod : "none";
  }

  const rendererOptions = extend({ patchProp, forcePatchProp }, nodeOps);
  // lazy create the renderer - this makes core renderer logic tree-shakable
  // in case the user only imports reactivity utilities from a2020Vue.
  let renderer;
  let enabledHydration = false;
  function ensureRenderer() {
    return renderer || (renderer = createRenderer(rendererOptions));
  }
  function ensureHydrationRenderer() {
    renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
    enabledHydration = true;
    return renderer;
  }
  // use explicit type casts here to avoid import() calls in rolled-up d.ts
  const render = (...args) => {
    ensureRenderer().render(...args);
  };
  const hydrate = (...args) => {
    ensureHydrationRenderer().hydrate(...args);
  };
  const createApp = (...args) => {
    const app = ensureRenderer().createApp(...args);
    {
      injectNativeTagCheck(app);
      injectCustomElementCheck(app);
    }
    const { mount } = app;
    app.mount = (containerOrSelector) => {
      const container = normalizeContainer(containerOrSelector);
      if (!container) return;
      const component = app._component;
      if (!isFunction(component) && !component.render && !component.template) {
        component.template = container.innerHTML;
      }
      // clear content before mounting
      container.innerHTML = "";
      const proxy = mount(container, false, container instanceof SVGElement);
      if (container instanceof Element) {
        container.removeAttribute("v-cloak");
        container.setAttribute("data-v-app", "");
      }
      return proxy;
    };
    return app;
  };
  const createSSRApp = (...args) => {
    const app = ensureHydrationRenderer().createApp(...args);
    {
      injectNativeTagCheck(app);
      injectCustomElementCheck(app);
    }
    const { mount } = app;
    app.mount = (containerOrSelector) => {
      const container = normalizeContainer(containerOrSelector);
      if (container) {
        return mount(container, true, container instanceof SVGElement);
      }
    };
    return app;
  };
  function injectNativeTagCheck(app) {
    // Inject `isNativeTag`
    // this is used for component name validation (dev only)
    Object.defineProperty(app.config, "isNativeTag", {
      value: (tag) => isHTMLTag(tag) || isSVGTag(tag),
      writable: false,
    });
  }
  // dev only
  function injectCustomElementCheck(app) {
    if (isRuntimeOnly()) {
      const value = app.config.isCustomElement;
      Object.defineProperty(app.config, "isCustomElement", {
        get() {
          return value;
        },
        set() {
          warn(
            `The \`isCustomElement\` config option is only respected when using the runtime compiler.` +
              `If you are using the runtime-only build, \`isCustomElement\` must be passed to \`@a2020Vue/compiler-dom\` in the build setup instead` +
              `- for example, via the \`compilerOptions\` option in a2020Vue-loader: https://a2020Vue-loader.a2020Vuejs.org/options.html#compileroptions.`
          );
        },
      });
    }
  }
  function normalizeContainer(container) {
    if (isString(container)) {
      const res = document.querySelector(container);
      if (!res) {
        warn(`Failed to mount app: mount target selector "${container}" returned null.`);
      }
      return res;
    }
    if (container instanceof window.ShadowRoot && container.mode === "closed") {
      warn(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
    }
    return container;
  }

  function initDev() {
    {
      {
        //console.info(`You are running a development build of a2020Vue.\n` + `Make sure to use the production build (*.prod.js) when deploying for production.`);
      }
      initCustomFormatter();
    }
  }

  function defaultOnError(error) {
    throw error;
  }
  function createCompilerError(code, loc, messages, additionalMessage) {
    const msg = (messages || errorMessages)[code] + (additionalMessage || ``);
    const error = new SyntaxError(String(msg));
    error.code = code;
    error.loc = loc;
    return error;
  }
  const errorMessages = {
    // parse errors
    [0 ]: "Illegal comment.",
    [1 ]: "CDATA section is allowed only in XML context.",
    [2 ]: "Duplicate attribute.",
    [3 ]: "End tag cannot have attributes.",
    [4 ]: "Illegal '/' in tags.",
    [5 ]: "Unexpected EOF in tag.",
    [6 ]: "Unexpected EOF in CDATA section.",
    [7 ]: "Unexpected EOF in comment.",
    [8 ]: "Unexpected EOF in script.",
    [9 ]: "Unexpected EOF in tag.",
    [10 ]: "Incorrectly closed comment.",
    [11 ]: "Incorrectly opened comment.",
    [12 ]: "Illegal tag name. Use '&lt;' to print '<'.",
    [13 ]: "Attribute value was expected.",
    [14 ]: "End tag name was expected.",
    [15 ]: "Whitespace was expected.",
    [16 ]: "Unexpected '<!--' in comment.",
    [17 ]: "Attribute name cannot contain U+0022 (\"), U+0027 ('), and U+003C (<).",
    [18 ]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
    [19 ]: "Attribute name cannot start with '='.",
    [21 ]: "'<?' is allowed only in XML context.",
    [22 ]: "Illegal '/' in tags.",
    // a2020Vue-specific parse errors
    [23 ]: "Invalid end tag.",
    [24 ]: "Element is missing end tag.",
    [25 ]: "Interpolation end sign was not found.",
    [26 ]: "End bracket for dynamic directive argument was not found. " + "Note that dynamic directive argument cannot contain spaces.",
    // transform errors
    [27 ]: `v-if/v-else-if is missing expression.`,
    [28 ]: `v-if/else branches must use unique keys.`,
    [29 ]: `v-else/v-else-if has no adjacent v-if.`,
    [30 ]: `v-for is missing expression.`,
    [31 ]: `v-for has invalid expression.`,
    [32 ]: `<template v-for> key should be placed on the <template> tag.`,
    [33 ]: `v-bind is missing expression.`,
    [34 ]: `v-on is missing expression.`,
    [35 ]: `Unexpected custom directive on <slot> outlet.`,
    [36 ]:
      `Mixed v-slot usage on both the component and nested <template>.` + `When there are multiple named slots, all slots should use <template> ` + `syntax to avoid scope ambiguity.`,
    [37 ]: `Duplicate slot names found. `,
    [38 ]: `Extraneous children found when component already has explicitly named ` + `default slot. These children will be ignored.`,
    [39 ]: `v-slot can only be used on components or <template> tags.`,
    [40 ]: `v-model is missing expression.`,
    [41 ]: `v-model value must be a valid JavaScript member expression.`,
    [42 ]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
    [43 ]: `Error parsing JavaScript expression: `,
    [44 ]: `<KeepAlive> expects exactly one child component.`,
    // generic errors
    [45 ]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
    [46 ]: `ES module mode is not supported in this build of compiler.`,
    [47 ]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
    [48 ]: `"scopeId" option is only supported in module mode.`,
  };

  const FRAGMENT = Symbol(`Fragment`);
  const TELEPORT = Symbol(`Teleport`);
  const SUSPENSE = Symbol(`Suspense`);
  const KEEP_ALIVE = Symbol(`KeepAlive`);
  const BASE_TRANSITION = Symbol(`BaseTransition`);
  const OPEN_BLOCK = Symbol(`openBlock`);
  const CREATE_BLOCK = Symbol(`createBlock`);
  const CREATE_VNODE = Symbol(`createVNode`);
  const CREATE_COMMENT = Symbol(`createCommentVNode`);
  const CREATE_TEXT = Symbol(`createTextVNode`);
  const CREATE_STATIC = Symbol(`createStaticVNode`);
  const RESOLVE_COMPONENT = Symbol(`resolveComponent`);
  const RESOLVE_DYNAMIC_COMPONENT = Symbol(`resolveDynamicComponent`);
  const RESOLVE_DIRECTIVE = Symbol(`resolveDirective`);
  const WITH_DIRECTIVES = Symbol(`withDirectives`);
  const RENDER_LIST = Symbol(`renderList`);
  const RENDER_SLOT = Symbol(`renderSlot`);
  const CREATE_SLOTS = Symbol(`createSlots`);
  const TO_DISPLAY_STRING = Symbol(`toDisplayString`);
  const MERGE_PROPS = Symbol(`mergeProps`);
  const TO_HANDLERS = Symbol(`toHandlers`);
  const CAMELIZE = Symbol(`camelize`);
  const CAPITALIZE = Symbol(`capitalize`);
  const TO_HANDLER_KEY = Symbol(`toHandlerKey`);
  const SET_BLOCK_TRACKING = Symbol(`setBlockTracking`);
  const PUSH_SCOPE_ID = Symbol(`pushScopeId`);
  const POP_SCOPE_ID = Symbol(`popScopeId`);
  const WITH_SCOPE_ID = Symbol(`withScopeId`);
  const WITH_CTX = Symbol(`withCtx`);
  const UNREF = Symbol(`unref`);
  const IS_REF = Symbol(`isRef`);
  // Name mapping for runtime helpers that need to be imported from 'a2020Vue' in
  // generated code. Make sure these are correctly exported in the runtime!
  // Using `any` here because TS doesn't allow symbols as index type.
  const helperNameMap = {
    [FRAGMENT]: `Fragment`,
    [TELEPORT]: `Teleport`,
    [SUSPENSE]: `Suspense`,
    [KEEP_ALIVE]: `KeepAlive`,
    [BASE_TRANSITION]: `BaseTransition`,
    [OPEN_BLOCK]: `openBlock`,
    [CREATE_BLOCK]: `createBlock`,
    [CREATE_VNODE]: `createVNode`,
    [CREATE_COMMENT]: `createCommentVNode`,
    [CREATE_TEXT]: `createTextVNode`,
    [CREATE_STATIC]: `createStaticVNode`,
    [RESOLVE_COMPONENT]: `resolveComponent`,
    [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
    [RESOLVE_DIRECTIVE]: `resolveDirective`,
    [WITH_DIRECTIVES]: `withDirectives`,
    [RENDER_LIST]: `renderList`,
    [RENDER_SLOT]: `renderSlot`,
    [CREATE_SLOTS]: `createSlots`,
    [TO_DISPLAY_STRING]: `toDisplayString`,
    [MERGE_PROPS]: `mergeProps`,
    [TO_HANDLERS]: `toHandlers`,
    [CAMELIZE]: `camelize`,
    [CAPITALIZE]: `capitalize`,
    [TO_HANDLER_KEY]: `toHandlerKey`,
    [SET_BLOCK_TRACKING]: `setBlockTracking`,
    [PUSH_SCOPE_ID]: `pushScopeId`,
    [POP_SCOPE_ID]: `popScopeId`,
    [WITH_SCOPE_ID]: `withScopeId`,
    [WITH_CTX]: `withCtx`,
    [UNREF]: `unref`,
    [IS_REF]: `isRef`,
  };
  function registerRuntimeHelpers(helpers) {
    Object.getOwnPropertySymbols(helpers).forEach((s) => {
      helperNameMap[s] = helpers[s];
    });
  }

  // AST Utilities ---------------------------------------------------------------
  // Some expressions, e.g. sequence and conditional expressions, are never
  // associated with template nodes, so their source locations are just a stub.
  // Container types like CompoundExpression also don't need a real location.
  const locStub = {
    source: "",
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 1, offset: 0 },
  };
  function createRoot(children, loc = locStub) {
    return {
      type: 0 ,
      children,
      helpers: [],
      components: [],
      directives: [],
      hoists: [],
      imports: [],
      cached: 0,
      temps: 0,
      codegenNode: undefined,
      loc,
    };
  }
  function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, loc = locStub) {
    if (context) {
      if (isBlock) {
        context.helper(OPEN_BLOCK);
        context.helper(CREATE_BLOCK);
      } else {
        context.helper(CREATE_VNODE);
      }
      if (directives) {
        context.helper(WITH_DIRECTIVES);
      }
    }
    return {
      type: 13 ,
      tag,
      props,
      children,
      patchFlag,
      dynamicProps,
      directives,
      isBlock,
      disableTracking,
      loc,
    };
  }
  function createArrayExpression(elements, loc = locStub) {
    return {
      type: 17 ,
      loc,
      elements,
    };
  }
  function createObjectExpression(properties, loc = locStub) {
    return {
      type: 15 ,
      loc,
      properties,
    };
  }
  function createObjectProperty(key, value) {
    return {
      type: 16 ,
      loc: locStub,
      key: isString(key) ? createSimpleExpression(key, true) : key,
      value,
    };
  }
  function createSimpleExpression(content, isStatic, loc = locStub, constType = 0 ) {
    return {
      type: 4 ,
      loc,
      content,
      isStatic,
      constType: isStatic ? 3  : constType,
    };
  }
  function createCompoundExpression(children, loc = locStub) {
    return {
      type: 8 ,
      loc,
      children,
    };
  }
  function createCallExpression(callee, args = [], loc = locStub) {
    return {
      type: 14 ,
      loc,
      callee,
      arguments: args,
    };
  }
  function createFunctionExpression(params, returns = undefined, newline = false, isSlot = false, loc = locStub) {
    return {
      type: 18 ,
      params,
      returns,
      newline,
      isSlot,
      loc,
    };
  }
  function createConditionalExpression(test, consequent, alternate, newline = true) {
    return {
      type: 19 ,
      test,
      consequent,
      alternate,
      newline,
      loc: locStub,
    };
  }
  function createCacheExpression(index, value, isVNode = false) {
    return {
      type: 20 ,
      index,
      value,
      isVNode,
      loc: locStub,
    };
  }

  const isStaticExp = (p) => p.type === 4  && p.isStatic;
  const isBuiltInType = (tag, expected) => tag === expected || tag === hyphenate(expected);
  function isCoreComponent(tag) {
    if (isBuiltInType(tag, "Teleport")) {
      return TELEPORT;
    } else if (isBuiltInType(tag, "Suspense")) {
      return SUSPENSE;
    } else if (isBuiltInType(tag, "KeepAlive")) {
      return KEEP_ALIVE;
    } else if (isBuiltInType(tag, "BaseTransition")) {
      return BASE_TRANSITION;
    }
  }
  const nonIdentifierRE = /^\d|[^\$\w]/;
  const isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
  const memberExpRE = /^[A-Za-z_$\xA0-\uFFFF][\w$\xA0-\uFFFF]*(?:\s*\.\s*[A-Za-z_$\xA0-\uFFFF][\w$\xA0-\uFFFF]*|\[[^\]]+\])*$/;
  const isMemberExpression = (path) => {
    if (!path) return false;
    return memberExpRE.test(path.trim());
  };
  function getInnerRange(loc, offset, length) {
    const source = loc.source.substr(offset, length);
    const newLoc = {
      source,
      start: advancePositionWithClone(loc.start, loc.source, offset),
      end: loc.end,
    };
    if (length != null) {
      newLoc.end = advancePositionWithClone(loc.start, loc.source, offset + length);
    }
    return newLoc;
  }
  function advancePositionWithClone(pos, source, numberOfCharacters = source.length) {
    return advancePositionWithMutation(extend({}, pos), source, numberOfCharacters);
  }
  // advance by mutation without cloning (for performance reasons), since this
  // gets called a lot in the parser
  function advancePositionWithMutation(pos, source, numberOfCharacters = source.length) {
    let linesCount = 0;
    let lastNewLinePos = -1;
    for (let i = 0; i < numberOfCharacters; i++) {
      if (source.charCodeAt(i) === 10 ) {
        linesCount++;
        lastNewLinePos = i;
      }
    }
    pos.offset += numberOfCharacters;
    pos.line += linesCount;
    pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
    return pos;
  }
  function assert(condition, msg) {
    
    if (!condition) {
      throw new Error(msg || `unexpected compiler condition`);
    }
  }
  function findDir(node, name, allowEmpty = false) {
    for (let i = 0; i < node.props.length; i++) {
      const p = node.props[i];
      if (p.type === 7  && (allowEmpty || p.exp) && (isString(name) ? p.name === name : name.test(p.name))) {
        return p;
      }
    }
  }
  function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
    for (let i = 0; i < node.props.length; i++) {
      const p = node.props[i];
      if (p.type === 6 ) {
        if (dynamicOnly) continue;
        if (p.name === name && (p.value || allowEmpty)) {
          return p;
        }
      } else if (p.name === "bind" && (p.exp || allowEmpty) && isBindKey(p.arg, name)) {
        return p;
      }
    }
  }
  function isBindKey(arg, name) {
    return !!(arg && isStaticExp(arg) && arg.content === name);
  }
  function hasDynamicKeyVBind(node) {
    return node.props.some(
      (p) =>
        p.type === 7  &&
        p.name === "bind" &&
        (!p.arg || // v-bind="obj"
          p.arg.type !== 4  || // v-bind:[_ctx.foo]
          !p.arg.isStatic) // v-bind:[foo]
    );
  }
  function isText(node) {
    return node.type === 5  || node.type === 2 ;
  }
  function isVSlot(p) {
    return p.type === 7  && p.name === "slot";
  }
  function isTemplateNode(node) {
    return node.type === 1  && node.tagType === 3 ;
  }
  function isSlotOutlet(node) {
    return node.type === 1  && node.tagType === 2 ;
  }
  function injectProp(node, prop, context) {
    let propsWithInjection;
    const props = node.type === 13  ? node.props : node.arguments[2];
    if (props == null || isString(props)) {
      propsWithInjection = createObjectExpression([prop]);
    } else if (props.type === 14 ) {
      // merged props... add ours
      // only inject key to object literal if it's the first argument so that
      // if doesn't override user provided keys
      const first = props.arguments[0];
      if (!isString(first) && first.type === 15 ) {
        first.properties.unshift(prop);
      } else {
        if (props.callee === TO_HANDLERS) {
          // #2366
          propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]);
        } else {
          props.arguments.unshift(createObjectExpression([prop]));
        }
      }
      !propsWithInjection && (propsWithInjection = props);
    } else if (props.type === 15 ) {
      let alreadyExists = false;
      // check existing key to avoid overriding user provided keys
      if (prop.key.type === 4 ) {
        const propKeyName = prop.key.content;
        alreadyExists = props.properties.some((p) => p.key.type === 4  && p.key.content === propKeyName);
      }
      if (!alreadyExists) {
        props.properties.unshift(prop);
      }
      propsWithInjection = props;
    } else {
      // single v-bind with expression, return a merged replacement
      propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]);
    }
    if (node.type === 13 ) {
      node.props = propsWithInjection;
    } else {
      node.arguments[2] = propsWithInjection;
    }
  }
  function toValidAssetId(name, type) {
    return `_${type}_${name.replace(/[^\w]/g, "_")}`;
  }

  // The default decoder only provides escapes for characters reserved as part of
  // the template syntax, and is only used if the custom renderer did not provide
  // a platform-specific decoder.
  const decodeRE = /&(gt|lt|amp|apos|quot);/g;
  const decodeMap = {
    gt: ">",
    lt: "<",
    amp: "&",
    apos: "'",
    quot: '"',
  };
  const defaultParserOptions = {
    delimiters: [`{{`, `}}`],
    getNamespace: () => 0 ,
    getTextMode: () => 0 ,
    isVoidTag: NO,
    isPreTag: NO,
    isCustomElement: NO,
    decodeEntities: (rawText) => rawText.replace(decodeRE, (_, p1) => decodeMap[p1]),
    onError: defaultOnError,
    comments: false,
  };
  function baseParse(content, options = {}) {
    const context = createParserContext(content, options);
    const start = getCursor(context);
    return createRoot(parseChildren(context, 0 , []), getSelection(context, start));
  }
  function createParserContext(content, rawOptions) {
    const options = extend({}, defaultParserOptions);
    for (const key in rawOptions) {
      // @ts-ignore
      options[key] = rawOptions[key] || defaultParserOptions[key];
    }
    return {
      options,
      column: 1,
      line: 1,
      offset: 0,
      originalSource: content,
      source: content,
      inPre: false,
      inVPre: false,
    };
  }
  function parseChildren(context, mode, ancestors) {
    const parent = last(ancestors);
    const ns = parent ? parent.ns : 0; 
    const nodes = [];
    while (!isEnd(context, mode, ancestors)) {
      const s = context.source;
      let node = undefined;
      if (mode === 0  || mode === 1 ) {
        if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
          // '{{'
          node = parseInterpolation(context, mode);
        } else if (mode === 0  && s[0] === "<") {
          // https://html.spec.whatwg.org/multipage/parsing.html#tag-open-state
          if (s.length === 1) {
            emitError(context, 5 , 1);
          } else if (s[1] === "!") {
            // https://html.spec.whatwg.org/multipage/parsing.html#markup-declaration-open-state
            if (startsWith(s, "<!--")) {
              node = parseComment(context);
            } else if (startsWith(s, "<!DOCTYPE")) {
              // Ignore DOCTYPE by a limitation.
              node = parseBogusComment(context);
            } else if (startsWith(s, "<![CDATA[")) {
              if (ns !== 0 ) {
                node = parseCDATA(context, ancestors);
              } else {
                emitError(context, 1 );
                node = parseBogusComment(context);
              }
            } else {
              emitError(context, 11 );
              node = parseBogusComment(context);
            }
          } else if (s[1] === "/") {
            // https://html.spec.whatwg.org/multipage/parsing.html#end-tag-open-state
            if (s.length === 2) {
              emitError(context, 5 , 2);
            } else if (s[2] === ">") {
              emitError(context, 14 , 2);
              advanceBy(context, 3);
              continue;
            } else if (/[a-z]/i.test(s[2])) {
              emitError(context, 23 );
              parseTag(context, 1 , parent);
              continue;
            } else {
              emitError(context, 12 , 2);
              node = parseBogusComment(context);
            }
          } else if (/[a-z]/i.test(s[1])) {
            node = parseElement(context, ancestors);
          } else if (s[1] === "?") {
            emitError(context, 21 , 1);
            node = parseBogusComment(context);
          } else {
            emitError(context, 12 , 1);
          }
        }
      }
      if (!node) {
        node = parseText(context, mode);
      }
      if (isArray(node)) {
        for (let i = 0; i < node.length; i++) {
          pushNode(nodes, node[i]);
        }
      } else {
        pushNode(nodes, node);
      }
    }
    // Whitespace management for more efficient output
    // (same as v2 whitespace: 'condense')
    let removedWhitespace = false;
    if (mode !== 2  && mode !== 1 ) {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (!context.inPre && node.type === 2 ) {
          if (!/[^\t\r\n\f ]/.test(node.content)) {
            const prev = nodes[i - 1];
            const next = nodes[i + 1];
            // If:
            // - the whitespace is the first or last node, or:
            // - the whitespace is adjacent to a comment, or:
            // - the whitespace is between two elements AND contains newline
            // Then the whitespace is ignored.
            if (!prev || !next || prev.type === 3  || next.type === 3  || (prev.type === 1  && next.type === 1  && /[\r\n]/.test(node.content))) {
              removedWhitespace = true;
              nodes[i] = null;
            } else {
              // Otherwise, condensed consecutive whitespace inside the text
              // down to a single space
              node.content = " ";
            }
          } else {
            node.content = node.content.replace(/[\t\r\n\f ]+/g, " ");
          }
        }
      }
      if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
        // remove leading newline per html spec
        // https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element
        const first = nodes[0];
        if (first && first.type === 2 ) {
          first.content = first.content.replace(/^\r?\n/, "");
        }
      }
    }
    return removedWhitespace ? nodes.filter(Boolean) : nodes;
  }
  function pushNode(nodes, node) {
    if (node.type === 2 ) {
      const prev = last(nodes);
      // Merge if both this and the previous node are text and those are
      // consecutive. This happens for cases like "a < b".
      if (prev && prev.type === 2  && prev.loc.end.offset === node.loc.start.offset) {
        prev.content += node.content;
        prev.loc.end = node.loc.end;
        prev.loc.source += node.loc.source;
        return;
      }
    }
    nodes.push(node);
  }
  function parseCDATA(context, ancestors) {
    advanceBy(context, 9);
    const nodes = parseChildren(context, 3 , ancestors);
    if (context.source.length === 0) {
      emitError(context, 6 );
    } else {
      advanceBy(context, 3);
    }
    return nodes;
  }
  function parseComment(context) {
    const start = getCursor(context);
    let content;
    // Regular comment.
    const match = /--(\!)?>/.exec(context.source);
    if (!match) {
      content = context.source.slice(4);
      advanceBy(context, context.source.length);
      emitError(context, 7 );
    } else {
      if (match.index <= 3) {
        emitError(context, 0 );
      }
      if (match[1]) {
        emitError(context, 10 );
      }
      content = context.source.slice(4, match.index);
      // Advancing with reporting nested comments.
      const s = context.source.slice(0, match.index);
      let prevIndex = 1,
        nestedIndex = 0;
      while ((nestedIndex = s.indexOf("<!--", prevIndex)) !== -1) {
        advanceBy(context, nestedIndex - prevIndex + 1);
        if (nestedIndex + 4 < s.length) {
          emitError(context, 16 );
        }
        prevIndex = nestedIndex + 1;
      }
      advanceBy(context, match.index + match[0].length - prevIndex + 1);
    }
    return {
      type: 3 ,
      content,
      loc: getSelection(context, start),
    };
  }
  function parseBogusComment(context) {
    const start = getCursor(context);
    const contentStart = context.source[1] === "?" ? 1 : 2;
    let content;
    const closeIndex = context.source.indexOf(">");
    if (closeIndex === -1) {
      content = context.source.slice(contentStart);
      advanceBy(context, context.source.length);
    } else {
      content = context.source.slice(contentStart, closeIndex);
      advanceBy(context, closeIndex + 1);
    }
    return {
      type: 3 ,
      content,
      loc: getSelection(context, start),
    };
  }
  function parseElement(context, ancestors) {
    // Start tag.
    const wasInPre = context.inPre;
    const wasInVPre = context.inVPre;
    const parent = last(ancestors);
    const element = parseTag(context, 0 , parent);
    const isPreBoundary = context.inPre && !wasInPre;
    const isVPreBoundary = context.inVPre && !wasInVPre;
    if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
      return element;
    }
    // Children.
    ancestors.push(element);
    const mode = context.options.getTextMode(element, parent);
    const children = parseChildren(context, mode, ancestors);
    ancestors.pop();
    element.children = children;
    // End tag.
    if (startsWithEndTagOpen(context.source, element.tag)) {
      parseTag(context, 1 , parent);
    } else {
      emitError(context, 24 , 0, element.loc.start);
      if (context.source.length === 0 && element.tag.toLowerCase() === "script") {
        const first = children[0];
        if (first && startsWith(first.loc.source, "<!--")) {
          emitError(context, 8 );
        }
      }
    }
    element.loc = getSelection(context, element.loc.start);
    if (isPreBoundary) {
      context.inPre = false;
    }
    if (isVPreBoundary) {
      context.inVPre = false;
    }
    return element;
  }
  const isSpecialTemplateDirective =  makeMap(`if,else,else-if,for,slot`);
  
  function parseTag(context, type, parent) {
    // Tag open.
    const start = getCursor(context);
    const match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
    const tag = match[1];
    const ns = context.options.getNamespace(tag, parent);
    advanceBy(context, match[0].length);
    advanceSpaces(context);
    // save current state in case we need to re-parse attributes with v-pre
    const cursor = getCursor(context);
    const currentSource = context.source;
    // Attributes.
    let props = parseAttributes(context, type);
    // check <pre> tag
    if (context.options.isPreTag(tag)) {
      context.inPre = true;
    }
    // check v-pre
    if (!context.inVPre && props.some((p) => p.type === 7  && p.name === "pre")) {
      context.inVPre = true;
      // reset context
      extend(context, cursor);
      context.source = currentSource;
      // re-parse attrs and filter out v-pre itself
      props = parseAttributes(context, type).filter((p) => p.name !== "v-pre");
    }
    // Tag close.
    let isSelfClosing = false;
    if (context.source.length === 0) {
      emitError(context, 9 );
    } else {
      isSelfClosing = startsWith(context.source, "/>");
      if (type === 1  && isSelfClosing) {
        emitError(context, 4 );
      }
      advanceBy(context, isSelfClosing ? 2 : 1);
    }
    let tagType = 0; 
    const options = context.options;
    if (!context.inVPre && !options.isCustomElement(tag)) {
      const hasVIs = props.some((p) => p.type === 7  && p.name === "is");
      if (options.isNativeTag && !hasVIs) {
        if (!options.isNativeTag(tag)) tagType = 1 ;
      } else if (hasVIs || isCoreComponent(tag) || (options.isBuiltInComponent && options.isBuiltInComponent(tag)) || /^[A-Z]/.test(tag) || tag === "component") {
        tagType = 1 ;
      }
      if (tag === "slot") {
        tagType = 2 ;
      } else if (
        tag === "template" &&
        props.some((p) => {
          return p.type === 7  && isSpecialTemplateDirective(p.name);
        })
      ) {
        tagType = 3 ;
      }
    }
    return {
      type: 1 ,
      ns,
      tag,
      tagType,
      props,
      isSelfClosing,
      children: [],
      loc: getSelection(context, start),
      codegenNode: undefined, // to be created during transform phase
    };
  }
  function parseAttributes(context, type) {
    const props = [];
    const attributeNames = new Set();
    while (context.source.length > 0 && !startsWith(context.source, ">") && !startsWith(context.source, "/>")) {
      if (startsWith(context.source, "/")) {
        emitError(context, 22 );
        advanceBy(context, 1);
        advanceSpaces(context);
        continue;
      }
      if (type === 1 ) {
        emitError(context, 3 );
      }
      const attr = parseAttribute(context, attributeNames);
      if (type === 0 ) {
        props.push(attr);
      }
      if (/^[^\t\r\n\f />]/.test(context.source)) {
        emitError(context, 15 );
      }
      advanceSpaces(context);
    }
    return props;
  }
  function parseAttribute(context, nameSet) {
    // Name.
    const start = getCursor(context);
    const match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
    const name = match[0];
    if (nameSet.has(name)) {
      emitError(context, 2 );
    }
    nameSet.add(name);
    if (name[0] === "=") {
      emitError(context, 19 );
    }
    {
      const pattern = /["'<]/g;
      let m;
      while ((m = pattern.exec(name))) {
        emitError(context, 17 , m.index);
      }
    }
    advanceBy(context, name.length);
    // Value
    let value = undefined;
    if (/^[\t\r\n\f ]*=/.test(context.source)) {
      advanceSpaces(context);
      advanceBy(context, 1);
      advanceSpaces(context);
      value = parseAttributeValue(context);
      if (!value) {
        emitError(context, 13 );
      }
    }
    const loc = getSelection(context, start);
    if (!context.inVPre && /^(v-|:|@|#)/.test(name)) {
      const match = /(?:^v-([a-z0-9-]+))?(?:(?::|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(name);
      const dirName = match[1] || (startsWith(name, ":") ? "bind" : startsWith(name, "@") ? "on" : "slot");
      let arg;
      if (match[2]) {
        const isSlot = dirName === "slot";
        const startOffset = name.lastIndexOf(match[2]);
        const loc = getSelection(context, getNewPosition(context, start, startOffset), getNewPosition(context, start, startOffset + match[2].length + ((isSlot && match[3]) || "").length));
        let content = match[2];
        let isStatic = true;
        if (content.startsWith("[")) {
          isStatic = false;
          if (!content.endsWith("]")) {
            emitError(context, 26 );
          }
          content = content.substr(1, content.length - 2);
        } else if (isSlot) {
          // #1241 special case for v-slot: a2020Vuetify relies extensively on slot
          // names containing dots. v-slot doesn't have any modifiers and a2020Vue 2.x
          // supports such usage so we are keeping it consistent with 2.x.
          content += match[3] || "";
        }
        arg = {
          type: 4 ,
          content,
          isStatic,
          constType: isStatic ? 3  : 0 ,
          loc,
        };
      }
      if (value && value.isQuoted) {
        const valueLoc = value.loc;
        valueLoc.start.offset++;
        valueLoc.start.column++;
        valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
        valueLoc.source = valueLoc.source.slice(1, -1);
      }
      return {
        type: 7 ,
        name: dirName,
        exp: value && {
          type: 4 ,
          content: value.content,
          isStatic: false,
          // Treat as non-constant by default. This can be potentially set to
          // other values by `transformExpression` to make it eligible for hoisting.
          constType: 0 ,
          loc: value.loc,
        },
        arg,
        modifiers: match[3] ? match[3].substr(1).split(".") : [],
        loc,
      };
    }
    return {
      type: 6 ,
      name,
      value: value && {
        type: 2 ,
        content: value.content,
        loc: value.loc,
      },
      loc,
    };
  }
  function parseAttributeValue(context) {
    const start = getCursor(context);
    let content;
    const quote = context.source[0];
    const isQuoted = quote === `"` || quote === `'`;
    if (isQuoted) {
      // Quoted value.
      advanceBy(context, 1);
      const endIndex = context.source.indexOf(quote);
      if (endIndex === -1) {
        content = parseTextData(context, context.source.length, 4 );
      } else {
        content = parseTextData(context, endIndex, 4 );
        advanceBy(context, 1);
      }
    } else {
      // Unquoted
      const match = /^[^\t\r\n\f >]+/.exec(context.source);
      if (!match) {
        return undefined;
      }
      const unexpectedChars = /["'<=`]/g;
      let m;
      while ((m = unexpectedChars.exec(match[0]))) {
        emitError(context, 18 , m.index);
      }
      content = parseTextData(context, match[0].length, 4 );
    }
    return { content, isQuoted, loc: getSelection(context, start) };
  }
  function parseInterpolation(context, mode) {
    const [open, close] = context.options.delimiters;
    const closeIndex = context.source.indexOf(close, open.length);
    if (closeIndex === -1) {
      emitError(context, 25 );
      return undefined;
    }
    const start = getCursor(context);
    advanceBy(context, open.length);
    const innerStart = getCursor(context);
    const innerEnd = getCursor(context);
    const rawContentLength = closeIndex - open.length;
    const rawContent = context.source.slice(0, rawContentLength);
    const preTrimContent = parseTextData(context, rawContentLength, mode);
    const content = preTrimContent.trim();
    const startOffset = preTrimContent.indexOf(content);
    if (startOffset > 0) {
      advancePositionWithMutation(innerStart, rawContent, startOffset);
    }
    const endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
    advancePositionWithMutation(innerEnd, rawContent, endOffset);
    advanceBy(context, close.length);
    return {
      type: 5 ,
      content: {
        type: 4 ,
        isStatic: false,
        // Set `isConstant` to false by default and will decide in transformExpression
        constType: 0 ,
        content,
        loc: getSelection(context, innerStart, innerEnd),
      },
      loc: getSelection(context, start),
    };
  }
  function parseText(context, mode) {
    const endTokens = ["<", context.options.delimiters[0]];
    if (mode === 3 ) {
      endTokens.push("]]>");
    }
    let endIndex = context.source.length;
    for (let i = 0; i < endTokens.length; i++) {
      const index = context.source.indexOf(endTokens[i], 1);
      if (index !== -1 && endIndex > index) {
        endIndex = index;
      }
    }
    const start = getCursor(context);
    const content = parseTextData(context, endIndex, mode);
    return {
      type: 2 ,
      content,
      loc: getSelection(context, start),
    };
  }
  
  function parseTextData(context, length, mode) {
    const rawText = context.source.slice(0, length);
    advanceBy(context, length);
    if (mode === 2  || mode === 3  || rawText.indexOf("&") === -1) {
      return rawText;
    } else {
      // DATA or RCDATA containing "&"". Entity decoding required.
      return context.options.decodeEntities(rawText, mode === 4 );
    }
  }
  function getCursor(context) {
    const { column, line, offset } = context;
    return { column, line, offset };
  }
  function getSelection(context, start, end) {
    end = end || getCursor(context);
    return {
      start,
      end,
      source: context.originalSource.slice(start.offset, end.offset),
    };
  }
  function last(xs) {
    return xs[xs.length - 1];
  }
  function startsWith(source, searchString) {
    return source.startsWith(searchString);
  }
  function advanceBy(context, numberOfCharacters) {
    const { source } = context;
    advancePositionWithMutation(context, source, numberOfCharacters);
    context.source = source.slice(numberOfCharacters);
  }
  function advanceSpaces(context) {
    const match = /^[\t\r\n\f ]+/.exec(context.source);
    if (match) {
      advanceBy(context, match[0].length);
    }
  }
  function getNewPosition(context, start, numberOfCharacters) {
    return advancePositionWithClone(start, context.originalSource.slice(start.offset, numberOfCharacters), numberOfCharacters);
  }
  function emitError(context, code, offset, loc = getCursor(context)) {
    if (offset) {
      loc.offset += offset;
      loc.column += offset;
    }
    context.options.onError(
      createCompilerError(code, {
        start: loc,
        end: loc,
        source: "",
      })
    );
  }
  function isEnd(context, mode, ancestors) {
    const s = context.source;
    switch (mode) {
      case 0 :
        if (startsWith(s, "</")) {
          // TODO: probably bad performance
          for (let i = ancestors.length - 1; i >= 0; --i) {
            if (startsWithEndTagOpen(s, ancestors[i].tag)) {
              return true;
            }
          }
        }
        break;
      case 1 :
      case 2 : {
        const parent = last(ancestors);
        if (parent && startsWithEndTagOpen(s, parent.tag)) {
          return true;
        }
        break;
      }
      case 3 :
        if (startsWith(s, "]]>")) {
          return true;
        }
        break;
    }
    return !s;
  }
  function startsWithEndTagOpen(source, tag) {
    return startsWith(source, "</") && source.substr(2, tag.length).toLowerCase() === tag.toLowerCase() && /[\t\r\n\f />]/.test(source[2 + tag.length] || ">");
  }

  function hoistStatic(root, context) {
    walk(
      root,
      context,
      // Root node is unfortunately non-hoistable due to potential parent
      // fallthrough attributes.
      isSingleElementRoot(root, root.children[0])
    );
  }
  function isSingleElementRoot(root, child) {
    const { children } = root;
    return children.length === 1 && child.type === 1  && !isSlotOutlet(child);
  }
  function walk(node, context, doNotHoistNode = false) {
    let hasHoistedNode = false;
    // Some transforms, e.g. transformAssetUrls from @a2020Vue/compiler-sfc, replaces
    // static bindings with expressions. These expressions are guaranteed to be
    // constant so they are still eligible for hoisting, but they are only
    // available at runtime and therefore cannot be evaluated ahead of time.
    // This is only a concern for pre-stringification (via transformHoist by
    // @a2020Vue/compiler-dom), but doing it here allows us to perform only one full
    // walk of the AST and allow `stringifyStatic` to stop walking as soon as its
    // stringficiation threshold is met.
    let canStringify = true;
    const { children } = node;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      // only plain elements & text calls are eligible for hoisting.
      if (child.type === 1  && child.tagType === 0 ) {
        const constantType = doNotHoistNode ? 0  : getConstantType(child, context);
        if (constantType > 0 ) {
          if (constantType < 3 ) {
            canStringify = false;
          }
          if (constantType >= 2 ) {
            child.codegenNode.patchFlag = -1  + ` `;
            child.codegenNode = context.hoist(child.codegenNode);
            hasHoistedNode = true;
            continue;
          }
        } else {
          // node may contain dynamic children, but its props may be eligible for
          // hoisting.
          const codegenNode = child.codegenNode;
          if (codegenNode.type === 13 ) {
            const flag = getPatchFlag(codegenNode);
            if ((!flag || flag === 512  || flag === 1)  && getGeneratedPropsConstantType(child, context) >= 2 ) {
              const props = getNodeProps(child);
              if (props) {
                codegenNode.props = context.hoist(props);
              }
            }
          }
        }
      } else if (child.type === 12 ) {
        const contentType = getConstantType(child.content, context);
        if (contentType > 0) {
          if (contentType < 3 ) {
            canStringify = false;
          }
          if (contentType >= 2 ) {
            child.codegenNode = context.hoist(child.codegenNode);
            hasHoistedNode = true;
          }
        }
      }
      // walk further
      if (child.type === 1 ) {
        const isComponent = child.tagType === 1; 
        if (isComponent) {
          context.scopes.vSlot++;
        }
        walk(child, context);
        if (isComponent) {
          context.scopes.vSlot--;
        }
      } else if (child.type === 11 ) {
        // Do not hoist v-for single child because it has to be a block
        walk(child, context, child.children.length === 1);
      } else if (child.type === 9 ) {
        for (let i = 0; i < child.branches.length; i++) {
          // Do not hoist v-if single child because it has to be a block
          walk(child.branches[i], context, child.branches[i].children.length === 1);
        }
      }
    }
    if (canStringify && hasHoistedNode && context.transformHoist) {
      context.transformHoist(children, context, node);
    }
  }
  function getConstantType(node, context) {
    const { constantCache } = context;
    switch (node.type) {
      case 1 :
        if (node.tagType !== 0 ) {
          return 0 ;
        }
        const cached = constantCache.get(node);
        if (cached !== undefined) {
          return cached;
        }
        const codegenNode = node.codegenNode;
        if (codegenNode.type !== 13 ) {
          return 0 ;
        }
        const flag = getPatchFlag(codegenNode);
        if (!flag) {
          let returnType = 3; 
          // Element itself has no patch flag. However we still need to check:
          // 1. Even for a node with no patch flag, it is possible for it to contain
          // non-hoistable expressions that refers to scope variables, e.g. compiler
          // injected keys or cached event handlers. Therefore we need to always
          // check the codegenNode's props to be sure.
          const generatedPropsType = getGeneratedPropsConstantType(node, context);
          if (generatedPropsType === 0 ) {
            constantCache.set(node, 0 );
            return 0 ;
          }
          if (generatedPropsType < returnType) {
            returnType = generatedPropsType;
          }
          // 2. its children.
          for (let i = 0; i < node.children.length; i++) {
            const childType = getConstantType(node.children[i], context);
            if (childType === 0 ) {
              constantCache.set(node, 0 );
              return 0 ;
            }
            if (childType < returnType) {
              returnType = childType;
            }
          }
          // 3. if the type is not already CAN_SKIP_PATCH which is the lowest non-0
          // type, check if any of the props can cause the type to be lowered
          // we can skip can_patch because it's guaranteed by the absence of a
          // patchFlag.
          if (returnType > 1 ) {
            for (let i = 0; i < node.props.length; i++) {
              const p = node.props[i];
              if (p.type === 7  && p.name === "bind" && p.exp) {
                const expType = getConstantType(p.exp, context);
                if (expType === 0 ) {
                  constantCache.set(node, 0 );
                  return 0 ;
                }
                if (expType < returnType) {
                  returnType = expType;
                }
              }
            }
          }
          // only svg/foreignObject could be block here, however if they are
          // static then they don't need to be blocks since there will be no
          // nested updates.
          if (codegenNode.isBlock) {
            context.removeHelper(OPEN_BLOCK);
            context.removeHelper(CREATE_BLOCK);
            codegenNode.isBlock = false;
            context.helper(CREATE_VNODE);
          }
          constantCache.set(node, returnType);
          return returnType;
        } else {
          constantCache.set(node, 0 );
          return 0 ;
        }
      case 2 :
      case 3 :
        return 3 ;
      case 9 :
      case 11 :
      case 10 :
        return 0 ;
      case 5 :
      case 12 :
        return getConstantType(node.content, context);
      case 4 :
        return node.constType;
      case 8 :
        let returnType = 3; 
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (isString(child) || isSymbol(child)) {
            continue;
          }
          const childType = getConstantType(child, context);
          if (childType === 0 ) {
            return 0 ;
          } else if (childType < returnType) {
            returnType = childType;
          }
        }
        return returnType;
      default:
        return 0 ;
    }
  }
  function getGeneratedPropsConstantType(node, context) {
    let returnType = 3; 
    const props = getNodeProps(node);
    if (props && props.type === 15 ) {
      const { properties } = props;
      for (let i = 0; i < properties.length; i++) {
        const { key, value } = properties[i];
        const keyType = getConstantType(key, context);
        if (keyType === 0 ) {
          return keyType;
        }
        if (keyType < returnType) {
          returnType = keyType;
        }
        if (value.type !== 4 ) {
          return 0 ;
        }
        const valueType = getConstantType(value, context);
        if (valueType === 0 ) {
          return valueType;
        }
        if (valueType < returnType) {
          returnType = valueType;
        }
      }
    }
    return returnType;
  }
  function getNodeProps(node) {
    const codegenNode = node.codegenNode;
    if (codegenNode.type === 13 ) {
      return codegenNode.props;
    }
  }
  function getPatchFlag(node) {
    const flag = node.patchFlag;
    return flag ? parseInt(flag, 10) : undefined;
  }

  function createTransformContext(
    root,
    {
      filename = "",
      prefixIdentifiers = false,
      hoistStatic = false,
      cacheHandlers = false,
      nodeTransforms = [],
      directiveTransforms = {},
      transformHoist = null,
      isBuiltInComponent = NOOP,
      isCustomElement = NOOP,
      expressionPlugins = [],
      scopeId = null,
      slotted = true,
      ssr = false,
      ssrCssVars = ``,
      bindingMetadata = EMPTY_OBJ,
      inline = false,
      isTS = false,
      onError = defaultOnError,
    }
  ) {
    const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
    const context = {
      // options
      selfName: nameMatch && capitalize(camelize(nameMatch[1])),
      prefixIdentifiers,
      hoistStatic,
      cacheHandlers,
      nodeTransforms,
      directiveTransforms,
      transformHoist,
      isBuiltInComponent,
      isCustomElement,
      expressionPlugins,
      scopeId,
      slotted,
      ssr,
      ssrCssVars,
      bindingMetadata,
      inline,
      isTS,
      onError,
      // state
      root,
      helpers: new Map(),
      components: new Set(),
      directives: new Set(),
      hoists: [],
      imports: [],
      constantCache: new Map(),
      temps: 0,
      cached: 0,
      identifiers: Object.create(null),
      scopes: {
        vFor: 0,
        vSlot: 0,
        vPre: 0,
        vOnce: 0,
      },
      parent: null,
      currentNode: root,
      childIndex: 0,
      // methods
      helper(name) {
        const count = context.helpers.get(name) || 0;
        context.helpers.set(name, count + 1);
        return name;
      },
      removeHelper(name) {
        const count = context.helpers.get(name);
        if (count) {
          const currentCount = count - 1;
          if (!currentCount) {
            context.helpers.delete(name);
          } else {
            context.helpers.set(name, currentCount);
          }
        }
      },
      helperString(name) {
        return `_${helperNameMap[context.helper(name)]}`;
      },
      replaceNode(node) {
        
        {
          if (!context.currentNode) {
            throw new Error(`Node being replaced is already removed.`);
          }
          if (!context.parent) {
            throw new Error(`Cannot replace root node.`);
          }
        }
        context.parent.children[context.childIndex] = context.currentNode = node;
      },
      removeNode(node) {
        if (!context.parent) {
          throw new Error(`Cannot remove root node.`);
        }
        const list = context.parent.children;
        const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
        
        if (removalIndex < 0) {
          throw new Error(`node being removed is not a child of current parent`);
        }
        if (!node || node === context.currentNode) {
          // current node removed
          context.currentNode = null;
          context.onNodeRemoved();
        } else {
          // sibling node removed
          if (context.childIndex > removalIndex) {
            context.childIndex--;
            context.onNodeRemoved();
          }
        }
        context.parent.children.splice(removalIndex, 1);
      },
      onNodeRemoved: () => {},
      addIdentifiers(exp) {},
      removeIdentifiers(exp) {},
      hoist(exp) {
        context.hoists.push(exp);
        const identifier = createSimpleExpression(`_hoisted_${context.hoists.length}`, false, exp.loc, 2 );
        identifier.hoisted = exp;
        return identifier;
      },
      cache(exp, isVNode = false) {
        return createCacheExpression(++context.cached, exp, isVNode);
      },
    };
    return context;
  }
  function transform(root, options) {
    const context = createTransformContext(root, options);
    traverseNode(root, context);
    if (options.hoistStatic) {
      hoistStatic(root, context);
    }
    if (!options.ssr) {
      createRootCodegen(root, context);
    }
    // finalize meta information
    root.helpers = [...context.helpers.keys()];
    root.components = [...context.components];
    root.directives = [...context.directives];
    root.imports = context.imports;
    root.hoists = context.hoists;
    root.temps = context.temps;
    root.cached = context.cached;
  }
  function createRootCodegen(root, context) {
    const { helper, removeHelper } = context;
    const { children } = root;
    if (children.length === 1) {
      const child = children[0];
      // if the single child is an element, turn it into a block.
      if (isSingleElementRoot(root, child) && child.codegenNode) {
        // single element root is never hoisted so codegenNode will never be
        // SimpleExpressionNode
        const codegenNode = child.codegenNode;
        if (codegenNode.type === 13 ) {
          if (!codegenNode.isBlock) {
            removeHelper(CREATE_VNODE);
            codegenNode.isBlock = true;
            helper(OPEN_BLOCK);
            helper(CREATE_BLOCK);
          }
        }
        root.codegenNode = codegenNode;
      } else {
        // - single <slot/>, IfNode, ForNode: already blocks.
        // - single text node: always patched.
        // root codegen falls through via genNode()
        root.codegenNode = child;
      }
    } else if (children.length > 1) {
      // root has multiple nodes - return a fragment block.
      let patchFlag = 64; 
      let patchFlagText = PatchFlagNames[64 ];
      // check if the fragment actually contains a single valid child with
      // the rest being comments
      if (children.filter((c) => c.type !== 3 ).length === 1) {
        patchFlag |= 2048 ;
        patchFlagText += `, ${PatchFlagNames[2048 ]}`;
      }
      root.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, root.children, patchFlag + ` `, undefined, undefined, true);
    } else;
  }
  function traverseChildren(parent, context) {
    let i = 0;
    const nodeRemoved = () => {
      i--;
    };
    for (; i < parent.children.length; i++) {
      const child = parent.children[i];
      if (isString(child)) continue;
      context.parent = parent;
      context.childIndex = i;
      context.onNodeRemoved = nodeRemoved;
      traverseNode(child, context);
    }
  }
  function traverseNode(node, context) {
    context.currentNode = node;
    // apply transform plugins
    const { nodeTransforms } = context;
    const exitFns = [];
    for (let i = 0; i < nodeTransforms.length; i++) {
      const onExit = nodeTransforms[i](node, context);
      if (onExit) {
        if (isArray(onExit)) {
          exitFns.push(...onExit);
        } else {
          exitFns.push(onExit);
        }
      }
      if (!context.currentNode) {
        // node was removed
        return;
      } else {
        // node may have been replaced
        node = context.currentNode;
      }
    }
    switch (node.type) {
      case 3 :
        if (!context.ssr) {
          // inject import for the Comment symbol, which is needed for creating
          // comment nodes with `createVNode`
          context.helper(CREATE_COMMENT);
        }
        break;
      case 5 :
        // no need to traverse, but we need to inject toString helper
        if (!context.ssr) {
          context.helper(TO_DISPLAY_STRING);
        }
        break;
      // for container types, further traverse downwards
      case 9 :
        for (let i = 0; i < node.branches.length; i++) {
          traverseNode(node.branches[i], context);
        }
        break;
      case 10 :
      case 11 :
      case 1 :
      case 0 :
        traverseChildren(node, context);
        break;
    }
    // exit transforms
    context.currentNode = node;
    let i = exitFns.length;
    while (i--) {
      exitFns[i]();
    }
  }
  function createStructuralDirectiveTransform(name, fn) {
    const matches = isString(name) ? (n) => n === name : (n) => name.test(n);
    return (node, context) => {
      if (node.type === 1 ) {
        const { props } = node;
        // structural directive transforms are not concerned with slots
        // as they are handled separately in vSlot.ts
        if (node.tagType === 3  && props.some(isVSlot)) {
          return;
        }
        const exitFns = [];
        for (let i = 0; i < props.length; i++) {
          const prop = props[i];
          if (prop.type === 7  && matches(prop.name)) {
            // structural directives are removed to avoid infinite recursion
            // also we remove them *before* applying so that it can further
            // traverse itself in case it moves the node around
            props.splice(i, 1);
            i--;
            const onExit = fn(node, prop, context);
            if (onExit) exitFns.push(onExit);
          }
        }
        return exitFns;
      }
    };
  }

  const PURE_ANNOTATION = ``;
  function createCodegenContext(
    ast,
    {
      mode = "function",
      prefixIdentifiers = mode === "module",
      sourceMap = false,
      filename = `template.a2020Vue.html`,
      scopeId = null,
      optimizeImports = false,
      runtimeGlobalName = `a2020Vue`,
      runtimeModuleName = `a2020Vue`,
      ssr = false,
    }
  ) {
    const context = {
      mode,
      prefixIdentifiers,
      sourceMap,
      filename,
      scopeId,
      optimizeImports,
      runtimeGlobalName,
      runtimeModuleName,
      ssr,
      source: ast.loc.source,
      code: ``,
      column: 1,
      line: 1,
      offset: 0,
      indentLevel: 0,
      pure: false,
      map: undefined,
      helper(key) {
        return `_${helperNameMap[key]}`;
      },
      push(code, node) {
        context.code += code;
      },
      indent() {
        newline(++context.indentLevel);
      },
      deindent(withoutNewLine = false) {
        if (withoutNewLine) {
          --context.indentLevel;
        } else {
          newline(--context.indentLevel);
        }
      },
      newline() {
        newline(context.indentLevel);
      },
    };
    function newline(n) {
      context.push("\n" + `  `.repeat(n));
    }
    return context;
  }
  function generate(ast, options = {}) {
    const context = createCodegenContext(ast, options);
    if (options.onContextCreated) options.onContextCreated(context);
    const { mode, push, prefixIdentifiers, indent, deindent, newline, scopeId, ssr } = context;
    const hasHelpers = ast.helpers.length > 0;
    const useWithBlock = !prefixIdentifiers && mode !== "module";
    // preambles
    // in setup() inline mode, the preamble is generated in a sub context
    // and returned separately.
    const preambleContext = context;
    {
      genFunctionPreamble(ast, preambleContext);
    }
    // enter render function
    const functionName = ssr ? `ssrRender` : `render`;
    const args = ssr ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"];
    const signature = args.join(", ");
    {
      push(`function ${functionName}(${signature}) {`);
    }
    indent();
    if (useWithBlock) {
      push(`with (_ctx) {`);
      indent();
      // function mode const declarations should be inside with block
      // also they should be renamed to avoid collision with user properties
      if (hasHelpers) {
        push(`const { ${ast.helpers.map((s) => `${helperNameMap[s]}: _${helperNameMap[s]}`).join(", ")} } = _a2020Vue`);
        push(`\n`);
        newline();
      }
    }
    // generate asset resolution statements
    if (ast.components.length) {
      genAssets(ast.components, "component", context);
      if (ast.directives.length || ast.temps > 0) {
        newline();
      }
    }
    if (ast.directives.length) {
      genAssets(ast.directives, "directive", context);
      if (ast.temps > 0) {
        newline();
      }
    }
    if (ast.temps > 0) {
      push(`let `);
      for (let i = 0; i < ast.temps; i++) {
        push(`${i > 0 ? `, ` : ``}_temp${i}`);
      }
    }
    if (ast.components.length || ast.directives.length || ast.temps) {
      push(`\n`);
      newline();
    }
    // generate the VNode tree expression
    if (!ssr) {
      push(`return `);
    }
    if (ast.codegenNode) {
      genNode(ast.codegenNode, context);
    } else {
      push(`null`);
    }
    if (useWithBlock) {
      deindent();
      push(`}`);
    }
    deindent();
    push(`}`);
    return {
      ast,
      code: context.code,
      preamble: ``,
      // SourceMapGenerator does have toJSON() method but it's not in the types
      map: context.map ? context.map.toJSON() : undefined,
    };
  }
  function genFunctionPreamble(ast, context) {
    const { ssr, prefixIdentifiers, push, newline, runtimeModuleName, runtimeGlobalName } = context;
    const a2020VueBinding = runtimeGlobalName;
    const aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;
    // Generate const declaration for helpers
    // In prefix mode, we place the const declaration at top so it's done
    // only once; But if we not prefixing, we place the declaration inside the
    // with block so it doesn't incur the `in` check cost for every helper access.
    if (ast.helpers.length > 0) {
      {
        // "with" mode.
        // save a2020Vue in a separate variable to avoid collision
        push(`const _a2020Vue = ${a2020VueBinding}\n`);
        // in "with" mode, helpers are declared inside the with block to avoid
        // has check cost, but hoists are lifted out of the function - we need
        // to provide the helper here.
        if (ast.hoists.length) {
          const staticHelpers = [CREATE_VNODE, CREATE_COMMENT, CREATE_TEXT, CREATE_STATIC]
            .filter((helper) => ast.helpers.includes(helper))
            .map(aliasHelper)
            .join(", ");
          push(`const { ${staticHelpers} } = _a2020Vue\n`);
        }
      }
    }
    genHoists(ast.hoists, context);
    newline();
    push(`return `);
  }
  function genAssets(assets, type, { helper, push, newline }) {
    const resolver = helper(type === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);
    for (let i = 0; i < assets.length; i++) {
      let id = assets[i];
      // potential component implicit self-reference inferred from SFC filename
      const maybeSelfReference = id.endsWith("__self");
      if (maybeSelfReference) {
        id = id.slice(0, -6);
      }
      push(`const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)}${maybeSelfReference ? `, true` : ``})`);
      if (i < assets.length - 1) {
        newline();
      }
    }
  }
  function genHoists(hoists, context) {
    if (!hoists.length) {
      return;
    }
    context.pure = true;
    const { push, newline, helper, scopeId, mode } = context;
    newline();
    hoists.forEach((exp, i) => {
      if (exp) {
        push(`const _hoisted_${i + 1} = `);
        genNode(exp, context);
        newline();
      }
    });
    context.pure = false;
  }
  function isText$1(n) {
    return isString(n) || n.type === 4  || n.type === 2  || n.type === 5  || n.type === 8 ;
  }
  function genNodeListAsArray(nodes, context) {
    const multilines = nodes.length > 3 || nodes.some((n) => isArray(n) || !isText$1(n));
    context.push(`[`);
    multilines && context.indent();
    genNodeList(nodes, context, multilines);
    multilines && context.deindent();
    context.push(`]`);
  }
  function genNodeList(nodes, context, multilines = false, comma = true) {
    const { push, newline } = context;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (isString(node)) {
        push(node);
      } else if (isArray(node)) {
        genNodeListAsArray(node, context);
      } else {
        genNode(node, context);
      }
      if (i < nodes.length - 1) {
        if (multilines) {
          comma && push(",");
          newline();
        } else {
          comma && push(", ");
        }
      }
    }
  }
  function genNode(node, context) {
    if (isString(node)) {
      context.push(node);
      return;
    }
    if (isSymbol(node)) {
      context.push(context.helper(node));
      return;
    }
    switch (node.type) {
      case 1 :
      case 9 :
      case 11 :
        assert(node.codegenNode != null, `Codegen node is missing for element/if/for node. ` + `Apply appropriate transforms first.`);
        genNode(node.codegenNode, context);
        break;
      case 2 :
        genText(node, context);
        break;
      case 4 :
        genExpression(node, context);
        break;
      case 5 :
        genInterpolation(node, context);
        break;
      case 12 :
        genNode(node.codegenNode, context);
        break;
      case 8 :
        genCompoundExpression(node, context);
        break;
      case 3 :
        genComment(node, context);
        break;
      case 13 :
        genVNodeCall(node, context);
        break;
      case 14 :
        genCallExpression(node, context);
        break;
      case 15 :
        genObjectExpression(node, context);
        break;
      case 17 :
        genArrayExpression(node, context);
        break;
      case 18 :
        genFunctionExpression(node, context);
        break;
      case 19 :
        genConditionalExpression(node, context);
        break;
      case 20 :
        genCacheExpression(node, context);
        break;
      // SSR only types
      case 21 :
        break;
      case 22 :
        break;
      case 23 :
        break;
      case 24 :
        break;
      case 25 :
        break;
      case 26 :
        break;
      
      case 10 :
        // noop
        break;
      default: {
        assert(false, `unhandled codegen node type: ${node.type}`);
        // make sure we exhaust all possible types
        const exhaustiveCheck = node;
        return exhaustiveCheck;
      }
    }
  }
  function genText(node, context) {
    context.push(JSON.stringify(node.content), node);
  }
  function genExpression(node, context) {
    const { content, isStatic } = node;
    context.push(isStatic ? JSON.stringify(content) : content, node);
  }
  function genInterpolation(node, context) {
    const { push, helper, pure } = context;
    if (pure) push(PURE_ANNOTATION);
    push(`${helper(TO_DISPLAY_STRING)}(`);
    genNode(node.content, context);
    push(`)`);
  }
  function genCompoundExpression(node, context) {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (isString(child)) {
        context.push(child);
      } else {
        genNode(child, context);
      }
    }
  }
  function genExpressionAsPropertyKey(node, context) {
    const { push } = context;
    if (node.type === 8 ) {
      push(`[`);
      genCompoundExpression(node, context);
      push(`]`);
    } else if (node.isStatic) {
      // only quote keys if necessary
      const text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
      push(text, node);
    } else {
      push(`[${node.content}]`, node);
    }
  }
  function genComment(node, context) {
    {
      const { push, helper, pure } = context;
      if (pure) {
        push(PURE_ANNOTATION);
      }
      push(`${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`, node);
    }
  }
  function genVNodeCall(node, context) {
    const { push, helper, pure } = context;
    const { tag, props, children, patchFlag, dynamicProps, directives, isBlock, disableTracking } = node;
    if (directives) {
      push(helper(WITH_DIRECTIVES) + `(`);
    }
    if (isBlock) {
      push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
    }
    if (pure) {
      push(PURE_ANNOTATION);
    }
    push(helper(isBlock ? CREATE_BLOCK : CREATE_VNODE) + `(`, node);
    genNodeList(genNullableArgs([tag, props, children, patchFlag, dynamicProps]), context);
    push(`)`);
    if (isBlock) {
      push(`)`);
    }
    if (directives) {
      push(`, `);
      genNode(directives, context);
      push(`)`);
    }
  }
  function genNullableArgs(args) {
    let i = args.length;
    while (i--) {
      if (args[i] != null) break;
    }
    return args.slice(0, i + 1).map((arg) => arg || `null`);
  }
  // JavaScript
  function genCallExpression(node, context) {
    const { push, helper, pure } = context;
    const callee = isString(node.callee) ? node.callee : helper(node.callee);
    if (pure) {
      push(PURE_ANNOTATION);
    }
    push(callee + `(`, node);
    genNodeList(node.arguments, context);
    push(`)`);
  }
  function genObjectExpression(node, context) {
    const { push, indent, deindent, newline } = context;
    const { properties } = node;
    if (!properties.length) {
      push(`{}`, node);
      return;
    }
    const multilines = properties.length > 1 || properties.some((p) => p.value.type !== 4 );
    push(multilines ? `{` : `{ `);
    multilines && indent();
    for (let i = 0; i < properties.length; i++) {
      const { key, value } = properties[i];
      // key
      genExpressionAsPropertyKey(key, context);
      push(`: `);
      // value
      genNode(value, context);
      if (i < properties.length - 1) {
        // will only reach this if it's multilines
        push(`,`);
        newline();
      }
    }
    multilines && deindent();
    push(multilines ? `}` : ` }`);
  }
  function genArrayExpression(node, context) {
    genNodeListAsArray(node.elements, context);
  }
  function genFunctionExpression(node, context) {
    const { push, indent, deindent, scopeId, mode } = context;
    const { params, returns, body, newline, isSlot } = node;
    if (isSlot) {
      // wrap slot functions with owner context
      push(`_${helperNameMap[WITH_CTX]}(`);
    }
    push(`(`, node);
    if (isArray(params)) {
      genNodeList(params, context);
    } else if (params) {
      genNode(params, context);
    }
    push(`) => `);
    if (newline || body) {
      push(`{`);
      indent();
    }
    if (returns) {
      if (newline) {
        push(`return `);
      }
      if (isArray(returns)) {
        genNodeListAsArray(returns, context);
      } else {
        genNode(returns, context);
      }
    } else if (body) {
      genNode(body, context);
    }
    if (newline || body) {
      deindent();
      push(`}`);
    }
    if (isSlot) {
      push(`)`);
    }
  }
  function genConditionalExpression(node, context) {
    const { test, consequent, alternate, newline: needNewline } = node;
    const { push, indent, deindent, newline } = context;
    if (test.type === 4 ) {
      const needsParens = !isSimpleIdentifier(test.content);
      needsParens && push(`(`);
      genExpression(test, context);
      needsParens && push(`)`);
    } else {
      push(`(`);
      genNode(test, context);
      push(`)`);
    }
    needNewline && indent();
    context.indentLevel++;
    needNewline || push(` `);
    push(`? `);
    genNode(consequent, context);
    context.indentLevel--;
    needNewline && newline();
    needNewline || push(` `);
    push(`: `);
    const isNested = alternate.type === 19; 
    if (!isNested) {
      context.indentLevel++;
    }
    genNode(alternate, context);
    if (!isNested) {
      context.indentLevel--;
    }
    needNewline && deindent(true );
  }
  function genCacheExpression(node, context) {
    const { push, helper, indent, deindent, newline } = context;
    push(`_cache[${node.index}] || (`);
    if (node.isVNode) {
      indent();
      push(`${helper(SET_BLOCK_TRACKING)}(-1),`);
      newline();
    }
    push(`_cache[${node.index}] = `);
    genNode(node.value, context);
    if (node.isVNode) {
      push(`,`);
      newline();
      push(`${helper(SET_BLOCK_TRACKING)}(1),`);
      newline();
      push(`_cache[${node.index}]`);
      deindent();
    }
    push(`)`);
  }

  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  const prohibitedKeywordRE = new RegExp(
    "\\b" +
      (
        "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const," +
        "super,throw,while,yield,delete,export,import,return,switch,default," +
        "extends,finally,continue,debugger,function,arguments,typeof,void"
      )
        .split(",")
        .join("\\b|\\b") +
      "\\b"
  );
  // strip strings in expressions
  const stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
  
  function validateBrowserExpression(node, context, asParams = false, asRawStatements = false) {
    const exp = node.content;
    // empty expressions are validated per-directive since some directives
    // do allow empty expressions.
    if (!exp.trim()) {
      return;
    }
    try {
      new Function(asRawStatements ? ` ${exp} ` : `return ${asParams ? `(${exp}) => {}` : `(${exp})`}`);
    } catch (e) {
      let message = e.message;
      const keywordMatch = exp.replace(stripStringRE, "").match(prohibitedKeywordRE);
      if (keywordMatch) {
        message = `avoid using JavaScript keyword as property name: "${keywordMatch[0]}"`;
      }
      context.onError(createCompilerError(43 , node.loc, undefined, message));
    }
  }

  const transformExpression = (node, context) => {
    if (node.type === 5 ) {
      node.content = processExpression(node.content, context);
    } else if (node.type === 1 ) {
      // handle directives on element
      for (let i = 0; i < node.props.length; i++) {
        const dir = node.props[i];
        // do not process for v-on & v-for since they are special handled
        if (dir.type === 7  && dir.name !== "for") {
          const exp = dir.exp;
          const arg = dir.arg;
          // do not process exp if this is v-on:arg - we need special handling
          // for wrapping inline statements.
          if (exp && exp.type === 4  && !(dir.name === "on" && arg)) {
            dir.exp = processExpression(
              exp,
              context,
              // slot args must be processed as function params
              dir.name === "slot"
            );
          }
          if (arg && arg.type === 4  && !arg.isStatic) {
            dir.arg = processExpression(arg, context);
          }
        }
      }
    }
  };
  // Important: since this function uses Node.js only dependencies, it should
  // always be used with a leading !true check so that it can be
  // tree-shaken from the browser build.
  function processExpression(
    node,
    context,
    // some expressions like v-slot props & v-for aliases should be parsed as
    // function params
    asParams = false,
    // v-on handler values may contain multiple statements
    asRawStatements = false
  ) {
    {
      {
        // simple in-browser validation (same logic in 2.x)
        validateBrowserExpression(node, context, asParams, asRawStatements);
      }
      return node;
    }
  }

  const transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, (node, dir, context) => {
    return processIf(node, dir, context, (ifNode, branch, isRoot) => {
      // #1587: We need to dynamically increment the key based on the current
      // node's sibling nodes, since chained v-if/else branches are
      // rendered at the same depth
      const siblings = context.parent.children;
      let i = siblings.indexOf(ifNode);
      let key = 0;
      while (i-- >= 0) {
        const sibling = siblings[i];
        if (sibling && sibling.type === 9 ) {
          key += sibling.branches.length;
        }
      }
      // Exit callback. Complete the codegenNode when all children have been
      // transformed.
      return () => {
        if (isRoot) {
          ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
        } else {
          // attach this branch's codegen node to the v-if root.
          const parentCondition = getParentCondition(ifNode.codegenNode);
          parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
        }
      };
    });
  });
  // target-agnostic transform used for both Client and SSR
  function processIf(node, dir, context, processCodegen) {
    if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
      const loc = dir.exp ? dir.exp.loc : node.loc;
      context.onError(createCompilerError(27 , dir.loc));
      dir.exp = createSimpleExpression(`true`, false, loc);
    }
    if (dir.exp) {
      validateBrowserExpression(dir.exp, context);
    }
    if (dir.name === "if") {
      const branch = createIfBranch(node, dir);
      const ifNode = {
        type: 9 ,
        loc: node.loc,
        branches: [branch],
      };
      context.replaceNode(ifNode);
      if (processCodegen) {
        return processCodegen(ifNode, branch, true);
      }
    } else {
      // locate the adjacent v-if
      const siblings = context.parent.children;
      const comments = [];
      let i = siblings.indexOf(node);
      while (i-- >= -1) {
        const sibling = siblings[i];
        if (sibling && sibling.type === 3 ) {
          context.removeNode(sibling);
          comments.unshift(sibling);
          continue;
        }
        if (sibling && sibling.type === 2  && !sibling.content.trim().length) {
          context.removeNode(sibling);
          continue;
        }
        if (sibling && sibling.type === 9 ) {
          // move the node to the if node's branches
          context.removeNode();
          const branch = createIfBranch(node, dir);
          if (comments.length) {
            branch.children = [...comments, ...branch.children];
          }
          // check if user is forcing same key on different branches
          {
            const key = branch.userKey;
            if (key) {
              sibling.branches.forEach(({ userKey }) => {
                if (isSameKey(userKey, key)) {
                  context.onError(createCompilerError(28 , branch.userKey.loc));
                }
              });
            }
          }
          sibling.branches.push(branch);
          const onExit = processCodegen && processCodegen(sibling, branch, false);
          // since the branch was removed, it will not be traversed.
          // make sure to traverse here.
          traverseNode(branch, context);
          // call on exit
          if (onExit) onExit();
          // make sure to reset currentNode after traversal to indicate this
          // node has been removed.
          context.currentNode = null;
        } else {
          context.onError(createCompilerError(29 , node.loc));
        }
        break;
      }
    }
  }
  function createIfBranch(node, dir) {
    return {
      type: 10 ,
      loc: node.loc,
      condition: dir.name === "else" ? undefined : dir.exp,
      children: node.tagType === 3  && !findDir(node, "for") ? node.children : [node],
      userKey: findProp(node, `key`),
    };
  }
  function createCodegenNodeForBranch(branch, keyIndex, context) {
    if (branch.condition) {
      return createConditionalExpression(
        branch.condition,
        createChildrenCodegenNode(branch, keyIndex, context),
        // make sure to pass in asBlock: true so that the comment node call
        // closes the current block.
        createCallExpression(context.helper(CREATE_COMMENT), ['"v-if"', "true"])
      );
    } else {
      return createChildrenCodegenNode(branch, keyIndex, context);
    }
  }
  function createChildrenCodegenNode(branch, keyIndex, context) {
    const { helper, removeHelper } = context;
    const keyProperty = createObjectProperty(`key`, createSimpleExpression(`${keyIndex}`, false, locStub, 2 ));
    const { children } = branch;
    const firstChild = children[0];
    const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1; 
    if (needFragmentWrapper) {
      if (children.length === 1 && firstChild.type === 11 ) {
        // optimize away nested fragments when child is a ForNode
        const vnodeCall = firstChild.codegenNode;
        injectProp(vnodeCall, keyProperty, context);
        return vnodeCall;
      } else {
        let patchFlag = 64; 
        let patchFlagText = PatchFlagNames[64 ];
        // check if the fragment actually contains a single valid child with
        // the rest being comments
        if (children.filter((c) => c.type !== 3 ).length === 1) {
          patchFlag |= 2048 ;
          patchFlagText += `, ${PatchFlagNames[2048 ]}`;
        }
        return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([keyProperty]), children, patchFlag + ` `, undefined, undefined, true, false, branch.loc);
      }
    } else {
      const vnodeCall = firstChild.codegenNode;
      // Change createVNode to createBlock.
      if (vnodeCall.type === 13  && !vnodeCall.isBlock) {
        removeHelper(CREATE_VNODE);
        vnodeCall.isBlock = true;
        helper(OPEN_BLOCK);
        helper(CREATE_BLOCK);
      }
      // inject branch key
      injectProp(vnodeCall, keyProperty, context);
      return vnodeCall;
    }
  }
  function isSameKey(a, b) {
    if (!a || a.type !== b.type) {
      return false;
    }
    if (a.type === 6 ) {
      if (a.value.content !== b.value.content) {
        return false;
      }
    } else {
      // directive
      const exp = a.exp;
      const branchExp = b.exp;
      if (exp.type !== branchExp.type) {
        return false;
      }
      if (exp.type !== 4  || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) {
        return false;
      }
    }
    return true;
  }
  function getParentCondition(node) {
    while (true) {
      if (node.type === 19 ) {
        if (node.alternate.type === 19 ) {
          node = node.alternate;
        } else {
          return node;
        }
      } else if (node.type === 20 ) {
        node = node.value;
      }
    }
  }

  const transformFor = createStructuralDirectiveTransform("for", (node, dir, context) => {
    const { helper, removeHelper } = context;
    return processFor(node, dir, context, (forNode) => {
      // create the loop render function expression now, and add the
      // iterator on exit after all children have been traversed
      const renderExp = createCallExpression(helper(RENDER_LIST), [forNode.source]);
      const keyProp = findProp(node, `key`);
      const keyProperty = keyProp ? createObjectProperty(`key`, keyProp.type === 6  ? createSimpleExpression(keyProp.value.content, true) : keyProp.exp) : null;
      const isStableFragment = forNode.source.type === 4  && forNode.source.constType > 0; 
      const fragmentFlag = isStableFragment ? 64  : keyProp ? 128  : 256; 
      forNode.codegenNode = createVNodeCall(
        context,
        helper(FRAGMENT),
        undefined,
        renderExp,
        fragmentFlag + ` `,
        undefined,
        undefined,
        true ,
        !isStableFragment ,
        node.loc
      );
      return () => {
        // finish the codegen now that all children have been traversed
        let childBlock;
        const isTemplate = isTemplateNode(node);
        const { children } = forNode;
        // check <template v-for> key placement
        if (isTemplate) {
          node.children.some((c) => {
            if (c.type === 1 ) {
              const key = findProp(c, "key");
              if (key) {
                context.onError(createCompilerError(32 , key.loc));
                return true;
              }
            }
          });
        }
        const needFragmentWrapper = children.length !== 1 || children[0].type !== 1; 
        const slotOutlet = isSlotOutlet(node)
          ? node
          : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0])
          ? node.children[0] // api-extractor somehow fails to infer this
          : null;
        if (slotOutlet) {
          // <slot v-for="..."> or <template v-for="..."><slot/></template>
          childBlock = slotOutlet.codegenNode;
          if (isTemplate && keyProperty) {
            // <template v-for="..." :key="..."><slot/></template>
            // we need to inject the key to the renderSlot() call.
            // the props for renderSlot is passed as the 3rd argument.
            injectProp(childBlock, keyProperty, context);
          }
        } else if (needFragmentWrapper) {
          // <template v-for="..."> with text or multi-elements
          // should generate a fragment block for each loop
          childBlock = createVNodeCall(
            context,
            helper(FRAGMENT),
            keyProperty ? createObjectExpression([keyProperty]) : undefined,
            node.children,
            64  + ` ]} */`,
            undefined,
            undefined,
            true
          );
        } else {
          // Normal element v-for. Directly use the child's codegenNode
          // but mark it as a block.
          childBlock = children[0].codegenNode;
          if (isTemplate && keyProperty) {
            injectProp(childBlock, keyProperty, context);
          }
          if (childBlock.isBlock !== !isStableFragment) {
            if (childBlock.isBlock) {
              // switch from block to vnode
              removeHelper(OPEN_BLOCK);
              removeHelper(CREATE_BLOCK);
            } else {
              // switch from vnode to block
              removeHelper(CREATE_VNODE);
            }
          }
          childBlock.isBlock = !isStableFragment;
          if (childBlock.isBlock) {
            helper(OPEN_BLOCK);
            helper(CREATE_BLOCK);
          } else {
            helper(CREATE_VNODE);
          }
        }
        renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true ));
      };
    });
  });
  // target-agnostic transform used for both Client and SSR
  function processFor(node, dir, context, processCodegen) {
    if (!dir.exp) {
      context.onError(createCompilerError(30 , dir.loc));
      return;
    }
    const parseResult = parseForExpression(
      // can only be simple expression because vFor transform is applied
      // before expression transform.
      dir.exp,
      context
    );
    if (!parseResult) {
      context.onError(createCompilerError(31 , dir.loc));
      return;
    }
    const { addIdentifiers, removeIdentifiers, scopes } = context;
    const { source, value, key, index } = parseResult;
    const forNode = {
      type: 11 ,
      loc: dir.loc,
      source,
      valueAlias: value,
      keyAlias: key,
      objectIndexAlias: index,
      parseResult,
      children: isTemplateNode(node) ? node.children : [node],
    };
    context.replaceNode(forNode);
    // bookkeeping
    scopes.vFor++;
    const onExit = processCodegen && processCodegen(forNode);
    return () => {
      scopes.vFor--;
      if (onExit) onExit();
    };
  }
  const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  // This regex doesn't cover the case if key or index aliases have destructuring,
  // but those do not make sense in the first place, so this works in practice.
  const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  const stripParensRE = /^\(|\)$/g;
  function parseForExpression(input, context) {
    const loc = input.loc;
    const exp = input.content;
    const inMatch = exp.match(forAliasRE);
    if (!inMatch) return;
    const [, LHS, RHS] = inMatch;
    const result = {
      source: createAliasExpression(loc, RHS.trim(), exp.indexOf(RHS, LHS.length)),
      value: undefined,
      key: undefined,
      index: undefined,
    };
    {
      validateBrowserExpression(result.source, context);
    }
    let valueContent = LHS.trim().replace(stripParensRE, "").trim();
    const trimmedOffset = LHS.indexOf(valueContent);
    const iteratorMatch = valueContent.match(forIteratorRE);
    if (iteratorMatch) {
      valueContent = valueContent.replace(forIteratorRE, "").trim();
      const keyContent = iteratorMatch[1].trim();
      let keyOffset;
      if (keyContent) {
        keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
        result.key = createAliasExpression(loc, keyContent, keyOffset);
        {
          validateBrowserExpression(result.key, context, true);
        }
      }
      if (iteratorMatch[2]) {
        const indexContent = iteratorMatch[2].trim();
        if (indexContent) {
          result.index = createAliasExpression(loc, indexContent, exp.indexOf(indexContent, result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length));
          {
            validateBrowserExpression(result.index, context, true);
          }
        }
      }
    }
    if (valueContent) {
      result.value = createAliasExpression(loc, valueContent, trimmedOffset);
      {
        validateBrowserExpression(result.value, context, true);
      }
    }
    return result;
  }
  function createAliasExpression(range, content, offset) {
    return createSimpleExpression(content, false, getInnerRange(range, offset, content.length));
  }
  function createForLoopParams({ value, key, index }) {
    const params = [];
    if (value) {
      params.push(value);
    }
    if (key) {
      if (!value) {
        params.push(createSimpleExpression(`_`, false));
      }
      params.push(key);
    }
    if (index) {
      if (!key) {
        if (!value) {
          params.push(createSimpleExpression(`_`, false));
        }
        params.push(createSimpleExpression(`__`, false));
      }
      params.push(index);
    }
    return params;
  }

  const defaultFallback = createSimpleExpression(`undefined`, false);
  // A NodeTransform that:
  // 1. Tracks scope identifiers for scoped slots so that they don't get prefixed
  //    by transformExpression. This is only applied in non-browser builds with
  //    { prefixIdentifiers: true }.
  // 2. Track v-slot depths so that we know a slot is inside another slot.
  //    Note the exit callback is executed before buildSlots() on the same node,
  //    so only nested slots see positive numbers.
  const trackSlotScopes = (node, context) => {
    if (node.type === 1  && (node.tagType === 1  || node.tagType === 3) ) {
      // We are only checking non-empty v-slot here
      // since we only care about slots that introduce scope variables.
      const vSlot = findDir(node, "slot");
      if (vSlot) {
        vSlot.exp;
        context.scopes.vSlot++;
        return () => {
          context.scopes.vSlot--;
        };
      }
    }
  };
  const buildClientSlotFn = (props, children, loc) => createFunctionExpression(props, children, false , true , children.length ? children[0].loc : loc);
  // Instead of being a DirectiveTransform, v-slot processing is called during
  // transformElement to build the slots object for a component.
  function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
    context.helper(WITH_CTX);
    const { children, loc } = node;
    const slotsProperties = [];
    const dynamicSlots = [];
    const buildDefaultSlotProperty = (props, children) => createObjectProperty(`default`, buildSlotFn(props, children, loc));
    // If the slot is inside a v-for or another v-slot, force it to be dynamic
    // since it likely uses a scope variable.
    let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
    // 1. Check for slot with slotProps on component itself.
    //    <Comp v-slot="{ prop }"/>
    const onComponentSlot = findDir(node, "slot", true);
    if (onComponentSlot) {
      const { arg, exp } = onComponentSlot;
      if (arg && !isStaticExp(arg)) {
        hasDynamicSlots = true;
      }
      slotsProperties.push(createObjectProperty(arg || createSimpleExpression("default", true), buildSlotFn(exp, children, loc)));
    }
    // 2. Iterate through children and check for template slots
    //    <template v-slot:foo="{ prop }">
    let hasTemplateSlots = false;
    let hasNamedDefaultSlot = false;
    const implicitDefaultChildren = [];
    const seenSlotNames = new Set();
    for (let i = 0; i < children.length; i++) {
      const slotElement = children[i];
      let slotDir;
      if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, "slot", true))) {
        // not a <template v-slot>, skip.
        if (slotElement.type !== 3 ) {
          implicitDefaultChildren.push(slotElement);
        }
        continue;
      }
      if (onComponentSlot) {
        // already has on-component slot - this is incorrect usage.
        context.onError(createCompilerError(36 , slotDir.loc));
        break;
      }
      hasTemplateSlots = true;
      const { children: slotChildren, loc: slotLoc } = slotElement;
      const { arg: slotName = createSimpleExpression(`default`, true), exp: slotProps, loc: dirLoc } = slotDir;
      // check if name is dynamic.
      let staticSlotName;
      if (isStaticExp(slotName)) {
        staticSlotName = slotName ? slotName.content : `default`;
      } else {
        hasDynamicSlots = true;
      }
      const slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc);
      // check if this slot is conditional (v-if/v-for)
      let vIf;
      let vElse;
      let vFor;
      if ((vIf = findDir(slotElement, "if"))) {
        hasDynamicSlots = true;
        dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback));
      } else if ((vElse = findDir(slotElement, /^else(-if)?$/, true ))) {
        // find adjacent v-if
        let j = i;
        let prev;
        while (j--) {
          prev = children[j];
          if (prev.type !== 3 ) {
            break;
          }
        }
        if (prev && isTemplateNode(prev) && findDir(prev, "if")) {
          // remove node
          children.splice(i, 1);
          i--;
          // attach this slot to previous conditional
          let conditional = dynamicSlots[dynamicSlots.length - 1];
          while (conditional.alternate.type === 19 ) {
            conditional = conditional.alternate;
          }
          conditional.alternate = vElse.exp ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback) : buildDynamicSlot(slotName, slotFunction);
        } else {
          context.onError(createCompilerError(29 , vElse.loc));
        }
      } else if ((vFor = findDir(slotElement, "for"))) {
        hasDynamicSlots = true;
        const parseResult = vFor.parseResult || parseForExpression(vFor.exp, context);
        if (parseResult) {
          // Render the dynamic slots as an array and add it to the createSlot()
          // args. The runtime knows how to handle it appropriately.
          dynamicSlots.push(
            createCallExpression(context.helper(RENDER_LIST), [
              parseResult.source,
              createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true ),
            ])
          );
        } else {
          context.onError(createCompilerError(31 , vFor.loc));
        }
      } else {
        // check duplicate static names
        if (staticSlotName) {
          if (seenSlotNames.has(staticSlotName)) {
            context.onError(createCompilerError(37 , dirLoc));
            continue;
          }
          seenSlotNames.add(staticSlotName);
          if (staticSlotName === "default") {
            hasNamedDefaultSlot = true;
          }
        }
        slotsProperties.push(createObjectProperty(slotName, slotFunction));
      }
    }
    if (!onComponentSlot) {
      if (!hasTemplateSlots) {
        // implicit default slot (on component)
        slotsProperties.push(buildDefaultSlotProperty(undefined, children));
      } else if (implicitDefaultChildren.length) {
        // implicit default slot (mixed with named slots)
        if (hasNamedDefaultSlot) {
          context.onError(createCompilerError(38 , implicitDefaultChildren[0].loc));
        } else {
          slotsProperties.push(buildDefaultSlotProperty(undefined, implicitDefaultChildren));
        }
      }
    }
    const slotFlag = hasDynamicSlots ? 2  : hasForwardedSlots(node.children) ? 3  : 1; 
    let slots = createObjectExpression(
      slotsProperties.concat(
        createObjectProperty(
          `_`,
          // 2 = compiled but dynamic = can skip normalization, but must run diff
          // 1 = compiled and static = can skip normalization AND diff as optimized
          createSimpleExpression(slotFlag + ` `, false)
        )
      ),
      loc
    );
    if (dynamicSlots.length) {
      slots = createCallExpression(context.helper(CREATE_SLOTS), [slots, createArrayExpression(dynamicSlots)]);
    }
    return {
      slots,
      hasDynamicSlots,
    };
  }
  function buildDynamicSlot(name, fn) {
    return createObjectExpression([createObjectProperty(`name`, name), createObjectProperty(`fn`, fn)]);
  }
  function hasForwardedSlots(children) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      switch (child.type) {
        case 1 :
          if (child.tagType === 2  || (child.tagType === 0  && hasForwardedSlots(child.children))) {
            return true;
          }
          break;
        case 9 :
          if (hasForwardedSlots(child.branches)) return true;
          break;
        case 10 :
        case 11 :
          if (hasForwardedSlots(child.children)) return true;
          break;
      }
    }
    return false;
  }

  // some directive transforms (e.g. v-model) may return a symbol for runtime
  // import, which should be used instead of a resolveDirective call.
  const directiveImportMap = new WeakMap();
  // generate a JavaScript AST for this element's codegen
  const transformElement = (node, context) => {
    // perform the work on exit, after all child expressions have been
    // processed and merged.
    return function postTransformElement() {
      node = context.currentNode;
      if (!((node.type === 1  && (node.tagType === 0  || node.tagType === 1)) )) {
        return;
      }
      const { tag, props } = node;
      const isComponent = node.tagType === 1; 
      // The goal of the transform is to create a codegenNode implementing the
      // VNodeCall interface.
      const vnodeTag = isComponent ? resolveComponentType(node, context) : `"${tag}"`;
      const isDynamicComponent = isObject(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
      let vnodeProps;
      let vnodeChildren;
      let vnodePatchFlag;
      let patchFlag = 0;
      let vnodeDynamicProps;
      let dynamicPropNames;
      let vnodeDirectives;
      let shouldUseBlock =
        // dynamic component may resolve to plain elements
        isDynamicComponent ||
        vnodeTag === TELEPORT ||
        vnodeTag === SUSPENSE ||
        (!isComponent &&
          // <svg> and <foreignObject> must be forced into blocks so that block
          // updates inside get proper isSVG flag at runtime. (#639, #643)
          // This is technically web-specific, but splitting the logic out of core
          // leads to too much unnecessary complexity.
          (tag === "svg" ||
            tag === "foreignObject" ||
            // #938: elements with dynamic keys should be forced into blocks
            findProp(node, "key", true)));
      // props
      if (props.length > 0) {
        const propsBuildResult = buildProps(node, context);
        vnodeProps = propsBuildResult.props;
        patchFlag = propsBuildResult.patchFlag;
        dynamicPropNames = propsBuildResult.dynamicPropNames;
        const directives = propsBuildResult.directives;
        vnodeDirectives = directives && directives.length ? createArrayExpression(directives.map((dir) => buildDirectiveArgs(dir, context))) : undefined;
      }
      // children
      if (node.children.length > 0) {
        if (vnodeTag === KEEP_ALIVE) {
          // Although a built-in component, we compile KeepAlive with raw children
          // instead of slot functions so that it can be used inside Transition
          // or other Transition-wrapping HOCs.
          // To ensure correct updates with block optimizations, we need to:
          // 1. Force keep-alive into a block. This avoids its children being
          //    collected by a parent block.
          shouldUseBlock = true;
          // 2. Force keep-alive to always be updated, since it uses raw children.
          patchFlag |= 1024 ;
          if (node.children.length > 1) {
            context.onError(
              createCompilerError(44 , {
                start: node.children[0].loc.start,
                end: node.children[node.children.length - 1].loc.end,
                source: "",
              })
            );
          }
        }
        const shouldBuildAsSlots =
          isComponent &&
          // Teleport is not a real component and has dedicated runtime handling
          vnodeTag !== TELEPORT &&
          // explained above.
          vnodeTag !== KEEP_ALIVE;
        if (shouldBuildAsSlots) {
          const { slots, hasDynamicSlots } = buildSlots(node, context);
          vnodeChildren = slots;
          if (hasDynamicSlots) {
            patchFlag |= 1024 ;
          }
        } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
          const child = node.children[0];
          const type = child.type;
          // check for dynamic text children
          const hasDynamicTextChild = type === 5  || type === 8; 
          if (hasDynamicTextChild && getConstantType(child, context) === 0 ) {
            patchFlag |= 1 ;
          }
          // pass directly if the only child is a text node
          // (plain / interpolation / expression)
          if (hasDynamicTextChild || type === 2 ) {
            vnodeChildren = child;
          } else {
            vnodeChildren = node.children;
          }
        } else {
          vnodeChildren = node.children;
        }
      }
      // patchFlag & dynamicPropNames
      if (patchFlag !== 0) {
        {
          if (patchFlag < 0) {
            // special flags (negative and mutually exclusive)
            vnodePatchFlag = patchFlag + ` `;
          } else {
            // bitwise flags
            const flagNames = Object.keys(PatchFlagNames)
              .map(Number)
              .filter((n) => n > 0 && patchFlag & n)
              .map((n) => PatchFlagNames[n])
              .join(`, `);
            vnodePatchFlag = patchFlag + ` `;
          }
        }
        if (dynamicPropNames && dynamicPropNames.length) {
          vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
        }
      }
      node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false , node.loc);
    };
  };
  function resolveComponentType(node, context, ssr = false) {
    const { tag } = node;
    // 1. dynamic component
    const isProp = isComponentTag(tag) ? findProp(node, "is") : findDir(node, "is");
    if (isProp) {
      const exp = isProp.type === 6  ? isProp.value && createSimpleExpression(isProp.value.content, true) : isProp.exp;
      if (exp) {
        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [exp]);
      }
    }
    // 2. built-in components (Teleport, Transition, KeepAlive, Suspense...)
    const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
    if (builtIn) {
      // built-ins are simply fallthroughs / have special handling during ssr
      // so we don't need to import their runtime equivalents
      if (!ssr) context.helper(builtIn);
      return builtIn;
    }
    // 5. user component (resolve)
    context.helper(RESOLVE_COMPONENT);
    context.components.add(tag);
    return toValidAssetId(tag, `component`);
  }
  function buildProps(node, context, props = node.props, ssr = false) {
    const { tag, loc: elementLoc } = node;
    const isComponent = node.tagType === 1; 
    let properties = [];
    const mergeArgs = [];
    const runtimeDirectives = [];
    // patchFlag analysis
    let patchFlag = 0;
    let hasRef = false;
    let hasClassBinding = false;
    let hasStyleBinding = false;
    let hasHydrationEventBinding = false;
    let hasDynamicKeys = false;
    let hasVnodeHook = false;
    const dynamicPropNames = [];
    const analyzePatchFlag = ({ key, value }) => {
      if (isStaticExp(key)) {
        const name = key.content;
        const isEventHandler = isOn(name);
        if (
          !isComponent &&
          isEventHandler &&
          // omit the flag for click handlers because hydration gives click
          // dedicated fast path.
          name.toLowerCase() !== "onclick" &&
          // omit v-model handlers
          name !== "onUpdate:modelValue" &&
          // omit onVnodeXXX hooks
          !isReservedProp(name)
        ) {
          hasHydrationEventBinding = true;
        }
        if (isEventHandler && isReservedProp(name)) {
          hasVnodeHook = true;
        }
        if (value.type === 20  || ((value.type === 4  || value.type === 8)  && getConstantType(value, context) > 0)) {
          // skip if the prop is a cached handler or has constant value
          return;
        }
        if (name === "ref") {
          hasRef = true;
        } else if (name === "class" && !isComponent) {
          hasClassBinding = true;
        } else if (name === "style" && !isComponent) {
          hasStyleBinding = true;
        } else if (name !== "key" && !dynamicPropNames.includes(name)) {
          dynamicPropNames.push(name);
        }
      } else {
        hasDynamicKeys = true;
      }
    };
    for (let i = 0; i < props.length; i++) {
      // static attribute
      const prop = props[i];
      if (prop.type === 6 ) {
        const { loc, name, value } = prop;
        let isStatic = true;
        if (name === "ref") {
          hasRef = true;
        }
        // skip :is on <component>
        if (name === "is" && isComponentTag(tag)) {
          continue;
        }
        properties.push(
          createObjectProperty(createSimpleExpression(name, true, getInnerRange(loc, 0, name.length)), createSimpleExpression(value ? value.content : "", isStatic, value ? value.loc : loc))
        );
      } else {
        // directives
        const { name, arg, exp, loc } = prop;
        const isBind = name === "bind";
        const isOn = name === "on";
        // skip v-slot - it is handled by its dedicated transform.
        if (name === "slot") {
          if (!isComponent) {
            context.onError(createCompilerError(39 , loc));
          }
          continue;
        }
        // skip v-once - it is handled by its dedicated transform.
        if (name === "once") {
          continue;
        }
        // skip v-is and :is on <component>
        if (name === "is" || (isBind && isComponentTag(tag) && isBindKey(arg, "is"))) {
          continue;
        }
        // skip v-on in SSR compilation
        if (isOn && ssr) {
          continue;
        }
        // special case for v-bind and v-on with no argument
        if (!arg && (isBind || isOn)) {
          hasDynamicKeys = true;
          if (exp) {
            if (properties.length) {
              mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
              properties = [];
            }
            if (isBind) {
              mergeArgs.push(exp);
            } else {
              // v-on="obj" -> toHandlers(obj)
              mergeArgs.push({
                type: 14 ,
                loc,
                callee: context.helper(TO_HANDLERS),
                arguments: [exp],
              });
            }
          } else {
            context.onError(createCompilerError(isBind ? 33  : 34 , loc));
          }
          continue;
        }
        const directiveTransform = context.directiveTransforms[name];
        if (directiveTransform) {
          // has built-in directive transform.
          const { props, needRuntime } = directiveTransform(prop, node, context);
          !ssr && props.forEach(analyzePatchFlag);
          properties.push(...props);
          if (needRuntime) {
            runtimeDirectives.push(prop);
            if (isSymbol(needRuntime)) {
              directiveImportMap.set(prop, needRuntime);
            }
          }
        } else {
          // no built-in transform, this is a user custom directive.
          runtimeDirectives.push(prop);
        }
      }
    }
    let propsExpression = undefined;
    // has v-bind="object" or v-on="object", wrap with mergeProps
    if (mergeArgs.length) {
      if (properties.length) {
        mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
      }
      if (mergeArgs.length > 1) {
        propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
      } else {
        // single v-bind with nothing else - no need for a mergeProps call
        propsExpression = mergeArgs[0];
      }
    } else if (properties.length) {
      propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
    }
    // patchFlag analysis
    if (hasDynamicKeys) {
      patchFlag |= 16 ;
    } else {
      if (hasClassBinding) {
        patchFlag |= 2 ;
      }
      if (hasStyleBinding) {
        patchFlag |= 4 ;
      }
      if (dynamicPropNames.length) {
        patchFlag |= 8 ;
      }
      if (hasHydrationEventBinding) {
        patchFlag |= 32 ;
      }
    }
    if ((patchFlag === 0 || patchFlag === 32)  && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
      patchFlag |= 512 ;
    }
    return {
      props: propsExpression,
      directives: runtimeDirectives,
      patchFlag,
      dynamicPropNames,
    };
  }
  // Dedupe props in an object literal.
  // Literal duplicated attributes would have been warned during the parse phase,
  // however, it's possible to encounter duplicated `onXXX` handlers with different
  // modifiers. We also need to merge static and dynamic class / style attributes.
  // - onXXX handlers / style: merge into array
  // - class: merge into single expression with concatenation
  function dedupeProperties(properties) {
    const knownProps = new Map();
    const deduped = [];
    for (let i = 0; i < properties.length; i++) {
      const prop = properties[i];
      // dynamic keys are always allowed
      if (prop.key.type === 8  || !prop.key.isStatic) {
        deduped.push(prop);
        continue;
      }
      const name = prop.key.content;
      const existing = knownProps.get(name);
      if (existing) {
        if (name === "style" || name === "class" || name.startsWith("on")) {
          mergeAsArray(existing, prop);
        }
        // unexpected duplicate, should have emitted error during parse
      } else {
        knownProps.set(name, prop);
        deduped.push(prop);
      }
    }
    return deduped;
  }
  function mergeAsArray(existing, incoming) {
    if (existing.value.type === 17 ) {
      existing.value.elements.push(incoming.value);
    } else {
      existing.value = createArrayExpression([existing.value, incoming.value], existing.loc);
    }
  }
  function buildDirectiveArgs(dir, context) {
    const dirArgs = [];
    const runtime = directiveImportMap.get(dir);
    if (runtime) {
      // built-in directive with runtime
      dirArgs.push(context.helperString(runtime));
    } else {
      {
        // inject statement for resolving directive
        context.helper(RESOLVE_DIRECTIVE);
        context.directives.add(dir.name);
        dirArgs.push(toValidAssetId(dir.name, `directive`));
      }
    }
    const { loc } = dir;
    if (dir.exp) dirArgs.push(dir.exp);
    if (dir.arg) {
      if (!dir.exp) {
        dirArgs.push(`void 0`);
      }
      dirArgs.push(dir.arg);
    }
    if (Object.keys(dir.modifiers).length) {
      if (!dir.arg) {
        if (!dir.exp) {
          dirArgs.push(`void 0`);
        }
        dirArgs.push(`void 0`);
      }
      const trueExpression = createSimpleExpression(`true`, false, loc);
      dirArgs.push(
        createObjectExpression(
          dir.modifiers.map((modifier) => createObjectProperty(modifier, trueExpression)),
          loc
        )
      );
    }
    return createArrayExpression(dirArgs, dir.loc);
  }
  function stringifyDynamicPropNames(props) {
    let propsNamesString = `[`;
    for (let i = 0, l = props.length; i < l; i++) {
      propsNamesString += JSON.stringify(props[i]);
      if (i < l - 1) propsNamesString += ", ";
    }
    return propsNamesString + `]`;
  }
  function isComponentTag(tag) {
    return tag[0].toLowerCase() + tag.slice(1) === "component";
  }

  const transformSlotOutlet = (node, context) => {
    if (isSlotOutlet(node)) {
      const { children, loc } = node;
      const { slotName, slotProps } = processSlotOutlet(node, context);
      const slotArgs = [context.prefixIdentifiers ? `_ctx.$slots` : `$slots`, slotName];
      if (slotProps) {
        slotArgs.push(slotProps);
      }
      if (children.length) {
        if (!slotProps) {
          slotArgs.push(`{}`);
        }
        slotArgs.push(createFunctionExpression([], children, false, false, loc));
      }
      if (context.scopeId && !context.slotted) {
        if (!slotProps) {
          slotArgs.push(`{}`);
        }
        if (!children.length) {
          slotArgs.push(`undefined`);
        }
        slotArgs.push(`true`);
      }
      node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
    }
  };
  function processSlotOutlet(node, context) {
    let slotName = `"default"`;
    let slotProps = undefined;
    const nonNameProps = [];
    for (let i = 0; i < node.props.length; i++) {
      const p = node.props[i];
      if (p.type === 6 ) {
        if (p.value) {
          if (p.name === "name") {
            slotName = JSON.stringify(p.value.content);
          } else {
            p.name = camelize(p.name);
            nonNameProps.push(p);
          }
        }
      } else {
        if (p.name === "bind" && isBindKey(p.arg, "name")) {
          if (p.exp) slotName = p.exp;
        } else {
          if (p.name === "bind" && p.arg && isStaticExp(p.arg)) {
            p.arg.content = camelize(p.arg.content);
          }
          nonNameProps.push(p);
        }
      }
    }
    if (nonNameProps.length > 0) {
      const { props, directives } = buildProps(node, context, nonNameProps);
      slotProps = props;
      if (directives.length) {
        context.onError(createCompilerError(35 , directives[0].loc));
      }
    }
    return {
      slotName,
      slotProps,
    };
  }

  const fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^\s*function(?:\s+[\w$]+)?\s*\(/;
  const transformOn = (dir, node, context, augmentor) => {
    const { loc, modifiers, arg } = dir;
    if (!dir.exp && !modifiers.length) {
      context.onError(createCompilerError(34 , loc));
    }
    let eventName;
    if (arg.type === 4 ) {
      if (arg.isStatic) {
        const rawName = arg.content;
        // for all event listeners, auto convert it to camelCase. See issue #2249
        eventName = createSimpleExpression(toHandlerKey(camelize(rawName)), true, arg.loc);
      } else {
        // #2388
        eventName = createCompoundExpression([`${context.helperString(TO_HANDLER_KEY)}(`, arg, `)`]);
      }
    } else {
      // already a compound expression.
      eventName = arg;
      eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
      eventName.children.push(`)`);
    }
    // handler processing
    let exp = dir.exp;
    if (exp && !exp.content.trim()) {
      exp = undefined;
    }
    let shouldCache = context.cacheHandlers && !exp;
    if (exp) {
      const isMemberExp = isMemberExpression(exp.content);
      const isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
      const hasMultipleStatements = exp.content.includes(`;`);
      {
        validateBrowserExpression(exp, context, false, hasMultipleStatements);
      }
      if (isInlineStatement || (shouldCache && isMemberExp)) {
        // wrap inline statement in a function expression
        exp = createCompoundExpression([`${isInlineStatement ? `$event` : `${``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`, exp, hasMultipleStatements ? `}` : `)`]);
      }
    }
    let ret = {
      props: [createObjectProperty(eventName, exp || createSimpleExpression(`() => {}`, false, loc))],
    };
    // apply extended compiler augmentor
    if (augmentor) {
      ret = augmentor(ret);
    }
    if (shouldCache) {
      // cache handlers so that it's always the same handler being passed down.
      // this avoids unnecessary re-renders when users use inline handlers on
      // components.
      ret.props[0].value = context.cache(ret.props[0].value);
    }
    return ret;
  };

  // v-bind without arg is handled directly in ./transformElements.ts due to it affecting
  // codegen for the entire props object. This transform here is only for v-bind
  // *with* args.
  const transformBind = (dir, node, context) => {
    const { exp, modifiers, loc } = dir;
    const arg = dir.arg;
    if (arg.type !== 4 ) {
      arg.children.unshift(`(`);
      arg.children.push(`) || ""`);
    } else if (!arg.isStatic) {
      arg.content = `${arg.content} || ""`;
    }
    // .prop is no longer necessary due to new patch behavior
    // .sync is replaced by v-model:arg
    if (modifiers.includes("camel")) {
      if (arg.type === 4 ) {
        if (arg.isStatic) {
          arg.content = camelize(arg.content);
        } else {
          arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
        }
      } else {
        arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
        arg.children.push(`)`);
      }
    }
    if (!exp || (exp.type === 4  && !exp.content.trim())) {
      context.onError(createCompilerError(33 , loc));
      return {
        props: [createObjectProperty(arg, createSimpleExpression("", true, loc))],
      };
    }
    return {
      props: [createObjectProperty(arg, exp)],
    };
  };

  // Merge adjacent text nodes and expressions into a single expression
  // e.g. <div>abc {{ d }} {{ e }}</div> should have a single expression node as child.
  const transformText = (node, context) => {
    if (node.type === 0  || node.type === 1  || node.type === 11  || node.type === 10 ) {
      // perform the transform on node exit so that all expressions have already
      // been processed.
      return () => {
        const children = node.children;
        let currentContainer = undefined;
        let hasText = false;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (isText(child)) {
            hasText = true;
            for (let j = i + 1; j < children.length; j++) {
              const next = children[j];
              if (isText(next)) {
                if (!currentContainer) {
                  currentContainer = children[i] = {
                    type: 8 ,
                    loc: child.loc,
                    children: [child],
                  };
                }
                // merge adjacent text node into current
                currentContainer.children.push(` + `, next);
                children.splice(j, 1);
                j--;
              } else {
                currentContainer = undefined;
                break;
              }
            }
          }
        }
        if (
          !hasText ||
          // if this is a plain element with a single text child, leave it
          // as-is since the runtime has dedicated fast path for this by directly
          // setting textContent of the element.
          // for component root it's always normalized anyway.
          (children.length === 1 && (node.type === 0  || (node.type === 1  && node.tagType === 0))) 
        ) {
          return;
        }
        // pre-convert text nodes into createTextVNode(text) calls to avoid
        // runtime normalization.
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (isText(child) || child.type === 8 ) {
            const callArgs = [];
            // createTextVNode defaults to single whitespace, so if it is a
            // single space the code could be an empty call to save bytes.
            if (child.type !== 2  || child.content !== " ") {
              callArgs.push(child);
            }
            // mark dynamic text with flag so it gets patched inside a block
            if (!context.ssr && getConstantType(child, context) === 0 ) {
              callArgs.push(1  + ` ]} */`);
            }
            children[i] = {
              type: 12 ,
              content: child,
              loc: child.loc,
              codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs),
            };
          }
        }
      };
    }
  };

  const seen = new WeakSet();
  const transformOnce = (node, context) => {
    if (node.type === 1  && findDir(node, "once", true)) {
      if (seen.has(node)) {
        return;
      }
      seen.add(node);
      context.helper(SET_BLOCK_TRACKING);
      return () => {
        const cur = context.currentNode;
        if (cur.codegenNode) {
          cur.codegenNode = context.cache(cur.codegenNode, true );
        }
      };
    }
  };

  const transformModel = (dir, node, context) => {
    const { exp, arg } = dir;
    if (!exp) {
      context.onError(createCompilerError(40 , dir.loc));
      return createTransformProps();
    }
    const rawExp = exp.loc.source;
    const expString = exp.type === 4  ? exp.content : rawExp;
    // im SFC <script setup> inline mode, the exp may have been transformed into
    // _unref(exp)
    context.bindingMetadata[rawExp];
    const maybeRef = !true; 
    if (!isMemberExpression(expString) && !maybeRef) {
      context.onError(createCompilerError(41 , exp.loc));
      return createTransformProps();
    }
    const propName = arg ? arg : createSimpleExpression("modelValue", true);
    const eventName = arg ? (isStaticExp(arg) ? `onUpdate:${arg.content}` : createCompoundExpression(['"onUpdate:" + ', arg])) : `onUpdate:modelValue`;
    let assignmentExp;
    const eventArg = context.isTS ? `($event: any)` : `$event`;
    {
      assignmentExp = createCompoundExpression([`${eventArg} => (`, exp, ` = $event)`]);
    }
    const props = [
      // modelValue: foo
      createObjectProperty(propName, dir.exp),
      // "onUpdate:modelValue": $event => (foo = $event)
      createObjectProperty(eventName, assignmentExp),
    ];
    // modelModifiers: { foo: true, "bar-baz": true }
    if (dir.modifiers.length && node.tagType === 1 ) {
      const modifiers = dir.modifiers.map((m) => (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`).join(`, `);
      const modifiersKey = arg ? (isStaticExp(arg) ? `${arg.content}Modifiers` : createCompoundExpression([arg, ' + "Modifiers"'])) : `modelModifiers`;
      props.push(createObjectProperty(modifiersKey, createSimpleExpression(`{ ${modifiers} }`, false, dir.loc, 2 )));
    }
    return createTransformProps(props);
  };
  function createTransformProps(props = []) {
    return { props };
  }

  function getBaseTransformPreset(prefixIdentifiers) {
    return [
      [transformOnce, transformIf, transformFor, ...[transformExpression], transformSlotOutlet, transformElement, trackSlotScopes, transformText],
      {
        on: transformOn,
        bind: transformBind,
        model: transformModel,
      },
    ];
  }
  // we name it `baseCompile` so that higher order compilers like
  // @a2020Vue/compiler-dom can export `compile` while re-exporting everything else.
  function baseCompile(template, options = {}) {
    const onError = options.onError || defaultOnError;
    const isModuleMode = options.mode === "module";
    
    {
      if (options.prefixIdentifiers === true) {
        onError(createCompilerError(45 ));
      } else if (isModuleMode) {
        onError(createCompilerError(46 ));
      }
    }
    const prefixIdentifiers = !true;
    if (options.cacheHandlers) {
      onError(createCompilerError(47 ));
    }
    if (options.scopeId && !isModuleMode) {
      onError(createCompilerError(48 ));
    }
    const ast = isString(template) ? baseParse(template, options) : template;
    const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
    transform(
      ast,
      extend({}, options, {
        prefixIdentifiers,
        nodeTransforms: [
          ...nodeTransforms,
          ...(options.nodeTransforms || []), // user transforms
        ],
        directiveTransforms: extend(
          {},
          directiveTransforms,
          options.directiveTransforms || {} // user transforms
        ),
      })
    );
    return generate(
      ast,
      extend({}, options, {
        prefixIdentifiers,
      })
    );
  }

  const noopDirectiveTransform = () => ({ props: [] });

  const V_MODEL_RADIO = Symbol(`vModelRadio`);
  const V_MODEL_CHECKBOX = Symbol(`vModelCheckbox`);
  const V_MODEL_TEXT = Symbol(`vModelText`);
  const V_MODEL_SELECT = Symbol(`vModelSelect`);
  const V_MODEL_DYNAMIC = Symbol(`vModelDynamic`);
  const V_ON_WITH_MODIFIERS = Symbol(`vOnModifiersGuard`);
  const V_ON_WITH_KEYS = Symbol(`vOnKeysGuard`);
  const V_SHOW = Symbol(`vShow`);
  const TRANSITION$1 = Symbol(`Transition`);
  const TRANSITION_GROUP = Symbol(`TransitionGroup`);
  registerRuntimeHelpers({
    [V_MODEL_RADIO]: `vModelRadio`,
    [V_MODEL_CHECKBOX]: `vModelCheckbox`,
    [V_MODEL_TEXT]: `vModelText`,
    [V_MODEL_SELECT]: `vModelSelect`,
    [V_MODEL_DYNAMIC]: `vModelDynamic`,
    [V_ON_WITH_MODIFIERS]: `withModifiers`,
    [V_ON_WITH_KEYS]: `withKeys`,
    [V_SHOW]: `vShow`,
    [TRANSITION$1]: `Transition`,
    [TRANSITION_GROUP]: `TransitionGroup`,
  });

  
  let decoder;
  function decodeHtmlBrowser(raw) {
    (decoder || (decoder = document.createElement("div"))).innerHTML = raw;
    return decoder.textContent;
  }

  const isRawTextContainer =  makeMap("style,iframe,script,noscript", true);
  const parserOptions = {
    isVoidTag,
    isNativeTag: (tag) => isHTMLTag(tag) || isSVGTag(tag),
    isPreTag: (tag) => tag === "pre",
    decodeEntities: decodeHtmlBrowser,
    isBuiltInComponent: (tag) => {
      if (isBuiltInType(tag, `Transition`)) {
        return TRANSITION$1;
      } else if (isBuiltInType(tag, `TransitionGroup`)) {
        return TRANSITION_GROUP;
      }
    },
    // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
    getNamespace(tag, parent) {
      let ns = parent ? parent.ns : 0; 
      if (parent && ns === 2 ) {
        if (parent.tag === "annotation-xml") {
          if (tag === "svg") {
            return 1 ;
          }
          if (parent.props.some((a) => a.type === 6  && a.name === "encoding" && a.value != null && (a.value.content === "text/html" || a.value.content === "application/xhtml+xml"))) {
            ns = 0 ;
          }
        } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== "mglyph" && tag !== "malignmark") {
          ns = 0 ;
        }
      } else if (parent && ns === 1 ) {
        if (parent.tag === "foreignObject" || parent.tag === "desc" || parent.tag === "title") {
          ns = 0 ;
        }
      }
      if (ns === 0 ) {
        if (tag === "svg") {
          return 1 ;
        }
        if (tag === "math") {
          return 2 ;
        }
      }
      return ns;
    },
    // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
    getTextMode({ tag, ns }) {
      if (ns === 0 ) {
        if (tag === "textarea" || tag === "title") {
          return 1 ;
        }
        if (isRawTextContainer(tag)) {
          return 2 ;
        }
      }
      return 0 ;
    },
  };

  // Parse inline CSS strings for static style attributes into an object.
  // This is a NodeTransform since it works on the static `style` attribute and
  // converts it into a dynamic equivalent:
  // style="color: red" -> :style='{ "color": "red" }'
  // It is then processed by `transformElement` and included in the generated
  // props.
  const transformStyle = (node) => {
    if (node.type === 1 ) {
      node.props.forEach((p, i) => {
        if (p.type === 6  && p.name === "style" && p.value) {
          // replace p with an expression node
          node.props[i] = {
            type: 7 ,
            name: `bind`,
            arg: createSimpleExpression(`style`, true, p.loc),
            exp: parseInlineCSS(p.value.content, p.loc),
            modifiers: [],
            loc: p.loc,
          };
        }
      });
    }
  };
  const parseInlineCSS = (cssText, loc) => {
    const normalized = parseStringStyle(cssText);
    return createSimpleExpression(JSON.stringify(normalized), false, loc, 3 );
  };

  function createDOMCompilerError(code, loc) {
    return createCompilerError(code, loc, DOMErrorMessages);
  }
  const DOMErrorMessages = {
    [49 ]: `v-html is missing expression.`,
    [50 ]: `v-html will override element children.`,
    [51 ]: `v-text is missing expression.`,
    [52 ]: `v-text will override element children.`,
    [53 ]: `v-model can only be used on <input>, <textarea> and <select> elements.`,
    [54 ]: `v-model argument is not supported on plain elements.`,
    [55 ]: `v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.`,
    [56 ]: `Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.`,
    [57 ]: `v-show is missing expression.`,
    [58 ]: `<Transition> expects exactly one child element or component.`,
    [59 ]: `Tags with side effect (<script> and <style>) are ignored in client component templates.`,
  };

  const transformVHtml = (dir, node, context) => {
    const { exp, loc } = dir;
    if (!exp) {
      context.onError(createDOMCompilerError(49 , loc));
    }
    if (node.children.length) {
      context.onError(createDOMCompilerError(50 , loc));
      node.children.length = 0;
    }
    return {
      props: [createObjectProperty(createSimpleExpression(`innerHTML`, true, loc), exp || createSimpleExpression("", true))],
    };
  };

  const transformVText = (dir, node, context) => {
    const { exp, loc } = dir;
    if (!exp) {
      context.onError(createDOMCompilerError(51 , loc));
    }
    if (node.children.length) {
      context.onError(createDOMCompilerError(52 , loc));
      node.children.length = 0;
    }
    return {
      props: [createObjectProperty(createSimpleExpression(`textContent`, true), exp ? createCallExpression(context.helperString(TO_DISPLAY_STRING), [exp], loc) : createSimpleExpression("", true))],
    };
  };

  const transformModel$1 = (dir, node, context) => {
    const baseResult = transformModel(dir, node, context);
    // base transform has errors OR component v-model (only need props)
    if (!baseResult.props.length || node.tagType === 1 ) {
      return baseResult;
    }
    if (dir.arg) {
      context.onError(createDOMCompilerError(54 , dir.arg.loc));
    }
    function checkDuplicatedValue() {
      const value = findProp(node, "value");
      if (value) {
        context.onError(createDOMCompilerError(56 , value.loc));
      }
    }
    const { tag } = node;
    const isCustomElement = context.isCustomElement(tag);
    if (tag === "input" || tag === "textarea" || tag === "select" || isCustomElement) {
      let directiveToUse = V_MODEL_TEXT;
      let isInvalidType = false;
      if (tag === "input" || isCustomElement) {
        const type = findProp(node, `type`);
        if (type) {
          if (type.type === 7 ) {
            // :type="foo"
            directiveToUse = V_MODEL_DYNAMIC;
          } else if (type.value) {
            switch (type.value.content) {
              case "radio":
                directiveToUse = V_MODEL_RADIO;
                break;
              case "checkbox":
                directiveToUse = V_MODEL_CHECKBOX;
                break;
              case "file":
                isInvalidType = true;
                context.onError(createDOMCompilerError(55 , dir.loc));
                break;
              default:
                // text type
                checkDuplicatedValue();
                break;
            }
          }
        } else if (hasDynamicKeyVBind(node)) {
          // element has bindings with dynamic keys, which can possibly contain
          // "type".
          directiveToUse = V_MODEL_DYNAMIC;
        } else {
          // text type
          checkDuplicatedValue();
        }
      } else if (tag === "select") {
        directiveToUse = V_MODEL_SELECT;
      } else {
        // textarea
        checkDuplicatedValue();
      }
      // inject runtime directive
      // by returning the helper symbol via needRuntime
      // the import will replaced a resolveDirective call.
      if (!isInvalidType) {
        baseResult.needRuntime = context.helper(directiveToUse);
      }
    } else {
      context.onError(createDOMCompilerError(53 , dir.loc));
    }
    // native vmodel doesn't need the `modelValue` props since they are also
    // passed to the runtime as `binding.value`. removing it reduces code size.
    baseResult.props = baseResult.props.filter((p) => !(p.key.type === 4  && p.key.content === "modelValue"));
    return baseResult;
  };

  const isEventOptionModifier =  makeMap(`passive,once,capture`);
  const isNonKeyModifier =  makeMap(
    // event propagation management
    `stop,prevent,self,` +
      // system modifiers + exact
      `ctrl,shift,alt,meta,exact,` +
      // mouse
      `middle`
  );
  // left & right could be mouse or key modifiers based on event type
  const maybeKeyModifier =  makeMap("left,right");
  const isKeyboardEvent =  makeMap(`onkeyup,onkeydown,onkeypress`, true);
  const resolveModifiers = (key, modifiers) => {
    const keyModifiers = [];
    const nonKeyModifiers = [];
    const eventOptionModifiers = [];
    for (let i = 0; i < modifiers.length; i++) {
      const modifier = modifiers[i];
      if (isEventOptionModifier(modifier)) {
        // eventOptionModifiers: modifiers for addEventListener() options,
        // e.g. .passive & .capture
        eventOptionModifiers.push(modifier);
      } else {
        // runtimeModifiers: modifiers that needs runtime guards
        if (maybeKeyModifier(modifier)) {
          if (isStaticExp(key)) {
            if (isKeyboardEvent(key.content)) {
              keyModifiers.push(modifier);
            } else {
              nonKeyModifiers.push(modifier);
            }
          } else {
            keyModifiers.push(modifier);
            nonKeyModifiers.push(modifier);
          }
        } else {
          if (isNonKeyModifier(modifier)) {
            nonKeyModifiers.push(modifier);
          } else {
            keyModifiers.push(modifier);
          }
        }
      }
    }
    return {
      keyModifiers,
      nonKeyModifiers,
      eventOptionModifiers,
    };
  };
  const transformClick = (key, event) => {
    const isStaticClick = isStaticExp(key) && key.content.toLowerCase() === "onclick";
    return isStaticClick ? createSimpleExpression(event, true) : key.type !== 4  ? createCompoundExpression([`(`, key, `) === "onClick" ? "${event}" : (`, key, `)`]) : key;
  };
  const transformOn$1 = (dir, node, context) => {
    return transformOn(dir, node, context, (baseResult) => {
      const { modifiers } = dir;
      if (!modifiers.length) return baseResult;
      let { key, value: handlerExp } = baseResult.props[0];
      const { keyModifiers, nonKeyModifiers, eventOptionModifiers } = resolveModifiers(key, modifiers);
      // normalize click.right and click.middle since they don't actually fire
      if (nonKeyModifiers.includes("right")) {
        key = transformClick(key, `onContextmenu`);
      }
      if (nonKeyModifiers.includes("middle")) {
        key = transformClick(key, `onMouseup`);
      }
      if (nonKeyModifiers.length) {
        handlerExp = createCallExpression(context.helper(V_ON_WITH_MODIFIERS), [handlerExp, JSON.stringify(nonKeyModifiers)]);
      }
      if (
        keyModifiers.length &&
        // if event name is dynamic, always wrap with keys guard
        (!isStaticExp(key) || isKeyboardEvent(key.content))
      ) {
        handlerExp = createCallExpression(context.helper(V_ON_WITH_KEYS), [handlerExp, JSON.stringify(keyModifiers)]);
      }
      if (eventOptionModifiers.length) {
        const modifierPostfix = eventOptionModifiers.map(capitalize).join("");
        key = isStaticExp(key) ? createSimpleExpression(`${key.content}${modifierPostfix}`, true) : createCompoundExpression([`(`, key, `) + "${modifierPostfix}"`]);
      }
      return {
        props: [createObjectProperty(key, handlerExp)],
      };
    });
  };

  const transformShow = (dir, node, context) => {
    const { exp, loc } = dir;
    if (!exp) {
      context.onError(createDOMCompilerError(57 , loc));
    }
    return {
      props: [],
      needRuntime: context.helper(V_SHOW),
    };
  };

  const warnTransitionChildren = (node, context) => {
    if (node.type === 1  && node.tagType === 1 ) {
      const component = context.isBuiltInComponent(node.tag);
      if (component === TRANSITION$1) {
        return () => {
          if (node.children.length && hasMultipleChildren(node)) {
            context.onError(
              createDOMCompilerError(58 , {
                start: node.children[0].loc.start,
                end: node.children[node.children.length - 1].loc.end,
                source: "",
              })
            );
          }
        };
      }
    }
  };
  function hasMultipleChildren(node) {
    // #1352 filter out potential comment nodes.
    const children = (node.children = node.children.filter((c) => c.type !== 3 ));
    const child = children[0];
    return children.length !== 1 || child.type === 11  || (child.type === 9  && child.branches.some(hasMultipleChildren));
  }

  const ignoreSideEffectTags = (node, context) => {
    if (node.type === 1  && node.tagType === 0  && (node.tag === "script" || node.tag === "style")) {
      context.onError(createDOMCompilerError(59 , node.loc));
      context.removeNode();
    }
  };

  const DOMNodeTransforms = [transformStyle, ...[warnTransitionChildren]];
  const DOMDirectiveTransforms = {
    cloak: noopDirectiveTransform,
    html: transformVHtml,
    text: transformVText,
    model: transformModel$1,
    on: transformOn$1,
    show: transformShow,
  };
  function compile$1(template, options = {}) {
    return baseCompile(
      template,
      extend({}, parserOptions, options, {
        nodeTransforms: [
          // ignore <script> and <tag>
          // this is not put inside DOMNodeTransforms because that list is used
          // by compiler-ssr to generate vnode fallback branches
          ignoreSideEffectTags,
          ...DOMNodeTransforms,
          ...(options.nodeTransforms || []),
        ],
        directiveTransforms: extend({}, DOMDirectiveTransforms, options.directiveTransforms || {}),
        transformHoist: null,
      })
    );
  }

  // This entry is the "full-build" that includes both the runtime
  {
    initDev();
  }
  const compileCache = Object.create(null);
  function compileToFunction(template, options) {
    if (!isString(template)) {
      if (template.nodeType) {
        template = template.innerHTML;
      } else {
        warn(`invalid template option: `, template);
        return NOOP;
      }
    }
    const key = template;
    const cached = compileCache[key];
    if (cached) {
      return cached;
    }
    if (template[0] === "#") {
      const el = document.querySelector(template);
      if (!el) {
        warn(`Template element not found or is empty: ${template}`);
      }
      // __UNSAFE__
      // Reason: potential execution of JS expressions in in-DOM template.
      // The user must make sure the in-DOM template is trusted. If it's rendered
      // by the server, the template should not contain any user data.
      template = el ? el.innerHTML : ``;
    }
    const { code } = compile$1(
      template,
      extend(
        {
          hoistStatic: true,
          onError(err) {
            {
              const message = `Template compilation error: ${err.message}`;
              const codeFrame = err.loc && generateCodeFrame(template, err.loc.start.offset, err.loc.end.offset);
              warn(codeFrame ? `${message}\n${codeFrame}` : message);
            }
          },
        },
        options
      )
    );
    // The wildcard import results in a huge object with every export
    // with keys that cannot be mangled, and can be quite heavy size-wise.
    // In the global build we know `a2020Vue` is available globally so we can avoid
    // the wildcard object.
    const render = new Function(code)();
    render._rc = true;
    return (compileCache[key] = render);
  }
  registerRuntimeCompiler(compileToFunction);

  exports.BaseTransition = BaseTransition;
  exports.Comment = Comment;
  exports.Fragment = Fragment;
  exports.KeepAlive = KeepAlive;
  exports.Static = Static;
  exports.Suspense = Suspense;
  exports.Teleport = Teleport;
  exports.Text = Text;
  exports.Transition = Transition;
  exports.TransitionGroup = TransitionGroup;
  exports.callWithAsyncErrorHandling = callWithAsyncErrorHandling;
  exports.callWithErrorHandling = callWithErrorHandling;
  exports.camelize = camelize;
  exports.capitalize = capitalize;
  exports.cloneVNode = cloneVNode;
  exports.compile = compileToFunction;
  exports.computed = computed$1;
  exports.createApp = createApp;
  exports.createBlock = createBlock;
  exports.createCommentVNode = createCommentVNode;
  exports.createHydrationRenderer = createHydrationRenderer;
  exports.createRenderer = createRenderer;
  exports.createSSRApp = createSSRApp;
  exports.createSlots = createSlots;
  exports.createStaticVNode = createStaticVNode;
  exports.createTextVNode = createTextVNode;
  exports.createVNode = createVNode;
  exports.customRef = customRef;
  exports.defineAsyncComponent = defineAsyncComponent;
  exports.defineComponent = defineComponent;
  exports.defineEmit = defineEmit;
  exports.defineProps = defineProps;
  exports.getCurrentInstance = getCurrentInstance;
  exports.getTransitionRawChildren = getTransitionRawChildren;
  exports.h = h;
  exports.handleError = handleError;
  exports.hydrate = hydrate;
  exports.initCustomFormatter = initCustomFormatter;
  exports.inject = inject;
  exports.isProxy = isProxy;
  exports.isReactive = isReactive;
  exports.isReadonly = isReadonly;
  exports.isRef = isRef;
  exports.isRuntimeOnly = isRuntimeOnly;
  exports.isVNode = isVNode;
  exports.markRaw = markRaw;
  exports.mergeProps = mergeProps;
  exports.nextTick = nextTick;
  exports.onActivated = onActivated;
  exports.onBeforeMount = onBeforeMount;
  exports.onBeforeUnmount = onBeforeUnmount;
  exports.onBeforeUpdate = onBeforeUpdate;
  exports.onDeactivated = onDeactivated;
  exports.onErrorCaptured = onErrorCaptured;
  exports.onMounted = onMounted;
  exports.onRenderTracked = onRenderTracked;
  exports.onRenderTriggered = onRenderTriggered;
  exports.onUnmounted = onUnmounted;
  exports.onUpdated = onUpdated;
  exports.openBlock = openBlock;
  exports.popScopeId = popScopeId;
  exports.provide = provide;
  exports.proxyRefs = proxyRefs;
  exports.pushScopeId = pushScopeId;
  exports.queuePostFlushCb = queuePostFlushCb;
  exports.reactive = reactive;
  exports.readonly = readonly;
  exports.ref = ref;
  exports.registerRuntimeCompiler = registerRuntimeCompiler;
  exports.render = render;
  exports.renderList = renderList;
  exports.renderSlot = renderSlot;
  exports.resolveComponent = resolveComponent;
  exports.resolveDirective = resolveDirective;
  exports.resolveDynamicComponent = resolveDynamicComponent;
  exports.resolveTransitionHooks = resolveTransitionHooks;
  exports.setBlockTracking = setBlockTracking;
  exports.setDevtoolsHook = setDevtoolsHook;
  exports.setTransitionHooks = setTransitionHooks;
  exports.shallowReactive = shallowReactive;
  exports.shallowReadonly = shallowReadonly;
  exports.shallowRef = shallowRef;
  exports.ssrContextKey = ssrContextKey;
  exports.ssrUtils = ssrUtils;
  exports.toDisplayString = toDisplayString;
  exports.toHandlerKey = toHandlerKey;
  exports.toHandlers = toHandlers;
  exports.toRaw = toRaw;
  exports.toRef = toRef;
  exports.toRefs = toRefs;
  exports.transformVNodeArgs = transformVNodeArgs;
  exports.triggerRef = triggerRef;
  exports.unref = unref;
  exports.useContext = useContext;
  exports.useCssModule = useCssModule;
  exports.useCssVars = useCssVars;
  exports.useSSRContext = useSSRContext;
  exports.useTransitionState = useTransitionState;
  exports.vModelCheckbox = vModelCheckbox;
  exports.vModelDynamic = vModelDynamic;
  exports.vModelRadio = vModelRadio;
  exports.vModelSelect = vModelSelect;
  exports.vModelText = vModelText;
  exports.vShow = vShow;
  exports.version = version;
  exports.warn = warn;
  exports.watch = watch;
  exports.watchEffect = watchEffect;
  exports.withCtx = withCtx;
  exports.withDirectives = withDirectives;
  exports.withKeys = withKeys;
  exports.withModifiers = withModifiers;
  exports.withScopeId = withScopeId;

  Object.defineProperty(exports, "__esModule", { value: true });

  return exports;
})({});