(this["webpackJsonpdo-re-mi"]=this["webpackJsonpdo-re-mi"]||[]).push([[0],{20:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),i=c.n(s),a=c(14),r=c.n(a),o=c(4),l=(c(20),c(3)),d=c.n(l),j=function(e){for(var t=e+"=",c=decodeURIComponent(document.cookie).split(";"),n=0;n<c.length;n++){for(var s=c[n];" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return""},u=function(){try{var e=j("token");e&&(d.a.defaults.headers.common.Authorization="Bearer ".concat(e))}catch(t){console.log("Error setting auth",t)}},h=(c(38),function(e){var t=e.name,c=e.description,s=e.image,i=e.tracks;return Object(n.jsxs)("div",{className:"playlist",children:[Object(n.jsx)("img",{src:s,alt:"Playlist"}),Object(n.jsx)("h3",{children:t}),Object(n.jsx)("p",{children:c}),Object(n.jsx)("a",{href:i,children:"View tracks"})]})}),b=(c(39),function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){u(),d.a.get("https://api.spotify.com/v1/browse/featured-playlists").then((function(e){console.log(e),i(e.data.playlists.items)})).catch((function(e){return console.error(e)}))}),[]),Object(n.jsx)("section",{id:"featured",children:Object(n.jsxs)("div",{className:"inner",children:[Object(n.jsx)("h1",{className:"section-head",children:"Featured"}),Object(n.jsx)("div",{className:"playlists",children:c.map((function(e){return Object(n.jsx)(h,{image:e.images[0].url,name:e.name,description:e.description,tracks:e.tracks.href},e.id)}))})]})})}),m=function(e){var t=e.name,c=e.image,s=e.tracks;return Object(n.jsxs)("div",{className:"playlist",children:[Object(n.jsx)("img",{src:c,alt:"Playlist"}),Object(n.jsx)("h3",{children:t}),Object(n.jsx)("a",{href:s,children:"View tracks"})]})},f=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){u(),d.a.get("https://api.spotify.com/v1/browse/new-releases?limit=12").then((function(e){console.log(e.data.albums.items),i(e.data.albums.items)})).catch((function(e){return console.error(e)}))}),[]),Object(n.jsx)("section",{id:"new-releases",children:Object(n.jsxs)("div",{className:"inner",children:[Object(n.jsx)("h1",{className:"section-head",children:"New Releases"}),Object(n.jsx)("div",{className:"playlists",children:c.map((function(e){return Object(n.jsx)(m,{image:e.images[0].url,name:e.name,tracks:e.href},e.id)}))})]})})},O=function(e){var t=e.name,c=e.image;return Object(n.jsxs)("div",{className:"playlist",children:[Object(n.jsx)("img",{src:c,alt:"Playlist"}),Object(n.jsx)("h3",{children:t})]})},p=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){u(),d.a.get("https://api.spotify.com/v1/me/top/tracks?limit=12").then((function(e){console.log(e.data),i(e.data.items)})).catch((function(e){return console.error(e)}))}),[]),Object(n.jsx)("section",{id:"top-tracks",children:Object(n.jsxs)("div",{className:"inner",children:[Object(n.jsx)("h1",{className:"section-head",children:"Top Tracks"}),Object(n.jsx)("div",{className:"playlists",children:c.map((function(e){return Object(n.jsx)(O,{name:e.name,image:e.album.images[0].url},e.id)}))})]})})},x=function(e){var t=e.name,c=e.image;return Object(n.jsxs)("div",{className:"playlist",children:[Object(n.jsx)("img",{src:c,alt:"Playlist"}),Object(n.jsx)("h3",{children:t})]})},g=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){u(),d.a.get("https://api.spotify.com/v1/me/top/artists").then((function(e){console.log(e.data),i(e.data.items)})).catch((function(e){return console.error(e)}))}),[]),Object(n.jsx)("section",{id:"top-artists",children:Object(n.jsxs)("div",{className:"inner",children:[Object(n.jsx)("h1",{className:"section-head",children:"Top Artists"}),Object(n.jsx)("div",{className:"playlists",children:c.map((function(e){return Object(n.jsx)(x,{image:e.images[0].url,name:e.name},e.id)}))})]})})},v=Object({NODE_ENV:"production",PUBLIC_URL:"/do-re-mi",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTHORIZE_URL:"https://accounts.spotify.com/authorize",REACT_APP_CLIENT_ID:"7dfbb30d4b1e46bb940b695250628adb",REACT_APP_REDIRECT_URI:"http://localhost:3000"}),_=v.REACT_APP_CLIENT_ID,E=v.REACT_APP_AUTHORIZE_URL;v.REACT_APP_REDIRECT_URI;var T=function(){var e=Object(s.useState)(),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){var e=j("token");if("undefined"!==typeof e&&e&&"undefined"!==e)i(e);else{var t=window.location.hash;if(t){t=t.substring(1).split("&").reduce((function(e,t){if(t){var c=t.split("=");e[c[0]]=decodeURIComponent(c[1])}return e}),{}),window.location.hash="",i(t.access_token);var c=new Date;c.setTime(c.getTime()+36e5),document.cookie="token="+t.access_token+";expires="+c.toUTCString()+";path=/"}}}),[c]),Object(n.jsx)("div",{className:"App",children:c?Object(n.jsxs)("div",{children:[Object(n.jsx)(b,{}),Object(n.jsx)(f,{}),Object(n.jsx)(g,{}),Object(n.jsx)(p,{})]}):Object(n.jsx)("button",{type:"submit",onClick:function(){window.location="".concat(E,"?client_id=").concat(_,"&redirect_uri=").concat(window.location,"&response_type=token&scope=user-top-read")},children:"Login with Spotify"})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root")),y()}},[[40,1,2]]]);
//# sourceMappingURL=main.add5c0c3.chunk.js.map