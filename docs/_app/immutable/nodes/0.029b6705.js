import{s as Pe,f as S,g as w,r as ie,j as g,i as G,u as oe,d as q,a as H,v as It,c as U,h as T,w as Qt,x as _,y as Ht,z as re,A as Ut,l as Se,m as we,B as Ct,C as Dt,D as Mt,E as kt,o as zt,F as Lt,G as Yt,p as xt,k as ot,H as Nt}from"../chunks/scheduler.6ec384de.js";import{S as Fe,i as Ae,a as ue,t as ce,b as Ne,d as Ke,m as Re,e as Be,f as Kt}from"../chunks/index.2b0a6367.js";import{e as J,u as De,d as Me}from"../chunks/each.4c624a1a.js";import{d as Rt,a as ke}from"../chunks/dayjs.min.6559d33b.js";import{c as je,g as Te}from"../chunks/_commonjsHelpers.725317a4.js";import{i as Bt,f as Gt,r as Vt,n as Y,t as Wt,e as Jt,g as qt,R as Zt,a as ze,b as Xt,c as z,S as Pt,h as St,p as Z,m as ut,M as es,d as ct,j as ht,k as Le,o as Ye,l as xe,q as qe,s as dt}from"../chunks/mutation.1fce78fe.js";const ts=!1,ss=!0,Ts=Object.freeze(Object.defineProperty({__proto__:null,prerender:ss,ssr:ts},Symbol.toStringTag,{value:"Module"}));function as(u){let e,t=`<div class="container has-text-centered"><div>Copyrigth ©
			<a href="https://masturfyc.github.io" target="_blank">FYC</a>
			2023. All rights reserved.</div> <div><a href="https://fontawesome.com/icons" target="_blank">Icon Referrences</a></div></div>`;return{c(){e=S("footer"),e.innerHTML=t,this.h()},l(s){e=w(s,"FOOTER",{class:!0,"data-svelte-h":!0}),ie(e)!=="svelte-6xn3ee"&&(e.innerHTML=t),this.h()},h(){g(e,"class","footer")},m(s,a){G(s,e,a)},p:oe,i:oe,o:oe,d(s){s&&q(e)}}}class is extends Fe{constructor(e){super(),Ae(this,e,null,as,Pe,{})}}const ns=""+new URL("../assets/logo.f53ae359.svg",import.meta.url).href;function ft(u,e,t){const s=u.slice();return s[14]=e[t],s}function vt(u,e,t){const s=u.slice();return s[14]=e[t],s}function mt(u,e,t){const s=u.slice();return s[14]=e[t],s}function gt(u,e,t){const s=u.slice();return s[21]=e[t],s}function pt(u,e){let t,s=e[21].name+"",a,i,o,r;function l(){return e[9](e[21])}return{key:u,first:null,c(){t=S("a"),a=Se(s),this.h()},l(f){t=w(f,"A",{class:!0,href:!0});var p=T(t);a=we(p,s),p.forEach(q),this.h()},h(){g(t,"class",i="navbar-item is-tab"+(e[2]===e[21].name?" is-active":"")),g(t,"href",e[21].href),this.first=t},m(f,p){G(f,t,p),_(t,a),o||(r=re(t,"click",l),o=!0)},p(f,p){e=f,p&4&&i!==(i="navbar-item is-tab"+(e[2]===e[21].name?" is-active":""))&&g(t,"class",i)},d(f){f&&q(t),o=!1,r()}}}function _t(u,e){let t,s=e[14].name+"",a,i,o;return{key:u,first:null,c(){t=S("a"),a=Se(s),this.h()},l(r){t=w(r,"A",{class:!0,href:!0});var l=T(t);a=we(l,s),l.forEach(q),this.h()},h(){g(t,"class","navbar-item"),g(t,"href",e[14].href),this.first=t},m(r,l){G(r,t,l),_(t,a),i||(o=re(t,"click",e[10]),i=!0)},p(r,l){e=r},d(r){r&&q(t),i=!1,o()}}}function bt(u,e){let t,s=e[14].name+"",a,i,o;return{key:u,first:null,c(){t=S("a"),a=Se(s),this.h()},l(r){t=w(r,"A",{class:!0,href:!0});var l=T(t);a=we(l,s),l.forEach(q),this.h()},h(){g(t,"class","navbar-item"),g(t,"href",e[14].href),this.first=t},m(r,l){G(r,t,l),_(t,a),i||(o=re(t,"click",e[11]),i=!0)},p(r,l){e=r},d(r){r&&q(t),i=!1,o()}}}function yt(u,e){let t,s=e[14].name+"",a,i,o;return{key:u,first:null,c(){t=S("a"),a=Se(s),this.h()},l(r){t=w(r,"A",{class:!0,href:!0});var l=T(t);a=we(l,s),l.forEach(q),this.h()},h(){g(t,"class","navbar-item"),g(t,"href",e[14].href),this.first=t},m(r,l){G(r,t,l),_(t,a),i||(o=re(t,"click",e[12]),i=!0)},p(r,l){e=r},d(r){r&&q(t),i=!1,o()}}}function rs(u){let e,t=`function statusChangeCallback(response) {
			// Called with the results from FB.getLoginStatus().
			// console.log('statusChangeCallback');
			// console.log(response);                   // The current login status of the person.
			if (response.status === 'connected') {
				// Logged into your webpage and Facebook.
				testAPI();
			} else {
				// Not logged into your webpage or we are unable to tell.
				document.getElementById('status').innerHTML = 'Please log ' + 'into this webpage.';
			}
		}

		function checkLoginState() {
			// Called when a person is finished with the Login Button.
			FB.getLoginStatus(function (response) {
				// See the onlogin handler
				statusChangeCallback(response);
			});
		}

		window.fbAsyncInit = function () {
			FB.init({
				appId: '1284186342222033',
				cookie: true,
				xfbml: true,
				version: 'v17.0'
			});

			FB.getLoginStatus(function (response) {
				// Called after the JS SDK has been initialized.
				statusChangeCallback(response); // Returns the login status.
			});
		};

		(function (d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.id = id;
			js.src = 'https://connect.facebook.net/en_US/sdk.js';
			fjs.parentNode.insertBefore(js, fjs);
		})(document, 'script', 'facebook-jssdk');

		function testAPI() {
			// Testing Graph API after login.  See statusChangeCallback() for when this call is made.
			//console.log('Welcome!  Fetching your information.... ');
			FB.api('/me', { locale: 'id_ID', fields: 'email,name' }, function (response) {
				//console.log('Successful login for: ' + response);
				document.getElementById('status').innerHTML =
					'<span id="username">' + response.email + '</span>!';
				document.getElementById('fb-login').style.display = 'none';
			});
		}`,s,a,i,o,r,l,f=`<img src="${ns}" width="64" height="28" alt="Logo"/>`,p,C,v,b,h,n,d,k,F,D,P,O=[],L=new Map,E,M,A,j="Download",I,K,$=[],le=new Map,V,$e,R,X,Ge="Blog",Ee,ee,x=[],Ve=new Map,he,Ie,B,te,We="Mikrotik",Qe,se,N=[],Je=new Map,de,He,ae,Ze='<div class="navbar-item"><div class="buttons"><div id="status"></div> <div class="fb-login-button" data-width="90" data-size="32" data-button-type="button" data-layout="" data-auto-logout-link="false" data-use-continue-as="false"></div> <div><fb:login-button id="fb-login" scope="public_profile,email" onlogin="checkLoginState();"></fb:login-button></div></div></div>',fe,Xe,Ue,et,ve=J(u[3]);const tt=c=>c[21].id;for(let c=0;c<ve.length;c+=1){let m=gt(u,ve,c),y=tt(m);L.set(y,O[c]=pt(y,m))}let me=J(u[4]);const st=c=>c[14].id;for(let c=0;c<me.length;c+=1){let m=mt(u,me,c),y=st(m);le.set(y,$[c]=_t(y,m))}let ge=J(u[5]);const at=c=>c[14].id;for(let c=0;c<ge.length;c+=1){let m=vt(u,ge,c),y=at(m);Ve.set(y,x[c]=bt(y,m))}let pe=J(u[6]);const it=c=>c[14].id;for(let c=0;c<pe.length;c+=1){let m=ft(u,pe,c),y=it(m);Je.set(y,N[c]=yt(y,m))}return{c(){e=S("script"),e.textContent=t,s=H(),a=S("nav"),i=S("div"),o=H(),r=S("div"),l=S("a"),l.innerHTML=f,p=H(),C=S("a"),v=S("span"),b=H(),h=S("span"),n=H(),d=S("span"),F=H(),D=S("div"),P=S("div");for(let c=0;c<O.length;c+=1)O[c].c();E=H(),M=S("div"),A=S("a"),A.textContent=j,I=H(),K=S("div");for(let c=0;c<$.length;c+=1)$[c].c();$e=H(),R=S("div"),X=S("a"),X.textContent=Ge,Ee=H(),ee=S("div");for(let c=0;c<x.length;c+=1)x[c].c();Ie=H(),B=S("div"),te=S("a"),te.textContent=We,Qe=H(),se=S("div");for(let c=0;c<N.length;c+=1)N[c].c();He=H(),ae=S("div"),ae.innerHTML=Ze,this.h()},l(c){const m=It("svelte-8fd957",document.head);e=w(m,"SCRIPT",{"data-svelte-h":!0}),ie(e)!=="svelte-oyfpt5"&&(e.textContent=t),m.forEach(q),s=U(c),a=w(c,"NAV",{class:!0,role:!0,"aria-label":!0});var y=T(a);i=w(y,"DIV",{id:!0}),T(i).forEach(q),o=U(y),r=w(y,"DIV",{class:!0});var _e=T(r);l=w(_e,"A",{class:!0,href:!0,"data-svelte-h":!0}),ie(l)!=="svelte-am315i"&&(l.innerHTML=f),p=U(_e),C=w(_e,"A",{role:!0,class:!0,"aria-label":!0,"aria-expanded":!0,"data-target":!0});var ne=T(C);v=w(ne,"SPAN",{"aria-hidden":!0}),T(v).forEach(q),b=U(ne),h=w(ne,"SPAN",{"aria-hidden":!0}),T(h).forEach(q),n=U(ne),d=w(ne,"SPAN",{"aria-hidden":!0}),T(d).forEach(q),ne.forEach(q),_e.forEach(q),F=U(y),D=w(y,"DIV",{id:!0,class:!0});var be=T(D);P=w(be,"DIV",{class:!0});var W=T(P);for(let Q=0;Q<O.length;Q+=1)O[Q].l(W);E=U(W),M=w(W,"DIV",{class:!0});var ye=T(M);A=w(ye,"A",{class:!0,"data-svelte-h":!0}),ie(A)!=="svelte-1fy36qp"&&(A.textContent=j),I=U(ye),K=w(ye,"DIV",{class:!0});var nt=T(K);for(let Q=0;Q<$.length;Q+=1)$[Q].l(nt);nt.forEach(q),ye.forEach(q),$e=U(W),R=w(W,"DIV",{class:!0});var Oe=T(R);X=w(Oe,"A",{class:!0,"data-svelte-h":!0}),ie(X)!=="svelte-1xtw61d"&&(X.textContent=Ge),Ee=U(Oe),ee=w(Oe,"DIV",{class:!0});var rt=T(ee);for(let Q=0;Q<x.length;Q+=1)x[Q].l(rt);rt.forEach(q),Oe.forEach(q),Ie=U(W),B=w(W,"DIV",{class:!0});var Ce=T(B);te=w(Ce,"A",{class:!0,"data-svelte-h":!0}),ie(te)!=="svelte-p34fk5"&&(te.textContent=We),Qe=U(Ce),se=w(Ce,"DIV",{class:!0});var lt=T(se);for(let Q=0;Q<N.length;Q+=1)N[Q].l(lt);lt.forEach(q),Ce.forEach(q),W.forEach(q),He=U(be),ae=w(be,"DIV",{class:!0,"data-svelte-h":!0}),ie(ae)!=="svelte-1bpb7dh"&&(ae.innerHTML=Ze),be.forEach(q),y.forEach(q),this.h()},h(){g(i,"id","fb-root"),g(l,"class","navbar-item"),g(l,"href","/"),g(v,"aria-hidden","true"),g(h,"aria-hidden","true"),g(d,"aria-hidden","true"),g(C,"role","button"),g(C,"class",k="navbar-burger"+(u[1]?" is-active":"")),g(C,"aria-label","menu"),g(C,"aria-expanded","false"),g(C,"data-target","navbarBasicExample"),g(r,"class","navbar-brand"),g(A,"class","navbar-link is-arrowless"),g(K,"class","navbar-dropdown"),g(M,"class",V="navbar-item has-dropdown is-hoverable"+(u[1]?" is-active":"")),g(X,"class","navbar-link is-arrowless"),g(ee,"class","navbar-dropdown"),g(R,"class",he="navbar-item has-dropdown is-hoverable"+(u[1]?" is-active":"")),g(te,"class","navbar-link is-arrowless"),g(se,"class","navbar-dropdown"),g(B,"class",de="navbar-item has-dropdown is-hoverable"+(u[1]?" is-active":"")),g(P,"class","navbar-start"),g(ae,"class","navbar-end"),g(D,"id","navbarBasicExample"),g(D,"class",fe="navbar-menu"+(u[1]?" is-active":"")),g(a,"class","navbar is-fixed-top is-primary"),g(a,"role","navigation"),g(a,"aria-label","main navigation"),Qt(()=>u[13].call(a))},m(c,m){_(document.head,e),G(c,s,m),G(c,a,m),_(a,i),_(a,o),_(a,r),_(r,l),_(r,p),_(r,C),_(C,v),_(C,b),_(C,h),_(C,n),_(C,d),_(a,F),_(a,D),_(D,P);for(let y=0;y<O.length;y+=1)O[y]&&O[y].m(P,null);_(P,E),_(P,M),_(M,A),_(M,I),_(M,K);for(let y=0;y<$.length;y+=1)$[y]&&$[y].m(K,null);_(P,$e),_(P,R),_(R,X),_(R,Ee),_(R,ee);for(let y=0;y<x.length;y+=1)x[y]&&x[y].m(ee,null);_(P,Ie),_(P,B),_(B,te),_(B,Qe),_(B,se);for(let y=0;y<N.length;y+=1)N[y]&&N[y].m(se,null);_(D,He),_(D,ae),Xe=Ht(a,u[13].bind(a)),Ue||(et=[re(l,"click",u[7]),re(C,"click",u[8])],Ue=!0)},p(c,[m]){m&2&&k!==(k="navbar-burger"+(c[1]?" is-active":""))&&g(C,"class",k),m&14&&(ve=J(c[3]),O=De(O,m,tt,1,c,ve,L,P,Me,pt,E,gt)),m&22&&(me=J(c[4]),$=De($,m,st,1,c,me,le,K,Me,_t,null,mt)),m&2&&V!==(V="navbar-item has-dropdown is-hoverable"+(c[1]?" is-active":""))&&g(M,"class",V),m&38&&(ge=J(c[5]),x=De(x,m,at,1,c,ge,Ve,ee,Me,bt,null,vt)),m&2&&he!==(he="navbar-item has-dropdown is-hoverable"+(c[1]?" is-active":""))&&g(R,"class",he),m&70&&(pe=J(c[6]),N=De(N,m,it,1,c,pe,Je,se,Me,yt,null,ft)),m&2&&de!==(de="navbar-item has-dropdown is-hoverable"+(c[1]?" is-active":""))&&g(B,"class",de),m&2&&fe!==(fe="navbar-menu"+(c[1]?" is-active":""))&&g(D,"class",fe)},i:oe,o:oe,d(c){c&&(q(s),q(a)),q(e);for(let m=0;m<O.length;m+=1)O[m].d();for(let m=0;m<$.length;m+=1)$[m].d();for(let m=0;m<x.length;m+=1)x[m].d();for(let m=0;m<N.length;m+=1)N[m].d();Xe(),Ue=!1,Ut(et)}}}function ls(u,e,t){let s=!1,a="",i=[{id:2,href:"/bilangan",name:"Bilangan"},{id:3,href:"/ketua-dprd",name:"Ketua DPRD"},{id:4,href:"/pt-gpm",name:"PT. Galuh Persada Makmur"}],o=[{id:1,href:"/undangan-tahlil",name:"Undangan Tahlil"},{id:2,href:"/pdam",name:"Kartu PDAM"},{id:3,href:"/label103",name:"Label-103"}],r=[{id:1,href:"/php-error-13",name:"php8.2-fpm Error 13"},{id:2,href:"/tailscale-up",name:"Networking menggunakan tailscale"},{id:3,href:"/nginx-php-fpm-config",name:"Nginx + PHP-FPM Configuration"},{id:4,href:"/ssh-background",name:"Run shh connection in background"},{id:5,href:"/zram",name:"Configure zram in Ubuntu 22.04"}],l=[{id:1,href:"/mikrotik",name:"User Status"}],{height:f}=e;const p=()=>t(1,s=!1),C=()=>t(1,s=!s),v=k=>{t(1,s=!1),t(2,a=k.name)},b=()=>{t(1,s=!1),t(2,a="")},h=()=>{t(1,s=!1),t(2,a="")},n=()=>{t(1,s=!1),t(2,a="")};function d(){f=this.clientHeight,t(0,f)}return u.$$set=k=>{"height"in k&&t(0,f=k.height)},[f,s,a,i,o,r,l,p,C,v,b,h,n,d]}class os extends Fe{constructor(e){super(),Ae(this,e,ls,rs,Pe,{height:0})}}class us{constructor(e){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=e.meta,this.scheduleGc()}setOptions(e){var t;this.options=Object.assign(Object.assign({},this.defaultOptions),e),this.meta=e==null?void 0:e.meta,this.cacheTime=Math.max(this.cacheTime||0,(t=this.options.cacheTime)!==null&&t!==void 0?t:5*60*1e3)}setDefaultOptions(e){this.defaultOptions=e}scheduleGc(){this.clearGcTimeout(),Bt(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}clearGcTimeout(){clearTimeout(this.gcTimeout),this.gcTimeout=void 0}optionalRemove(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))}setData(e,t){var s,a;const i=this.state.data;let o=Gt(e,i);return!((a=(s=this.options).isDataEqual)===null||a===void 0)&&a.call(s,i,o)?o=i:this.options.structuralSharing!==!1&&(o=Vt(i,o)),this.dispatch({data:o,type:"success",dataUpdatedAt:t==null?void 0:t.updatedAt}),o}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;const s=this.promise;return(t=this.retryer)===null||t===void 0||t.cancel(e),s?s.then(Y).catch(Y):Promise.resolve()}destroy(){this.clearGcTimeout(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>e.options.enabled!==!1)}isFetching(){return this.state.isFetching}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!Wt(this.state.dataUpdatedAt,e)}onFocus(){var e;const t=this.observers.find(s=>s.shouldFetchOnWindowFocus());t&&t.refetch(),(e=this.retryer)===null||e===void 0||e.continue()}onOnline(){var e;const t=this.observers.find(s=>s.shouldFetchOnReconnect());t&&t.refetch(),(e=this.retryer)===null||e===void 0||e.continue()}addObserver(e){this.observers.indexOf(e)===-1&&(this.observers.push(e),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.indexOf(e)!==-1&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var s,a,i,o,r,l;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(t!=null&&t.cancelRefetch))this.cancel({silent:!0});else if(this.promise)return(s=this.retryer)===null||s===void 0||s.continueRetry(),this.promise}if(e&&this.setOptions(e),!this.options.queryFn){const h=this.observers.find(n=>n.options.queryFn);h&&this.setOptions(h.options)}const f=Jt(this.queryKey),p=qt(),C={queryKey:f,pageParam:void 0,meta:this.meta};Object.defineProperty(C,"signal",{enumerable:!0,get:()=>{if(p)return this.abortSignalConsumed=!0,p.signal}});const v=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(C)):Promise.reject("Missing queryFn"),b={fetchOptions:t,options:this.options,queryKey:f,state:this.state,fetchFn:v,meta:this.meta};return!((a=this.options.behavior)===null||a===void 0)&&a.onFetch&&((i=this.options.behavior)===null||i===void 0||i.onFetch(b)),this.revertState=this.state,(!this.state.isFetching||this.state.fetchMeta!==((o=b.fetchOptions)===null||o===void 0?void 0:o.meta))&&this.dispatch({type:"fetch",meta:(r=b.fetchOptions)===null||r===void 0?void 0:r.meta}),this.retryer=new Zt({fn:b.fetchFn,abort:(l=p==null?void 0:p.abort)===null||l===void 0?void 0:l.bind(p),onSuccess:h=>{var n,d;this.setData(h),(d=(n=this.cache.config).onSuccess)===null||d===void 0||d.call(n,h,this),this.cacheTime===0&&this.optionalRemove()},onError:h=>{var n,d;ze(h)&&h.silent||this.dispatch({type:"error",error:h}),ze(h)||((d=(n=this.cache.config).onError)===null||d===void 0||d.call(n,h,this),Xt().error(h)),this.cacheTime===0&&this.optionalRemove()},onFail:()=>{this.dispatch({type:"failed"})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:b.options.retry,retryDelay:b.options.retryDelay}),this.promise=this.retryer.promise,this.promise}dispatch(e){this.state=this.reducer(this.state,e),z.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate(e)}),this.cache.notify({query:this,type:"queryUpdated",action:e})})}getDefaultState(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,a=typeof e.initialData<"u"?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0,i=typeof t<"u";return{data:t,dataUpdateCount:0,dataUpdatedAt:i?a??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:i?"success":"idle"}}reducer(e,t){var s,a;switch(t.type){case"failed":return Object.assign(Object.assign({},e),{fetchFailureCount:e.fetchFailureCount+1});case"pause":return Object.assign(Object.assign({},e),{isPaused:!0});case"continue":return Object.assign(Object.assign({},e),{isPaused:!1});case"fetch":return Object.assign(Object.assign(Object.assign({},e),{fetchFailureCount:0,fetchMeta:(s=t.meta)!==null&&s!==void 0?s:null,isFetching:!0,isPaused:!1}),!e.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Object.assign(Object.assign({},e),{data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:(a=t.dataUpdatedAt)!==null&&a!==void 0?a:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":const i=t.error;return ze(i)&&i.revert&&this.revertState?Object.assign({},this.revertState):Object.assign(Object.assign({},e),{error:i,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Object.assign(Object.assign({},e),{isInvalidated:!0});case"setState":return Object.assign(Object.assign({},e),t.state);default:return e}}}class wt extends Pt{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,s){var a;const i=t.queryKey,o=(a=t.queryHash)!==null&&a!==void 0?a:St(i,t);let r=this.get(o);return r||(r=new us({cache:this,queryKey:i,queryHash:o,options:e.defaultQueryOptions(t),state:s,defaultOptions:e.getQueryDefaults(i),meta:t.meta}),this.add(r)),r}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"queryAdded",query:e}))}remove(e){const t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter(s=>s!==e),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"queryRemoved",query:e}))}clear(){z.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){const[s]=Z(e,t);return typeof s.exact>"u"&&(s.exact=!0),this.queries.find(a=>ut(s,a))}findAll(e,t){const[s]=Z(e,t);return Object.keys(s).length>0?this.queries.filter(a=>ut(s,a)):this.queries}notify(e){z.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){z.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){z.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class Ft extends Pt{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,s){const a=new es({mutationCache:this,mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:s,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0,meta:t.meta});return this.add(a),a}add(e){this.mutations.push(e),this.notify(e)}remove(e){this.mutations=this.mutations.filter(t=>t!==e),e.cancel(),this.notify(e)}clear(){z.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return typeof e.exact>"u"&&(e.exact=!0),this.mutations.find(t=>ct(e,t))}findAll(e){return this.mutations.filter(t=>ct(e,t))}notify(e){z.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){this.resumePausedMutations()}onOnline(){this.resumePausedMutations()}resumePausedMutations(){const e=this.mutations.filter(t=>t.state.isPaused);return z.batch(()=>e.reduce((t,s)=>t.then(()=>s.continue().catch(Y)),Promise.resolve()))}}function cs(){return{onFetch:u=>{u.fetchFn=()=>{var e,t,s,a,i,o;const r=(t=(e=u.fetchOptions)===null||e===void 0?void 0:e.meta)===null||t===void 0?void 0:t.refetchPage,l=(a=(s=u.fetchOptions)===null||s===void 0?void 0:s.meta)===null||a===void 0?void 0:a.fetchMore,f=l==null?void 0:l.pageParam,p=(l==null?void 0:l.direction)==="forward",C=(l==null?void 0:l.direction)==="backward",v=((i=u.state.data)===null||i===void 0?void 0:i.pages)||[],b=((o=u.state.data)===null||o===void 0?void 0:o.pageParams)||[],h=qt(),n=h==null?void 0:h.signal;let d=b,k=!1;const F=u.options.queryFn||(()=>Promise.reject("Missing queryFn")),D=(M,A,j,I)=>(d=I?[A,...d]:[...d,A],I?[j,...M]:[...M,j]),P=(M,A,j,I)=>{if(k)return Promise.reject("Cancelled");if(typeof j>"u"&&!A&&M.length)return Promise.resolve(M);const K={queryKey:u.queryKey,signal:n,pageParam:j,meta:u.meta},$=F(K),le=Promise.resolve($).then(V=>D(M,j,V,I));if(ht($)){const V=le;V.cancel=$.cancel}return le};let O;if(!v.length)O=P([]);else if(p){const M=typeof f<"u",A=M?f:Ot(u.options,v);O=P(v,M,A)}else if(C){const M=typeof f<"u",A=M?f:hs(u.options,v);O=P(v,M,A,!0)}else{d=[];const M=typeof u.options.getNextPageParam>"u";O=(r&&v[0]?r(v[0],0,v):!0)?P([],M,b[0]):Promise.resolve(D([],b[0],v[0]));for(let j=1;j<v.length;j++)O=O.then(I=>{if(r&&v[j]?r(v[j],j,v):!0){const $=M?b[j]:Ot(u.options,I);return P(I,M,$)}return Promise.resolve(D(I,b[j],v[j]))})}const L=O.then(M=>({pages:M,pageParams:d})),E=L;return E.cancel=()=>{k=!0,h==null||h.abort(),ht(O)&&O.cancel()},L}}}}function Ot(u,e){var t;return(t=u.getNextPageParam)===null||t===void 0?void 0:t.call(u,e[e.length-1],e)}function hs(u,e){var t;return(t=u.getPreviousPageParam)===null||t===void 0?void 0:t.call(u,e[0],e)}class At{constructor(e={}){this.queryCache=e.queryCache||new wt,this.mutationCache=e.mutationCache||new Ft,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}mount(){this.unsubscribeFocus=Le.subscribe(()=>{Le.isFocused()&&Ye.isOnline()&&(this.mutationCache.onFocus(),this.queryCache.onFocus())}),this.unsubscribeOnline=Ye.subscribe(()=>{Le.isFocused()&&Ye.isOnline()&&(this.mutationCache.onOnline(),this.queryCache.onOnline())})}unmount(){var e,t;(e=this.unsubscribeFocus)===null||e===void 0||e.call(this),(t=this.unsubscribeOnline)===null||t===void 0||t.call(this)}isFetching(e,t){const[s]=Z(e,t);return s.fetching=!0,this.queryCache.findAll(s).length}isMutating(e){return this.mutationCache.findAll(Object.assign(Object.assign({},e),{fetching:!0})).length}getQueryData(e,t){var s;return(s=this.queryCache.find(e,t))===null||s===void 0?void 0:s.state.data}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:t,state:s})=>{const a=s.data;return[t,a]})}setQueryData(e,t,s){const a=xe(e),i=this.defaultQueryOptions(a);return this.queryCache.build(this,i).setData(t,s)}setQueriesData(e,t,s){return z.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:a})=>[a,this.setQueryData(a,t,s)]))}getQueryState(e,t){var s;return(s=this.queryCache.find(e,t))===null||s===void 0?void 0:s.state}removeQueries(e,t){const[s]=Z(e,t),a=this.queryCache;z.batch(()=>{a.findAll(s).forEach(i=>{a.remove(i)})})}resetQueries(e,t,s){const[a,i]=Z(e,t,s),o=this.queryCache,r=Object.assign(Object.assign({},a),{active:!0});return z.batch(()=>(o.findAll(a).forEach(l=>{l.reset()}),this.refetchQueries(r,i)))}cancelQueries(e,t,s){const[a,i={}]=Z(e,t,s);typeof i.revert>"u"&&(i.revert=!0);const o=z.batch(()=>this.queryCache.findAll(a).map(r=>r.cancel(i)));return Promise.all(o).then(Y).catch(Y)}invalidateQueries(e,t,s){var a,i,o;const[r,l]=Z(e,t,s),f=Object.assign(Object.assign({},r),{active:(i=(a=r.refetchActive)!==null&&a!==void 0?a:r.active)!==null&&i!==void 0?i:!0,inactive:(o=r.refetchInactive)!==null&&o!==void 0?o:!1});return z.batch(()=>(this.queryCache.findAll(r).forEach(p=>{p.invalidate()}),this.refetchQueries(f,l)))}refetchQueries(e,t,s){const[a,i]=Z(e,t,s),o=z.batch(()=>this.queryCache.findAll(a).map(l=>l.fetch(void 0,Object.assign(Object.assign({},i),{meta:{refetchPage:a==null?void 0:a.refetchPage}}))));let r=Promise.all(o).then(Y);return i!=null&&i.throwOnError||(r=r.catch(Y)),r}fetchQuery(e,t,s){const a=xe(e,t,s),i=this.defaultQueryOptions(a);typeof i.retry>"u"&&(i.retry=!1);const o=this.queryCache.build(this,i);return o.isStaleByTime(i.staleTime)?o.fetch(i):Promise.resolve(o.state.data)}prefetchQuery(e,t,s){return this.fetchQuery(e,t,s).then(Y).catch(Y)}fetchInfiniteQuery(e,t,s){const a=xe(e,t,s);return a.behavior=cs(),this.fetchQuery(a)}prefetchInfiniteQuery(e,t,s){return this.fetchInfiniteQuery(e,t,s).then(Y).catch(Y)}cancelMutations(){const e=z.batch(()=>this.mutationCache.getAll().map(t=>t.cancel()));return Promise.all(e).then(Y).catch(Y)}resumePausedMutations(){return this.getMutationCache().resumePausedMutations()}executeMutation(e){return this.mutationCache.build(this,e).execute()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){const s=this.queryDefaults.find(a=>qe(e)===qe(a.queryKey));s?s.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){var t;return e?(t=this.queryDefaults.find(s=>dt(e,s.queryKey)))===null||t===void 0?void 0:t.defaultOptions:void 0}setMutationDefaults(e,t){const s=this.mutationDefaults.find(a=>qe(e)===qe(a.mutationKey));s?s.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){var t;return e?(t=this.mutationDefaults.find(s=>dt(e,s.mutationKey)))===null||t===void 0?void 0:t.defaultOptions:void 0}defaultQueryOptions(e){if(e!=null&&e._defaulted)return e;const t=Object.assign(Object.assign(Object.assign(Object.assign({},this.defaultOptions.queries),this.getQueryDefaults(e==null?void 0:e.queryKey)),e),{_defaulted:!0});return!t.queryHash&&t.queryKey&&(t.queryHash=St(t.queryKey,t)),t}defaultQueryObserverOptions(e){return this.defaultQueryOptions(e)}defaultMutationOptions(e){return e!=null&&e._defaulted?e:Object.assign(Object.assign(Object.assign(Object.assign({},this.defaultOptions.mutations),this.getMutationDefaults(e==null?void 0:e.mutationKey)),e),{_defaulted:!0})}clear(){this.queryCache.clear(),this.mutationCache.clear()}}function ds(u){let e;const t=u[5].default,s=Ct(t,u,u[4],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,i){s&&s.m(a,i),e=!0},p(a,[i]){s&&s.p&&(!e||i&16)&&Dt(s,t,a,a[4],e?kt(t,a[4],i,null):Mt(a[4]),null)},i(a){e||(ue(s,a),e=!0)},o(a){ce(s,a),e=!1},d(a){s&&s.d(a)}}}function fs(u,e,t){let{$$slots:s={},$$scope:a}=e,{queryCache:i=new wt}=e,{mutationCache:o=new Ft}=e,{defaultOptions:r={}}=e,{client:l=new At({queryCache:i,mutationCache:o,defaultOptions:r})}=e;return zt(()=>{l.mount()}),Lt("queryClient",l),Yt(()=>{l.unmount()}),u.$$set=f=>{"queryCache"in f&&t(0,i=f.queryCache),"mutationCache"in f&&t(1,o=f.mutationCache),"defaultOptions"in f&&t(2,r=f.defaultOptions),"client"in f&&t(3,l=f.client),"$$scope"in f&&t(4,a=f.$$scope)},[i,o,r,l,a,s]}class vs extends Fe{constructor(e){super(),Ae(this,e,fs,ds,Pe,{queryCache:0,mutationCache:1,defaultOptions:2,client:3})}}const ms=vs;var jt={exports:{}};(function(u,e){(function(t,s){u.exports=s(Rt)})(je,function(t){function s(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var a=s(t),i={name:"id",weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),weekStart:1,formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},ordinal:function(o){return o+"."}};return a.default.locale(i,null,!0),i})})(jt);var gs=jt.exports;const ps=Te(gs);var Tt={exports:{}};(function(u,e){(function(t,s){u.exports=s()})(je,function(){return function(t,s){var a=s.prototype,i=a.format;a.format=function(o){var r=this,l=this.$locale();if(!this.isValid())return i.bind(this)(o);var f=this.$utils(),p=(o||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(C){switch(C){case"Q":return Math.ceil((r.$M+1)/3);case"Do":return l.ordinal(r.$D);case"gggg":return r.weekYear();case"GGGG":return r.isoWeekYear();case"wo":return l.ordinal(r.week(),"W");case"w":case"ww":return f.s(r.week(),C==="w"?1:2,"0");case"W":case"WW":return f.s(r.isoWeek(),C==="W"?1:2,"0");case"k":case"kk":return f.s(String(r.$H===0?24:r.$H),C==="k"?1:2,"0");case"X":return Math.floor(r.$d.getTime()/1e3);case"x":return r.$d.getTime();case"z":return"["+r.offsetName()+"]";case"zzz":return"["+r.offsetName("long")+"]";default:return C}});return i.bind(this)(p)}}})})(Tt);var _s=Tt.exports;const bs=Te(_s);var $t={exports:{}};(function(u,e){(function(t,s){u.exports=s()})(je,function(){var t={year:0,month:1,day:2,hour:3,minute:4,second:5},s={};return function(a,i,o){var r,l=function(v,b,h){h===void 0&&(h={});var n=new Date(v),d=function(k,F){F===void 0&&(F={});var D=F.timeZoneName||"short",P=k+"|"+D,O=s[P];return O||(O=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:k,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:D}),s[P]=O),O}(b,h);return d.formatToParts(n)},f=function(v,b){for(var h=l(v,b),n=[],d=0;d<h.length;d+=1){var k=h[d],F=k.type,D=k.value,P=t[F];P>=0&&(n[P]=parseInt(D,10))}var O=n[3],L=O===24?0:O,E=n[0]+"-"+n[1]+"-"+n[2]+" "+L+":"+n[4]+":"+n[5]+":000",M=+v;return(o.utc(E).valueOf()-(M-=M%1e3))/6e4},p=i.prototype;p.tz=function(v,b){v===void 0&&(v=r);var h=this.utcOffset(),n=this.toDate(),d=n.toLocaleString("en-US",{timeZone:v}),k=Math.round((n-new Date(d))/1e3/60),F=o(d).$set("millisecond",this.$ms).utcOffset(15*-Math.round(n.getTimezoneOffset()/15)-k,!0);if(b){var D=F.utcOffset();F=F.add(h-D,"minute")}return F.$x.$timezone=v,F},p.offsetName=function(v){var b=this.$x.$timezone||o.tz.guess(),h=l(this.valueOf(),b,{timeZoneName:v}).find(function(n){return n.type.toLowerCase()==="timezonename"});return h&&h.value};var C=p.startOf;p.startOf=function(v,b){if(!this.$x||!this.$x.$timezone)return C.call(this,v,b);var h=o(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return C.call(h,v,b).tz(this.$x.$timezone,!0)},o.tz=function(v,b,h){var n=h&&b,d=h||b||r,k=f(+o(),d);if(typeof v!="string")return o(v).tz(d);var F=function(L,E,M){var A=L-60*E*1e3,j=f(A,M);if(E===j)return[A,E];var I=f(A-=60*(j-E)*1e3,M);return j===I?[A,j]:[L-60*Math.min(j,I)*1e3,Math.max(j,I)]}(o.utc(v,n).valueOf(),k,d),D=F[0],P=F[1],O=o(D).utcOffset(P);return O.$x.$timezone=d,O},o.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},o.tz.setDefault=function(v){r=v}}})})($t);var ys=$t.exports;const Os=Te(ys);var Et={exports:{}};(function(u,e){(function(t,s){u.exports=s()})(je,function(){var t="minute",s=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(i,o,r){var l=o.prototype;r.utc=function(n){var d={date:n,utc:!0,args:arguments};return new o(d)},l.utc=function(n){var d=r(this.toDate(),{locale:this.$L,utc:!0});return n?d.add(this.utcOffset(),t):d},l.local=function(){return r(this.toDate(),{locale:this.$L,utc:!1})};var f=l.parse;l.parse=function(n){n.utc&&(this.$u=!0),this.$utils().u(n.$offset)||(this.$offset=n.$offset),f.call(this,n)};var p=l.init;l.init=function(){if(this.$u){var n=this.$d;this.$y=n.getUTCFullYear(),this.$M=n.getUTCMonth(),this.$D=n.getUTCDate(),this.$W=n.getUTCDay(),this.$H=n.getUTCHours(),this.$m=n.getUTCMinutes(),this.$s=n.getUTCSeconds(),this.$ms=n.getUTCMilliseconds()}else p.call(this)};var C=l.utcOffset;l.utcOffset=function(n,d){var k=this.$utils().u;if(k(n))return this.$u?0:k(this.$offset)?C.call(this):this.$offset;if(typeof n=="string"&&(n=function(O){O===void 0&&(O="");var L=O.match(s);if(!L)return null;var E=(""+L[0]).match(a)||["-",0,0],M=E[0],A=60*+E[1]+ +E[2];return A===0?0:M==="+"?A:-A}(n),n===null))return this;var F=Math.abs(n)<=16?60*n:n,D=this;if(d)return D.$offset=F,D.$u=n===0,D;if(n!==0){var P=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(D=this.local().add(F+P,t)).$offset=F,D.$x.$localOffset=P}else D=this.utc();return D};var v=l.format;l.format=function(n){var d=n||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return v.call(this,d)},l.valueOf=function(){var n=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*n},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var b=l.toDate;l.toDate=function(n){return n==="s"&&this.$offset?r(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():b.call(this)};var h=l.diff;l.diff=function(n,d,k){if(n&&this.$u===n.$u)return h.call(this,n,d,k);var F=this.local(),D=r(n).local();return h.call(F,D,d,k)}}})})(Et);var Cs=Et.exports;const Ds=Te(Cs);function Ms(u){let e,t,s,a,i,o,r,l,f,p;function C(n){u[3](n)}let v={};u[0]!==void 0&&(v.height=u[0]),e=new os({props:v}),xt.push(()=>Kt(e,"height",C));const b=u[2].default,h=Ct(b,u,u[4],null);return f=new is({}),{c(){Ne(e.$$.fragment),s=H(),a=S("div"),i=S("div"),o=S("section"),h&&h.c(),r=H(),l=S("div"),Ne(f.$$.fragment),this.h()},l(n){Ke(e.$$.fragment,n),s=U(n),a=w(n,"DIV",{class:!0,style:!0});var d=T(a);i=w(d,"DIV",{class:!0});var k=T(i);o=w(k,"SECTION",{class:!0});var F=T(o);h&&h.l(F),F.forEach(q),k.forEach(q),r=U(d),l=w(d,"DIV",{class:!0});var D=T(l);Ke(f.$$.fragment,D),D.forEach(q),d.forEach(q),this.h()},h(){g(o,"class","section"),g(i,"class","column"),g(l,"class","column is-narrow"),g(a,"class","columns is-gapless is-flex-direction-column m-0 p-0"),ot(a,"height","calc(100vh - "+u[0]+"px)")},m(n,d){Re(e,n,d),G(n,s,d),G(n,a,d),_(a,i),_(i,o),h&&h.m(o,null),_(a,r),_(a,l),Re(f,l,null),p=!0},p(n,d){const k={};!t&&d&1&&(t=!0,k.height=n[0],Nt(()=>t=!1)),e.$set(k),h&&h.p&&(!p||d&16)&&Dt(h,b,n,n[4],p?kt(b,n[4],d,null):Mt(n[4]),null),(!p||d&1)&&ot(a,"height","calc(100vh - "+n[0]+"px)")},i(n){p||(ue(e.$$.fragment,n),ue(h,n),ue(f.$$.fragment,n),p=!0)},o(n){ce(e.$$.fragment,n),ce(h,n),ce(f.$$.fragment,n),p=!1},d(n){n&&(q(s),q(a)),Be(e,n),h&&h.d(n),Be(f)}}}function ks(u){let e,t;return e=new ms({props:{client:u[1],$$slots:{default:[Ms]},$$scope:{ctx:u}}}),{c(){Ne(e.$$.fragment)},l(s){Ke(e.$$.fragment,s)},m(s,a){Re(e,s,a),t=!0},p(s,[a]){const i={};a&17&&(i.$$scope={dirty:a,ctx:s}),e.$set(i)},i(s){t||(ue(e.$$.fragment,s),t=!0)},o(s){ce(e.$$.fragment,s),t=!1},d(s){Be(e,s)}}}function qs(u,e,t){let{$$slots:s={},$$scope:a}=e;ke.locale(ps),ke.extend(Os),ke.extend(Ds),ke.extend(bs);const i=new At({defaultOptions:{queries:{refetchOnWindowFocus:!1,retry:!1}}});let o;function r(l){o=l,t(0,o)}return u.$$set=l=>{"$$scope"in l&&t(4,a=l.$$scope)},[o,i,s,r,a]}class $s extends Fe{constructor(e){super(),Ae(this,e,qs,ks,Pe,{})}}export{$s as component,Ts as universal};