(this.webpackJsonpenvtubers=this.webpackJsonpenvtubers||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),s=n.n(c),i=(n(14),n(15),n(1)),l=n.n(i),o=n(2),u=n(5),m=n(6),h=n(8),d=n(7),v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoaded:!1,isError:!1,streams:[]},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/envtubers/vtubers.json").then((function(e){return e.json()})).then((function(t){e.updateStreams(t),setInterval((function(){return e.updateStreams(t)}),3e5)}))}},{key:"updateStreams",value:function(e){var t=this;this.getTopStreams(e).then((function(e){t.setState({isLoaded:!0,streams:e})})).catch((function(e){t.state.isLoaded||t.setState({isError:!0})}))}},{key:"getTopStreams",value:function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return e.user_id})),e.abrupt("return",f(n));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.streams,t="Loading your anime waifus and husbandos now...";return this.state.isError&&(t="Error loading data :( Try refreshing"),this.state.isLoaded?r.a.createElement("div",{id:"live-channels",className:"col s12 m10 l6"},e.map((function(e){return r.a.createElement("div",{className:"live-channel card grey-text lighten-5",key:e.channel._id},r.a.createElement("div",{className:"streamer"},r.a.createElement("a",{href:e.channel.url},r.a.createElement("img",{alt:"logo",className:"profile-pic circle",src:e.channel.logo})),r.a.createElement("div",null,r.a.createElement("a",{href:e.channel.url},e.channel.display_name)),r.a.createElement("div",{className:"card grey darken-4"},e.channel.description.slice(0,300))),r.a.createElement("div",{className:"playing"},r.a.createElement("a",{href:e.channel.url},r.a.createElement("img",{alt:"banner",src:e.preview.medium+"?"+Math.random()})),r.a.createElement("div",{className:"streamInfo"},r.a.createElement("a",{href:"https://www.twitch.tv/directory/game"+e.game},e.game)," ",r.a.createElement("div",null,r.a.createElement("strong",null,e.viewers)," viewers")),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",null,e.channel.status)))}))):r.a.createElement("div",{id:"live-channels",className:"col s10 m8 l6"},r.a.createElement("div",{className:"live-channel card grey-text lighten-5"},t))}}]),n}(r.a.Component);function f(e){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w(t,100),a=n.map((function(e){var t=new Headers({Accept:"application/vnd.twitchtv.v5+json","Client-ID":"kimne78kx3ncx6brgo4mv6wki5h1ko"}),n=new Request("https://api.twitch.tv/kraken/streams?channel="+e.join(","),{method:"GET",headers:t});return fetch(n).then(E).then((function(e){return e.json()})).then((function(e){return e.streams}))})),e.abrupt("return",Promise.all(a).then((function(e){return e.flat().sort((function(e,t){return t.viewers-e.viewers}))})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){if(!e.ok)throw Error(e.statusText);return e}var w=function(e,t){return Array.from({length:Math.ceil(e.length/t)},(function(n,a){return e.slice(a*t,a*t+t)}))},g=v;var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",null,r.a.createElement("div",{id:"nav",className:"nav-wrapper purple lighten-3"},r.a.createElement("div",{id:"logo",className:"title"},"Live EN VTubers"))),r.a.createElement("div",{id:"page",className:"row"},r.a.createElement("div",{className:"col s0 m1 l3"}),r.a.createElement(g,null),r.a.createElement("div",{className:"col s0 m1 l3"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.acdec48a.chunk.js.map