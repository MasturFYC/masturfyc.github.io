<section class="container is-max-desktop">
	<div class="title is-family-secondary">Run ssh connection in background</div>
	<div class="content">
		<p>
			Koneksi yang aman antar komputer baik intranet atau local
      sebaiknya menggunakan <code>ssh connection</code>, apalagi untuk
      koneksi database karena <code>ssh</code> sudah menggunakan TLS enkripsi.
		</p>
    <p>Berikut ini adalah bagaimana caranya koneksi remote komputer menggunakan <code>ssh</code>
      sehingga koneksi tersebut bisa berjalan secara background:
    </p>
    <p class="subtitle is-family-secondary">Contoh Koneksi postgresql di remote server dengan <code>ssh</code></p>
    <pre>$ ssh -f -L 1111:localhost:5432 -N user@example.com</pre>
    <p><code>-f</code> force background</p>
    <p><code>-L</code> opsion setting local computer</p>
    <p><code>1111</code> port yang akan digunakan di local</p>
    <p><code>localhost</code> local computer</p>
    <p><code>5432</code> remote port</p>
    <p><code>-N</code> perintah dijalankan di local, bukan di remote computer</p>
    <p><code>user@example.com</code> remote computer</p>
	</div>
</section>
