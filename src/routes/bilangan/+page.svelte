<script>
	import { numberToText } from '$lib/number-to-string';
	import { cardNumber, format, getNumber } from '$lib/format';

	let value = '11000000000000000';

	$: bilangan = numberToText(getNumber(value).toString())?.trim();
</script>

<svelte:head>
	<meta property='fb:app_id' content='1284186342222033' />
	<meta property='og:type' content='article' />
	<meta property='og:url' content='https://masturfyc.github.io/bilangan' />
	<meta property='og:title' content='Bilangan' />
	<meta property='og:image:url' content='https://masturfyc.github.io/background.jpg' />
	<meta property='og:image:secure_url' content='https://masturfyc.github.io/background.jpg' />
	<meta property='og:image:secure' content='https://masturfyc.github.io/background.jpg' />
	<meta property='og:image:type' content='image/jpeg' />
	<meta property='og:image:width' content='445' />
	<meta property='og:image:height' content='563' />
	<meta property='og:description' content='Mengubah angka menjadi bilangan' />
	<title>Bilangan</title>
	<meta name='description' content='Mengubah angka menjadi bilangan' />
</svelte:head>

<section>
	<div class="title block">Bilangan</div>
	<div class="columns">
		<div class="column is-half">
			<div class="block">
				Setelah sekian lama akhirnya saya bisa membuat penyebutan untuk bilangan sampai 11 ribu T.
				😀
			</div>
			<label class="label" aria-label="Angka">
				<input class="input" type="text" use:format={cardNumber} bind:value />
			</label>
			<div class="block mt-5">Wanna try? Change the number.</div>
			<div class="block p-4 has-background-light">
				💥 <code class="has-text-grey-darker">{bilangan}</code>
			</div>
		</div>
	</div>
</section>
<!-- 
<style lang="scss">
  section {
    max-width: 420px;
	min-width: 280px;
  }
</style> -->
