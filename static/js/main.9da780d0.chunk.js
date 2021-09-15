(this.webpackJsonpreactportfolio=this.webpackJsonpreactportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(6),a=c.n(n),r=c(3),o=(c(16),c(43)),l=c(44),d=c(0);function j(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(d.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("a",{href:"#intro",className:"logo",children:"MICHAEL TADDEUCCI"}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(o.a,{className:"icon"}),Object(d.jsx)("span",{children:Object(d.jsx)("a",{href:"https://github.com/mtaddevi",children:"Github"})})]}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(l.a,{className:"icon"}),Object(d.jsx)("span",{children:"Mtaddevi@gmail.com"})]})]}),Object(d.jsx)("div",{className:"right",children:Object(d.jsxs)("div",{className:"hamburger",onClick:function(){return c(!t)},children:[Object(d.jsx)("span",{className:"line1"}),Object(d.jsx)("span",{className:"line2"}),Object(d.jsx)("span",{className:"line3"})]})})]})})}c(22);function h(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(d.jsx)("div",{className:"menu "+(t&&"active"),children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{onClick:function(){return c(!1)},children:Object(d.jsx)("a",{href:"#intro",children:"Home"})}),Object(d.jsx)("li",{onClick:function(){return c(!1)},children:Object(d.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(d.jsx)("li",{onClick:function(){return c(!1)},children:Object(d.jsx)("a",{href:"#contact",children:"Contact"})})]})})}c(23);var b=c(8);function m(){var e=Object(s.useRef)();return Object(s.useEffect)((function(){Object(b.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Designer","Director","Graphic Artist"]})}),[]),Object(d.jsxs)("div",{className:"intro",id:"intro",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:"assets/proPhotoRefined.png",alt:""})})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h2",{children:"Hello, I'm"}),Object(d.jsx)("h2",{children:"Michael Tadeucci"}),Object(d.jsxs)("h3",{children:["Developer + ",Object(d.jsx)("span",{ref:e})]})]}),Object(d.jsx)("a",{href:"#portfolio",children:Object(d.jsx)("div",{className:"downarrow",children:"\u2b9f"})})]})]})}c(24);function p(e){var t=e.id,c=e.title,s=e.active,i=e.setSelected;return Object(d.jsx)("li",{className:s?"portfolioList active":"portfolioList",onClick:function(){return i(t)},children:c})}c(25);var O=[{id:"1",title:"Caddo Connections",img:"assets/caddo_66-2.png",href:"https://www.caddoconnections.com/"},{id:"2",title:"Krannert Events",img:"assets/eventsCheap.png",href:"https://mtdemonstration.com/index.php?m=02"},{id:"3",title:"Leviathan Software",img:"assets/levilogocheap.png",href:"http://leviathansoft.com/"},{id:"4",title:"Arboretum Wordpress",img:"assets/arborCheap.png",href:"http://mtarboretum.site/"},{id:"5",title:"PinCasts",img:"assets/LogoStickerDemo0.png",href:"https://www.caddoconnections.com/"}],u=[{id:"1",title:"ReactTodo",img:"assets/todoCheap.png",href:"https://mtaddevi.github.io/reactTODO/"},{id:"2",title:"IOS CoreML",img:"assets/catiosCheap.png",href:"https://www.youtube.com/watch?v=NshTBYPq5RQ"},{id:"3",title:"Unity3D Game",img:"assets/mowiocheap.png",href:"https://www.youtube.com/watch?v=2St2Da8aWrc&t=4s"}],f=[{id:"1",title:"React Portfolio",img:"assets/newPortfolioLogo.png",href:"https://mtaddevi.github.io/mtreactportfolio/"},{id:"2",title:"Caddo Connections",img:"assets/caddo_66-2.png",href:"https://www.caddoconnections.com/"},{id:"3",title:"PinCasts",img:"assets/LogoStickerDemo0.png",href:"https://www.caddoconnections.com/"}],x=[{id:"1",title:"Quibble Query",img:"assets/QuibbleCheap.png",href:"https://www.caddoconnections.com/"},{id:"2",title:"Mobile Money",img:"assets/MobileMoneyCheap.png",href:"https://www.caddoconnections.com/"}];function g(){var e=Object(s.useState)("web"),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)([]),a=Object(r.a)(n,2),o=a[0],l=a[1];return Object(s.useEffect)((function(){switch(c){case"web":l(O);break;case"applications":l(u);break;case"design":l(f);break;case"commercials":l(x);break;default:l(O)}}),[c]),Object(d.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(d.jsx)("h1",{children:"Portfolio"}),Object(d.jsx)("ul",{children:[{id:"web",title:"Web"},{id:"applications",title:"Applications"},{id:"design",title:"Design"},{id:"commercials",title:"Commercials"}].map((function(e){return Object(d.jsx)(p,{title:e.title,active:c===e.id,setSelected:i,id:e.id})}))}),Object(d.jsx)("div",{className:"container",children:o.map((function(e){return Object(d.jsx)("a",{href:e.href,children:Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("img",{src:e.img,alt:""}),Object(d.jsx)("h3",{children:e.title})]})})}))})]})}c(26);c(27);c(28);function v(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(d.jsxs)("div",{className:"contact",id:"contact",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("img",{src:"assets/Topo3DCheap.png",className:"left img",alt:""})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("h2",{children:"Contact."}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(!0)},children:[Object(d.jsx)("input",{type:"text",placeholder:"Email"}),Object(d.jsx)("textarea",{placeholder:"Message"}),Object(d.jsx)("button",{type:"submit",children:"Send"}),c&&Object(d.jsx)("span",{children:"Thanks for your message, I'll reply As Soon As Possible!"})]})]})]})}c(29);var w=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(j,{menuOpen:c,setMenuOpen:i}),Object(d.jsx)(h,{menuOpen:c,setMenuOpen:i}),Object(d.jsxs)("div",{className:"sections",children:[Object(d.jsx)(m,{}),Object(d.jsx)(g,{}),Object(d.jsx)(v,{})]})]})};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.9da780d0.chunk.js.map