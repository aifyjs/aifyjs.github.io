/*!
 * 
 *   @xprilion/aifyjs v0.1.2
 *   https://github.com/xprilion/aifyjs
 * 
 *   Copyright (c) Anubhav Singh (https://github.com/xprilion)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.aify=t():e.aify=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);window.aifyjs=function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),o(this,"labels",(function(){$.ajax({method:"POST",url:"https://8b5766f9.ngrok.io/api/labels",data:{pageBody:this.html},success:function(e){console.log(e);for(var t=e.data.changes,n=0;n<t.length;n++){var o=t[n].xpath,r=t[n].changes;for(var a in r){var l=document.evaluate(o,document,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null);try{if(l.singleNodeValue.setAttribute(a,r[a]),void 0!==l.singleNodeValue){var i=document.createElement("div");l.singleNodeValue.parentNode.insertBefore(i,l.singleNodeValue),i.style.background="black",i.appendChild(l.singleNodeValue);var u=document.createElement("div");u.style.color="white",u.innerHTML=r[a],i.appendChild(u)}}catch(e){}}}}})})),o(this,"captions",(function(){$.ajax({method:"POST",url:"https://8b5766f9.ngrok.io/api/captions",data:{pageBody:this.html},success:function(e){console.log(e);for(var t=e.data.changes,n=0;n<t.length;n++){var o=t[n].xpath,r=t[n].changes;for(var a in r){var l=document.evaluate(o,document,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null);try{if(l.singleNodeValue.setAttribute(a,r[a]),void 0!==l.singleNodeValue){var i=document.createElement("div");l.singleNodeValue.parentNode.insertBefore(i,l.singleNodeValue),i.style.background="black",i.appendChild(l.singleNodeValue);var u=document.createElement("div");u.style.color="white",u.innerHTML=r[a],i.appendChild(u)}}catch(e){}}}}})}));var t=window.$;this.html=t("html").html(),t.ajax({method:"POST",url:"https://8b5766f9.ngrok.io/api/check",success:function(e){console.log(e)}})},t.default=aifyjs}])}));