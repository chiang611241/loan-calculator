(this["webpackJsonploan-calculator"]=this["webpackJsonploan-calculator"]||[]).push([[0],{45:function(e,a,t){e.exports=t(54)},50:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(7),c=t.n(r);t(50),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=t(24),o=t(83),m=t(87),i=t(88),E=t(89),s=t(90),v=t(91),b=t(92),g=t(93),h=[{value:0,label:"\u8acb\u9078\u64c7\u5b78\u671f\u6578"},{value:1,label:"1 \u5b78\u671f"},{value:2,label:"2 \u5b78\u671f"},{value:3,label:"3 \u5b78\u671f"},{value:4,label:"4 \u5b78\u671f"},{value:5,label:"5 \u5b78\u671f"},{value:6,label:"6 \u5b78\u671f"},{value:7,label:"7 \u5b78\u671f"},{value:8,label:"8 \u5b78\u671f"},{value:9,label:"9 \u5b78\u671f"},{value:10,label:"10 \u5b78\u671f"},{value:11,label:"11 \u5b78\u671f"},{value:12,label:"12 \u5b78\u671f"},{value:13,label:"13 \u5b78\u671f"},{value:14,label:"14 \u5b78\u671f"},{value:15,label:"15 \u5b78\u671f"},{value:16,label:"16 \u5b78\u671f"}];function y(){var e=Object(l.useState)(0),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(0),y=Object(u.a)(c,2),p=y[0],d=y[1],f=Object(l.useState)(.9),w=Object(u.a)(f,2),j=w[0],M=w[1],O=Object(l.useState)(0),S=Object(u.a)(O,2),k=S[0],C=S[1],I=Object(l.useState)(0),x=Object(u.a)(I,2),R=x[0],T=x[1],H=function(e){for(var a=e.moneyTotal,t=e.semesters,l=e.rate,n=e.returnedMoney,r=e.monthlyReturn,c=[],u=12*t,o=a-n,m=0;m<=u;++m){var i=u-m,E=Math.pow(1+l,i),s=o>0?Math.ceil(o*(l*E/(E-1))):0;c.push({year:Math.ceil(m/12),month:m,money:o,loanMoney:s,monthRemaining:i,loanTotal:s*i});var v=Math.ceil(o/i);o-=Math.min(v,r)}return c}({moneyTotal:p,semesters:t,rate:j,returnedMoney:k,monthlyReturn:R});return n.a.createElement("div",{style:{height:"auto",maxHeight:600,width:800,padding:10,borderStyle:"solid",margin:"auto"}},n.a.createElement(o.a,null,n.a.createElement(m.a,null,n.a.createElement(i.a,null,n.a.createElement(E.a,{colSpan:3},"\u5fc5\u586b\u6b04\u4f4d")),n.a.createElement(s.a,null,n.a.createElement(v.a,null,n.a.createElement(E.a,null,n.a.createElement(b.a,{label:"\u8f38\u5165\u7e3d\u8cb8\u6b3e\u91d1\u984d",value:p,onChange:function(e){return d(parseInt(e.target.value,10)||0)}})),n.a.createElement(E.a,null,n.a.createElement(b.a,{style:{width:150},select:!0,label:"\u8cb8\u6b3e\u5b78\u671f\u7e3d\u6578",value:t,onChange:function(e){return r(parseInt(e.target.value,10)||0)}},h.map((function(e){return n.a.createElement(g.a,{key:e.value,value:e.value},e.label)})))),n.a.createElement(E.a,null,n.a.createElement(b.a,{label:"\u8f38\u5165\u5e74\u5229\u7387",value:j,onChange:function(e){return M(parseFloat(e.target.value))}})))))),n.a.createElement(o.a,null,n.a.createElement(m.a,null,n.a.createElement(i.a,null,n.a.createElement(E.a,{colSpan:2},"\u9078\u586b\u6b04\u4f4d")),n.a.createElement(s.a,null,n.a.createElement(v.a,null,n.a.createElement(E.a,null,n.a.createElement(b.a,{label:"\u7562\u696d\u4e00\u5e74\u5167\u511f\u9084\u672c\u91d1",value:k,onChange:function(e){return C(parseInt(e.target.value,10)||0)}})),n.a.createElement(E.a,null,n.a.createElement(b.a,{label:"\u6bcf\u6b21\u511f\u9084\u672c\u91d1",value:R,onChange:function(e){return T(parseInt(e.target.value,10)||0)}})))))),n.a.createElement(o.a,{style:{maxHeight:300}},n.a.createElement(m.a,{stickyHeader:!0},n.a.createElement(i.a,null,n.a.createElement(v.a,null,n.a.createElement(E.a,{align:"center"},"\u5e74"),n.a.createElement(E.a,{align:"center"},"\u671f\u6578"),n.a.createElement(E.a,{align:"center"},"\u672c\u91d1"),n.a.createElement(E.a,{align:"center"},"\u61c9\u9084\u5229\u606f"),n.a.createElement(E.a,{align:"center"},"\u5269\u9918\u671f\u6578"),n.a.createElement(E.a,{align:"center"},"\u7e3d\u61c9\u9084\u672c\u606f"))),n.a.createElement(s.a,null,H.map((function(e){return n.a.createElement(v.a,{key:e.month},n.a.createElement(E.a,{align:"center"},e.year),n.a.createElement(E.a,{align:"center"},e.month),n.a.createElement(E.a,{align:"center"},e.money),n.a.createElement(E.a,{align:"center"},e.loanMoney),n.a.createElement(E.a,{align:"center"},e.monthRemaining),n.a.createElement(E.a,{align:"center"},e.loanTotal))}))))))}function p(){return n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h1",{style:{margin:20}},"\u5b78\u8cb8\u8a08\u7b97\u6a5f"),n.a.createElement(y,null),n.a.createElement("div",{style:{margin:20}},n.a.createElement("p",null," \u56e0\u61c9\u65b0\u51a0\u80ba\u708e\u75ab\u60c5\u5f71\u97ff\uff0c\u5b78\u8cb8\u5229\u7387\u964d\u70ba0.9% \uff08\u539f1.15%\uff09"),n.a.createElement("p",null," \u4e00\u5b78\u671f\u7684\u8cb8\u6b3e\u91d1\u984d\u6709\u4e00\u5e74\u7684\u9084\u6b3e\u671f ",n.a.createElement("br",null)," * \u5047\u8a2d\u5927\u5b78\u56db\u5e74\u6bcf\u5b78\u671f\u7686\u6709\u8cb8\u6b3e\uff0c\u9084\u6b3e\u671f\u9650\u5247\u70ba 8 \u5e74 \uff081 \u5b78\u5e74 2 \u5b78\u671f\uff09* "),n.a.createElement("p",null," 2020\u5e74 1 \u6708\u4e4b\u5f8c\uff0c\u6bcf\u6708\u6536\u5165\u672a\u9054\u5230 35,000 \u5143\uff0c\u53ef\u5411\u627f\u8cb8\u9280\u884c\u7533\u8acb\u7de9\u7e73\u672c\u91d1 ",n.a.createElement("br",null)," * 1 \u6b21\u53ef\u4ee5\u5ef6\u5f8c 1 \u5e74\uff0c\u6700\u591a\u53ef\u4ee5\u7533\u8acb 3 \u6b21 * ")))}c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.4c3bb73b.chunk.js.map