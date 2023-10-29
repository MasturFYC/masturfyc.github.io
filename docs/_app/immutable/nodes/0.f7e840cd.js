import{s as ct,n as G,r as Ot,c as It,d as jt,u as Ft,g as Bt,e as Nt}from"../chunks/scheduler.95ca1de1.js";import{S as ft,i as dt,g as k,s as I,x as Ct,h as D,y as W,f as d,c as j,j as H,k as s,z as g,a as B,A as at,m as Yt,n as xt,B as Ut,r as bt,u as $t,v as yt,d as lt,t as ut,w as Mt}from"../chunks/index.541b2b8c.js";import{e as et,u as kt,d as Dt}from"../chunks/each.86d4a212.js";import{d as Pt,a as nt}from"../chunks/dayjs.min.6559d33b.js";import{c as st,g as rt}from"../chunks/_commonjsHelpers.725317a4.js";const Vt=!1,Wt=!0,me=Object.freeze(Object.defineProperty({__proto__:null,prerender:Wt,ssr:Vt},Symbol.toStringTag,{value:"Module"})),Gt=""+new URL("../assets/logo.f53ae359.svg",import.meta.url).href;function St(f,n,e){const a=f.slice();return a[9]=n[e],a}function wt(f,n,e){const a=f.slice();return a[12]=n[e],a}function Tt(f,n){let e,a=n[12].name+"",l,h,r,i;function o(){return n[6](n[12])}return{key:f,first:null,c(){e=k("a"),l=Yt(a),this.h()},l(T){e=D(T,"A",{class:!0,href:!0});var E=H(e);l=xt(E,a),E.forEach(d),this.h()},h(){s(e,"class",h="navbar-item is-tab"+(n[1]===n[12].name?" is-active":"")),s(e,"href",n[12].href),this.first=e},m(T,E){B(T,e,E),g(e,l),r||(i=at(e,"click",o),r=!0)},p(T,E){n=T,E&2&&h!==(h="navbar-item is-tab"+(n[1]===n[12].name?" is-active":""))&&s(e,"class",h)},d(T){T&&d(e),r=!1,i()}}}function Et(f,n){let e,a=n[9].name+"",l,h,r;return{key:f,first:null,c(){e=k("a"),l=Yt(a),this.h()},l(i){e=D(i,"A",{class:!0,href:!0});var o=H(e);l=xt(o,a),o.forEach(d),this.h()},h(){s(e,"class","navbar-item"),s(e,"href",n[9].href),this.first=e},m(i,o){B(i,e,o),g(e,l),h||(r=at(e,"click",n[7]),h=!0)},p(i,o){n=i},d(i){i&&d(e),h=!1,r()}}}function Jt(f){let n,e=`function statusChangeCallback(response) {
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
		}`,a,l,h,r,i,o,T=`<img src="${Gt}" width="64" height="28" alt="Logo"/>`,E,p,$,S,y,t,m,C,M,_,Y,u=[],v=new Map,b,x,L,A="Download",F,N,O=[],ht=new Map,J,it,U,mt='<div class="navbar-item"><div class="buttons"><div id="status"></div> <div class="fb-login-button" data-width="90" data-size="32" data-button-type="button" data-layout="" data-auto-logout-link="false" data-use-continue-as="false"></div> <div><fb:login-button id="fb-login" scope="public_profile,email" onlogin="checkLoginState();"></fb:login-button></div></div></div>',R,ot,pt,Z=et(f[2]);const vt=c=>c[12].id;for(let c=0;c<Z.length;c+=1){let w=wt(f,Z,c),z=vt(w);v.set(z,u[c]=Tt(z,w))}let K=et(f[3]);const _t=c=>c[9].id;for(let c=0;c<K.length;c+=1){let w=St(f,K,c),z=_t(w);ht.set(z,O[c]=Et(z,w))}return{c(){n=k("script"),n.textContent=e,a=I(),l=k("div"),h=I(),r=k("nav"),i=k("div"),o=k("a"),o.innerHTML=T,E=I(),p=k("a"),$=k("span"),S=I(),y=k("span"),t=I(),m=k("span"),M=I(),_=k("div"),Y=k("div");for(let c=0;c<u.length;c+=1)u[c].c();b=I(),x=k("div"),L=k("a"),L.textContent=A,F=I(),N=k("div");for(let c=0;c<O.length;c+=1)O[c].c();it=I(),U=k("div"),U.innerHTML=mt,this.h()},l(c){const w=Ct("svelte-8fd957",document.head);n=D(w,"SCRIPT",{"data-svelte-h":!0}),W(n)!=="svelte-oyfpt5"&&(n.textContent=e),w.forEach(d),a=j(c),l=D(c,"DIV",{id:!0}),H(l).forEach(d),h=j(c),r=D(c,"NAV",{class:!0,role:!0,"aria-label":!0});var z=H(r);i=D(z,"DIV",{class:!0});var q=H(i);o=D(q,"A",{class:!0,href:!0,"data-svelte-h":!0}),W(o)!=="svelte-1ldv3pi"&&(o.innerHTML=T),E=j(q),p=D(q,"A",{role:!0,class:!0,"aria-label":!0,"aria-expanded":!0,"data-target":!0});var V=H(p);$=D(V,"SPAN",{"aria-hidden":!0}),H($).forEach(d),S=j(V),y=D(V,"SPAN",{"aria-hidden":!0}),H(y).forEach(d),t=j(V),m=D(V,"SPAN",{"aria-hidden":!0}),H(m).forEach(d),V.forEach(d),q.forEach(d),M=j(z),_=D(z,"DIV",{id:!0,class:!0});var Q=H(_);Y=D(Q,"DIV",{class:!0});var X=H(Y);for(let P=0;P<u.length;P+=1)u[P].l(X);b=j(X),x=D(X,"DIV",{class:!0});var tt=H(x);L=D(tt,"A",{class:!0,"data-svelte-h":!0}),W(L)!=="svelte-1fy36qp"&&(L.textContent=A),F=j(tt),N=D(tt,"DIV",{class:!0});var gt=H(N);for(let P=0;P<O.length;P+=1)O[P].l(gt);gt.forEach(d),tt.forEach(d),X.forEach(d),it=j(Q),U=D(Q,"DIV",{class:!0,"data-svelte-h":!0}),W(U)!=="svelte-nrwna5"&&(U.innerHTML=mt),Q.forEach(d),z.forEach(d),this.h()},h(){s(l,"id","fb-root"),s(o,"class","navbar-item"),s(o,"href","/"),s($,"aria-hidden","true"),s(y,"aria-hidden","true"),s(m,"aria-hidden","true"),s(p,"role","button"),s(p,"class",C="navbar-burger"+(f[0]?" is-active":"")),s(p,"aria-label","menu"),s(p,"aria-expanded","false"),s(p,"data-target","navbarBasicExample"),s(i,"class","navbar-brand"),s(L,"class","navbar-link is-arrowless"),s(N,"class","navbar-dropdown"),s(x,"class",J="navbar-item has-dropdown is-hoverable"+(f[0]?" is-active":"")),s(Y,"class","navbar-start"),s(U,"class","navbar-end"),s(_,"id","navbarBasicExample"),s(_,"class",R="navbar-menu"+(f[0]?" is-active":"")),s(r,"class","navbar is-fixed-top"),s(r,"role","navigation"),s(r,"aria-label","main navigation")},m(c,w){g(document.head,n),B(c,a,w),B(c,l,w),B(c,h,w),B(c,r,w),g(r,i),g(i,o),g(i,E),g(i,p),g(p,$),g(p,S),g(p,y),g(p,t),g(p,m),g(r,M),g(r,_),g(_,Y);for(let z=0;z<u.length;z+=1)u[z]&&u[z].m(Y,null);g(Y,b),g(Y,x),g(x,L),g(x,F),g(x,N);for(let z=0;z<O.length;z+=1)O[z]&&O[z].m(N,null);g(_,it),g(_,U),ot||(pt=[at(o,"click",f[4]),at(p,"click",f[5])],ot=!0)},p(c,[w]){w&1&&C!==(C="navbar-burger"+(c[0]?" is-active":""))&&s(p,"class",C),w&7&&(Z=et(c[2]),u=kt(u,w,vt,1,c,Z,v,Y,Dt,Tt,b,wt)),w&11&&(K=et(c[3]),O=kt(O,w,_t,1,c,K,ht,N,Dt,Et,null,St)),w&1&&J!==(J="navbar-item has-dropdown is-hoverable"+(c[0]?" is-active":""))&&s(x,"class",J),w&1&&R!==(R="navbar-menu"+(c[0]?" is-active":""))&&s(_,"class",R)},i:G,o:G,d(c){c&&(d(a),d(l),d(h),d(r)),d(n);for(let w=0;w<u.length;w+=1)u[w].d();for(let w=0;w<O.length;w+=1)O[w].d();ot=!1,Ot(pt)}}}function Rt(f,n,e){let a=!1,l="";return[a,l,[{id:2,href:"/bilangan",name:"Bilangan"},{id:3,href:"/ketua-dprd",name:"Ketua DPRD"},{id:4,href:"/pt-gpm",name:"PT. Galuh Persada Makmur"}],[{id:1,href:"/undangan-tahlil",name:"Undangan Tahlil"},{id:2,href:"/pdam",name:"Kartu PDAM"},{id:3,href:"/label103",name:"Label-103"}],()=>e(0,a=!1),()=>e(0,a=!a),p=>{e(0,a=!1),e(1,l=p.name)},()=>{e(0,a=!1),e(1,l="")}]}class Zt extends ft{constructor(n){super(),dt(this,n,Rt,Jt,ct,{})}}function Kt(f){let n,e=`<div>Copyrigth ©
		<a href="https://masturfyc.github.io" target="_blank">FYC</a>
		2023. All rights reserved.</div> <div><a href="https://fontawesome.com/icons" target="_blank">Icon Referrences</a></div>`,a;return{c(){n=k("footer"),n.innerHTML=e,this.h()},l(l){n=D(l,"FOOTER",{class:!0,"data-svelte-h":!0}),W(n)!=="svelte-dihtzs"&&(n.innerHTML=e),this.h()},h(){s(n,"class","footer px-4"),It(()=>f[1].call(n))},m(l,h){B(l,n,h),a=Ut(n,f[1].bind(n))},p:G,i:G,o:G,d(l){l&&d(n),a()}}}function qt(f,n,e){let{height:a=0}=n;function l(){a=this.clientHeight,e(0,a)}return f.$$set=h=>{"height"in h&&e(0,a=h.height)},[a,l]}class Qt extends ft{constructor(n){super(),dt(this,n,qt,Kt,ct,{height:0})}}var zt={exports:{}};(function(f,n){(function(e,a){f.exports=a()})(st,function(){var e="minute",a=/[+-]\d\d(?::?\d\d)?/g,l=/([+-]|\d\d)/g;return function(h,r,i){var o=r.prototype;i.utc=function(t){var m={date:t,utc:!0,args:arguments};return new r(m)},o.utc=function(t){var m=i(this.toDate(),{locale:this.$L,utc:!0});return t?m.add(this.utcOffset(),e):m},o.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var T=o.parse;o.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),T.call(this,t)};var E=o.init;o.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else E.call(this)};var p=o.utcOffset;o.utcOffset=function(t,m){var C=this.$utils().u;if(C(t))return this.$u?0:C(this.$offset)?p.call(this):this.$offset;if(typeof t=="string"&&(t=function(u){u===void 0&&(u="");var v=u.match(a);if(!v)return null;var b=(""+v[0]).match(l)||["-",0,0],x=b[0],L=60*+b[1]+ +b[2];return L===0?0:x==="+"?L:-L}(t),t===null))return this;var M=Math.abs(t)<=16?60*t:t,_=this;if(m)return _.$offset=M,_.$u=t===0,_;if(t!==0){var Y=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(_=this.local().add(M+Y,e)).$offset=M,_.$x.$localOffset=Y}else _=this.utc();return _};var $=o.format;o.format=function(t){var m=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return $.call(this,m)},o.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},o.isUTC=function(){return!!this.$u},o.toISOString=function(){return this.toDate().toISOString()},o.toString=function(){return this.toDate().toUTCString()};var S=o.toDate;o.toDate=function(t){return t==="s"&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():S.call(this)};var y=o.diff;o.diff=function(t,m,C){if(t&&this.$u===t.$u)return y.call(this,t,m,C);var M=this.local(),_=i(t).local();return y.call(M,_,m,C)}}})})(zt);var Xt=zt.exports;const te=rt(Xt);var Lt={exports:{}};(function(f,n){(function(e,a){f.exports=a()})(st,function(){var e={year:0,month:1,day:2,hour:3,minute:4,second:5},a={};return function(l,h,r){var i,o=function($,S,y){y===void 0&&(y={});var t=new Date($),m=function(C,M){M===void 0&&(M={});var _=M.timeZoneName||"short",Y=C+"|"+_,u=a[Y];return u||(u=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:C,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:_}),a[Y]=u),u}(S,y);return m.formatToParts(t)},T=function($,S){for(var y=o($,S),t=[],m=0;m<y.length;m+=1){var C=y[m],M=C.type,_=C.value,Y=e[M];Y>=0&&(t[Y]=parseInt(_,10))}var u=t[3],v=u===24?0:u,b=t[0]+"-"+t[1]+"-"+t[2]+" "+v+":"+t[4]+":"+t[5]+":000",x=+$;return(r.utc(b).valueOf()-(x-=x%1e3))/6e4},E=h.prototype;E.tz=function($,S){$===void 0&&($=i);var y=this.utcOffset(),t=this.toDate(),m=t.toLocaleString("en-US",{timeZone:$}),C=Math.round((t-new Date(m))/1e3/60),M=r(m).$set("millisecond",this.$ms).utcOffset(15*-Math.round(t.getTimezoneOffset()/15)-C,!0);if(S){var _=M.utcOffset();M=M.add(y-_,"minute")}return M.$x.$timezone=$,M},E.offsetName=function($){var S=this.$x.$timezone||r.tz.guess(),y=o(this.valueOf(),S,{timeZoneName:$}).find(function(t){return t.type.toLowerCase()==="timezonename"});return y&&y.value};var p=E.startOf;E.startOf=function($,S){if(!this.$x||!this.$x.$timezone)return p.call(this,$,S);var y=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return p.call(y,$,S).tz(this.$x.$timezone,!0)},r.tz=function($,S,y){var t=y&&S,m=y||S||i,C=T(+r(),m);if(typeof $!="string")return r($).tz(m);var M=function(v,b,x){var L=v-60*b*1e3,A=T(L,x);if(b===A)return[L,b];var F=T(L-=60*(A-b)*1e3,x);return A===F?[L,A]:[v-60*Math.min(A,F)*1e3,Math.max(A,F)]}(r.utc($,t).valueOf(),C,m),_=M[0],Y=M[1],u=r(_).utcOffset(Y);return u.$x.$timezone=m,u},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function($){i=$}}})})(Lt);var ee=Lt.exports;const ne=rt(ee);var Ht={exports:{}};(function(f,n){(function(e,a){f.exports=a()})(st,function(){return function(e,a){var l=a.prototype,h=l.format;l.format=function(r){var i=this,o=this.$locale();if(!this.isValid())return h.bind(this)(r);var T=this.$utils(),E=(r||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(p){switch(p){case"Q":return Math.ceil((i.$M+1)/3);case"Do":return o.ordinal(i.$D);case"gggg":return i.weekYear();case"GGGG":return i.isoWeekYear();case"wo":return o.ordinal(i.week(),"W");case"w":case"ww":return T.s(i.week(),p==="w"?1:2,"0");case"W":case"WW":return T.s(i.isoWeek(),p==="W"?1:2,"0");case"k":case"kk":return T.s(String(i.$H===0?24:i.$H),p==="k"?1:2,"0");case"X":return Math.floor(i.$d.getTime()/1e3);case"x":return i.$d.getTime();case"z":return"["+i.offsetName()+"]";case"zzz":return"["+i.offsetName("long")+"]";default:return p}});return h.bind(this)(E)}}})})(Ht);var ae=Ht.exports;const se=rt(ae);var At={exports:{}};(function(f,n){(function(e,a){f.exports=a(Pt)})(st,function(e){function a(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var l=a(e),h={name:"id",weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),weekStart:1,formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},ordinal:function(r){return r+"."}};return l.default.locale(h,null,!0),h})})(At);var re=At.exports;const ie=rt(re);function oe(f){let n,e,a,l,h,r,i,o,T,E,p,$,S,y,t,m,C,M,_;p=new Zt({});const Y=f[1].default,u=jt(Y,f,f[0],null);return M=new Qt({}),{c(){n=k("meta"),e=k("meta"),a=k("meta"),l=k("meta"),h=k("meta"),r=k("meta"),i=k("meta"),o=k("meta"),T=k("meta"),E=I(),bt(p.$$.fragment),$=I(),S=k("div"),y=k("div"),t=k("div"),m=k("div"),u&&u.c(),C=I(),bt(M.$$.fragment),this.h()},l(v){const b=Ct("svelte-s1e3q5",document.head);n=D(b,"META",{property:!0,content:!0}),e=D(b,"META",{property:!0,content:!0}),a=D(b,"META",{name:!0,content:!0}),l=D(b,"META",{property:!0,content:!0}),h=D(b,"META",{property:!0,content:!0}),r=D(b,"META",{property:!0,content:!0}),i=D(b,"META",{property:!0,content:!0}),o=D(b,"META",{property:!0,content:!0}),T=D(b,"META",{property:!0,content:!0}),b.forEach(d),E=j(v),$t(p.$$.fragment,v),$=j(v),S=D(v,"DIV",{class:!0});var x=H(S);y=D(x,"DIV",{class:!0});var L=H(y);t=D(L,"DIV",{class:!0});var A=H(t);m=D(A,"DIV",{class:!0});var F=H(m);u&&u.l(F),F.forEach(d),A.forEach(d),L.forEach(d),C=j(x),$t(M.$$.fragment,x),x.forEach(d),this.h()},h(){s(n,"property","fb:app_id"),s(n,"content","1284186342222033"),s(e,"property","og:url"),s(e,"content","https://masturfyc.github.io"),s(a,"name","description"),s(a,"content","Mastur FYC Home page"),s(l,"property","og:image:type"),s(l,"content","image/jpeg"),s(h,"property","og:image:width"),s(h,"content","1200"),s(r,"property","og:image:height"),s(r,"content","630"),s(i,"property","og:description"),s(i,"content","Mastur FYC  Home page"),s(o,"property","og:type"),s(o,"content","website"),s(T,"property","og:title"),s(T,"content","Mastur FYC Home page"),s(m,"class","my-div svelte-1mlolkr"),s(t,"class","container is-align-self-flex-start"),s(y,"class","hero-body"),s(S,"class","hero is-fullheight-with-navbar")},m(v,b){g(document.head,n),g(document.head,e),g(document.head,a),g(document.head,l),g(document.head,h),g(document.head,r),g(document.head,i),g(document.head,o),g(document.head,T),B(v,E,b),yt(p,v,b),B(v,$,b),B(v,S,b),g(S,y),g(y,t),g(t,m),u&&u.m(m,null),g(S,C),yt(M,S,null),_=!0},p(v,[b]){u&&u.p&&(!_||b&1)&&Ft(u,Y,v,v[0],_?Nt(Y,v[0],b,null):Bt(v[0]),null)},i(v){_||(lt(p.$$.fragment,v),lt(u,v),lt(M.$$.fragment,v),_=!0)},o(v){ut(p.$$.fragment,v),ut(u,v),ut(M.$$.fragment,v),_=!1},d(v){v&&(d(E),d($),d(S)),d(n),d(e),d(a),d(l),d(h),d(r),d(i),d(o),d(T),Mt(p,v),u&&u.d(v),Mt(M)}}}function le(f,n,e){let{$$slots:a={},$$scope:l}=n;return nt.locale(ie),nt.extend(ne),nt.extend(te),nt.extend(se),f.$$set=h=>{"$$scope"in h&&e(0,l=h.$$scope)},[l,a]}class pe extends ft{constructor(n){super(),dt(this,n,le,oe,ct,{})}}export{pe as component,me as universal};