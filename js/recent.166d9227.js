(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["recent"],{1148:function(t,e,r){"use strict";var a=r("a691"),n=r("1d80");t.exports="".repeat||function(t){var e=String(n(this)),r="",s=a(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(r+=e);return r}},"1f42":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full flex items-center text-white justify-between py-2 truncate"},[r("div",{staticClass:"flex items-start"},[r("img",{staticClass:"w-12 mr-5",attrs:{src:t.track.album.images[1].url,alt:""}}),r("div",{staticClass:"flex flex-col w-15 truncate max-w-xs lg:max-w-xl"},[r("p",{staticClass:"truncate"},[t._v(t._s(t.track.name))]),r("div",{staticClass:"flex"},[r("div",{staticClass:"truncate"},[t._l(t.track.artists,(function(e,a){return r("span",{key:a,staticClass:"profile__artist-name truncate"},[t._v(" "+t._s(e.name)+" ")])})),r("span",{staticClass:"truncate"},[t._v(" "+t._s(t.track.album.name)+" ")])],2)])])]),r("div",{staticClass:"ml-4"},[r("p",[t._v(" "+t._s(t._f("formatDuration")(t.track.duration_ms))+" ")])])])},n=[],s=(r("99af"),r("b680"),{props:["track"],filters:{formatDuration:function(t){var e=Math.floor(t/6e4),r=(t%6e4/1e3).toFixed(0);return"".concat(e,":").concat(r<10?"0":"").concat(r)}}}),c=s,i=(r("a145"),r("2877")),l=Object(i["a"])(c,a,n,!1,null,null,null);e["a"]=l.exports},"408a":function(t,e,r){var a=r("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},4845:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"flex flex-col md:flex-row justify-between"},[r("h2",{staticClass:"text-center text-white text-2xl"},[t._v(t._s(t.title))]),t.hasSlot?r("div",{staticClass:"text-white flex justify-around mt-10"},[t._t("buttons")],2):t._e()])},n=[],s={props:["title"],computed:{hasSlot:function(){return!!this.$slots.buttons}}},c=s,i=r("2877"),l=Object(i["a"])(c,a,n,!1,null,null,null);e["a"]=l.exports},5402:function(t,e,r){},"555f":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-gray-900 w-full h-screen flex justify-center items-center"},[r("div",{staticClass:"loader"})])}],s={},c=s,i=(r("a071"),r("2877")),l=Object(i["a"])(c,a,n,!1,null,null,null);e["a"]=l.exports},7413:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto py-10 w-full md:ml-10"},[null===t.recentPlayed?r("loader"):r("div",{staticClass:"content"},[r("BaseHeader",{attrs:{title:"Recent played"}})],1),r("div",{staticClass:"p-6"},[r("TracksList",{attrs:{tracksList:t.tracks}})],1)],1)},n=[],s=(r("d81d"),r("96cf"),r("1da1")),c=r("4845"),i=r("555f"),l=r("78cc"),u=r("abb5"),o={data:function(){return{recentPlayed:null}},computed:{tracks:function(){return this.recentPlayed&&this.recentPlayed.items.map((function(t){return t.track}))}},components:{TracksList:u["a"],Loader:i["a"],BaseHeader:c["a"]},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["i"])();case 2:r=e.sent,t.recentPlayed=r.data;case 4:case"end":return e.stop()}}),e)})))()}},f=o,d=r("2877"),m=Object(d["a"])(f,a,n,!1,null,null,null);e["default"]=m.exports},a071:function(t,e,r){"use strict";var a=r("c25f"),n=r.n(a);n.a},a145:function(t,e,r){"use strict";var a=r("5402"),n=r.n(a);n.a},abb5:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"top-tracks mt-10 lg:mt-0"},t._l(t.tracksList,(function(t,e){return r("div",{key:e},[r("TrackItem",{attrs:{track:t}})],1)})),0)},n=[],s=r("1f42"),c={props:["tracksList"],components:{TrackItem:s["a"]}},i=c,l=r("2877"),u=Object(l["a"])(i,a,n,!1,null,null,null);e["a"]=u.exports},b680:function(t,e,r){"use strict";var a=r("23e7"),n=r("a691"),s=r("408a"),c=r("1148"),i=r("d039"),l=1..toFixed,u=Math.floor,o=function(t,e,r){return 0===e?r:e%2===1?o(t,e-1,r*t):o(t*t,e/2,r)},f=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},d=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i((function(){l.call({})}));a({target:"Number",proto:!0,forced:d},{toFixed:function(t){var e,r,a,i,l=s(this),d=n(t),m=[0,0,0,0,0,0],v="",p="0",x=function(t,e){var r=-1,a=e;while(++r<6)a+=t*m[r],m[r]=a%1e7,a=u(a/1e7)},h=function(t){var e=6,r=0;while(--e>=0)r+=m[e],m[e]=u(r/t),r=r%t*1e7},w=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==m[t]){var r=String(m[t]);e=""===e?r:e+c.call("0",7-r.length)+r}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(v="-",l=-l),l>1e-21)if(e=f(l*o(2,69,1))-69,r=e<0?l*o(2,-e,1):l/o(2,e,1),r*=4503599627370496,e=52-e,e>0){x(0,r),a=d;while(a>=7)x(1e7,0),a-=7;x(o(10,a,1),0),a=e-1;while(a>=23)h(1<<23),a-=23;h(1<<a),x(1,1),h(2),p=w()}else x(0,r),x(1<<-e,0),p=w()+c.call("0",d);return d>0?(i=p.length,p=v+(i<=d?"0."+c.call("0",d-i)+p:p.slice(0,i-d)+"."+p.slice(i-d))):p=v+p,p}})},c25f:function(t,e,r){}}]);
//# sourceMappingURL=recent.166d9227.js.map