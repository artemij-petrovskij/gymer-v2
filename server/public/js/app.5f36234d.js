(function(t){function e(e){for(var a,r,c=e[0],u=e[1],s=e[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d208c88":"fdc56ff6","chunk-2d221fb8":"4963d85d","chunk-e0aa2c1e":"6de7e2bd","chunk-10773710":"14090c5f","chunk-59531d52":"e8564734","chunk-5da3aea4":"d1f8bf06"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-e0aa2c1e":1,"chunk-10773710":1,"chunk-59531d52":1,"chunk-5da3aea4":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2d208c88":"31d6cfe0","chunk-2d221fb8":"31d6cfe0","chunk-e0aa2c1e":"c9f5a90d","chunk-10773710":"dc8523b7","chunk-59531d52":"deefd9c1","chunk-5da3aea4":"deefd9c1"}[t]+".css",o=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===a||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2f30":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n(t.layout,{tag:"component"},[n("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-card",{staticClass:"py-12",attrs:{flat:""}},[n("v-card-text",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"transition-swing text-h2 pt-4 pb-5",staticStyle:{"text-align":"center !important"}},[t._v(" Gymer Lite ")])]),n("v-btn-toggle",{attrs:{rounded:""}},[n("v-btn",{staticClass:"auth",attrs:{to:"/"}},[t._v(" Main ")]),n("v-btn",{staticClass:"auth",attrs:{to:"/login"}},[t._v(" Login ")]),n("v-btn",{staticClass:"auth",attrs:{to:"/signup"}},[t._v(" SignUp ")])],1)],1)],1)],1),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-footer",{attrs:{app:""}},[n("svg",{staticClass:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"}},[n("path",{attrs:{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"}})]),n("v-icon",{attrs:{large:""}}),n("a",{attrs:{href:"#"}},[t._v("v2.0")])],1)],1)},c=[],u=(n("6847"),n("2877")),s=n("6544"),l=n.n(s),d=n("7496"),p=n("8336"),f=n("a609"),h=n("b0af"),v=n("99d9"),m=n("62ad"),g=n("a523"),b=n("553a"),y=n("132d"),C=n("f6c4"),w=n("0fd9"),k={},_=Object(u["a"])(k,i,c,!1,null,"79b6286a",null),V=_.exports;l()(_,{VApp:d["a"],VBtn:p["a"],VBtnToggle:f["a"],VCard:h["a"],VCardText:v["a"],VCol:m["a"],VContainer:g["a"],VFooter:b["a"],VIcon:y["a"],VMain:C["a"],VRow:w["a"]});var x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-system-bar",{attrs:{app:""}},[n("v-spacer"),n("v-icon",[t._v("mdi-square")]),n("v-icon",[t._v("mdi-circle")]),n("v-icon",[t._v("mdi-triangle")])],1),n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-sheet",{staticClass:"pa-4",attrs:{color:"deep-purple lighten-5"}},[n("v-avatar",{staticClass:"mb-4",attrs:{color:"deep-purple lighten-2",size:"80"}},[n("span",{staticClass:"white--text text-h5"},[t._v(t._s(t.login[0]+t.login[1]))])]),n("div",[t._v(t._s(t.login))])],1),n("v-divider"),n("v-list",[n("v-list-item",{attrs:{to:"training"}},[n("v-list-item-icon",[n("v-icon",[t._v("x")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Training")])],1)],1),n("v-list-item",{attrs:{to:"weight"}},[n("v-list-item-icon",[n("v-icon",[t._v("x")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Weight")])],1)],1)],1)],1),n("v-main",[n("v-container",{staticClass:"py-8 px-6",attrs:{fluid:""}},[n("router-view")],1)],1)],1)},j=[],A={data:function(){return{login:localStorage.getItem("login"),tabs:null,cards:["Today","Yesterday"],drawer:null}}},S=A,O=n("8212"),P=n("ce7e"),E=n("8860"),L=n("da13"),T=n("5d23"),I=n("34c3"),D=n("f774"),M=n("8dd9"),q=n("2fa4"),B=n("afd9"),N=Object(u["a"])(S,x,j,!1,null,null,null),$=N.exports;l()(N,{VApp:d["a"],VAvatar:O["a"],VContainer:g["a"],VDivider:P["a"],VIcon:y["a"],VList:E["a"],VListItem:L["a"],VListItemContent:T["a"],VListItemIcon:I["a"],VListItemTitle:T["b"],VMain:C["a"],VNavigationDrawer:D["a"],VSheet:M["a"],VSpacer:q["a"],VSystemBar:B["a"]});var U={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:V,DashboardLayout:$}},F=U,J=Object(u["a"])(F,r,o,!1,null,null,null),W=J.exports;l()(J,{VApp:d["a"]});var z=n("f309");a["a"].use(z["a"]);var G=new z["a"]({}),H=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));a["a"].use(H["a"]);var K=[{path:"/",name:"Main",component:function(){return n.e("chunk-2d221fb8").then(n.bind(null,"cd56"))}},{path:"/dashboard",name:"Dashboard",meta:{layout:"Dashboard",requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-e0aa2c1e"),n.e("chunk-10773710")]).then(n.bind(null,"b707"))}},{path:"/weight",name:"Weight",meta:{layout:"Dashboard",requiresAuth:!0},component:function(){return n.e("chunk-2d208c88").then(n.bind(null,"a5ec"))}},{path:"/training",name:"Training",meta:{layout:"Dashboard",requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-e0aa2c1e"),n.e("chunk-10773710")]).then(n.bind(null,"b707"))}},{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return Promise.all([n.e("chunk-e0aa2c1e"),n.e("chunk-59531d52")]).then(n.bind(null,"a55b"))}},{path:"/signup",name:"signup",meta:{layout:"empty"},component:function(){return Promise.all([n.e("chunk-e0aa2c1e"),n.e("chunk-5da3aea4")]).then(n.bind(null,"34c3b"))}}],R=new H["a"]({mode:"history",base:"/",routes:K});R.beforeEach((function(t,e,n){t.matched.some((function(t){return t.meta.requiresAuth}))&&null==localStorage.getItem("jwt")?n({path:"/login",params:{nextUrl:t.fullPath}}):n()}));var Y=R;a["a"].config.productionTip=!1,new a["a"]({vuetify:G,router:Y,render:function(t){return t(W)}}).$mount("#app")},6847:function(t,e,n){"use strict";n("2f30")}});
//# sourceMappingURL=app.5f36234d.js.map