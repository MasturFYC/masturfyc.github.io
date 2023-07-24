import{s as q,k as P,l as pe,h as D,m as me,b as E,p as te,c as K,i as U,u as Q,g as N,d as T,j as Y,r as $,n as he,e as Me,f as Re}from"./scheduler.04dfdf3d.js";import{S as ve,i as ge,e as M,a as H,t as R,b as ye,d as F,f as S,p as _e,E as Fe,F as He,j as x,M as ne,g as be,h as Ae,N as I,q as ie,r as re,u as Ue,v as ae,w as se}from"./index.a2ecf332.js";function O(r,e){const t={},n={},i={$$scope:1};let a=r.length;for(;a--;){const o=r[a],s=e[a];if(s){for(const l in o)l in s||(n[l]=1);for(const l in s)i[l]||(t[l]=s[l],i[l]=1);r[a]=s}else for(const l in o)i[l]=1}for(const o in n)o in t||(t[o]=void 0);return t}function k(r){return typeof r=="object"&&r!==null?r:{}}var J=function(r,e){return J=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},J(r,e)};function Le(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");J(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var L=function(){return L=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},L.apply(this,arguments)};function G(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],n=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function lt(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var n=t.call(r),i,a=[],o;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)a.push(i.value)}catch(s){o={error:s}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return a}function ut(r,e,t){if(t||arguments.length===2)for(var n=0,i=e.length,a;n<i;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return r.concat(a||Array.prototype.slice.call(e))}/**
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
 */var Oe=function(){function r(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(r,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),r.prototype.init=function(){},r.prototype.destroy=function(){},r}();/**
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
 */function ke(r,e){if(r.closest)return r.closest(e);for(var t=r;t;){if(we(t,e))return t;t=t.parentElement}return null}function we(r,e){var t=r.matches||r.webkitMatchesSelector||r.msMatchesSelector;return t.call(r,e)}function Ge(r){var e=r;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var n=t.scrollWidth;return document.documentElement.removeChild(t),n}const je=Object.freeze(Object.defineProperty({__proto__:null,closest:ke,estimateScrollWidth:Ge,matches:we},Symbol.toStringTag,{value:"Module"}));/**
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
 */function ze(r){return r===void 0&&(r=window),Be(r)?{passive:!0}:!1}function Be(r){r===void 0&&(r=window);var e=!1;try{var t={get passive(){return e=!0,!1}},n=function(){};r.document.addEventListener("test",n,t),r.document.removeEventListener("test",n,t)}catch{e=!1}return e}const Ee=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:ze},Symbol.toStringTag,{value:"Module"}));function W(r){return Object.entries(r).filter(([e,t])=>e!==""&&t).map(([e])=>e).join(" ")}function ct(r,e,t,n={bubbles:!0},i=!1){if(typeof Event>"u")throw new Error("Event not defined.");if(!r)throw new Error("Tried to dipatch event without element.");const a=new CustomEvent(e,Object.assign(Object.assign({},n),{detail:t}));if(r==null||r.dispatchEvent(a),i&&e.startsWith("SMUI")){const o=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},n),{detail:t}));r==null||r.dispatchEvent(o),o.defaultPrevented&&a.preventDefault()}return a}const oe=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,Pe=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function Se(r){let e,t=[];r.$on=(i,a)=>{let o=i,s=()=>{};return e?s=e(o,a):t.push([o,a]),o.match(oe)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',o),()=>{s()}};function n(i){const a=r.$$.callbacks[i.type];a&&a.slice().forEach(o=>o.call(this,i))}return i=>{const a=[],o={};e=(s,l)=>{let f=s,u=l,c=!1;const b=f.match(oe),_=f.match(Pe),d=b||_;if(f.match(/^SMUI:\w+:/)){const g=f.split(":");let v="";for(let A=0;A<g.length;A++)v+=A===g.length-1?":"+g[A]:g[A].split("-").map(p=>p.slice(0,1).toUpperCase()+p.slice(1)).join("");console.warn(`The event ${f.split("$")[0]} has been renamed to ${v.split("$")[0]}.`),f=v}if(d){const g=f.split(b?":":"$");f=g[0];const v=g.slice(1).reduce((A,p)=>(A[p]=!0,A),{});v.passive&&(c=c||{},c.passive=!0),v.nonpassive&&(c=c||{},c.passive=!1),v.capture&&(c=c||{},c.capture=!0),v.once&&(c=c||{},c.once=!0),v.preventDefault&&(u=Ie(u)),v.stopPropagation&&(u=qe(u)),v.stopImmediatePropagation&&(u=Xe(u)),v.self&&(u=We(i,u)),v.trusted&&(u=Ve(u))}const w=le(i,f,u,c),m=()=>{w();const g=a.indexOf(m);g>-1&&a.splice(g,1)};return a.push(m),f in o||(o[f]=le(i,f,n)),m};for(let s=0;s<t.length;s++)e(t[s][0],t[s][1]);return{destroy:()=>{for(let s=0;s<a.length;s++)a[s]();for(let s of Object.entries(o))s[1]()}}}}function le(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function Ie(r){return function(e){return e.preventDefault(),r.call(this,e)}}function qe(r){return function(e){return e.stopPropagation(),r.call(this,e)}}function Xe(r){return function(e){return e.stopImmediatePropagation(),r.call(this,e)}}function We(r,e){return function(t){if(t.target===r)return e.call(this,t)}}function Ve(r){return function(e){if(e.isTrusted)return r.call(this,e)}}function ee(r,e){let t=[];if(e)for(let n=0;n<e.length;n++){const i=e[n],a=Array.isArray(i)?i[0]:i;Array.isArray(i)&&i.length>1?t.push(a(r,i[1])):t.push(a(r))}return{update(n){if((n&&n.length||0)!=t.length)throw new Error("You must not change the length of an actions array.");if(n)for(let i=0;i<n.length;i++){const a=t[i];if(a&&a.update){const o=n[i];Array.isArray(o)&&o.length>1?a.update(o[1]):a.update()}}},destroy(){for(let n=0;n<t.length;n++){const i=t[n];i&&i.destroy&&i.destroy()}}}}function Ze(r){let e=r[1],t,n,i=r[1]&&V(r);return{c(){i&&i.c(),t=M()},l(a){i&&i.l(a),t=M()},m(a,o){i&&i.m(a,o),H(a,t,o),n=!0},p(a,o){a[1]?e?q(e,a[1])?(i.d(1),i=V(a),e=a[1],i.c(),i.m(t.parentNode,t)):i.p(a,o):(i=V(a),e=a[1],i.c(),i.m(t.parentNode,t)):e&&(i.d(1),i=null,e=a[1])},i(a){n||(F(i,a),n=!0)},o(a){R(i,a),n=!1},d(a){a&&S(t),i&&i.d(a)}}}function Je(r){let e=r[1],t,n=r[1]&&Z(r);return{c(){n&&n.c(),t=M()},l(i){n&&n.l(i),t=M()},m(i,a){n&&n.m(i,a),H(i,t,a)},p(i,a){i[1]?e?q(e,i[1])?(n.d(1),n=Z(i),e=i[1],n.c(),n.m(t.parentNode,t)):n.p(i,a):(n=Z(i),e=i[1],n.c(),n.m(t.parentNode,t)):e&&(n.d(1),n=null,e=i[1])},i:te,o:te,d(i){i&&S(t),n&&n.d(i)}}}function Ke(r){let e,t,n,i,a;const o=r[8].default,s=K(o,r,r[7],null);let l=[r[5]],f={};for(let u=0;u<l.length;u+=1)f=D(f,l[u]);return{c(){e=Fe("svg"),s&&s.c(),this.h()},l(u){e=He(u,"svg",{});var c=x(e);s&&s.l(c),c.forEach(S),this.h()},h(){ne(e,f)},m(u,c){H(u,e,c),s&&s.m(e,null),r[9](e),n=!0,i||(a=[U(t=ee.call(null,e,r[0])),U(r[4].call(null,e))],i=!0)},p(u,c){s&&s.p&&(!n||c&128)&&Q(s,o,u,u[7],n?T(o,u[7],c,null):N(u[7]),null),ne(e,f=O(l,[c&32&&u[5]])),t&&Y(t.update)&&c&1&&t.update.call(null,u[0])},i(u){n||(F(s,u),n=!0)},o(u){R(s,u),n=!1},d(u){u&&S(e),s&&s.d(u),r[9](null),i=!1,$(a)}}}function V(r){let e,t,n,i,a;const o=r[8].default,s=K(o,r,r[7],null);let l=[r[5]],f={};for(let u=0;u<l.length;u+=1)f=D(f,l[u]);return{c(){e=be(r[1]),s&&s.c(),this.h()},l(u){e=Ae(u,(r[1]||"null").toUpperCase(),{});var c=x(e);s&&s.l(c),c.forEach(S),this.h()},h(){I(r[1])(e,f)},m(u,c){H(u,e,c),s&&s.m(e,null),r[11](e),n=!0,i||(a=[U(t=ee.call(null,e,r[0])),U(r[4].call(null,e))],i=!0)},p(u,c){s&&s.p&&(!n||c&128)&&Q(s,o,u,u[7],n?T(o,u[7],c,null):N(u[7]),null),I(u[1])(e,f=O(l,[c&32&&u[5]])),t&&Y(t.update)&&c&1&&t.update.call(null,u[0])},i(u){n||(F(s,u),n=!0)},o(u){R(s,u),n=!1},d(u){u&&S(e),s&&s.d(u),r[11](null),i=!1,$(a)}}}function Z(r){let e,t,n,i,a=[r[5]],o={};for(let s=0;s<a.length;s+=1)o=D(o,a[s]);return{c(){e=be(r[1]),this.h()},l(s){e=Ae(s,(r[1]||"null").toUpperCase(),{}),x(e).forEach(S),this.h()},h(){I(r[1])(e,o)},m(s,l){H(s,e,l),r[10](e),n||(i=[U(t=ee.call(null,e,r[0])),U(r[4].call(null,e))],n=!0)},p(s,l){I(s[1])(e,o=O(a,[l&32&&s[5]])),t&&Y(t.update)&&l&1&&t.update.call(null,s[0])},d(s){s&&S(e),r[10](null),n=!1,$(i)}}}function Qe(r){let e,t,n,i;const a=[Ke,Je,Ze],o=[];function s(l,f){return l[1]==="svg"?0:l[3]?1:2}return e=s(r),t=o[e]=a[e](r),{c(){t.c(),n=M()},l(l){t.l(l),n=M()},m(l,f){o[e].m(l,f),H(l,n,f),i=!0},p(l,[f]){let u=e;e=s(l),e===u?o[e].p(l,f):(_e(),R(o[u],1,1,()=>{o[u]=null}),ye(),t=o[e],t?t.p(l,f):(t=o[e]=a[e](l),t.c()),F(t,1),t.m(n.parentNode,n))},i(l){i||(F(t),i=!0)},o(l){R(t),i=!1},d(l){l&&S(n),o[e].d(l)}}}function Ne(r,e,t){let n;const i=["use","tag","getElement"];let a=P(e,i),{$$slots:o={},$$scope:s}=e,{use:l=[]}=e,{tag:f}=e;const u=Se(pe());let c;function b(){return c}function _(m){E[m?"unshift":"push"](()=>{c=m,t(2,c)})}function d(m){E[m?"unshift":"push"](()=>{c=m,t(2,c)})}function w(m){E[m?"unshift":"push"](()=>{c=m,t(2,c)})}return r.$$set=m=>{e=D(D({},e),me(m)),t(5,a=P(e,i)),"use"in m&&t(0,l=m.use),"tag"in m&&t(1,f=m.tag),"$$scope"in m&&t(7,s=m.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&t(3,n=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].indexOf(f)>-1)},[l,f,c,n,u,a,b,s,o,_,d,w]}class Ce extends ve{constructor(e){super(),ge(this,e,Ne,Qe,q,{use:0,tag:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}function Te(r){let e;const t=r[11].default,n=K(t,r,r[13],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,a){n&&n.m(i,a),e=!0},p(i,a){n&&n.p&&(!e||a&8192)&&Q(n,t,i,i[13],e?T(t,i[13],a,null):N(i[13]),null)},i(i){e||(F(n,i),e=!0)},o(i){R(n,i),e=!1},d(i){n&&n.d(i)}}}function Ye(r){let e,t,n;const i=[{tag:r[3]},{use:[r[8],...r[0]]},{class:W({[r[1]]:!0,[r[6]]:!0,...r[5]})},r[7],r[9]];var a=r[2];function o(s,l){let f={$$slots:{default:[Te]},$$scope:{ctx:s}};if(l!==void 0&&l&1003)f=O(i,[l&8&&{tag:s[3]},l&257&&{use:[s[8],...s[0]]},l&98&&{class:W({[s[1]]:!0,[s[6]]:!0,...s[5]})},l&128&&k(s[7]),l&512&&k(s[9])]);else for(let u=0;u<i.length;u+=1)f=D(f,i[u]);return{props:f}}return a&&(e=ie(a,o(r)),r[12](e)),{c(){e&&re(e.$$.fragment),t=M()},l(s){e&&Ue(e.$$.fragment,s),t=M()},m(s,l){e&&ae(e,s,l),H(s,t,l),n=!0},p(s,[l]){if(l&4&&a!==(a=s[2])){if(e){_e();const f=e;R(f.$$.fragment,1,0,()=>{se(f,1)}),ye()}a?(e=ie(a,o(s,l)),s[12](e),re(e.$$.fragment),F(e.$$.fragment,1),ae(e,t.parentNode,t)):e=null}else if(a){const f=l&1003?O(i,[l&8&&{tag:s[3]},l&257&&{use:[s[8],...s[0]]},l&98&&{class:W({[s[1]]:!0,[s[6]]:!0,...s[5]})},l&128&&k(s[7]),l&512&&k(s[9])]):{};l&8192&&(f.$$scope={dirty:l,ctx:s}),e.$set(f)}},i(s){n||(e&&F(e.$$.fragment,s),n=!0)},o(s){e&&R(e.$$.fragment,s),n=!1},d(s){s&&S(t),r[12](null),e&&se(e,s)}}}const C={component:Ce,tag:"div",class:"",classMap:{},contexts:{},props:{}};function $e(r,e,t){const n=["use","class","component","tag","getElement"];let i=P(e,n),{$$slots:a={},$$scope:o}=e,{use:s=[]}=e,{class:l=""}=e,f;const u=C.class,c={},b=[],_=C.contexts,d=C.props;let{component:w=C.component}=e,{tag:m=w===Ce?C.tag:void 0}=e;Object.entries(C.classMap).forEach(([p,X])=>{const h=he(X);h&&"subscribe"in h&&b.push(h.subscribe(y=>{t(5,c[p]=y,c)}))});const g=Se(pe());for(let p in _)_.hasOwnProperty(p)&&Me(p,_[p]);Re(()=>{for(const p of b)p()});function v(){return f.getElement()}function A(p){E[p?"unshift":"push"](()=>{f=p,t(4,f)})}return r.$$set=p=>{e=D(D({},e),me(p)),t(9,i=P(e,n)),"use"in p&&t(0,s=p.use),"class"in p&&t(1,l=p.class),"component"in p&&t(2,w=p.component),"tag"in p&&t(3,m=p.tag),"$$scope"in p&&t(13,o=p.$$scope)},[s,l,w,m,f,c,u,d,g,i,v,a,A,o]}class xe extends ve{constructor(e){super(),ge(this,e,$e,Ye,q,{use:0,class:1,component:2,tag:3,getElement:10})}get getElement(){return this.$$.ctx[10]}}const ue=Object.assign({},C);function ft(r){return new Proxy(xe,{construct:function(e,t){return Object.assign(C,ue,r),new e(...t)},get:function(e,t){return Object.assign(C,ue,r),e[t]}})}var j;function et(r,e){e===void 0&&(e=!1);var t=r.CSS,n=j;if(typeof j=="boolean"&&!e)return j;var i=t&&typeof t.supports=="function";if(!i)return!1;var a=t.supports("--css-vars","yes"),o=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return n=a||o,e||(j=n),n}function tt(r,e,t){if(!r)return{x:0,y:0};var n=e.x,i=e.y,a=n+t.left,o=i+t.top,s,l;if(r.type==="touchstart"){var f=r;s=f.changedTouches[0].pageX-a,l=f.changedTouches[0].pageY-o}else{var u=r;s=u.pageX-a,l=u.pageY-o}return{x:s,y:l}}/**
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
 */var fe=["touchstart","pointerdown","mousedown","keydown"],de=["touchend","pointerup","mouseup","contextmenu"],z=[],rt=function(r){Le(e,r);function e(t){var n=r.call(this,L(L({},e.defaultAdapter),t))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(i){n.activateImpl(i)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return nt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return it},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ce},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var i=e.cssClasses,a=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(a),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,a=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(i),t.adapter.removeClass(a),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var n,i;if(t){try{for(var a=G(fe),o=a.next();!o.done;o=a.next()){var s=o.value;this.adapter.registerInteractionHandler(s,this.activateHandler)}}catch(l){n={error:l}}finally{try{o&&!o.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var n,i;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var a=G(de),o=a.next();!o.done;o=a.next()){var s=o.value;this.adapter.registerDocumentInteractionHandler(s,this.deactivateHandler)}}catch(l){n={error:l}}finally{try{o&&!o.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}},e.prototype.deregisterRootHandlers=function(){var t,n;try{for(var i=G(fe),a=i.next();!a.done;a=i.next()){var o=a.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(s){t={error:s}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=G(de),a=i.next();!a.done;a=i.next()){var o=a.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(s){t={error:s}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,n=e.strings,i=Object.keys(n);i.forEach(function(a){a.indexOf("VAR_")===0&&t.adapter.updateCssVariable(n[a],null)})},e.prototype.activateImpl=function(t){var n=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var a=this.previousActivationEvent,o=a&&t!==void 0&&a.type!==t.type;if(!o){i.isActivated=!0,i.isProgrammatic=t===void 0,i.activationEvent=t,i.wasActivatedByPointer=i.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var s=t!==void 0&&z.length>0&&z.some(function(l){return n.adapter.containsEventTarget(l)});if(s){this.resetActivationState();return}t!==void 0&&(z.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){z=[],!i.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(i.wasElementMadeActive=n.checkElementMadeActive(t),i.wasElementMadeActive&&n.animateActivation()),i.wasElementMadeActive||(n.activationState=n.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,a=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,s=o.FG_DEACTIVATION,l=o.FG_ACTIVATION,f=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",c="";if(!this.adapter.isUnbounded()){var b=this.getFgTranslationCoordinates(),_=b.startPoint,d=b.endPoint;u=_.x+"px, "+_.y+"px",c=d.x+"px, "+d.y+"px"}this.adapter.updateCssVariable(i,u),this.adapter.updateCssVariable(a,c),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(s),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},f)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,n=t.activationEvent,i=t.wasActivatedByPointer,a;i?a=tt(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):a={x:this.frame.width/2,y:this.frame.height/2},a={x:a.x-this.initialSize/2,y:a.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:a,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState,a=i.hasDeactivationUXRun,o=i.isActivated,s=a||!o;s&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(n)},ce.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,n=this.activationState;if(n.isActivated){var i=L({},n);n.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(i),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var n=t.wasActivatedByPointer,i=t.wasElementMadeActive;(n||i)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width),i=function(){var o=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?n:i();var a=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&a%2!==0?this.initialSize=a-1:this.initialSize=a,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,a=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(a,this.unboundedCoords.top+"px"))},e}(Oe);const{applyPassive:B}=Ee,{matches:at}=je;function dt(r,{ripple:e=!0,surface:t=!1,unbounded:n=!1,disabled:i=!1,color:a,active:o,rippleElement:s,eventTarget:l,activeTarget:f,addClass:u=d=>r.classList.add(d),removeClass:c=d=>r.classList.remove(d),addStyle:b=(d,w)=>r.style.setProperty(d,w),initPromise:_=Promise.resolve()}={}){let d,w=he("SMUI:addLayoutListener"),m,g=o,v=l,A=f;function p(){t?(u("mdc-ripple-surface"),a==="primary"?(u("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")):a==="secondary"?(c("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):(c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary"))):(c("mdc-ripple-surface"),c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")),d&&g!==o&&(g=o,o?d.activate():o===!1&&d.deactivate()),e&&!d?(d=new rt({addClass:u,browserSupportsCssVars:()=>et(window),computeBoundingRect:()=>(s||r).getBoundingClientRect(),containsEventTarget:h=>r.contains(h),deregisterDocumentInteractionHandler:(h,y)=>document.documentElement.removeEventListener(h,y,B()),deregisterInteractionHandler:(h,y)=>(l||r).removeEventListener(h,y,B()),deregisterResizeHandler:h=>window.removeEventListener("resize",h),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>o??at(f||r,":active"),isSurfaceDisabled:()=>!!i,isUnbounded:()=>!!n,registerDocumentInteractionHandler:(h,y)=>document.documentElement.addEventListener(h,y,B()),registerInteractionHandler:(h,y)=>(l||r).addEventListener(h,y,B()),registerResizeHandler:h=>window.addEventListener("resize",h),removeClass:c,updateCssVariable:b}),_.then(()=>{d&&(d.init(),d.setUnbounded(n))})):d&&!e&&_.then(()=>{d&&(d.destroy(),d=void 0)}),d&&(v!==l||A!==f)&&(v=l,A=f,d.destroy(),requestAnimationFrame(()=>{d&&(d.init(),d.setUnbounded(n))})),!e&&n&&u("mdc-ripple-upgraded--unbounded")}p(),w&&(m=w(X));function X(){d&&d.layout()}return{update(h){({ripple:e,surface:t,unbounded:n,disabled:i,color:a,active:o,rippleElement:s,eventTarget:l,activeTarget:f,addClass:u,removeClass:c,addStyle:b,initPromise:_}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:y=>r.classList.add(y),removeClass:y=>r.classList.remove(y),addStyle:(y,De)=>r.style.setProperty(y,De),initPromise:Promise.resolve()},h)),p()},destroy(){d&&(d.destroy(),d=void 0,c("mdc-ripple-surface"),c("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")),m&&m()}}}export{Oe as M,dt as R,Ce as S,Le as _,L as a,ft as b,W as c,ct as d,k as e,Se as f,O as g,G as h,ut as i,lt as j,Ee as k,je as p,ee as u};
