"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[452],{452:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(861),a=r(439),c=r(757),i=r.n(c),o=r(791),u=r(754),s=r(689),d=r(150),f="CastPage_list__dgba-",l="CastPage_item__0izCo",p="CastPage_noInfo__dhHu5",h=r(596),g=(r(462),r(184)),m=[],v=function(){var e=(0,o.useState)(m),t=(0,a.Z)(e,2),r=t[0],c=t[1],v=(0,s.UO)().id,_=(0,o.useRef)(!0);if((0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.au)(v);case 3:if(t=e.sent,r=t.data,!_.current||0!==r.cast.length){e.next=9;break}return _.current=!1,h.Am.error("No information about cast!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),e.abrupt("return");case 9:c(r.cast),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]),0===r.length&&!_.current)return(0,g.jsx)("div",{className:p,children:"Sorry! No information about cast!"});var b=r.map((function(e){var t=e.name,r=e.character,n=e.profile_path,a=e.id;return(0,g.jsxs)("li",{className:l,children:[(0,g.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w500/".concat(n):d,alt:"actor placeholder",width:"180",height:"270"}),(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{children:t}),(0,g.jsxs)("p",{children:["Character: ",r]})]})]},a)}));return(0,g.jsx)("ul",{className:f,children:b})}},754:function(e,t,r){r.d(t,{LP:function(){return a},Pg:function(){return i},au:function(){return o},q5:function(){return u},zi:function(){return c}});var n=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"12054267cdcdd4d8e665a5b76a183077"}}),a=function(){return n.get("/trending/movie/week")},c=function(e){return n.get("/search/movie",{params:{query:e,language:"en-US",include_adult:!1}})},i=function(e){return n.get("/movie/".concat(e))},o=function(e){return n.get("/movie/".concat(e,"/credits"))},u=function(e){return n.get("/movie/".concat(e,"/reviews"))}},462:function(){},150:function(e,t,r){e.exports=r.p+"static/media/person.b322d9e9b22f8382dc65.jpg"}}]);
//# sourceMappingURL=452.3fd4c4ad.chunk.js.map