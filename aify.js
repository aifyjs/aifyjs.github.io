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
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.aify=t():e.aify=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);window.aifyjs=function e(){var t=this;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),o(this,"labels",(function(){var e=this;e.labelcounter=0,$.ajax({method:"POST",url:"https://568bd7cf.ngrok.io/api/labels",data:{pageBody:e.html},success:function(t){console.log(t);var n=t.data.changes;e.labelchanges=n;for(var o=0;o<n.length;o++){var a=n[o].xpath,i=n[o].changes;for(var s in i){var r=document.evaluate(a,document,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null);try{r.singleNodeValue.setAttribute(s,i[s]),r.singleNodeValue.setAttribute("change","label_"+e.labelcounter),e.labelchanges[o].element="label_"+e.labelcounter,e.labelcounter+=1}catch(e){console.log("Labels: "),console.log(a),console.log(e)}}}}})})),o(this,"captions",(function(){var e=this;e.captioncounter=0,$.ajax({method:"POST",url:"https://568bd7cf.ngrok.io/api/captions",data:{pageBody:e.html},success:function(t){console.log(t);var n=t.data.changes;e.captionchanges=n;for(var o=0;o<n.length;o++){var a=n[o].xpath,i=n[o].changes;for(var s in i){var r=document.evaluate(a,document,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null);try{r.singleNodeValue.setAttribute(s,i[s]),r.singleNodeValue.setAttribute("change","caption_"+e.captioncounter),e.captionchanges[o].element="caption_"+e.captioncounter,e.captioncounter+=1}catch(e){console.log("captions"),console.log(a),console.log(e)}}}}})})),o(this,"displayLabels",(function(){for(var e=this.labelchanges,t=0;t<e.length;t++){var n=e[t].element,o=e[t].changes;for(var a in o){var i=document.querySelector("[change="+n+"]");try{var s=document.createElement("span");i.parentNode.insertBefore(s,i),s.style.background="red",s.appendChild(i);var r=document.createElement("span");r.style.color="white",r.innerHTML=o[a],s.appendChild(r)}catch(e){console.log("labels"),console.log(i),console.log(e)}}}})),o(this,"displayCaptions",(function(){for(var e=this.captionchanges,t=0;t<e.length;t++){var n=e[t].element,o=e[t].changes;for(var a in o){var i=document.querySelector("[change="+n+"]");try{var s=document.createElement("div");i.parentNode.insertBefore(s,i),s.style.background="black",s.appendChild(i);var r=document.createElement("div");r.style.color="white",r.innerHTML=o[a],s.appendChild(r)}catch(e){console.log("captions"),console.log(i),console.log(e)}}}})),o(this,"speak",(function(e){console.log(e),speechSynthesis.speak(new SpeechSynthesisUtterance(e))})),o(this,"updateLinksList",(function(){for(var e=document.links,t=0;t<e.length;t++)e[t].setAttribute("linkid",t),console.log(e[t]),this.linksList.push(e[t])})),o(this,"getPageLinks",(function(){var e=this,t=e.linksList;e.speak("The links on this page are - ");for(var n=0;n<t.length;n++)e.speak("Link number "+n+" - "+t[n].href)})),o(this,"followLink",(function(e){this.speak("Opening link number "+e),document.querySelector("[linkid='"+e+"']").click()})),o(this,"updateImageList",(function(){for(var e=document.images,t=0;t<e.length;t++)e[t].setAttribute("imgid",t),console.log(e[t]),this.imageList.push(e[t])})),o(this,"getImages",(function(){var e=this,t=e.imageList;e.speak("The images on this page are - ");for(var n=0;n<t.length;n++)e.speak("Image number "+n+" - "+t[n].alt)})),o(this,"goDialogFlow",(function(e){var t=this;$.ajax({type:"POST",url:"https://aifybot-jshimk.gateway.dialogflow.cloud.ushakov.co",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify({session:"test",queryInput:{text:{text:e,languageCode:"en"}}}),success:function(e){switch(e.queryResult.intent.displayName){case"PageLinks":t.getPageLinks();break;case"FollowLink":var n=e.queryResult.parameters.linkId;t.followLink(n);break;case"PageImages":t.getImages()}},error:function(){console.log("Internal Server Error")}})}));var n=window.$;window.jQuery;this.html=n("html").html(),this.linksList=[],this.imageList=[],this.fieldList=[],this.pageSummary="";var a=this,i=0;window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition;var s="",r=new window.SpeechRecognition;r.interimResults=!1,r.maxAlternatives=3,r.continuous=!0,r.onresult=function(e){for(var n,o=e.resultIndex,a=e.results.length;o<a;o++)n=e.results[o][0].transcript,e.results[o].isFinal?s+=n:n;console.log(s),t.goDialogFlow(s),s="",r.stop(),!1},n("body").dblclick((function(){1<++i?(console.log("Voice input started"),r.stop(),a.speak("Speak command: "),r.start(),!0):console.log("One more tap to activate chatbot...")})),n.ajax({method:"POST",url:"https://568bd7cf.ngrok.io/api/check",success:function(e){console.log(e)}})},t.default=aifyjs}])}));