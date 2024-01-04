import{s as c,f as i,g as r,u as d,j as p,i as l,x as o,d as u}from"../chunks/scheduler.ee114aae.js";import{S as m,i as k}from"../chunks/index.81b31921.js";function g(n){let e,t=`<div class="title">Run ssh connection in background</div> <div class="content"><p>Koneksi yang aman antar komputer baik intranet atau local
      sebaiknya menggunakan <code>ssh connection</code>, apalagi untuk
      koneksi database karena <code>ssh</code> sudah menggunakan TLS enkripsi.</p> <p>Berikut ini adalah bagaimana caranya koneksi remote komputer menggunakan <code>ssh</code>
      sehingga koneksi tersebut bisa berjalan secara background:</p> <p class="is-size-4">Contoh Koneksi postgresql di remote server dengan <code>ssh</code></p> <pre>$ ssh -f -L 1111:localhost:5432 -N user@example.com</pre> <p><code>-f</code> force background</p> <p><code>-L</code> opsion setting local computer</p> <p><code>1111</code> port yang akan digunakan di local</p> <p><code>localhost</code> local computer</p> <p><code>5432</code> remote port</p> <p><code>-N</code> perintah dijalankan di local, bukan di remote computer</p> <p><code>user@example.com</code> remote computer</p></div>`;return{c(){e=i("section"),e.innerHTML=t,this.h()},l(a){e=r(a,"SECTION",{class:!0,"data-svelte-h":!0}),d(e)!=="svelte-15s4edp"&&(e.innerHTML=t),this.h()},h(){p(e,"class","svelte-1dw4ok8")},m(a,s){l(a,e,s)},p:o,i:o,o,d(a){a&&u(e)}}}class v extends m{constructor(e){super(),k(this,e,null,g,c,{})}}export{v as component};