"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{595:function(n,e,t){t.d(e,{Z:function(){return d}});var r,a,u=t(689),c=t(87),o=t(168),i=t(873),s=i.Z.ul(r||(r=(0,o.Z)(["\n  margin-top: 12px;\n  list-style-type: none;\n"]))),f=i.Z.li(a||(a=(0,o.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n\n  background-color: #bf9fe3;\n  border-radius: 14px;\n\n  :not(:last-child) {\n    margin-bottom: 6px;\n  }\n\n  a:hover,\n  a:focus {\n    background-color: #da73de;\n    color: #111111;\n    border-radius: 14px;\n  }\n\n  a {\n    display: block;\n    padding: 14px 14px;\n  }\n"]))),p=t(184),d=function(n){var e=n.movies,t=(0,u.TH)();return(0,p.jsxs)(s,{children:[e.map((function(n){var e=n.id,r=n.original_title;return(0,p.jsx)(f,{children:(0,p.jsx)(c.rU,{state:{from:t},to:"/movies/".concat(e),children:r})},e)})),";"]})}},544:function(n,e,t){t.r(e);var r=t(439),a=t(791),u=t(323),c=t(595),o=t(184);e.default=function(){var n=(0,a.useState)([]),e=(0,r.Z)(n,2),t=e[0],i=e[1];return(0,a.useEffect)((function(){(0,u.Df)("").then(i)}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)(c.Z,{movies:t})]})}},323:function(n,e,t){t.d(e,{Df:function(){return o},Eb:function(){return f},Hu:function(){return p},Pg:function(){return s},Ph:function(){return i}});var r=t(165),a=t(861),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="3373af60a4ee1fe7510a1a61c11380e1",o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/week?api_key=".concat(c));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(c,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,a=t.data,n.abrupt("return",a.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,a=t.data,n.abrupt("return",a.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,a=t.data,n.abrupt("return",a.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.4dbac68b.chunk.js.map