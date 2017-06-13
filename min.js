var hyperHTML=function(){"use strict";/*! (c) 2017 Andrea Giammarchi @WebReflection, (MIT) */
function e(e){return T in this&&this[T].s===e?b.apply(this,arguments):N.apply(this,arguments)}function t(e,t){for(var n,r=M?x:k,o=M?s(e.attributes):H.call(e.attributes),a=0,c=o.length;a<c;a++)n=o[a],n.value===r&&t.push(i(e,M?e.getAttributeNode(w.shift()):n))}function n(e,i){for(var c,l,u=H.call(e.childNodes),s=u.length,h=0;h<s;h++)switch(c=u[h],c.nodeType){case 1:t(c,i),n(c,i);break;case 8:c.textContent===x&&(1===s?(i.push(r(e)),e.removeChild(c)):!(h<1||1===u[h-1].nodeType)||h+1!==s&&1!==u[h+1].nodeType?(l=e.ownerDocument.createTextNode(""),i.push(a(l)),e.replaceChild(l,c)):i.push(o(c)));break;case 3:C.test(e.nodeName)&&c.textContent===k&&i.push(a(e))}}function r(e){return function t(n){switch(typeof n){case"string":e.innerHTML=n;break;case"number":case"boolean":e.textContent=n;break;default:if(Array.isArray(n))if(1===n.length)t(n[0]);else if("string"==typeof n[0])t(n.join(""));else{var r=l(e.childNodes,n);-1<r&&m(e,n,r)}else h(e,n)}}}function i(e,t){var n,r=t.name,i="on"===r.slice(0,2),o=r in e&&!C.test(r);return o&&e.removeAttribute(r),o?function(t){n!==t&&(n=t,e[r]=i&&"handleEvent"in t?t.handleEvent.bind(t):t)}:function(e){n!==e&&(t.value=n=e)}}function o(e){var t=e.ownerDocument.createDocumentFragment(),n=[];return function r(i){var o,a=e.parentNode;switch(typeof i){case"string":case"number":case"boolean":d(n,0),u(t,i),n=H.call(t.childNodes),a.insertBefore(t,e);break;default:Array.isArray(i)?0===i.length?(d(n,0),n=[]):"string"==typeof i[0]?r(i.join("")):-1<(o=l(n,i))&&(d(n,o),i=i.slice(o),c(t,i),a.insertBefore(t,e),n.push.apply(n,i)):(d(n,0),n=11===i.nodeType?H.call(i.childNodes):[i],a.insertBefore(i,e))}}}function a(e){var t;return function(n){t!==n&&(e.textContent=t=n)}}function c(e,t){for(var n=0,r=t.length;n<r;n++)e.appendChild(t[n])}function l(e,t){for(var n=0,r=e.length,i=t.length;n<r;){if(!(n<i&&e[n]===t[n]))return n;n++}return n===i?-1:n}function u(e,t){var n=e.ownerDocument.createElement("template"),r=M&&!("content"in n)&&/^[^\S]*?<(t(?:head|body|foot|r|d|h))/i.test(t);n.innerHTML=r?"<table>"+t+"</table>":t,r&&(n={childNodes:n.querySelectorAll(RegExp.$1)}),c(e,H.call((n.content||n).childNodes))}function s(e){for(var t=[],n=e.length;n--;t[n]={name:e[n].name,value:e[n].value});return t}function h(e,t){switch(t.nodeType){case 1:var n=e.childNodes;if(0<n.length&&n[0]===t){d(n,1);break}f(e,t);break;case 11:-1<l(e.childNodes,t.childNodes)&&f(e,t);break;case 3:e.textContent=t.textContent}}function d(e,t){for(var n,r=e.length;t<r--;)n=e[r],n.parentNode.removeChild(n)}function f(e,t){e.textContent="",e.appendChild(t)}function p(e){for(var t,n=[],r=e.childNodes,i=0,o=r.length;i<o;i++)t=r[i],(1===t.nodeType||0<E.call(t.textContent).length)&&n.push(t);return o=n.length,o<2?(t=o<1?e:n[0],function(){return t}):function(){return n}}function m(e,t,n){var r=e.ownerDocument.createDocumentFragment();0<n?(d(e.childNodes,n),c(r,t.slice(n)),e.appendChild(r)):(c(r,t),f(e,r))}function g(t){var n,r,i,o,a,l;return function(u){return l!==u&&(a=!0,l=u,i=e.document.createDocumentFragment(),r="svg"===t?e.document.createElementNS("http://www.w3.org/2000/svg","svg"):i,o=e.bind(r)),o.apply(null,arguments),a&&(a=!1,"svg"===t&&c(i,H.call(r.childNodes)),n=p(i)),n()}}function v(e,t,n){return e[t]||(e[t]=g(n))}function y(e,t){var n=L.get(e)||(L.set(e,n={}),n),r=t.indexOf(":");return r<0?v(n,t,t):v(n,t.slice(r+1),t.slice(0,r)||"html")}function b(){for(var e=1,t=arguments.length,n=this[T].u;e<t;e++)n[e-1](arguments[e]);return this}function N(e){var t=[],r=e.join(k);return M?(w=[],d(this.childNodes,0),u(this,r.replace(D,A))):1===this.nodeType?this.innerHTML=r:u(this,r),n(this,t),this[T]={s:e,u:t},b.apply(this,arguments)}e.wire=function(e,t){return arguments.length<1?g("html"):null==e?g(t||"html"):y(e,t||"html")};var w,C=/^style$/i,T="_hyper_html: ",x=T+(Math.random()*new Date|0)+";",k="<!--"+x+"-->",M=function(e){return e.innerHTML='<i data-i="" class=""></i>',/class/i.test(e.firstChild.attributes[0].name)}((e.document=document).createElement("p")),D=M&&new RegExp("([^\\S][a-z]+[a-z0-9_-]*=)(['\"])"+k+"\\2","g"),A=M&&function(e,t,n){return w.push(t.slice(1,-1)),t+n+x+n},E=T.trim||function(){return this.replace(/^\s+|\s+$/g,"")},H=[].slice,L=typeof WeakMap==typeof L?{get:function(e){return e[T]},set:function(e,t){Object.defineProperty(e,T,{configurable:!0,value:t})}}:new WeakMap;return e}();try{module.exports=hyperHTML}catch(e){}