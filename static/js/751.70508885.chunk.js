"use strict";(self.webpackChunkMovies_search_app=self.webpackChunkMovies_search_app||[]).push([[751],{751:function(e,r,n){n.r(r),n.d(r,{default:function(){return p}});var t=n(861),s=n(439),a=n(757),i=n.n(a),c=n(87),o=n(689),l=n(791),u=n(754),d="MovieCardPage_link__Nep1a",h=n(184),v={},p=function(){var e,r,n=(0,l.useState)(v),a=(0,s.Z)(n,2),p=a[0],f=a[1],m=(0,o.UO)().id,x=(0,o.TH)();if((0,l.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Pg)(m);case 3:r=e.sent,n=r.data,f(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),p.id){var g=p.poster_path,j=p.original_title,w=p.release_date,_=p.vote_average,N=p.overview,b=p.genres,k=new Date(w).getFullYear(),U=b.map((function(e){var r=e.name,n=e.id;return(0,h.jsx)("li",{children:r},n)})),C=Math.floor(10*_),y=null!==(e=null===(r=x.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";return(0,h.jsxs)("main",{children:[(0,h.jsx)(c.rU,{to:y,children:(0,h.jsx)("button",{type:"button",className:"movieCardBtn",children:"Go back"})}),(0,h.jsxs)("div",{className:"card-wrapper",children:[(0,h.jsx)("img",{src:g?"https://image.tmdb.org/t/p/w500/".concat(g):"https://via.placeholder.com/960x240",alt:"movie-poster",width:"320",height:"480"}),(0,h.jsxs)("div",{className:"card-info",children:[(0,h.jsxs)("h1",{className:"title",children:[j,(0,h.jsxs)("span",{children:[" (",k,") "]})]}),(0,h.jsxs)("p",{children:["User Score: ",C,"%"]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{className:"overViewDesc",children:N})]}),(0,h.jsxs)("div",{className:"genres",children:[(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("ul",{className:"genres-list",children:U})]})]})]}),(0,h.jsxs)("ul",{className:"additional",children:[(0,h.jsx)("li",{children:(0,h.jsx)(c.rU,{to:"cast",state:{from:y},className:d,children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(c.rU,{to:"reviews",state:{from:y},className:d,children:"Reviews"})})]}),(0,h.jsx)(o.j3,{})]})}}},754:function(e,r,n){n.d(r,{LP:function(){return s},Pg:function(){return i},au:function(){return c},q5:function(){return o},zi:function(){return a}});var t=n(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"12054267cdcdd4d8e665a5b76a183077"}}),s=function(){return t.get("/trending/movie/week")},a=function(e){return t.get("/search/movie",{params:{query:e,language:"en-US",include_adult:!1}})},i=function(e){return t.get("/movie/".concat(e))},c=function(e){return t.get("/movie/".concat(e,"/credits"))},o=function(e){return t.get("/movie/".concat(e,"/reviews"))}}}]);
//# sourceMappingURL=751.70508885.chunk.js.map