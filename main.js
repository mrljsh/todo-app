(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,300&display=swap);"]),i.push([n.id,":root {\n    --neutral-200: #E5E5E5;\n}\n\n*, ::before, ::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    font-family: 'Montserrat', sans-serif;\n    flex-direction: column;\n    background-color: var(--neutral-200);\n}\n\n.header {\n    display: flex;\n    background-color: white;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.2rem;\n}\n\n.header > h1 {\n    font-weight: 300;\n    padding: 16px;\n}\n\n.content {\n    flex: 1;\n    display: flex;\n    padding: 8px;\n}\n\n.folders {\n    flex: 1;\n    border-radius: 24px;\n    background-color: white;\n    padding: 16px;\n}\n\n.folders > p:first-child {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\n.folders > .addFolderContainer {\n    text-align: center;\n    margin: 8px;\n    background-color: var(--neutral-200);\n    border-radius: 16px;\n    padding: 8px 16px;\n    display: flex;\n}\n\n.addFolderContainer > input[type=\"text\"]{\n    flex: 1;\n    font-size: 16px;\n    appearance: none;\n    border: 0;\n    background-color: var(--neutral-200);\n    border-bottom: 1px solid var(--neutral-200);\n    padding: 8px 0px;\n    font-family: 'Montserrat', sans-serif;\n}\n\n.addFolderContainer > input[type=\"text\"]:focus {\n    outline: 0;\n    border-bottom: 1px solid black;\n    transition: 0.7s;\n}\n\n.addFolderContainer > button {\n    font-size: 24px;\n    padding: 0 8px;\n    appearance: none;\n    border: 0;\n    background-color: var(--neutral-200);\n}\n\n.folderLists {\n    padding: 8px;\n}\n\n.folderLists > p {\n    margin: 8px;\n    text-transform: uppercase;\n}\n\n\n.notes {\n    flex: 4;\n}\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var v=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),f=t(426),v={};v.styleTagTransform=u(),v.setAttributes=c(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;let m=[];const x=document.querySelector(".folderLists"),h=m;function y(){x.replaceChildren(),h.forEach((n=>{const e=document.createElement("p");e.textContent=n.name,x.append(e)}))}(()=>{const n=document.querySelector(".addFolderContainer > input"),e=document.querySelector(".addFolderContainer > button");e.addEventListener("click",(()=>{var e;""!==n.value?(e=n.value,m.push({name:e,toDoList:[]}),n.value="",y()):console.log("ERROR")})),n.addEventListener("keypress",(n=>{"Enter"===n.key&&(n.preventDefault(),e.click())}))})(),y()})()})();