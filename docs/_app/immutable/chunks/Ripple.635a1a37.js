import{s as q,e as D,i as H,d as S,F as I,G as pe,z as R,H as he,p as j,K as te,r as J,Y as Re,Z as Me,h as Q,_ as ne,B as U,u as T,v as N,w as Y,D as x,E as $,f as me,g as ve,a5 as P,q as ie,I as ge,x as Fe,y as He}from"./scheduler.6fc06158.js";import{S as ye,i as _e,t as M,c as be,a as F,g as Ae,b as re,d as Ue,m as ae,e as se}from"./index.56375d01.js";function k(a,e){const t={},n={},i={$$scope:1};let r=a.length;for(;r--;){const o=a[r],s=e[r];if(s){for(const l in o)l in s||(n[l]=1);for(const l in s)i[l]||(t[l]=s[l],i[l]=1);a[r]=s}else for(const l in o)i[l]=1}for(const o in n)o in t||(t[o]=void 0);return t}function O(a){return typeof a=="object"&&a!==null?a:{}}var K=function(a,e){return K=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},K(a,e)};function Le(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");K(a,e);function t(){this.constructor=a}a.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var L=function(){return L=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},L.apply(this,arguments)};function lt(a,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function s(c){try{u(n.next(c))}catch(f){o(f)}}function l(c){try{u(n.throw(c))}catch(f){o(f)}}function u(c){c.done?r(c.value):i(c.value).then(s,l)}u((n=n.apply(a,e||[])).next())})}function ut(a,e){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,i,r,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(u){return function(c){return l([u,c])}}function l(u){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(t=0)),t;)try{if(n=1,i&&(r=u[0]&2?i.return:u[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,u[1])).done)return r;switch(i=0,r&&(u=[u[0]&2,r.value]),u[0]){case 0:case 1:r=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,i=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!r||u[1]>r[0]&&u[1]<r[3])){t.label=u[1];break}if(u[0]===6&&t.label<r[1]){t.label=r[1],r=u;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(u);break}r[2]&&t.ops.pop(),t.trys.pop();continue}u=e.call(a,t)}catch(c){u=[6,c],i=0}finally{n=r=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function G(a){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&a[e],n=0;if(t)return t.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&n>=a.length&&(a=void 0),{value:a&&a[n++],done:!a}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ct(a,e){var t=typeof Symbol=="function"&&a[Symbol.iterator];if(!t)return a;var n=t.call(a),i,r=[],o;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)r.push(i.value)}catch(s){o={error:s}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return r}function ft(a,e,t){if(t||arguments.length===2)for(var n=0,i=e.length,r;n<i;n++)(r||!(n in e))&&(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return a.concat(r||Array.prototype.slice.call(e))}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ke=function(){function a(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(a,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),a.prototype.init=function(){},a.prototype.destroy=function(){},a}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Oe(a,e){if(a.closest)return a.closest(e);for(var t=a;t;){if(we(t,e))return t;t=t.parentElement}return null}function we(a,e){var t=a.matches||a.webkitMatchesSelector||a.msMatchesSelector;return t.call(a,e)}function Ge(a){var e=a;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var n=t.scrollWidth;return document.documentElement.removeChild(t),n}const ze=Object.freeze(Object.defineProperty({__proto__:null,closest:Oe,estimateScrollWidth:Ge,matches:we},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Be(a){return a===void 0&&(a=window),Ee(a)?{passive:!0}:!1}function Ee(a){a===void 0&&(a=window);var e=!1;try{var t={get passive(){return e=!0,!1}},n=function(){};a.document.addEventListener("test",n,t),a.document.removeEventListener("test",n,t)}catch{e=!1}return e}const je=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:Be},Symbol.toStringTag,{value:"Module"}));function W(a){return Object.entries(a).filter(([e,t])=>e!==""&&t).map(([e])=>e).join(" ")}function dt(a,e,t,n={bubbles:!0},i=!1){if(typeof Event>"u")throw new Error("Event not defined.");if(!a)throw new Error("Tried to dipatch event without element.");const r=new CustomEvent(e,Object.assign(Object.assign({},n),{detail:t}));if(a==null||a.dispatchEvent(r),i&&e.startsWith("SMUI")){const o=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},n),{detail:t}));a==null||a.dispatchEvent(o),o.defaultPrevented&&r.preventDefault()}return r}const oe=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,Ie=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function Se(a){let e,t=[];a.$on=(i,r)=>{let o=i,s=()=>{};return e?s=e(o,r):t.push([o,r]),o.match(oe)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',o),()=>{s()}};function n(i){const r=a.$$.callbacks[i.type];r&&r.slice().forEach(o=>o.call(this,i))}return i=>{const r=[],o={};e=(s,l)=>{let u=s,c=l,f=!1;const b=u.match(oe),_=u.match(Ie),d=b||_;if(u.match(/^SMUI:\w+:/)){const g=u.split(":");let v="";for(let A=0;A<g.length;A++)v+=A===g.length-1?":"+g[A]:g[A].split("-").map(p=>p.slice(0,1).toUpperCase()+p.slice(1)).join("");console.warn(`The event ${u.split("$")[0]} has been renamed to ${v.split("$")[0]}.`),u=v}if(d){const g=u.split(b?":":"$");u=g[0];const v=g.slice(1).reduce((A,p)=>(A[p]=!0,A),{});v.passive&&(f=f||{},f.passive=!0),v.nonpassive&&(f=f||{},f.passive=!1),v.capture&&(f=f||{},f.capture=!0),v.once&&(f=f||{},f.once=!0),v.preventDefault&&(c=Pe(c)),v.stopPropagation&&(c=qe(c)),v.stopImmediatePropagation&&(c=Xe(c)),v.self&&(c=We(i,c)),v.trusted&&(c=Ve(c))}const w=le(i,u,c,f),h=()=>{w();const g=r.indexOf(h);g>-1&&r.splice(g,1)};return r.push(h),u in o||(o[u]=le(i,u,n)),h};for(let s=0;s<t.length;s++)e(t[s][0],t[s][1]);return{destroy:()=>{for(let s=0;s<r.length;s++)r[s]();for(let s of Object.entries(o))s[1]()}}}}function le(a,e,t,n){return a.addEventListener(e,t,n),()=>a.removeEventListener(e,t,n)}function Pe(a){return function(e){return e.preventDefault(),a.call(this,e)}}function qe(a){return function(e){return e.stopPropagation(),a.call(this,e)}}function Xe(a){return function(e){return e.stopImmediatePropagation(),a.call(this,e)}}function We(a,e){return function(t){if(t.target===a)return e.call(this,t)}}function Ve(a){return function(e){if(e.isTrusted)return a.call(this,e)}}function ee(a,e){let t=[];if(e)for(let n=0;n<e.length;n++){const i=e[n],r=Array.isArray(i)?i[0]:i;Array.isArray(i)&&i.length>1?t.push(r(a,i[1])):t.push(r(a))}return{update(n){if((n&&n.length||0)!=t.length)throw new Error("You must not change the length of an actions array.");if(n)for(let i=0;i<n.length;i++){const r=t[i];if(r&&r.update){const o=n[i];Array.isArray(o)&&o.length>1?r.update(o[1]):r.update()}}},destroy(){for(let n=0;n<t.length;n++){const i=t[n];i&&i.destroy&&i.destroy()}}}}function Ze(a){let e=a[1],t,n,i=a[1]&&V(a);return{c(){i&&i.c(),t=D()},l(r){i&&i.l(r),t=D()},m(r,o){i&&i.m(r,o),H(r,t,o),n=!0},p(r,o){r[1]?e?q(e,r[1])?(i.d(1),i=V(r),e=r[1],i.c(),i.m(t.parentNode,t)):i.p(r,o):(i=V(r),e=r[1],i.c(),i.m(t.parentNode,t)):e&&(i.d(1),i=null,e=r[1])},i(r){n||(F(i,r),n=!0)},o(r){M(i,r),n=!1},d(r){r&&S(t),i&&i.d(r)}}}function Ke(a){let e=a[1],t,n=a[1]&&Z(a);return{c(){n&&n.c(),t=D()},l(i){n&&n.l(i),t=D()},m(i,r){n&&n.m(i,r),H(i,t,r)},p(i,r){i[1]?e?q(e,i[1])?(n.d(1),n=Z(i),e=i[1],n.c(),n.m(t.parentNode,t)):n.p(i,r):(n=Z(i),e=i[1],n.c(),n.m(t.parentNode,t)):e&&(n.d(1),n=null,e=i[1])},i:te,o:te,d(i){i&&S(t),n&&n.d(i)}}}function Je(a){let e,t,n,i,r;const o=a[8].default,s=J(o,a,a[7],null);let l=[a[5]],u={};for(let c=0;c<l.length;c+=1)u=R(u,l[c]);return{c(){e=Re("svg"),s&&s.c(),this.h()},l(c){e=Me(c,"svg",{});var f=Q(e);s&&s.l(f),f.forEach(S),this.h()},h(){ne(e,u)},m(c,f){H(c,e,f),s&&s.m(e,null),a[9](e),n=!0,i||(r=[U(t=ee.call(null,e,a[0])),U(a[4].call(null,e))],i=!0)},p(c,f){s&&s.p&&(!n||f&128)&&T(s,o,c,c[7],n?Y(o,c[7],f,null):N(c[7]),null),ne(e,u=k(l,[f&32&&c[5]])),t&&x(t.update)&&f&1&&t.update.call(null,c[0])},i(c){n||(F(s,c),n=!0)},o(c){M(s,c),n=!1},d(c){c&&S(e),s&&s.d(c),a[9](null),i=!1,$(r)}}}function V(a){let e,t,n,i,r;const o=a[8].default,s=J(o,a,a[7],null);let l=[a[5]],u={};for(let c=0;c<l.length;c+=1)u=R(u,l[c]);return{c(){e=me(a[1]),s&&s.c(),this.h()},l(c){e=ve(c,(a[1]||"null").toUpperCase(),{});var f=Q(e);s&&s.l(f),f.forEach(S),this.h()},h(){P(a[1])(e,u)},m(c,f){H(c,e,f),s&&s.m(e,null),a[11](e),n=!0,i||(r=[U(t=ee.call(null,e,a[0])),U(a[4].call(null,e))],i=!0)},p(c,f){s&&s.p&&(!n||f&128)&&T(s,o,c,c[7],n?Y(o,c[7],f,null):N(c[7]),null),P(c[1])(e,u=k(l,[f&32&&c[5]])),t&&x(t.update)&&f&1&&t.update.call(null,c[0])},i(c){n||(F(s,c),n=!0)},o(c){M(s,c),n=!1},d(c){c&&S(e),s&&s.d(c),a[11](null),i=!1,$(r)}}}function Z(a){let e,t,n,i,r=[a[5]],o={};for(let s=0;s<r.length;s+=1)o=R(o,r[s]);return{c(){e=me(a[1]),this.h()},l(s){e=ve(s,(a[1]||"null").toUpperCase(),{}),Q(e).forEach(S),this.h()},h(){P(a[1])(e,o)},m(s,l){H(s,e,l),a[10](e),n||(i=[U(t=ee.call(null,e,a[0])),U(a[4].call(null,e))],n=!0)},p(s,l){P(s[1])(e,o=k(r,[l&32&&s[5]])),t&&x(t.update)&&l&1&&t.update.call(null,s[0])},d(s){s&&S(e),a[10](null),n=!1,$(i)}}}function Qe(a){let e,t,n,i;const r=[Je,Ke,Ze],o=[];function s(l,u){return l[1]==="svg"?0:l[3]?1:2}return e=s(a),t=o[e]=r[e](a),{c(){t.c(),n=D()},l(l){t.l(l),n=D()},m(l,u){o[e].m(l,u),H(l,n,u),i=!0},p(l,[u]){let c=e;e=s(l),e===c?o[e].p(l,u):(Ae(),M(o[c],1,1,()=>{o[c]=null}),be(),t=o[e],t?t.p(l,u):(t=o[e]=r[e](l),t.c()),F(t,1),t.m(n.parentNode,n))},i(l){i||(F(t),i=!0)},o(l){M(t),i=!1},d(l){l&&S(n),o[e].d(l)}}}function Te(a,e,t){let n;const i=["use","tag","getElement"];let r=I(e,i),{$$slots:o={},$$scope:s}=e,{use:l=[]}=e,{tag:u}=e;const c=Se(pe());let f;function b(){return f}function _(h){j[h?"unshift":"push"](()=>{f=h,t(2,f)})}function d(h){j[h?"unshift":"push"](()=>{f=h,t(2,f)})}function w(h){j[h?"unshift":"push"](()=>{f=h,t(2,f)})}return a.$$set=h=>{e=R(R({},e),he(h)),t(5,r=I(e,i)),"use"in h&&t(0,l=h.use),"tag"in h&&t(1,u=h.tag),"$$scope"in h&&t(7,s=h.$$scope)},a.$$.update=()=>{a.$$.dirty&2&&t(3,n=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].indexOf(u)>-1)},[l,u,f,n,c,r,b,s,o,_,d,w]}class Ce extends ye{constructor(e){super(),_e(this,e,Te,Qe,q,{use:0,tag:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}function Ne(a){let e;const t=a[11].default,n=J(t,a,a[13],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&8192)&&T(n,t,i,i[13],e?Y(t,i[13],r,null):N(i[13]),null)},i(i){e||(F(n,i),e=!0)},o(i){M(n,i),e=!1},d(i){n&&n.d(i)}}}function Ye(a){let e,t,n;const i=[{tag:a[3]},{use:[a[8],...a[0]]},{class:W({[a[1]]:!0,[a[6]]:!0,...a[5]})},a[7],a[9]];var r=a[2];function o(s,l){let u={$$slots:{default:[Ne]},$$scope:{ctx:s}};if(l!==void 0&&l&1003)u=k(i,[l&8&&{tag:s[3]},l&257&&{use:[s[8],...s[0]]},l&98&&{class:W({[s[1]]:!0,[s[6]]:!0,...s[5]})},l&128&&O(s[7]),l&512&&O(s[9])]);else for(let c=0;c<i.length;c+=1)u=R(u,i[c]);return{props:u}}return r&&(e=ie(r,o(a)),a[12](e)),{c(){e&&re(e.$$.fragment),t=D()},l(s){e&&Ue(e.$$.fragment,s),t=D()},m(s,l){e&&ae(e,s,l),H(s,t,l),n=!0},p(s,[l]){if(l&4&&r!==(r=s[2])){if(e){Ae();const u=e;M(u.$$.fragment,1,0,()=>{se(u,1)}),be()}r?(e=ie(r,o(s,l)),s[12](e),re(e.$$.fragment),F(e.$$.fragment,1),ae(e,t.parentNode,t)):e=null}else if(r){const u=l&1003?k(i,[l&8&&{tag:s[3]},l&257&&{use:[s[8],...s[0]]},l&98&&{class:W({[s[1]]:!0,[s[6]]:!0,...s[5]})},l&128&&O(s[7]),l&512&&O(s[9])]):{};l&8192&&(u.$$scope={dirty:l,ctx:s}),e.$set(u)}},i(s){n||(e&&F(e.$$.fragment,s),n=!0)},o(s){e&&M(e.$$.fragment,s),n=!1},d(s){s&&S(t),a[12](null),e&&se(e,s)}}}const C={component:Ce,tag:"div",class:"",classMap:{},contexts:{},props:{}};function xe(a,e,t){const n=["use","class","component","tag","getElement"];let i=I(e,n),{$$slots:r={},$$scope:o}=e,{use:s=[]}=e,{class:l=""}=e,u;const c=C.class,f={},b=[],_=C.contexts,d=C.props;let{component:w=C.component}=e,{tag:h=w===Ce?C.tag:void 0}=e;Object.entries(C.classMap).forEach(([p,X])=>{const m=ge(X);m&&"subscribe"in m&&b.push(m.subscribe(y=>{t(5,f[p]=y,f)}))});const g=Se(pe());for(let p in _)_.hasOwnProperty(p)&&Fe(p,_[p]);He(()=>{for(const p of b)p()});function v(){return u.getElement()}function A(p){j[p?"unshift":"push"](()=>{u=p,t(4,u)})}return a.$$set=p=>{e=R(R({},e),he(p)),t(9,i=I(e,n)),"use"in p&&t(0,s=p.use),"class"in p&&t(1,l=p.class),"component"in p&&t(2,w=p.component),"tag"in p&&t(3,h=p.tag),"$$scope"in p&&t(13,o=p.$$scope)},[s,l,w,h,u,f,c,d,g,i,v,r,A,o]}class $e extends ye{constructor(e){super(),_e(this,e,xe,Ye,q,{use:0,class:1,component:2,tag:3,getElement:10})}get getElement(){return this.$$.ctx[10]}}const ue=Object.assign({},C);function pt(a){return new Proxy($e,{construct:function(e,t){return Object.assign(C,ue,a),new e(...t)},get:function(e,t){return Object.assign(C,ue,a),e[t]}})}var z;function et(a,e){e===void 0&&(e=!1);var t=a.CSS,n=z;if(typeof z=="boolean"&&!e)return z;var i=t&&typeof t.supports=="function";if(!i)return!1;var r=t.supports("--css-vars","yes"),o=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return n=r||o,e||(z=n),n}function tt(a,e,t){if(!a)return{x:0,y:0};var n=e.x,i=e.y,r=n+t.left,o=i+t.top,s,l;if(a.type==="touchstart"){var u=a;s=u.changedTouches[0].pageX-r,l=u.changedTouches[0].pageY-o}else{var c=a;s=c.pageX-r,l=c.pageY-o}return{x:s,y:l}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var nt={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},it={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},ce={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var fe=["touchstart","pointerdown","mousedown","keydown"],de=["touchend","pointerup","mouseup","contextmenu"],B=[],rt=function(a){Le(e,a);function e(t){var n=a.call(this,L(L({},e.defaultAdapter),t))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(i){n.activateImpl(i)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return nt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return it},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ce},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var i=e.cssClasses,r=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(r),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(i),t.adapter.removeClass(r),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var n,i;if(t){try{for(var r=G(fe),o=r.next();!o.done;o=r.next()){var s=o.value;this.adapter.registerInteractionHandler(s,this.activateHandler)}}catch(l){n={error:l}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var n,i;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=G(de),o=r.next();!o.done;o=r.next()){var s=o.value;this.adapter.registerDocumentInteractionHandler(s,this.deactivateHandler)}}catch(l){n={error:l}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},e.prototype.deregisterRootHandlers=function(){var t,n;try{for(var i=G(fe),r=i.next();!r.done;r=i.next()){var o=r.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=G(de),r=i.next();!r.done;r=i.next()){var o=r.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,n=e.strings,i=Object.keys(n);i.forEach(function(r){r.indexOf("VAR_")===0&&t.adapter.updateCssVariable(n[r],null)})},e.prototype.activateImpl=function(t){var n=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var r=this.previousActivationEvent,o=r&&t!==void 0&&r.type!==t.type;if(!o){i.isActivated=!0,i.isProgrammatic=t===void 0,i.activationEvent=t,i.wasActivatedByPointer=i.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var s=t!==void 0&&B.length>0&&B.some(function(l){return n.adapter.containsEventTarget(l)});if(s){this.resetActivationState();return}t!==void 0&&(B.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){B=[],!i.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(i.wasElementMadeActive=n.checkElementMadeActive(t),i.wasElementMadeActive&&n.animateActivation()),i.wasElementMadeActive||(n.activationState=n.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,s=o.FG_DEACTIVATION,l=o.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var c="",f="";if(!this.adapter.isUnbounded()){var b=this.getFgTranslationCoordinates(),_=b.startPoint,d=b.endPoint;c=_.x+"px, "+_.y+"px",f=d.x+"px, "+d.y+"px"}this.adapter.updateCssVariable(i,c),this.adapter.updateCssVariable(r,f),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(s),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},u)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,n=t.activationEvent,i=t.wasActivatedByPointer,r;i?r=tt(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState,r=i.hasDeactivationUXRun,o=i.isActivated,s=r||!o;s&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(n)},ce.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,n=this.activationState;if(n.isActivated){var i=L({},n);n.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(i),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var n=t.wasActivatedByPointer,i=t.wasElementMadeActive;(n||i)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width),i=function(){var o=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?n:i();var r=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!==0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,r=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},e}(ke);const{applyPassive:E}=je,{matches:at}=ze;function ht(a,{ripple:e=!0,surface:t=!1,unbounded:n=!1,disabled:i=!1,color:r,active:o,rippleElement:s,eventTarget:l,activeTarget:u,addClass:c=d=>a.classList.add(d),removeClass:f=d=>a.classList.remove(d),addStyle:b=(d,w)=>a.style.setProperty(d,w),initPromise:_=Promise.resolve()}={}){let d,w=ge("SMUI:addLayoutListener"),h,g=o,v=l,A=u;function p(){t?(c("mdc-ripple-surface"),r==="primary"?(c("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")):r==="secondary"?(f("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")):(f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary"))):(f("mdc-ripple-surface"),f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")),d&&g!==o&&(g=o,o?d.activate():o===!1&&d.deactivate()),e&&!d?(d=new rt({addClass:c,browserSupportsCssVars:()=>et(window),computeBoundingRect:()=>(s||a).getBoundingClientRect(),containsEventTarget:m=>a.contains(m),deregisterDocumentInteractionHandler:(m,y)=>document.documentElement.removeEventListener(m,y,E()),deregisterInteractionHandler:(m,y)=>(l||a).removeEventListener(m,y,E()),deregisterResizeHandler:m=>window.removeEventListener("resize",m),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>o??at(u||a,":active"),isSurfaceDisabled:()=>!!i,isUnbounded:()=>!!n,registerDocumentInteractionHandler:(m,y)=>document.documentElement.addEventListener(m,y,E()),registerInteractionHandler:(m,y)=>(l||a).addEventListener(m,y,E()),registerResizeHandler:m=>window.addEventListener("resize",m),removeClass:f,updateCssVariable:b}),_.then(()=>{d&&(d.init(),d.setUnbounded(n))})):d&&!e&&_.then(()=>{d&&(d.destroy(),d=void 0)}),d&&(v!==l||A!==u)&&(v=l,A=u,d.destroy(),requestAnimationFrame(()=>{d&&(d.init(),d.setUnbounded(n))})),!e&&n&&c("mdc-ripple-upgraded--unbounded")}p(),w&&(h=w(X));function X(){d&&d.layout()}return{update(m){({ripple:e,surface:t,unbounded:n,disabled:i,color:r,active:o,rippleElement:s,eventTarget:l,activeTarget:u,addClass:c,removeClass:f,addStyle:b,initPromise:_}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:y=>a.classList.add(y),removeClass:y=>a.classList.remove(y),addStyle:(y,De)=>a.style.setProperty(y,De),initPromise:Promise.resolve()},m)),p()},destroy(){d&&(d.destroy(),d=void 0,f("mdc-ripple-surface"),f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")),h&&h()}}}export{ke as M,ht as R,Ce as S,Le as _,L as a,pt as b,W as c,dt as d,O as e,Se as f,k as g,ct as h,lt as i,ut as j,G as k,ft as l,je as m,ze as p,ee as u};