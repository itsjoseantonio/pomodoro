(this.webpackJsonpfinished=this.webpackJsonpfinished||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=n(1),i=function(e){var t=e.onClick,n=e.options,o=Object(a.useState)(0),c=Object(l.a)(o,2),i=c[0],u=c[1];return n.map((function(e,n){return r.a.createElement("button",{key:n,name:e.name,"data-time":e.time,className:n===i?"active":"",onClick:function(e){t(e.target.attributes.getNamedItem("data-time").value),u(n)}},e.name)}))},u=(n(9),n(10),Object(a.forwardRef)((function(e,t){var n=Object(a.useState)(!1),o=Object(l.a)(n,2),c=o[0],i=o[1],u=function(){i(!c)};return Object(a.useImperativeHandle)(t,(function(){return{toggleShow:u}})),r.a.createElement("div",{className:"popup ".concat(c?"show":"")},r.a.createElement("div",{className:"popup-content",onClick:u},r.a.createElement("span",{className:"popup-close",onClick:u},r.a.createElement("svg",{id:"Capa_1",enableBackground:"new 0 0 386.667 386.667",height:"512",viewBox:"0 0 386.667 386.667",width:"512",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"}))),r.a.createElement("p",{className:"quote"},"The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student."),r.a.createElement("p",{className:"author"},"- Wikipedia")))})));function s(e){return e.toString().padStart(2,"0")}var m=[{name:"Pomodoro",time:25},{name:"Long Break",time:10},{name:"Short Break",time:5}];function p(){var e=Object(a.useState)("Let's go!"),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(1500),p=Object(l.a)(c,2),d=p[0],f=p[1],h=Object(a.useState)(!1),v=Object(l.a)(h,2),b=v[0],E=v[1],k=Object(a.useRef)(null),g=Object(a.useRef)(null);function w(){var e;return document.querySelectorAll(".options button").forEach((function(t,n){t.classList.contains("active")&&(e=t.dataset.time)})),e}var j=s(Math.floor(d/60)),O=s(d-60*j);return r.a.createElement("div",{className:"app"},r.a.createElement("span",{className:"info",onClick:function(){g.current.toggleShow()}},"?"),r.a.createElement("div",{className:"options"},r.a.createElement(i,{options:m,onClick:function(e){f(60*e),E(!1),o("Let's go!"),clearInterval(k.current),k.current=null}})),r.a.createElement("h2",null,n),r.a.createElement("div",{className:"timer"},r.a.createElement("span",null,j),r.a.createElement("span",null,":"),r.a.createElement("span",null,O)),r.a.createElement("div",{className:"buttons"},!b&&r.a.createElement("button",{onClick:function(){var e=w();console.log(e),null===k.current&&(25!==parseInt(e)?o("Taking rest..."):o("You're doing great!"),E(!0),k.current=setInterval((function(){f((function(e){return e>=1?e-1:0}))}),1e3))}},"Start"),b&&r.a.createElement("button",{onClick:function(){null!==k.current&&(o("Keep it up!"),E(!1),clearInterval(k.current),k.current=null)}},"Stop"),r.a.createElement("button",{onClick:function(){var e=w();clearInterval(k.current),o("Let's go!"),f(60*e),E(!1),k.current=null}},"Reset")),r.a.createElement(u,{ref:g}))}c.a.render(r.a.createElement(p,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.fb2b4b01.chunk.js.map