!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.shuffle=function(e){for(var t=[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(e)),r=e.length,n=void 0,o=void 0;r;)o=Math.floor(Math.random()*r),n=t[--r],t[r]=t[o],t[o]=n;return t},t.detailsTagSupported=function(){var e=document.createElement("details");if(!("open"in e))return!1;e.innerHTML="<summary>a</summary>b",document.body.appendChild(e);var t=e.offsetHeight;e.open=!0;var r=t!=e.offsetHeight;return document.body.removeChild(e),r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(){document.removeEventListener("DOMContentLoaded",t,!1),window.removeEventListener("load",t,!1),e()}"complete"===document.readyState?setTimeout(e):(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1))},e.exports=t.default},function(e,t,r){"use strict";r(4);var n,o=r(1),a=(n=o)&&n.__esModule?n:{default:n},i=r(0);(0,a.default)(function(){var e=document.body,t=document.querySelectorAll(".taxonomy-cloud ul:not(.no-shuffle)");t.length&&t.forEach(function(e){var t=e.querySelectorAll("li");(0,i.shuffle)(t).forEach(function(e){return e.parentElement.appendChild(e)})});var r=document.querySelector(".entry-toc");r&&((0,i.detailsTagSupported)()||(document.body.classList.add("no-details"),document.querySelector(".toc-title").addEventListener("click",function(){r.getAttribute("open")?(r.open=!1,r.removeAttribute("open")):(r.open=!0,r.setAttribute("open","open"))})));var n=document.querySelector("#sidebar");if(n){var o=document.querySelector("#sidebar-toggler"),a=document.querySelector(".sidebar-overlay"),d=o.cloneNode(!0);d.setAttribute("id","#sidebar-inner-toggler"),n.appendChild(d);var u=function(){e.classList.remove("sidebar-toggled"),o.classList.remove("is-active"),d.classList.remove("is-active"),o.setAttribute("aria-expanded","false"),d.setAttribute("aria-expanded","false"),n.setAttribute("aria-expanded","false")},s=function(){return e.classList.contains("sidebar-toggled")?u():(e.classList.add("sidebar-toggled"),o.classList.add("is-active"),d.classList.add("is-active"),o.setAttribute("aria-expanded","true"),d.setAttribute("aria-expanded","true"),void n.setAttribute("aria-expanded","true"))};n.setAttribute("aria-expanded","false"),o.addEventListener("click",s),d.addEventListener("click",s),a.addEventListener("click",u)}})},,function(e,t){}]);