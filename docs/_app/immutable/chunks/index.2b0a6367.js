var q=Object.defineProperty;var G=(t,e,n)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var N=(t,e,n)=>(G(t,typeof e!="symbol"?e+"":e,n),n);import{u as w,Y as H,d as B,Z as J,A as v,Q as A,w as O,_ as K,$ as D,a0 as I,h as T,O as W,a1 as X,a2 as tt,a3 as et,N as M,a4 as nt,a5 as it,a6 as st,a7 as rt,a8 as at}from"./scheduler.6ec384de.js";const F=typeof window<"u";let L=F?()=>window.performance.now():()=>Date.now(),R=F?t=>requestAnimationFrame(t):w;const p=new Set;function Q(t){p.forEach(e=>{e.c(t)||(p.delete(e),e.f())}),p.size!==0&&R(Q)}function U(t){let e;return p.size===0&&R(Q),{promise:new Promise(n=>{p.add(e={c:t,f:n})}),abort(){p.delete(e)}}}const b=new Map;let k=0;function ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ft(t,e){const n={stylesheet:J(e),rules:{}};return b.set(t,n),n}function V(t,e,n,i,r,a,u,l=0){const d=16.666/i;let s=`{
`;for(let g=0;g<=1;g+=d){const m=e+(n-e)*a(g);s+=g*100+`%{${u(m,1-m)}}
`}const f=s+`100% {${u(n,1-n)}}
}`,o=`__svelte_${ot(f)}_${l}`,_=H(t),{stylesheet:c,rules:$}=b.get(_)||ft(_,t);$[o]||($[o]=!0,c.insertRule(`@keyframes ${o} ${f}`,c.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${o} ${i}ms linear ${r}ms 1 both`,k+=1,o}function P(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),k-=r,k||ut())}function ut(){R(()=>{k||(b.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&B(e)}),b.clear())})}let x;function Y(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function j(t,e,n){t.dispatchEvent(K(`${e?"intro":"outro"}${n}`))}const S=new Set;let y;function gt(){y={r:0,c:[],p:y}}function yt(){y.r||v(y.c),y=y.p}function ct(t,e){t&&t.i&&(S.delete(t),t.i(e))}function pt(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),y.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Z={duration:0};function wt(t,e,n){const i={direction:"in"};let r=e(t,n,i),a=!1,u,l,d=0;function s(){u&&P(t,u)}function f(){const{delay:_=0,duration:c=300,easing:$=D,tick:h=w,css:g}=r||Z;g&&(u=V(t,0,1,c,_,$,g,d++)),h(0,1);const m=L()+_,E=m+c;l&&l.abort(),a=!0,O(()=>j(t,!0,"start")),l=U(C=>{if(a){if(C>=E)return h(1,0),j(t,!0,"end"),s(),a=!1;if(C>=m){const z=$((C-m)/c);h(z,1-z)}}return a})}let o=!1;return{start(){o||(o=!0,P(t),A(r)?(r=r(i),Y().then(f)):f())},invalidate(){o=!1},end(){a&&(s(),a=!1)}}}function xt(t,e,n){const i={direction:"out"};let r=e(t,n,i),a=!0,u;const l=y;l.r+=1;let d;function s(){const{delay:f=0,duration:o=300,easing:_=D,tick:c=w,css:$}=r||Z;$&&(u=V(t,1,0,o,f,_,$));const h=L()+f,g=h+o;O(()=>j(t,!1,"start")),"inert"in t&&(d=t.inert,t.inert=!0),U(m=>{if(a){if(m>=g)return c(0,1),j(t,!1,"end"),--l.r||v(l.c),!1;if(m>=h){const E=_((m-h)/o);c(1-E,E)}}return a})}return A(r)?Y().then(()=>{r=r(i),s()}):s(),{end(f){f&&"inert"in t&&(t.inert=d),f&&r.tick&&r.tick(1,0),a&&(u&&P(t,u),a=!1)}}}function vt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Et(t){t&&t.c()}function St(t,e){t&&t.l(e)}function lt(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),O(()=>{const a=t.$$.on_mount.map(nt).filter(A);t.$$.on_destroy?t.$$.on_destroy.push(...a):v(a),t.$$.on_mount=[]}),r.forEach(O)}function dt(t,e){const n=t.$$;n.fragment!==null&&(tt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(it.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ot(t,e,n,i,r,a,u,l=[-1]){const d=et;M(t);const s=t.$$={fragment:null,ctx:[],props:a,update:w,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:I(),dirty:l,skip_bound:!1,root:e.target||d.$$.root};u&&u(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(o,_,...c)=>{const $=c.length?c[0]:_;return s.ctx&&r(s.ctx[o],s.ctx[o]=$)&&(!s.skip_bound&&s.bound[o]&&s.bound[o]($),f&&_t(t,o)),_}):[],s.update(),f=!0,v(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){rt();const o=T(e.target);s.fragment&&s.fragment.l(o),o.forEach(B)}else s.fragment&&s.fragment.c();e.intro&&ct(t.$$.fragment),lt(t,e.target,e.anchor),at(),W()}M(d)}class bt{constructor(){N(this,"$$");N(this,"$$set")}$destroy(){dt(this,1),this.$destroy=w}$on(e,n){if(!A(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!X(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $t="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add($t);export{bt as S,ct as a,Et as b,yt as c,St as d,dt as e,vt as f,gt as g,wt as h,Ot as i,xt as j,lt as m,pt as t};
