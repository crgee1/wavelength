(this.webpackJsonpwavelength=this.webpackJsonpwavelength||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(3),r=a.n(i),c=(a(10),a(11),a(4)),o=a(1);a(12),a(13);function s(e){var t=e.hide,a=e.targetValue,n=e.markerValue,i=e.setMarkerValue,r=e.guess,c=function(e){return function(){t&&!r&&(e&&n<100?i(n+.25):!e&&n>0&&i(n-.25))}};return l.a.createElement("div",{className:"scale-container"},l.a.createElement("div",{id:"scale",className:"scale",onClick:function(e){if(t&&!r){var a=document.getElementById("scale").clientWidth,n=e.clientX-.01*window.innerWidth;i(n/a*100)}}},l.a.createElement("div",{className:"indents"},l.a.createElement("div",{className:"indent long"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent short"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent long"})),l.a.createElement("div",{className:"indents"},l.a.createElement("div",{className:"indent long"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent short"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent long"})),l.a.createElement("div",{className:"indents"},l.a.createElement("div",{className:"indent long"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent short"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent long"})),l.a.createElement("div",{className:"indents"},l.a.createElement("div",{className:"indent long"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent short"}),l.a.createElement("div",{className:"indent mid"}),l.a.createElement("div",{className:"indent long"})),function(){var e={left:"".concat(n-.1,"%")};return l.a.createElement("div",{style:e,className:"marker"})}(),function(){if(t)return null;var e={left:"".concat(a-11,"%")};return l.a.createElement("div",{style:e,className:"target"},l.a.createElement("div",{className:"two points"},"2"),l.a.createElement("div",{className:"three points"},"3"),l.a.createElement("div",{className:"four points"},"4"),l.a.createElement("div",{className:"three points"},"3"),l.a.createElement("div",{className:"two points"},"2"))}()),l.a.createElement("div",{className:"midpoint"},l.a.createElement("i",{className:"fas fa-sort-up"})),l.a.createElement("div",{className:"controller"},l.a.createElement("i",{className:"far fa-caret-square-left",onClick:c(!1)}),l.a.createElement("i",{className:"far fa-caret-square-right",onClick:c(!0)})))}a(14);function m(e){var t=e.spectrum;return l.a.createElement("div",{className:"spectrum-container"},l.a.createElement("div",{className:"spectrum"},l.a.createElement("div",{className:"half left"},l.a.createElement("i",{className:"fas fa-long-arrow-alt-left"}),t.left),l.a.createElement("div",{className:"half right"},l.a.createElement("i",{className:"fas fa-long-arrow-alt-right"}),t.right)))}a(15);function d(e){var t=e.pointsA,a=e.pointsB,n=e.teamATurn;return l.a.createElement("div",{className:"scoreboard-container"},l.a.createElement("div",{className:"team-score".concat(n?" turn":"")},l.a.createElement("div",null,"Team A"),t),l.a.createElement("div",{className:"team-score".concat(n?"":" turn")},l.a.createElement("div",null,"Team B"),a))}a(16);function f(e){var t=e.pointsA,a=e.pointsB,n=t>a?"Team A Wins":t===a?"It's a Draw":"Team B Wins";return l.a.createElement("div",{className:"end"},l.a.createElement("div",{className:"scoreboard-container"},l.a.createElement("div",{className:"team-score"},l.a.createElement("div",null,"Team A"),t),l.a.createElement("div",{className:"team-score"},l.a.createElement("div",null,"Team B"),a)),l.a.createElement("div",null,n))}function g(e){var t,a=e.pointsA,n=e.pointsB,i=e.modal,r=e.setModal;switch(i){case"end":t=l.a.createElement(f,{pointsA:a,pointsB:n});break;default:return null}return"end"===i?l.a.createElement("div",{className:"modal-background"},l.a.createElement("div",{className:"modal-child",onClick:function(e){return e.stopPropagation()}},t)):l.a.createElement("div",{className:"modal-background",onClick:function(){return r(null)}},l.a.createElement("div",{className:"modal-child",onClick:function(e){return e.stopPropagation()}},t))}var u=[{left:"Sad Song",right:"Happy Song"},{left:"Sad Movie",right:"Happy Movie"},{left:"Rough",right:"Smooth"},{left:"Slow",right:"Fast"},{left:"Useless Invention",right:"Useful Invention"},{left:"Ugly Man",right:"Handsome Man"},{left:"Ugly Woman",right:"Pretty Woman"},{left:"Worthless",right:"Priceless"},{left:"Bad Show",right:"Good Show"},{left:"Bad Song",right:"Good Song"},{left:"Bad Movie",right:"Good Movie"},{left:"Fragile",right:"Indestructible"},{left:"Low Quality",right:"High Quality"},{left:"Cold",right:"Hot"},{left:"Round",right:"Pointy"},{left:"Inflexible",right:"Flexible"},{left:"Unhygienic",right:"Hygienic"},{left:"Taste Bad",right:"Taste Good"},{left:"Unhealthy",right:"Healthy"},{left:"Skinny",right:"Fat"},{left:"Selfish",right:"Giving"},{left:"Uncool",right:"Cool"},{left:"Quiet",right:"Loud"},{left:"Wet",right:"Dry"},{left:"Close",right:"Far"},{left:"Boring",right:"Exciting"},{left:"Hate",right:"Love"},{left:"Illegal",right:"Legal"},{left:"Humorless",right:"Hilarious"},{left:"Little Brain",right:"Big Brain"},{left:"Villain",right:"Hero"},{left:"Cold",right:"Hot"},{left:"Dangerous",right:"Safe"},{left:"Easy Task",right:"Hard Task"},{left:"Useless Body Part",right:"Useful Body Part"},{left:"Light",right:"Heavy"},{left:"Boring",right:"Exciting"},{left:"Hairless",right:"Hairy"},{left:"Unpopular Activity",right:"Popular Activity"},{left:"Trashy",right:"Classy"},{left:"Weak",right:"Strong"},{left:"Disgusting Cereal",right:"Delicious Cereal"},{left:"Liberal",right:"Conservative"},{left:"Fad",right:"Classic"},{left:"For Kids",right:"For Adults"},{left:"Useless In An Emergency",right:"Uselful In An Emergency"},{left:"Better Cold",right:"Better Hot"},{left:"Mass Produced",right:"Artisanl"},{left:"Stupid",right:"Brilliant"},{left:"Ineffective",right:"Effective"},{left:"Bad Superpower",right:"Good Superpower"},{left:"Worst Living Person",right:"Greatest Living Person"},{left:"Underrated",right:"Overrated"},{left:"Messy Food",right:"Clean Food"},{left:"Unethical",right:"Ethical"},{left:"Boring Hobby",right:"Interesting Lobby"},{left:"Unfashionable",right:"Fashionable"},{left:"Harmless",right:"Harmful"},{left:"Requires Luck",right:"Requires Skill"},{left:"Unimportant",right:"Important"},{left:"Vice",right:"Virtue"},{left:"Hard To Find",right:"Easy To Find"},{left:"Unstable",right:"Stable"},{left:"Temporary",right:"Permanent"},{left:"Easy To Kill",right:"Hard To Kill"},{left:"Smells Bad",right:"Smells Good"},{left:"Low Calorie",right:"High Calorie"},{left:"Easy Subject",right:"Hard Subject"},{left:"Bad Actor",right:"Good Actor"},{left:"Casual",right:"Formal"},{left:"Underpaid",right:"Overpaid"},{left:"Forbidden",right:"Encouraged"},{left:"Bad Habit",right:"Good Habit"},{left:"Easy To Remember",right:"Hard To Remember"},{left:"Historically Irrelevant",right:"Historically Important"},{left:"Normal Pet",right:"Exotic Pet"},{left:"Book Was Better",right:"Movie Was Better"},{left:"Bad Pizza Topping",right:"Good Pizza Topping"},{left:"Mental Activity",right:"Physical Activity"},{left:"Straight",right:"Curvy"},{left:"Optional",right:"Mandatory"},{left:"Unsexy Animal",right:"Sexy Animal"},{left:"Bad Reputation",right:"Good Reputation"},{left:"Useless Major",right:"Useful Major"},{left:"Underrated Movie",right:"Overratted Movie"},{left:"Scary Animal",right:"Nice Animal"},{left:"Nobody Does It",right:"Everyone Does It"},{left:"Small",right:"Big"}];function h(){var e=Object(n.useState)(50),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(!1),f=Object(o.a)(r,2),h=f[0],v=f[1],E=Object(n.useState)(50),N=Object(o.a)(E,2),b=N[0],p=N[1],y=Object(n.useState)(0),S=Object(o.a)(y,2),B=S[0],k=S[1],H=Object(n.useState)(1),j=Object(o.a)(H,2),O=j[0],C=j[1],w=Object(n.useState)(!0),A=Object(o.a)(w,2),T=A[0],M=A[1],U=Object(n.useState)({left:"",right:""}),P=Object(o.a)(U,2),I=P[0],F=P[1],L=Object(n.useState)(u),W=Object(o.a)(L,2),G=W[0],R=W[1],V=Object(n.useState)(!1),x=Object(o.a)(V,2),D=x[0],q=x[1],z=Object(n.useState)(),K=Object(o.a)(z,2),Q=K[0],J=K[1],X=Object(n.useState)(!1),$=Object(o.a)(X,2),Y=$[0],Z=$[1],_=Object(n.useState)(null),ee=Object(o.a)(_,2),te=ee[0],ae=ee[1],ne=function(e){T?k(B+e):C(O+e)},le=function(){T?C(O+1):k(B+1)};return l.a.createElement("div",{className:"game"},l.a.createElement(g,{modal:Q,pointsA:B,pointsB:O}),l.a.createElement(d,{pointsA:B,pointsB:O,teamATurn:T}),l.a.createElement(s,{hide:h,psychic:D,setHide:v,targetValue:b,markerValue:a,setMarkerValue:i,guess:Y}),l.a.createElement("div",{className:"button-container"},l.a.createElement("div",{className:"buttons"},D?null:l.a.createElement("button",{onClick:function(){G.length?(!function(){var e=Math.floor(100*Math.random())+1;p(e)}(),function(){var e=Math.floor(Math.random()*G.length),t=Object(c.a)(G),a=t.splice(e,1);R(t),F(a[0])}(),q(!0)):J("end")}},"Be Psychic"),D&&!h?l.a.createElement("button",{onClick:function(){v(!0)}},"Hide Target"):null,h&&!Y?l.a.createElement("button",{onClick:function(){Z(!0)}},"Lock In"):null,Y&&null===te?l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return ae(!0)}},"Left"),l.a.createElement("button",{onClick:function(){return ae(!1)}},"Right")):null,Y&&null!==te?l.a.createElement("button",{onClick:function(){a>=b-1.75&&a<=b+1.75?ne(4):(a>b+1.75&&te&&le(),a<b-1.75&&!te&&le(),a>=b-6&&a<=b+6?ne(3):a>=b-10&&a<=b+10&&ne(2)),M(!T),v(!1),q(!1),Z(!1),ae(null)}},"Score Points"):null)),l.a.createElement(m,{spectrum:I}))}var v=function(){return l.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.e47f8293.chunk.js.map