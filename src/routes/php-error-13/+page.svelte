<section class="container is-max-desktop">
	<div class="title is-family-secondary">php8.2-fpm Error 13 (Permission denied / File not found)</div>
	<div class="content">
		<p>
			Error seperti ini bisanya terjadi karena <code>root</code> site berada di user yang berbeda
			dengan user <code>www-data</code>, sebagai contoh lokasi <code>root</code> berada di
			<code>/home/<b>john</b>/site</code>.
		</p>
		<p>
			Maka anda harus menambahkan user <code>www-data</code> ke dalam group <code>john</code>.
			Caranya adalah sebagai berikut:
		</p>
		<ol>
			<li>Buka terminal, ketikkan: <pre>$ sudo gpasswd -a www-data john</pre></li>
			<li>
				Pastikan <code>www-data</code> dapat mengakses path <code>/home/john/site</code>
				<pre>$ sudo -u www-data stat /home/john/site</pre>
			</li>
			<li>
				Jika <code>www-data</code> tidak dapat mengakses path tersebut maka harus dibuat aksesnya
				<pre>$ sudo chown www-data:www-data /home/john/site -R</pre>
			</li>
      <li>Edit file <code>/etc/nginx/nginx.conf</code>
      <pre>...<br/>user www-data;<br />...</pre></li>      

      <li>Edit file <code>/etc/php/8.2/fpm/pool.d/www.conf</code>
      <pre>user = www-data
group = www-data
listen.owner = www-data
listen.group = www-data
listen.mode = 0660</pre></li>
			<li>Setelah itu restart <code>nginx</code> dan <code>php8.2-fpm</code><br/>
        <pre>$ sudo systemctl restart nginx
$ sudo systemctl restart php8.2-fpm</pre>
      </li>
		</ol>
    <p>Terima kasih semoga bermanfaat.</p>
	</div>
</section>