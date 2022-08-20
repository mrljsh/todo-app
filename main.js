(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,300&display=swap);"]),i.push([n.id,':root {\n    --neutral-200: #E5E5E5;\n    --sky-blue: #38BDF8;\n}\n\n*, ::before, ::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    font-family: \'Montserrat\', sans-serif;\n    flex-direction: column;\n    background-color: var(--neutral-200);\n}\n\n.header {\n    display: flex;\n    background-color: white;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.2rem;\n}\n\n.header > h1 {\n    font-weight: 300;\n    padding: 16px;\n}\n\n.content {\n    flex: 1;\n    display: flex;\n}\n\n.content > * {\n    margin: 8px;\n}\n\n.folders {\n    flex: 1;\n    border-radius: 24px;\n    background-color: white;\n    padding: 16px;\n}\n\n.folders > p:first-child {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\n.folders > .addFolderContainer {\n    text-align: center;\n    margin: 8px;\n    background-color: var(--neutral-200);\n    border-radius: 16px;\n    padding: 8px 16px;\n    display: flex;\n}\n\n.addFolderContainer > input[type="text"]{\n    flex: 1;\n    font-size: 16px;\n    appearance: none;\n    border: 0;\n    background-color: var(--neutral-200);\n    border-bottom: 1px solid var(--neutral-200);\n    padding: 8px 0px;\n    font-family: \'Montserrat\', sans-serif;\n}\n\n.addFolderContainer > input[type="text"]:focus {\n    outline: 0;\n    border-bottom: 1px solid black;\n    transition: 0.7s;\n}\n\n.addFolderContainer > button {\n    font-size: 24px;\n    padding: 0 8px;\n    appearance: none;\n    border: 0;\n    background-color: var(--neutral-200);\n}\n\n.folderLists {\n    padding: 8px;\n}\n\n.folderLists > p {\n    padding: 8px;\n    text-transform: uppercase;\n    cursor: pointer;\n}\n\n.folderLists > .active {\n    background-color: var(--sky-blue);\n    border-radius: 8px;\n    color: white;\n    font-weight: 700;\n}\n\n\n.notes {\n    flex: 4;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    border-radius: 24px;\n    padding: 16px;\n}\n\n.project-heading-container {\n    display: flex;\n    justify-content: space-between;\n    padding: 16px;\n}\n\n.project-heading-container > p {\n    background-color: var(--sky-blue);\n    color: white;\n    padding: 8px;\n    border-radius: 8px;\n}\n\n.project-heading-container > p:hover {\n    cursor: pointer;\n}\n\n.project-heading-container > p > svg {\n    vertical-align: bottom;\n}\n\n.modal { \n    display: none;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content {\n    background-color: white;\n    margin: 15% auto;\n    padding: 16px;\n    width: 40%;\n}\n\n.modal-content > p:first-of-type {\n    font-size: 18px;\n    font-weight: bold;\n}\n\n.modal-content > label {\n    display: block;\n    margin: 1em 0.25em;\n}\n\n.modal-content > input {\n    font-size: 16px;\n    pad: 0.25em 0.5em;\n    background-color: #fff;\n    border-radius: 4px;\n    border: 2px solid whitesmoke;\n    line-height: 1;\n    height: 2.25rem;\n    width: 90%;\n}\n\n#addBtn {\n    display: block;\n    font-size: 16px;\n    appearance: none;\n    padding: 8px;\n    width: 90%;\n    margin: 16px 0px;\n    border: 2px solid whitesmoke;\n    border-radius: 8px;\n    background-color: var(--sky-blue);\n    color: white;\n}\n\n#addBtn:hover {\n    cursor: pointer;\n    filter: opacity(0.9);\n}\n\n.close {\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.todo-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 450px);\n    gap: 24px;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n    min-height: 150px;\n    background-color: var(--white);\n    border-radius: 16px;\n    padding: 16px;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n\n.todo-list > label {\n    font-size: 1.5rem;\n    font-weight: 700;\n    line-height: 1.1;\n    display: grid;\n    grid-template-columns: 1em 1fr;\n    gap: 0.5em;\n    margin-bottom: 8px;\n}\n\n.todo-list > label > input{\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #fff;\n    margin: 0;\n    width: calc(1em + 1px);\n    height: calc(1em + 1px);\n    font: inherit;\n    color: var(--neutral-200);\n    border: 1px solid var(--neutral-200);\n    border-radius: 50%;\n    display: grid;\n    place-content: center;\n}\n\n.todo-list > label > input::before{\n    content: "";\n    width: .9em;\n    height: .9em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    background-color: var(--sky-blue);\n    border-radius: 50%;\n    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\n.todo-list > label > input:checked::before {\n    transform: scale(1);\n}\n\n.todo-list > label > input:checked + span {\n    opacity: 0.4;\n    transition: 120ms;\n}\n\n\n.todo-list > label > input + span {\n  opacity: 1;\n  transition: 100ms;\n}\n\n\n.todo-list > label > span {\n    display: inline-block;\n    position: relative;\n    word-break: break-all;\n}\n\n/* .todo-list > label > input:checked + span::before {\n    content: "";\n    width: 100%;\n    height: 2px;\n    background-color: black;\n    position: absolute;\n    top: 50%;\n} */\n\n.todo-list > p {\n  word-break: break-all;\n  white-space: normal;\n}\n',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=document.querySelector(".modal"),g=()=>{h.style.display="none"};document.querySelector(".modal-content > span").addEventListener("click",(()=>{g()})),window.onclick=function(n){n.target===h&&g()};let x=[{name:"DEFAULT",toDoList:[{name:"TEST TASK",description:"TASK DESCRIPTION",done:!0}],active:!0}];function b(n,e){this.name=n,this.description=e,this.done=!1}function v(n){this.name=n,this.toDoList=[],this.active=!0}function y(){x.forEach((n=>n.active=!1))}function k(){return x.findIndex((n=>!0===n.active))}const w=document.querySelector(".folderLists"),E=x;function L(n){const e=document.querySelector(".notes");e.innerHTML="";const t=function(n){const e=document.createElement("div");e.classList.add("project-heading-container");const t=document.createElement("h2");t.textContent=n;const o=document.createElement("p");return o.innerHTML='<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M13 19C13 19.34 13.04 19.67 13.09 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C21.1 6 22 6.89 22 8V13.81C21.39 13.46 20.72 13.22 20 13.09V8H4V18H13.09C13.04 18.33 13 18.66 13 19M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z" /></svg> ADD NEW TASK',o.addEventListener("click",(()=>{h.style.display="block"})),e.append(t,o),e}(E[n].name),o=function(){const n=document.createElement("div");n.classList.add("todo-container");const e=x[k()].toDoList;return e.forEach((t=>{const o=document.createElement("div");o.classList.add("todo-list");const r=document.createElement("label"),a=document.createElement("input");a.setAttribute("type","checkbox"),a.dataset.index=e.indexOf(t),a.checked=!0===t.done,a.addEventListener("change",(n=>{t.done=n.target.checked}));const i=document.createElement("span");i.textContent=t.name,r.append(a,i);const c=document.createElement("p");c.textContent=t.description,o.append(r,c),n.append(o)})),n}();e.append(t,o)}function C(){w.replaceChildren(),E.forEach((n=>{const e=document.createElement("p");e.textContent=n.name,e.dataset.index=E.indexOf(n),w.append(e)})),function(){const n=k();document.querySelectorAll(".folderLists > *")[n].classList.add("active")}(),document.querySelectorAll(".folderLists > *").forEach((n=>{n.addEventListener("click",(()=>{var e;e=n.dataset.index,y(),x[e].active=!0,C()}))})),L(k())}(()=>{const n=document.querySelector(".addFolderContainer > input"),e=document.querySelector(".addFolderContainer > button");e.addEventListener("click",(()=>{""!==n.value?((n=>{y();const e=new v(n);x.push(e)})(n.value),n.value="",C()):console.log("ERROR")})),n.addEventListener("keypress",(n=>{"Enter"===n.key&&(n.preventDefault(),e.click())}))})(),(()=>{const n=document.getElementById("title"),e=document.getElementById("description");document.getElementById("addBtn").addEventListener("click",(()=>{((n,e)=>{const t=new b(n,e);x[k()].toDoList.push(t)})(n.value,e.value),n.value="",e.value="",L(k()),g()}))})(),C()})()})();