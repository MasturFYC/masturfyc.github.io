import{t as z,a as B}from"./index.4fbda23c.js";import{E as C}from"./scheduler.8f106bd9.js";function G(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function H(n,o){z(n,1,1,()=>{o.delete(n.key)})}function I(n,o,x,A,E,p,d,j,y,k,w,q){let i=n.length,f=p.length,c=i;const u={};for(;c--;)u[n[c].key]=c;const h=[],a=new Map,m=new Map,M=[];for(c=f;c--;){const e=q(E,p,c),s=x(e);let t=d.get(s);t?A&&M.push(()=>t.p(e,o)):(t=k(s,e),t.c()),a.set(s,h[c]=t),s in u&&m.set(s,Math.abs(c-u[s]))}const v=new Set,S=new Set;function g(e){B(e,1),e.m(j,w),d.set(e.key,e),w=e.first,f--}for(;i&&f;){const e=h[f-1],s=n[i-1],t=e.key,l=s.key;e===s?(w=e.first,i--,f--):a.has(l)?!d.has(t)||v.has(t)?g(e):S.has(l)?i--:m.get(t)>m.get(l)?(S.add(t),g(e)):(v.add(l),i--):(y(s,d),i--)}for(;i--;){const e=n[i];a.has(e.key)||y(e,d)}for(;f;)g(h[f-1]);return C(M),h}export{G as e,H as o,I as u};
