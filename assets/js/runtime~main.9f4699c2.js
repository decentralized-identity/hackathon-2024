(()=>{"use strict";var e,a,t,r,o,f={},n={};function c(e){var a=n[e];if(void 0!==a)return a.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return f[e].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}c.m=f,c.c=n,e=[],c.O=(a,t,r,o)=>{if(!t){var f=1/0;for(b=0;b<e.length;b++){t=e[b][0],r=e[b][1],o=e[b][2];for(var n=!0,d=0;d<t.length;d++)(!1&o||f>=o)&&Object.keys(c.O).every((e=>c.O[e](t[d])))?t.splice(d--,1):(n=!1,o<f&&(f=o));if(n){e.splice(b--,1);var i=r();void 0!==i&&(a=i)}}return a}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[t,r,o]},c.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return c.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var f={};a=a||[null,t({}),t([]),t(t)];for(var n=2&r&&e;"object"==typeof n&&!~a.indexOf(n);n=t(n))Object.getOwnPropertyNames(n).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,c.d(o,f),o},c.d=(e,a)=>{for(var t in a)c.o(a,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((a,t)=>(c.f[t](e,a),a)),[])),c.u=e=>"assets/js/"+({48:"a94703ab",61:"1f391b9e",73:"35965a1b",76:"70f87e9c",98:"a7bd4aaa",134:"393be207",167:"227ef132",235:"a7456010",238:"af211750",308:"4edc808e",323:"f83e52b1",368:"75d25e98",392:"5005a35b",401:"17896441",513:"3397b6fb",583:"1df93b7f",585:"fc95af6b",647:"5e95c892",661:"873e1253",695:"common",707:"f025a833",742:"aba21aa0",767:"3dac3743",817:"1c214fcb",894:"cc540f51",927:"8c0d68a1",936:"af42f3a2",950:"58350ccd"}[e]||e)+"."+{48:"da3734aa",61:"22315c85",73:"81c6c815",76:"f99e3387",98:"44cb8438",134:"d68fed18",152:"2506888c",167:"6b385655",235:"66942374",237:"8cd3a3ee",238:"d9248579",308:"4ae48149",323:"c5d536ad",368:"0734c6ab",392:"5260fd1c",401:"8ac576ef",408:"9c213ee4",513:"ddba947f",583:"9966e1d5",585:"d9d0a27f",647:"0254f0fc",661:"1cb1dca4",695:"fd6ef5f3",707:"233133c5",742:"7cacba1c",767:"354c95b6",817:"1ed4af9a",894:"81d53881",927:"ed97661e",936:"20794637",950:"c8a1908e"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},o="dif-hackathon-2024-b:",c.l=(e,a,t,f)=>{if(r[e])r[e].push(a);else{var n,d;if(void 0!==t)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+t){n=u;break}}n||(d=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,c.nc&&n.setAttribute("nonce",c.nc),n.setAttribute("data-webpack",o+t),n.src=e),r[e]=[a];var l=(a,t)=>{n.onerror=n.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),d&&document.head.appendChild(n)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/hackathon-2024/",c.gca=function(e){return e={17896441:"401",a94703ab:"48","1f391b9e":"61","35965a1b":"73","70f87e9c":"76",a7bd4aaa:"98","393be207":"134","227ef132":"167",a7456010:"235",af211750:"238","4edc808e":"308",f83e52b1:"323","75d25e98":"368","5005a35b":"392","3397b6fb":"513","1df93b7f":"583",fc95af6b:"585","5e95c892":"647","873e1253":"661",common:"695",f025a833:"707",aba21aa0:"742","3dac3743":"767","1c214fcb":"817",cc540f51:"894","8c0d68a1":"927",af42f3a2:"936","58350ccd":"950"}[e]||e,c.p+c.u(e)},(()=>{var e={354:0,869:0};c.f.j=(a,t)=>{var r=c.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(354|869)$/.test(a))e[a]=0;else{var o=new Promise(((t,o)=>r=e[a]=[t,o]));t.push(r[2]=o);var f=c.p+c.u(a),n=new Error;c.l(f,(t=>{if(c.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),f=t&&t.target&&t.target.src;n.message="Loading chunk "+a+" failed.\n("+o+": "+f+")",n.name="ChunkLoadError",n.type=o,n.request=f,r[1](n)}}),"chunk-"+a,a)}},c.O.j=a=>0===e[a];var a=(a,t)=>{var r,o,f=t[0],n=t[1],d=t[2],i=0;if(f.some((a=>0!==e[a]))){for(r in n)c.o(n,r)&&(c.m[r]=n[r]);if(d)var b=d(c)}for(a&&a(t);i<f.length;i++)o=f[i],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(b)},t=self.webpackChunkdif_hackathon_2024_b=self.webpackChunkdif_hackathon_2024_b||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();