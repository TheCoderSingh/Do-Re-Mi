(this["webpackJsonpdo-re-mi"]=this["webpackJsonpdo-re-mi"]||[]).push([[0],{20:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n(1),i=n.n(c),r=n(14),s=n.n(r),a=n(4),u=(n(20),n(3)),d=n.n(u),f=function(t){for(var e=t+"=",n=decodeURIComponent(document.cookie).split(";"),o=0;o<n.length;o++){for(var c=n[o];" "===c.charAt(0);)c=c.substring(1);if(0===c.indexOf(e))return c.substring(e.length,c.length)}return""},l=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=(e[0],e[1]);return Object(c.useEffect)((function(){!function(){try{var t=f("token");t&&(d.a.defaults.headers.common.Authorization="Bearer ".concat(t))}catch(e){console.log("Error setting auth",e)}}(),d.a.get("https://api.spotify.com/v1/browse/featured-playlists").then((function(t){console.log(t.data.playlists),n(t.data.playlists)})).catch((function(t){return console.error(t)}))}),[]),Object(o.jsx)("div",{})},_=Object({NODE_ENV:"production",PUBLIC_URL:"/do-re-mi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTHORIZE_URL:"https://accounts.spotify.com/authorize",REACT_APP_CLIENT_ID:"7dfbb30d4b1e46bb940b695250628adb",REACT_APP_REDIRECT_URI:"http://localhost:3000"}),b=_.REACT_APP_CLIENT_ID,h=_.REACT_APP_AUTHORIZE_URL,p=_.REACT_APP_REDIRECT_URI;var E=function(){var t=Object(c.useState)(),e=Object(a.a)(t,2),n=e[0],i=e[1];return Object(c.useEffect)((function(){var t=f("token");if("undefined"===typeof t){var e=window.location.hash.substring(1).split("&").reduce((function(t,e){if(e){var n=e.split("=");t[n[0]]=decodeURIComponent(n[1])}return t}),{});window.location.hash="",i(e.access_token);var n=new Date,o=n.getTime();o+=36e5,n.setTime(o),document.cookie="token="+e.access_token+";expires="+n.toUTCString()+";path=/"}else i(t)}),[n]),Object(o.jsx)("div",{className:"App",children:n?Object(o.jsx)(l,{}):Object(o.jsx)("button",{type:"submit",onClick:function(){window.location="".concat(h,"?client_id=").concat(b,"&redirect_uri=").concat(p,"&response_type=token")},children:"Login with Spotify"})})},T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),o(t),c(t),i(t),r(t)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(E,{})}),document.getElementById("root")),T()}},[[38,1,2]]]);
//# sourceMappingURL=main.2c18f69a.chunk.js.map