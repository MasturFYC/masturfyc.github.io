import{i as pe,h as me,j as F,k as he,l as Y,m as fe,s as ge,p as se,n as H,q as Z}from"../chunks/scheduler.7dbf7838.js";import{p as Q,t as U,b as W,d as V,S as _e,i as ke,g as y,s as O,y as ye,h as v,f,c as G,j as P,x as ve,k as i,z as d,a as z,C as be,e as x,m as K,n as B,l as N,B as ie,o as J,D as ce,E as ue}from"../chunks/index.12fda089.js";function ee(t,e){const l=e.token={};function a(r,n,o,c){if(e.token!==l)return;e.resolved=c;let g=e.ctx;o!==void 0&&(g=g.slice(),g[o]=c);const p=r&&(e.current=r)(g);let s=!1;e.block&&(e.blocks?e.blocks.forEach((m,_)=>{_!==n&&m&&(Q(),U(m,1,1,()=>{e.blocks[_]===m&&(e.blocks[_]=null)}),W())}):e.block.d(1),p.c(),V(p,1),p.m(e.mount(),e.anchor),s=!0),e.block=p,e.blocks&&(e.blocks[n]=p),s&&he()}if(pe(t)){const r=me();if(t.then(n=>{F(r),a(e.then,1,e.value,n),F(null)},n=>{if(F(r),a(e.catch,2,e.error,n),F(null),!e.hasCatch)throw n}),e.current!==e.pending)return a(e.pending,0),!0}else{if(e.current!==e.then)return a(e.then,1,e.value,t),!0;e.resolved=t}}function Me(t,e,l){const a=e.slice(),{resolved:r}=t;t.current===t.then&&(a[t.value]=r),t.current===t.catch&&(a[t.error]=r),t.block.p(a,l)}function te(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function de(t){const e=t-1;return e*e*e+1}function Ee(t,{delay:e=0,duration:l=400,easing:a=de,start:r=0,opacity:n=0}={}){const o=getComputedStyle(t),c=+o.opacity,g=o.transform==="none"?"":o.transform,p=1-r,s=c*(1-n);return{delay:e,duration:l,easing:a,css:(m,_)=>`
			transform: ${g} scale(${1-p*_});
			opacity: ${c-s*_}
		`}}function je({fallback:t,...e}){const l=new Map,a=new Map;function r(o,c,g){const{delay:p=0,duration:s=w=>Math.sqrt(w)*30,easing:m=de}=Y(Y({},e),g),_=o.getBoundingClientRect(),D=c.getBoundingClientRect(),S=_.left-D.left,T=_.top-D.top,A=_.width/D.width,I=_.height/D.height,q=Math.sqrt(S*S+T*T),C=getComputedStyle(c),M=C.transform==="none"?"":C.transform,R=+C.opacity;return{delay:p,duration:fe(s)?s(q):s,easing:m,css:(w,E)=>`
				opacity: ${w*R};
				transform-origin: top left;
				transform: ${M} translate(${E*S}px,${E*T}px) scale(${w+(1-w)*A}, ${w+(1-w)*I});
			`}}function n(o,c,g){return(p,s)=>(o.set(s.key,p),()=>{if(c.has(s.key)){const m=c.get(s.key);return c.delete(s.key),r(m,p,s)}return o.delete(s.key),t&&t(p,s,g)})}return[n(a,l,!1),n(l,a,!0)]}const ae=[{id:1,name:"H. Mohamad Kaya Nataprawira",period:{from:1971,to:1982},url:"https://sapulidi.site/images/dprd/kaya-nata-prawira.jpg",color:"#14121a"},{id:2,name:"H. Adang Suryana",period:{from:1982,to:1985},url:"https://sapulidi.site/images/dprd/adang-suryana.jpg",color:"#41929b"},{id:3,name:"H. Maksudi",period:{from:1987,to:1992},url:"https://sapulidi.site/images/dprd/maksudi.jpg",color:"#401c43"},{id:4,name:"H. Tarlan Effendi",period:{from:1992,to:1997},url:"https://sapulidi.site/images/dprd/tarlan.jpg",color:"#115a98"},{id:5,name:"H. Moeljono Marsaid",period:{from:1977,to:1999},url:"https://sapulidi.site/images/dprd/muljono-marsaid.jpg",color:"#25659b"},{id:6,name:"Iwan Hendrawan",period:{from:1999,to:2004},url:"https://sapulidi.site/images/dprd/iwan-hendrawan.jpg",color:"#1b1860"},{id:7,name:"H. M. Hasyim Djunaedi, S.Ag., MBA",period:{from:2004,to:2009},url:"https://sapulidi.site/images/dprd/hasyim%20junaedi.jpg",color:"#438f9c"},{id:8,name:"Drs. H. A. Rozaq Muslim, M.Si",period:{from:2009,to:2014},url:"https://sapulidi.site/images/dprd/rozaq-mulim.jpg",color:"#43918b"},{id:9,name:"H. Taufik Hidayat, S.H., M.Si",period:{from:2014,to:2019},url:"https://sapulidi.site/images/dprd/taufik-hidayat.jpg",color:"#9bd5c2"},{id:10,name:"H. Syaefudin, S.H.",period:{from:2019,to:2024},url:"https://sapulidi.site/images/dprd/syaefudin.jpg",color:"#361519"},{id:11,name:"Mastur",period:{from:2024,to:2029},url:"https://sapulidi.site/images/dprd/mastur.jpg",color:"#073e5c"}];function re(t,e,l){const a=t.slice();return a[8]=e[l],a}function ne(t){let e,l=(t[1]===t[8]?"...":t[8].id)+"",a,r,n,o,c,g;function p(){return t[5](t[8])}return{c(){e=y("button"),a=K(l),this.h()},l(s){e=v(s,"BUTTON",{style:!0,class:!0});var m=P(e);a=B(m,l),m.forEach(f),this.h()},h(){N(e,"background-image","url('"+t[8].url+"')"),N(e,"background-size","cover"),N(e,"background-repeat","no-repeat"),N(e,"background-blend-mode","multiply"),N(e,"background-color",t[8].color+"cc"),i(e,"class","btn svelte-1ta0d5i")},m(s,m){z(s,e,m),d(e,a),o=!0,c||(g=ie(e,"click",p),c=!0)},p(s,m){t=s,(!o||m&2)&&l!==(l=(t[1]===t[8]?"...":t[8].id)+"")&&J(a,l)},i(s){o||(s&&se(()=>{o&&(n&&n.end(1),r=ce(e,t[3],{key:t[8].id}),r.start())}),o=!0)},o(s){r&&r.invalidate(),s&&(n=ue(e,t[2],{key:t[8].id})),o=!1},d(s){s&&f(e),s&&n&&n.end(),c=!1,g()}}}function oe(t){let e,l,a=t[0]!==t[8]&&ne(t);return{c(){e=y("div"),a&&a.c(),l=O(),this.h()},l(r){e=v(r,"DIV",{class:!0});var n=P(e);a&&a.l(n),l=G(n),n.forEach(f),this.h()},h(){i(e,"class","square")},m(r,n){z(r,e,n),a&&a.m(e,null),d(e,l)},p(r,n){r[0]!==r[8]?a?(a.p(r,n),n&1&&V(a,1)):(a=ne(r),a.c(),V(a,1),a.m(e,l)):a&&(Q(),U(a,1,1,()=>{a=null}),W())},d(r){r&&f(e),a&&a.d()}}}function le(t){let e,l,a,r={ctx:t,current:null,token:null,hasCatch:!1,pending:De,then:Te,catch:Ae,value:7,blocks:[,,,]};return ee(l=t[0],r),{c(){e=x(),r.block.c()},l(n){e=x(),r.block.l(n)},m(n,o){z(n,e,o),r.block.m(n,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,a=!0},p(n,o){t=n,r.ctx=t,o&1&&l!==(l=t[0])&&ee(l,r)||Me(r,t,o)},i(n){a||(V(r.block),a=!0)},o(n){for(let o=0;o<3;o+=1){const c=r.blocks[o];U(c)}a=!1},d(n){n&&f(e),r.block.d(n),r.token=null,r=null}}}function Ae(t){return{c:H,l:H,m:H,p:H,i:H,o:H,d:H}}function Te(t){let e,l,a,r,n,o,c,g=t[7].name+"",p,s,m,_=t[7].period.from+"",D,S,T=t[7].period.to+"",A,I,q,C,M,R,w;return{c(){e=y("div"),l=y("img"),n=O(),o=y("p"),c=y("a"),p=K(g),m=K(`
            (`),D=K(_),S=K(" - "),A=K(T),I=K(")"),this.h()},l(E){e=v(E,"DIV",{class:!0});var u=P(e);l=v(u,"IMG",{alt:!0,src:!0,class:!0}),n=G(u),o=v(u,"P",{class:!0});var h=P(o);c=v(h,"A",{target:!0,rel:!0,href:!0,class:!0});var k=P(c);p=B(k,g),k.forEach(f),m=B(h,`
            (`),D=B(h,_),S=B(h," - "),A=B(h,T),I=B(h,")"),h.forEach(f),u.forEach(f),this.h()},h(){i(l,"alt",a=t[7].name),Z(l.src,r=t[7].url)||i(l,"src",r),i(l,"class","svelte-1ta0d5i"),i(c,"target","_blank"),i(c,"rel","noreferrer"),i(c,"href",s=t[7].url),i(c,"class","svelte-1ta0d5i"),i(o,"class","credit svelte-1ta0d5i"),i(e,"class","photo svelte-1ta0d5i")},m(E,u){z(E,e,u),d(e,l),d(e,n),d(e,o),d(o,c),d(c,p),d(o,m),d(o,D),d(o,S),d(o,A),d(o,I),M=!0,R||(w=ie(l,"click",t[6]),R=!0)},p(E,u){t=E,(!M||u&1&&a!==(a=t[7].name))&&i(l,"alt",a),(!M||u&1&&!Z(l.src,r=t[7].url))&&i(l,"src",r),(!M||u&1)&&g!==(g=t[7].name+"")&&J(p,g),(!M||u&1&&s!==(s=t[7].url))&&i(c,"href",s),(!M||u&1)&&_!==(_=t[7].period.from+"")&&J(D,_),(!M||u&1)&&T!==(T=t[7].period.to+"")&&J(A,T)},i(E){M||(se(()=>{M&&(C&&C.end(1),q=ce(e,t[3],{key:t[7].id}),q.start())}),M=!0)},o(E){q&&q.invalidate(),C=ue(e,t[2],{key:t[7].id}),M=!1},d(E){E&&f(e),E&&C&&C.end(),R=!1,w()}}}function De(t){return{c:H,l:H,m:H,p:H,i:H,o:H,d:H}}function we(t){let e,l,a,r,n,o,c,g,p,s,m,_,D,S,T,A,I,q="Ketua DPRD Indramayu dari masa ke masa",C,M,R,w,E=te(ae),u=[];for(let k=0;k<E.length;k+=1)u[k]=oe(re(t,E,k));let h=t[0]&&le(t);return{c(){e=y("meta"),l=y("meta"),a=y("meta"),r=y("meta"),n=y("meta"),o=y("meta"),c=y("meta"),g=y("meta"),p=y("meta"),s=y("meta"),m=y("meta"),_=y("meta"),D=y("meta"),S=O(),T=y("div"),A=y("div"),I=y("h1"),I.textContent=q,C=O(),M=y("div");for(let k=0;k<u.length;k+=1)u[k].c();R=O(),h&&h.c(),this.h()},l(k){const b=ye("svelte-1c2k7j4",document.head);e=v(b,"META",{name:!0,content:!0}),l=v(b,"META",{property:!0,content:!0}),a=v(b,"META",{property:!0,content:!0}),r=v(b,"META",{property:!0,content:!0}),n=v(b,"META",{property:!0,content:!0}),o=v(b,"META",{property:!0,content:!0}),c=v(b,"META",{property:!0,content:!0}),g=v(b,"META",{property:!0,content:!0}),p=v(b,"META",{property:!0,content:!0}),s=v(b,"META",{property:!0,content:!0}),m=v(b,"META",{property:!0,content:!0}),_=v(b,"META",{property:!0,content:!0}),D=v(b,"META",{property:!0,content:!0}),b.forEach(f),S=G(k),T=v(k,"DIV",{class:!0});var j=P(T);A=v(j,"DIV",{class:!0});var $=P(A);I=v($,"H1",{class:!0,"data-svelte-h":!0}),ve(I)!=="svelte-1q36xom"&&(I.textContent=q),C=G($),M=v($,"DIV",{class:!0});var X=P(M);for(let L=0;L<u.length;L+=1)u[L].l(X);X.forEach(f),R=G($),h&&h.l($),$.forEach(f),j.forEach(f),this.h()},h(){document.title="Ketua DPRD Indramayu dari masa ke masa",i(e,"name","description"),i(e,"content","Ketua DPRD Indramayu"),i(l,"property","fb:app_id"),i(l,"content","185084348558317"),i(a,"property","og:type"),i(a,"content","article"),i(r,"property","og:url"),i(r,"content","https://sapulidi.site/ketua-dprd"),i(n,"property","og:title"),i(n,"content","Ketua DPRD Indramayu"),i(o,"property","og:image"),i(o,"content","https://masturfyc.github.io/taufik-hidayat.jpg"),i(c,"property","og:image:url"),i(c,"content","https://masturfyc.github.io/taufik-hidayat.jpg"),i(g,"property","og:image:secure_url"),i(g,"content","https://masturfyc.github.io/taufik-hidayat.jpg"),i(p,"property","og:image:secure"),i(p,"content","https://masturfyc.github.io/taufik-hidayat.jpg"),i(s,"property","og:image:type"),i(s,"content","image/jpeg"),i(m,"property","og:image:width"),i(m,"content","445"),i(_,"property","og:image:height"),i(_,"content","563"),i(D,"property","og:description"),i(D,"content","Ketua DPRD Indramayu dari masa ke masa"),i(I,"class","svelte-1ta0d5i"),i(M,"class","grid svelte-1ta0d5i"),i(A,"class","phone svelte-1ta0d5i"),i(T,"class","container svelte-1ta0d5i")},m(k,b){d(document.head,e),d(document.head,l),d(document.head,a),d(document.head,r),d(document.head,n),d(document.head,o),d(document.head,c),d(document.head,g),d(document.head,p),d(document.head,s),d(document.head,m),d(document.head,_),d(document.head,D),z(k,S,b),z(k,T,b),d(T,A),d(A,I),d(A,C),d(A,M);for(let j=0;j<u.length;j+=1)u[j]&&u[j].m(M,null);d(A,R),h&&h.m(A,null),w=!0},p(k,[b]){if(b&19){E=te(ae);let j;for(j=0;j<E.length;j+=1){const $=re(k,E,j);u[j]?u[j].p($,b):(u[j]=oe($),u[j].c(),u[j].m(M,null))}for(;j<u.length;j+=1)u[j].d(1);u.length=E.length}k[0]?h?(h.p(k,b),b&1&&V(h,1)):(h=le(k),h.c(),V(h,1),h.m(A,null)):h&&(Q(),U(h,1,1,()=>{h=null}),W())},i(k){w||(V(h),w=!0)},o(k){U(h),w=!1},d(k){k&&(f(S),f(T)),f(e),f(l),f(a),f(r),f(n),f(o),f(c),f(g),f(p),f(s),f(m),f(_),f(D),be(u,k),h&&h.d()}}}function He(t,e,l){const[a,r]=je({duration:200,fallback:Ee});let n=null,o=null;const c=s=>{const m=setTimeout(()=>l(1,o=s),100),_=new Image;_.onload=()=>{l(0,n=s),clearTimeout(m),l(1,o=null)},_.src=`${s.url}`};return[n,o,a,r,c,s=>c(s),()=>l(0,n=null)]}class Se extends _e{constructor(e){super(),ke(this,e,He,we,ge,{})}}export{Se as component};