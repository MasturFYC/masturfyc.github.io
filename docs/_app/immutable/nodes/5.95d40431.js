import{s as ce,p as ue,R as fe,Q as Y,U as ve,o as _e,e as T,i as w,d as p,l as M,m as D,n as G,a as O,f as q,N as ke,c as L,g as C,h as U,j as V,P as g,K as J,J as we,X as ye}from"../chunks/scheduler.8f106bd9.js";import{S as me,i as de,f as pe,b as F,d as K,m as A,a as y,t as E,e as B,g as x,c as ee}from"../chunks/index.4fbda23c.js";import{e as z,u as he,o as $e}from"../chunks/each.c9d8bfb3.js";import{S as ge,O as be,i as te,Q as Ee,c as ne}from"../chunks/store.65de7e5c.js";import{u as Ie,B as se}from"../chunks/InitialFocus.183c7331.js";import{d as Z,i as le}from"../chunks/axios-base.dfe6f6b6.js";import{M as Me}from"../chunks/MemberBox.3177ba0f.js";import{M as De}from"../chunks/DeleteItem.22b3c4ee.js";function re(l,e,t){const n=l.slice();return n[8]=e[t],n}function Pe(l){let e=l[8].name+"",t;return{c(){t=M(e)},l(n){t=D(n,e)},m(n,o){w(n,t,o)},p(n,o){o&2&&e!==(e=n[8].name+"")&&G(t,e)},d(n){n&&p(t)}}}function ae(l,e){let t,n,o;return n=new be({props:{value:e[8],$$slots:{default:[Pe]},$$scope:{ctx:e}}}),{key:l,first:null,c(){t=T(),F(n.$$.fragment),this.h()},l(s){t=T(),K(n.$$.fragment,s),this.h()},h(){this.first=t},m(s,r){w(s,t,r),A(n,s,r),o=!0},p(s,r){e=s;const a={};r&2&&(a.value=e[8]),r&2050&&(a.$$scope={dirty:r,ctx:e}),n.$set(a)},i(s){o||(y(n.$$.fragment,s),o=!0)},o(s){E(n.$$.fragment,s),o=!1},d(s){s&&p(t),B(n,s)}}}function Se(l){let e=[],t=new Map,n,o,s=z(l[1]);const r=a=>a[8].id;for(let a=0;a<s.length;a+=1){let i=re(l,s,a),c=r(i);t.set(c,e[a]=ae(c,i))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();n=T()},l(a){for(let i=0;i<e.length;i+=1)e[i].l(a);n=T()},m(a,i){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(a,i);w(a,n,i),o=!0},p(a,i){i&2&&(s=z(a[1]),x(),e=he(e,i,r,1,a,s,t,n.parentNode,$e,ae,n,re),ee())},i(a){if(!o){for(let i=0;i<s.length;i+=1)y(e[i]);o=!0}},o(a){for(let i=0;i<e.length;i+=1)E(e[i]);o=!1},d(a){a&&p(n);for(let i=0;i<e.length;i+=1)e[i].d(a)}}}function Ve(l){let e,t,n;function o(r){l[4](r)}let s={title:"Row limit per page",key:l[2],"aria-label":"limit-control",class:"shaped-outlined",variant:"outlined",input$name:"category-control",$$slots:{default:[Se]},$$scope:{ctx:l}};return l[0]!==void 0&&(s.value=l[0]),e=new ge({props:s}),ue.push(()=>pe(e,"value",o)),{c(){F(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,a){A(e,r,a),n=!0},p(r,[a]){const i={};a&2050&&(i.$$scope={dirty:a,ctx:r}),!t&&a&1&&(t=!0,i.value=r[0],fe(()=>t=!1)),e.$set(i)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){E(e.$$.fragment,r),n=!1},d(r){B(e,r)}}}function qe(l,e,t){let n;Y(l,Z,m=>t(1,n=m));let{unitId:o=0}=e,s;const r=ve(),a=(m=void 0)=>{s&&r("search",{txt:s.id})},i=m=>m?`${m.id}`:"0",c=m=>{m>0&&t(0,s=n.filter(k=>k.id===m)[0])};_e(()=>c(o));function v(m){s=m,t(0,s)}return l.$$set=m=>{"unitId"in m&&t(3,o=m.unitId)},l.$$.update=()=>{l.$$.dirty&8&&c(o),l.$$.dirty&1&&a(s)},[s,n,i,o,v]}class Ce extends me{constructor(e){super(),de(this,e,qe,Ve,ce,{unitId:3})}}function Ne(l,e,t){const n=l.slice();return n[20]=e[t],n}function oe(l,e,t){const n=l.slice();return n[23]=e[t],n}function Qe(l){let e,t=[],n=new Map,o,s=z(l[19].data??[]);const r=a=>a[23].member_id;for(let a=0;a<s.length;a+=1){let i=oe(l,s,a),c=r(i);n.set(c,t[a]=ie(c,i))}return{c(){e=q("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=C(a,"DIV",{class:!0});var i=U(e);for(let c=0;c<t.length;c+=1)t[c].l(i);i.forEach(p),this.h()},h(){V(e,"class","arr-box svelte-be387d")},m(a,i){w(a,e,i);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);o=!0},p(a,i){i&524295&&(s=z(a[19].data??[]),x(),t=he(t,i,r,1,a,s,n,e,$e,ie,null,oe),ee())},i(a){if(!o){for(let i=0;i<s.length;i+=1)y(t[i]);o=!0}},o(a){for(let i=0;i<t.length;i+=1)E(t[i]);o=!1},d(a){a&&p(e);for(let i=0;i<t.length;i+=1)t[i].d()}}}function Ue(l){let e,t,n=l[6](l[19])+"",o;return{c(){e=q("div"),t=M("Error: "),o=M(n),this.h()},l(s){e=C(s,"DIV",{class:!0});var r=U(e);t=D(r,"Error: "),o=D(r,n),r.forEach(p),this.h()},h(){V(e,"class","svelte-be387d")},m(s,r){w(s,e,r),g(e,t),g(e,o)},p(s,r){r&524288&&n!==(n=s[6](s[19])+"")&&G(o,n)},i:J,o:J,d(s){s&&p(e)}}}function Fe(l){let e,t="Loading...";return{c(){e=q("div"),e.textContent=t,this.h()},l(n){e=C(n,"DIV",{class:!0,"data-svelte-h":!0}),we(e)!=="svelte-194gxkm"&&(e.textContent=t),this.h()},h(){V(e,"class","svelte-be387d")},m(n,o){w(n,e,o)},p:J,i:J,o:J,d(n){n&&p(e)}}}function ie(l,e){let t,n,o;return n=new Me({props:{member:e[23],txt:e[0],limit:e[2],page:e[1]}}),{key:l,first:null,c(){t=T(),F(n.$$.fragment),this.h()},l(s){t=T(),K(n.$$.fragment,s),this.h()},h(){this.first=t},m(s,r){w(s,t,r),A(n,s,r),o=!0},p(s,r){e=s;const a={};r&524288&&(a.member=e[23]),r&1&&(a.txt=e[0]),r&4&&(a.limit=e[2]),r&2&&(a.page=e[1]),n.$set(a)},i(s){o||(y(n.$$.fragment,s),o=!0)},o(s){E(n.$$.fragment,s),o=!1},d(s){s&&p(t),B(n,s)}}}function Ke(l){let e;return{c(){e=M(l[20])},l(t){e=D(t,l[20])},m(t,n){w(t,e,n)},p:J,d(t){t&&p(e)}}}function Ae(l){let e,t;return e=new be({props:{value:l[20],$$slots:{default:[Ke]},$$scope:{ctx:l}}}),{c(){F(e.$$.fragment)},l(n){K(e.$$.fragment,n)},m(n,o){A(e,n,o),t=!0},p(n,o){const s={};o&67108864&&(s.$$scope={dirty:o,ctx:n}),e.$set(s)},i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){B(e,n)}}}function Be(l){let e,t,n=z([3,5,10,20,25,50]),o=[];for(let s=0;s<6;s+=1)o[s]=Ae(Ne(l,n,s));return{c(){for(let s=0;s<6;s+=1)o[s].c();e=T()},l(s){for(let r=0;r<6;r+=1)o[r].l(s);e=T()},m(s,r){for(let a=0;a<6;a+=1)o[a]&&o[a].m(s,r);w(s,e,r),t=!0},p:J,i(s){if(!t){for(let r=0;r<6;r+=1)y(o[r]);t=!0}},o(s){o=o.filter(Boolean);for(let r=0;r<6;r+=1)E(o[r]);t=!1},d(s){s&&p(e),ye(o,s)}}}function Oe(l){let e;return{c(){e=M("≮ Previous")},l(t){e=D(t,"≮ Previous")},m(t,n){w(t,e,n)},d(t){t&&p(e)}}}function Le(l){let e;return{c(){e=M("Next ≯")},l(t){e=D(t,"Next ≯")},m(t,n){w(t,e,n)},d(t){t&&p(e)}}}function Re(l){let e,t,n=l[1]+1+"",o;return{c(){e=q("span"),t=M("Current Page: "),o=M(n),this.h()},l(s){e=C(s,"SPAN",{class:!0});var r=U(e);t=D(r,"Current Page: "),o=D(r,n),r.forEach(p),this.h()},h(){V(e,"class","svelte-be387d")},m(s,r){w(s,e,r),g(e,t),g(e,o)},p(s,r){r&2&&n!==(n=s[1]+1+"")&&G(o,n)},d(s){s&&p(e)}}}function je(l){let e;return{c(){e=M("Loading...")},l(t){e=D(t,"Loading...")},m(t,n){w(t,e,n)},p:J,d(t){t&&p(e)}}}function Je(l){let e,t,n,o,s,r,a,i,c,v,m,k,I,N;const R=[Fe,Ue,Qe],$=[];function j(f,h){return f[19].status==="loading"?0:f[19].status==="error"?1:2}t=j(l),n=$[t]=R[t](l);function P(f){l[10](f)}let Q={title:"Row limit per page",key:Ge,"aria-label":"limit-control",class:"shaped-outlined w-28",variant:"outlined",input$name:"category-control",style:"width: 90px",$$slots:{default:[Be]},$$scope:{ctx:l}};l[2]!==void 0&&(Q.value=l[2]),r=new ge({props:Q}),ue.push(()=>pe(r,"value",P)),c=new se({props:{disabled:l[1]===0,$$slots:{default:[Oe]},$$scope:{ctx:l}}}),c.$on("click",l[11]);function _(){return l[12](l[19])}m=new se({props:{disabled:l[19].data&&l[19].data.length!==l[2],$$slots:{default:[Le]},$$scope:{ctx:l}}}),m.$on("click",_);function b(f,h){return f[19].isFetching?je:Re}let u=b(l),d=u(l);return{c(){e=q("div"),n.c(),o=O(),s=q("div"),F(r.$$.fragment),i=O(),F(c.$$.fragment),v=O(),F(m.$$.fragment),k=O(),I=q("div"),d.c(),this.h()},l(f){e=C(f,"DIV",{slot:!0,class:!0});var h=U(e);n.l(h),o=L(h),s=C(h,"DIV",{class:!0});var S=U(s);K(r.$$.fragment,S),i=L(S),K(c.$$.fragment,S),v=L(S),K(m.$$.fragment,S),k=L(S),I=C(S,"DIV",{class:!0});var X=U(I);d.l(X),X.forEach(p),S.forEach(p),h.forEach(p),this.h()},h(){V(I,"class","svelte-be387d"),V(s,"class","mt-10 div-data svelte-be387d"),V(e,"slot","query"),V(e,"class","svelte-be387d")},m(f,h){w(f,e,h),$[t].m(e,null),g(e,o),g(e,s),A(r,s,null),g(s,i),A(c,s,null),g(s,v),A(m,s,null),g(s,k),g(s,I),d.m(I,null),N=!0},p(f,h){l=f;let S=t;t=j(l),t===S?$[t].p(l,h):(x(),E($[S],1,1,()=>{$[S]=null}),ee(),n=$[t],n?n.p(l,h):(n=$[t]=R[t](l),n.c()),y(n,1),n.m(e,o));const X={};h&67108864&&(X.$$scope={dirty:h,ctx:l}),!a&&h&4&&(a=!0,X.value=l[2],fe(()=>a=!1)),r.$set(X);const H={};h&2&&(H.disabled=l[1]===0),h&67108864&&(H.$$scope={dirty:h,ctx:l}),c.$set(H);const W={};h&524292&&(W.disabled=l[19].data&&l[19].data.length!==l[2]),h&67108864&&(W.$$scope={dirty:h,ctx:l}),m.$set(W),u===(u=b(l))&&d?d.p(l,h):(d.d(1),d=u(l),d&&(d.c(),d.m(I,null)))},i(f){N||(y(n),y(r.$$.fragment,f),y(c.$$.fragment,f),y(m.$$.fragment,f),N=!0)},o(f){E(n),E(r.$$.fragment,f),E(c.$$.fragment,f),E(m.$$.fragment,f),N=!1},d(f){f&&p(e),$[t].d(),B(r),B(c),B(m),d.d()}}}function Te(l){let e,t,n,o,s,r=l[8](l[4])+"",a,i,c,v,m,k,I="",N,R,$,j,P,Q;return v=new De({props:{member:{...te,unit_id:l[4]},txt:l[0],limit:l[2],page:l[1]}}),$=new Ce({props:{unitId:l[4]}}),$.$on("search",l[9]),P=new Ee({props:{options:l[3],$$slots:{query:[Je,({queryResult:_})=>({19:_}),({queryResult:_})=>_?524288:0]},$$scope:{ctx:l}}}),{c(){e=O(),t=q("section"),n=q("div"),o=q("div"),s=M("Anggota koperasi ("),a=M(r),i=M(")"),c=O(),F(v.$$.fragment),m=O(),k=q("div"),N=M(I),R=O(),F($.$$.fragment),j=O(),F(P.$$.fragment),this.h()},l(_){ke("svelte-1b32ywv",document.head).forEach(p),e=L(_),t=C(_,"SECTION",{class:!0});var u=U(t);n=C(u,"DIV",{class:!0});var d=U(n);o=C(d,"DIV",{class:!0});var f=U(o);s=D(f,"Anggota koperasi ("),a=D(f,r),i=D(f,")"),f.forEach(p),c=L(d),K(v.$$.fragment,d),m=L(d),k=C(d,"DIV",{class:!0});var h=U(k);N=D(h,I),h.forEach(p),R=L(d),K($.$$.fragment,d),d.forEach(p),j=L(u),K(P.$$.fragment,u),u.forEach(p),this.h()},h(){document.title="Anggota Koperasi - (Kopma - Unwir)",V(o,"class","title svelte-be387d"),V(k,"class","flex-1 svelte-be387d"),V(n,"class","flex-row mb-24 flex-center svelte-be387d"),V(t,"class","mb-10 svelte-be387d")},m(_,b){w(_,e,b),w(_,t,b),g(t,n),g(n,o),g(o,s),g(o,a),g(o,i),g(n,c),A(v,n,null),g(n,m),g(n,k),g(k,N),g(n,R),A($,n,null),g(t,j),A(P,t,null),Q=!0},p(_,[b]){(!Q||b&16)&&r!==(r=_[8](_[4])+"")&&G(a,r);const u={};b&16&&(u.member={...te,unit_id:_[4]}),b&1&&(u.txt=_[0]),b&4&&(u.limit=_[2]),b&2&&(u.page=_[1]),v.$set(u);const d={};b&16&&(d.unitId=_[4]),$.$set(d);const f={};b&8&&(f.options=_[3]),b&67633159&&(f.$$scope={dirty:b,ctx:_}),P.$set(f)},i(_){Q||(y(v.$$.fragment,_),y($.$$.fragment,_),y(P.$$.fragment,_),Q=!0)},o(_){E(v.$$.fragment,_),E($.$$.fragment,_),E(P.$$.fragment,_),Q=!1},d(_){_&&(p(e),p(t)),B(v),B($),B(P)}}}const Xe="/koperasi/unit/member-list";let ze=!1;const Ge=l=>`${l}`;function He(l,e,t){let n,o,s;Y(l,Z,u=>t(13,o=u)),Y(l,ne,u=>t(4,s=u));const r=Ie();let a=`${s}`,i=0,c=5;const v=async()=>{const{data:u}=await le.get("/koperasi/unit/list-unit");return u},m=async()=>{if(o.length===0){const u=r.getQueryData(["koperasi","units"])??await r.fetchQuery(["koperasi","unit"],()=>v());Z.update(()=>u??[])}},k=u=>{t(1,i=u)},I=async(u="",d=0,f=0)=>{const{data:h}=await le.get(`${Xe}/${a}/${d}/${f}`);return h},N=async u=>{u&&u.length===c&&await r.prefetchQuery(["members",a,{page:i+1,limit:c}],()=>I())},R=u=>u.error?u.error:"",$=u=>{ne.update(()=>u.detail.txt),t(0,a=u.detail.txt.toString()),t(1,i=0)},j=u=>{const d=o.filter(f=>f.id===u)[0];return d?d.name:""};_e(()=>m());const P=u=>$(u);function Q(u){c=u,t(2,c)}const _=()=>{k(Math.max(i-1,0))},b=u=>{k(u.data&&ze?i:i+1)};return l.$$.update=()=>{l.$$.dirty&7&&t(3,n={queryKey:["members",a,{page:i,limit:c}],queryFn:()=>I(a,i,c),onSuccess:()=>N})},[a,i,c,n,s,k,R,$,j,P,Q,_,b]}class lt extends me{constructor(e){super(),de(this,e,He,Te,ce,{})}}export{lt as component};