(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[5],{101:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(38),i=n.n(a);t.a=function(e){var t=e.id,n=e.followed,r=e.unfollowHandler,a=e.followHandler,c=e.followingInProgress;return o.a.createElement("button",{className:i()("btn",{"btn--unfollow":n,"btn--follow":!n}),onClick:n?function(){return r(t)}:function(){return a(t)},disabled:c&&c.some((function(e){return e===t}))},n?"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f":"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f")}},129:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},130:function(e,t,n){var r=n(143),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},131:function(e,t,n){var r=n(130).Symbol;e.exports=r},141:function(e,t,n){var r=n(129),o=n(142),a=n(144),i=Math.max,c=Math.min;e.exports=function(e,t,n){var l,u,f,s,d,m,v=0,p=!1,b=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function j(t){var n=l,r=u;return l=u=void 0,v=t,s=e.apply(r,n)}function E(e){return v=e,d=setTimeout(O,t),p?j(e):s}function w(e){var n=e-m;return void 0===m||n>=t||n<0||b&&e-v>=f}function O(){var e=o();if(w(e))return y(e);d=setTimeout(O,function(e){var n=t-(e-m);return b?c(n,f-(e-v)):n}(e))}function y(e){return d=void 0,g&&l?j(e):(l=u=void 0,s)}function x(){var e=o(),n=w(e);if(l=arguments,u=this,m=e,n){if(void 0===d)return E(m);if(b)return clearTimeout(d),d=setTimeout(O,t),j(m)}return void 0===d&&(d=setTimeout(O,t)),s}return t=a(t)||0,r(n)&&(p=!!n.leading,f=(b="maxWait"in n)?i(a(n.maxWait)||0,t):f,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==d&&clearTimeout(d),v=0,l=m=u=d=void 0},x.flush=function(){return void 0===d?s:y(o())},x}},142:function(e,t,n){var r=n(130);e.exports=function(){return r.Date.now()}},143:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(39))},144:function(e,t,n){var r=n(129),o=n(145),a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=c.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}},145:function(e,t,n){var r=n(146),o=n(149);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},146:function(e,t,n){var r=n(131),o=n(147),a=n(148),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},147:function(e,t,n){var r=n(131),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(l){}var o=i.call(e);return r&&(t?e[c]=n:delete e[c]),o}},148:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},149:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},153:function(e,t,n){"use strict";n.r(t);var r=n(19),o=n(0),a=n.n(o),i=n(6),c=n(141),l=n.n(c),u=n(8),f=n(14),s=n(101),d=n(41),m=n(21);var v=Object(f.d)(d.a)((function(e){var t=e.id,n=e.name,r=e.status,o=e.img,i=e.followed,c=e.followHandler,l=e.unfollowHandler;return a.a.createElement("div",{className:"friend"},a.a.createElement(u.c,{to:"/profile/".concat(t)},a.a.createElement("div",{className:"friend__info"},a.a.createElement("div",{className:"friend__img"},a.a.createElement("img",{src:o||m.a,alt:"name"})),a.a.createElement("div",{className:"friend__text"},a.a.createElement("div",{className:"friend__name"},n),a.a.createElement("div",{className:"friend__status"},r||"\u0421\u043a\u043e\u0440\u043e \u0442\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441")))),a.a.createElement(s.a,{id:t,followed:i,followHandler:c,unfollowHandler:l}))})),p=n(52),b=n(51),g=n(40),j=n(17);t.default=Object(f.d)(g.a)((function(){var e=Object(i.b)(),t=Object(o.useState)(!0),n=Object(r.a)(t,2),c=n[0],u=n[1],f=Object(i.c)(p.a),s=f.items,d=f.pageSize,m=f.currentPage,g=f.totalCount,E=f.isFirstLoading;Object(o.useEffect)((function(){c&&(e(Object(b.b)(m+1)),e(Object(b.a)(m,d,null,!0))),u(!1)}),[c]);var w=l()((function(e){e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<=250&&g>s.length&&u(!0)}),50);return Object(o.useEffect)((function(){return document.addEventListener("scroll",w),function(){document.removeEventListener("scroll",w)}}),[w]),E?a.a.createElement(j.a,null):a.a.createElement("div",{className:"friends block"},a.a.createElement("div",{className:"friends__header"},a.a.createElement("div",{className:"friends__count"},"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 ",g)),s.map((function(e,t){var n=e.name,r=e.id,o=e.photos,i=e.status,c=e.followed;return a.a.createElement(v,{key:"".concat(n,"_").concat(t),id:r,name:n,status:i,img:o.large,followed:c})})))}))}}]);
//# sourceMappingURL=5.18e369fd.chunk.js.map