(this.webpackJsonpcalculator2=this.webpackJsonpcalculator2||[]).push([[0],{39:function(t,e,n){},49:function(t,e){},50:function(t,e,n){"use strict";n.r(e);var c=n(4),i=n(20),a=n.n(i),l=n(21),s=n(5),o=n(22),j=n.n(o),b=n(52),d=(n(39),n(1)),r=function(){var t=Object(c.useState)(!1),e=Object(s.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)(""),o=Object(s.a)(a,2),r=(o[0],o[1]),h=Object(c.useState)(!0),u=Object(s.a)(h,2),O=u[0],m=u[1],g=Object(c.useState)(""),x=Object(s.a)(g,2),k=x[0],C=x[1],p=Object(c.useState)("0"),f=Object(s.a)(p,2),v=f[0],N=f[1],S=Object(c.useState)(""),y=Object(s.a)(S,2),w=y[0],J=y[1],q=function(t){"0"===v?(N(t.target.name),r(t.target.name)):(N(v.concat(t.target.name)),r(t.target.name))},z=function(t){var e=t.target.name;n?(N(k.concat(e)),i(!1)):N(v.concat(e)),r(e),m(!0)},B=function(){N("0"),J(""),C(""),r(""),i(!1),m(!0)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j.a,{}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("form",{id:"screen",children:[Object(d.jsx)("input",{id:"display",type:"text",value:v,readOnly:!0}),Object(d.jsx)("input",{id:"result",type:"text",value:w,readOnly:!0,placeholder:"0"})]}),Object(d.jsxs)("div",{className:"keypad",children:[Object(d.jsx)("button",{className:"highlight",onClick:B,id:"clear",children:"Clear"}),Object(d.jsx)("button",{className:"highlight",onClick:function(){1===v.length?B():N(v.slice(0,-1))},id:"backspace",children:"C"}),Object(d.jsx)("button",{id:"divide",className:"highlight",name:"/",onClick:z,children:"\xf7"}),Object(d.jsx)("button",{id:"seven",name:"7",onClick:q,children:"7"}),Object(d.jsx)("button",{id:"eight",name:"8",onClick:q,children:"8"}),Object(d.jsx)("button",{id:"nine",name:"9",onClick:q,children:"9"}),Object(d.jsx)("button",{id:"multiply",className:"highlight",name:"*",onClick:z,children:"\xd7"}),Object(d.jsx)("button",{id:"four",name:"4",onClick:q,children:"4"}),Object(d.jsx)("button",{id:"five",name:"5",onClick:q,children:"5"}),Object(d.jsx)("button",{id:"six",name:"6",onClick:q,children:"6"}),Object(d.jsx)("button",{id:"subtract",className:"highlight",name:"-",onClick:z,children:"\u2013"}),Object(d.jsx)("button",{id:"one",name:"1",onClick:q,children:"1"}),Object(d.jsx)("button",{id:"two",name:"2",onClick:q,children:"2"}),Object(d.jsx)("button",{id:"three",name:"3",onClick:q,children:"3"}),Object(d.jsx)("button",{id:"add",className:"highlight",name:"+",onClick:z,children:"+"}),Object(d.jsx)("button",{id:"zero",name:"0",onClick:q,children:"0"}),Object(d.jsx)("button",{id:"decimal",className:"highlight",name:".",onClick:function(){O&&(N(v.concat(".")),r("."),m(!1))},children:"."}),Object(d.jsx)("button",{className:"highlight",onClick:function(){var t=v.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join(""),e=Math.round(1e12*Object(b.a)(t))/1e12;e.length>15&&(e.slice(0,14),Object(l.a)("answer")),J(e.toString()),N(e.toString()),C(e.toString()),m(!0),i(!0)},id:"equals",children:"="})]})]})]})};a.a.render(Object(d.jsx)(r,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.a144ddb8.chunk.js.map