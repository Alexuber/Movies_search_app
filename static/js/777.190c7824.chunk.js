"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[777],{556:function(e,t,r){r.d(t,{O:function(){return m}});var n=r(87),i=r(689),a=r(820),o="MoviesListItem_title__9IauO",c="MoviesListItem_img__z1ydj",s=r(184),u=function(e){var t=e.title,r=e.id,u=e.poster,l=(0,i.TH)();return(0,s.jsxs)(n.rU,{to:"/movie/".concat(r),state:{from:l},children:[(0,s.jsx)("img",{src:u?"https://image.tmdb.org/t/p/w500/".concat(u):a,alt:"poster",width:"240",height:"360",className:c}),(0,s.jsxs)("p",{className:o,children:[" ",t]})]},r)},l="MoviesList_moviesList__uT7h1",m=function(e){var t=e.movies;return(0,s.jsx)("ul",{className:l,children:t.map((function(e){var t=e.title,r=e.id,n=e.poster_path;return(0,s.jsx)(u,{title:t,id:r,poster:n},r)}))})}},777:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(861),i=r(439),a=r(757),o=r.n(a),c=r(791),s=r(596),u=(r(462),"SearchForm_form__49W6b"),l="SearchForm_input__7U8V+",m="SearchForm_button__arepV",f=r(184),h=function(e){var t=e.handleFormSubmit,r=(0,c.useState)(""),n=(0,i.Z)(r,2),a=n[0],o=n[1];return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===a.trim()&&s.Am.error("Search field is empty!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),t(a),o("")},className:u,children:[(0,f.jsx)("label",{htmlFor:"search"}),(0,f.jsx)("input",{type:"text",placeholder:"Search movie",value:a,onChange:function(e){var t=e.target.value;o(t)},className:l}),(0,f.jsx)("button",{disabled:!a.trim(),className:m,children:"Search"})]})},p=r(754),d=r(556),v=r(87),_=[],g=function(){var e=(0,c.useState)(_),t=(0,i.Z)(e,2),r=t[0],a=t[1],s=(0,v.lr)(),u=(0,i.Z)(s,2),l=u[0],m=u[1],g=l.get("search");(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.zi)(g);case 3:t=e.sent,r=t.data,a(r.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();null!==g&&e()}),[g]),(0,c.useEffect)((function(){g||a(_)}),[g]);return(0,f.jsxs)("main",{children:[(0,f.jsx)(h,{handleFormSubmit:function(e){m({search:e})}}),(0,f.jsx)(d.O,{movies:r})]})}},754:function(e,t,r){r.d(t,{LP:function(){return i},Pg:function(){return o},au:function(){return c},q5:function(){return s},zi:function(){return a}});var n=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"12054267cdcdd4d8e665a5b76a183077"}}),i=function(){return n.get("/trending/movie/week")},a=function(e){return n.get("/search/movie",{params:{query:e,language:"en-US",include_adult:!1}})},o=function(e){return n.get("/movie/".concat(e))},c=function(e){return n.get("/movie/".concat(e,"/credits"))},s=function(e){return n.get("/movie/".concat(e,"/reviews"))}},462:function(){},820:function(e,t,r){e.exports=r.p+"static/media/poster.2047ac772c82f756ec58.webp"}}]);
//# sourceMappingURL=777.190c7824.chunk.js.map