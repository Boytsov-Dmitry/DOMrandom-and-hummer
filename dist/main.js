(()=>{var e={393:()=>{const e=document.querySelectorAll(".play-cage"),t=[];let o=0,r=0,s=document.querySelector(".score"),n=document.querySelector(".missed-turns");function a(){const o=function(e){let o=Math.floor(Math.random()*e);for(;o===t[0];)o=Math.floor(Math.random()*e);return t[0]=o,o}(e.length);e.forEach((e=>{e.classList.remove("play-cage-full")})),e[o].classList.add("play-cage-full")}s.textContent=`Score: ${o}`,n.textContent=`Missed Turns: ${r}`,setInterval((function(){r++,n.textContent=`Missed Turns: ${r}`,5===r&&(r=0,alert("Вы проиграли! Начать заново?")),a()}),1e3),e.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("play-cage-full")&&(o++,s.textContent=`Score: ${o}`,r=0),a()}))}));let l=document.querySelector(".field");l.addEventListener("mouseup",(()=>{l.classList.remove("mousedown"),l.classList.add("mouseup")})),l.addEventListener("mousedown",(()=>{l.classList.remove("mouseup"),l.classList.add("mousedown")}))}},t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(393)})()})();