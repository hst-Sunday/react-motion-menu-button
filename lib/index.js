!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react-motion"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["react-motion","prop-types","react"],e):"object"==typeof exports?exports.reactMotionMenuButton=e(require("react-motion"),require("prop-types"),require("react")):t.reactMotionMenuButton=e(t["react-motion"],t["prop-types"],t.react)}(window,function(t,e,n){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=n},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEX0lEQVRoQ+2ZTWwbRRTH/2+9diM3RQlUUFSVSnzU9bpEUQJybUMJiWojxAGpB05VKz56AAmExIcqcUFwAMGNS6VWtHDgwAUhAcImLabUH60UoYbYCWqhBdQSRCqERCCud/eh2cZh46zX9mbtOJLnuPtm5v+b997sm1nCOm+0zvWjC7DWHux6wMoD0/HwsA75HQIPAVAZNCkTvRhInjnvtsdc98B0IvoMA0cAksximaGC+FAomT3uJoSrAIV45EkCHQORGHcOzEcAEBM9S0A/mJnBT4dSuffdgnANwCyeGb+QynuUU9mfhdDiaHQ7ZGRAtNVtCFcAqsXLqh4NnMpdMa9yqyBWDdCI+AqIgGCZThPhDrc8sSqAZsRXIH4YjWxVZSnrFoRjACfiWwHhCGA14t2GaBrADfFVECIn7nSaE00BuCm+AvHTWPi2fz2yyAlHEA0DtEK8GxANAbRSvBliQZa/ARBoJpzqArRD/FJOjAxv1jb0nGkGwhagneKdQtQEqCrMAGh7lWR+3K0izG6cYmL3EOCZMGzqFICWACvFA7qGB3eNZ4R7W96mxsKKJMuFpYlsIFYArKgqRd2CtQNgxq9E2FbLE8sApuOxAww+btTzzBdI533skSbXEoCIo8x0AsAOAQHig0oy92HFO8sAivHoHIhuAfgyUIrqJYmlDb7f1hJA1jRFJ89fGiEvPMHAbCiZud0SoJCIvE6gYZTxnDiMTI3cv6UTAHaM56cvjEbvui7TewTOKqnsm5YA1dnZLMDHgEcZCwfIQ9sl4Nbq8RjSpeC1Uo4mJsp2O4E5iYUHBEAte9vvQDMAl0YG+xZ8/v0AbrYTp+s8z6x/sevk2WItu7YDnI8PbPTCf4gg3WTki87zksR/mAUSUx8T9VX2dr2Mj0Lp3EUriLYDzCQijzBT2NjqWE8p42fzVsJmHr4vwLK8DyR5QbgaTGaPdgRAMR55mUB+Ijq9M5n52i6ExKUX4HlM2PTj73e3pCbnV+Se6UPW8hwQ4eND70uGiOv6B8F0/rIdwOQD9/Z7/ZueFzYllY8NVt1eiOdtDaHvRgb7enz+F8TExHR051eZq3YAs/GBjX8uArOKE5W7I3OfLkBlNRrZRrseWLx+7IaQVeKJG4MFWZ4V7xjYE0pmvq22a0UIFRKxEAFTYi4P68FAKjfjrJRQFJ+0rf8fYxzWn7K6Fm8FQDEeeRwkfWLsbGp5c/DkuWuOAESnYjyaBtFDDP5RLpV2B9ITc+bB3AaYicU26b2cBmgIzN8rqeyA3bZc91aiuDf2KCR8vljDXCGitwgoMGksnqllvVcW5YHRtM9AVHO1bnwrtB6G9wkjLFX9S/Li94pAZs/dYH4FRPfceKYfMB9erEDqAix64Q0QvWY1gHFIWnpBqPvjlg3u/5vxM6eqGWdgejuUyhy2W31jQeoZVN4XE9H9AL0KINRoHyd2DP7Uq+mH7c4Ay/idTNJJfRr2QCeJ7nqgk7yx7kPoP+8ybl5kf+vcAAAAAElFTkSuQmCC"},function(t,e){t.exports="data:image/png;base64,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"},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),i=n(1),a=n.n(i),s=(n(6),n(3)),c=n.n(s),u=n(4),f=n.n(u),l=n(0);function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){d(t,e,n[e])})}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=function(t){var e=t.mode,n=void 0===e?"sur":e,r=t.isOpen,i=void 0!==r&&r,a=t.buttonSize,s=void 0===a?60:a,u=t.backgroundColor,d=void 0===u?"#eee":u,b=t.left,A=void 0===b?155:b,g=t.top,m=void 0===g?450:g,v=t.childrenButtonData,y=void 0===v?[]:v,h=t.mainButtonImgSrc,j=void 0===h?c.a:h,w=t.closeImgSrc,E=void 0===w?f.a:w,C=t.ChildButtonToMainButtonSpacingDistance,O=void 0===C?80:C,x=t.SeparationAngle,S=void 0===x?40:x,B=s-25,M=p({},{width:s,height:s},{backgroundColor:d},{left:A,top:m});return o.a.createElement("div",null,function(t,e,n,r,a,s){var c={stiffness:400,damping:28},u=(180-(n-1)*a)/2,f=Array.from({length:n}).map(function(n,r){return{top:e,left:t,rotate:-180,scale:.5}}),d=function(t){return t*(Math.PI/180)},b=function(t){return{positionX:r*Math.cos(d(t*a+u)),positionY:r*Math.sin(d(t*a+u))}},A=function(t){return{positionX:r*(t+1)}},g=function(t){return{positionY:r*(t+1)}},m=function(n){return Array.from({length:n}).map(function(n,o){return i?function(n,o){var i={top:Object(l.spring)(e-b(o).positionY,c),left:Object(l.spring)(t-b(o).positionX,c),rotate:Object(l.spring)(0,c),scale:Object(l.spring)(.76,c)};switch(n){case"sur":return i;case"left":return p({},i,{top:Object(l.spring)(e),left:Object(l.spring)(t-A(o).positionX,c)});case"right":return p({},i,{top:Object(l.spring)(e),left:Object(l.spring)(t+A(o).positionX,c)});case"up":return p({},i,{top:Object(l.spring)(e-g(o).positionY),left:Object(l.spring)(t)});case"down":return p({},i,{top:Object(l.spring)(e+g(o).positionY),left:Object(l.spring)(t)});case"LT":return p({},i,{top:o%2==0?Object(l.spring)(e-g(o).positionY+o/2*r,c):Object(l.spring)(e),left:o%2==0?Object(l.spring)(t):Object(l.spring)(t-A(o).positionX+(o+1)/2*r,c)});case"RT":return p({},i,{top:o%2==0?Object(l.spring)(e-g(o).positionY+o/2*r,c):Object(l.spring)(e),left:o%2==0?Object(l.spring)(t):Object(l.spring)(t+A(o).positionX-(o+1)/2*r,c)});default:return i}}(s,o):{top:Object(l.spring)(e,c),left:Object(l.spring)(t,c),rotate:Object(l.spring)(-180,c),scale:Object(l.spring)(.5,c)}})}(n);return o.a.createElement(l.StaggeredMotion,{defaultStyles:f,styles:function(t){return t.map(function(t,e){return m[e]})}},function(t){return o.a.createElement("div",null,t.map(function(t,e){var n=y[e],r=n.bgColor,i=void 0===r?"#eee":r,a=n.imgSrc,s=n.imgAlt,c=void 0===s?"no."+e:s;return o.a.createElement("div",{key:e,className:"float-button",style:p({},M,{top:t.top,left:t.left,backgroundColor:i,transform:"rotate(".concat(t.rotate,"deg) scale(").concat(t.scale,")")}),onClick:function(t){return y[e].onClick(t)}},a?o.a.createElement("img",{src:a,width:B,alt:c}):"")}))})}(A,m,y.length,O,S,n),o.a.createElement(l.Motion,{style:t.isOpen?{rotate:Object(l.spring)(360,{stiffness:500,damping:30})}:{rotate:Object(l.spring)(0,{stiffness:500,damping:30})}},function(e){return o.a.createElement("div",{className:"float-button",style:p({},M,{transform:"rotate(".concat(e.rotate,"deg)")}),onClick:function(e){return t.onClick(e)}},t.isOpen?o.a.createElement("img",{src:E,width:B,alt:"close-img"}):o.a.createElement("img",{src:j,width:B,alt:"main-img"}))}))};b.propTypes={mode:a.a.string,isOpen:a.a.bool,buttonSize:a.a.number,backgroundColor:a.a.string,left:a.a.number,top:a.a.number,childrenButtonData:a.a.array,mainButtonImgSrc:a.a.string,closeImgSrc:a.a.string,ChildButtonToMainButtonSpacingDistance:a.a.number,SeparationAngle:a.a.number},e.default=b},function(t,e,n){var r=n(7);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(8)(!1)).push([t.i,".float-button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px;\r\n}\r\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,u=0,f=[],l=n(10);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(v(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function b(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function A(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return m(e,t.attrs),b(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function v(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=u++;n=c||(c=g(e)),r=j.bind(null,n,a,!1),o=j.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),b(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){A(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){A(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&p(d(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var y,h=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function j(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=h(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});