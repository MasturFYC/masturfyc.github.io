<script lang="ts">
//	import { page } from '$app/stores';
//	import welcome from '$lib/images/svelte-welcome.webp';
//	import welcome_fallback from '$lib/images/svelte-welcome.png';
//	import { user } from '$lib/store';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" 					 content="Kopma Unwir app" />
  <meta property="fb:app_id"          content="185084348558317" /> 
  <meta property="og:type"            content="article" /> 
  <meta property="og:url"             content="https://sapulidi.site" /> 
  <meta property="og:title"           content="Introducing our New Site" /> 
  <meta property="og:image"           content="https://serayunews.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-25-at-13.32.43-1024x683.jpeg" /> 
  <meta property="og:image:width"     content="640" /> 
  <meta property="og:image:height"    content="480" /> 
  <meta property="og:description"    content="https://sapulidi.site" />  
</svelte:head>

<div class="sec-blue">
  <div class="container flex-row flex-wrap gap-x-20">
    <div class="flex-1 w-min-300">
    	<h3>
        Sapulidi
    	</h3>
      <div class="mb-10">
        Apa itu Sapulidi? Sapulidi adalah merk dagang yang digunakan oleh pemilik
        usaha sebagai nama atau simbol yang diasosiasikan dengan produk/jasa dan mempunyai
        arti psikologis/asosiasi.
      </div>
      <div class="mb-10">
        Sapulidi adalah salah satu jenis hak kekayaan intelektual yang terdiri dari tanda, desain, atau ekspresi yang dapat dikenali untuk mengidentifikasi produk atau layanan jasa yang didistribusikan ke masyarakat umum atau pasar. Merek dagang inilah yang membuat suatu produk atau jasa menjadi unik dan berbeda dengan bisnis sejenis lainnya, serta membuat pembeli atau pelanggan lebih mudah mengenali suatu produk.
      </div>
      <div class="mb-10">
        Perusahaan ini terdaftar dengan merek dagang yang memiliki kekuatan hukum. Sehingga tidak ada pihak lain yang dapat menggunakan nama/tanda/simbol yang sama dengan apa yang sudah digunakan. Hal ini yang membuat merek dagang penting untuk dimiliki. Menurut Undang-Undang Nomor 15 Tahun 2001 tentang Merek, "<i>Merek Dagang adalah Merek yang digunakan pada barang yang diperdagangkan oleh seseorang atau beberapa orang secara bersama-sama atau badan hukum untuk membedakan barang-barang sejenis lainnya</i>".
      </div>
    </div>
  <div class="flex-1 w-min-300" style={"background-image: url('https://serayunews.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-25-at-13.32.43-1024x683.jpeg');background-position-y: center;background-size: cover;"}>{''}</div>
  </div>
</div>
<div class="sec-ligth">
  <div class="container flex-row flex-wrap gap-x-20">
    <div class="flex-1 w-min-300" style={"background-image: url('https://www.tempatwisata.pro/users_media/3091/sapu1.jpg');background-position-y: center;background-size: cover;"}>{''}</div>
    <div class="flex-1 w-min-300">
      <h3>Merek Dagang yang Tidak Bisa Didaftarkan</h3>
      <ul>
        <li>Bertentangan dengan ideologi negara, peraturan perundang-undangan, moralitas, agama, kesusilaan atau ketertiban umum.
        </li>
        <li>Sama dengan, berkaitan dengan, atau hanya menyebut barang atau jasa yang dimohonkan pendaftarannya.
        </li>
        <li>Terdapat unsur yang dapat menyesatkan masyarakat mengenai asal, kualitas, jenis, ukuran, macam, tujuan penggunaan barang atau jasa yang dimohonkan pendaftarannya, atau merupakan nama varietas tanaman yang dilindungi untuk barang atau jasa yang sejenis. 
        </li>
        <li>Terdapat keterangan yang tidak sesuai dengan kualitas atau manfaat dari barang atau jasa yang diproduksi.</li>
        <li>
          Tidak memiliki hal yang dapat menjadi pembeda dari barang atau jasa lainnya.
          Merupakan nama umum atau lambang milik umum.
        </li>
      </ul>
    </div>
  </div>
</div>
<style lang="scss">
.container {
  padding: 10px;
}
.sec-blue {
  background: #222;
  padding: 20px;
  color: #ececec;
}
.sec-ligth {
  background: #ddd;
  padding: 20px;
  color: #000;
}
.w-min-300 {
  min-width: 300px;
}
.flex-wrap {
  flex-wrap: wrap;
}
.gap-x-20 {
  column-gap: 200px;
}
</style>
