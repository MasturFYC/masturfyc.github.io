<script>
	import { numberToText } from '$lib/number-to-string';
	import { cardNumber, format, getNumber } from '$lib/format';

	let value = '11000000000000000';

	$: bilangan = numberToText(getNumber(value).toString())?.trim();
</script>

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
