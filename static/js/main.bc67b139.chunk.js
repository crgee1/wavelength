(this.webpackJsonpwavelength=this.webpackJsonpwavelength||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),i=a.n(l),r=(a(10),a(11),a(4)),s=a(1);a(12),a(13);function m(e){var t=e.hide,a=e.targetValue,n=e.markerValue,l=e.setMarkerValue,i=function(e){return function(){e&&n<100?l(n+.25):!e&&n>0&&l(n-.25)}};return c.a.createElement("div",{className:"scale-container"},c.a.createElement("div",{id:"scale",className:"scale",onClick:function(e){var t=document.getElementById("scale").clientWidth,a=e.clientX-.01*window.innerWidth;l(a/t*100)}},c.a.createElement("div",{className:"indents"},c.a.createElement("div",{className:"indent long"}),c.a.createElement("div",{className:"indent mid"}),c.a.createElement("div",{className:"indent short"}),c.a.createElement("div",{className:"indent mid"}),c.a.createElement("div",{className:"indent long"})),c.a.createElement("div",{className:"indents"},c.a.createElement("div",{className:"indent long"}),c.a.createElement("div",{className:"indent mid"}),c.a.createElement("div",{className:"indent short"}),c.a.createElement("div",{className:"indent mid"}),c.a.createElement("div",{className:"indent long"})),c.a.createElement("div",{className:"indents"},c.a.createElement("div",{className:"indent long"}),c.a.createElement("div",{className:"indent mid"}),c.a.createElement("div",{className:"indent short"}),c.a.createElement("div",{className:"indent mid"}),c.a.createElement("div",{className:"indent long"})),c.a.createElement("div",{className:"indents"},c.a.createElement("div",{className:"indent long"}),c.a.createElement("div",{className:"indent mid"}),c.a.createElement("div",{className:"indent short"}),c.a.createElement("div",{className:"indent mid"}),c.a.createElement("div",{className:"indent long"})),function(){var e={left:"".concat(n-.1,"%")};return c.a.createElement("div",{style:e,className:"marker"})}(),function(){if(t)return null;var e={left:"".concat(a-11,"%")};return c.a.createElement("div",{style:e,className:"target"},c.a.createElement("div",{className:"two points"},"2"),c.a.createElement("div",{className:"three points"},"3"),c.a.createElement("div",{className:"four points"},"4"),c.a.createElement("div",{className:"three points"},"3"),c.a.createElement("div",{className:"two points"},"2"))}()),c.a.createElement("div",{className:"midpoint"},c.a.createElement("i",{className:"fas fa-sort-up"})),c.a.createElement("div",{className:"controller"},c.a.createElement("i",{className:"far fa-caret-square-left",onClick:i(!1)}),c.a.createElement("i",{className:"far fa-caret-square-right",onClick:i(!0)})))}a(14);function o(e){var t=e.spectrum;return c.a.createElement("div",{className:"spectrum-container"},c.a.createElement("div",{className:"spectrum"},c.a.createElement("div",{className:"half left"},c.a.createElement("i",{className:"fas fa-long-arrow-alt-left"}),t.left),c.a.createElement("div",{className:"half right"},c.a.createElement("i",{className:"fas fa-long-arrow-alt-right"}),t.right)))}a(15);function d(e){var t=e.pointsA,a=e.pointsB,n=e.teamATurn;return c.a.createElement("div",{className:"scoreboard-container"},c.a.createElement("div",{className:"team-score ".concat(n?"turn":null)},c.a.createElement("div",null,"Team A"),t),c.a.createElement("div",{className:"team-score ".concat(n?null:"turn")},c.a.createElement("div",null,"Team B"),a))}function u(){var e=Object(n.useState)(50),t=Object(s.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(!1),u=Object(s.a)(i,2),v=u[0],E=u[1],f=Object(n.useState)(50),N=Object(s.a)(f,2),h=N[0],g=N[1],b=Object(n.useState)(0),p=Object(s.a)(b,2),j=p[0],O=p[1],w=Object(n.useState)(0),S=Object(s.a)(w,2),k=S[0],y=S[1],M=Object(n.useState)(!0),B=Object(s.a)(M,2),C=B[0],T=B[1],V=Object(n.useState)({left:"",right:""}),A=Object(s.a)(V,2),H=A[0],W=A[1],I=Object(n.useState)([{left:"Sad Song",right:"Happy Song"},{left:"Rough",right:"Smooth"},{left:"Slow",right:"Fast"},{left:"Least Useful Technology",right:"Most Useful Technology"},{left:"Ugly Man",right:"Handsome Man"},{left:"Fragile",right:"Indestructible"},{left:"Small",right:"Big"}]),U=Object(s.a)(I,2),q=U[0],F=U[1],J=Object(n.useState)(!1),x=Object(s.a)(J,2),G=x[0],L=x[1],P=function(e){C?O(j+e):y(k+e)};return c.a.createElement("div",{className:"game"},c.a.createElement(d,{pointsA:j,pointsB:k,teamATurn:C}),c.a.createElement(m,{hide:v,setHide:E,targetValue:h,markerValue:a,setMarkerValue:l}),c.a.createElement("div",{className:"button-container"},G?null:c.a.createElement("button",{onClick:function(){!function(){var e=Math.floor(100*Math.random())+1;g(e)}(),function(){var e=Math.floor(Math.random()*q.length),t=Object(r.a)(q),a=t.splice(e,1);F(t),W(a[0])}(),L(!0)}},"Be Psychic"),G&&!v?c.a.createElement("button",{onClick:function(){E(!0)}},"Hide"):null,v?c.a.createElement("button",{onClick:function(){a>=h-1.75&&a<=h+1.75?P(4):a>=h-6&&a<=h+6?P(3):a>=h-10&&a<=h+10&&P(2),T(!C),E(!1),L(!1)}},"Submit Guess"):null),c.a.createElement(o,{spectrum:H}))}var v=function(){return c.a.createElement(u,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.bc67b139.chunk.js.map