(this.webpackJsonpwavelength=this.webpackJsonpwavelength||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(3),r=a.n(i),c=(a(10),a(11),a(4)),s=a(1);a(12),a(13);function o(e){var t=e.hide,a=e.targetValue,n=e.markerValue,i=e.setMarkerValue,r=e.guess,c=function(e){return function(){t&&!r&&(e&&n<100?i(n+.25):!e&&n>0&&i(n-.25))}};return l.a.createElement("div",{className:"scale-container"},l.a.createElement("div",{id:"scale",className:"scale",onClick:function(e){if(t&&!r){var a=document.getElementById("scale").clientWidth,n=e.clientX-.01*window.innerWidth;i(n/a*100)}}},l.a.createElement("div",{className:"indents"},l.a.createElement("div",{className:"indent long"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent short"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent long"})),l.a.createElement("div",{className:"indents"},l.a.createElement("div",{className:"indent long"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent short"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent long"})),l.a.createElement("div",{className:"indents"},l.a.createElement("div",{className:"indent long"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent short"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent long"})),l.a.createElement("div",{className:"indents"},l.a.createElement("div",{className:"indent long"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent short"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent long"})),function(){var e={left:"".concat(n-.1,"%")};return l.a.createElement("div",{style:e,className:"marker"})}(),function(){if(t)return null;var e={left:"".concat(a-11,"%")};return l.a.createElement("div",{style:e,className:"target"},l.a.createElement("div",{className:"two points"},"2"),l.a.createElement("div",{className:"three points"},"3"),l.a.createElement("div",{className:"four points"},"4"),l.a.createElement("div",{className:"three points"},"3"),l.a.createElement("div",{className:"two points"},"2"))}()),l.a.createElement("div",{className:"midpoint"},l.a.createElement("i",{className:"fas fa-sort-up"})),l.a.createElement("div",{className:"controller"},l.a.createElement("i",{className:"far fa-caret-square-left",onClick:c(!1)}),l.a.createElement("i",{className:"far fa-caret-square-right",onClick:c(!0)})))}a(14);function m(e){var t=e.spectrum;return l.a.createElement("div",{className:"spectrum-container"},l.a.createElement("div",{className:"spectrum"},l.a.createElement("div",{className:"half left"},l.a.createElement("i",{className:"fas fa-long-arrow-alt-left"}),t.left),l.a.createElement("div",{className:"half right"},l.a.createElement("i",{className:"fas fa-long-arrow-alt-right"}),t.right)))}a(15);function d(e){var t=e.pointsA,a=e.pointsB,n=e.teamATurn;return l.a.createElement("div",{className:"scoreboard-container"},l.a.createElement("div",{className:"team-score".concat(n?" turn":"")},l.a.createElement("div",null,"Team A"),t),l.a.createElement("div",{className:"team-score".concat(n?"":" turn")},l.a.createElement("div",null,"Team B"),a))}a(16);function u(e){var t=e.pointsA,a=e.pointsB,n=t>a?"Team A Wins":t===a?"It's a Draw":"Team B Wins";return l.a.createElement("div",{className:"end"},l.a.createElement("div",{className:"scoreboard-container"},l.a.createElement("div",{className:"team-score"},l.a.createElement("div",null,"Team A"),t),l.a.createElement("div",{className:"team-score"},l.a.createElement("div",null,"Team B"),a)),l.a.createElement("div",null,n))}function f(e){var t,a=e.pointsA,n=e.pointsB,i=e.modal,r=e.setModal;switch(i){case"end":t=l.a.createElement(u,{pointsA:a,pointsB:n});break;default:return null}return"end"===i?l.a.createElement("div",{className:"modal-background"},l.a.createElement("div",{className:"modal-child",onClick:function(e){return e.stopPropagation()}},t)):l.a.createElement("div",{className:"modal-background",onClick:function(){return r(null)}},l.a.createElement("div",{className:"modal-child",onClick:function(e){return e.stopPropagation()}},t))}var g=[{left:"Sad Song",right:"Happy Song"},{left:"Sad Movie",right:"Happy Movie"},{left:"Rough",right:"Smooth"},{left:"Slow",right:"Fast"},{left:"Useless Invention",right:"Useful Invention"},{left:"Ugly Man",right:"Handsome Man"},{left:"Ugly Woman",right:"Pretty Woman"},{left:"Worthless",right:"Priceless"},{left:"Bad Show",right:"Good Show"},{left:"Bad Song",right:"Good Song"},{left:"Bad Movie",right:"Good Movie"},{left:"Fragile",right:"Indestructible"},{left:"Low Quality",right:"High Quality"},{left:"Cold",right:"Hot"},{left:"Round",right:"Pointy"},{left:"Inflexible",right:"Flexible"},{left:"Unhygienic",right:"Hygienic"},{left:"Taste Bad",right:"Taste Good"},{left:"Sick",right:"Healthy"},{left:"Skinny",right:"Fat"},{left:"Selfish",right:"Giving"},{left:"Uncool",right:"Cool"},{left:"Quiet",right:"Loud"},{left:"Wet",right:"Dry"},{left:"Close",right:"Far"},{left:"Boring",right:"Exciting"},{left:"Hate",right:"Love"},{left:"Illegal",right:"Legal"},{left:"Humorless",right:"Hilarious"},{left:"Little Brain",right:"Big Brain"},{left:"Villain",right:"Hero"},{left:"Cold",right:"Hot"},{left:"Dangerous",right:"Safe"},{left:"Easy Task",right:"Hard Task"},{left:"Useless Body Part",right:"Useful Body Part"},{left:"Light",right:"Heavy"},{left:"Boring",right:"Exciting"},{left:"Hairless",right:"Hairy"},{left:"Small",right:"Big"}];function h(){var e=Object(n.useState)(50),t=Object(s.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(!1),u=Object(s.a)(r,2),h=u[0],v=u[1],E=Object(n.useState)(50),N=Object(s.a)(E,2),b=N[0],p=N[1],k=Object(n.useState)(0),S=Object(s.a)(k,2),j=S[0],y=S[1],B=Object(n.useState)(1),O=Object(s.a)(B,2),w=O[0],H=O[1],C=Object(n.useState)(!0),M=Object(s.a)(C,2),T=M[0],A=M[1],W=Object(n.useState)({left:"",right:""}),I=Object(s.a)(W,2),P=I[0],L=I[1],U=Object(n.useState)(g),V=Object(s.a)(U,2),x=V[0],F=V[1],G=Object(n.useState)(!1),D=Object(s.a)(G,2),Q=D[0],R=D[1],q=Object(n.useState)(),J=Object(s.a)(q,2),X=J[0],$=J[1],z=Object(n.useState)(!1),K=Object(s.a)(z,2),Y=K[0],Z=K[1],_=Object(n.useState)(null),ee=Object(s.a)(_,2),te=ee[0],ae=ee[1],ne=function(e){T?y(j+e):H(w+e)},le=function(){T?H(w+1):y(j+1)};return l.a.createElement("div",{className:"game"},l.a.createElement(f,{modal:X,pointsA:j,pointsB:w}),l.a.createElement(d,{pointsA:j,pointsB:w,teamATurn:T}),l.a.createElement(o,{hide:h,psychic:Q,setHide:v,targetValue:b,markerValue:a,setMarkerValue:i,guess:Y}),l.a.createElement("div",{className:"button-container"},l.a.createElement("div",{className:"buttons"},Q?null:l.a.createElement("button",{onClick:function(){x.length?(!function(){var e=Math.floor(100*Math.random())+1;p(e)}(),function(){var e=Math.floor(Math.random()*x.length),t=Object(c.a)(x),a=t.splice(e,1);F(t),L(a[0])}(),R(!0)):$("end")}},"Be Psychic"),Q&&!h?l.a.createElement("button",{onClick:function(){v(!0)}},"Hide Target"):null,h&&!Y?l.a.createElement("button",{onClick:function(){Z(!0)}},"Lock In"):null,Y&&null===te?l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return ae(!0)}},"Left"),l.a.createElement("button",{onClick:function(){return ae(!1)}},"Right")):null,Y&&null!==te?l.a.createElement("button",{onClick:function(){a>=b-1.75&&a<=b+1.75?ne(4):(a>b+1.75&&te&&le(),a<b-1.75&&!te&&le(),a>=b-6&&a<=b+6?ne(3):a>=b-10&&a<=b+10&&ne(2)),A(!T),v(!1),R(!1),Z(!1),ae(null)}},"Score Points"):null)),l.a.createElement(m,{spectrum:P}))}var v=function(){return l.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.a6cf806b.chunk.js.map