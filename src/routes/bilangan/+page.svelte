<script>
	import { numberToText } from '$lib/number-to-string';
	import { cardNumber, format, getNumber } from '$lib/format';
	import wretch from 'wretch';

	let value = '11000000000000000';

	let printSuccess = {
		message: ''
	};

	const printNota = () => {
		const printApiUrl = import.meta.env.VITE_PRINT_API;
		wretch(`${printApiUrl}/print-nota`)
			.headers({
				'Content-Type': 'application/json',
				Accept: 'application/json'
			})
			.post({
				id: 3,
				name: 'Nota Order',
				products: [
					{
						id: 1,
						name: 'Minyak goreng',
						slNo: '1234567890',
						address: 'Rt. 14/05 Ds. Plumbon'
					}
				]
			})
			.json((json) => {
				printSuccess = json;
			});
	};

	$: bilangan = numberToText(getNumber(value).toString())?.trim();
</script>

<svelte:head>
	<meta property="fb:app_id" content="1284186342222033" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://masturfyc.github.io/bilangan" />
	<meta property="og:title" content="Bilangan" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:description" content="Mengubah angka menjadi bilangan" />
	<title>Bilangan</title>
	<meta name="description" content="Mengubah angka menjadi bilangan" />
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
			<div class="block">
				<code>💥 {bilangan}</code>
			</div>
		</div>
	</div>
	<!-- <div>
		<button on:click={() => printNota()}>Print Nota</button>
</div> -->
<!-- <div>
		{printSuccess.message}
</div>	 -->
</section>
<!-- 
<style lang="scss">
  section {
    max-width: 420px;
	min-width: 280px;
  }
</style> -->
