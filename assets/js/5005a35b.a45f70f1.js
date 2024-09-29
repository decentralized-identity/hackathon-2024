"use strict";(self.webpackChunkdif_hackathon_2024_b=self.webpackChunkdif_hackathon_2024_b||[]).push([[392],{8865:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var i=n(4848),o=n(8453),t=n(8302),r=n(5065);const d={},l="TBD's Challenge: Known Customer Credentials",c={id:"sponsors/tbd",title:"TBD's Challenge: Known Customer Credentials",description:"{sponsors",source:"@site/docs/sponsors/tbd.mdx",sourceDirName:"sponsors",slug:"/sponsors/tbd",permalink:"/docs/sponsors/tbd",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"PSE's Challenge: ZKPs in SSI",permalink:"/docs/sponsors/pse"},next:{title:"Truvity's Challenge: Enable Miko's Journey",permalink:"/docs/sponsors/truvity"}},a={},h=[{value:"Overview",id:"overview",level:3},{value:"Challenge",id:"challenge",level:3},{value:"Submit",id:"submit",level:3},{value:"Prizes",id:"prizes",level:3},{value:"Tooling and resources",id:"tooling-and-resources",level:3},{value:"Contact Us",id:"contact-us",level:3}];function p(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"tbds-challenge-known-customer-credentials",children:"TBD's Challenge: Known Customer Credentials"})}),"\n",(0,i.jsx)("div",{className:t.A.sponsorsGrid,children:r.A.filter((e=>"tbd"==e.key)).map((e=>(0,i.jsx)(s.img,{src:e.logo})))}),"\n",(0,i.jsx)(s.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://developer.tbd.website/docs/tbdex/",children:"tbDEX"})," is an open messaging protocol that enables liquidity seekers to connect with liquidity providers. This means that as a liquidity provider, your business can be the backend supplier in several payment applications."]}),"\n",(0,i.jsxs)(s.p,{children:["Performing KYC on repeat customers every time they attempt to transact with you from a different payment app would be a pain. To avoid this, you will use the",(0,i.jsx)(s.a,{href:"https://developer.tbd.website/docs/web5/",children:" Web5 SDK"})," to issue a",(0,i.jsx)(s.a,{href:"https://github.com/TBD54566975/known-customer-credential",children:" Known Customer Credential"})," (KCC) to a customer, Alice, who you have already completed KYC on. You will store the JWT representing the KCC in Alice\u2019s ",(0,i.jsx)(s.a,{href:"https://developer.tbd.website/docs/web5/decentralized-web-nodes/what-are-dwns",children:"Decentralized Web Node"})," so that she can present it to your business from any payment app."]}),"\n",(0,i.jsx)(s.h3,{id:"challenge",children:"Challenge"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Create a Decentralized Identifier (DID) and DWN to use as the Issuer.","\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Bonus: Use the DIF community DWN instance hosted by Google Cloud."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Issue Alice a KCC that includes ",(0,i.jsx)(s.code,{children:"evidence"}),". Note that for this challenge, you do not need to implement an actual identity verification flow."]}),"\n",(0,i.jsxs)(s.li,{children:["Install the ",(0,i.jsx)(s.a,{href:"https://vc-to-dwn.tbddev.org/vc-protocol",children:"VC Protocol"})," onto your DWN so that you can communicate with Alice\u2019s DWN."]}),"\n",(0,i.jsxs)(s.li,{children:["Obtain permission to write to Alice\u2019s DWN by sending a GET request to ",(0,i.jsx)(s.a,{href:"https://vc-to-dwn.tbddev.org/authorize?issuerDid=$%7BissuerDidUri%7D",children:"https://vc-to-dwn.tbddev.org/authorize?issuerDid=${issuerDidUri}"})]}),"\n",(0,i.jsx)(s.li,{children:"Store the VC JWT of the KCC as a private record in Alice\u2019s DWN."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"submit",children:"Submit"}),"\n",(0,i.jsx)(s.p,{children:"DWN Record ID of the KCC"}),"\n",(0,i.jsx)(s.h3,{id:"prizes",children:"Prizes"}),"\n",(0,i.jsx)(s.p,{children:"Coming soon"}),"\n",(0,i.jsx)(s.h3,{id:"tooling-and-resources",children:"Tooling and resources"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Alice\u2019s DID: ",(0,i.jsxs)("code",{children:["did:dht",":rr1w5z9hdjtt76e6zmqmyyxc5cfnwjype6prz45m6z1qsbm8yjao"]})]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.npmjs.com/package/@web5/credentials",children:"web5/credentials SDK"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.npmjs.com/package/@web5/api",children:"web5/api SDK"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://developer.tbd.website/docs/web5/decentralized-web-nodes/web5-connect",children:"How to create a DID and DWN with Web5.connect()"})}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://developer.tbd.website/docs/web5/quickstart#2-access-bearer-did",children:"Obtain Bearer DID"})," - required to sign KCC"]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://vc.schemas.host/kcc.schema.json",children:"Known Customer Credential Schema"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://developer.tbd.website/docs/web5/verifiable-credentials/vc-issuance",children:"How to issue a VC with Web5"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/TBD54566975/tbd-examples/tree/main/javascript/kcc-issuance-snippet#readme",children:"Example of issuing a KCC with Web5"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/TBD54566975/tbd-examples/tree/main/javascript/kcc-issuance-snippet#output-vc-json",children:"Example of issued KCC"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://developer.tbd.website/docs/web5/decentralized-web-nodes/protocols#installing-a-protocol",children:"How to install a DWN Protocol"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://developer.tbd.website/docs/web5/verifiable-credentials/vcs-in-dwn",children:"How to store a VC in a DWN"})}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"contact-us",children:"Contact Us"}),"\n",(0,i.jsxs)(s.p,{children:["If you have any questions or need any help, please reach out to us in our",(0,i.jsx)(s.a,{href:"https://discord.com/channels/937858703112155166/1272378659730100245",children:" #kcc-hackathon"})," channel on Discord"]})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},5065:(e,s,n)=>{n.d(s,{A:()=>i});const i=[{id:1,key:"pinata",name:"Pinata",description:"Leading provider of innovative solutions.",logo:"/img/sponsors/pinata.png",link:"/docs/sponsors/pinata"},{id:2,key:"crossmint",name:"Crossmint",description:"Committed to empowering developers worldwide.",logo:"/img/sponsors/crossmint.png",link:"/docs/sponsors/crossmint"},{id:3,key:"vidos",name:"Vidos",description:"Committed to empowering developers worldwide.",logo:"/img/sponsors/vidos.png",link:"/docs/sponsors/vidos"},{id:4,key:"truvity",name:"Truvity",description:"Committed to empowering developers worldwide.",logo:"/img/sponsors/truvity.png",link:"/docs/sponsors/truvity"},{id:5,key:"pse",name:"Privacy & Scaling Explorations",description:"Committed to empowering developers worldwide.",logo:"/img/sponsors/PSE.png",link:"/docs/sponsors/pse"},{id:6,key:"tbd",name:"TBD",description:"Committed to empowering developers worldwide.",logo:"/img/sponsors/tbd.png",link:"/docs/sponsors/tbd"}]},8302:(e,s,n)=>{n.d(s,{A:()=>i});const i={banner:"banner_vewK",sponsorsSection:"sponsorsSection_NOlS",sponsorsGrid:"sponsorsGrid_lHDV"}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>d});var i=n(6540);const o={},t=i.createContext(o);function r(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);