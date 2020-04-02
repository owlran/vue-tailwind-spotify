(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{1148:function(t,e,s){"use strict";var r=s("a691"),a=s("1d80");t.exports="".repeat||function(t){var e=String(a(this)),s="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(s+=e);return s}},"1f42":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full flex items-center text-white justify-between py-2 truncate"},[s("div",{staticClass:"flex items-start"},[s("img",{staticClass:"w-12 mr-5",attrs:{src:t.track.album.images[1].url,alt:""}}),s("div",{staticClass:"flex flex-col w-15 truncate max-w-xs lg:max-w-xl"},[s("p",{staticClass:"truncate"},[t._v(t._s(t.track.name))]),s("div",{staticClass:"flex"},[s("div",{staticClass:"truncate"},[t._l(t.track.artists,(function(e,r){return s("span",{key:r,staticClass:"profile__artist-name truncate"},[t._v(" "+t._s(e.name)+" ")])})),s("span",{staticClass:"truncate"},[t._v(" "+t._s(t.track.album.name)+" ")])],2)])])]),s("div",{staticClass:"ml-4"},[s("p",[t._v(" "+t._s(t._f("formatDuration")(t.track.duration_ms))+" ")])])])},a=[],i=(s("99af"),s("b680"),{props:["track"],filters:{formatDuration:function(t){var e=Math.floor(t/6e4),s=(t%6e4/1e3).toFixed(0);return"".concat(e,":").concat(s<10?"0":"").concat(s)}}}),n=i,l=(s("a145"),s("2877")),c=Object(l["a"])(n,r,a,!1,null,null,null);e["a"]=c.exports},"408a":function(t,e,s){var r=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},4845:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"flex flex-col md:flex-row justify-between"},[s("h2",{staticClass:"text-center text-white text-2xl"},[t._v(t._s(t.title))]),t.hasSlot?s("div",{staticClass:"text-white flex justify-around mt-10"},[t._t("buttons")],2):t._e()])},a=[],i={props:["title"],computed:{hasSlot:function(){return!!this.$slots.buttons}}},n=i,l=s("2877"),c=Object(l["a"])(n,r,a,!1,null,null,null);e["a"]=c.exports},"4dc3":function(t,e,s){},5402:function(t,e,s){},"555f":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-gray-900 w-full h-screen flex justify-center items-center"},[s("div",{staticClass:"loader"})])}],i={},n=i,l=(s("a071"),s("2877")),c=Object(l["a"])(n,r,a,!1,null,null,null);e["a"]=c.exports},"55ae":function(t,e,s){"use strict";var r=s("ff22"),a=s.n(r);a.a},6346:function(t,e,s){"use strict";var r=s("4dc3"),a=s.n(r);a.a},"82ea":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"baseButton text-white px-5 py-1 border hover:p-10 rounded-full",on:{click:function(e){return t.$emit("click")}}},[t._v(t._s(t.text))])},a=[],i={props:["text"]},n=i,l=(s("55ae"),s("2877")),c=Object(l["a"])(n,r,a,!1,null,null,null);e["a"]=c.exports},a071:function(t,e,s){"use strict";var r=s("c25f"),a=s.n(r);a.a},a145:function(t,e,s){"use strict";var r=s("5402"),a=s.n(r);a.a},a55b:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mx-auto py-10 flex justify-center items-center"},[s("div",{staticClass:"text-white my-0 mx-auto text-center text-white"},[s("BaseButton",{staticClass:"border border-white",attrs:{text:"Login with Spotify account"},on:{click:t.clickHandler}})],1)])},a=[],i=s("82ea"),n=s("5f87"),l={components:{BaseButton:i["a"]},methods:{clickHandler:function(){window.location.href=this.loginURL}},computed:{loginURL:function(){return"".concat(Object(n["a"])(),"/login")}}},c=l,o=s("2877"),u=Object(o["a"])(c,r,a,!1,null,null,null);e["default"]=u.exports},abb5:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top-tracks mt-10 lg:mt-0"},t._l(t.tracksList,(function(t,e){return s("div",{key:e},[s("TrackItem",{attrs:{track:t}})],1)})),0)},a=[],i=s("1f42"),n={props:["tracksList"],components:{TrackItem:i["a"]}},l=n,c=s("2877"),o=Object(c["a"])(l,r,a,!1,null,null,null);e["a"]=o.exports},b680:function(t,e,s){"use strict";var r=s("23e7"),a=s("a691"),i=s("408a"),n=s("1148"),l=s("d039"),c=1..toFixed,o=Math.floor,u=function(t,e,s){return 0===e?s:e%2===1?u(t,e-1,s*t):u(t*t,e/2,s)},f=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},p=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){c.call({})}));r({target:"Number",proto:!0,forced:p},{toFixed:function(t){var e,s,r,l,c=i(this),p=a(t),d=[0,0,0,0,0,0],m="",x="0",v=function(t,e){var s=-1,r=e;while(++s<6)r+=t*d[s],d[s]=r%1e7,r=o(r/1e7)},h=function(t){var e=6,s=0;while(--e>=0)s+=d[e],d[e]=o(s/t),s=s%t*1e7},w=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==d[t]){var s=String(d[t]);e=""===e?s:e+n.call("0",7-s.length)+s}return e};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(m="-",c=-c),c>1e-21)if(e=f(c*u(2,69,1))-69,s=e<0?c*u(2,-e,1):c/u(2,e,1),s*=4503599627370496,e=52-e,e>0){v(0,s),r=p;while(r>=7)v(1e7,0),r-=7;v(u(10,r,1),0),r=e-1;while(r>=23)h(1<<23),r-=23;h(1<<r),v(1,1),h(2),x=w()}else v(0,s),v(1<<-e,0),x=w()+n.call("0",p);return p>0?(l=x.length,x=m+(l<=p?"0."+n.call("0",p-l)+x:x.slice(0,l-p)+"."+x.slice(l-p))):x=m+x,x}})},c25f:function(t,e,s){},c66d:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile bg-black-500 w-full md:mt-10"},[null===t.user?s("Loader"):s("div",{staticClass:"flex flex-col justify-center items-center"},[s("div",{staticClass:"user-avatar flex justify-center flex-col items-center"},[s("div",{staticClass:"h-16 w-16"},[s("img",{staticClass:"rounded-full",attrs:{src:t.userImg,alt:""}})]),s("div",[s("p",{staticClass:"text-xl text-white"},[t._v(t._s(t.userName))])])]),s("div",{staticClass:"stat-info flex justify-around items-center mx-auto mt-10 text-white lg:max-w-lg"},[s("div",{staticClass:"text-center px-4"},[s("p",[t._v(" "+t._s(t.followers)+" ")]),s("p",[t._v(" Followers ")])]),s("div",{staticClass:"text-center px-4"},[s("p",[t._v(t._s(t.following))]),s("p",[t._v("Following")])]),s("div",{staticClass:"text-center px-4"},[s("p",[t._v(t._s(t.totaolPlaylists))]),s("p",[t._v("play lists")])])]),s("div",{staticClass:"mt-10 flex justify-center"},[s("BaseButton",{attrs:{text:"Logout"},on:{click:t.logoutHandler}})],1),s("div",{staticClass:"flex flex-col lg:flex-row lg:justify-between mt-10"},[s("div",{staticClass:"top-artists px-6"},[s("div",{staticClass:"flex justify-between items-center align-middle py-3"},[s("BaseHeader",{attrs:{title:"Top artists"}}),s("BaseButton",{staticClass:"lg:my-5 uppercase",attrs:{text:"More"},on:{click:function(e){return t.$router.push("/topArtists")}}})],1),s("div",{staticClass:"top-artists flex flex-col"},t._l(t.slicedTopAritsts,(function(e,r){return s("div",{key:r,staticClass:"flex items-center text-white justify-start p-2"},[s("img",{staticClass:"max-w-lg w-12 rounded-full mr-5",attrs:{src:e.images[1].url,alt:"artist-img"}}),s("p",{staticClass:"text-center mr-10"},[t._v(t._s(e.name))])])})),0)]),s("div",{staticClass:"top-tracks lg:ml-10 px-3"},[s("div",{staticClass:"flex absolute-center items-center justify-between py-3"},[s("BaseHeader",{attrs:{title:"Top tracks"}}),s("BaseButton",{staticClass:"lg:my-5 uppercase",attrs:{text:"More"},on:{click:function(e){return t.$router.push("/topTracks")}}})],1),s("TracksList",{attrs:{tracksList:t.slicedTopTracks}})],1)])])],1)},a=[],i=(s("99af"),s("fb6a"),s("b680"),s("96cf"),s("1da1")),n=s("555f"),l=s("abb5"),c=s("82ea"),o=s("4845"),u=s("78cc"),f=s("5f87"),p={data:function(){return{user:null,followedArtists:null,playlists:null,topArtists:null,topTracks:null}},components:{TracksList:l["a"],Loader:n["a"],BaseButton:c["a"],BaseHeader:o["a"]},computed:{userImg:function(){return this.user&&this.user.images[0].url},userName:function(){return this.user&&this.user.display_name},followers:function(){return this.user&&this.user.followers.total},following:function(){return this.followedArtists&&this.followedArtists.artists.total},totaolPlaylists:function(){return this.playlists&&this.playlists.total},slicedTopAritsts:function(){return this.topArtists&&this.topArtists.items.slice(0,10)},slicedTopTracks:function(){return this.topTracks&&this.topTracks.items.slice(0,10)}},filters:{formatDuration:function(t){var e=Math.floor(t/6e4),s=(t%6e4/1e3).toFixed(0);return"".concat(e,":").concat(s<10?"0":"").concat(s)}},methods:{logoutHandler:function(){Object(f["b"])()}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,r,a,i,n,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["r"])();case 2:s=e.sent,r=s.user,a=s.followedArtists,i=s.playlists,n=s.topArtists,l=s.topTracks,t.user=r,t.followedArtists=a,t.playlists=i,t.topArtists=n,t.topTracks=l;case 13:case"end":return e.stop()}}),e)})))()}},d=p,m=(s("6346"),s("2877")),x=Object(m["a"])(d,r,a,!1,null,null,null);e["default"]=x.exports},ff22:function(t,e,s){}}]);
//# sourceMappingURL=profile.4ea70c83.js.map