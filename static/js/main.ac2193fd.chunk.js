(this.webpackJsonpmoviepractice=this.webpackJsonpmoviepractice||[]).push([[0],{44:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s(2),n=s(14),c=s.n(n),r=s(4),o=s.n(r),m=s(15),l=s(16),d=s(17),j=s(20),u=s(19),v=(s(5),function(e){var t=e.id,s=e.year,i=e.title,n=e.summary,c=e.poster,r=e.genres;return Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("img",{src:c,alt:t,title:i}),Object(a.jsxs)("div",{className:"movie_data",children:[Object(a.jsx)("h3",{className:"movie_title",children:i}),Object(a.jsx)("h5",{className:"movie_year",children:s}),Object(a.jsx)("ul",{className:"movie_genres",children:r.map((function(e,t){return Object(a.jsx)("li",{className:"movie_genre",children:e},t)}))}),Object(a.jsxs)("p",{className:"movie_summary",children:[n.slice(0,180),"..."]})]})]})}),h=s(18),b=s.n(h),p=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={isLoading:!0,movies:[]},a.getMovies=Object(m.a)(o.a.mark((function e(){var t,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://yts.mx/api/v2/list_movies.json");case 2:t=e.sent,s=t.data.data.movies,a.setState({movies:s,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return Object(a.jsx)(v,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(i.Component);c.a.render(Object(a.jsx)(p,{}),document.getElementById("root"))},5:function(e,t,s){}},[[44,1,2]]]);
//# sourceMappingURL=main.ac2193fd.chunk.js.map