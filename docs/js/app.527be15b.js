(function(t){function e(e){for(var n,c,i=e[0],s=e[1],u=e[2],f=0,p=[];f<i.length;f++)c=i[f],a[c]&&p.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={1:0},o=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;o.push([2,0]),r()})({2:function(t,e,r){t.exports=r("Vtdi")},"3WgG":function(t,e,r){},"4ZQg":function(t,e,r){"use strict";var n=r("3WgG"),a=r.n(n);a.a},Vtdi:function(t,e,r){"use strict";r.r(e);r("VRzm");var n=r("Kw5r"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Table")],1)},o=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[0===t.data.length?r("p",[t._v("Loading...")]):t._e(),t.data.length>0?r("table",[r("tr",[r("td",{attrs:{colspan:"2"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchString,expression:"searchString"}],attrs:{placeholder:"Search"},domProps:{value:t.searchString},on:{input:function(e){e.target.composing||(t.searchString=e.target.value)}}}),t.searchString.length>0?r("span",{on:{click:function(e){t.clear()}}},[t._v("Clear Search")]):t._e()])]),r("tr",{staticClass:"header"},[r("th",{on:{click:function(e){t.sort("Name")}}},[t._v("Name ")]),r("th",{staticClass:"GI",on:{click:function(e){t.sort("GI")}}},[t._v("GI")])]),t._l(t.sortedData,function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(e.Name))]),r("td",{staticClass:"GI",class:{backGreen:t.parseGI(e.GI)<=55,backRed:t.parseGI(e.GI)>=70}},[t._v(t._s(e.GI))])])}),r("tr",[0===t.sortedData.length?r("td",{attrs:{colspan:"2"}},[t._v("\n        Your search - "+t._s(t.searchString)+" - did not match any food.\n      ")]):t._e()])],2):t._e()])},i=[],s=(r("Z2Ku"),r("L9s1"),r("Vd3H"),r("Wcq6")),u=(r("Zs65"),{apiKey:"AIzaSyCtQu--CnKZk4l45QwwAGBSJqviQZGB47c",authDomain:"glycemic-63e94.firebaseapp.com",databaseURL:"https://glycemic-63e94.firebaseio.com",projectId:"glycemic-63e94"});s["initializeApp"](u);var l={name:"Table",data:function(){return{data:[],currentSort:"Name",currentSortDir:"asc",searchString:""}},mounted:function(){var t=this;s["database"]().ref("/").once("value").then(function(e){t.data=e.val()})},methods:{sort:function(t){t===this.currentSort&&(this.currentSortDir="asc"===this.currentSortDir?"desc":"asc"),this.currentSort=t},clear:function(){this.searchString=""},parseGI:function(t){return"string"===typeof t?parseInt(t.substring(0,t.indexOf("±"))):t}},computed:{sortedData:function(){var t=this;return this.data.slice().sort(function(e,r){e=e[t.currentSort],r=r[t.currentSort],"GI"===t.currentSort&&(e=t.parseGI(e),r=t.parseGI(r));var n=1;return"desc"===t.currentSortDir&&(n=-1),e<r?-1*n:e>r?1*n:0}).filter(function(e){return e.Name.toLowerCase().includes(t.searchString.toLowerCase())})}}},f=l,p=(r("4ZQg"),r("KHd+")),d=Object(p["a"])(f,c,i,!1,null,"6fd0fe0c",null),h=d.exports,v={name:"app",components:{Table:h}},g=v,m=(r("ZL7j"),Object(p["a"])(g,a,o,!1,null,null,null)),b=m.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(b)}}).$mount("#app")},ZL7j:function(t,e,r){"use strict";var n=r("slcd"),a=r.n(n);a.a},slcd:function(t,e,r){}});
//# sourceMappingURL=app.527be15b.js.map