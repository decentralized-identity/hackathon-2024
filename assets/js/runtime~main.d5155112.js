(()=>{"use strict";var e,t,a,r,o,f={},n={};function c(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return f[e].call(a.exports,a,a.exports,c),a.loaded=!0,a.exports}c.m=f,c.c=n,e=[],c.O=(t,a,r,o)=>{if(!a){var f=1/0;for(i=0;i<e.length;i++){a=e[i][0],r=e[i][1],o=e[i][2];for(var n=!0,b=0;b<a.length;b++)(!1&o||f>=o)&&Object.keys(c.O).every((e=>c.O[e](a[b])))?a.splice(b--,1):(n=!1,o<f&&(f=o));if(n){e.splice(i--,1);var d=r();void 0!==d&&(t=d)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[a,r,o]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var f={};t=t||[null,a({}),a([]),a(a)];for(var n=2&r&&e;"object"==typeof n&&!~t.indexOf(n);n=a(n))Object.getOwnPropertyNames(n).forEach((t=>f[t]=()=>e[t]));return f.default=()=>e,c.d(o,f),o},c.d=(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,a)=>(c.f[a](e,t),t)),[])),c.u=e=>"assets/js/"+({48:"a94703ab",61:"1f391b9e",73:"35965a1b",76:"70f87e9c",98:"a7bd4aaa",134:"393be207",167:"227ef132",235:"a7456010",238:"af211750",308:"4edc808e",323:"f83e52b1",368:"75d25e98",392:"5005a35b",401:"17896441",513:"3397b6fb",583:"1df93b7f",585:"fc95af6b",647:"5e95c892",661:"873e1253",695:"common",707:"f025a833",742:"aba21aa0",767:"3dac3743",817:"1c214fcb",894:"cc540f51",927:"8c0d68a1",936:"af42f3a2",950:"58350ccd"}[e]||e)+"."+{48:"da3734aa",61:"22315c85",73:"fe2d0095",76:"f4e43d2e",98:"44cb8438",134:"d68fed18",152:"2506888c",167:"727029ef",235:"66942374",237:"8cd3a3ee",238:"dc251cbd",308:"4ae48149",323:"25570779",368:"0734c6ab",392:"05513281",401:"8ac576ef",408:"9c213ee4",513:"ba93d9e5",583:"11eff357",585:"9241f6d8",647:"0254f0fc",661:"dabc6fc0",695:"fd6ef5f3",707:"cdfbdcb7",742:"7cacba1c",767:"2698fe33",817:"1ed4af9a",894:"f526bf01",927:"ed97661e",936:"5f6a0d2d",950:"4e0f6888"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="dif-hackathon-2024-b:",c.l=(e,t,a,f)=>{if(r[e])r[e].push(t);else{var n,b;if(void 0!==a)for(var d=document.getElementsByTagName("script"),i=0;i<d.length;i++){var u=d[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+a){n=u;break}}n||(b=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,c.nc&&n.setAttribute("nonce",c.nc),n.setAttribute("data-webpack",o+a),n.src=e),r[e]=[t];var l=(t,a)=>{n.onerror=n.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(a))),t)return t(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),b&&document.head.appendChild(n)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/hackathon-2024/",c.gca=function(e){return e={17896441:"401",a94703ab:"48","1f391b9e":"61","35965a1b":"73","70f87e9c":"76",a7bd4aaa:"98","393be207":"134","227ef132":"167",a7456010:"235",af211750:"238","4edc808e":"308",f83e52b1:"323","75d25e98":"368","5005a35b":"392","3397b6fb":"513","1df93b7f":"583",fc95af6b:"585","5e95c892":"647","873e1253":"661",common:"695",f025a833:"707",aba21aa0:"742","3dac3743":"767","1c214fcb":"817",cc540f51:"894","8c0d68a1":"927",af42f3a2:"936","58350ccd":"950"}[e]||e,c.p+c.u(e)},(()=>{var e={354:0,869:0};c.f.j=(t,a)=>{var r=c.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var o=new Promise(((a,o)=>r=e[t]=[a,o]));a.push(r[2]=o);var f=c.p+c.u(t),n=new Error;c.l(f,(a=>{if(c.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),f=a&&a.target&&a.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+f+")",n.name="ChunkLoadError",n.type=o,n.request=f,r[1](n)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,a)=>{var r,o,f=a[0],n=a[1],b=a[2],d=0;if(f.some((t=>0!==e[t]))){for(r in n)c.o(n,r)&&(c.m[r]=n[r]);if(b)var i=b(c)}for(t&&t(a);d<f.length;d++)o=f[d],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(i)},a=self.webpackChunkdif_hackathon_2024_b=self.webpackChunkdif_hackathon_2024_b||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})()})();