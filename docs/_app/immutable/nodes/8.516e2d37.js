import{s as se,p as X,a as P,c as A,i as w,R as G,d as _,Q as x,l as K,m as T,n as Z,f as U,g as B,h as L,j as M,P as k,J as re,K as J,N as ye,e as ee,X as ke}from"../chunks/scheduler.6fc06158.js";import{S as ie,i as le,f as W,b as I,d as E,m as C,a as b,t as y,e as Q,g as oe,c as ue}from"../chunks/index.56375d01.js";import{e as te,u as De,o as Ie}from"../chunks/each.316c3a49.js";import{D as ge,u as ae,c as Ee,Q as Ce,S as Qe,O as Ve}from"../chunks/store.0f8aa354.js";import{u as fe,a as qe,C as he,A as ve,I as be,T as pe,B as Y}from"../chunks/InitialFocus.5cecb002.js";import{i as ne,a as Se}from"../chunks/axios-base.b46ca2ef.js";import{I as ce}from"../chunks/IconButton.35cdaee9.js";import{g as ze}from"../chunks/navigation.f011dd84.js";function Ne(l){let e=l[0].id===0?"note_add":"edit",t;return{c(){t=K(e)},l(n){t=T(n,e)},m(n,r){w(n,t,r)},p(n,r){r&1&&e!==(e=n[0].id===0?"note_add":"edit")&&Z(t,e)},d(n){n&&_(t)}}}function Ue(l){let e;return{c(){e=K("Unit Koperasi")},l(t){e=T(t,"Unit Koperasi")},m(t,n){w(t,e,n)},d(t){t&&_(e)}}}function Be(l){let e,t,n,r,i,o,a,s,u,d,f;function $(c){l[14](c)}function v(c){l[15](c)}let h={use:[be],label:"Nama unit",type:"text",invalid:!l[3],input$placeholder:"e.g. nama unit",variant:"filled"};l[1]!==void 0&&(h.dirty=l[1]),l[0].name!==void 0&&(h.value=l[0].name),n=new pe({props:h}),X.push(()=>W(n,"dirty",$)),X.push(()=>W(n,"value",v));function j(c){l[16](c)}function D(c){l[17](c)}let p={textarea:!0,label:"Deskripsi",input$rows:5,input$emptyValueUndefined:!0};return l[1]!==void 0&&(p.dirty=l[1]),l[0].description!==void 0&&(p.value=l[0].description),s=new pe({props:p}),X.push(()=>W(s,"dirty",j)),X.push(()=>W(s,"value",D)),{c(){e=U("div"),t=U("div"),I(n.$$.fragment),o=P(),a=U("div"),I(s.$$.fragment),this.h()},l(c){e=B(c,"DIV",{class:!0});var m=L(e);t=B(m,"DIV",{class:!0});var S=L(t);E(n.$$.fragment,S),S.forEach(_),o=A(m),a=B(m,"DIV",{class:!0});var N=L(a);E(s.$$.fragment,N),N.forEach(_),m.forEach(_),this.h()},h(){M(t,"class","flex-col flex-1 w-min-300 svelte-5c3xf9"),M(a,"class","flex-col flex-1 w-min-300 mt-20 svelte-5c3xf9"),M(e,"class","flex-row flexwrap mt-10 svelte-5c3xf9")},m(c,m){w(c,e,m),k(e,t),C(n,t,null),k(e,o),k(e,a),C(s,a,null),f=!0},p(c,m){const S={};m&8&&(S.invalid=!c[3]),!r&&m&2&&(r=!0,S.dirty=c[1],G(()=>r=!1)),!i&&m&1&&(i=!0,S.value=c[0].name,G(()=>i=!1)),n.$set(S);const N={};!u&&m&2&&(u=!0,N.dirty=c[1],G(()=>u=!1)),!d&&m&1&&(d=!0,N.value=c[0].description,G(()=>d=!1)),s.$set(N)},i(c){f||(b(n.$$.fragment,c),b(s.$$.fragment,c),f=!0)},o(c){y(n.$$.fragment,c),y(s.$$.fragment,c),f=!1},d(c){c&&_(e),Q(n),Q(s)}}}function Me(l){let e;return{c(){e=K("Batal")},l(t){e=T(t,"Batal")},m(t,n){w(t,e,n)},d(t){t&&_(e)}}}function Pe(l){let e;return{c(){e=K("Simpan")},l(t){e=T(t,"Simpan")},m(t,n){w(t,e,n)},d(t){t&&_(e)}}}function Ae(l){let e,t,n,r;return e=new Y({props:{ripple:!0,color:"secondary",class:"size-sm ml-6",$$slots:{default:[Me]},$$scope:{ctx:l}}}),e.$on("click",l[18]),n=new Y({props:{disabled:l[5],color:"primary",ripple:!0,$$slots:{default:[Pe]},$$scope:{ctx:l}}}),n.$on("click",l[19]),{c(){I(e.$$.fragment),t=P(),I(n.$$.fragment)},l(i){E(e.$$.fragment,i),t=A(i),E(n.$$.fragment,i)},m(i,o){C(e,i,o),w(i,t,o),C(n,i,o),r=!0},p(i,o){const a={};o&16777216&&(a.$$scope={dirty:o,ctx:i}),e.$set(a);const s={};o&32&&(s.disabled=i[5]),o&16777216&&(s.$$scope={dirty:o,ctx:i}),n.$set(s)},i(i){r||(b(e.$$.fragment,i),b(n.$$.fragment,i),r=!0)},o(i){y(e.$$.fragment,i),y(n.$$.fragment,i),r=!1},d(i){i&&_(t),Q(e,i),Q(n,i)}}}function Ke(l){let e,t,n,r,i,o;return e=new qe({props:{id:"simple-title",style:"margin: 0 16px 16px 16px;padding:0",$$slots:{default:[Ue]},$$scope:{ctx:l}}}),n=new he({props:{id:"simple-content",style:"overflow:unset;margin:0 16px;padding:0",$$slots:{default:[Be]},$$scope:{ctx:l}}}),i=new ve({props:{$$slots:{default:[Ae]},$$scope:{ctx:l}}}),{c(){I(e.$$.fragment),t=P(),I(n.$$.fragment),r=P(),I(i.$$.fragment)},l(a){E(e.$$.fragment,a),t=A(a),E(n.$$.fragment,a),r=A(a),E(i.$$.fragment,a)},m(a,s){C(e,a,s),w(a,t,s),C(n,a,s),w(a,r,s),C(i,a,s),o=!0},p(a,s){const u={};s&16777216&&(u.$$scope={dirty:s,ctx:a}),e.$set(u);const d={};s&16777227&&(d.$$scope={dirty:s,ctx:a}),n.$set(d);const f={};s&16777252&&(f.$$scope={dirty:s,ctx:a}),i.$set(f)},i(a){o||(b(e.$$.fragment,a),b(n.$$.fragment,a),b(i.$$.fragment,a),o=!0)},o(a){y(e.$$.fragment,a),y(n.$$.fragment,a),y(i.$$.fragment,a),o=!1},d(a){a&&(_(t),_(r)),Q(e,a),Q(n,a),Q(i,a)}}}function Te(l){let e,t,n,r,i;e=new ce({props:{title:"Edit unit",class:"material-icons icon",size:l[0].id===0?"normal":"button","aria-label":"New unit",$$slots:{default:[Ne]},$$scope:{ctx:l}}}),e.$on("click",l[13]);function o(s){l[20](s)}let a={surface$style:"width: 480px; max-width: calc(100vw - 32px);overflow:unset;","aria-labelledby":"simple-title","aria-describedby":"simple-content",$$slots:{default:[Ke]},$$scope:{ctx:l}};return l[4]!==void 0&&(a.open=l[4]),n=new ge({props:a}),X.push(()=>W(n,"open",o)),{c(){I(e.$$.fragment),t=P(),I(n.$$.fragment)},l(s){E(e.$$.fragment,s),t=A(s),E(n.$$.fragment,s)},m(s,u){C(e,s,u),w(s,t,u),C(n,s,u),i=!0},p(s,[u]){const d={};u&1&&(d.size=s[0].id===0?"normal":"button"),u&16777217&&(d.$$scope={dirty:u,ctx:s}),e.$set(d);const f={};u&16777263&&(f.$$scope={dirty:u,ctx:s}),!r&&u&16&&(r=!0,f.open=s[4],G(()=>r=!1)),n.$set(f)},i(s){i||(b(e.$$.fragment,s),b(n.$$.fragment,s),i=!0)},o(s){y(e.$$.fragment,s),y(n.$$.fragment,s),i=!1},d(s){s&&_(t),Q(e,s),Q(n,s)}}}function Le(l,e,t){let n,r,i,o,{unit:a}=e,{page:s=0}=e,{limit:u=0}=e,d=!1,f=!1;const $=fe();let v=!1,h="no";const j=async g=>await ne.patch(`/koperasi/unit/patch/${g.id}`,g,{headers:{"Content-Type":"application/json"}}),p=ae(async g=>await ne.post("/koperasi/unit/insert",g,{headers:{"Content-Type":"application/json"}}),{onMutate:async g=>{await $.cancelQueries();const O=$.getQueryData(["units",{page:s,limit:u}]);return O&&$.setQueryData(["units",{page:s,limit:u}],O),O},onSuccess:async()=>{t(10,d=!0)},onError:(g,O,H)=>{H!=null&&H.previousData&&$.setQueryData(["units",{page:s,limit:u}],H.previousData)},onSettled:async()=>{await $.invalidateQueries(["units"])}});x(l,p,g=>t(12,o=g));const c=ae(j,{onMutate:async g=>{await $.cancelQueries();const O=$.getQueryData(["units",{page:s,limit:u}]);return O&&$.setQueryData(["units",{page:s,limit:u}],[...O]),O},onSuccess:async()=>{t(10,d=!0)},onError:(g,O,H)=>{H!=null&&H.previousData&&$.setQueryData(["units",{page:s,limit:u}],H.previousData)},onSettled:async()=>{await $.invalidateQueries(["units"])}});x(l,c,g=>t(11,i=g));const m=async()=>t(4,f=!0);function S(g){v=g,t(1,v)}function N(g){l.$$.not_equal(a.name,g)&&(a.name=g,t(0,a),t(10,d))}function R(g){v=g,t(1,v)}function z(g){l.$$.not_equal(a.description,g)&&(a.description=g,t(0,a),t(10,d))}const V=()=>t(2,h="no"),q=()=>t(2,h="yes");function F(g){f=g,t(4,f),t(10,d),t(0,a)}return l.$$set=g=>{"unit"in g&&t(0,a=g.unit),"page"in g&&t(8,s=g.page),"limit"in g&&t(9,u=g.limit)},l.$$.update=()=>{l.$$.dirty&1&&a.description===void 0&&t(0,a.description="",a),l.$$.dirty&1025&&d&&(a.id===0&&t(0,a={id:0,name:"",description:""}),t(4,f=!1),t(10,d=!1)),l.$$.dirty&1&&t(3,n=a.name.length>2),l.$$.dirty&10&&t(5,r=!n||!v),l.$$.dirty&6149&&h==="yes"&&(a.id===0?o.mutate(a):i.mutate(a),t(2,h="no"))},[a,v,h,n,f,r,p,c,s,u,d,i,o,m,S,N,R,z,V,q,F]}class we extends ie{constructor(e){super(),le(this,e,Le,Te,se,{unit:0,page:8,limit:9})}}function je(l){let e;return{c(){e=K("delete")},l(t){e=T(t,"delete")},m(t,n){w(t,e,n)},d(t){t&&_(e)}}}function Fe(l){let e,t="Data unit koperasi akan dihapus, anda yakin?";return{c(){e=U("div"),e.textContent=t},l(n){e=B(n,"DIV",{"data-svelte-h":!0}),re(e)!=="svelte-ebju6y"&&(e.textContent=t)},m(n,r){w(n,e,r)},p:J,d(n){n&&_(e)}}}function Oe(l){let e;return{c(){e=K("Batal")},l(t){e=T(t,"Batal")},m(t,n){w(t,e,n)},d(t){t&&_(e)}}}function He(l){let e;return{c(){e=K("Hapus")},l(t){e=T(t,"Hapus")},m(t,n){w(t,e,n)},d(t){t&&_(e)}}}function Re(l){let e,t,n,r;return e=new Y({props:{ripple:!0,use:[be],color:"secondary",class:"size-sm ml-6",$$slots:{default:[Oe]},$$scope:{ctx:l}}}),e.$on("click",l[9]),n=new Y({props:{color:"primary",ripple:!0,$$slots:{default:[He]},$$scope:{ctx:l}}}),n.$on("click",l[10]),{c(){I(e.$$.fragment),t=P(),I(n.$$.fragment)},l(i){E(e.$$.fragment,i),t=A(i),E(n.$$.fragment,i)},m(i,o){C(e,i,o),w(i,t,o),C(n,i,o),r=!0},p(i,o){const a={};o&16384&&(a.$$scope={dirty:o,ctx:i}),e.$set(a);const s={};o&16384&&(s.$$scope={dirty:o,ctx:i}),n.$set(s)},i(i){r||(b(e.$$.fragment,i),b(n.$$.fragment,i),r=!0)},o(i){y(e.$$.fragment,i),y(n.$$.fragment,i),r=!1},d(i){i&&_(t),Q(e,i),Q(n,i)}}}function Je(l){let e,t,n,r;return e=new he({props:{id:"simple-content",style:"overflow:unset",$$slots:{default:[Fe]},$$scope:{ctx:l}}}),n=new ve({props:{$$slots:{default:[Re]},$$scope:{ctx:l}}}),{c(){I(e.$$.fragment),t=P(),I(n.$$.fragment)},l(i){E(e.$$.fragment,i),t=A(i),E(n.$$.fragment,i)},m(i,o){C(e,i,o),w(i,t,o),C(n,i,o),r=!0},p(i,o){const a={};o&16384&&(a.$$scope={dirty:o,ctx:i}),e.$set(a);const s={};o&16385&&(s.$$scope={dirty:o,ctx:i}),n.$set(s)},i(i){r||(b(e.$$.fragment,i),b(n.$$.fragment,i),r=!0)},o(i){y(e.$$.fragment,i),y(n.$$.fragment,i),r=!1},d(i){i&&_(t),Q(e,i),Q(n,i)}}}function Xe(l){let e,t,n,r,i;e=new ce({props:{disabled:l[2]!=="ADMIN",class:"material-icons",style:"color:var(--text-color)",size:"button",title:"Remove unit",$$slots:{default:[je]},$$scope:{ctx:l}}}),e.$on("click",l[8]);function o(s){l[11](s)}let a={surface$style:"width: 480px; max-width: calc(100vw - 32px);overflow:unset;","aria-labelledby":"simple-title","aria-describedby":"simple-content",$$slots:{default:[Je]},$$scope:{ctx:l}};return l[1]!==void 0&&(a.open=l[1]),n=new ge({props:a}),X.push(()=>W(n,"open",o)),{c(){I(e.$$.fragment),t=P(),I(n.$$.fragment)},l(s){E(e.$$.fragment,s),t=A(s),E(n.$$.fragment,s)},m(s,u){C(e,s,u),w(s,t,u),C(n,s,u),i=!0},p(s,[u]){const d={};u&4&&(d.disabled=s[2]!=="ADMIN"),u&16384&&(d.$$scope={dirty:u,ctx:s}),e.$set(d);const f={};u&16385&&(f.$$scope={dirty:u,ctx:s}),!r&&u&2&&(r=!0,f.open=s[1],G(()=>r=!1)),n.$set(f)},i(s){i||(b(e.$$.fragment,s),b(n.$$.fragment,s),i=!0)},o(s){y(e.$$.fragment,s),y(n.$$.fragment,s),i=!1},d(s){s&&_(t),Q(e,s),Q(n,s)}}}function Ge(l,e,t){let n,r;x(l,Se,p=>t(2,r=p));const i=fe();let{unitId:o=0}=e,{page:a=0}=e,{limit:s=0}=e,u=!1,d="no";const $=ae(async p=>await ne.delete(`/koperasi/unit/delete/${p}`,{headers:{"Content-Type":"application/json"}}),{onMutate:async p=>{await i.cancelQueries();const c=i.getQueryData(["units",{page:a,limit:s}]);return c&&i.setQueryData(["units",{page:a,limit:s}],c),c},onError:(p,c,m)=>{m!=null&&m.previousList&&i.setQueryData(["units",{page:a,limit:s}],m.previousList)},onSettled:async(p,c,m,S)=>{await i.invalidateQueries(["units"])}});x(l,$,p=>t(7,n=p));const v=()=>t(1,u=!0),h=()=>t(0,d="no"),j=()=>t(0,d="yes");function D(p){u=p,t(1,u)}return l.$$set=p=>{"unitId"in p&&t(4,o=p.unitId),"page"in p&&t(5,a=p.page),"limit"in p&&t(6,s=p.limit)},l.$$.update=()=>{l.$$.dirty&145&&d==="yes"&&(n.mutate(o),t(0,d="no"))},[d,u,r,$,o,a,s,n,v,h,j,D]}class We extends ie{constructor(e){super(),le(this,e,Ge,Xe,se,{unitId:4,page:5,limit:6})}}function Ye(l){let e;return{c(){e=K("account_circle")},l(t){e=T(t,"account_circle")},m(t,n){w(t,e,n)},d(t){t&&_(e)}}}function Ze(l){let e,t,n,r=l[0].name+"",i,o,a,s=(l[0].description??"")+"",u,d,f,$,v,h,j,D,p;return $=new we({props:{unit:l[0],page:l[1],limit:l[2]}}),h=new We({props:{unitId:l[0].id,page:l[1],limit:l[2]}}),D=new ce({props:{title:"Show member by unit",size:"button",class:"material-icons","aria-label":"Account",$$slots:{default:[Ye]},$$scope:{ctx:l}}}),D.$on("click",l[3]),{c(){e=U("div"),t=U("div"),n=U("div"),i=K(r),o=P(),a=U("div"),u=K(s),d=P(),f=U("div"),I($.$$.fragment),v=P(),I(h.$$.fragment),j=P(),I(D.$$.fragment),this.h()},l(c){e=B(c,"DIV",{class:!0});var m=L(e);t=B(m,"DIV",{class:!0});var S=L(t);n=B(S,"DIV",{class:!0});var N=L(n);i=T(N,r),N.forEach(_),o=A(S),a=B(S,"DIV",{class:!0});var R=L(a);u=T(R,s),R.forEach(_),S.forEach(_),d=A(m),f=B(m,"DIV",{class:!0});var z=L(f);E($.$$.fragment,z),v=A(z),E(h.$$.fragment,z),j=A(z),E(D.$$.fragment,z),z.forEach(_),m.forEach(_),this.h()},h(){M(n,"class","div-name svelte-1mwqzyh"),M(a,"class","svelte-1mwqzyh"),M(t,"class","div-content svelte-1mwqzyh"),M(f,"class","flex-row gap-x-10 svelte-1mwqzyh"),M(e,"class","box-shadow radius-1 border-1 svelte-1mwqzyh")},m(c,m){w(c,e,m),k(e,t),k(t,n),k(n,i),k(t,o),k(t,a),k(a,u),k(e,d),k(e,f),C($,f,null),k(f,v),C(h,f,null),k(f,j),C(D,f,null),p=!0},p(c,[m]){(!p||m&1)&&r!==(r=c[0].name+"")&&Z(i,r),(!p||m&1)&&s!==(s=(c[0].description??"")+"")&&Z(u,s);const S={};m&1&&(S.unit=c[0]),m&2&&(S.page=c[1]),m&4&&(S.limit=c[2]),$.$set(S);const N={};m&1&&(N.unitId=c[0].id),m&2&&(N.page=c[1]),m&4&&(N.limit=c[2]),h.$set(N);const R={};m&16&&(R.$$scope={dirty:m,ctx:c}),D.$set(R)},i(c){p||(b($.$$.fragment,c),b(h.$$.fragment,c),b(D.$$.fragment,c),p=!0)},o(c){y($.$$.fragment,c),y(h.$$.fragment,c),y(D.$$.fragment,c),p=!1},d(c){c&&_(e),Q($),Q(h),Q(D)}}}function xe(l,e,t){let{unit:n}=e,{page:r=0}=e,{limit:i=0}=e;const o=()=>{Ee.update(()=>n.id),ze("/member-koperasi-by-unit")};return l.$$set=a=>{"unit"in a&&t(0,n=a.unit),"page"in a&&t(1,r=a.page),"limit"in a&&t(2,i=a.limit)},[n,r,i,o]}class et extends ie{constructor(e){super(),le(this,e,xe,Ze,se,{unit:0,page:1,limit:2})}}function _e(l,e,t){const n=l.slice();return n[15]=e[t],n}function de(l,e,t){const n=l.slice();return n[18]=e[t],n}function tt(l){let e,t=[],n=new Map,r,i=te(l[14].data??[]);const o=a=>a[18].id;for(let a=0;a<i.length;a+=1){let s=de(l,i,a),u=o(s);n.set(u,t[a]=me(u,s))}return{c(){e=U("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=B(a,"DIV",{class:!0});var s=L(e);for(let u=0;u<t.length;u+=1)t[u].l(s);s.forEach(_),this.h()},h(){M(e,"class","arr-box svelte-1y1936s")},m(a,s){w(a,e,s);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null);r=!0},p(a,s){s&16384&&(i=te(a[14].data??[]),oe(),t=De(t,s,o,1,a,i,n,e,Ie,me,null,de),ue())},i(a){if(!r){for(let s=0;s<i.length;s+=1)b(t[s]);r=!0}},o(a){for(let s=0;s<t.length;s+=1)y(t[s]);r=!1},d(a){a&&_(e);for(let s=0;s<t.length;s+=1)t[s].d()}}}function nt(l){let e,t,n=l[6](l[14])+"",r;return{c(){e=U("div"),t=K("Error: "),r=K(n),this.h()},l(i){e=B(i,"DIV",{class:!0});var o=L(e);t=T(o,"Error: "),r=T(o,n),o.forEach(_),this.h()},h(){M(e,"class","svelte-1y1936s")},m(i,o){w(i,e,o),k(e,t),k(e,r)},p(i,o){o&16384&&n!==(n=i[6](i[14])+"")&&Z(r,n)},i:J,o:J,d(i){i&&_(e)}}}function st(l){let e,t="Loading...";return{c(){e=U("div"),e.textContent=t,this.h()},l(n){e=B(n,"DIV",{class:!0,"data-svelte-h":!0}),re(e)!=="svelte-194gxkm"&&(e.textContent=t),this.h()},h(){M(e,"class","svelte-1y1936s")},m(n,r){w(n,e,r)},p:J,i:J,o:J,d(n){n&&_(e)}}}function me(l,e){let t,n,r;return n=new et({props:{unit:e[18]}}),{key:l,first:null,c(){t=ee(),I(n.$$.fragment),this.h()},l(i){t=ee(),E(n.$$.fragment,i),this.h()},h(){this.first=t},m(i,o){w(i,t,o),C(n,i,o),r=!0},p(i,o){e=i;const a={};o&16384&&(a.unit=e[18]),n.$set(a)},i(i){r||(b(n.$$.fragment,i),r=!0)},o(i){y(n.$$.fragment,i),r=!1},d(i){i&&_(t),Q(n,i)}}}function it(l){let e=l[15]+"",t;return{c(){t=K(e)},l(n){t=T(n,e)},m(n,r){w(n,t,r)},p:J,d(n){n&&_(t)}}}function $e(l){let e,t;return e=new Ve({props:{value:l[15],$$slots:{default:[it]},$$scope:{ctx:l}}}),{c(){I(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,r){C(e,n,r),t=!0},p(n,r){const i={};r&2097152&&(i.$$scope={dirty:r,ctx:n}),e.$set(i)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){Q(e,n)}}}function lt(l){let e,t,n=te(l[4]),r=[];for(let o=0;o<n.length;o+=1)r[o]=$e(_e(l,n,o));const i=o=>y(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=ee()},l(o){for(let a=0;a<r.length;a+=1)r[a].l(o);e=ee()},m(o,a){for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(o,a);w(o,e,a),t=!0},p(o,a){if(a&16){n=te(o[4]);let s;for(s=0;s<n.length;s+=1){const u=_e(o,n,s);r[s]?(r[s].p(u,a),b(r[s],1)):(r[s]=$e(u),r[s].c(),b(r[s],1),r[s].m(e.parentNode,e))}for(oe(),s=n.length;s<r.length;s+=1)i(s);ue()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)b(r[a]);t=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)y(r[a]);t=!1},d(o){o&&_(e),ke(r,o)}}}function at(l){let e;return{c(){e=K("≮ Previous")},l(t){e=T(t,"≮ Previous")},m(t,n){w(t,e,n)},d(t){t&&_(e)}}}function rt(l){let e;return{c(){e=K("Next ≯")},l(t){e=T(t,"Next ≯")},m(t,n){w(t,e,n)},d(t){t&&_(e)}}}function ot(l){let e,t,n=l[0]+1+"",r;return{c(){e=U("span"),t=K("Current Page: "),r=K(n),this.h()},l(i){e=B(i,"SPAN",{class:!0});var o=L(e);t=T(o,"Current Page: "),r=T(o,n),o.forEach(_),this.h()},h(){M(e,"class","svelte-1y1936s")},m(i,o){w(i,e,o),k(e,t),k(e,r)},p(i,o){o&1&&n!==(n=i[0]+1+"")&&Z(r,n)},d(i){i&&_(e)}}}function ut(l){let e;return{c(){e=K("Loading...")},l(t){e=T(t,"Loading...")},m(t,n){w(t,e,n)},p:J,d(t){t&&_(e)}}}function ft(l){let e,t,n,r,i,o,a,s,u,d,f,$,v,h;const j=[st,nt,tt],D=[];function p(V,q){return V[14].status==="loading"?0:V[14].status==="error"?1:2}t=p(l),n=D[t]=j[t](l);function c(V){l[8](V)}let m={title:"Row limit per page",key:l[7],"aria-label":"limit-control",class:"shaped-outlined",variant:"outlined",style:"width: 90px",$$slots:{default:[lt]},$$scope:{ctx:l}};l[1]!==void 0&&(m.value=l[1]),o=new Qe({props:m}),X.push(()=>W(o,"value",c)),u=new Y({props:{disabled:l[0]===0,$$slots:{default:[at]},$$scope:{ctx:l}}}),u.$on("click",l[9]);function S(){return l[10](l[14])}f=new Y({props:{disabled:l[14].data&&l[14].data.length!==l[1],$$slots:{default:[rt]},$$scope:{ctx:l}}}),f.$on("click",S);function N(V,q){return V[14].isFetching?ut:ot}let R=N(l),z=R(l);return{c(){e=U("div"),n.c(),r=P(),i=U("div"),I(o.$$.fragment),s=P(),I(u.$$.fragment),d=P(),I(f.$$.fragment),$=P(),v=U("div"),z.c(),this.h()},l(V){e=B(V,"DIV",{slot:!0,class:!0});var q=L(e);n.l(q),r=A(q),i=B(q,"DIV",{class:!0});var F=L(i);E(o.$$.fragment,F),s=A(F),E(u.$$.fragment,F),d=A(F),E(f.$$.fragment,F),$=A(F),v=B(F,"DIV",{class:!0});var g=L(v);z.l(g),g.forEach(_),F.forEach(_),q.forEach(_),this.h()},h(){M(v,"class","svelte-1y1936s"),M(i,"class","mt-20 div-data svelte-1y1936s"),M(e,"slot","query"),M(e,"class","svelte-1y1936s")},m(V,q){w(V,e,q),D[t].m(e,null),k(e,r),k(e,i),C(o,i,null),k(i,s),C(u,i,null),k(i,d),C(f,i,null),k(i,$),k(i,v),z.m(v,null),h=!0},p(V,q){l=V;let F=t;t=p(l),t===F?D[t].p(l,q):(oe(),y(D[F],1,1,()=>{D[F]=null}),ue(),n=D[t],n?n.p(l,q):(n=D[t]=j[t](l),n.c()),b(n,1),n.m(e,r));const g={};q&2&&(g.key=l[7]),q&2097152&&(g.$$scope={dirty:q,ctx:l}),!a&&q&2&&(a=!0,g.value=l[1],G(()=>a=!1)),o.$set(g);const O={};q&1&&(O.disabled=l[0]===0),q&2097152&&(O.$$scope={dirty:q,ctx:l}),u.$set(O);const H={};q&16386&&(H.disabled=l[14].data&&l[14].data.length!==l[1]),q&2097152&&(H.$$scope={dirty:q,ctx:l}),f.$set(H),R===(R=N(l))&&z?z.p(l,q):(z.d(1),z=R(l),z&&(z.c(),z.m(v,null)))},i(V){h||(b(n),b(o.$$.fragment,V),b(u.$$.fragment,V),b(f.$$.fragment,V),h=!0)},o(V){y(n),y(o.$$.fragment,V),y(u.$$.fragment,V),y(f.$$.fragment,V),h=!1},d(V){V&&_(e),D[t].d(),Q(o),Q(u),Q(f),z.d()}}}function ct(l){let e,t,n,r,i="Unit Koperasi",o,a,s,u,d;return a=new we({props:{unit:{...l[3]},page:l[0],limit:l[1]}}),u=new Ce({props:{options:l[2],$$slots:{query:[ft,({queryResult:f})=>({14:f}),({queryResult:f})=>f?16384:0]},$$scope:{ctx:l}}}),{c(){e=P(),t=U("section"),n=U("div"),r=U("div"),r.textContent=i,o=P(),I(a.$$.fragment),s=P(),I(u.$$.fragment),this.h()},l(f){ye("svelte-qtzazo",document.head).forEach(_),e=A(f),t=B(f,"SECTION",{class:!0});var v=L(t);n=B(v,"DIV",{class:!0});var h=L(n);r=B(h,"DIV",{class:!0,"data-svelte-h":!0}),re(r)!=="svelte-13b9t5r"&&(r.textContent=i),o=A(h),E(a.$$.fragment,h),h.forEach(_),s=A(v),E(u.$$.fragment,v),v.forEach(_),this.h()},h(){document.title="Anggota Koperasi - (Kopma - Unwir)",M(r,"class","title svelte-1y1936s"),M(n,"class","flex-row mb-24 flex-center svelte-1y1936s"),M(t,"class","mb-20 svelte-1y1936s")},m(f,$){w(f,e,$),w(f,t,$),k(t,n),k(n,r),k(n,o),C(a,n,null),k(t,s),C(u,t,null),d=!0},p(f,[$]){const v={};$&1&&(v.page=f[0]),$&2&&(v.limit=f[1]),a.$set(v);const h={};$&4&&(h.options=f[2]),$&2113539&&(h.$$scope={dirty:$,ctx:f}),u.$set(h)},i(f){d||(b(a.$$.fragment,f),b(u.$$.fragment,f),d=!0)},o(f){y(a.$$.fragment,f),y(u.$$.fragment,f),d=!1},d(f){f&&(_(e),_(t)),Q(a),Q(u)}}}const pt="/koperasi/unit/list";let _t=!1;function dt(l,e,t){let n;const r=fe();let i={id:0,name:"",description:""},o=[3,5,10,20,25,50],a=0,s=5;const u=p=>{t(0,a=p)},d=async(p=0,c=0)=>{const{data:m}=await ne.get(`${pt}/${p}/${c}`);return m},f=async p=>{p&&p.length===s&&await r.prefetchQuery(["units",{page:a+1,limit:s}],()=>d())},$=p=>p.error?p.error:"",v=p=>p?`${p}`:`${s}`;function h(p){s=p,t(1,s)}const j=()=>{u(Math.max(a-1,0))},D=p=>{u(p.data&&_t?a:a+1)};return l.$$.update=()=>{l.$$.dirty&3&&t(2,n={queryKey:["units",{page:a,limit:s}],queryFn:()=>d(a,s),onSuccess:()=>f})},[a,s,n,i,o,u,$,v,h,j,D]}class kt extends ie{constructor(e){super(),le(this,e,dt,ct,se,{})}}export{kt as component};