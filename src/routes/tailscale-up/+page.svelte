<section class="container is-max-desktop">
	<div class="title is-family-secondary">Akses Komputer Jarak Jauh menggunakan TAILSCALE</div>
	<div class="content">
		<p>
			Untuk dapat mengakses komputer kantor, rumah, atau device pribadi dari luar jaringan yang kita
			miliki tentu membutuhkan router / PVN yang bisa diakses melalui internet dari provider yang
			berbayar dan mahal tentunya.
		</p>
		<p>
			Tapi tenang saja, sekarang ada provider yang memungkin anda bisa melakukan itu tanpa berbayar
			sedikitpun alias gratis dan tidak harus menggunakan ip static public. Berikut ini adalah
			langkah-langkah yang anda butuhkan untuk mengakses device yang anda miliki lewat jaringan
			internet:
		</p>
		<p>
			Download key ring tailscale sesuai dengan distro yang anda pasang di sistem, kebetulan saya
			menggunakan distro <code>debian bookworm</code>, jadi saya download key ring
			<code>tailscale</code> dari debian menggunakan terminal.
		</p>
		<pre>$ curl -fsSL https://pkgs.tailscale.com/stable/debian/bookworm.noarmor.gpg | sudo tee /usr/share/keyrings/tailscale-archive-keyring.gpg >/dev/null</pre>
		<p>Simpan PPA dan key ring ke dalam list update system:</p>
		<pre>$ curl -fsSL https://pkgs.tailscale.com/stable/debian/bookworm.tailscale-keyring.list | sudo tee /etc/apt/sources.list.d/tailscale.list</pre>
		<p>Update sistem</p>
		<pre>$ sudo apt-get update</pre>
		<p>Instal tailscale</p>
		<pre>$ sudo apt-get install tailscale</pre>
		<p>
			Selesai install, anda akan diberi link oleh tailscale untuk login ulang dan autentitkasi, klik
			link tersebut, ini contoh linknya.
		</p>
		<pre>https://login.tailscale.com/a/7d21xxxxxxxx</pre>
		<p>
			**) Lanjutkan dengan mengijinkan tailscale untuk jalan dalam sistem service di device yang
			ingin anda scale up setelah anda login dan autentikasi.
		</p>
		<pre>$ sudo tailscale up</pre>
		<p>
			Untuk scale up device lainnya anda hanya perlu mengetikkan baris perintah di bawah ini di
			terminal, dan ulangi perintah mulai **):
		</p>
		<pre>$ curl -fsSL https://tailscale.com/install.sh | sh</pre>
		<p>
			Jika semua proses di atas dapat anda lewati, selamat anda telah sukses dan bisa mengakses
			device yang anda scale up dari manapun, semoga bermanfaat.
		</p>
	</div>
</section>
