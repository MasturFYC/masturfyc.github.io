import{s as dt,n as lt,r as ut}from"../chunks/scheduler.7dbf7838.js";import{S as ht,i as ft,g as i,s as E,h as d,j as x,x as F,c as w,f as O,k as r,a as it,z as a,A as st,B as W,F as _t,m as V,n as Y,o as X}from"../chunks/index.81cd449f.js";import{e as nt,u as vt,d as pt}from"../chunks/each.d8de70c7.js";import{c as ot}from"../chunks/browser.54b85836.js";function rt(f,t,e){const u=f.slice();return u[13]=t[e],u}function ct(f,t){let e,u,L=t[13].id+"",p,g,m,B=t[13].name1+"",U,T,P,y=t[13].name2+"",I,H,b,s=t[13].job+"",c,o,_,j=t[13].address+"",v,D,N,k=t[13].city+"",M,A;return{key:f,first:null,c(){e=i("tr"),u=i("td"),p=V(L),g=E(),m=i("td"),U=V(B),T=E(),P=i("td"),I=V(y),H=E(),b=i("td"),c=V(s),o=E(),_=i("td"),v=V(j),D=E(),N=i("td"),M=V(k),A=E(),this.h()},l(S){e=d(S,"TR",{});var n=x(e);u=d(n,"TD",{class:!0});var q=x(u);p=Y(q,L),q.forEach(O),g=w(n),m=d(n,"TD",{class:!0});var J=x(m);U=Y(J,B),J.forEach(O),T=w(n),P=d(n,"TD",{class:!0});var C=x(P);I=Y(C,y),C.forEach(O),H=w(n),b=d(n,"TD",{class:!0});var G=x(b);c=Y(G,s),G.forEach(O),o=w(n),_=d(n,"TD",{class:!0});var z=x(_);v=Y(z,j),z.forEach(O),D=w(n),N=d(n,"TD",{class:!0});var K=x(N);M=Y(K,k),K.forEach(O),A=w(n),n.forEach(O),this.h()},h(){r(u,"class","svelte-1u69eat"),r(m,"class","svelte-1u69eat"),r(P,"class","svelte-1u69eat"),r(b,"class","svelte-1u69eat"),r(_,"class","svelte-1u69eat"),r(N,"class","svelte-1u69eat"),this.first=e},m(S,n){it(S,e,n),a(e,u),a(u,p),a(e,g),a(e,m),a(m,U),a(e,T),a(e,P),a(P,I),a(e,H),a(e,b),a(b,c),a(e,o),a(e,_),a(_,v),a(e,D),a(e,N),a(N,M),a(e,A)},p(S,n){t=S,n&1&&L!==(L=t[13].id+"")&&X(p,L),n&1&&B!==(B=t[13].name1+"")&&X(U,B),n&1&&y!==(y=t[13].name2+"")&&X(I,y),n&1&&s!==(s=t[13].job+"")&&X(c,s),n&1&&j!==(j=t[13].address+"")&&X(v,j),n&1&&k!==(k=t[13].city+"")&&X(M,k)},d(S){S&&O(e)}}}function mt(f){let t,e,u="Label 103",L,p,g,m,B="Data: (format data: name1, name2, job, address, city)",U,T,P,y,I="Parse input to JSON",H,b,s="Load from CSV/JSON file",c,o,_="Save data as JSON",j,v,D="Download Label",N,k,M,A,S,n='<tr><th class="svelte-1u69eat">ID</th> <th class="svelte-1u69eat">NAME1</th> <th class="svelte-1u69eat">NAME2</th> <th class="svelte-1u69eat">JOB</th> <th class="svelte-1u69eat">ADDRESS</th> <th class="svelte-1u69eat">CITY</th></tr>',q,J,C=[],G=new Map,z,K,Q=nt(f[0]);const et=h=>h[13].id;for(let h=0;h<Q.length;h+=1){let l=rt(f,Q,h),R=et(l);G.set(R,C[h]=ct(R,l))}return{c(){t=i("section"),e=i("h2"),e.textContent=u,L=E(),p=i("div"),g=i("label"),m=i("span"),m.textContent=B,U=E(),T=i("textarea"),P=E(),y=i("button"),y.textContent=I,H=E(),b=i("button"),b.textContent=s,c=E(),o=i("button"),o.textContent=_,j=E(),v=i("button"),v.textContent=D,N=E(),k=i("input"),M=E(),A=i("table"),S=i("thead"),S.innerHTML=n,q=E(),J=i("tbody");for(let h=0;h<C.length;h+=1)C[h].c();this.h()},l(h){t=d(h,"SECTION",{class:!0});var l=x(t);e=d(l,"H2",{"data-svelte-h":!0}),F(e)!=="svelte-1ypu7wm"&&(e.textContent=u),L=w(l),p=d(l,"DIV",{class:!0});var R=x(p);g=d(R,"LABEL",{class:!0});var Z=x(g);m=d(Z,"SPAN",{class:!0,"data-svelte-h":!0}),F(m)!=="svelte-1pv1fq9"&&(m.textContent=B),U=w(Z),T=d(Z,"TEXTAREA",{rows:!0,class:!0}),x(T).forEach(O),Z.forEach(O),R.forEach(O),P=w(l),y=d(l,"BUTTON",{class:!0,"data-svelte-h":!0}),F(y)!=="svelte-j2u2wp"&&(y.textContent=I),H=w(l),b=d(l,"BUTTON",{class:!0,"data-svelte-h":!0}),F(b)!=="svelte-61nze1"&&(b.textContent=s),c=w(l),o=d(l,"BUTTON",{class:!0,"data-svelte-h":!0}),F(o)!=="svelte-1dovyoa"&&(o.textContent=_),j=w(l),v=d(l,"BUTTON",{class:!0,"data-svelte-h":!0}),F(v)!=="svelte-r098iw"&&(v.textContent=D),N=w(l),k=d(l,"INPUT",{id:!0,type:!0,style:!0,class:!0,accept:!0}),M=w(l),A=d(l,"TABLE",{class:!0});var $=x(A);S=d($,"THEAD",{"data-svelte-h":!0}),F(S)!=="svelte-qcekwl"&&(S.innerHTML=n),q=w($),J=d($,"TBODY",{});var at=x(J);for(let tt=0;tt<C.length;tt+=1)C[tt].l(at);at.forEach(O),$.forEach(O),l.forEach(O),this.h()},h(){r(m,"class","svelte-1u69eat"),r(T,"rows","10"),r(T,"class","svelte-1u69eat"),r(g,"class","svelte-1u69eat"),r(p,"class","div-control svelte-1u69eat"),r(y,"class","button is-success mb-4"),r(b,"class","button is-info mb-4 ml-2"),r(o,"class","button is-warning mb-4 ml-2"),r(v,"class","button is-warning mb-4 ml-2"),r(k,"id","input-file"),r(k,"type","file"),r(k,"style","display: none"),r(k,"class","button is-success mb-4 mt-2"),r(k,"accept","text/csv,application/json"),r(A,"class","svelte-1u69eat"),r(t,"class","section")},m(h,l){it(h,t,l),a(t,e),a(t,L),a(t,p),a(p,g),a(g,m),a(g,U),a(g,T),st(T,f[1]),a(t,P),a(t,y),a(t,H),a(t,b),a(t,c),a(t,o),a(t,j),a(t,v),a(t,N),a(t,k),a(t,M),a(t,A),a(A,S),a(A,q),a(A,J);for(let R=0;R<C.length;R+=1)C[R]&&C[R].m(J,null);z||(K=[W(T,"input",f[5]),W(y,"click",f[6]),W(b,"click",f[7]),W(o,"click",f[8]),W(v,"click",f[9]),W(k,"change",_t(f[10]))],z=!0)},p(h,[l]){l&2&&st(T,h[1]),l&1&&(Q=nt(h[0]),C=vt(C,l,et,1,h,Q,G,J,pt,ct,null,rt))},i:lt,o:lt,d(h){h&&O(t);for(let l=0;l<C.length;l+=1)C[l].d();z=!1,ut(K)}}}const bt="id, name1, name2, job, address, city";function gt(f){const t=f.split(".");let e="";return t.length>1&&(e=t[t.length-1]),e}function Tt(f){var t="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(f,null,3)),e=document.createElement("a");e.setAttribute("href",t),e.setAttribute("download","data-undangan.json"),document.body.appendChild(e),e.click(),e.remove()}function yt(f,t,e){let u=[];const L={col:3,row:4,labelWidth:64,labelHeight:32,pageWidth:137,pageHeight:200,horizontalPitch:65,verticalPitch:33};let p=`1,Udin,Fitri,,Ds. Plumbon,Indramayu
2,"Wardana, S.Pd",Uung,Pedagang,Blok Bojong RT. 15/06, Ds. Plumbon`;function g(s){ot().fromString(bt+`
`+s).then(c=>{e(0,u=c)})}const m=s=>{const c=[];return s.forEach(o=>{c.push(Object.values(o).map(_=>typeof _=="string"&&_.indexOf(",")>0?'"'+_+'"':_).join(","))}),c.join(`
`)};async function B(s){const c=s.currentTarget;if(c&&c.files&&c.files[0]){const o=c.files[0],_=new FileReader;gt(o.name)==="csv"?_.onload=async j=>{var D;const v=((D=j.target)==null?void 0:D.result)??"";await ot().fromString(v).then(N=>{e(0,u=N),e(1,p=v.substring(v.indexOf(`
`)+1))})}:_.onload=async j=>{var D;const v=((D=j.target)==null?void 0:D.result)??"";e(0,u=await JSON.parse(v)),e(1,p=m(u))},_.readAsText(o,"utf-8")}}const U=async()=>{await fetch("https://malvamelva.com/api/v1/label103",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/pdf"},body:JSON.stringify({opt:{...L},data:u.map(s=>({...s,id:+s.id}))})}).then(s=>s.blob()).then(s=>{var c=window.URL.createObjectURL(s),o=document.createElement("a");o.href=c,o.download="label103.pdf",document.body.appendChild(o),o.click(),o.remove(),setTimeout(()=>window.URL.revokeObjectURL(c),1e3)})};function T(){p=this.value,e(1,p)}return[u,p,g,B,U,T,()=>g(p),()=>{const s=document.getElementById("input-file");s==null||s.click()},()=>Tt(u),()=>U(),s=>B(s)]}class Ot extends ht{constructor(t){super(),ft(this,t,yt,mt,dt,{})}}export{Ot as component};