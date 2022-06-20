(()=>{"use strict";var n,e,t,r,o,a,i,c,s,d,l,u,p,f,m={426:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(117),t.b),l=i()(o());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Sirin+Stencil&display=swap);"]);var u=s()(d);l.push([n.id,"* {\n    font-family: 'Sirin Stencil', cursive;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.header {\n    height: 12.5vh;\n    background-color:seagreen;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.header > h1 {\n    font-size: 5rem;\n    align-self: center;\n    margin-left: 10vw;\n    color: whitesmoke;\n    position: relative;\n    bottom: 5px;\n\n}\n\n.buttons {\n    justify-self: end;\n    align-self: center;\n    margin-right: 10vw;\n    display: flex;\n    gap: 2rem;\n}\n\n.buttons > button {\n    font-size: 2.5rem;\n    background-color: seagreen;\n    color: whitesmoke;\n    border-width: 0;\n    font-weight: 500;\n}\n\n.image {\n    height: 87.5vh;\n    background-image: url("+u+");\n    background-size: cover;\n    background-position-y: -250px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n}\n\n.menuimage {\n    height: 87.5vh;\n    background-image: url("+u+");\n    background-size: cover;\n    background-position-y: -250px;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    gap: 2rem;\n    padding: 2rem;\n    justify-items: center;\n}\n\n.menuimage > div {\n    background-color: rgba(46, 139, 87, 0.6);\n    width: 35vw;\n    border-width: 5px;\n    border-color: black;\n    border-style: solid;\n    border-radius: 10px;\n}\n\n.contactimage {\n    height: 87.5vh;\n    background-image: url("+u+");\n    background-size: cover;\n    background-position-y: -250px;\n    display: grid;\n    grid-template-rows: 1fr;\n    gap: 2rem;\n    padding: 2rem;\n    justify-items: center;\n}\n\n.contactimage > div {\n    background-color: rgba(46, 139, 87, 0.6);\n    width: 35vw;\n    border-width: 5px;\n    border-color: black;\n    border-style: solid;\n    border-radius: 10px;\n}\n\n.darkbg {\n    background-color: rgba(46, 139, 87, 0.6);\n    padding: 10px;\n    font-size: 1.25rem;\n    border-radius: 0.20rem;\n}\n\n\n\n\n",""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},117:(n,e,t)=>{n.exports=t.p+"55c90d51f4e06460debf.jpg"}},g={};function h(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return m[n](t,t.exports,h),t.exports}h.m=m,h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;h.g.importScripts&&(n=h.g.location+"");var e=h.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=n})(),h.b=document.baseURI||self.location.href,h.nc=void 0,n=h(379),e=h.n(n),t=h(795),r=h.n(t),o=h(569),a=h.n(o),i=h(565),c=h.n(i),s=h(216),d=h.n(s),l=h(589),u=h.n(l),p=h(426),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,function(){const n=document.createElement("div");n.classList.add("header"),content.appendChild(n);const e=document.createElement("h1");e.textContent="BISTRO",n.appendChild(e);const t=document.createElement("div");t.classList.add("buttons"),n.appendChild(t);const r=document.createElement("button");r.textContent="HOME",t.appendChild(r);const o=document.createElement("button");o.textContent="MENU",t.appendChild(o);const a=document.createElement("button");a.textContent="CONTACT US",t.appendChild(a);const i=document.createElement("div");i.classList.add("image"),content.appendChild(i);const c=document.createElement("div");c.classList.add("darkbg"),i.appendChild(c);const s=document.createElement("h1");s.textContent="An Experience You Won’t Forget",c.appendChild(s)}()})();