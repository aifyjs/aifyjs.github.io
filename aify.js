/*!
 * 
 *   @xprilion/aifyjs v0.2.1
 *   https://github.com/xprilion/aifyjs
 * 
 *   Copyright (c) Anubhav Singh (https://github.com/xprilion)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.aify=t():e.aify=t()}(window,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);window.aifyjs=function e(){var t=this;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),a(this,"goDialogFlow",(function(e){var t=this;$.ajax({type:"POST",url:"https://aifybot-jshimk.gateway.dialogflow.cloud.ushakov.co",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify({session:"test",queryInput:{text:{text:e,languageCode:"en"}}}),success:function(e){var n=e.queryResult.intent.displayName;switch(console.log("Matched Intent: "+n),n){case"PageInfo":t.describePage();break;case"PageSummary":t.readSummary();break;case"PageLinks":t.getPageLinks();break;case"FocusLink":var a=e.queryResult.parameters.linkId;t.focusLink(a);break;case"FollowLink":a=e.queryResult.parameters.linkId;t.followLink(a);break;case"PageImages":t.getImages();break;case"FocusImage":var o=e.queryResult.parameters.imageId;t.focusImage(o);break;case"AllFormItems":t.getForms();break;case"DescribeItem":t.describeItem();break;case"ClickItem":t.clickItem();break;default:t.speak("Sorry, I could not understand that. Please try again!")}},error:function(){console.log("Internal Server Error")},complete:function(){}})})),a(this,"focusLink",(function(e){document.links.item(e).focus(),this.speak("Focused on link "+e)})),a(this,"focusImage",(function(e){document.images.item(e).focus(),this.speak("Focused on image "+e)})),a(this,"clickItem",(function(){var e=document.activeElement;$(e).click()})),a(this,"describeItem",(function(){var e=document.activeElement,t=$(e).prop("tagName").toLowerCase(),n="";if("a"!=t)"li"==t?(n+="This is a list item ",0<$(e).text().length&&(n+=", it contains the text - "+$(e).text()+" ")):"img"==t?(n+="This is an image item ",0<$(e).prop("alt").length&&(n+=", it has an alternate text reading - "+$(e).prop("alt")+" ")):n+="This is an element of tag "+t;else if(n+="This is a link item ",0<$(e).text().length&&(n+=", it contains the text - "+$(e).text()+" "),n+="and points to "+$(e).prop("href")+".",this.speak(n),n="",0<$(e).children("img").length){n+=" It contains an image ";var a=$(e).children("img")[0];0<$(a).prop("alt").length&&(n+=", with an alternate text reading - "+$(a).prop("alt")+" ")}this.speak(n)})),a(this,"describePage",(function(){var e=this;e.speak("The title of this page is: "+document.title),e.speak("This page has "+e.linksList.length+" links, "+e.imageList.length+" images and "+e.formList.length+" forms on it."),e.pageSummary&&e.speak("We have a summary available for this page. You can listen to it by using the Page Summary voice command.")})),a(this,"readSummary",(function(){for(var e=this.pageSummary.split(". "),t=0;t<e.length;t++)this.speak(e[t])})),a(this,"labels",(function(){var e=this;e.labelcounter=0,$.ajax({method:"POST",url:"https://aify.thecodefoundation.dev/api/labels",data:{pageBody:e.html},success:function(t){console.log(t);var n=t.data.changes;e.labelchanges=n;for(var a=0;a<n.length;a++){var o=n[a].xpath,i=n[a].changes;for(var s in i){var r=document.evaluate(o,document,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null);try{var l=r.singleNodeValue.getAttribute(s);l&&0<l.length&&(e.labelchanges[a].changes=l),r.singleNodeValue.setAttribute(s,i[s]),r.singleNodeValue.setAttribute("change","label_"+e.labelcounter),e.labelchanges[a].element="label_"+e.labelcounter,e.labelcounter+=1}catch(e){console.log("Labels: "),console.log(o),console.log(e)}}}}})})),a(this,"captions",(function(){var e=this;e.captioncounter=0,$.ajax({method:"POST",url:"https://aify.thecodefoundation.dev/api/captions",data:{pageBody:e.html},success:function(t){console.log(t);var n=t.data.changes;e.captionchanges=n;for(var a=0;a<n.length;a++){var o=n[a].xpath,i=n[a].changes;for(var s in i){var r=document.evaluate(o,document,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null);try{var l=r.singleNodeValue.getAttribute(s);l&&0<l.length&&(console.log("Previous value: "+l),e.captionchanges[a].changes=l),r.singleNodeValue.setAttribute(s,i[s]),r.singleNodeValue.setAttribute("change","caption_"+e.captioncounter),e.captionchanges[a].element="caption_"+e.captioncounter,e.captioncounter+=1}catch(e){console.log("captions"),console.log(o),console.log(e)}}}e.updateImageList()}})})),a(this,"recommendations",(function(){$.ajax({method:"POST",url:"https://aify.thecodefoundation.dev/api/recommendations",data:{},success:function(e){console.log(e)}})})),a(this,"displayLabels",(function(){for(var e=this.labelchanges,t=0;t<e.length;t++){var n=e[t].element,a=e[t].changes;for(var o in a){var i=document.querySelector("[change="+n+"]");try{var s=document.createElement("span");i.parentNode.insertBefore(s,i),s.style.background="red",s.appendChild(i);var r=document.createElement("span");r.style.color="white",r.innerHTML=a[o],s.appendChild(r)}catch(e){console.log("labels"),console.log(i),console.log(e)}}}})),a(this,"displayCaptions",(function(){for(var e=this.captionchanges,t=0;t<e.length;t++){var n=e[t].element,a=e[t].changes;for(var o in a){var i=document.querySelector("[change="+n+"]");try{var s=document.createElement("div");i.parentNode.insertBefore(s,i),s.style.background="black",s.appendChild(i);var r=document.createElement("div");r.style.color="white",r.innerHTML=i.getAttribute("aify-caption")+i.getAttribute("aify-ocr"),s.appendChild(r)}catch(e){console.log("captions"),console.log(i),console.log(e)}}}})),a(this,"speak",(function(e){console.log(e),speechSynthesis.speak(new SpeechSynthesisUtterance(e))})),a(this,"updateLinksList",(function(){this.linksList=[];for(var e=document.links,t=0;t<e.length;t++)e[t].setAttribute("linkid",t),this.linksList.push(e[t])})),a(this,"getPageLinks",(function(){var e=this,t=e.linksList,n="";n="The links on this page are - ",e.speak(n);for(var a=0;a<t.length;a++)n="Link number "+a+" - "+t[a].text+", ",e.speak(n)})),a(this,"followLink",(function(e){this.speak("Opening link number "+e),document.querySelector("[linkid='"+e+"']").click()})),a(this,"updateImageList",(function(){this.imageList=[];for(var e=document.images,t=0;t<e.length;t++)e[t].setAttribute("imgid",t),e[t].setAttribute("tabindex",0),this.imageList.push(e[t])})),a(this,"getImages",(function(){var e=this,t=e.imageList,n="";n="The images on this page are - ",e.speak(n);for(var a=0;a<t.length;a++)n="Image number "+a+" - "+t[a].alt+", ",e.speak(n)})),a(this,"updateFormList",(function(){this.formList=[];for(var e=document.forms,t=0;t<e.length;t++)e[t].setAttribute("formid",t),this.formList.push(e[t])})),a(this,"getForms",(function(){var e=this,t=e.formList,n="";n="The forms on this page are - ",e.speak(n);for(var a=0;a<t.length;a++)n="Form number "+a+" - "+t[a].name+", ",e.speak(n)}));var n=window.$;window.jQuery;this.html=n("html").html(),this.linksList=[],this.imageList=[],this.formList=[],this.pageSummary=!1;var o=this,i=0;o.updateLinksList(),o.updateImageList(),o.updateFormList(),window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition;var s="",r=new window.SpeechRecognition;r.interimResults=!1,r.maxAlternatives=3,r.continuous=!0,r.onresult=function(e){for(var n,a=e.resultIndex,o=e.results.length;a<o;a++)n=e.results[a][0].transcript,e.results[a].isFinal?s+=n:n;console.log(s),t.goDialogFlow(s),s="",r.stop(),!1},n("body").dblclick((function(){1<++i?(console.log("Voice input started"),r.stop(),r.start(),!0):console.log("One more tap to activate chatbot...")}));var l=0,c=0;n(document).keydown((function(e){if(70==e.which){c++;var t=(new Date).getTime();t-l<500&&3==c?(l=0,c=0,console.log("Voice input started"),r.stop(),r.start(),!0):l=t}})),n.ajax({method:"POST",url:"https://aify.thecodefoundation.dev/api/check",success:function(e){console.log(e),"0"!=e.data.summary&&(o.pageSummary=e.data.summary)}})},t.default=aifyjs}])}));