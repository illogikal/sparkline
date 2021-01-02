var sparkline=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){var n=r(2),i=r(3),o=r(4);t.exports=function(t){return n(t)||i(t)||o()}},function(t,e,r){"use strict";r.r(e),r.d(e,"sparkline",function(){return c});var n=r(0),i=r.n(n);function o(t,e,r,n){return parseFloat((e-n*e/t+r).toFixed(2))}function a(t){return t.value}function u(t,e){var r,n=document.createElementNS("http://www.w3.org/2000/svg",t);for(r in e)n.setAttribute(r,e[r]);return n}function c(t,e,r){var n,c,s,l,f,p,d,b,y,h,v,x,m,g,A,w,k,j,O,S,C,M;n=t,i()(n.querySelectorAll("*")).forEach(function(t){return n.removeChild(t)}),e.length<=1||(r=r||{},"number"==typeof e[0]&&(e=e.map(function(t){return{value:t}})),c=r.onmousemove,s=r.onmouseout,l="interactive"in r?r.interactive:!!c,f=r.spotRadius||2,p=2*f,M=r.cursorWidth||2,d=parseFloat(t.attributes["stroke-width"].value),b=r.fetch||a,j=e.map(function(t){return b(t)}),y=parseFloat(t.attributes.width.value)-2*p,h=parseFloat(t.attributes.height.value),v=h-2*d-p,x=Math.max.apply(Math,i()(j)),m=-1e3,g=j.length-1,A=y/g,w=[],r=o(x,v,d+f,j[0]),k="M".concat(p," ").concat(r),j.forEach(function(t,r){var n=r*A+p;t=o(x,v,d+f,t);w.push(Object.assign({},e[r],{index:r,x:n,y:t})),k+=" L ".concat(n," ").concat(t)}),r=u("path",{class:"sparkline--line",d:k,fill:"none"}),j=u("path",{class:"sparkline--fill",d:"".concat(k," V ").concat(h," L ").concat(p," ").concat(h," Z"),stroke:"none"}),t.appendChild(j),t.appendChild(r),l&&(O=u("line",{class:"sparkline--cursor",x1:m,x2:m,y1:0,y2:h,"stroke-width":M}),S=u("line",{class:"sparkline--cursor",x1:0,x2:y,y1:m,y2:m,"stroke-width":M}),C=u("circle",{class:"sparkline--spot",cx:m,cy:m,r:f}),t.appendChild(O),t.appendChild(S),t.appendChild(C),M=u("rect",{width:t.attributes.width.value,height:t.attributes.height.value,style:"fill: transparent; stroke: transparent",class:"sparkline--interaction-layer"}),t.appendChild(M),M.addEventListener("mouseout",function(t){O.setAttribute("x1",m),O.setAttribute("x2",m),S.setAttribute("y1",m),S.setAttribute("y2",m),C.setAttribute("cx",m),s&&s(t)}),M.addEventListener("mousemove",function(t){var e=t.offsetX,r=(r=w.find(function(t){return t.x>=e}))||w[g],n=!(i=w[w.indexOf(r)-1])||i.x+(r.x-i.x)/2<=e?r:i,i=(r=n.x,n.y);C.setAttribute("cx",r),C.setAttribute("cy",i),O.setAttribute("x1",r),O.setAttribute("x2",r),S.setAttribute("y1",i),S.setAttribute("y2",i),c&&c(t,n)})))}e.default=c},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}}]);
//# sourceMappingURL=sparkline.js.map