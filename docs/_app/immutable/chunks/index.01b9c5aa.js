const H="application/json",R="Content-Type",p=Symbol(),w=Symbol();function O(t={}){var e;return(e=Object.entries(t).find(([o])=>o.toLowerCase()===R.toLowerCase()))===null||e===void 0?void 0:e[1]}function A(t){return/^application\/.*json.*/.test(t)}const u=function(t,e,o=!1){return Object.entries(e).reduce((n,[i,h])=>{const l=t[i];return Array.isArray(l)&&Array.isArray(h)?n[i]=o?[...l,...h]:h:typeof l=="object"&&typeof h=="object"?n[i]=u(l,h,o):n[i]=h,n},{...t})},_={options:{},errorType:"text",polyfills:{},polyfill(t,e=!0,o=!1,...n){const i=this.polyfills[t]||(typeof self<"u"?self[t]:null)||(typeof global<"u"?global[t]:null);if(e&&!i)throw new Error(t+" is not defined");return o&&i?new i(...n):i}};function L(t,e=!1){_.options=e?t:u(_.options,t)}function D(t,e=!1){_.polyfills=e?t:u(_.polyfills,t)}function F(t){_.errorType=t}const N=t=>e=>t.reduceRight((o,n)=>n(o),e)||e;class S extends Error{}const J=t=>{const e=Object.create(null);t=t._addons.reduce((r,s)=>s.beforeRequest&&s.beforeRequest(r,t._options,e)||r,t);const{_url:o,_options:n,_config:i,_catchers:h,_resolvers:l,_middlewares:E,_addons:x}=t,f=new Map(h),P=u(i.options,n);let T=o;const v=N(E)((r,s)=>(T=r,i.polyfill("fetch")(r,s)))(o,P),b=new Error,j=v.catch(r=>{throw{[p]:r}}).then(r=>{if(!r.ok){const s=new S;if(s.cause=b,s.stack=s.stack+`
CAUSE: `+b.stack,s.response=r,s.url=T,r.type==="opaque")throw s;return r.text().then(a=>{var c;if(s.message=a,i.errorType==="json"||((c=r.headers.get("Content-Type"))===null||c===void 0?void 0:c.split(";")[0])==="application/json")try{s.json=JSON.parse(a)}catch{}throw s.text=a,s.status=r.status,s})}return r}),m=r=>r.catch(s=>{const a=s.hasOwnProperty(p),c=a?s[p]:s,g=(c==null?void 0:c.status)&&f.get(c.status)||f.get(c==null?void 0:c.name)||a&&f.has(p)&&f.get(p);if(g)return g(c,t);const C=f.get(w);if(C)return C(c,t);throw c}),d=r=>s=>m(r?j.then(a=>a&&a[r]()).then(a=>s?s(a):a):j.then(a=>s?s(a):a)),M={_wretchReq:t,_fetchReq:v,_sharedState:e,res:d(null),json:d("json"),blob:d("blob"),formData:d("formData"),arrayBuffer:d("arrayBuffer"),text:d("text"),error(r,s){return f.set(r,s),this},badRequest(r){return this.error(400,r)},unauthorized(r){return this.error(401,r)},forbidden(r){return this.error(403,r)},notFound(r){return this.error(404,r)},timeout(r){return this.error(408,r)},internalError(r){return this.error(500,r)},fetchError(r){return this.error(p,r)}},q=x.reduce((r,s)=>({...r,...s.resolver}),M);return l.reduce((r,s)=>s(r,t),q)},k={_url:"",_options:{},_config:_,_catchers:new Map,_resolvers:[],_deferred:[],_middlewares:[],_addons:[],addon(t){return{...this,_addons:[...this._addons,t],...t.wretch}},errorType(t){return{...this,_config:{...this._config,errorType:t}}},polyfills(t,e=!1){return{...this,_config:{...this._config,polyfills:e?t:u(this._config.polyfills,t)}}},url(t,e=!1){if(e)return{...this,_url:t};const o=this._url.split("?");return{...this,_url:o.length>1?o[0]+t+"?"+o[1]:this._url+t}},options(t,e=!1){return{...this,_options:e?t:u(this._options,t)}},headers(t){return{...this,_options:u(this._options,{headers:t||{}})}},accept(t){return this.headers({Accept:t})},content(t){return this.headers({[R]:t})},auth(t){return this.headers({Authorization:t})},catcher(t,e){const o=new Map(this._catchers);return o.set(t,e),{...this,_catchers:o}},catcherFallback(t){return this.catcher(w,t)},resolve(t,e=!1){return{...this,_resolvers:e?[t]:[...this._resolvers,t]}},defer(t,e=!1){return{...this,_deferred:e?[t]:[...this._deferred,t]}},middlewares(t,e=!1){return{...this,_middlewares:e?t:[...this._middlewares,...t]}},fetch(t=this._options.method,e="",o=null){let n=this.url(e).options({method:t});const i=O(n._options.headers),h=typeof o=="object"&&(!n._options.headers||!i||A(i));return n=o?h?n.json(o,i):n.body(o):n,J(n._deferred.reduce((l,E)=>E(l,l._url,l._options),n))},get(t=""){return this.fetch("GET",t)},delete(t=""){return this.fetch("DELETE",t)},put(t,e=""){return this.fetch("PUT",e,t)},post(t,e=""){return this.fetch("POST",e,t)},patch(t,e=""){return this.fetch("PATCH",e,t)},head(t=""){return this.fetch("HEAD",t)},opts(t=""){return this.fetch("OPTIONS",t)},body(t){return{...this,_options:{...this._options,body:t}}},json(t,e){const o=O(this._options.headers);return this.content(e||A(o)&&o||H).body(JSON.stringify(t))}};function y(t="",e={}){return{...k,_url:t,_options:e}}y.default=y;y.options=L;y.errorType=F;y.polyfills=D;y.WretchError=S;export{y as f};
