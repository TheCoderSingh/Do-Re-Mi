(this["webpackJsonpdo-re-mi"]=this["webpackJsonpdo-re-mi"]||[]).push([[0],{33:function(e,t,c){},51:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),s=c.n(i),a=c(26),r=c.n(a),o=c(4),l=c(10),j=c(2),d=(c(33),c(5)),u=c.n(d),b=function(e){for(var t=e+"=",c=decodeURIComponent(document.cookie).split(";"),n=0;n<c.length;n++){for(var i=c[n];" "===i.charAt(0);)i=i.substring(1);if(0===i.indexOf(t))return i.substring(t.length,i.length)}return""},h=function(){document.cookie="token=undefined;expires=;path=/"},m=function(){try{var e=b("token");e&&(u.a.defaults.headers.common.Authorization="Bearer ".concat(e))}catch(t){console.log("Error setting auth",t)}},O=(c(51),function(){var e=Object(i.useState)(),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(),r=Object(o.a)(a,2),j=r[0],d=r[1],b=Object(i.useState)(),O=Object(o.a)(b,2),f=O[0],p=O[1];return Object(i.useEffect)((function(){m(),u.a.get("https://api.spotify.com/v1/me").then((function(e){console.log(e.data),s(e.data.display_name),d(e.data.images[0].url),p(e.data.followers.total)})).catch((function(e){return console.error(e)}))}),[]),Object(n.jsx)("header",{children:Object(n.jsx)("div",{className:"inner",children:Object(n.jsxs)("div",{id:"header-container",children:[Object(n.jsxs)("div",{id:"header-left",children:[Object(n.jsx)("img",{src:j,alt:"Profile"}),Object(n.jsxs)("div",{id:"header-content",children:[Object(n.jsxs)("h1",{children:["Hello, ",c]}),Object(n.jsxs)("p",{children:["Followers: ",f]})]})]}),Object(n.jsx)("div",{className:"header-right",children:Object(n.jsx)(l.b,{to:"/logout",onClick:h,children:"Logout"})})]})})})}),f=(c(57),function(e){var t=e.id,c=e.name,i=e.image;return Object(n.jsxs)("div",{className:"playlist",children:[Object(n.jsx)(l.b,{to:"/playlist/".concat(t),children:Object(n.jsx)("img",{src:i,alt:"Playlist"})}),Object(n.jsx)("h3",{children:c})]})}),p=(c(58),function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(i.useEffect)((function(){m(),u.a.get("https://api.spotify.com/v1/browse/featured-playlists").then((function(e){console.log(e),s(e.data.playlists.items)})).catch((function(e){return console.error(e)}))}),[]),Object(n.jsx)("section",{id:"featured",children:Object(n.jsxs)("div",{className:"inner",children:[Object(n.jsx)("h1",{className:"section-head",children:"Featured"}),Object(n.jsx)("div",{className:"playlists",children:c.map((function(e){return Object(n.jsx)(f,{id:e.id,image:e.images[0].url,name:e.name,description:e.description,tracks:e.tracks.href},e.id)}))})]})})}),x=function(e){var t=e.name,c=e.image,i=e.tracks;return Object(n.jsxs)("div",{className:"playlist",children:[Object(n.jsx)("a",{href:i,children:Object(n.jsx)("img",{src:c,alt:"Playlist"})}),Object(n.jsx)("h3",{children:t})]})},g=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(i.useEffect)((function(){m(),u.a.get("https://api.spotify.com/v1/browse/new-releases?limit=12").then((function(e){console.log(e.data.albums.items),s(e.data.albums.items)})).catch((function(e){return console.error(e)}))}),[]),Object(n.jsx)("section",{id:"new-releases",children:Object(n.jsxs)("div",{className:"inner",children:[Object(n.jsx)("h1",{className:"section-head",children:"New Releases"}),Object(n.jsx)("div",{className:"playlists",children:c.map((function(e){return Object(n.jsx)(x,{image:e.images[0].url,name:e.name,tracks:e.href},e.id)}))})]})})},v=function(e){var t=e.name,c=e.image;return Object(n.jsxs)("div",{className:"playlist",children:[Object(n.jsx)("img",{src:c,alt:"Playlist"}),Object(n.jsx)("h3",{children:t})]})},_=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(i.useEffect)((function(){m(),u.a.get("https://api.spotify.com/v1/me/top/tracks?limit=12").then((function(e){console.log(e.data),s(e.data.items)})).catch((function(e){return console.error(e)}))}),[]),Object(n.jsx)("section",{id:"top-tracks",children:Object(n.jsxs)("div",{className:"inner",children:[Object(n.jsx)("h1",{className:"section-head",children:"Top Tracks"}),Object(n.jsx)("div",{className:"playlists",children:c.map((function(e){return Object(n.jsx)(v,{name:e.name,image:e.album.images[0].url},e.id)}))})]})})},y=function(e){var t=e.id,c=e.name,i=e.image;return Object(n.jsx)("div",{className:"playlist",children:Object(n.jsxs)(l.b,{to:"/playlists/".concat(t),children:[Object(n.jsx)("img",{src:i,alt:"Playlist"}),Object(n.jsx)("h3",{children:c})]})})},E=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(i.useEffect)((function(){m(),u.a.get("https://api.spotify.com/v1/me/top/artists").then((function(e){console.log(e.data.items),s(e.data.items)})).catch((function(e){return console.error(e)}))}),[]),Object(n.jsx)("section",{id:"top-artists",children:Object(n.jsxs)("div",{className:"inner",children:[Object(n.jsx)("h1",{className:"section-head",children:"Top Artists"}),Object(n.jsx)("div",{className:"playlists",children:c.map((function(e){return Object(n.jsx)(y,{id:e.id,image:e.images[0].url,name:e.name},e.id)}))})]})})},N=c.p+"static/media/logo2.3ecf6301.png",T=(c(59),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTHORIZE_URL:"https://accounts.spotify.com/authorize",REACT_APP_CLIENT_ID:"7dfbb30d4b1e46bb940b695250628adb",REACT_APP_REDIRECT_URI:"https://doremi.thecodersingh.com"})),k=T.REACT_APP_CLIENT_ID,P=T.REACT_APP_AUTHORIZE_URL,R=T.REACT_APP_REDIRECT_URI,C=function(){return Object(n.jsx)("div",{id:"login",children:Object(n.jsxs)("div",{id:"login-content",children:[Object(n.jsx)("img",{src:N,alt:"Logo"}),Object(n.jsx)("button",{onClick:function(){window.location="".concat(P,"?client_id=").concat(k,"&redirect_uri=").concat(R,"&response_type=token&scope=user-top-read")},children:"Login with Spotify"})]})})},S=(c(60),function(e){var t=e.name,c=e.image;return Object(n.jsxs)("div",{className:"track",children:[Object(n.jsx)("img",{src:c,alt:"Playlist"}),Object(n.jsx)("h3",{children:t})]})}),A=function(e){var t=Object(i.useState)([]),c=Object(o.a)(t,2),s=c[0],a=c[1];return Object(i.useEffect)((function(){m();var t=e.match.params.id;u.a.get("https://api.spotify.com/v1/playlists/".concat(t,"/tracks")).then((function(e){console.log(e.data.items),a(e.data.items)})).catch((function(e){return console.error(e)}))}),[]),Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"inner",children:Object(n.jsx)("div",{className:"tracks",children:s.map((function(e){return Object(n.jsx)(S,{name:e.track.name,image:e.track.album.images[0].url},e.id)}))})})})};var w=function(){var e=Object(i.useState)(),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(i.useEffect)((function(){var e=b("token");if("undefined"!==typeof e&&e&&"undefined"!==e)s(e);else{var t=window.location.hash;if(t){t=t.substring(1).split("&").reduce((function(e,t){if(t){var c=t.split("=");e[c[0]]=decodeURIComponent(c[1])}return e}),{}),window.location.hash="",s(t.access_token);var c=new Date;c.setTime(c.getTime()+36e5),document.cookie="token="+t.access_token+";expires="+c.toUTCString()+";path=/"}}}),[c]),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(l.a,{children:c?Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{}),Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{path:"/playlist/:id",component:A}),Object(n.jsxs)(j.a,{exact:!0,path:"/",children:[Object(n.jsx)(p,{}),Object(n.jsx)(g,{}),Object(n.jsx)(E,{}),Object(n.jsx)(_,{})]})]})]}):Object(n.jsx)(C,{})})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),I()}},[[61,1,2]]]);
//# sourceMappingURL=main.5a2fd8d6.chunk.js.map