(this.webpackJsonpwavelength=this.webpackJsonpwavelength||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(3),c=a.n(i),r=(a(10),a(11),a(4)),s=a(1);a(12),a(13);function o(e){var t=e.hide,a=e.targetValue,n=e.markerValue,i=e.setMarkerValue,c=function(e){return function(){e&&n<100?i(n+.25):!e&&n>0&&i(n-.25)}};return l.a.createElement("div",{className:"scale-container"},l.a.createElement("div",{id:"scale",className:"scale",onClick:function(e){var t=document.getElementById("scale").clientWidth,a=e.clientX-.01*window.innerWidth;i(a/t*100)}},l.a.createElement("div",{className:"indents"},l.a.createElement("div",{className:"indent long"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent short"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent long"})),l.a.createElement("div",{className:"indents"},l.a.createElement("div",{className:"indent long"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent short"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent long"})),l.a.createElement("div",{className:"indents"},l.a.createElement("div",{className:"indent long"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent short"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent long"})),l.a.createElement("div",{className:"indents"},l.a.createElement("div",{className:"indent long"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent short"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent long"})),function(){var e={left:"".concat(n-.1,"%")};return l.a.createElement("div",{style:e,className:"marker"})}(),function(){if(t)return null;var e={left:"".concat(a-11,"%")};return l.a.createElement("div",{style:e,className:"target"},l.a.createElement("div",{className:"two points"},"2"),l.a.createElement("div",{className:"three points"},"3"),l.a.createElement("div",{className:"four points"},"4"),l.a.createElement("div",{className:"three points"},"3"),l.a.createElement("div",{className:"two points"},"2"))}()),l.a.createElement("div",{className:"midpoint"},l.a.createElement("i",{className:"fas fa-sort-up"})),l.a.createElement("div",{className:"controller"},l.a.createElement("i",{className:"far fa-caret-square-left",onClick:c(!1)}),l.a.createElement("i",{className:"far fa-caret-square-right",onClick:c(!0)})))}a(14);function m(e){var t=e.spectrum;return l.a.createElement("div",{className:"spectrum-container"},l.a.createElement("div",{className:"spectrum"},l.a.createElement("div",{className:"half left"},l.a.createElement("i",{className:"fas fa-long-arrow-alt-left"}),t.left),l.a.createElement("div",{className:"half right"},l.a.createElement("i",{className:"fas fa-long-arrow-alt-right"}),t.right)))}a(15);function d(e){var t=e.pointsA,a=e.pointsB,n=e.teamATurn;return l.a.createElement("div",{className:"scoreboard-container"},l.a.createElement("div",{className:"team-score ".concat(n?"turn":null)},l.a.createElement("div",null,"Team A"),t),l.a.createElement("div",{className:"team-score ".concat(n?null:"turn")},l.a.createElement("div",null,"Team B"),a))}a(16);function u(e){var t=e.pointsA,a=e.pointsB,n=t>a?"Team A Wins":t===a?"It's a Draw":"Team B Wins";return l.a.createElement("div",{className:"end"},l.a.createElement("div",{className:"scoreboard-container"},l.a.createElement("div",{className:"team-score"},l.a.createElement("div",null,"Team A"),t),l.a.createElement("div",{className:"team-score"},l.a.createElement("div",null,"Team B"),a)),l.a.createElement("div",null,n))}function f(e){var t,a=e.pointsA,n=e.pointsB,i=e.modal,c=e.setModal;switch(i){case"end":t=l.a.createElement(u,{pointsA:a,pointsB:n});break;default:return null}return"end"===i?l.a.createElement("div",{className:"modal-background"},l.a.createElement("div",{className:"modal-child",onClick:function(e){return e.stopPropagation()}},t)):l.a.createElement("div",{className:"modal-background",onClick:function(){return c(null)}},l.a.createElement("div",{className:"modal-child",onClick:function(e){return e.stopPropagation()}},t))}var v=[{left:"Sad Song",right:"Happy Song"},{left:"Sad Movie",right:"Happy Movie"},{left:"Rough",right:"Smooth"},{left:"Slow",right:"Fast"},{left:"Useless Invention",right:"Useful Invention"},{left:"Ugly Man",right:"Handsome Man"},{left:"Ugly Woman",right:"Pretty Woman"},{left:"Worthless",right:"Priceless"},{left:"Bad Show",right:"Good Show"},{left:"Bad Song",right:"Good Song"},{left:"Bad Movie",right:"Good Movie"},{left:"Fragile",right:"Indestructible"},{left:"Low Quality",right:"High Quality"},{left:"Round",right:"Pointy"},{left:"Inflexible",right:"Flexible"},{left:"Unhygienic",right:"Hygienic"},{left:"Taste Bad",right:"Taste Good"},{left:"Sick",right:"Healthy"},{left:"Skinny",right:"Fat"},{left:"Uncool",right:"Cool"},{left:"Quiet",right:"Loud"},{left:"Wet",right:"Dry"},{left:"Villain",right:"Hero"},{left:"Cold",right:"Hot"},{left:"Dangerous",right:"Safe"},{left:"Easy Task",right:"Hard Task"},{left:"Useless Body Part",right:"Useful Body Part"},{left:"Light",right:"Heavy"},{left:"Boring",right:"Exciting"},{left:"Small",right:"Big"}];function g(){var e=Object(n.useState)(50),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(!1),u=Object(s.a)(c,2),g=u[0],h=u[1],E=Object(n.useState)(50),N=Object(s.a)(E,2),p=N[0],b=N[1],k=Object(n.useState)(0),S=Object(s.a)(k,2),y=S[0],w=S[1],j=Object(n.useState)(1),B=Object(s.a)(j,2),O=B[0],M=B[1],T=Object(n.useState)(!0),H=Object(s.a)(T,2),A=H[0],C=H[1],W=Object(n.useState)({left:"",right:""}),P=Object(s.a)(W,2),U=P[0],I=P[1],V=Object(n.useState)(v),G=Object(s.a)(V,2),x=G[0],F=G[1],D=Object(n.useState)(!1),L=Object(s.a)(D,2),Q=L[0],q=L[1],J=Object(n.useState)(),R=Object(s.a)(J,2),X=R[0],$=R[1],z=function(e){A?w(y+e):M(O+e)};return l.a.createElement("div",{className:"game"},l.a.createElement(f,{modal:X,pointsA:y,pointsB:O}),l.a.createElement(d,{pointsA:y,pointsB:O,teamATurn:A}),l.a.createElement(o,{hide:g,setHide:h,targetValue:p,markerValue:a,setMarkerValue:i}),l.a.createElement("div",{className:"button-container"},Q?null:l.a.createElement("button",{onClick:function(){x.length?(!function(){var e=Math.floor(100*Math.random())+1;b(e)}(),function(){var e=Math.floor(Math.random()*x.length),t=Object(r.a)(x),a=t.splice(e,1);F(t),I(a[0])}(),q(!0)):$("end")}},"Be Psychic"),Q&&!g?l.a.createElement("button",{onClick:function(){h(!0)}},"Hide Target"):null,g?l.a.createElement("button",{onClick:function(){a>=p-1.75&&a<=p+1.75?z(4):a>=p-6&&a<=p+6?z(3):a>=p-10&&a<=p+10&&z(2),C(!A),h(!1),q(!1)}},"Submit Guess"):null),l.a.createElement(m,{spectrum:U}))}var h=function(){return l.a.createElement(g,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.01228d37.chunk.js.map