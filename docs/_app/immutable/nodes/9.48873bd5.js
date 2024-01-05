import{s as d,f as n,g as r,r as c,j as p,i as l,w as t,d as w}from"../chunks/scheduler.0ae656ff.js";import{S as m,i as h}from"../chunks/index.e58d7550.js";function u(s){let e,o=`<div class="title is-family-secondary">php8.2-fpm Error 13 (Permission denied / File not found)</div> <div class="content"><p>Error seperti ini bisanya terjadi karena <code>root</code> site berada di user yang berbeda
			dengan user <code>www-data</code>, sebagai contoh lokasi <code>root</code> berada di
			<code>/home/<b>john</b>/site</code>.</p> <p>Maka anda harus menambahkan user <code>www-data</code> ke dalam group <code>john</code>.
			Caranya adalah sebagai berikut:</p> <ol><li>Buka terminal, ketikkan: <pre>$ sudo gpasswd -a www-data john</pre></li> <li>Pastikan <code>www-data</code> dapat mengakses path <code>/home/john/site</code> <pre>$ sudo -u www-data stat /home/john/site</pre></li> <li>Jika <code>www-data</code> tidak dapat mengakses path tersebut maka harus dibuat aksesnya
				<pre>$ sudo chown www-data:www-data /home/john/site -R</pre></li> <li>Edit file <code>/etc/nginx/nginx.conf</code> <pre>...<br/>user www-data;<br/>...</pre></li> <li>Edit file <code>/etc/php/8.2/fpm/pool.d/www.conf</code> <pre>user = www-data
group = www-data
listen.owner = www-data
listen.group = www-data
listen.mode = 0660</pre></li> <li>Setelah itu restart <code>nginx</code> dan <code>php8.2-fpm</code><br/> <pre>$ sudo systemctl restart nginx
$ sudo systemctl restart php8.2-fpm</pre></li></ol> <p>Terima kasih semoga bermanfaat.</p></div>`;return{c(){e=n("section"),e.innerHTML=o,this.h()},l(a){e=r(a,"SECTION",{class:!0,"data-svelte-h":!0}),c(e)!=="svelte-168ea2c"&&(e.innerHTML=o),this.h()},h(){p(e,"class","container is-max-desktop")},m(a,i){l(a,e,i)},p:t,i:t,o:t,d(a){a&&w(e)}}}class k extends m{constructor(e){super(),h(this,e,null,u,d,{})}}export{k as component};
