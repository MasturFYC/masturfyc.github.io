import{p as b,s as a}from"./scheduler.04dfdf3d.js";const r=[];function h(e,o){return{subscribe:l(e,o).subscribe}}function l(e,o=b){let n;const i=new Set;function u(t){if(a(e,t)&&(e=t,n)){const c=!r.length;for(const s of i)s[1](),r.push(s,e);if(c){for(let s=0;s<r.length;s+=2)r[s][0](r[s+1]);r.length=0}}}function f(t){u(t(e))}function p(t,c=b){const s=[t,c];return i.add(s),i.size===1&&(n=o(u,f)||b),t(e),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:u,update:f,subscribe:p}}export{h as r,l as w};
