import{a as B}from"./index.f0883218.js";import{y as C}from"./scheduler.a1a79cf5.js";function F(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function G(n,w){n.d(1),w.delete(n.key)}function H(n,w,x,A,j,g,d,k,p,q,u,z){let i=n.length,f=g.length,c=i;const o={};for(;c--;)o[n[c].key]=c;const h=[],a=new Map,m=new Map,M=[];for(c=f;c--;){const e=z(j,g,c),s=x(e);let t=d.get(s);t?A&&M.push(()=>t.p(e,w)):(t=q(s,e),t.c()),a.set(s,h[c]=t),s in o&&m.set(s,Math.abs(c-o[s]))}const v=new Set,S=new Set;function y(e){B(e,1),e.m(k,u),d.set(e.key,e),u=e.first,f--}for(;i&&f;){const e=h[f-1],s=n[i-1],t=e.key,l=s.key;e===s?(u=e.first,i--,f--):a.has(l)?!d.has(t)||v.has(t)?y(e):S.has(l)?i--:m.get(t)>m.get(l)?(S.add(t),y(e)):(v.add(l),i--):(p(s,d),i--)}for(;i--;){const e=n[i];a.has(e.key)||p(e,d)}for(;f;)y(h[f-1]);return C(M),h}export{G as d,F as e,H as u};
